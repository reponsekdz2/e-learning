
import React, { useState, useEffect } from 'react';
import { Question } from '../types';

interface QuizScreenProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ question, questionNumber, totalQuestions, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    setSelectedAnswer(null);
    setIsAnswered(false);
  }, [question]);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;

    setSelectedAnswer(index);
    setIsAnswered(true);
    const isCorrect = index === question.correctAnswerIndex;

    setTimeout(() => {
      onAnswer(isCorrect);
    }, 1500);
  };

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
    <div className="w-full max-w-2xl mx-auto p-4 md:p-8 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700">
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
    </div>
  );
};

export default QuizScreen;
