import {useState, useMemo} from "react";
import TableFilters, {type FilterState} from "./TableFilters";
import ResultsTable from "./ResultsTable";
import ModelAveragesTable from "./ModelAveragesTable";

export interface CriterionResult {
  name: string;
  score: number;
  max: number;
  notes: string;
}

export interface AttemptResult {
  id: string;
  modelName: string;
  modelBaseId: string;
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
  const [viewMode, setViewMode] = useState<"models" | "attempts">("models");
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
      <div className='mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
        <div className='text-sm text-slate-400'>
          {viewMode === "models"
            ? "Showing one averaged column per model."
            : "Showing every individual attempt as its own column."}
        </div>
        <div className='inline-flex w-fit rounded-lg border border-slate-700 bg-slate-800 p-1'>
          <button
            type='button'
            onClick={() => setViewMode("models")}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              viewMode === "models"
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-700"
            }`}
          >
            Model averages
          </button>
          <button
            type='button'
            onClick={() => setViewMode("attempts")}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              viewMode === "attempts"
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-700"
            }`}
          >
            All attempts
          </button>
        </div>
      </div>
      {viewMode === "models" ? (
        <ModelAveragesTable attempts={filteredAttempts} />
      ) : (
        <ResultsTable attempts={filteredAttempts} />
      )}
    </div>
  );
}
