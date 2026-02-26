import {useState, useMemo} from "react";
import ModelAveragesCard from "./ModelAveragesCard";
import AccordionSection from "./AccordionSection";
import DetailedComparison from "./DetailedComparison";
import type {AttemptResult} from "./DetailedComparison";

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
  sortedResults: AttemptResult[];
  supersededModels: Record<string, string>;
  screenshotHashes: Record<string, string>;
}

export default function ResultsDashboard({
  modelAverages,
  sortedResults,
  supersededModels,
  screenshotHashes,
}: Props) {
  const [latestOnly, setLatestOnly] = useState(true);

  const supersededBaseIds = useMemo(
    () => new Set(Object.keys(supersededModels)),
    [supersededModels],
  );

  const filteredAverages = useMemo(() => {
    if (!latestOnly) return modelAverages;
    return modelAverages.filter(
      (avg) => !supersededBaseIds.has(avg.modelBaseId),
    );
  }, [modelAverages, latestOnly, supersededBaseIds]);

  const filteredResults = useMemo(() => {
    if (!latestOnly) return sortedResults;
    return sortedResults.filter(
      (r) => !supersededBaseIds.has(r.modelBaseId),
    );
  }, [sortedResults, latestOnly, supersededBaseIds]);

  return (
    <>
      {/* Model Family Rankings header + toggle */}
      <div className="mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <h2 className="text-2xl font-bold text-slate-100">
            Model Family Rankings
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLatestOnly(!latestOnly)}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors ${
                latestOnly ? "bg-blue-600" : "bg-slate-600"
              }`}
              role="switch"
              aria-checked={latestOnly}
            >
              <span
                className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                  latestOnly ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className="text-sm text-slate-300 whitespace-nowrap">Only latest models</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {filteredAverages.map((average, index) => (
            <ModelAveragesCard
              key={average.modelBaseId}
              average={average}
              rank={index + 1}
              screenshotHashes={screenshotHashes}
            />
          ))}
        </div>
      </div>

      {/* Individual Attempts */}
      <AccordionSection
        title="Individual Attempts"
        attempts={filteredResults}
        screenshotHashes={screenshotHashes}
      />

      {/* Detailed Comparison */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-100 mb-4">
          Detailed Comparison
        </h2>
        <p className="text-slate-300 text-sm mb-4">
          Click on any score to reveal the detailed scoring explanation for that
          criterion.
        </p>
        <DetailedComparison attempts={filteredResults} />
      </div>
    </>
  );
}
