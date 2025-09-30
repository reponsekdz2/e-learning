import React from 'react';
import { Subject } from '../types';

interface SubjectSelectionScreenProps {
  subjects: Subject[];
  onSelectSubject: (subjectId: string) => void;
  subjectFilter: 'All' | 'General' | 'TVET';
  searchTerm: string;
}

const SubjectSelectionScreen: React.FC<SubjectSelectionScreenProps> = ({ subjects, onSelectSubject, subjectFilter, searchTerm }) => {
  const hasSearchTerm = searchTerm.trim().length > 0;

  return (
    <div className="text-center">
      {!hasSearchTerm && (
        <>
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            Welcome to the Quiz Hub
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Please select a subject to begin.
          </p>
        </>
      )}

      {subjects.length > 0 ? (
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
      ) : (
        <div className="bg-gray-800 p-8 rounded-lg max-w-md mx-auto">
            <p className="text-xl text-gray-300">
              {hasSearchTerm
                ? `No subjects found for "${searchTerm}"`
                : `No subjects found in the "${subjectFilter}" category.`
              }
            </p>
            <p className="text-gray-400 mt-2">
              {hasSearchTerm
                ? "Try a different search term or change the filter."
                : "Try selecting another filter from the header."
              }
            </p>
        </div>
      )}
    </div>
  );
};

export default SubjectSelectionScreen;
