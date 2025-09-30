import React from 'react';
import { ActiveView, UserProfile } from '../types';
import { ICONS } from '../constants';

interface SidebarProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  userRole: UserProfile['role'];
}

const NavItem: React.FC<{
  icon: React.ReactElement;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => {
  const activeClass = isActive ? 'bg-purple-800 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white';
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors duration-200 ${activeClass}`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
};

const studentNavItems = [
    { view: ActiveView.Quizzes, label: 'Quiz Hub', icon: ICONS.QUIZZES },
    { view: ActiveView.Profile, label: 'Profile', icon: ICONS.PROFILE },
    { view: ActiveView.Tests, label: 'Tests', icon: ICONS.TESTS },
    { view: ActiveView.Challenges, label: 'Challenges', icon: ICONS.CHALLENGES },
    { view: ActiveView.Wallet, label: 'Wallet', icon: ICONS.WALLET },
    { view: ActiveView.Leaderboard, label: 'Leaderboard', icon: ICONS.LEADERBOARD },
    { view: ActiveView.Study, label: 'Study Mode', icon: ICONS.STUDY },
    { view: ActiveView.Bookmarks, label: 'Bookmarks', icon: React.cloneElement(ICONS.BOOKMARK_EMPTY, {className:"h-6 w-6 mr-3"})},
    { view: ActiveView.Chatbot, label: 'AI Tutor', icon: ICONS.CHATBOT },
];

const teacherNavItems = [
    { view: ActiveView.TeacherDashboard, label: 'Overview', icon: ICONS.QUIZZES },
    { view: ActiveView.MyQuizzes, label: 'My Quizzes', icon: ICONS.TESTS },
    { view: ActiveView.MyStudents, label: 'Students', icon: ICONS.PROFILE },
    { view: ActiveView.Profile, label: 'Profile', icon: ICONS.PROFILE },
];

const adminNavItems = [
    { view: ActiveView.AdminDashboard, label: 'Overview', icon: ICONS.QUIZZES },
    { view: ActiveView.UserManagement, label: 'User Management', icon: ICONS.PROFILE },
    { view: ActiveView.ContentManagement, label: 'Content Management', icon: ICONS.STUDY },
    { view: ActiveView.Profile, label: 'Profile', icon: ICONS.PROFILE },
];


const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView, isOpen, setIsOpen, userRole }) => {
  const sidebarClasses = `
    w-64 bg-gray-800 h-screen p-4 flex flex-col border-r border-gray-700
    fixed top-0 left-0 z-40
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    lg:translate-x-0
  `;
  
  let navItems = studentNavItems;
  if (userRole === 'teacher') navItems = teacherNavItems;
  if (userRole === 'admin') navItems = adminNavItems;

  const handleNavItemClick = (view: ActiveView) => {
    setActiveView(view);
    if(window.innerWidth < 1024) { // Close sidebar on mobile after click
        setIsOpen(false);
    }
  }

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div className={sidebarClasses}>
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-white">Igacyane</h1>
          <p className="text-sm text-purple-400 capitalize">{userRole} Portal</p>
        </div>
        <nav className="flex flex-col space-y-2">
            {navItems.map(item => (
                <NavItem 
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    isActive={activeView === item.view}
                    onClick={() => handleNavItemClick(item.view)}
                />
            ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;