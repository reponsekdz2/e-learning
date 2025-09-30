import React, { useState, useEffect, useRef } from 'react';
import { UserProfile, Notification, ActiveView } from '../types';
import { ICONS, AVATARS } from '../constants';

interface HeaderProps {
  onMenuClick: () => void;
  userProfile: UserProfile;
  notifications: Notification[];
  onMarkNotificationsRead: () => void;
  activeView: ActiveView;
  subjectFilter: 'All' | 'General' | 'TVET';
  setSubjectFilter: (filter: 'All' | 'General' | 'TVET') => void;
}

const FilterButton: React.FC<{label: string, isActive: boolean, onClick: () => void}> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
            isActive ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
    >
        {label}
    </button>
);


const Header: React.FC<HeaderProps> = ({ 
    onMenuClick, 
    userProfile, 
    notifications, 
    onMarkNotificationsRead,
    activeView,
    subjectFilter,
    setSubjectFilter
}) => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleNotificationToggle = () => {
    setIsNotificationsOpen(prev => !prev);
    if (!isNotificationsOpen && unreadCount > 0) {
      onMarkNotificationsRead();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 lg:bg-transparent sticky top-0 z-20 lg:relative border-b border-gray-700 lg:border-none">
      {/* Left side: Mobile Menu & Filters */}
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="text-gray-400 hover:text-white lg:hidden">
          {ICONS.MENU}
        </button>
        {activeView === ActiveView.Quizzes && (
            <div className="hidden lg:flex items-center bg-gray-800 p-1 rounded-lg space-x-2">
                <FilterButton label="All Subjects" isActive={subjectFilter === 'All'} onClick={() => setSubjectFilter('All')} />
                <FilterButton label="General" isActive={subjectFilter === 'General'} onClick={() => setSubjectFilter('General')} />
                <FilterButton label="TVET" isActive={subjectFilter === 'TVET'} onClick={() => setSubjectFilter('TVET')} />
            </div>
        )}
      </div>


      {/* Center: Search (Optional, can be expanded) */}
       <div className="hidden md:flex items-center bg-gray-700 rounded-full px-4 py-2 w-64 lg:w-96">
        {React.cloneElement(ICONS.SEARCH, { className: 'h-5 w-5 text-gray-400' })}
        <input 
          type="text" 
          placeholder="Search subjects..."
          className="bg-transparent text-white placeholder-gray-400 ml-2 focus:outline-none w-full"
        />
      </div>

      {/* Right side icons and profile */}
      <div className="flex items-center space-x-4">
        <div className="relative" ref={notificationRef}>
            <button onClick={handleNotificationToggle} className="relative text-gray-400 hover:text-white">
                {ICONS.NOTIFICATION}
                {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        {unreadCount}
                    </span>
                )}
            </button>
            {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50">
                    <div className="p-3 border-b border-gray-700">
                        <h3 className="font-semibold text-white">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                        {notifications.length > 0 ? (
                            notifications.map(notif => (
                                <div key={notif.id} className="p-3 hover:bg-gray-700 border-b border-gray-700 last:border-b-0">
                                    <p className="text-sm text-gray-300">{notif.message}</p>
                                    <p className="text-xs text-gray-500 mt-1">{new Date(notif.date).toLocaleString()}</p>
                                </div>
                            ))
                        ) : (
                             <p className="text-sm text-gray-400 p-4 text-center">No new notifications.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
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