
import React from 'react';
import { ICONS } from '../constants';

interface PrizeScreenProps {
  onClaim: () => void;
  onRestart: () => void;
}

const PrizeScreen: React.FC<PrizeScreenProps> = ({ onClaim, onRestart }) => {
  return (
    <div className="text-center p-8 bg-gray-800 rounded-2xl shadow-2xl border border-yellow-400 max-w-md mx-auto animate-fade-in">
      <div className="flex justify-center mb-4">
        {React.cloneElement(ICONS.MONEY as React.ReactElement<{ className?: string }>, { className: "h-24 w-24 text-green-400" })}
      </div>
      <h2 className="text-4xl font-bold text-white mb-2">You Won a Prize!</h2>
      <p className="text-2xl text-yellow-400 font-semibold mb-6">
        +100 Coins Added!
      </p>
      <p className="text-gray-300 mb-8">
        Your hard work and perfect score have been rewarded. Keep it up!
      </p>
      <div className="space-y-4">
        <button
          onClick={onClaim}
          className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
        >
          Awesome!
        </button>
        <button
          onClick={onRestart}
          className="w-full px-6 py-3 bg-gray-700 text-white font-bold rounded-full shadow-lg hover:bg-gray-600 transform transition-transform duration-300"
        >
          Play Another Quiz
        </button>
      </div>
    </div>
  );
};

export default PrizeScreen;
