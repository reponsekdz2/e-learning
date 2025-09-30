import React from 'react';

const StatCard: React.FC<{ label: string; value: string | number; }> = ({ label, value }) => (
    <div className="bg-gray-700 p-4 rounded-lg text-center">
        <p className="text-sm text-gray-400">{label}</p>
        <p className="text-2xl font-bold text-white">{value}</p>
    </div>
);

const ProfileScreen: React.FC = () => {
  return (
    <div className="p-8 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 max-w-lg mx-auto">
        <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 rounded-full bg-purple-600 flex items-center justify-center mb-4 border-4 border-gray-700">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            </div>
            <h2 className="text-3xl font-bold text-white">Kwizera Alex</h2>
            <p className="text-md text-gray-400">Student | TVET Division</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard label="Quizzes Completed" value={27} />
            <StatCard label="Average Score" value="88%" />
            <StatCard label="Overall Rank" value="Top 5%" />
        </div>
    </div>
  );
};

export default ProfileScreen;