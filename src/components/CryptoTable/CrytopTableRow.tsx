import React, { memo } from 'react';
import { CryptoData } from '../../features/crypto/cryptoSlice';
import { formatCurrency, formatLargeNumber, formatPercentage } from '../../utils/formatters';
import { getTextColorByValue } from '../../utils/colors';
import MiniChart from '../MinChart/Index';

interface CryptoTableRowProps {
  crypto: CryptoData;
}

const CryptoTableRow: React.FC<CryptoTableRowProps> = ({ crypto }) => {
  const renderPercentage = (percent: number) => {
    return (
      <span className={getTextColorByValue(percent)}>
        {percent >= 0 ? '▲' : '▼'} {formatPercentage(percent)}
      </span>
    );
  };

    return (
  <tr className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors text-xs sm:text-sm md:text-base">
    {/* ID */}
    <td className="p-2 sm:p-3 whitespace-nowrap ">{crypto.id}</td>

    {/* Logo + Name */}
    <td className="p-2 sm:p-3 whitespace-nowrap">
      <div className="flex items-center gap-1">
        <img src={crypto.logo} alt={crypto.name} className="w-5 h-5 sm:w-6 sm:h-6 " />
        <div>
          <div className="font-medium text-xs sm:text-sm">{crypto.name}</div>
          <div className="text-gray-400 text-[10px] sm:text-xs">{crypto.symbol}</div>
        </div>
      </div>
    </td>

    {/* Price */}
    <td className="p-3 text-right whitespace-nowrap">
      {formatCurrency(crypto.price)}
    </td>

    {/* % Changes */}
    <td className="p-2 sm:p-3 text-right whitespace-nowrap">{renderPercentage(crypto.percentChange1h)}</td>
    <td className="p-2 sm:p-3 text-right whitespace-nowrap">{renderPercentage(crypto.percentChange24h)}</td>
    <td className="p-2 sm:p-3 text-right whitespace-nowrap">{renderPercentage(crypto.percentChange7d)}</td>

    {/* Market Cap */}
    <td className="p-2 sm:p-3 text-right whitespace-nowrap md:table-cell">
      ${formatLargeNumber(crypto.marketCap)}
    </td>

    {/* Volume */}
    <td className="p-2 sm:p-3 text-right whitespace-nowrap lg:table-cell">
      ${formatLargeNumber(crypto.volume24h)}
    </td>

    {/* Circulating Supply */}
    <td className="p-2 sm:p-3 text-right whitespace-nowrap lg:table-cell">
      {formatLargeNumber(crypto.circulatingSupply)} {crypto.symbol}
    </td>

    {/* 7D Chart */}
    <td className="p-2 sm:p-3 flex justify-center items-center">
      <MiniChart
        data={crypto.chartData}
        color={
          crypto.chartData[0] < crypto.chartData[crypto.chartData.length - 1]
            ? '#4ADE80'
            : '#EA384C'
        }
      />
    </td>
  </tr>
);

};

export default memo(CryptoTableRow);
