
import { Routes, Route } from 'react-router-dom';

import Index from './pages/Index';
import CryptoTracker from './features/crypto/CryptoTracker';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/tracker" element={<CryptoTracker />} />
    </Routes>
  );
};

export default App;
