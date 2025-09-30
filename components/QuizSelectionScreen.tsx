
import React, { useState } from 'react';
import { Subject, Quiz } from '../types';
import { generateQuiz } from '../services/geminiService';
import Spinner from './Spinner';

interface QuizSelectionScreenProps {
  subject: Subject;
  onSelectQuiz: (quiz: Quiz) => void;
  onBack: () => void;
  onUpdateSubject: (updatedSubject: Subject) => void;
}

const QuizSelectionScreen: React.FC<QuizSelectionScreenProps> = ({ subject, onSelectQuiz, onBack, onUpdateSubject }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [topic, setTopic] = useState('');
  const [error, setError] = useState('');

  const handleGenerateQuiz = async () => {
    if (!topic.trim()) {
      setError('Please enter a topic.');
      return;
    }
    setIsGenerating(true);
    setError('');
    try {
      const newQuiz = await generateQuiz(subject.name, topic);
      if (newQuiz) {
        // Add unique IDs to questions
        const quizWithIds: Quiz = {
          ...newQuiz,
          questions: newQuiz.questions.map((q, index) => ({
            ...q,
            id: `${newQuiz.id}-q-${index}`
          }))
        };
        const updatedSubject = {
          ...subject,
          quizzes: [...subject.quizzes, quizWithIds],
        };
        onUpdateSubject(updatedSubject);
        onSelectQuiz(quizWithIds);
      } else {
        throw new Error('Failed to generate quiz.');
      }
    } catch (err) {
      setError('Sorry, there was an error generating the quiz. Please try again.');
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };


  return (
    <div className="w-full max-w-2xl mx-auto">
      <button onClick={onBack} className="mb-4 text-purple-400 hover:text-purple-300 font-semibold">
        &larr; Back to Subjects
      </button>
      <h1 className="text-4xl font-bold text-white mb-2">{subject.name}</h1>
      <p className="text-lg text-gray-400 mb-8">Select a quiz or generate a new one with AI.</p>
      
      <div className="space-y-4">
        {subject.quizzes.map(quiz => (
          <button
            key={quiz.id}
            onClick={() => onSelectQuiz(quiz)}
            className="w-full text-left p-4 bg-gray-800 rounded-lg shadow-md hover:bg-purple-700 transform transition-all duration-300 hover:scale-105"
          >
            <h2 className="text-xl font-bold text-white">{quiz.title}</h2>
            <p className="text-sm text-gray-400">{quiz.questions.length} Questions</p>
          </button>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-800 rounded-2xl border-2 border-dashed border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">✨ Generate a Quiz with Gemini</h3>
        <p className="text-gray-400 mb-4">Want to practice something specific? Enter a topic below and let our AI create a custom quiz for you.</p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input 
            type="text" 
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., Photosynthesis, React Hooks, Engine Types"
            className="flex-grow bg-gray-700 border border-gray-600 rounded-md p-2 text-white focus:ring-purple-500 focus:border-purple-500"
            disabled={isGenerating}
          />
          <button 
            onClick={handleGenerateQuiz}
            disabled={isGenerating || !topic.trim()}
            className="px-5 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors duration-300 disabled:opacity-50 flex items-center justify-center"
          >
            {isGenerating ? <Spinner size="sm" /> : 'Generate Quiz'}
          </button>
        </div>
        {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default QuizSelectionScreen;
