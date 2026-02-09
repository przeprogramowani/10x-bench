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
  agentEnvironment?: string;
  criteria: CriterionResult[];
}

interface Props {
  attempt: AttemptResult;
}

export default function ResultCard({ attempt }: Props) {
  const getBadgeColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-100 text-green-800';
    if (percentage >= 60) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <div>
              <h3 className="text-base font-semibold text-gray-900">{attempt.modelName}</h3>
              <p className="text-xs text-gray-600">
                Attempt {attempt.attemptNumber}
                {attempt.agentEnvironment && <span className="ml-1 text-gray-400">via {attempt.agentEnvironment}</span>}
              </p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all ${
                attempt.percentage >= 90
                  ? 'bg-green-500'
                  : attempt.percentage >= 60
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
              }`}
              style={{ width: `${attempt.percentage}%` }}
            ></div>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="text-right">
            <p className="text-xs text-gray-600">Score</p>
            <p className="text-lg font-bold text-gray-900">
              {attempt.totalScore.toFixed(1)}/{attempt.maxScore}
            </p>
          </div>
          <div className={`px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap ${getBadgeColor(attempt.percentage)}`}>
            {attempt.percentage.toFixed(1)}%
          </div>
        </div>
      </div>
    </div>
  );
}
