import React, { useState } from 'react';
import { Question } from '../types';
import { getExplanation } from '../services/geminiService';
import Spinner from './Spinner';
import { ICONS } from '../constants';

interface BookmarksScreenProps {
  bookmarkedQuestions: Question[];
  onBookmarkToggle: (questionId: string) => void;
}

const BookmarksScreen: React.FC<BookmarksScreenProps> = ({ bookmarkedQuestions, onBookmarkToggle }) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4 text-yellow-400">
          {React.cloneElement(ICONS.BOOKMARK_FILLED, { className: "h-20 w-20"})}
        </div>
        <h1 className="text-4xl font-bold text-white">Bookmarked Questions</h1>
        <p className="text-lg text-gray-400">
          Review your saved questions here.
        </p>
      </div>

      {bookmarkedQuestions.length > 0 ? (
        <div className="space-y-6">
          {bookmarkedQuestions.map((question) => (
            <QuestionCard 
              key={question.id} 
              question={question} 
              onBookmarkToggle={onBookmarkToggle} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center bg-gray-800 p-8 rounded-lg border border-gray-700">
          <p className="text-xl text-gray-300">You haven't bookmarked any questions yet.</p>
          <p className="text-gray-400 mt-2">Click the bookmark icon on any question during a quiz or in Study Mode to save it here.</p>
        </div>
      )}
    </div>
  );
};

const QuestionCard: React.FC<{question: Question, onBookmarkToggle: (questionId: string) => void}> = ({ question, onBookmarkToggle }) => {
    const [isRevealed, setIsRevealed] = useState(false);
    const [explanation, setExplanation] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleReveal = async () => {
        setIsRevealed(true);
        if (!explanation) {
            setIsLoading(true);
            const result = await getExplanation(question);
            setExplanation(result);
            setIsLoading(false);
        }
    };
    
    const getOptionClass = (index: number) => {
        if (!isRevealed) return 'bg-gray-700';
        return index === question.correctAnswerIndex ? 'bg-green-600' : 'bg-gray-700 opacity-60';
    };

    return (
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 relative">
            <button 
                onClick={() => onBookmarkToggle(question.id)}
                className="absolute top-4 right-4 text-yellow-400"
                aria-label="Remove bookmark"
            >
                {React.cloneElement(ICONS.BOOKMARK_FILLED, { className: "h-6 w-6" })}
            </button>
            <h3 className="text-xl font-semibold text-white mb-4 pr-8" dangerouslySetInnerHTML={{ __html: question.questionText }}></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                {question.options.map((option, index) => (
                    <div key={index} className={`p-3 rounded-md text-white transition-colors ${getOptionClass(index)}`}>
                        {isRevealed && index === question.correctAnswerIndex && '✅ '}
                        <span dangerouslySetInnerHTML={{ __html: option }}></span>
                    </div>
                ))}
            </div>

            {!isRevealed ? (
                <button onClick={handleReveal} className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors duration-300">
                    Show Answer & Explanation
                </button>
            ) : (
                 <div className="border-t border-gray-700 pt-4 mt-4">
                     <h4 className="text-md font-bold text-purple-400 mb-2">Explanation</h4>
                     {isLoading ? (
                         <div className="flex items-center space-x-2 text-gray-400">
                             <Spinner size="sm" />
                             <span>Gemini is thinking...</span>
                         </div>
                     ) : (
                         <p className="text-gray-300 whitespace-pre-wrap">{explanation}</p>
                     )}
                 </div>
            )}
        </div>
    )
}

export default BookmarksScreen;