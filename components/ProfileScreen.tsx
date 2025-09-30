import React, { useState } from 'react';
// FIX: Import Quiz and allAchievements
import { UserProfile, Subject, UserProgress, Achievement, Quiz } from '../types';
import { AVATARS } from '../constants';
import { allAchievements } from '../data/achievements';

interface ProfileScreenProps {
    userProfile: UserProfile;
    onUpdateProfile: (newProfile: UserProfile) => void;
    allTrades: Subject[];
    userProgress: UserProgress;
    unlockedAchievements: Achievement[];
    subjects: Subject[];
}

const StatCard: React.FC<{ label: string; value: string | number; }> = ({ label, value }) => (
    <div className="bg-gray-700 p-4 rounded-lg text-center">
        <p className="text-sm text-gray-400 uppercase tracking-wider">{label}</p>
        <p className="text-2xl font-bold text-white">{value}</p>
    </div>
);

// Simple bar chart component
const PerformanceChart: React.FC<{progress: UserProgress, subjects: Subject[]}> = ({ progress, subjects }) => {
    const subjectScores: {[subjectId: string]: {totalScore: number, count: number}} = {};

    // FIX: Safely access progress data and handle quizzes with no questions.
    for (const quizId in progress) {
        const progressEntry = progress[quizId];
        if (!progressEntry) continue;

        const subject = subjects.find(s => s.quizzes.some(q => q.id === quizId));
        if (subject) {
            if (!subjectScores[subject.id]) {
                subjectScores[subject.id] = { totalScore: 0, count: 0};
            }
            const quiz = subject.quizzes.find(q => q.id === quizId);
            if (quiz && quiz.questions.length > 0) {
                const percentage = (progressEntry.score / quiz.questions.length) * 100;
                subjectScores[subject.id].totalScore += percentage;
                subjectScores[subject.id].count += 1;
            }
        }
    }


    const avgScores = Object.entries(subjectScores).map(([subjectId, data]) => ({
        name: subjects.find(s => s.id === subjectId)?.name || 'Unknown',
        avg: data.totalScore / data.count,
    })).slice(0, 5); // show top 5

    if (avgScores.length === 0) {
        return <div className="text-center text-gray-400 py-8">Complete some quizzes to see your performance stats here!</div>;
    }

    return (
        <div className="space-y-2">
            {avgScores.map(item => (
                <div key={item.name} className="flex items-center">
                    <span className="w-32 text-sm text-gray-300 truncate">{item.name}</span>
                    <div className="flex-1 bg-gray-600 rounded-full h-4">
                         <div 
                            className="bg-purple-500 h-4 rounded-full text-xs text-white text-right pr-2 flex items-center justify-end"
                            style={{ width: `${item.avg}%` }}
                        >
                           {item.avg > 15 && `${Math.round(item.avg)}%`}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ userProfile, onUpdateProfile, allTrades, userProgress, unlockedAchievements, subjects }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editableProfile, setEditableProfile] = useState(userProfile);

    const handleSave = () => {
        onUpdateProfile(editableProfile);
        setIsEditing(false);
    }
    
    const selectedAvatarSVG = AVATARS[userProfile.avatar] || AVATARS['avatar1'];

    const quizzesCompleted = Object.keys(userProgress).length;
    
    // FIX: Replace buggy and unsafe average score calculation.
    const quizzesMap = new Map<string, Quiz>();
    subjects.forEach(s => s.quizzes.forEach(q => quizzesMap.set(q.id, q)));
    
    const progressEntriesWithQuizData = Object.entries(userProgress).filter(([quizId]) => quizzesMap.has(quizId));

    const totalPercentage = progressEntriesWithQuizData.reduce((acc, [quizId, progressData]) => {
        const quiz = quizzesMap.get(quizId)!;
        if (quiz.questions.length > 0) {
            const percentage = (progressData.score / quiz.questions.length) * 100;
            return acc + percentage;
        }
        return acc;
    }, 0);

    const averageScore = progressEntriesWithQuizData.length > 0 ? Math.round(totalPercentage / progressEntriesWithQuizData.length) : 0;


    return (
        <div className="p-4 sm:p-6 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center mb-6">
                <div className="w-24 h-24 rounded-full bg-purple-600 flex items-center justify-center mb-4 md:mb-0 md:mr-6 border-4 border-gray-700 p-2 text-white">
                    {React.cloneElement(selectedAvatarSVG as React.ReactElement<{ className?: string }>, { className: "w-full h-full"})}
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white">{userProfile.name}</h2>
                    <p className="text-md text-purple-400 font-semibold mb-2">{allTrades.find(t => t.id === userProfile.preferredTrade)?.name || 'TVET Division'}</p>
                    <p className="text-sm text-gray-300 italic">"{userProfile.bio}"</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <StatCard label="Quizzes Completed" value={quizzesCompleted} />
                <StatCard label="Average Score" value={`${averageScore}%`} />
                {/* FIX: Use imported allAchievements to get total count */}
                <StatCard label="Achievements" value={`${unlockedAchievements.length} / ${allAchievements.length}`} />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                 <div>
                    <h3 className="text-xl font-bold text-white mb-4">Achievements</h3>
                    <div className="space-y-3">
                         {unlockedAchievements.length > 0 ? unlockedAchievements.map(ach => (
                            <div key={ach.id} className="flex items-center bg-gray-700 p-3 rounded-lg">
                                <span className="text-2xl mr-3">{ach.icon}</span>
                                <div>
                                    <p className="font-bold text-white">{ach.name}</p>
                                    <p className="text-xs text-gray-400">{ach.description}</p>
                                </div>
                            </div>
                         )) : <p className="text-gray-400 text-center py-4">No achievements yet. Keep playing!</p>}
                    </div>
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white mb-4">Performance by Subject</h3>
                    <div className="bg-gray-700 p-4 rounded-lg">
                        <PerformanceChart progress={userProgress} subjects={subjects} />
                    </div>
                 </div>
            </div>

            <div className="border-t border-gray-700 pt-6">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white">Settings</h3>
                    <button onClick={() => setIsEditing(prev => !prev)} className="px-4 py-2 bg-purple-600 rounded-md font-semibold hover:bg-purple-700">
                        {isEditing ? 'Cancel' : 'Edit Profile'}
                    </button>
                </div>
                {isEditing && (
                    <div className="space-y-4 mt-4 border-t border-gray-700 pt-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                            <input type="text" value={editableProfile.name} onChange={(e) => setEditableProfile({...editableProfile, name: e.target.value})} className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Bio</label>
                            <textarea value={editableProfile.bio} onChange={(e) => setEditableProfile({...editableProfile, bio: e.target.value})} className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white focus:ring-purple-500 focus:border-purple-500" rows={3} />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Preferred Trade</label>
                            <select value={editableProfile.preferredTrade} onChange={(e) => setEditableProfile({...editableProfile, preferredTrade: e.target.value})} className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white focus:ring-purple-500 focus:border-purple-500">
                                {allTrades.map(trade => <option key={trade.id} value={trade.id}>{trade.name}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Select Avatar</label>
                            <div className="flex space-x-3">
                                {Object.keys(AVATARS).map(avatarKey => (
                                    <button key={avatarKey} onClick={() => setEditableProfile({...editableProfile, avatar: avatarKey})} className={`w-16 h-16 p-2 rounded-full border-4 transition-colors duration-200 ${editableProfile.avatar === avatarKey ? 'border-purple-500 bg-purple-700' : 'border-gray-600 bg-gray-700 hover:border-purple-400'}`}>
                                        {React.cloneElement(AVATARS[avatarKey] as React.ReactElement<{ className?: string }>, { className: "w-full h-full text-white"})}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-end space-x-2 pt-4">
                            <button onClick={handleSave} className="px-6 py-2 bg-purple-600 rounded-md font-semibold hover:bg-purple-700">Save Changes</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileScreen;