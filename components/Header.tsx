
import React from 'react';
import { UserProfile } from '../types';
import { ICONS, AVATARS } from '../constants';

interface HeaderProps {
  onMenuClick: () => void;
  userProfile: UserProfile;
  notificationsCount: number;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, userProfile, notificationsCount }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 lg:bg-transparent sticky top-0 z-20 lg:relative">
      {/* Mobile Menu Button */}
      <button onClick={onMenuClick} className="text-gray-400 hover:text-white lg:hidden">
        {ICONS.MENU}
      </button>

      {/* Search Bar (optional, can be expanded) */}
      <div className="hidden md:flex items-center bg-gray-700 rounded-full px-4 py-2 w-64">
        {React.cloneElement(ICONS.SEARCH, { className: 'h-5 w-5 text-gray-400' })}
        <input 
          type="text" 
          placeholder="Search..."
          className="bg-transparent text-white placeholder-gray-400 ml-2 focus:outline-none w-full"
        />
      </div>

      {/* Right side icons and profile */}
      <div className="flex items-center space-x-4">
        <button className="relative text-gray-400 hover:text-white">
            {ICONS.NOTIFICATION}
            {notificationsCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notificationsCount}
                </span>
            )}
        </button>
        <div className="flex items-center">
            <div className="text-right mr-3 hidden sm:block">
                <p className="font-semibold text-white">{userProfile.name}</p>
                <p className="text-xs text-gray-400">Student</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-600 border-2 border-purple-400 overflow-hidden">
                 {React.cloneElement(AVATARS[userProfile.avatar] || AVATARS['avatar1'], {className: "w-full h-full p-1 text-white"})}
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
