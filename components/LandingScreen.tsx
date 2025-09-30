import React from 'react';
import { ICONS } from '../constants';
import { UserProfile } from '../types';

interface LandingScreenProps {
  onSelectRole: (role: UserProfile['role']) => void;
}

const RoleCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactElement;
  onClick: () => void;
  isEnabled: boolean;
}> = ({ title, description, icon, onClick, isEnabled }) => {
  const baseClasses = "relative w-full max-w-sm p-8 bg-gray-800 rounded-2xl shadow-lg border border-gray-700 text-center transition-all duration-300 transform";
  const enabledClasses = "hover:border-purple-500 hover:scale-105 cursor-pointer";
  const disabledClasses = "opacity-50 cursor-not-allowed";

  return (
    <button
      onClick={onClick}
      disabled={!isEnabled}
      className={`${baseClasses} ${isEnabled ? enabledClasses : disabledClasses}`}
    >
      {!isEnabled && (
        <span className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
          Coming Soon
        </span>
      )}
      <div className="flex justify-center mb-4 text-purple-400">
        {React.cloneElement(icon, { className: "h-16 w-16" })}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </button>
  );
};

const LandingScreen: React.FC<LandingScreenProps> = ({ onSelectRole }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <div className="mb-6">
        {React.cloneElement(ICONS.LOGO, { className: 'h-20 w-20 text-purple-400' })}
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
        Welcome to Igacyane
      </h1>
      <p className="text-xl text-gray-300 mb-10 max-w-lg">
        Please select your role to continue.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <RoleCard
          title="I am a Student"
          description="Take quizzes, complete challenges, and track your progress."
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-.07.042m15.482 0l.07.042m-15.482 0l-.07.042m15.482 0l.07.042M5.84 16.096a46.655 46.655 0 01-.049-4.763l-.041-3.61a52.32 52.32 0 00-1.844 6.354M18.16 16.096a46.655 46.655 0 00.049-4.763l.041-3.61a52.32 52.32 0 011.844 6.354" /></svg>}
          onClick={() => onSelectRole('student')}
          isEnabled={true}
        />
        <RoleCard
          title="I am a Teacher"
          description="Create quizzes, manage classes, and monitor student performance."
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>}
          onClick={() => onSelectRole('teacher')}
          isEnabled={true}
        />
        <RoleCard
          title="I am an Admin"
          description="Manage subjects, users, and oversee the entire platform."
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>}
          onClick={() => onSelectRole('admin')}
          isEnabled={true}
        />
      </div>
    </div>
  );
};

export default LandingScreen;