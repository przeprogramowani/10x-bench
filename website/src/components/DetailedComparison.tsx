import {useState, useMemo} from "react";
import TableFilters, {type FilterState} from "./TableFilters";
import ResultsTable from "./ResultsTable";

export interface CriterionResult {
  name: string;
  score: number;
  max: number;
  notes: string;
}

export interface AttemptResult {
  id: string;
  modelName: string;
  attemptNumber: number;
  totalScore: number;
  maxScore: number;
  percentage: number;
  criteria: CriterionResult[];
}

interface Props {
  attempts: AttemptResult[];
}

const DATA_QUALITY_CRITERIA = [
  "Podcast page",
  "YouTube page",
  "O nas page",
  "Kursy section",
];

function hasMaxScore(attempt: AttemptResult, criterionName: string): boolean {
  const c = attempt.criteria.find((c) => c.name === criterionName);
  return c ? c.score === c.max : false;
}

export default function DetailedComparison({attempts}: Props) {
  const [filters, setFilters] = useState<FilterState>({
    localBuild: false,
    manualTesting: false,
    techStack: false,
    dataQuality: false,
  });

  const handleToggle = (filter: keyof FilterState) => {
    setFilters((prev) => ({...prev, [filter]: !prev[filter]}));
  };

  const filteredAttempts = useMemo(
    () =>
      attempts.filter((attempt) => {
        if (filters.localBuild && !hasMaxScore(attempt, "Local build"))
          return false;
        if (filters.manualTesting && !hasMaxScore(attempt, "Manual testing"))
          return false;
        if (filters.techStack && !hasMaxScore(attempt, "Tech stack"))
          return false;
        if (
          filters.dataQuality &&
          !DATA_QUALITY_CRITERIA.every((name) => hasMaxScore(attempt, name))
        )
          return false;
        return true;
      }),
    [attempts, filters],
  );

  return (
    <div>
      <TableFilters
        filters={filters}
        onToggle={handleToggle}
        totalCount={attempts.length}
        filteredCount={filteredAttempts.length}
      />
      <ResultsTable attempts={filteredAttempts} />
    </div>
  );
}
