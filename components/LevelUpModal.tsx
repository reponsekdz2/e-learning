import React from 'react';

interface LevelUpModalProps {
  level: number;
  onClose: () => void;
}

const LevelUpModal: React.FC<LevelUpModalProps> = ({ level, onClose }) => {
  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
        onClick={onClose}
    >
      <div 
        className="bg-gray-800 rounded-2xl shadow-2xl border-2 border-yellow-400 max-w-sm w-full p-8 text-center transform transition-all animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 mb-2">
          Level Up!
        </h2>
        <p className="text-xl text-gray-300 mb-6">
          Congratulations! You've reached
        </p>
        <div className="flex items-center justify-center mb-8">
            <span className="text-gray-400 text-2xl font-bold">Level</span>
            <span className="text-7xl font-bold text-white mx-4">{level}</span>
        </div>
        <button 
          onClick={onClose}
          className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
        >
          Keep Learning
        </button>
      </div>
    </div>
  );
};

export default LevelUpModal;