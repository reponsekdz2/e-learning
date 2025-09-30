
import React from 'react';
import { ICONS } from '../constants';

interface EndScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  onClaimPrize: () => void;
  onReview: () => void;
}

const EndScreen: React.FC<EndScreenProps> = ({ score, totalQuestions, onRestart, onClaimPrize, onReview }) => {
  const isWinner = score === totalQuestions;

  return (
    <div className="text-center p-8 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 max-w-md mx-auto">
       {isWinner ? ICONS.TROPHY : ''}
      <h2 className="text-4xl font-bold text-white mb-2">
        {isWinner ? 'Congratulations!' : 'Quiz Complete!'}
      </h2>
      <p className="text-2xl text-purple-400 font-semibold mb-6">
        You scored {score} / {totalQuestions}
      </p>
      <div className="space-y-4">
        {isWinner && (
          <button
            onClick={onClaimPrize}
            className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
          >
            Claim Your Prize!
          </button>
        )}
         <button
          onClick={onReview}
          className="w-full px-6 py-3 bg-indigo-600 text-white font-bold rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
        >
          Review Answers
        </button>
        <button
          onClick={onRestart}
          className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
        >
          {isWinner ? 'Play Again' : 'Try Another Quiz'}
        </button>
      </div>
    </div>
  );
};

export default EndScreen;