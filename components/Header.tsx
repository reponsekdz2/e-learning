import React, { useState } from 'react';
import { UserProfile, ActiveView, SubjectCategory } from '../types';
import { ICONS, AVATARS } from '../constants';

const FilterButton: React.FC<{
    label: string;
    isActive: boolean;
    onClick: () => void;
}> = ({ label, isActive, onClick }) => {
    const activeClass = isActive ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600';
    return (
        <button
            onClick={onClick}
            className={`px-3 py-1.5 rounded-md font-semibold text-sm transition-colors duration-200 ${activeClass}`}
        >
            {label}
        </button>
    );
};

interface HeaderProps {
    userProfile: UserProfile;
    activeView: ActiveView;
    activeFilter: SubjectCategory | 'All';
    onFilterChange: (filter: SubjectCategory | 'All') => void;
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ userProfile, activeView, activeFilter, onFilterChange, onMenuClick }) => {
    const avatarSVG = AVATARS[userProfile.avatar] || AVATARS['avatar1'];
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);

    return (
        <header className="w-full bg-gray-800 p-3 border-b border-gray-700 flex justify-between items-center shrink-0 h-16">
            <div className="flex items-center space-x-2">
                <button onClick={onMenuClick} className="p-2 rounded-full text-gray-300 hover:bg-gray-700 lg:hidden" aria-label="Open menu">
                   {ICONS.MENU}
                </button>
                <div className={`items-center space-x-4 ${isSearchExpanded ? 'hidden sm:flex' : 'flex'}`}>
                    {ICONS.LOGO}
                    <span className="text-xl font-bold text-white hidden sm:block">Gemini Genius</span>
                </div>
            </div>

            {/* Contextual Filters for Desktop */}
            {activeView === ActiveView.Quizzes && (
                <div className="hidden lg:flex items-center justify-center space-x-2 flex-1">
                    <FilterButton label="All Subjects" isActive={activeFilter === 'All'} onClick={() => onFilterChange('All')} />
                    <FilterButton label="General" isActive={activeFilter === 'General'} onClick={() => onFilterChange('General')} />
                    <FilterButton label="TVET" isActive={activeFilter === 'TVET'} onClick={() => onFilterChange('TVET')} />
                </div>
            )}

            {/* Search Bar */}
            <div className={`flex items-center justify-end flex-1`}>
                 <div className={`relative transition-all duration-300 ${isSearchExpanded ? 'w-full max-w-sm' : 'w-10'}`}>
                    <span className={`absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 transition-opacity ${isSearchExpanded ? 'opacity-100' : 'opacity-0 sm:opacity-100'}`}>
                        {ICONS.SEARCH}
                    </span>
                    <input
                        type="text"
                        placeholder="Search..."
                        onFocus={() => setIsSearchExpanded(true)}
                        onBlur={() => setIsSearchExpanded(false)}
                        className={`w-full bg-gray-700 border border-gray-600 rounded-full py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hidden sm:block`}
                    />
                    {/* Mobile Search button */}
                    <button onClick={() => setIsSearchExpanded(true)} className="p-2 rounded-full text-gray-300 hover:bg-gray-700 sm:hidden">
                        {ICONS.SEARCH}
                    </button>
                </div>
            </div>
            
            <div className={`flex items-center space-x-4 sm:space-x-6 ml-2 ${isSearchExpanded ? 'hidden sm:flex' : 'flex'}`}>
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