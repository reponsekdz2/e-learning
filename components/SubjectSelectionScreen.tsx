import React from 'react';
import { Subject, SubjectCategory } from '../types';

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


interface SubjectSelectionScreenProps {
  subjects: Subject[];
  onSelectSubject: (subjectId: string) => void;
  activeFilter: SubjectCategory | 'All';
  setFilter: (filter: SubjectCategory | 'All') => void;
}

const SubjectSelectionScreen: React.FC<SubjectSelectionScreenProps> = ({ subjects, onSelectSubject, activeFilter, setFilter }) => {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
        Welcome to the Quiz Hub
      </h1>
      <p className="text-xl text-gray-300 mb-8">
        Please select a subject to begin.
      </p>

      <div className="flex items-center justify-center space-x-4 mb-8">
            <FilterButton label="All Subjects" isActive={activeFilter === 'All'} onClick={() => setFilter('All')} />
            <FilterButton label="General" isActive={activeFilter === 'General'} onClick={() => setFilter('General')} />
            <FilterButton label="TVET" isActive={activeFilter === 'TVET'} onClick={() => setFilter('TVET')} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            onClick={() => onSelectSubject(subject.id)}
            className="p-6 bg-gray-800 text-white font-bold rounded-lg shadow-lg hover:bg-purple-700 transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            {subject.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubjectSelectionScreen;