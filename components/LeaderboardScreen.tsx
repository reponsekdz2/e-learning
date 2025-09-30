import React, { useState } from 'react';
import { ICONS, AVATARS } from '../constants';
import { leaderboardData } from '../data/leaderboard';
import { UserProfile } from '../types';

interface LeaderboardScreenProps {
    currentUser: UserProfile;
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


const LeaderboardScreen: React.FC<LeaderboardScreenProps> = ({ currentUser }) => {
  const [activeTab, setActiveTab] = useState<'weekly' | 'all-time'>('all-time');

  // Mock weekly data by shuffling and reducing scores
  const weeklyData = [...leaderboardData]
      .sort(() => 0.5 - Math.random())
      .map((user, index) => ({...user, rank: index + 1, score: Math.round(user.score * 0.3)}));

  const dataToShow = activeTab === 'all-time' ? leaderboardData : weeklyData;


  return (
    <div className="w-full max-w-xl mx-auto">
        <div className="text-center mb-8">
            <div className="flex justify-center mb-4 text-purple-400">
            {React.cloneElement(ICONS.LEADERBOARD, { className: "h-20 w-20"})}
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">Leaderboard</h2>
            <p className="text-xl text-gray-300">
                See how you rank against the top players.
            </p>
        </div>
        
        <div className="bg-gray-800 p-2 rounded-lg flex space-x-2 max-w-sm mx-auto mb-6">
            <TabButton label="Weekly" isActive={activeTab === 'weekly'} onClick={() => setActiveTab('weekly')} />
            <TabButton label="All-Time" isActive={activeTab === 'all-time'} onClick={() => setActiveTab('all-time')} />
        </div>


        <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700">
            <div className="grid grid-cols-12 px-4 py-3 text-sm font-semibold text-gray-400 border-b border-gray-700">
                <div className="col-span-2">Rank</div>
                <div className="col-span-6">Name</div>
                <div className="col-span-4 text-right">Score</div>
            </div>
            <div className="space-y-1 p-2">
                {dataToShow.map((user) => (
                    <div 
                        key={user.rank} 
                        className={`grid grid-cols-12 items-center p-2 rounded-md transition-colors duration-200 ${user.isCurrentUser ? 'bg-purple-800 border border-purple-600' : 'hover:bg-gray-700'}`}
                    >
                        <div className="col-span-2 font-bold text-lg text-center">{user.rank}</div>
                        <div className="col-span-6 font-medium flex items-center">
                           <div className="w-8 h-8 rounded-full bg-gray-600 mr-3 flex-shrink-0 overflow-hidden">
                                {React.cloneElement(AVATARS[user.avatar] || AVATARS['avatar1'], {className: "w-full h-full p-0.5 text-white"})}
                           </div>
                           <span className="truncate">{user.name} {user.isCurrentUser && '(You)'}</span>
                        </div>
                        <div className="col-span-4 text-right font-semibold text-yellow-400">{user.score.toLocaleString()} PTS</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default LeaderboardScreen;