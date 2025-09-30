import React from 'react';
import { SubjectCategory } from '../types';

interface HeaderProps {
    activeFilter: SubjectCategory | 'All';
    setFilter: (filter: SubjectCategory | 'All') => void;
}

const FilterButton: React.FC<{
    label: string;
    isActive: boolean;
    onClick: () => void;
}> = ({ label, isActive, onClick }) => {
    const activeClass = isActive ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600';
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-md font-semibold transition-colors duration-200 ${activeClass}`}
        >
            {label}
        </button>
    );
};


const Header: React.FC<HeaderProps> = ({ activeFilter, setFilter }) => {
  return (
    <header className="w-full bg-gray-800 p-4 border-b border-gray-700 flex justify-center">
        <div className="flex items-center space-x-4">
            <FilterButton label="All Subjects" isActive={activeFilter === 'All'} onClick={() => setFilter('All')} />
            <FilterButton label="General" isActive={activeFilter === 'General'} onClick={() => setFilter('General')} />
            <FilterButton label="TVET" isActive={activeFilter === 'TVET'} onClick={() => setFilter('TVET')} />
        </div>
    </header>
  );
};

export default Header;
