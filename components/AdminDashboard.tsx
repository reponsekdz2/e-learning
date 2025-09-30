
import React from 'react';
import { ICONS } from '../constants';

const StatCard: React.FC<{title: string, value: string, icon: React.ReactElement}> = ({title, value, icon}) => (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex items-center gap-4">
        <div className="text-purple-400">{React.cloneElement(icon, {className: "h-10 w-10"})}</div>
        <div>
            <p className="text-gray-400 text-sm">{title}</p>
            <p className="text-white text-2xl font-bold">{value}</p>
        </div>
    </div>
);


const AdminDashboard: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-2xl mb-8 border border-gray-700">
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-gray-400 mt-1">Platform-wide statistics and management tools.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard title="Total Users" value="1,245" icon={ICONS.PROFILE} />
            <StatCard title="Total Quizzes" value="312" icon={ICONS.QUIZZES} />
            <StatCard title="Total Subjects" value="12" icon={ICONS.STUDY} />
            <StatCard title="Quizzes Today" value="14" icon={ICONS.CHALLENGES} />
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-4">Management Sections</h2>
            <p className="text-gray-400">Content for user management, content management, and platform settings would go here.</p>
        </div>
    </div>
  );
};

export default AdminDashboard;
