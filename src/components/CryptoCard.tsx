import React from 'react';

// Define the CryptoData interface
interface CryptoData {
  symbol: string;
  price: number;
  percentChange24h: number;
  volume24h: number;
  marketCap: number;
}

// Define the Props interface
interface Props {
  data: CryptoData;
}

// Create a mapping of cryptocurrency symbols to their logos
const logoMapping: { [key: string]: string } = {
  BTC: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSEEUJQPS_ARZeaL2PTiA5K0qDjwFzMoVQA&s',
  ETH: 'https://user-images.githubusercontent.com/80636305/126576577-cb07ba84-a4fe-4d63-b43a-e7832c77483d.png',
  XRP: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStEx8l1lrrq1h7ap3moMYOl-dmeNzfi3HTOw&s',
  USDT: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMESMqw9Wx-0hqU8xGRGZOXGSffubVQp17A&s',
  BNB: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP9cUvoCvmCXO4pNHvnREHBCKW30U-BVxKfg&s',
  ADA: 'https://logowik.com/content/uploads/images/cardano-ada-icon19.logowik.com.webp',
  SOL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH2rvI0FKxYk-l-MP9WiRkZUR4bY3qGkvz_w&s'
};

const CryptoCard: React.FC<Props> = ({ data }) => {
  const { symbol, price, percentChange24h, volume24h, marketCap } = data;

  const isPositive = percentChange24h >= 0;

  // Get the logo for the cryptocurrency symbol, default to a placeholder if not found
  const logo = logoMapping[symbol] || 'https://cryptologos.cc/logos/cryptocurrency-placeholder-logo.png';

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center max-w-sm mx-auto">
      <div className="flex items-center space-x-4 mb-4">
        {/* Display the logo */}
        <img src={logo} alt={`${symbol} logo`} className="w-16 h-16 rounded-full border-2 border-gray-300 p-2" />
        <h2 className="text-xl font-semibold">{symbol}</h2>
      </div>
      <p className="text-gray-700 text-sm">Price: ${price.toFixed(2)}</p>
      <p className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        24h: {percentChange24h.toFixed(2)}%
      </p>
      <p className="text-gray-500 text-sm">
        Volume: ${volume24h?.toLocaleString() || 'N/A'}
      </p>
      <p className="text-gray-500 text-sm">
        Market Cap: ${marketCap?.toLocaleString() || 'N/A'}
      </p>
    </div>
  );
};

export default CryptoCard;
