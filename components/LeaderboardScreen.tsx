import React from 'react';
import { ICONS } from '../constants';
import { leaderboardData } from '../data/leaderboard';

const LeaderboardScreen: React.FC = () => {
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

        <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700">
            <div className="grid grid-cols-12 px-4 py-3 text-sm font-semibold text-gray-400 border-b border-gray-700">
                <div className="col-span-2">Rank</div>
                <div className="col-span-6">Name</div>
                <div className="col-span-4 text-right">Score</div>
            </div>
            <div className="space-y-1 p-2">
                {leaderboardData.map((user) => (
                    <div 
                        key={user.rank} 
                        className={`grid grid-cols-12 items-center p-3 rounded-md transition-colors duration-200 ${user.isCurrentUser ? 'bg-purple-800' : 'hover:bg-gray-700'}`}
                    >
                        <div className="col-span-2 font-bold text-lg">{user.rank}</div>
                        <div className="col-span-6 font-medium">{user.name} {user.isCurrentUser && '(You)'}</div>
                        <div className="col-span-4 text-right font-semibold text-yellow-400">{user.score.toLocaleString()} PTS</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default LeaderboardScreen;