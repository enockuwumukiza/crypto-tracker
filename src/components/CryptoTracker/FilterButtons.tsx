import React from 'react';
import { FILTER_OPTIONS, FilterType } from './filterOptions';

interface Props {
  selected: FilterType;
  onSelect: (filter: FilterType) => void;
}

const FilterButtons: React.FC<Props> = ({ selected, onSelect }) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
     

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-6">
        {FILTER_OPTIONS.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`px-6 py-3 rounded-full text-sm font-semibold shadow-lg transition-transform duration-300 ${
              selected === opt
                ? 'bg-blue-600 text-white transform scale-105'
                : 'bg-gray-100 text-gray-800 hover:bg-blue-100 hover:text-blue-700'
            }`}
          >
            {opt === 'all'
              ? 'All'
              : opt === 'topGainers'
              ? 'Top Gainers'
              : opt === 'topLosers'
              ? 'Top Losers'
              : 'Market Cap'}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterButtons;
