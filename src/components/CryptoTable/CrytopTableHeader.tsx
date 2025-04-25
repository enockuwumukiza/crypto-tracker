import React from 'react';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"

const CryptoTableHeader: React.FC = () => {
  return (
    <thead className="text-left bg-gray-800 text-gray-300">
      <tr>
        <th className="p-3 font-semibold whitespace-nowrap">#</th>
        <th className="p-3 font-semibold whitespace-nowrap">Name</th>
        <th className="p-3 font-semibold whitespace-nowrap text-right">Price</th>
        <th className="p-3 font-semibold whitespace-nowrap text-right">1h %</th>
        <th className="p-3 font-semibold whitespace-nowrap text-right">24h %</th>
        <th className="p-3 font-semibold whitespace-nowrap text-right">7d %</th>
        <th className="p-3 font-semibold whitespace-nowrap text-right">
          <div className="flex items-center justify-end">
            <span>Market Cap</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="ml-1 h-4 w-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="w-[240px] text-xs">Total value of the cryptocurrency in circulation</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </th>
        <th className="p-3 font-semibold whitespace-nowrap text-right">
          <div className="flex items-center justify-end">
            <span>Volume(24h)</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="ml-1 h-4 w-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="w-[240px] text-xs">Total trading volume in the last 24 hours</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </th>
        <th className="p-3 font-semibold whitespace-nowrap text-right">
          <div className="flex items-center justify-end">
            <span>Circulating Supply</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="ml-1 h-4 w-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="w-[240px] text-xs">Amount of coins currently in circulation</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </th>
        <th className="p-3 font-semibold whitespace-nowrap text-center">Last 7 Days</th>
      </tr>
    </thead>
  );
};

export default CryptoTableHeader;
