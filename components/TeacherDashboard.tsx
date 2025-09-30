
import React from 'react';
import QuizCreator from './QuizCreator';
import { Subject, Quiz } from '../types';

// Mock data for display
const mockSubjects: Subject[] = [{
    id: 'software-development', name: 'Software Development', category: 'TVET', quizzes: []
}];

const TeacherDashboard: React.FC = () => {
    const handleQuizCreated = (newQuiz: Quiz, subjectId: string) => {
        console.log("New quiz created for subject:", subjectId, newQuiz);
        alert(`Quiz "${newQuiz.title}" created successfully!`);
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
             <div className="bg-gray-800 p-6 rounded-2xl mb-8 border border-gray-700">
                <h1 className="text-3xl font-bold text-white">Teacher Dashboard</h1>
                <p className="text-gray-400 mt-1">Welcome! Manage your quizzes and students here.</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                <QuizCreator onQuizCreated={handleQuizCreated} subjects={mockSubjects} />
            </div>
        </div>
    );
};

export default TeacherDashboard;
