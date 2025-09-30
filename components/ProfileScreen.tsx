import React, { useState } from 'react';
import { UserProfile, Subject, UserProgress, Achievement, Quiz, QuizAttempt } from '../types';
import { AVATARS } from '../constants';
import { allAchievements } from '../data/achievements';

interface ProfileScreenProps {
    userProfile: UserProfile;
    onUpdateProfile: (newProfile: UserProfile) => void;
    allTrades: Subject[];
    userProgress: UserProgress;
    unlockedAchievements: Achievement[];
    subjects: Subject[];
    xpForNextLevel: number;
    onLogout: () => void;
    onStartReview: (quizId: string) => void;
}

const StatCard: React.FC<{ label: string; value: string | number; }> = ({ label, value }) => (
    <div className="bg-gray-700 p-4 rounded-lg text-center">
        <p className="text-sm text-gray-400 uppercase tracking-wider">{label}</p>
        <p className="text-2xl font-bold text-white">{value}</p>
    </div>
);

const PerformanceChart: React.FC<{progress: UserProgress, subjects: Subject[]}> = ({ progress, subjects }) => {
    const subjectScores: {[subjectId: string]: {totalScore: number, count: number}} = {};
    const allQuizzes = subjects.flatMap(s => s.quizzes);

    for (const quizId in progress) {
        const progressEntry = progress[quizId];
        if (!progressEntry) continue;

        const quiz = allQuizzes.find(q => q.id === quizId);
        const subject = subjects.find(s => s.quizzes.some(q => q.id === quizId));

        if (subject && quiz && quiz.questions.length > 0) {
            if (!subjectScores[subject.id]) {
                subjectScores[subject.id] = { totalScore: 0, count: 0};
            }
            const percentage = (progressEntry.score / quiz.questions.length) * 100;
            subjectScores[subject.id].totalScore += percentage;
            subjectScores[subject.id].count += 1;
        }
    }

    const avgScores = Object.entries(subjectScores).map(([subjectId, data]) => ({
        name: subjects.find(s => s.id === subjectId)?.name || 'Unknown',
        avg: data.totalScore / data.count,
    })).slice(0, 5);

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

const QuizHistory: React.FC<{userProgress: UserProgress, subjects: Subject[], onStartReview: (quizId: string) => void}> = ({ userProgress, subjects, onStartReview }) => {
    const allQuizzesMap = new Map<string, {quiz: Quiz, subjectName: string}>();
    subjects.forEach(s => s.quizzes.forEach(q => allQuizzesMap.set(q.id, {quiz: q, subjectName: s.name})));

    const history = Object.entries(userProgress)
        // FIX: Cast `attempt` to QuizAttempt to resolve typing issues with Object.entries.
        .map(([quizId, attempt]) => ({ quizId, attempt: attempt as QuizAttempt, quizData: allQuizzesMap.get(quizId) }))
        .filter(item => item.quizData)
        .sort((a,b) => new Date(b.attempt.date).getTime() - new Date(a.attempt.date).getTime());

    if (history.length === 0) {
        return <div className="text-center text-gray-400 py-8">Your quiz history will appear here once you complete a quiz.</div>;
    }

    return (
        <div className="space-y-3">
            {history.map(({ quizId, attempt, quizData }) => {
                const quiz = quizData!.quiz;
                const percentage = Math.round((attempt.score / quiz.questions.length) * 100);
                return (
                    <div key={quizId} className="bg-gray-700 p-3 rounded-lg flex flex-col sm:flex-row justify-between sm:items-center">
                        <div>
                            <p className="font-bold text-white">{quiz.title}</p>
                            <p className="text-xs text-gray-400">{quizData?.subjectName} - Completed on {new Date(attempt.date).toLocaleDateString()}</p>
                        </div>
                        <div className="flex items-center mt-2 sm:mt-0">
                            <p className="font-bold text-lg text-purple-400 mr-4">{percentage}%</p>
                            <button onClick={() => onStartReview(quizId)} className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700">Review</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}


const ProfileScreen: React.FC<ProfileScreenProps> = ({ userProfile, onUpdateProfile, allTrades, userProgress, unlockedAchievements, subjects, xpForNextLevel, onLogout, onStartReview }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editableProfile, setEditableProfile] = useState(userProfile);
    const [activeTab, setActiveTab] = useState<'overview' | 'history' | 'achievements'>('overview');

    const handleSave = () => {
        onUpdateProfile(editableProfile);
        setIsEditing(false);
    }
    
    const selectedAvatarSVG = AVATARS[userProfile.avatar] || AVATARS['avatar1'];

    const quizzesCompleted = Object.keys(userProgress).length;
    
    // FIX: Cast `progress` to QuizAttempt to resolve typing issues with Object.values.
    const totalPercentage = Object.values(userProgress).reduce((acc, progress) => acc + (progress as QuizAttempt).score, 0);
    const totalQuestionsAttempted = Object.values(userProgress).reduce((acc, progress) => acc + (progress as QuizAttempt).answers.length, 0);
    const averageScore = totalQuestionsAttempted > 0 ? Math.round((totalPercentage / totalQuestionsAttempted) * 100) : 0;

    const isStudent = userProfile.role === 'student';
    const xpPercentage = isStudent ? (userProfile.xp / xpForNextLevel) * 100 : 0;

    const TabButton: React.FC<{label: string, value: 'overview' | 'history' | 'achievements'}> = ({ label, value }) => (
        <button onClick={() => setActiveTab(value)} className={`px-4 py-2 text-sm font-semibold rounded-t-lg ${activeTab === value ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-800'}`}>
            {label}
        </button>
    );
    
    return (
        <div className="p-4 sm:p-6 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center mb-6 border-b border-gray-700 pb-6">
                <div className="w-24 h-24 rounded-full bg-purple-600 flex items-center justify-center mb-4 md:mb-0 md:mr-6 border-4 border-gray-700 p-2 text-white relative">
                    {React.cloneElement(selectedAvatarSVG as React.ReactElement<{ className?: string }>, { className: "w-full h-full"})}
                     {isStudent && <span className="absolute -bottom-2 -right-2 px-3 py-1 bg-yellow-400 text-yellow-900 text-sm font-bold rounded-full border-4 border-gray-800">LVL {userProfile.level}</span>}
                </div>
                <div className="text-center md:text-left flex-1">
                     <div className="flex items-center justify-center md:justify-start gap-3">
                        <h2 className="text-3xl font-bold text-white">{userProfile.name}</h2>
                        <span className="px-2 py-0.5 bg-purple-600 text-purple-100 text-xs font-bold rounded-full capitalize">{userProfile.role}</span>
                    </div>
                     <p className="text-sm text-gray-400">{userProfile.email}</p>
                     {isStudent && <p className="text-md text-purple-400 font-semibold mb-2">{allTrades.find(t => t.id === userProfile.preferredTrade)?.name || 'General Category'}</p>}
                     <p className="text-sm text-gray-300 italic">"{userProfile.bio}"</p>
                </div>
                 <div className="flex-shrink-0 mt-4 md:mt-0">
                    <button onClick={() => setIsEditing(prev => !prev)} className="px-4 py-2 bg-purple-600 rounded-md font-semibold hover:bg-purple-700 mr-2">
                        {isEditing ? 'Cancel' : 'Edit Profile'}
                    </button>
                     <button onClick={onLogout} className="px-4 py-2 bg-red-600 rounded-md font-semibold hover:bg-red-700">
                        Logout
                    </button>
                </div>
            </div>

             {isEditing && (
                    <div className="space-y-4 mb-6 p-4 bg-gray-900 rounded-lg">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                            <input type="text" value={editableProfile.name} onChange={(e) => setEditableProfile({...editableProfile, name: e.target.value})} className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Bio</label>
                            <textarea value={editableProfile.bio} onChange={(e) => setEditableProfile({...editableProfile, bio: e.target.value})} className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white focus:ring-purple-500 focus:border-purple-500" rows={2} />
                        </div>
                         {isStudent && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                 <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">School Name</label>
                                    <input type="text" value={editableProfile.schoolName} onChange={(e) => setEditableProfile({...editableProfile, schoolName: e.target.value})} className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Academic Year/Level</label>
                                    <input type="text" value={editableProfile.academicYear} onChange={(e) => setEditableProfile({...editableProfile, academicYear: e.target.value})} className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Preferred Trade</label>
                                    <select value={editableProfile.preferredTrade} onChange={(e) => setEditableProfile({...editableProfile, preferredTrade: e.target.value})} className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white focus:ring-purple-500 focus:border-purple-500">
                                        {allTrades.map(trade => <option key={trade.id} value={trade.id}>{trade.name}</option>)}
                                    </select>
                                </div>
                            </div>
                         )}
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
            
            {isStudent && (
                <>
                    <div className="border-b border-gray-700 mb-4">
                        <TabButton label="Overview" value="overview" />
                        <TabButton label="Quiz History" value="history" />
                        <TabButton label="Achievements" value="achievements" />
                    </div>

                    <div className="bg-gray-700 p-4 rounded-b-lg rounded-r-lg">
                        {activeTab === 'overview' && (
                            <div>
                                <div className="mb-6">
                                    <p className="text-sm text-gray-400">XP Progress</p>
                                    <div className="w-full bg-gray-600 rounded-full h-4">
                                        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-4 rounded-full" style={{ width: `${xpPercentage}%` }}></div>
                                    </div>
                                    <p className="text-xs text-gray-400 text-right mt-1">{Math.round(userProfile.xp)} / {Math.round(xpForNextLevel)} XP to next level</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    <StatCard label="Quizzes Completed" value={quizzesCompleted} />
                                    <StatCard label="Average Score" value={`${averageScore}%`} />
                                    <StatCard label="Achievements" value={`${unlockedAchievements.length} / ${allAchievements.length}`} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Performance by Subject</h3>
                                <PerformanceChart progress={userProgress} subjects={subjects} />
                            </div>
                        )}
                        {activeTab === 'history' && <QuizHistory userProgress={userProgress} subjects={subjects} onStartReview={onStartReview} />}
                        {activeTab === 'achievements' && (
                            <div className="space-y-3">
                                {unlockedAchievements.length > 0 ? unlockedAchievements.map(ach => (
                                    <div key={ach.id} className="flex items-center bg-gray-800 p-3 rounded-lg">
                                        <span className="text-2xl mr-3">{ach.icon}</span>
                                        <div>
                                            <p className="font-bold text-white">{ach.name}</p>
                                            <p className="text-xs text-gray-400">{ach.description}</p>
                                        </div>
                                    </div>
                                )) : <p className="text-gray-400 text-center py-4">No achievements yet. Keep playing!</p>}
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default ProfileScreen;