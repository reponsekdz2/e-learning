import React, { useState } from 'react';
import { ICONS } from '../constants';
import { DailyChallenge } from '../types';

interface ChallengesScreenProps {
    challenge: DailyChallenge;
    onStartChallenge: () => void;
}

const ChallengesScreen: React.FC<ChallengesScreenProps> = ({ challenge, onStartChallenge }) => {
  return (
    <div className="w-full max-w-xl mx-auto text-center">
        <div className="flex justify-center mb-4 text-purple-400">
           {React.cloneElement(ICONS.CHALLENGES as React.ReactElement<{className?: string}>, { className: "h-24 w-24"})}
        </div>
        <h2 className="text-4xl font-bold text-white mb-2">Daily Challenge</h2>
        <p className="text-xl text-gray-300 mb-8">
            Test your skills with a unique daily challenge for special rewards.
        </p>
        
        <div className="p-6 bg-gradient-to-br from-purple-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl border-2 border-purple-600">
            <h3 className="text-yellow-400 text-lg font-semibold capitalize">Today's Challenge</h3>
            <h4 className="text-3xl font-bold text-white my-3">{challenge.title}</h4>
            <p className="text-gray-400 mb-6">
                A special quiz with <span className="font-bold text-white">{challenge.quiz.questions.length} questions</span>. Can you get a perfect score?
            </p>
            <button 
                onClick={onStartChallenge}
                className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
            >
                Start Daily Challenge
            </button>
        </div>
    </div>
  );
};

export default ChallengesScreen;