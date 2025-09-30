import React from 'react';
import { ICONS } from '../constants';

const ChallengesScreen: React.FC = () => {
  return (
    <div className="text-center p-8 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 max-w-md mx-auto">
        <div className="flex justify-center mb-4 text-purple-400">
           {React.cloneElement(ICONS.CHALLENGES, { className: "h-24 w-24"})}
        </div>
        <h2 className="text-4xl font-bold text-white mb-2">Challenges</h2>
        <p className="text-xl text-gray-300">
            A new competitive mode is on the way. Get ready to challenge others!
        </p>
    </div>
  );
};

export default ChallengesScreen;