import {useState} from "react";
import type {AttemptResult} from "./DetailedComparison";

interface Props {
  attempts: AttemptResult[];
}

const isTimeRow = (name: string) => name === "Task completion time";
const isTestRunRow = (name: string) => name === "Test run";
const isInfoRow = (name: string) => isTimeRow(name) || isTestRunRow(name);

export default function ResultsTable({attempts}: Props) {
  const [expandedNotes, setExpandedNotes] = useState<string | null>(null);

  // Get all unique criteria from all attempts, with info rows moved to the end
  const allCriteriaUnsorted = Array.from(
    new Map(
      attempts.flatMap((a) => a.criteria).map((c) => [c.name, c]),
    ).values(),
  );
  const scoringCriteria = allCriteriaUnsorted.filter((c) => !isInfoRow(c.name));
  const infoCriteria = allCriteriaUnsorted.filter((c) => isInfoRow(c.name));
  const allCriteria = [...scoringCriteria, ...infoCriteria];

  const getScoreColor = (score: number, max: number): string => {
    if (score === 0) return "bg-red-900 text-red-200";
    if (score === max) return "bg-green-900 text-green-200";
    return "bg-yellow-900 text-yellow-200"; // 0 < score < max
  };

  const formatScore = (criterion: CriterionResult) => {
    if (isTimeRow(criterion.name)) {
      // Standard format in notes: "5min 46s" or "N/A"
      const timeMatch = criterion.notes.match(/\d+min\s*\d+s/);
      return timeMatch ? timeMatch[0] : "N/A";
    }
    if (isTestRunRow(criterion.name)) {
      // Date/time format in notes: "9.02.2026 19:05" or "N/A"
      return criterion.notes && criterion.notes !== "N/A"
        ? criterion.notes
        : "N/A";
    }
    return criterion.score.toString();
  };

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
              const isFirstInfo =
                isInfo && (idx === 0 || !isInfoRow(allCriteria[idx - 1].name));

              return (
                <tr
                  key={criterion.name}
                  className={`${isInfo ? "bg-slate-900/60" : idx % 2 === 0 ? "bg-slate-800" : "bg-slate-900"} ${isFirstInfo ? "border-t-2 border-slate-700" : ""}`}
                >
                  <td
                    className={`sticky left-0 z-10 px-4 py-3 border-r border-slate-700 text-sm ${isInfo ? "bg-slate-900 font-normal text-slate-500" : "bg-inherit font-medium text-slate-100"}`}
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

                    return (
                      <td
                        key={attempt.id}
                        className='px-4 py-3 text-center'
                        onClick={() => {
                          if (!isInfo && matchedCriterion.notes) {
                            setExpandedNotes(isExpanded ? null : noteKey);
                          }
                        }}
                      >
                        <div className='flex flex-col items-center gap-2'>
                          <span
                            className={`inline-block px-2 py-1 rounded text-sm ${
                              isInfo
                                ? "text-slate-400 font-normal"
                                : `font-semibold cursor-pointer hover:opacity-80 ${getScoreColor(matchedCriterion.score, matchedCriterion.max)}`
                            }`}
                          >
                            {formatScore(matchedCriterion)}
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
