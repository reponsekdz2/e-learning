import React from 'react';
import { ActiveView } from '../types';
import { ICONS } from '../constants';

interface SidebarProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
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

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  return (
    <div className="w-64 bg-gray-800 h-screen p-4 flex flex-col border-r border-gray-700">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-white">Quiz Hub</h1>
        <p className="text-sm text-gray-400">Rwanda Edition</p>
      </div>
      <nav className="flex flex-col space-y-2">
        <NavItem 
          icon={ICONS.QUIZZES}
          label="Quizzes"
          isActive={activeView === ActiveView.Quizzes}
          onClick={() => setActiveView(ActiveView.Quizzes)}
        />
        <NavItem 
          icon={ICONS.PROFILE}
          label="Profile"
          isActive={activeView === ActiveView.Profile}
          onClick={() => setActiveView(ActiveView.Profile)}
        />
        <NavItem 
          icon={ICONS.TESTS}
          label="Tests"
          isActive={activeView === ActiveView.Tests}
          onClick={() => setActiveView(ActiveView.Tests)}
        />
         <NavItem 
          icon={ICONS.CHALLENGES}
          label="Challenges"
          isActive={activeView === ActiveView.Challenges}
          onClick={() => setActiveView(ActiveView.Challenges)}
        />
        <NavItem 
          icon={ICONS.WALLET}
          label="Wallet"
          isActive={activeView === ActiveView.Wallet}
          onClick={() => setActiveView(ActiveView.Wallet)}
        />
        <NavItem 
          icon={ICONS.LEADERBOARD}
          label="Leaderboard"
          isActive={activeView === ActiveView.Leaderboard}
          onClick={() => setActiveView(ActiveView.Leaderboard)}
        />
      </nav>
    </div>
  );
};

export default Sidebar;