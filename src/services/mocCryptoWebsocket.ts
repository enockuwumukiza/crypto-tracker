
import { store } from '../store/store';
import { updateCryptoData } from "../features/crypto/cryptoSlice"

class MockCryptoWebSocket {
  private interval: NodeJS.Timeout | null = null;
  private isConnected: boolean = false;

  connect() {
    if (this.isConnected) return;
    
    this.isConnected = true;
    console.log('Mock WebSocket connected');
    
    // Simulate WebSocket updates every 1-2 seconds
    this.interval = setInterval(() => {
      const cryptoData = store.getState().crypto.data;
      
      cryptoData.forEach(crypto => {
        // Generate random price fluctuations
        const priceChange = this.getRandomFluctuation(crypto.price, 0.002);
        const newPrice = crypto.price + priceChange;
        
        // Generate random percentage changes
        const newPercentChange1h = this.getRandomPercentChange(crypto.percentChange1h);
        const newPercentChange24h = this.getRandomPercentChange(crypto.percentChange24h);
        const newPercentChange7d = this.getRandomPercentChange(crypto.percentChange7d);
        
        // Generate random volume fluctuation
        const volumeChange = this.getRandomFluctuation(crypto.volume24h, 0.005);
        const newVolume = crypto.volume24h + volumeChange;
        
        // Update chart data by removing the oldest point and adding the newest price
        const newChartData = [...crypto.chartData.slice(1), newPrice];
        
        // Dispatch the update action to Redux
        store.dispatch(updateCryptoData({
          id: crypto.id,
          price: newPrice,
          percentChange1h: newPercentChange1h,
          percentChange24h: newPercentChange24h,
          percentChange7d: newPercentChange7d,
          volume24h: newVolume,
          chartData: newChartData
        }));
      });
    }, this.getRandomInterval(1000, 2000));
  }
  
  disconnect() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    this.isConnected = false;
    console.log('Mock WebSocket disconnected');
  }
  
  private getRandomFluctuation(value: number, maxPercentage: number): number {
    const maxChange = value * maxPercentage;
    return Math.random() * maxChange * 2 - maxChange;
  }
  
  private getRandomPercentChange(currentPercent: number): number {
    const maxChange = 0.1; // Max 0.1% change per update
    const change = Math.random() * maxChange * 2 - maxChange;
    return parseFloat((currentPercent + change).toFixed(2));
  }
  
  private getRandomInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

export default new MockCryptoWebSocket();
