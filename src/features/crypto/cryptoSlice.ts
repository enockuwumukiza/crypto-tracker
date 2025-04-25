import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

export interface CryptoData {
  id: number;
  name: string;
  symbol: string;
  logo: string;
  price: number;
  percentChange1h: number;
  percentChange24h: number;
  percentChange7d: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  maxSupply: number | null;
  chartData: number[]; // Simplified data points for the mini chart
}

interface CryptoState {
  data: CryptoData[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Initial state with sample data for 5 cryptocurrencies
const initialState: CryptoState = {
  data: [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSEEUJQPS_ARZeaL2PTiA5K0qDjwFzMoVQA&s',
      price: 93759.48,
      percentChange1h: 0.43,
      percentChange24h: 0.93,
      percentChange7d: 11.11,
      marketCap: 1861618902186,
      volume24h: 43874950947,
      circulatingSupply: 19.85,
      maxSupply: 21,
      chartData: [92000, 92500, 93000, 92700, 93200, 93800, 93759],
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      logo: 'https://user-images.githubusercontent.com/80636305/126576577-cb07ba84-a4fe-4d63-b43a-e7832c77483d.png',
      price: 1802.46,
      percentChange1h: 0.60,
      percentChange24h: 3.21,
      percentChange7d: 13.68,
      marketCap: 217581279327,
      volume24h: 23547469307,
      circulatingSupply: 120.71,
      maxSupply: null,
      chartData: [1700, 1730, 1760, 1780, 1790, 1800, 1802],
    },
    {
      id: 3,
      name: 'Tether',
      symbol: 'USDT',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMESMqw9Wx-0hqU8xGRGZOXGSffubVQp17A&s',
      price: 1.00,
      percentChange1h: 0.00,
      percentChange24h: 0.00,
      percentChange7d: 0.04,
      marketCap: 145320022085,
      volume24h: 92288882007,
      circulatingSupply: 145.27,
      maxSupply: null,
      chartData: [1.00, 1.00, 1.00, 0.99, 1.00, 1.00, 1.00],
    },
    {
      id: 4,
      name: 'Binance Coin',
      symbol: 'BNB',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP9cUvoCvmCXO4pNHvnREHBCKW30U-BVxKfg&s',
      price: 606.65,
      percentChange1h: 0.09,
      percentChange24h: -1.20,
      percentChange7d: 3.73,
      marketCap: 85471956947,
      volume24h: 1874281784,
      circulatingSupply: 140.89,
      maxSupply: 200,
      chartData: [585, 590, 600, 595, 605, 610, 606],
    },
    {
      id: 5,
      name: 'Cardano',
      symbol: 'ADA',
      logo: 'https://logowik.com/content/uploads/images/cardano-ada-icon19.logowik.com.webp',
      price: 0.59,
      percentChange1h: 0.53,
      percentChange24h: 1.26,
      percentChange7d: 14.74,
      marketCap: 21381958631,
      volume24h: 881674486,
      circulatingSupply: 35.73,
      maxSupply: 45,
      chartData: [0.51, 0.52, 0.54, 0.55, 0.57, 0.58, 0.59],
    },
    {
      id: 6,
      name: 'XRP',
      symbol: 'XRP',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStEx8l1lrrq1h7ap3moMYOl-dmeNzfi3HTOw&s',
      price: 0.63,
      percentChange1h: 0.34,
      percentChange24h: 2.11,
      percentChange7d: 5.89,
      marketCap: 34059194200,
      volume24h: 1109289000,
      circulatingSupply: 54.34,
      maxSupply: 100,
      chartData: [0.60, 0.61, 0.62, 0.61, 0.62, 0.63, 0.63],
    },
    {
      id: 7,
      name: 'Solana',
      symbol: 'SOL',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH2rvI0FKxYk-l-MP9WiRkZUR4bY3qGkvz_w&s',
      price: 146.78,
      percentChange1h: 0.87,
      percentChange24h: 1.67,
      percentChange7d: 9.34,
      marketCap: 65024183000,
      volume24h: 3748291000,
      circulatingSupply: 442.69,
      maxSupply: null,
      chartData: [138, 140, 143, 144, 145, 146, 146.78],
    }
  ],
  status: 'succeeded',
  error: null
};


const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateCryptoData(state, action: PayloadAction<Partial<CryptoData>>) {
      const index = state.data.findIndex(crypto => crypto.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...action.payload };
      }
    },
    updateAllCryptoData(state, action: PayloadAction<CryptoData[]>) {
      state.data = action.payload;
    }
  }
});

export const { updateCryptoData, updateAllCryptoData } = cryptoSlice.actions;

// Selectors
export const selectAllCryptos = (state: RootState) => state.crypto.data as any;
export const selectCryptoById = (state: RootState, id: number) => 
  state.crypto.data.find(crypto => crypto.id === id);


export const selectTopGainers = (state: RootState, count: number = 5) => {
  return [...state.crypto.data]
    .sort((a, b) => b.percentChange24h - a.percentChange24h)
    .slice(0, count);
};

export const selectTopLosers = (state: RootState, count: number = 5) => {
  return [...state.crypto.data]
    .sort((a, b) => a.percentChange24h - b.percentChange24h)
    .slice(0, count);
};

export const selectSortedByMarketCap = (state: RootState) => {
  return [...state.crypto.data].sort((a, b) => b.marketCap - a.marketCap);
};

export default cryptoSlice.reducer;
