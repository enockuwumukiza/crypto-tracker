import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connectToBinance } from "../crypto/binanceSocket"
import { Link } from 'react-router-dom';

import {
  selectAllCryptos,
  selectTopGainers,
  selectTopLosers,
  selectSortedByMarketCap,
  updateCryptoData,
} from "../../features/crypto/cryptoSlice"
import CryptoCard from "../../components/CryptoCard"

const FILTER_OPTIONS = ['all', 'topGainers', 'topLosers', 'marketCap'];

const CryptoTracker: React.FC = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState<'all' | 'topGainers' | 'topLosers' | 'marketCap'>('all');

  // Select all variants from redux
  const data = useSelector(selectAllCryptos);
  const topGainers = useSelector(selectTopGainers);
  const topLosers = useSelector(selectTopLosers);
  const marketCapSorted = useSelector(selectSortedByMarketCap);

  // WebSocket Connection
  useEffect(() => {
    const disconnect = connectToBinance((incomingData) => {
      dispatch(updateCryptoData(incomingData as any));
    });

    return () => {
      if (disconnect) disconnect();
    };
  }, [dispatch]);

  // Memoized filtered data
  const filteredData = useMemo(() => {
    switch (filter) {
      case 'topGainers':
        return topGainers;
      case 'topLosers':
        return topLosers;
      case 'marketCap':
        return marketCapSorted;
      default:
        return data;
    }
  }, [filter, data, topGainers, topLosers, marketCapSorted]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6">📈 Real-Time Crypto Watch</h1>
    
      {/* Return Button */}
            <div className="flex justify-start mb-6">
              <Link to="/">
                <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md hover:from-indigo-600 hover:to-blue-500 transition ease-in-out duration-300">
                  ⬅️ Return
                </button>
              </Link>
            </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        {FILTER_OPTIONS.map((opt) => (
          <button
            key={opt}
            onClick={() => setFilter(opt as any)}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              filter === opt
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
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

      {/* Crypto Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredData?.map((crypto: any) => (
          <CryptoCard key={crypto.symbol} data={crypto} />
        ))}
      </div>
    </div>
  );
};

export default CryptoTracker;
