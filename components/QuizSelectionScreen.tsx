import React from 'react';
import { Subject } from '../types';

interface QuizSelectionScreenProps {
  subject: Subject;
  onSelectQuiz: (quizId: string) => void;
  onBack: () => void;
}

const QuizSelectionScreen: React.FC<QuizSelectionScreenProps> = ({ subject, onSelectQuiz, onBack }) => {
  return (
    <div className="text-center">
       <h1 className="text-4xl font-bold text-white mb-2">
        {subject.name}
      </h1>
       <p className="text-lg text-gray-400 mb-8">Select a quiz to test your knowledge.</p>

      <div className="space-y-4 max-w-lg mx-auto mb-8">
        {subject.quizzes.map((quiz) => (
          <button
            key={quiz.id}
            onClick={() => onSelectQuiz(quiz.id)}
            className="w-full px-8 py-4 bg-gray-800 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-600 transform transition-transform duration-300 ease-in-out hover:scale-105"
          >
            {quiz.title} ({quiz.questions.length} questions)
          </button>
        ))}
      </div>
      
      <button
        onClick={onBack}
        className="px-6 py-2 bg-transparent border border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-colors duration-300"
      >
        Back to Subjects
      </button>
    </div>
  );
};

export default QuizSelectionScreen;
