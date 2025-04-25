export const BINANCE_WS_URL = 'wss://stream.binance.com:9443/ws/!ticker@arr';

export type BinanceTicker = {
  s: string; // symbol
  c: string; // close price
  P: string; // percent change
  p: string; // price change
  v: string; // volume
};

export function connectToBinance(
  onMessage: (data: BinanceTicker[]) => void
): () => void {
  let socket: WebSocket;

  try {
    socket = new WebSocket(BINANCE_WS_URL);

    socket.onopen = () => {
      console.log('[BinanceSocket] Connected');
    };

    socket.onmessage = (event) => {
      const parsedData = JSON.parse(event.data) as BinanceTicker[];
      onMessage(parsedData);
    };

    socket.onerror = (error) => {
      console.error('[BinanceSocket] Error:', error);
    };

    socket.onclose = (event) => {
      console.warn('[BinanceSocket] Connection closed:', event.reason);
    };
  } catch (error) {
    console.error('[BinanceSocket] Failed to connect:', error);
  }

  // Return a cleanup function
  return () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.close();
    }
  };
}
