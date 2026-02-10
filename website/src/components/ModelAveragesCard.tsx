import { useState } from 'react';

interface ModelFamilyAverage {
  modelName: string;
  modelBaseId: string;
  averagePercentage: number;
  attemptCount: number;
  averageScore: number;
  averageMaxScore: number;
  agentEnvironment?: string;
}

interface Props {
  average: ModelFamilyAverage;
  rank: number;
}

export default function ModelAveragesCard({ average, rank }: Props) {
  const [hasFilmstrip, setHasFilmstrip] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const filmstripPath = `/screenshots/${average.modelBaseId}_filmstrip.png`;

  const getBadgeColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-100 text-green-800';
    if (percentage >= 60) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between gap-4 p-4">
        <div className="flex items-center gap-3 flex-shrink-0 w-52">
          <span className="inline-flex items-center justify-center w-8 h-8 flex-shrink-0 rounded-full bg-gray-900 text-white font-bold text-sm">
            {rank}
          </span>
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-gray-900 truncate">{average.modelName}</h3>
            <p className="text-xs text-gray-600 truncate">
              {average.attemptCount} attempt{average.attemptCount !== 1 ? 's' : ''}
              {average.agentEnvironment && <span className="ml-1 text-gray-400">via {average.agentEnvironment}</span>}
            </p>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all ${
                average.averagePercentage >= 90
                  ? 'bg-green-500'
                  : average.averagePercentage >= 60
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
              }`}
              style={{ width: `${average.averagePercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="text-right">
            <p className="text-xs text-gray-600">Average</p>
            <p className="text-lg font-bold text-gray-900">
              {average.averageScore.toFixed(1)}/{average.averageMaxScore.toFixed(1)}
            </p>
          </div>
          <div className={`px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap ${getBadgeColor(average.averagePercentage)}`}>
            {average.averagePercentage.toFixed(1)}%
          </div>
          {hasFilmstrip && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
              title={expanded ? 'Hide filmstrip' : 'Show filmstrip'}
            >
              <svg className={`w-5 h-5 transition-transform ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {hasFilmstrip && expanded && (
        <div className="border-t border-gray-200 p-3">
          <a href={filmstripPath} target="_blank" rel="noopener noreferrer" title="Click to open full resolution">
            <img
              src={filmstripPath}
              alt={`Filmstrip of ${average.modelName} attempts`}
              className="w-full rounded border border-gray-100 hover:border-blue-400 transition-colors"
              onError={() => { setHasFilmstrip(false); setExpanded(false); }}
            />
          </a>
        </div>
      )}

      {/* Hidden image to detect if filmstrip exists */}
      {hasFilmstrip && !expanded && (
        <img
          src={filmstripPath}
          className="hidden"
          onError={() => setHasFilmstrip(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
