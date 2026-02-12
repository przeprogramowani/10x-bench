import fs from "fs";
import path from "path";
import {
  AGENT_ENV,
  AGENT_NAMES,
  DISABLED_MODELS,
  MODEL_PRICING,
  getModelBaseId,
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
  attemptNumber: number;
  totalScore: number;
  maxScore: number;
  percentage: number;
  agentEnvironment: string;
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
}

interface ProcessedResults {
  generatedAt: string;
  totalAttempts: number;
  results: AttemptResult[];
  modelAverages: ModelFamilyAverage[];
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
  const modelName = AGENT_NAMES[baseId] || match[1];
  return {modelName, attemptNumber};
}

// Parse CSV file - handle both 3-column and 2-column formats
function parseCSV(csvContent: string): CriterionResult[] {
  const lines = csvContent.trim().split("\n");
  const results: CriterionResult[] = [];

  // Skip header
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Try parsing 3-column format: Criterion,Score,Max,Notes
    let match = line.match(/^"?([^",]+)"?,(.+?),(.+?),(.*)$/);

    if (!match) {
      // Try 2-column format: Criterion,Score,Notes (assume Max=1)
      match = line.match(/^"?([^",]+)"?,(.+?),(.*)$/);
      if (match) {
        const [, criterion, scoreStr, notes] = match;
        results.push({
          name: criterion.trim(),
          score: scoreStr.trim() === "N/A" ? 0 : parseFloat(scoreStr.trim()),
          max: 1,
          notes: notes.trim(),
        });
        continue;
      }
    }

    if (match) {
      const [, criterion, scoreStr, maxStr, notes] = match;
      results.push({
        name: criterion.trim(),
        score: scoreStr.trim() === "N/A" ? 0 : parseFloat(scoreStr.trim()),
        max: maxStr.trim() === "N/A" ? 1 : parseFloat(maxStr.trim()),
        notes: notes.trim(),
      });
    }
  }

  return results;
}

// Main processing function
async function processResults(): Promise<void> {
  const projectRoot = path.resolve(
    path.dirname(new URL(import.meta.url).pathname),
    "..",
  );
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

    // Calculate total score and max score (excluding Task completion time)
    let totalScore = 0;
    let maxScore = 0;

    const scoredCriteria = criteria.filter(
      (c) => c.name !== "Task completion time" && c.name !== "Test run",
    );

    for (const criterion of scoredCriteria) {
      totalScore += criterion.score;
      maxScore += criterion.max;
    }

    const percentage = maxScore > 0 ? (totalScore / maxScore) * 100 : 0;

    results.push({
      id: dir,
      modelName,
      attemptNumber,
      totalScore,
      maxScore,
      percentage,
      agentEnvironment: AGENT_ENV[getModelBaseId(dir)] ?? "Unknown",
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
    }
  >();

  results.forEach((result) => {
    if (!modelAveragesMap.has(result.modelName)) {
      modelAveragesMap.set(result.modelName, {
        totalScore: 0,
        totalMaxScore: 0,
        totalPercentage: 0,
        count: 0,
      });
    }
    const stats = modelAveragesMap.get(result.modelName)!;
    stats.totalScore += result.totalScore;
    stats.totalMaxScore += result.maxScore;
    stats.totalPercentage += result.percentage;
    stats.count += 1;
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
      pricing: MODEL_PRICING[matchingResult ? getModelBaseId(matchingResult.id) : modelName],
    };
  });

  // Sort model averages by percentage (highest first)
  modelAverages.sort((a, b) => b.averagePercentage - a.averagePercentage);

  const output: ProcessedResults = {
    generatedAt: new Date().toISOString(),
    totalAttempts: results.length,
    results,
    modelAverages,
  };

  // Write output
  const outputPath = path.join(outputDir, "results.json");
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

  console.log(`✓ Generated ${outputPath}`);

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
