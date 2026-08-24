import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  AGENT_ENV,
  AGENT_NAMES,
  DISABLED_MODELS,
  MODEL_PRICING,
  SUPERSEDED_MODELS,
  getModelBaseId,
  isModelId,
} from "../eval-attempts/metadata";

interface CriterionResult {
  name: string;
  score: number;
  max: number;
  notes: string;
}

interface AttemptResult {
  id: string;
  modelName: string;
  modelBaseId: string;
  attemptNumber: number;
  totalScore: number;
  maxScore: number;
  percentage: number;
  agentEnvironment: string;
  cost: number | null;
  criteria: CriterionResult[];
}

interface ModelFamilyAverage {
  modelName: string;
  modelBaseId: string;
  averagePercentage: number;
  attemptCount: number;
  averageScore: number;
  averageMaxScore: number;
  agentEnvironment: string;
  pricing?: { input: number; output: number };
  averageCost: number | null;
  totalCost: number | null;
}

interface ProcessedResults {
  generatedAt: string;
  totalAttempts: number;
  results: AttemptResult[];
  modelAverages: ModelFamilyAverage[];
  supersededModels: Record<string, string>;
}

// Slim public payload served at https://10xbench.ai/api/leaderboard.json,
// consumed by @przeprogramowani/10x-cli. Preprocessed for display: superseded
// model families are dropped and only the top 10 remain, so consumers render
// it as-is without any filtering logic. Additive changes are fine on the same
// schemaVersion; breaking shape changes must bump it (published CLI versions
// are pinned to the shape they shipped with).
const LEADERBOARD_SCHEMA_VERSION = 1;
const LEADERBOARD_TOP_N = 10;

interface LeaderboardPayload {
  schemaVersion: number;
  generatedAt: string;
  totalAttempts: number;
  /** Latest-only family count before the top-N cut. */
  totalModels: number;
  leaderboard: ModelFamilyAverage[];
}

// Extract model name from directory name
function extractModelInfo(dirname: string): {
  modelName: string;
  attemptNumber: number;
} {
  const match = dirname.match(/^([a-z0-9.-]+)-attempt-(\d+)$/);
  if (!match) {
    throw new Error(`Invalid directory name: ${dirname}`);
  }

  const attemptNumber = parseInt(match[2], 10);
  const baseId = getModelBaseId(dirname);
  
  const MAPPINGS: Record<string, string> = {
    "qwen-3.6": "Qwen 3.6",
  };

  const modelName = MAPPINGS[baseId] || (isModelId(baseId) ? AGENT_NAMES[baseId] : match[1]);
  return {modelName, attemptNumber};
}

function parseCSVLine(line: string): string[] {
  const fields: string[] = [];
  let field = "";
  let quoted = false;

  for (let i = 0; i < line.length; i += 1) {
    const character = line[i];
    if (character === '"') {
      if (quoted && line[i + 1] === '"') {
        field += '"';
        i += 1;
      } else {
        quoted = !quoted;
      }
    } else if (character === "," && !quoted) {
      fields.push(field);
      field = "";
    } else {
      field += character;
    }
  }

  fields.push(field);
  return fields;
}

// Parse CSV file - handle both 3-column and 2-column formats
function parseCSV(csvContent: string): CriterionResult[] {
  const lines = csvContent.trim().split("\n");
  const results: CriterionResult[] = [];

  // Skip header
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const fields = parseCSVLine(line);
    if (fields.length >= 4) {
      const [criterion, scoreStr, maxStr, ...noteParts] = fields;
      results.push({
        name: criterion.trim(),
        score: scoreStr.trim() === "N/A" ? 0 : parseFloat(scoreStr.trim()),
        max: maxStr.trim() === "N/A" ? 1 : parseFloat(maxStr.trim()),
        notes: noteParts.join(",").trim(),
      });
    } else if (fields.length >= 3) {
      const [criterion, scoreStr, ...noteParts] = fields;
      results.push({
        name: criterion.trim(),
        score: scoreStr.trim() === "N/A" ? 0 : parseFloat(scoreStr.trim()),
        max: 1,
        notes: noteParts.join(",").trim(),
      });
    }
  }

  return results;
}

