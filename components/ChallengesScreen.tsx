import React from 'react';
import { ICONS } from '../constants';
// FIX: The DailyChallenge type should be imported from the central types file.
import { DailyChallenge } from '../types';

interface ChallengesScreenProps {
    dailyChallenge: DailyChallenge;
    onStartChallenge: () => void;
}

const ChallengesScreen: React.FC<ChallengesScreenProps> = ({ dailyChallenge, onStartChallenge }) => {
  return (
    <div className="w-full max-w-xl mx-auto text-center">
        <div className="flex justify-center mb-4 text-purple-400">
           {/* FIX: Cast element to allow className prop for React.cloneElement */}
           {React.cloneElement(ICONS.CHALLENGES as React.ReactElement<{className?: string}>, { className: "h-24 w-24"})}
        </div>
        <h2 className="text-4xl font-bold text-white mb-2">Challenges</h2>
        <p className="text-xl text-gray-300 mb-8">
            Test your skills with unique daily challenges for special rewards.
        </p>
        
        <div className="p-6 bg-gradient-to-br from-purple-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl border-2 border-purple-600 animate-pulse">
            <h3 className="text-yellow-400 text-lg font-semibold">Today's Daily Challenge</h3>
            <h4 className="text-3xl font-bold text-white my-3">{dailyChallenge.title}</h4>
            <p className="text-gray-400 mb-6">
                A special quiz with <span className="font-bold text-white">{dailyChallenge.quiz.questions.length} questions</span> covering a mix of topics. Can you get a perfect score?
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