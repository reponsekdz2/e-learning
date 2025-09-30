import React, { useState } from 'react';
import { UserProfile, Subject } from '../types';

interface ProfileScreenProps {
    userProfile: UserProfile;
    onUpdateProfile: (newProfile: UserProfile) => void;
    allTrades: Subject[];
}

const StatCard: React.FC<{ label: string; value: string | number; }> = ({ label, value }) => (
    <div className="bg-gray-700 p-4 rounded-lg text-center">
        <p className="text-sm text-gray-400">{label}</p>
        <p className="text-2xl font-bold text-white">{value}</p>
    </div>
);

const ProfileScreen: React.FC<ProfileScreenProps> = ({ userProfile, onUpdateProfile, allTrades }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editableProfile, setEditableProfile] = useState(userProfile);

    const handleSave = () => {
        onUpdateProfile(editableProfile);
        setIsEditing(false);
    }

    return (
        <div className="p-6 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 max-w-2xl mx-auto">
            <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 rounded-full bg-purple-600 flex items-center justify-center mb-4 border-4 border-gray-700">
                    <svg xmlns="http://www.w.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">{userProfile.name}</h2>
                <p className="text-md text-gray-400">Student | {allTrades.find(t => t.id === userProfile.preferredTrade)?.name || 'TVET Division'}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <StatCard label="Quizzes Completed" value={27} />
                <StatCard label="Average Score" value="88%" />
                <StatCard label="Overall Rank" value="Top 5%" />
            </div>

            <div className="border-t border-gray-700 pt-6">
                <h3 className="text-xl font-bold text-white mb-4">Settings & Customization</h3>
                {isEditing ? (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                            <input 
                                type="text"
                                value={editableProfile.name}
                                onChange={(e) => setEditableProfile({...editableProfile, name: e.target.value})}
                                className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white"
                            />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Preferred Trade</label>
                            <select 
                                value={editableProfile.preferredTrade}
                                onChange={(e) => setEditableProfile({...editableProfile, preferredTrade: e.target.value})}
                                className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white"
                            >
                                {allTrades.map(trade => (
                                    <option key={trade.id} value={trade.id}>{trade.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex justify-end space-x-2">
                             <button onClick={() => setIsEditing(false)} className="px-4 py-2 bg-gray-600 rounded-md font-semibold hover:bg-gray-500">Cancel</button>
                            <button onClick={handleSave} className="px-4 py-2 bg-purple-600 rounded-md font-semibold hover:bg-purple-700">Save Changes</button>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-between items-center">
                        <p className="text-gray-300">Update your personal information.</p>
                        <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-purple-600 rounded-md font-semibold hover:bg-purple-700">Edit Profile</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileScreen;