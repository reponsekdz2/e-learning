import React from 'react';
import { ICONS } from '../constants';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in">
      <div className="mb-6">
        {React.cloneElement(ICONS.LOGO, { className: 'h-24 w-24 text-purple-400' })}
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
        Igacyane
      </h1>
      <p className="text-xl text-gray-300 mb-8 max-w-lg">
        Rwanda's AI-powered learning platform for General & TVET subjects.
      </p>
      <button
        onClick={onStart}
        className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-lg rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
      >
        Get Started
      </button>
    </div>
  );
};

export default StartScreen;