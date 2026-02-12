export interface FilterState {
  localBuild: boolean;
  manualTesting: boolean;
  techStack: boolean;
  dataQuality: boolean;
}

interface Props {
  filters: FilterState;
  onToggle: (filter: keyof FilterState) => void;
  totalCount: number;
  filteredCount: number;
}

export default function TableFilters({
  filters,
  onToggle,
  totalCount,
  filteredCount,
}: Props) {
  const isActive = filters.localBuild || filters.manualTesting || filters.techStack || filters.dataQuality;

  return (
    <div className='flex flex-wrap items-center gap-2 mb-4'>
      <span className='text-sm text-slate-400 mr-1'>Filters:</span>
      <button
        onClick={() => onToggle("localBuild")}
        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
          filters.localBuild
            ? "bg-green-800 text-green-100 border border-green-600"
            : "bg-slate-700 text-slate-300 border border-slate-600 hover:bg-slate-600"
        }`}
      >
        Local build
      </button>
      <button
        onClick={() => onToggle("manualTesting")}
        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
          filters.manualTesting
            ? "bg-green-800 text-green-100 border border-green-600"
            : "bg-slate-700 text-slate-300 border border-slate-600 hover:bg-slate-600"
        }`}
      >
        Manual testing
      </button>
      <button
        onClick={() => onToggle("techStack")}
        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
          filters.techStack
            ? "bg-green-800 text-green-100 border border-green-600"
            : "bg-slate-700 text-slate-300 border border-slate-600 hover:bg-slate-600"
        }`}
      >
        Tech stack
      </button>
      <button
        onClick={() => onToggle("dataQuality")}
        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
          filters.dataQuality
            ? "bg-green-800 text-green-100 border border-green-600"
            : "bg-slate-700 text-slate-300 border border-slate-600 hover:bg-slate-600"
        }`}
      >
        Data quality
      </button>
      {isActive && (
        <span className='text-xs text-slate-500 ml-2'>
          {filteredCount} / {totalCount} attempts
        </span>
      )}
    </div>
  );
}
