import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { getExplanation } from '../services/geminiService';
import Spinner from './Spinner';
import { ICONS } from '../constants';

interface QuizScreenProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean, answerIndex: number) => void;
  isBookmarked: boolean;
  onBookmarkToggle: (questionId: string) => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ question, questionNumber, totalQuestions, onAnswer, isBookmarked, onBookmarkToggle }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [explanation, setExplanation] = useState<string>('');
  const [isExplanationLoading, setIsExplanationLoading] = useState(false);
  const [isExplanationModalOpen, setIsExplanationModalOpen] = useState(false);


  useEffect(() => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    setExplanation('');
    setIsExplanationModalOpen(false);
  }, [question]);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;

    setSelectedAnswer(index);
    setIsAnswered(true);
    const isCorrect = index === question.correctAnswerIndex;

    setTimeout(() => {
      onAnswer(isCorrect, index);
    }, 1500);
  };

  const handleFetchExplanation = async () => {
    setIsExplanationModalOpen(true);
    setIsExplanationLoading(true);
    const result = await getExplanation(question);
    setExplanation(result);
    setIsExplanationLoading(false);
  }

  const getButtonClass = (index: number) => {
    if (!isAnswered) {
      return 'bg-gray-800 hover:bg-purple-700';
    }
    if (index === question.correctAnswerIndex) {
      return 'bg-green-500 animate-pulse';
    }
    if (index === selectedAnswer && index !== question.correctAnswerIndex) {
      return 'bg-red-500';
    }
    return 'bg-gray-700 opacity-50';
  };

  return (
    <>
      <div className="w-full max-w-2xl mx-auto p-4 md:p-8 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 relative">
        <button 
            onClick={() => onBookmarkToggle(question.id)}
            className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400 transition-colors"
            aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
        >
            {isBookmarked ? 
                React.cloneElement(ICONS.BOOKMARK_FILLED, { className: "h-7 w-7 text-yellow-400" }) :
                React.cloneElement(ICONS.BOOKMARK_EMPTY, { className: "h-7 w-7" })
            }
        </button>
        <div className="mb-6">
          <p className="text-lg font-semibold text-purple-400">
            Question {questionNumber} / {totalQuestions}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-2" dangerouslySetInnerHTML={{ __html: question.questionText }}></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              disabled={isAnswered}
              className={`w-full p-4 rounded-lg text-white font-semibold text-left transition-all duration-300 transform hover:scale-105 ${getButtonClass(index)}`}
              dangerouslySetInnerHTML={{ __html: option }}
            >
            </button>
          ))}
        </div>
         {isAnswered && (
            <div className="mt-6 text-center">
                <button 
                    onClick={handleFetchExplanation}
                    disabled={isExplanationLoading}
                    className="px-5 py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors duration-300 disabled:opacity-50"
                >
                   🧠 Explain Answer
                </button>
            </div>
        )}
      </div>

      {isExplanationModalOpen && (
         <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
            onClick={() => setIsExplanationModalOpen(false)}
        >
            <div 
                className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 max-w-lg w-full p-6"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-white">Explanation</h3>
                    <button onClick={() => setIsExplanationModalOpen(false)} className="text-gray-400 hover:text-white">&times;</button>
                </div>
                {isExplanationLoading ? (
                    <div className="flex flex-col items-center justify-center min-h-[150px]">
                        <Spinner />
                        <p className="text-gray-400 mt-4">Gemini is thinking...</p>
                    </div>
                ) : (
                    <div className="text-gray-300 max-h-[60vh] overflow-y-auto">
                        <p className="whitespace-pre-wrap">{explanation}</p>
                    </div>
                )}
            </div>
         </div>
      )}
    </>
  );
};

export default QuizScreen;