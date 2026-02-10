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
    if (percentage >= 90) return 'bg-green-900 text-green-200';
    if (percentage >= 60) return 'bg-yellow-900 text-yellow-200';
    return 'bg-red-900 text-red-200';
  };

  const handleCardClick = () => {
    if (hasFilmstrip) {
      setExpanded(!expanded);
    }
  };

  return (
    <div className="bg-slate-800 rounded-lg shadow-sm border border-slate-700 hover:shadow-md transition-shadow">
      <div
        className={`p-4 ${hasFilmstrip ? 'cursor-pointer' : ''}`}
        onClick={handleCardClick}
      >
        {/* Mobile layout */}
        <div className="md:hidden">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3 min-w-0">
              <span className="inline-flex items-center justify-center w-8 h-8 flex-shrink-0 rounded-full bg-blue-600 text-white font-bold text-sm">
                {rank}
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-slate-100 truncate">{average.modelName}</h3>
                <p className="text-xs text-slate-400 truncate">
                  {average.attemptCount} attempt{average.attemptCount !== 1 ? 's' : ''}
                  {average.agentEnvironment && <span className="ml-1 text-slate-500">via {average.agentEnvironment}</span>}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className={`px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap ${getBadgeColor(average.averagePercentage)}`}>
                {average.averagePercentage.toFixed(1)}%
              </div>
              {hasFilmstrip && (
                <svg className={`w-5 h-5 text-slate-400 transition-transform ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </div>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
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
          <p className="text-xs text-slate-400">
            Average: <span className="font-bold text-slate-100">{average.averageScore.toFixed(1)}/{average.averageMaxScore.toFixed(1)}</span>
          </p>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-shrink-0 w-52">
            <span className="inline-flex items-center justify-center w-8 h-8 flex-shrink-0 rounded-full bg-blue-600 text-white font-bold text-sm">
              {rank}
            </span>
            <div className="min-w-0">
              <h3 className="text-base font-semibold text-slate-100 truncate">{average.modelName}</h3>
              <p className="text-xs text-slate-400 truncate">
                {average.attemptCount} attempt{average.attemptCount !== 1 ? 's' : ''}
                {average.agentEnvironment && <span className="ml-1 text-slate-500">via {average.agentEnvironment}</span>}
              </p>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="w-full bg-slate-700 rounded-full h-2">
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
              <p className="text-xs text-slate-400">Average</p>
              <p className="text-lg font-bold text-slate-100">
                {average.averageScore.toFixed(1)}/{average.averageMaxScore.toFixed(1)}
              </p>
            </div>
            <div className={`px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap ${getBadgeColor(average.averagePercentage)}`}>
              {average.averagePercentage.toFixed(1)}%
            </div>
            {hasFilmstrip && (
              <svg className={`w-5 h-5 text-slate-400 transition-transform ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </div>
        </div>
      </div>

      {hasFilmstrip && expanded && (
        <div className="border-t border-slate-700 p-3">
          <a href={filmstripPath} target="_blank" rel="noopener noreferrer" title="Click to open full resolution">
            <img
              src={filmstripPath}
              alt={`Filmstrip of ${average.modelName} attempts`}
              className="w-full rounded border border-slate-600 hover:border-blue-400 transition-colors"
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
