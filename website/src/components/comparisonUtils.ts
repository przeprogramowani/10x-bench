import type {AttemptResult, CriterionResult} from "./DetailedComparison";

export const isTimeRow = (name: string) => name === "Task completion time";
export const isTestRunRow = (name: string) => name === "Test run";
export const isCostRow = (name: string) => name === "API cost";
export const isPenaltyRow = (name: string) => name === "Penalty";
export const isInfoRow = (name: string) =>
  isTimeRow(name) || isTestRunRow(name) || isCostRow(name);

/** Format a USD cost as a compact "$0.43" string. */
export function formatCost(cost: number | null | undefined): string {
  if (cost === null || cost === undefined) return "—";
  return `$${cost.toFixed(2)}`;
}

export interface CriterionAggregate {
  name: string;
  max: number;
  averageScore: number | null;
  attemptScores: Array<{attemptNumber: number; score: number; max: number}>;
}

export interface ModelAggregate {
  modelName: string;
  modelBaseId: string;
  attempts: AttemptResult[];
}

export function getOrderedCriteria(
  attempts: AttemptResult[],
  includeInfoRows = true,
): CriterionResult[] {
  const allCriteriaUnsorted = Array.from(
    new Map(
      attempts.flatMap((a) => a.criteria).map((c) => [c.name, c]),
    ).values(),
  );
  const scoringCriteria = allCriteriaUnsorted.filter(
    (c) => !isInfoRow(c.name) && !isPenaltyRow(c.name),
  );
  const penaltyCriteria = allCriteriaUnsorted.filter((c) =>
    isPenaltyRow(c.name),
  );
  const infoCriteria = includeInfoRows
    ? allCriteriaUnsorted.filter((c) => isInfoRow(c.name))
    : [];

  return [...scoringCriteria, ...penaltyCriteria, ...infoCriteria];
}

export function buildModelAggregates(attempts: AttemptResult[]): ModelAggregate[] {
  const modelMap = new Map<string, ModelAggregate>();

  attempts.forEach((attempt) => {
    const existing = modelMap.get(attempt.modelBaseId);

    if (existing) {
      existing.attempts.push(attempt);
      return;
    }

    modelMap.set(attempt.modelBaseId, {
      modelName: attempt.modelName,
      modelBaseId: attempt.modelBaseId,
      attempts: [attempt],
    });
  });

  return Array.from(modelMap.values());
}

export function aggregateCriterion(
  attempts: AttemptResult[],
  criterionName: string,
): CriterionAggregate {
  const attemptScores = attempts
    .map((attempt) => {
      const criterion = attempt.criteria.find((c) => c.name === criterionName);

      return criterion
        ? {
            attemptNumber: attempt.attemptNumber,
            score: criterion.score,
            max: criterion.max,
          }
        : null;
    })
    .filter(
      (
        score,
      ): score is {attemptNumber: number; score: number; max: number} =>
        score !== null,
    );

  const averageScore =
    attemptScores.length > 0
      ? attemptScores.reduce((sum, item) => sum + item.score, 0) /
        attemptScores.length
      : null;

  return {
    name: criterionName,
    max: attemptScores[0]?.max ?? 1,
    averageScore,
    attemptScores,
  };
}

export const getScoreColor = (score: number, max: number): string => {
  if (score === 0) return "bg-red-900 text-red-200";
  if (score === max) return "bg-green-900 text-green-200";
  return "bg-yellow-900 text-yellow-200";
};

export const getPenaltyColor = (score: number): string => {
  if (score === 0) return "bg-green-900 text-green-200";
  if (score >= 1) return "bg-red-900 text-red-200";
  return "bg-yellow-900 text-yellow-200";
};

export function formatScoreNumber(score: number): string {
  return Number.isInteger(score) ? score.toString() : score.toFixed(1);
}

export function formatAverageScore(score: number | null): string {
  if (score === null) return "N/A";

  return Number.isInteger(score) ? score.toString() : score.toFixed(2);
}

export function formatAttemptScore(criterion: CriterionResult): string {
  if (isTimeRow(criterion.name)) {
    const timeMatch = criterion.notes.match(/\d+min\s*\d+s/);
    return timeMatch ? timeMatch[0] : "N/A";
  }

  if (isTestRunRow(criterion.name)) {
    return criterion.notes && criterion.notes !== "N/A"
      ? criterion.notes
      : "N/A";
  }

  if (isCostRow(criterion.name)) {
    const match = criterion.notes.match(/\$[0-9]+(?:\.[0-9]+)?/);
    return match ? match[0] : "N/A";
  }

  return criterion.score.toString();
}
