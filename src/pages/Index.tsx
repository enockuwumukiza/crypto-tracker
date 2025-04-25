
import { Provider } from 'react-redux';
import { store } from '../store/store';
import CryptoTable from '../components/CryptoTable/index';
import Header from "../components/Header/index";
import YouTubeEmbed from '../components/CryptoTracker/YouTubeEmbed';

const Index = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
        <div className="container mx-auto max-w-7xl">
          <Header />
          <main>
            <CryptoTable />
          </main>
          <div>
            <YouTubeEmbed />
          </div>
          <footer className="mt-8 text-center text-gray-500 text-sm py-4">
            <p>
              Data updates simulated in real-time. For demonstration purposes only.
            </p>
          </footer>
        </div>
      </div>
    </Provider>
  );
};

export default Index;