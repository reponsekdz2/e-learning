import React, { useState } from 'react';
import { Subject, Quiz } from '../types';
import { generateQuiz } from '../services/geminiService';
import Spinner from './Spinner';

interface QuizSelectionScreenProps {
  subject: Subject;
  onStartQuiz: (quiz: Quiz) => void;
  onBack: () => void;
}

const QuizSelectionScreen: React.FC<QuizSelectionScreenProps> = ({ subject, onStartQuiz, onBack }) => {
  const [aiTopic, setAiTopic] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateQuiz = async () => {
    if (!aiTopic.trim()) {
      setError('Please enter a topic.');
      return;
    }
    setIsLoading(true);
    setError(null);

    const newQuiz = await generateQuiz(subject.name, aiTopic);
    
    setIsLoading(false);
    if (newQuiz) {
      onStartQuiz(newQuiz);
    } else {
      setError('Could not generate a quiz. The AI may be busy, or the topic is too specific. Please try again.');
    }
  };

  return (
    <div className="text-center w-full max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-2">
        {subject.name}
      </h1>
      <p className="text-lg text-gray-400 mb-8">Select a quiz or create your own with AI.</p>
      
      {/* AI Quiz Generator */}
      <div className="bg-gray-800 border-2 border-purple-600 rounded-xl p-6 mb-8 shadow-lg">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-3">
          ✨ AI Quiz Creator
        </h2>
        <p className="text-gray-400 mb-4">Enter any topic related to {subject.name} to generate a custom 5-question quiz!</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={aiTopic}
            onChange={(e) => setAiTopic(e.target.value)}
            placeholder={`e.g., "JavaScript Arrays" or "Kitchen Safety"`}
            className="flex-grow bg-gray-700 border border-gray-600 rounded-md p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            disabled={isLoading}
          />
          <button
            onClick={handleGenerateQuiz}
            disabled={isLoading}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-md shadow-lg hover:scale-105 transform transition-transform duration-300 disabled:opacity-50 disabled:scale-100 flex items-center justify-center"
          >
            {isLoading ? <Spinner size="sm" /> : 'Generate Quiz'}
          </button>
        </div>
        {error && <p className="text-red-400 mt-3">{error}</p>}
      </div>


      <div className="space-y-4 max-w-lg mx-auto mb-8">
        {subject.quizzes.map((quiz) => (
          <button
            key={quiz.id}
            onClick={() => onStartQuiz(quiz)}
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