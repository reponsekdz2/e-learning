
import React from 'react';
import { Test, Subject, Quiz } from '../types';
import { ICONS } from '../constants';

interface TestsScreenProps {
    tests: Test[];
    subjects: Subject[];
    onStartTest: (quiz: Quiz) => void;
}

const TestsScreen: React.FC<TestsScreenProps> = ({ tests, subjects, onStartTest }) => {
    const getSubjectName = (subjectId: string) => {
        return subjects.find(s => s.id === subjectId)?.name || 'Unknown Subject';
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            <div className="text-center mb-8">
                <div className="flex justify-center mb-4 text-purple-400">
                    {React.cloneElement(ICONS.TESTS, { className: "h-20 w-20" })}
                </div>
                <h1 className="text-4xl font-bold text-white">Certification Tests</h1>
                <p className="text-lg text-gray-400">
                    Pass these tests to earn certificates and prove your mastery.
                </p>
            </div>
            <div className="space-y-4">
                {tests.map(test => (
                    <div key={test.id} className="bg-gray-800 p-4 rounded-lg flex items-center justify-between border border-gray-700">
                        <div>
                            <p className="text-sm text-purple-400 font-semibold">{getSubjectName(test.subjectId)}</p>
                            <h2 className="text-xl font-bold text-white">{test.title}</h2>
                            <p className="text-sm text-gray-400">{test.questions.length} Questions</p>
                        </div>
                        <button 
                            onClick={() => onStartTest(test as unknown as Quiz)}
                            className="px-5 py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors duration-300"
                        >
                            Start Test
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestsScreen;
