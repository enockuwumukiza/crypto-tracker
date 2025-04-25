import React, { useEffect } from 'react';
import { useAppSelector } from "../../hooks/redux"
import { selectAllCryptos } from "../../features/crypto/cryptoSlice"
import CryptoTableHeader from "../CryptoTable/CrytopTableHeader"
import CryptoTableRow from "../../components/CryptoTable/CrytopTableRow";
import mockCryptoWebSocket from "../../services/mocCryptoWebsocket"

const CryptoTable: React.FC = () => {
  const cryptos = useAppSelector(selectAllCryptos);

  useEffect(() => {
    // Connect to mock WebSocket when component mounts
    mockCryptoWebSocket.connect();
    
    // Disconnect when component unmounts
    return () => {
      mockCryptoWebSocket.disconnect();
    };
  }, []);

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <CryptoTableHeader />
        <tbody className="divide-y divide-gray-700">
          {cryptos.map((crypto: any) => (
            <CryptoTableRow key={crypto.id} crypto={crypto} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
