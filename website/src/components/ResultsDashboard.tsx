import {useMemo, useState} from "react";
import ModelAveragesCard from "./ModelAveragesCard";
import AccordionSection from "./AccordionSection";
import DetailedComparison from "./DetailedComparison";
import ModelComparison from "./ModelComparison";
import ScoreLegend from "./ScoreLegend";
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

function areSelectionsEqual(a: string[], b: string[]): boolean {
  return a.length === b.length && a.every((item, index) => item === b[index]);
}

function getVisibleSelection(
  currentSelection: string[],
  modelAverages: ModelFamilyAverage[],
): string[] {
  const visibleIds = new Set(modelAverages.map((avg) => avg.modelBaseId));
  const nextSelection = currentSelection
    .filter((id) => visibleIds.has(id))
    .slice(0, 2);

  modelAverages.forEach((average) => {
    if (
      nextSelection.length < 2 &&
      !nextSelection.includes(average.modelBaseId)
    ) {
      nextSelection.push(average.modelBaseId);
    }
  });

  return nextSelection;
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

  const [selectedModelIds, setSelectedModelIds] = useState<string[]>(() =>
    getVisibleSelection([], filteredAverages),
  );

  const handleLatestOnlyToggle = () => {
    const nextLatestOnly = !latestOnly;
    const nextAverages = nextLatestOnly
      ? modelAverages.filter((avg) => !supersededBaseIds.has(avg.modelBaseId))
      : modelAverages;

    setLatestOnly(nextLatestOnly);
    setSelectedModelIds((currentSelection) => {
      const nextSelection = getVisibleSelection(currentSelection, nextAverages);
      return areSelectionsEqual(currentSelection, nextSelection)
        ? currentSelection
        : nextSelection;
    });
  };

  const handleCompareToggle = (modelBaseId: string) => {
    setSelectedModelIds((currentSelection) => {
      if (currentSelection.includes(modelBaseId)) {
        return currentSelection.filter((id) => id !== modelBaseId);
      }

      if (currentSelection.length >= 2) {
        return [currentSelection[0], modelBaseId];
      }

      return [...currentSelection, modelBaseId];
    });
  };

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
              onClick={handleLatestOnlyToggle}
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
          {filteredAverages.map((average, index) => {
            const compareSelected = selectedModelIds.includes(average.modelBaseId);

            return (
              <ModelAveragesCard
                key={average.modelBaseId}
                average={average}
                rank={index + 1}
                screenshotHashes={screenshotHashes}
                compareSelected={compareSelected}
                onCompareToggle={() => handleCompareToggle(average.modelBaseId)}
              />
            );
          })}
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
          Review model averages first, switch to all attempts for scoring notes,
          or compare two selected models below.
        </p>
        <ScoreLegend />
        <DetailedComparison attempts={filteredResults} />

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            Model Comparison
          </h2>
          <p className="text-slate-300 text-sm mb-4">
            Compare two model families by average criterion score and attempt spread.
          </p>
          <ModelComparison
            modelAverages={filteredAverages}
            attempts={filteredResults}
            selectedModelIds={selectedModelIds}
            onSelectionChange={setSelectedModelIds}
          />
        </div>
      </div>
    </>
  );
}
