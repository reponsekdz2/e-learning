import React from 'react';
import { ICONS } from '../constants';

interface PrizeScreenProps {
  onRestart: () => void;
}

const PrizeScreen: React.FC<PrizeScreenProps> = ({ onRestart }) => {
  return (
    <div className="text-center p-8 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 max-w-md mx-auto">
      <div className="flex justify-center mb-4">
        {ICONS.TROPHY}
      </div>
      <h2 className="text-4xl font-bold text-yellow-400 mb-2">Excellent Work!</h2>
      <p className="text-xl text-gray-300 mb-6">
        You've mastered this topic. Keep up the great work!
      </p>
      <button
        onClick={onRestart}
        className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
      >
        Choose Another Subject
      </button>
    </div>
  );
};

export default PrizeScreen;