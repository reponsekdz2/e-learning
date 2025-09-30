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
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  xpForNextLevel: number;
}

const FilterButton: React.FC<{label: string, isActive: boolean, onClick: () => void}> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors flex-1 ${
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
    setSubjectFilter,
    searchTerm,
    setSearchTerm,
    xpForNextLevel
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

  const xpPercentage = (userProfile.xp / xpForNextLevel) * 100;

  const filterAndSearchVisible = [
      ActiveView.Quizzes, 
      ActiveView.Study, 
      ActiveView.MyQuizzes, 
      ActiveView.ContentManagement,
      ActiveView.Bookmarks
  ].includes(activeView);

  return (
    <header className="bg-gray-800 sticky top-0 z-20 border-b border-gray-700">
      {/* Top Bar: Menu, Title, Notifications, Profile */}
      <div className="flex items-center justify-between p-4">
        {/* Left side: Mobile Menu & Desktop Title */}
        <div className="flex items-center gap-4">
          <button onClick={onMenuClick} className="text-gray-400 hover:text-white lg:hidden">
            {ICONS.MENU}
          </button>
          <div className="text-xl font-bold text-white capitalize">
            {activeView}
          </div>
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
                  <div className="flex items-center justify-end">
                    <p className="font-semibold text-white">{userProfile.name}</p>
                    {userProfile.role === 'student' && <span className="ml-2 px-2 py-0.5 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full">LVL {userProfile.level}</span>}
                  </div>
                  {userProfile.role === 'student' && <div className="w-28 bg-gray-600 rounded-full h-1.5 mt-1">
                      <div className="bg-purple-500 h-1.5 rounded-full" style={{width: `${xpPercentage}%`}}></div>
                  </div>}
              </div>
              <div className="w-10 h-10 rounded-full bg-purple-600 border-2 border-purple-400 overflow-hidden">
                  {React.cloneElement(AVATARS[userProfile.avatar] || AVATARS['avatar1'], {className: "w-full h-full p-1 text-white"})}
              </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Filters & Search (if applicable) */}
      {filterAndSearchVisible && (
          <div className="p-4 pt-0 md:flex md:items-center md:justify-between md:gap-4">
              <div className="flex items-center bg-gray-900 p-1 rounded-lg space-x-1 mb-4 md:mb-0 w-full md:w-auto">
                  <FilterButton label="All Subjects" isActive={subjectFilter === 'All'} onClick={() => setSubjectFilter('All')} />
                  <FilterButton label="General" isActive={subjectFilter === 'General'} onClick={() => setSubjectFilter('General')} />
                  <FilterButton label="TVET" isActive={subjectFilter === 'TVET'} onClick={() => setSubjectFilter('TVET')} />
              </div>
              <div className="flex-1 max-w-lg">
                  <div className="flex items-center bg-gray-700 rounded-full px-4 py-2 w-full">
                      {React.cloneElement(ICONS.SEARCH, { className: 'h-5 w-5 text-gray-400' })}
                      <input 
                        type="text" 
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-transparent text-white placeholder-gray-400 ml-2 focus:outline-none w-full"
                      />
                  </div>
              </div>
          </div>
      )}
    </header>
  );
};

export default Header;