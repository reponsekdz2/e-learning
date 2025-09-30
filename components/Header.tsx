import React from 'react';
import { UserProfile } from '../types';
import { ICONS, AVATARS } from '../constants';

interface HeaderProps {
    userProfile: UserProfile;
}

const Header: React.FC<HeaderProps> = ({ userProfile }) => {
    const avatarSVG = AVATARS[userProfile.avatar] || AVATARS['avatar1'];

    return (
        <header className="w-full bg-gray-800 p-4 border-b border-gray-700 flex justify-between items-center shrink-0">
            {/* Logo and App Name */}
            <div className="flex items-center space-x-2">
                {ICONS.LOGO}
                <span className="text-xl font-bold text-white">Gemini Genius</span>
            </div>

            {/* Search Bar */}
            <div className="relative flex-1 max-w-lg mx-8">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    {ICONS.SEARCH}
                </span>
                <input
                    type="text"
                    placeholder="Search for subjects, quizzes..."
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500"
                />
            </div>
            
            {/* Right side icons & Profile */}
            <div className="flex items-center space-x-6">
                <button className="relative text-gray-400 hover:text-white">
                    {ICONS.NOTIFICATION}
                    <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full border-2 border-gray-800"></span>
                </button>

                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center border-2 border-gray-600 text-white overflow-hidden">
                    {React.cloneElement(avatarSVG as React.ReactElement<{ className?: string }>, { className: "w-full h-full p-1" })}
                </div>
            </div>
        </header>
    );
};

export default Header;