import type {AttemptResult} from "./DetailedComparison";
import {
  aggregateCriterion,
  formatAverageScore,
  getOrderedCriteria,
  getPenaltyColor,
  getScoreColor,
  isPenaltyRow,
  type CriterionAggregate,
} from "./comparisonUtils";

interface ModelFamilyAverage {
  modelName: string;
  modelBaseId: string;
  averagePercentage: number;
  attemptCount: number;
  averageScore: number;
  averageMaxScore: number;
  agentEnvironment?: string;
  pricing?: {input: number; output: number};
}

interface Props {
  modelAverages: ModelFamilyAverage[];
  attempts: AttemptResult[];
  selectedModelIds: string[];
  onSelectionChange: (modelIds: string[]) => void;
}

function formatSignedDifference(value: number): string {
  const rounded = Math.abs(value);
  return Number.isInteger(rounded) ? rounded.toString() : rounded.toFixed(2);
}

function getAdvantageLabel(
  leftScore: number | null,
  rightScore: number | null,
  isPenalty: boolean,
): {label: string; className: string} {
  if (leftScore === null || rightScore === null) {
    return {label: "N/A", className: "bg-slate-700 text-slate-400"};
  }

  const advantage = isPenalty ? rightScore - leftScore : leftScore - rightScore;

  if (Math.abs(advantage) < 0.001) {
    return {label: "Tie", className: "bg-slate-700 text-slate-300"};
  }

  return {
    label: `${advantage > 0 ? "A" : "B"} +${formatSignedDifference(advantage)}`,
    className:
      advantage > 0
        ? "bg-blue-900 text-blue-200"
        : "bg-cyan-900 text-cyan-200",
  };
}

function ScoreDots({
  aggregate,
  isPenalty,
}: {
  aggregate: CriterionAggregate;
  isPenalty: boolean;
}) {
  return (
    <div className='mt-2 flex justify-center gap-1'>
      {aggregate.attemptScores.map((attempt) => (
        <span
          key={attempt.attemptNumber}
          className={`h-2 w-2 rounded-full ${
            isPenalty
              ? getPenaltyColor(attempt.score)
              : getScoreColor(attempt.score, attempt.max)
          }`}
          title={`Attempt ${attempt.attemptNumber}: ${attempt.score}`}
        />
      ))}
    </div>
  );
}

function AggregateCell({aggregate}: {aggregate: CriterionAggregate}) {
  const isPenalty = isPenaltyRow(aggregate.name);
  const colorClass =
    aggregate.averageScore === null
      ? "bg-slate-700 text-slate-400"
      : isPenalty
        ? getPenaltyColor(aggregate.averageScore)
        : getScoreColor(aggregate.averageScore, aggregate.max);

  return (
    <div className='flex flex-col items-center'>
      <span className={`rounded px-2 py-1 text-sm font-semibold ${colorClass}`}>
        {isPenalty && aggregate.averageScore && aggregate.averageScore > 0
          ? `-${formatAverageScore(aggregate.averageScore)}`
          : formatAverageScore(aggregate.averageScore)}
      </span>
      {aggregate.attemptScores.length > 0 && (
        <ScoreDots aggregate={aggregate} isPenalty={isPenalty} />
      )}
    </div>
  );
}

function SummaryCard({
  label,
  average,
}: {
  label: "A" | "B";
  average: ModelFamilyAverage;
}) {
  return (
    <div className='rounded-lg border border-slate-700 bg-slate-800 p-4'>
      <div className='mb-2 flex items-center justify-between gap-3'>
        <span className='inline-flex h-7 w-7 items-center justify-center rounded bg-slate-700 text-sm font-bold text-slate-100'>
          {label}
        </span>
        <span className='rounded bg-blue-900 px-2 py-1 text-sm font-semibold text-blue-100'>
          {average.averagePercentage.toFixed(1)}%
        </span>
      </div>
      <h3 className='text-base font-semibold text-slate-100'>
        {average.modelName}
      </h3>
      <p className='mt-1 text-sm text-slate-400'>
        {average.averageScore.toFixed(1)}/{average.averageMaxScore.toFixed(1)} avg across {average.attemptCount} attempts
      </p>
    </div>
  );
}

