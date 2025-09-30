import React from 'react';
import { Subject } from '../types';

interface SubjectSelectionScreenProps {
  subjects: Subject[];
  onSelectSubject: (subjectId: string) => void;
}

const SubjectSelectionScreen: React.FC<SubjectSelectionScreenProps> = ({ subjects, onSelectSubject }) => {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
        Welcome to the Quiz Hub
      </h1>
      <p className="text-xl text-gray-300 mb-8">
        Please select a subject to begin.
      </p>

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
