import React from 'react';
import { RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import Menu from '../../utils/Menu';

const Header: React.FC = () => {
  return (
    <header className="flex relative flex-col md:flex-row justify-between items-center mb-6 px-6 py-4 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 rounded-lg shadow-lg">
      <motion.div
        className="mb-4 md:mb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-white mb-2">Crypto Watch</h1>
        <p className="text-gray-300 mb-4 md:mb-0">
          Real-time prices and market data for top cryptocurrencies
        </p>
      </motion.div>

      <motion.div
        className="flex items-center bg-gray-800 rounded-md px-6 py-3 text-gray-400 text-sm cursor-pointer hover:bg-gray-700 transition duration-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
        <span>Live updates</span>
      </motion.div>
      <Menu selected="all" onSelect={() => null} />
    </header>
  );
};

export default Header;
