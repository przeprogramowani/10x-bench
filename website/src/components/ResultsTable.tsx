import { useState } from 'react';

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
  criteria: CriterionResult[];
}

interface Props {
  attempts: AttemptResult[];
}

export default function ResultsTable({ attempts }: Props) {
  const [expandedNotes, setExpandedNotes] = useState<string | null>(null);

  // Get all unique criteria from all attempts
  const allCriteria = Array.from(
    new Map(
      attempts
        .flatMap((a) => a.criteria)
        .map((c) => [c.name, c])
    ).values()
  );

  const getScoreColor = (score: number, max: number): string => {
    if (score === 0) return 'bg-red-100 text-red-800';
    if (score === max) return 'bg-green-100 text-green-800';
    return 'bg-yellow-100 text-yellow-800'; // 0 < score < max
  };

  const isTimeRow = (name: string) => name === 'Task completion time';

  const formatScore = (criterion: CriterionResult) => {
    if (isTimeRow(criterion.name)) {
      // Standard format in notes: "5min 46s" or "N/A"
      const timeMatch = criterion.notes.match(/\d+min\s*\d+s/);
      return timeMatch ? timeMatch[0] : 'N/A';
    }
    return criterion.score.toString();
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full border-collapse bg-white">
        <thead>
          <tr className="bg-gray-50 border-b">
            <th className="sticky left-0 bg-gray-50 z-20 px-4 py-3 text-left font-semibold text-gray-900 border-r w-56">
              Criterion
            </th>
            {attempts.map((attempt) => (
              <th key={attempt.id} className="px-4 py-3 text-center font-semibold text-gray-900 text-sm whitespace-nowrap">
                <div className="font-semibold">{attempt.modelName}</div>
                <div className="text-xs font-normal text-gray-600">Attempt {attempt.attemptNumber}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allCriteria.map((criterion, idx) => {
            const noteKey = `${criterion.name}-${idx}`;
            const isExpanded = expandedNotes === noteKey;

            return (
              <tr key={criterion.name} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="sticky left-0 z-10 bg-inherit px-4 py-3 font-medium text-gray-900 border-r text-sm">
                  <div className="max-w-xs">{criterion.name}</div>
                </td>
                {attempts.map((attempt) => {
                  const matchedCriterion = attempt.criteria.find((c) => c.name === criterion.name);
                  if (!matchedCriterion) {
                    return (
                      <td key={attempt.id} className="px-4 py-3 text-center">
                        <span className="inline-block px-2 py-1 rounded bg-gray-100 text-gray-600 text-xs">N/A</span>
                      </td>
                    );
                  }

                  const isTime = isTimeRow(criterion.name);

                  return (
                    <td
                      key={attempt.id}
                      className="px-4 py-3 text-center"
                      onClick={() => {
                        if (!isTime && matchedCriterion.notes) {
                          setExpandedNotes(isExpanded ? null : noteKey);
                        }
                      }}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <span
                          className={`inline-block px-2 py-1 rounded text-sm font-semibold ${
                            isTime
                              ? 'bg-gray-100 text-gray-800'
                              : `cursor-pointer hover:opacity-80 ${getScoreColor(matchedCriterion.score, matchedCriterion.max)}`
                          }`}
                        >
                          {formatScore(matchedCriterion)}
                        </span>
                        {isExpanded && matchedCriterion.notes && !isTime && (
                          <div className="mt-2 p-2 bg-blue-50 text-blue-900 text-xs rounded max-w-xs border border-blue-200">
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

      <p className="text-xs text-gray-600 mt-3 px-4">
        Click on score cells to view evaluation notes
      </p>
    </div>
  );
}
