import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FILTER_OPTIONS, FilterType } from "../components/CryptoTracker/filterOptions";
import { Link } from 'react-router-dom';

interface Props {
  selected: FilterType;
  onSelect: (filter: FilterType) => void;
}

const Menu: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);

  const getLabel = (opt: FilterType) => {
    switch (opt) {
      case 'all':
        return 'All';
      case 'topGainers':
        return 'Top Gainers';
      case 'topLosers':
        return 'Top Losers';
      case 'marketCap':
        return 'Market Cap';
      default:
        return opt;
    }
  };

  return (
    <div className="absolute right-[20px] lg:-right-[50px]">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
      </button>

      {open && (
        <div className="mt-2 right-0 w-48 bg-white rounded-lg shadow-lg z-50">
                  <Link to={'/tracker'}>
                      <ul className="py-2">
            {FILTER_OPTIONS.map((opt) => (
              <li
                key={opt}
                onClick={() => {
                  setOpen(false); // Close menu on selection
                }}
                className={`px-4 py-2 cursor-pointer font-medium hover:bg-blue-100 text-gray-800`}
              >
                {getLabel(opt)}
              </li>
            ))}
          </ul>
                  </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
