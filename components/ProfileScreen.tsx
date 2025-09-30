import React, { useState } from 'react';
import { UserProfile, Subject } from '../types';
import { AVATARS } from '../constants';

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
    
    const selectedAvatarSVG = AVATARS[userProfile.avatar] || AVATARS['avatar1'];

    return (
        <div className="p-6 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center mb-6">
                <div className="w-24 h-24 rounded-full bg-purple-600 flex items-center justify-center mb-4 md:mb-0 md:mr-6 border-4 border-gray-700 p-2 text-white">
                    {/* FIX: Cast element to allow className prop for React.cloneElement */}
                    {React.cloneElement(selectedAvatarSVG as React.ReactElement<{ className?: string }>, { className: "w-full h-full"})}
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white">{userProfile.name}</h2>
                    <p className="text-md text-gray-400 mb-2">{allTrades.find(t => t.id === userProfile.preferredTrade)?.name || 'TVET Division'}</p>
                    <p className="text-sm text-gray-300 italic">"{userProfile.bio}"</p>
                </div>
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
                                className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white focus:ring-purple-500 focus:border-purple-500"
                            />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Bio</label>
                            <textarea 
                                value={editableProfile.bio}
                                onChange={(e) => setEditableProfile({...editableProfile, bio: e.target.value})}
                                className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white focus:ring-purple-500 focus:border-purple-500"
                                rows={3}
                            />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Preferred Trade</label>
                            <select 
                                value={editableProfile.preferredTrade}
                                onChange={(e) => setEditableProfile({...editableProfile, preferredTrade: e.target.value})}
                                className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white focus:ring-purple-500 focus:border-purple-500"
                            >
                                {allTrades.map(trade => (
                                    <option key={trade.id} value={trade.id}>{trade.name}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Select Avatar</label>
                            <div className="flex space-x-3">
                                {Object.keys(AVATARS).map(avatarKey => (
                                    <button 
                                        key={avatarKey}
                                        onClick={() => setEditableProfile({...editableProfile, avatar: avatarKey})}
                                        className={`w-16 h-16 p-2 rounded-full border-4 transition-colors duration-200 ${editableProfile.avatar === avatarKey ? 'border-purple-500 bg-purple-700' : 'border-gray-600 bg-gray-700 hover:border-purple-400'}`}
                                    >
                                        {/* FIX: Cast element to allow className prop for React.cloneElement */}
                                        {React.cloneElement(AVATARS[avatarKey] as React.ReactElement<{ className?: string }>, { className: "w-full h-full text-white"})}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-end space-x-2 pt-4">
                             <button onClick={() => {setIsEditing(false); setEditableProfile(userProfile);}} className="px-4 py-2 bg-gray-600 rounded-md font-semibold hover:bg-gray-500">Cancel</button>
                            <button onClick={handleSave} className="px-4 py-2 bg-purple-600 rounded-md font-semibold hover:bg-purple-700">Save Changes</button>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-between items-center">
                        <p className="text-gray-300">Update your personal information and avatar.</p>
                        <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-purple-600 rounded-md font-semibold hover:bg-purple-700">Edit Profile</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfileScreen;