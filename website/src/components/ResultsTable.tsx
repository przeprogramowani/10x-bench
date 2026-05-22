import {useState} from "react";
import type {AttemptResult} from "./DetailedComparison";
import {
  formatAttemptScore,
  getOrderedCriteria,
  getPenaltyColor,
  getScoreColor,
  isInfoRow,
  isPenaltyRow,
} from "./comparisonUtils";

interface Props {
  attempts: AttemptResult[];
}


export default function ResultsTable({attempts}: Props) {
  const [expandedNotes, setExpandedNotes] = useState<string | null>(null);

  const allCriteria = getOrderedCriteria(attempts);

  return (
    <div>
      <div className='overflow-x-auto rounded-lg border border-slate-700'>
        <table className='w-full border-collapse bg-slate-800'>
          <thead>
            <tr className='bg-slate-900 border-b border-slate-700'>
              <th className='sticky left-0 bg-slate-900 z-20 px-4 py-3 text-left font-semibold text-slate-100 border-r border-slate-700 w-56'>
                Criterion
              </th>
              {attempts.map((attempt) => (
                <th
                  key={attempt.id}
                  className='px-4 py-3 text-center font-semibold text-slate-100 text-sm whitespace-nowrap'
                >
                  <div className='font-semibold'>{attempt.modelName}</div>
                  <div className='text-xs font-normal text-slate-400'>
                    Attempt {attempt.attemptNumber}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allCriteria.map((criterion, idx) => {
              const noteKey = `${criterion.name}-${idx}`;
              const isExpanded = expandedNotes === noteKey;

              const isInfo = isInfoRow(criterion.name);
              const isPenalty = isPenaltyRow(criterion.name);
              const isFirstInfo =
                isInfo && (idx === 0 || !isInfoRow(allCriteria[idx - 1].name));
              const isFirstPenalty =
                isPenalty && (idx === 0 || !isPenaltyRow(allCriteria[idx - 1].name));

              return (
                <tr
                  key={criterion.name}
                  className={`${isInfo ? "bg-slate-900/60" : isPenalty ? "bg-slate-900/40" : idx % 2 === 0 ? "bg-slate-800" : "bg-slate-900"} ${isFirstInfo || isFirstPenalty ? "border-t-2 border-slate-700" : ""}`}
                >
                  <td
                    className={`sticky left-0 z-10 px-4 py-3 border-r border-slate-700 text-sm ${isInfo ? "bg-slate-900 font-normal text-slate-500" : isPenalty ? "bg-slate-900 font-medium text-slate-300" : "bg-inherit font-medium text-slate-100"}`}
                  >
                    <div className='max-w-xs'>{criterion.name}</div>
                  </td>
                  {attempts.map((attempt) => {
                    const matchedCriterion = attempt.criteria.find(
                      (c) => c.name === criterion.name,
                    );
                    if (!matchedCriterion) {
                      return (
                        <td key={attempt.id} className='px-4 py-3 text-center'>
                          <span className='inline-block px-2 py-1 rounded bg-slate-700 text-slate-400 text-xs'>
                            N/A
                          </span>
                        </td>
                      );
                    }

                    const hasClickableNotes = !isInfo && matchedCriterion.notes;

                    return (
                      <td
                        key={attempt.id}
                        className='px-4 py-3 text-center'
                        onClick={() => {
                          if (hasClickableNotes) {
                            setExpandedNotes(isExpanded ? null : noteKey);
                          }
                        }}
                      >
                        <div className='flex flex-col items-center gap-2'>
                          <span
                            className={`inline-block px-2 py-1 rounded text-sm ${
                              isInfo
                                ? "text-slate-400 font-normal"
                                : isPenalty
                                  ? `font-semibold cursor-pointer hover:opacity-80 ${getPenaltyColor(matchedCriterion.score)}`
                                  : `font-semibold cursor-pointer hover:opacity-80 ${getScoreColor(matchedCriterion.score, matchedCriterion.max)}`
                            }`}
                          >
                            {isPenalty
                              ? matchedCriterion.score === 0
                                ? "0"
                                : `-${matchedCriterion.score}`
                              : formatAttemptScore(matchedCriterion)}
                          </span>
                          {isExpanded && matchedCriterion.notes && !isInfo && (
                            <div className='mt-2 p-2 bg-blue-950 text-blue-200 text-xs rounded max-w-xs border border-blue-800'>
                              {matchedCriterion.notes}
                            </div>
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className='text-xs text-slate-400 mt-3 px-4'>
        Click on score cells to view evaluation notes
      </p>
    </div>
  );
}
