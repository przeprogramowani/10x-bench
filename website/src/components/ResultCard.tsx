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
  agentEnvironment?: string;
  criteria: CriterionResult[];
}

interface Props {
  attempt: AttemptResult;
  screenshotHashes?: Record<string, string>;
}

export default function ResultCard({ attempt, screenshotHashes }: Props) {
  const [hasScreenshot, setHasScreenshot] = useState(true);
  const [preview, setPreview] = useState<{ x: number; y: number } | null>(null);
  const filename = `${attempt.id}.png`;
  const hash = screenshotHashes?.[filename];
  const screenshotPath = `/screenshots/${filename}${hash ? `?v=${hash}` : ''}`;

  const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPreview({ x: rect.right, y: rect.top });
  };
  const handleMouseLeave = () => setPreview(null);

  const getBadgeColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-900 text-green-200';
    if (percentage >= 60) return 'bg-yellow-900 text-yellow-200';
    return 'bg-red-900 text-red-200';
  };

  return (
    <div className="bg-slate-800 rounded-lg shadow-sm p-4 border border-slate-700 hover:shadow-md transition-shadow">
      {/* Mobile layout */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-2">
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-slate-100">{attempt.modelName}</h3>
            <p className="text-xs text-slate-400">
              Attempt {attempt.attemptNumber}
              {attempt.agentEnvironment && <span className="ml-1 text-slate-500">via {attempt.agentEnvironment}</span>}
            </p>
          </div>
          <div className={`px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap flex-shrink-0 ${getBadgeColor(attempt.percentage)}`}>
            {attempt.percentage.toFixed(1)}%
          </div>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
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
        <div className="flex items-center justify-between">
          <p className="text-xs text-slate-400">
            Score: <span className="font-bold text-slate-100">{attempt.totalScore.toFixed(1)}/{attempt.maxScore}</span>
          </p>
          {hasScreenshot && (
            <a
              href={screenshotPath}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded border border-slate-600 overflow-hidden hover:border-blue-400 transition-all"
              title="Click to open full resolution"
            >
              <img
                src={screenshotPath}
                alt={`Screenshot of ${attempt.modelName} attempt ${attempt.attemptNumber}`}
                className="w-16 h-11 object-cover object-top"
                onError={() => setHasScreenshot(false)}
              />
            </a>
          )}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <div>
              <h3 className="text-base font-semibold text-slate-100">{attempt.modelName}</h3>
              <p className="text-xs text-slate-400">
                Attempt {attempt.attemptNumber}
                {attempt.agentEnvironment && <span className="ml-1 text-slate-500">via {attempt.agentEnvironment}</span>}
              </p>
            </div>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2">
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
          {hasScreenshot && (
            <div
              className="relative flex-shrink-0"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={screenshotPath}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded border border-slate-600 overflow-hidden hover:border-blue-400 hover:shadow transition-all"
                title="Click to open full resolution"
              >
                <img
                  src={screenshotPath}
                  alt={`Screenshot of ${attempt.modelName} attempt ${attempt.attemptNumber}`}
                  className="w-20 h-14 object-cover object-top"
                  onError={() => setHasScreenshot(false)}
                />
              </a>
              {preview && (
                <div
                  className="fixed z-[9999] pointer-events-none"
                  style={{
                    right: `${window.innerWidth - preview.x}px`,
                    bottom: `${window.innerHeight - preview.y + 8}px`,
                  }}
                >
                  <div className="rounded-lg shadow-2xl border border-slate-600 overflow-hidden bg-slate-800 p-1">
                    <img
                      src={screenshotPath}
                      alt={`Preview of ${attempt.modelName} attempt ${attempt.attemptNumber}`}
                      className="rounded object-cover object-top"
                      style={{ width: '33vw' }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="text-right">
            <p className="text-xs text-slate-400">Score</p>
            <p className="text-lg font-bold text-slate-100">
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
