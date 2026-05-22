import type {AttemptResult} from "./DetailedComparison";
import {
  aggregateCriterion,
  buildModelAggregates,
  formatAverageScore,
  getOrderedCriteria,
  getPenaltyColor,
  getScoreColor,
  isPenaltyRow,
  type CriterionAggregate,
} from "./comparisonUtils";

interface Props {
  attempts: AttemptResult[];
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

function AverageScoreCell({aggregate}: {aggregate: CriterionAggregate}) {
  const isPenalty = isPenaltyRow(aggregate.name);
  const colorClass =
    aggregate.averageScore === null
      ? "bg-slate-700 text-slate-400"
      : isPenalty
        ? getPenaltyColor(aggregate.averageScore)
        : getScoreColor(aggregate.averageScore, aggregate.max);

  return (
    <td className='px-3 py-3 text-center align-top'>
      <div className='flex flex-col items-center'>
        <span
          className={`inline-block rounded px-2 py-1 text-sm font-semibold ${colorClass}`}
        >
          {isPenalty && aggregate.averageScore && aggregate.averageScore > 0
            ? `-${formatAverageScore(aggregate.averageScore)}`
            : formatAverageScore(aggregate.averageScore)}
        </span>
        {aggregate.attemptScores.length > 0 && (
          <ScoreDots aggregate={aggregate} isPenalty={isPenalty} />
        )}
        <span className='mt-1 text-[11px] text-slate-500'>
          {aggregate.attemptScores.length} attempts
        </span>
      </div>
    </td>
  );
}

export default function ModelAveragesTable({attempts}: Props) {
  const models = buildModelAggregates(attempts);
  const criteria = getOrderedCriteria(attempts, false);

  if (attempts.length === 0) {
    return (
      <div className='rounded-lg border border-slate-700 bg-slate-800 p-4 text-sm text-slate-400'>
        No attempts match the active filters.
      </div>
    );
  }

  return (
    <div>
      <div className='overflow-x-auto rounded-lg border border-slate-700'>
        <table className='w-full border-collapse bg-slate-800'>
          <thead>
            <tr className='border-b border-slate-700 bg-slate-900'>
              <th className='sticky left-0 z-20 w-56 border-r border-slate-700 bg-slate-900 px-4 py-3 text-left font-semibold text-slate-100'>
                Criterion
              </th>
              {models.map((model) => (
                <th
                  key={model.modelBaseId}
                  className='min-w-[8rem] px-3 py-3 text-center text-sm font-semibold text-slate-100'
                >
                  <div className='font-semibold'>{model.modelName}</div>
                  <div className='text-xs font-normal text-slate-400'>
                    {model.attempts.length} attempts avg
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {criteria.map((criterion, idx) => {
              const isPenalty = isPenaltyRow(criterion.name);

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
                  <td
                    className={`sticky left-0 z-10 border-r border-slate-700 px-4 py-3 text-sm ${
                      isPenalty
                        ? "bg-slate-900 font-medium text-slate-300"
                        : "bg-inherit font-medium text-slate-100"
                    }`}
                  >
                    <div className='max-w-xs'>{criterion.name}</div>
                  </td>
                  {models.map((model) => (
                    <AverageScoreCell
                      key={model.modelBaseId}
                      aggregate={aggregateCriterion(
                        model.attempts,
                        criterion.name,
                      )}
                    />
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className='mt-3 px-4 text-xs text-slate-400'>
        Dots show the individual attempts that make up each model average.
      </p>
    </div>
  );
}
