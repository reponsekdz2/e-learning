import React, { useState } from 'react';
import { ICONS } from '../constants';
import { DailyChallenge } from '../types';

interface ChallengesScreenProps {
    dailyChallenge: DailyChallenge;
    onStartChallenge: () => void;
}

const TabButton: React.FC<{label: string, isActive: boolean, onClick: () => void}> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`flex-1 py-2 px-4 text-sm font-semibold rounded-md transition-colors ${
            isActive ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
    >
        {label}
    </button>
);

const ChallengesScreen: React.FC<ChallengesScreenProps> = ({ dailyChallenge, onStartChallenge }) => {
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  
  // For demonstration, we'll reuse the daily challenge data
  const weeklyChallenge = { ...dailyChallenge, title: "Weekly TVET Master Challenge" };
  const monthlyChallenge = { ...dailyChallenge, title: "Monthly Genius Marathon" };
  
  const challenges = {
    daily: dailyChallenge,
    weekly: weeklyChallenge,
    monthly: monthlyChallenge,
  }

  const activeChallenge = challenges[activeTab];

  return (
    <div className="w-full max-w-xl mx-auto text-center">
        <div className="flex justify-center mb-4 text-purple-400">
           {React.cloneElement(ICONS.CHALLENGES as React.ReactElement<{className?: string}>, { className: "h-24 w-24"})}
        </div>
        <h2 className="text-4xl font-bold text-white mb-2">Challenges</h2>
        <p className="text-xl text-gray-300 mb-8">
            Test your skills with unique challenges for special rewards.
        </p>
        
        <div className="bg-gray-800 p-2 rounded-lg flex space-x-2 max-w-sm mx-auto mb-6">
            <TabButton label="Daily" isActive={activeTab === 'daily'} onClick={() => setActiveTab('daily')} />
            <TabButton label="Weekly" isActive={activeTab === 'weekly'} onClick={() => setActiveTab('weekly')} />
            <TabButton label="Monthly" isActive={activeTab === 'monthly'} onClick={() => setActiveTab('monthly')} />
        </div>

        <div className="p-6 bg-gradient-to-br from-purple-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl border-2 border-purple-600">
            <h3 className="text-yellow-400 text-lg font-semibold capitalize">{activeTab} Challenge</h3>
            <h4 className="text-3xl font-bold text-white my-3">{activeChallenge.title}</h4>
            <p className="text-gray-400 mb-6">
                A special quiz with <span className="font-bold text-white">{activeChallenge.quiz.questions.length} questions</span> covering a mix of topics. Can you get a perfect score?
            </p>
            <button 
                onClick={onStartChallenge}
                className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
            >
                Start {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Challenge
            </button>
        </div>
    </div>
  );
};

export default ChallengesScreen;