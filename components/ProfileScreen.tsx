
import React from 'react';
import { UserProfile, Achievement, QuizAttempt } from '../types';
import { AVATARS } from '../constants';

interface ProfileScreenProps {
  user: UserProfile;
  achievements: Achievement[];
  history: QuizAttempt[];
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ user, achievements, history }) => {
    const userAchievements = achievements.filter(ach => user.achievements.includes(ach.id));
    const xpPercentage = (user.xp / user.xpToNextLevel) * 100;

    return (
        <div className="max-w-4xl mx-auto">
            {/* Profile Header */}
            <div className="bg-gray-800 p-8 rounded-2xl mb-8 flex flex-col md:flex-row items-center gap-8 border border-gray-700">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-purple-600 flex-shrink-0 border-4 border-purple-400 overflow-hidden">
                     {React.cloneElement(AVATARS[user.avatar] || AVATARS['avatar1'], {className: "w-full h-full p-2 text-white"})}
                </div>
                <div>
                    <h1 className="text-4xl font-bold text-white">{user.name}</h1>
                    <p className="text-purple-400 text-lg capitalize">{user.role}</p>
                    <div className="mt-4">
                        <div className="flex justify-between items-center text-sm text-gray-400 mb-1">
                            <span>Level {user.level}</span>
                            <span>{user.xp} / {user.xpToNextLevel} XP</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2.5 rounded-full" style={{ width: `${xpPercentage}%` }}></div>
                        </div>
                    </div>
                </div>
                <div className="md:ml-auto text-center">
                    <p className="text-4xl font-bold text-yellow-400">{user.coins.toLocaleString()}</p>
                    <p className="text-gray-400">Coins</p>
                </div>
            </div>

            {/* Achievements */}
            <div className="bg-gray-800 p-6 rounded-2xl mb-8 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-4">Achievements</h2>
                 <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                     {achievements.map(ach => (
                         <div key={ach.id} className={`p-4 bg-gray-700 rounded-lg text-center ${user.achievements.includes(ach.id) ? '' : 'opacity-40'}`}>
                            <span className="text-4xl">{ach.icon}</span>
                            <p className="font-bold text-sm mt-2">{ach.name}</p>
                            <p className="text-xs text-gray-400">{ach.description}</p>
                         </div>
                     ))}
                 </div>
            </div>
            
        </div>
    );
};

export default ProfileScreen;
