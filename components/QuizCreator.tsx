import React, { useState } from 'react';
import { Quiz, Subject } from '../types';
import { generateQuiz } from '../services/geminiService';
import Spinner from './Spinner';

interface QuizCreatorProps {
    onQuizCreated: (newQuiz: Quiz, subjectId: string) => void;
    subjects: Subject[];
}

const QuizCreator: React.FC<QuizCreatorProps> = ({ onQuizCreated, subjects }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [subjectId, setSubjectId] = useState('');
  const [topic, setTopic] = useState('');
  const [error, setError] = useState('');
  
  const handleGenerateQuiz = async () => {
    if (!topic.trim() || !subjectId.trim()) {
      setError('Please select a subject and enter a topic.');
      return;
    }
    setIsGenerating(true);
    setError('');
    
    const subjectName = subjects.find(s => s.id === subjectId)?.name || '';

    try {
      const newQuiz = await generateQuiz(subjectName, topic);
      if (newQuiz) {
        onQuizCreated(newQuiz, subjectId);
        setTopic(''); // Clear topic on success
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
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">AI Quiz Creator</h1>
        <p className="text-lg text-gray-400">Generate a custom 5-question quiz on any topic using Gemini.</p>
      </div>

      <div className="p-6 bg-gray-800 rounded-2xl border-2 border-dashed border-gray-700 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
                 <label className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                 <select 
                    value={subjectId} 
                    onChange={(e) => setSubjectId(e.target.value)} 
                    className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white focus:ring-purple-500 focus:border-purple-500"
                    disabled={isGenerating}
                >
                    <option value="" disabled>-- Select a subject --</option>
                    {subjects.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
            </div>
            <div>
                 <label className="block text-sm font-medium text-gray-300 mb-1">Specific Topic</label>
                 <input 
                    type="text" 
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g., React Hooks, The Cell"
                    className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white focus:ring-purple-500 focus:border-purple-500"
                    disabled={isGenerating}
                  />
            </div>
        </div>
        <button 
          onClick={handleGenerateQuiz}
          disabled={isGenerating || !topic.trim() || !subjectId.trim()}
          className="w-full px-5 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors duration-300 disabled:opacity-50 flex items-center justify-center"
        >
          {isGenerating ? <Spinner size="sm" /> : '✨ Generate & Save Quiz'}
        </button>
        {error && <p className="text-red-400 mt-2 text-sm text-center">{error}</p>}
      </div>
    </div>
  );
};

export default QuizCreator;