// Main processing function
async function processResults(): Promise<void> {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const projectRoot = path.resolve(__dirname, "..");
  const evalResultsDir = path.resolve(projectRoot, "eval-results");
  const outputDir = path.join(projectRoot, "website", "src", "data");

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, {recursive: true});
  }

  // Read all attempt directories, excluding disabled model families
  const attemptDirs = fs.readdirSync(evalResultsDir).filter((f) => {
    const fullPath = path.join(evalResultsDir, f);
    return (
      fs.statSync(fullPath).isDirectory() &&
      !DISABLED_MODELS.has(getModelBaseId(f))
    );
  });

  const results: AttemptResult[] = [];

  // Process each attempt
  for (const dir of attemptDirs) {
    // Try both singular and plural filename variants
    let csvPath = path.join(evalResultsDir, dir, "eval-result.csv");
    if (!fs.existsSync(csvPath)) {
      csvPath = path.join(evalResultsDir, dir, "eval-results.csv");
    }

    if (!fs.existsSync(csvPath)) {
      console.warn(`No CSV file found in ${dir}, skipping...`);
      continue;
    }

    const csvContent = fs.readFileSync(csvPath, "utf-8");
    const criteria = parseCSV(csvContent);

    const {modelName, attemptNumber} = extractModelInfo(dir);

    // Calculate total score and max score (excluding Task completion time, Test run, and Penalty)
    let totalScore = 0;
    let maxScore = 0;

    const excludedCriteria = new Set(["Task completion time", "Test run", "Penalty", "API cost"]);
    const scoredCriteria = criteria.filter(
      (c) => !excludedCriteria.has(c.name),
    );

    for (const criterion of scoredCriteria) {
      totalScore += criterion.score;
      maxScore += criterion.max;
    }

    // Subtract penalty if present (Penalty row score is deducted from total)
    const penaltyRow = criteria.find((c) => c.name === "Penalty");
    if (penaltyRow) {
      totalScore -= penaltyRow.score;
    }

    const percentage = maxScore > 0 ? (totalScore / maxScore) * 100 : 0;

    // Extract USD cost from the "API cost" row (e.g. "$0.2897 (in ... )").
    const costRow = criteria.find((c) => c.name === "API cost");
    const costMatch = costRow?.notes.match(/\$([0-9]+(?:\.[0-9]+)?)/);
    const cost = costMatch ? parseFloat(costMatch[1]) : null;

    results.push({
      id: dir,
      modelName,
      modelBaseId: getModelBaseId(dir),
      attemptNumber,
      totalScore,
      maxScore,
      percentage,
      agentEnvironment: (() => { const id = getModelBaseId(dir); return isModelId(id) ? AGENT_ENV[id] : "Unknown"; })(),
      cost,
      criteria,
    });
  }

  // Sort by percentage (highest first)
  results.sort((a, b) => b.percentage - a.percentage);

  // Calculate model family averages
  const modelAveragesMap = new Map<
    string,
    {
      totalScore: number;
      totalMaxScore: number;
      totalPercentage: number;
      count: number;
      costSum: number;
      costCount: number;
    }
  >();

  results.forEach((result) => {
    if (!modelAveragesMap.has(result.modelName)) {
      modelAveragesMap.set(result.modelName, {
        totalScore: 0,
        totalMaxScore: 0,
        totalPercentage: 0,
        count: 0,
        costSum: 0,
        costCount: 0,
      });
    }
    const stats = modelAveragesMap.get(result.modelName)!;
    stats.totalScore += result.totalScore;
    stats.totalMaxScore += result.maxScore;
    stats.totalPercentage += result.percentage;
    stats.count += 1;
    if (result.cost !== null) {
      stats.costSum += result.cost;
      stats.costCount += 1;
    }
  });

  const modelAverages: ModelFamilyAverage[] = Array.from(
    modelAveragesMap.entries(),
  ).map(([modelName, stats]) => {
    const matchingResult = results.find((r) => r.modelName === modelName);
    return {
      modelName,
      modelBaseId: matchingResult
        ? getModelBaseId(matchingResult.id)
        : modelName,
      averageScore: stats.totalScore / stats.count,
      averageMaxScore: stats.totalMaxScore / stats.count,
      averagePercentage: stats.totalPercentage / stats.count,
      attemptCount: stats.count,
      agentEnvironment: matchingResult?.agentEnvironment ?? "Unknown",
      pricing: (() => { const id = matchingResult ? getModelBaseId(matchingResult.id) : modelName; return isModelId(id) ? MODEL_PRICING[id] : undefined; })(),
      averageCost: stats.costCount > 0 ? stats.costSum / stats.costCount : null,
      totalCost: stats.costCount > 0 ? stats.costSum : null,
    };
  });

  // Sort model averages by percentage (highest first)
  modelAverages.sort((a, b) => b.averagePercentage - a.averagePercentage);

  const output: ProcessedResults = {
    generatedAt: new Date().toISOString(),
    totalAttempts: results.length,
    results,
    modelAverages,
    supersededModels: Object.fromEntries(
      Object.entries(SUPERSEDED_MODELS) as [string, string][],
    ),
  };

  // Write output
  const outputPath = path.join(outputDir, "results.json");
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

  console.log(`✓ Generated ${outputPath}`);

  // Write the slim public leaderboard endpoint (deployed as a static file)
  const leaderboardDir = path.join(projectRoot, "website", "public", "api");
  if (!fs.existsSync(leaderboardDir)) {
    fs.mkdirSync(leaderboardDir, {recursive: true});
  }

  const supersededIds = new Set(Object.keys(SUPERSEDED_MODELS));
  const latestOnly = modelAverages.filter((m) => !supersededIds.has(m.modelBaseId));
  const leaderboardPayload: LeaderboardPayload = {
    schemaVersion: LEADERBOARD_SCHEMA_VERSION,
    generatedAt: output.generatedAt,
    totalAttempts: output.totalAttempts,
    totalModels: latestOnly.length,
    leaderboard: latestOnly.slice(0, LEADERBOARD_TOP_N),
  };

  const leaderboardPath = path.join(leaderboardDir, "leaderboard.json");
  fs.writeFileSync(leaderboardPath, JSON.stringify(leaderboardPayload, null, 2));

  console.log(`✓ Generated ${leaderboardPath}`);

  // Print model family averages
  console.log("\nModel Family Averages:");
  modelAverages.forEach((avg) => {
    console.log(
      `  ${avg.modelName}: ${avg.averageScore.toFixed(1)}/${avg.averageMaxScore.toFixed(1)} (${avg.averagePercentage.toFixed(1)}%) [${avg.attemptCount} attempt(s)]`,
    );
  });
}

// Run if executed as main module
processResults().catch((error) => {
  console.error("Error processing results:", error);
  process.exit(1);
});
