
import React, { useState } from 'react';
import { UserProfile, Notification } from '../types';
import { ICONS } from '../constants';

interface HeaderProps {
  userProfile: UserProfile;
  onLogout: () => void;
  onToggleSidebar: () => void;
  subjectFilter: 'All' | 'General' | 'TVET';
  setSubjectFilter: (filter: 'All' | 'General' | 'TVET') => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  notifications: Notification[];
  showFilters: boolean;
}

const Header: React.FC<HeaderProps> = ({ userProfile, onLogout, onToggleSidebar, subjectFilter, setSubjectFilter, searchTerm, setSearchTerm, notifications, showFilters }) => {
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
    const unreadCount = notifications.filter(n => !n.read).length;

    return (
        <header className="bg-gray-800 border-b border-gray-700 p-4 flex items-center justify-between sticky top-0 z-20">
            <div className="flex items-center">
                <button onClick={onToggleSidebar} className="text-gray-400 hover:text-white lg:hidden mr-4">
                    {ICONS.MENU}
                </button>
                {showFilters && (
                    <div className="hidden md:flex items-center gap-4">
                        {/* Search Bar */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search subjects..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="bg-gray-700 border border-gray-600 rounded-full py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 w-64"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                {ICONS.SEARCH}
                            </div>
                        </div>
                        {/* Filters */}
                        <div className="flex items-center bg-gray-700 rounded-full p-1">
                            {(['All', 'General', 'TVET'] as const).map(filter => (
                                <button
                                    key={filter}
                                    onClick={() => setSubjectFilter(filter)}
                                    className={`px-4 py-1 text-sm font-semibold rounded-full transition-colors ${subjectFilter === filter ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-600'}`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="flex items-center gap-4">
                {/* Notification Bell */}
                <div className="relative">
                    <button onClick={() => setIsNotificationDropdownOpen(!isNotificationDropdownOpen)} className="text-gray-400 hover:text-white relative">
                        {ICONS.NOTIFICATION}
                        {unreadCount > 0 && (
                            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">{unreadCount}</span>
                        )}
                    </button>
                     {isNotificationDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-80 bg-gray-700 rounded-lg shadow-lg border border-gray-600 overflow-hidden">
                           {/* dropdown content */}
                        </div>
                    )}
                </div>

                {/* Profile Dropdown */}
                <div className="relative">
                    <button onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)} className="flex items-center gap-2">
                        <img className="h-8 w-8 rounded-full bg-purple-500" src={`https://api.dicebear.com/7.x/initials/svg?seed=${userProfile.name}`} alt="avatar" />
                        <span className="hidden md:block font-semibold text-white">{userProfile.name}</span>
                    </button>
                    {isProfileDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg py-1 border border-gray-600">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">Profile</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">Settings</a>
                            <div className="border-t border-gray-600 my-1"></div>
                            <button onClick={onLogout} className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-600">
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
