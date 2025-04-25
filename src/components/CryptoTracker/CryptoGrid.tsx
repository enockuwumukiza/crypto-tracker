import React from 'react';
import CryptoCard from '../CryptoCard';

interface Props {
  data: any[]; // You can strongly type this with your crypto model
}

const CryptoGrid: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.map((crypto) => (
        <CryptoCard key={crypto.symbol} data={crypto} />
      ))}
    </div>
  );
};

export default CryptoGrid;
