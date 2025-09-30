// Fix: Implemented the Sidebar component with navigation logic.
import React from 'react';
import { ICONS } from '../constants';
import { UserRole } from '../types';

type GameState =
  | 'start' | 'subject_selection' | 'quiz_selection' | 'quiz_inprogress' | 'quiz_end' | 'prize'
  | 'profile' | 'leaderboard' | 'bookmarks' | 'challenges' | 'tests' | 'wallet' | 'study' | 'chatbot';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (state: GameState) => void;
  activeState: GameState;
  userRole?: UserRole; // To show role-specific links
}

const NavLink: React.FC<{
    icon: React.ReactElement;
    label: string;
    onClick: () => void;
    isActive: boolean;
}> = ({ icon, label, onClick, isActive }) => (
    <button
        onClick={onClick}
        className={`flex items-center w-full px-4 py-3 text-left rounded-lg transition-colors duration-200 ${
            isActive
                ? 'bg-purple-700 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
        }`}
    >
        {React.cloneElement(icon, { className: 'h-6 w-6 mr-3' })}
        <span className="font-semibold">{label}</span>
    </button>
);

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onNavigate, activeState, userRole = 'student' }) => {
    const mainNavLinks: { state: GameState; label: string; icon: React.ReactElement; roles: UserRole[] }[] = [
        { state: 'subject_selection', label: 'Quizzes', icon: ICONS.QUIZZES, roles: ['student', 'teacher', 'admin'] },
        { state: 'study', label: 'Study Mode', icon: ICONS.STUDY, roles: ['student', 'teacher', 'admin'] },
        { state: 'chatbot', label: 'AI Tutor', icon: ICONS.CHATBOT, roles: ['student', 'teacher', 'admin'] },
        { state: 'challenges', label: 'Daily Challenge', icon: ICONS.CHALLENGES, roles: ['student'] },
        { state: 'tests', label: 'Tests', icon: ICONS.TESTS, roles: ['student'] },
        { state: 'leaderboard', label: 'Leaderboard', icon: ICONS.LEADERBOARD, roles: ['student', 'teacher', 'admin'] },
    ];

    const userNavLinks: { state: GameState; label: string; icon: React.ReactElement; roles: UserRole[] }[] = [
        { state: 'profile', label: 'My Profile', icon: ICONS.PROFILE, roles: ['student', 'teacher', 'admin'] },
        { state: 'bookmarks', label: 'Bookmarks', icon: ICONS.BOOKMARK_FILLED, roles: ['student', 'teacher'] },
        { state: 'wallet', label: 'Wallet', icon: ICONS.WALLET, roles: ['student'] },
    ];
    
    return (
        <>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden transition-opacity ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={onClose}
            ></div>
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-gray-800 border-r border-gray-700 z-40 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } lg:translate-x-0`}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <div className="flex items-center">
                        {React.cloneElement(ICONS.LOGO, { className: 'h-8 w-8 text-purple-400' })}
                        <span className="text-xl font-bold text-white ml-2">Igacyane</span>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-white lg:hidden">
                        &times;
                    </button>
                </div>
                <nav className="p-4 space-y-2">
                    <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Main Menu</h3>
                    {mainNavLinks.filter(l => l.roles.includes(userRole)).map(link => (
                        <NavLink
                            key={link.state}
                            icon={link.icon}
                            label={link.label}
                            onClick={() => onNavigate(link.state)}
                            isActive={activeState === link.state || (activeState.startsWith('quiz') && link.state === 'subject_selection')}
                        />
                    ))}
                    
                    <h3 className="px-4 pt-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Personal</h3>
                    {userNavLinks.filter(l => l.roles.includes(userRole)).map(link => (
                         <NavLink
                            key={link.state}
                            icon={link.icon}
                            label={link.label}
                            onClick={() => onNavigate(link.state)}
                            isActive={activeState === link.state}
                        />
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