export default function ModelComparison({
  modelAverages,
  attempts,
  selectedModelIds,
  onSelectionChange,
}: Props) {
  if (modelAverages.length < 2) {
    return null;
  }

  const visibleIds = new Set(modelAverages.map((model) => model.modelBaseId));
  const selected = selectedModelIds.filter((id) => visibleIds.has(id));
  const fallback = modelAverages.slice(0, 2).map((model) => model.modelBaseId);
  const leftId = selected[0] ?? fallback[0];
  const rightId = selected.find((id) => id !== leftId) ?? fallback.find((id) => id !== leftId) ?? fallback[1];
  const leftAverage = modelAverages.find((model) => model.modelBaseId === leftId);
  const rightAverage = modelAverages.find((model) => model.modelBaseId === rightId);

  if (!leftAverage || !rightAverage) {
    return null;
  }

  const leftAttempts = attempts.filter((attempt) => attempt.modelBaseId === leftId);
  const rightAttempts = attempts.filter((attempt) => attempt.modelBaseId === rightId);
  const criteria = getOrderedCriteria([...leftAttempts, ...rightAttempts], false);
  const overallDelta = leftAverage.averagePercentage - rightAverage.averagePercentage;

  const handleSelection = (side: "left" | "right", modelBaseId: string) => {
    if (side === "left") {
      const nextRight = modelBaseId === rightId
        ? modelAverages.find((model) => model.modelBaseId !== modelBaseId)?.modelBaseId
        : rightId;
      onSelectionChange([modelBaseId, nextRight ?? rightId]);
      return;
    }

    const nextLeft = modelBaseId === leftId
      ? modelAverages.find((model) => model.modelBaseId !== modelBaseId)?.modelBaseId
      : leftId;
    onSelectionChange([nextLeft ?? leftId, modelBaseId]);
  };

  return (
    <div>
      <div className='mb-4 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between'>
        <div className='text-sm text-slate-400'>
          Select models from the ranking cards or adjust the pair here.
        </div>
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
          <label className='text-sm text-slate-300'>
            <span className='mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500'>
              Model A
            </span>
            <div className='relative'>
              <select
                value={leftId}
                onChange={(event) =>
                  handleSelection("left", event.target.value)
                }
                className='w-full appearance-none rounded border border-slate-600 bg-slate-800 py-2 pl-3 pr-10 text-slate-100'
              >
                {modelAverages.map((model) => (
                  <option
                    key={model.modelBaseId}
                    value={model.modelBaseId}
                    disabled={model.modelBaseId === rightId}
                  >
                    {model.modelName}
                  </option>
                ))}
              </select>
              <span className='pointer-events-none absolute right-3 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-b border-r border-slate-400' />
            </div>
          </label>
          <label className='text-sm text-slate-300'>
            <span className='mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500'>
              Model B
            </span>
            <div className='relative'>
              <select
                value={rightId}
                onChange={(event) =>
                  handleSelection("right", event.target.value)
                }
                className='w-full appearance-none rounded border border-slate-600 bg-slate-800 py-2 pl-3 pr-10 text-slate-100'
              >
                {modelAverages.map((model) => (
                  <option
                    key={model.modelBaseId}
                    value={model.modelBaseId}
                    disabled={model.modelBaseId === leftId}
                  >
                    {model.modelName}
                  </option>
                ))}
              </select>
              <span className='pointer-events-none absolute right-3 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-b border-r border-slate-400' />
            </div>
          </label>
        </div>
      </div>

      <div className='mb-5 grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto_1fr] md:items-stretch'>
        <SummaryCard label='A' average={leftAverage} />
        <div className='flex items-center justify-center rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-center'>
          <div>
            <p className='text-xs uppercase tracking-wide text-slate-500'>Overall delta</p>
            <p className={`mt-1 text-lg font-bold ${
              overallDelta === 0
                ? "text-slate-300"
                : overallDelta > 0
                  ? "text-blue-200"
                  : "text-cyan-200"
            }`}>
              {overallDelta === 0
                ? "Tie"
                : `${overallDelta > 0 ? "A" : "B"} +${Math.abs(overallDelta).toFixed(1)} pts`}
            </p>
          </div>
        </div>
        <SummaryCard label='B' average={rightAverage} />
      </div>

      <div className='overflow-x-auto rounded-lg border border-slate-700'>
        <table className='w-full table-fixed border-collapse bg-slate-800'>
          <thead>
            <tr className='border-b border-slate-700 bg-slate-900'>
              <th className='w-[34%] px-4 py-3 text-left text-sm font-semibold text-slate-100'>
                Criterion
              </th>
              <th className='w-[25%] px-4 py-3 text-center text-sm font-semibold text-slate-100'>
                <span className='block truncate' title={leftAverage.modelName}>
                  {leftAverage.modelName}
                </span>
              </th>
              <th className='w-[16%] px-4 py-3 text-center text-sm font-semibold text-slate-100'>
                Difference
              </th>
              <th className='w-[25%] px-4 py-3 text-center text-sm font-semibold text-slate-100'>
                <span className='block truncate' title={rightAverage.modelName}>
                  {rightAverage.modelName}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {criteria.map((criterion, idx) => {
              const leftAggregate = aggregateCriterion(leftAttempts, criterion.name);
              const rightAggregate = aggregateCriterion(rightAttempts, criterion.name);
              const isPenalty = isPenaltyRow(criterion.name);
              const advantage = getAdvantageLabel(
                leftAggregate.averageScore,
                rightAggregate.averageScore,
                isPenalty,
              );

              return (
                <tr
                  key={criterion.name}
                  className={`${
                    isPenalty
                      ? "border-t-2 border-slate-700 bg-slate-900/40"
                      : idx % 2 === 0
                        ? "bg-slate-800"
                        : "bg-slate-900"
                  }`}
                >
                  <td className='px-4 py-3 text-sm font-medium text-slate-100'>
                    <span className='block truncate' title={criterion.name}>
                      {criterion.name}
                    </span>
                  </td>
                  <td className='px-4 py-3 text-center'>
                    <AggregateCell aggregate={leftAggregate} />
                  </td>
                  <td className='px-4 py-3 text-center'>
                    <span className={`inline-block rounded px-2 py-1 text-xs font-semibold ${advantage.className}`}>
                      {advantage.label}
                    </span>
                  </td>
                  <td className='px-4 py-3 text-center'>
                    <AggregateCell aggregate={rightAggregate} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
