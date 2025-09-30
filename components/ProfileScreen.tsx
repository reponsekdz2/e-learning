import React from 'react';
import { ICONS } from '../constants';

const ProfileScreen: React.FC = () => {
  return (
    <div className="text-center p-8 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 max-w-md mx-auto">
        <div className="flex justify-center mb-4 text-purple-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        </div>
        <h2 className="text-4xl font-bold text-white mb-2">User Profile</h2>
        <p className="text-xl text-gray-300">
            This section is currently under development.
        </p>
    </div>
  );
};

export default ProfileScreen;
