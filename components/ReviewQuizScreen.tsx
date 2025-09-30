import React, { useState } from 'react';
import { Quiz, Question, QuizAttempt } from '../types';
import { getExplanation } from '../services/geminiService';
import Spinner from './Spinner';

interface ReviewQuizScreenProps {
  quiz: Quiz;
  attempt: QuizAttempt;
  onBack: () => void;
}

const ReviewQuizScreen: React.FC<ReviewQuizScreenProps> = ({ quiz, attempt, onBack }) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
            <div>
                 <h1 className="text-4xl font-bold text-white">Quiz Review</h1>
                 <p className="text-lg text-gray-400">{quiz.title}</p>
            </div>
            <button onClick={onBack} className="px-4 py-2 bg-transparent border border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-colors duration-300">
                &larr; Back
            </button>
        </div>
        <div className="space-y-6">
            {quiz.questions.map((question, index) => (
                <QuestionReviewCard 
                    key={question.id}
                    question={question}
                    userAnswerIndex={attempt.answers[index]}
                />
            ))}
        </div>
    </div>
  );
};


const QuestionReviewCard: React.FC<{question: Question, userAnswerIndex: number}> = ({ question, userAnswerIndex }) => {
    const [explanation, setExplanation] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleGetExplanation = async () => {
        setIsLoading(true);
        const result = await getExplanation(question);
        setExplanation(result);
        setIsLoading(false);
    };
    
    const getOptionClass = (index: number) => {
        const isCorrect = index === question.correctAnswerIndex;
        const isUserChoice = index === userAnswerIndex;

        if (isCorrect) return 'bg-green-800 border-green-500';
        if (isUserChoice && !isCorrect) return 'bg-red-800 border-red-500';
        return 'bg-gray-700 border-gray-600';
    };

    return (
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4" dangerouslySetInnerHTML={{ __html: question.questionText }}></h3>
            <div className="grid grid-cols-1 gap-3 mb-4">
                {question.options.map((option, index) => (
                    <div key={index} className={`p-3 rounded-md text-white border-2 ${getOptionClass(index)} flex items-center`}>
                        {index === userAnswerIndex && <span className="mr-2 font-bold">{index === question.correctAnswerIndex ? '✅' : '❌'} Your Answer:</span>}
                        {index === question.correctAnswerIndex && index !== userAnswerIndex && <span className="mr-2 font-bold">✅ Correct Answer:</span>}
                        <span dangerouslySetInnerHTML={{ __html: option }}></span>
                    </div>
                ))}
            </div>

            <div className="border-t border-gray-700 pt-4 mt-4">
                 {explanation ? (
                    <div>
                        <h4 className="text-md font-bold text-purple-400 mb-2">Explanation</h4>
                        {isLoading ? ( <div className="flex items-center space-x-2 text-gray-400"><Spinner size="sm" /><span>Gemini is thinking...</span></div> ) : ( <p className="text-gray-300 whitespace-pre-wrap">{explanation}</p> )}
                    </div>
                 ) : (
                    <button onClick={handleGetExplanation} disabled={isLoading} className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors duration-300 disabled:opacity-50">
                        {isLoading ? <Spinner size="sm" /> : '🧠 Get AI Explanation'}
                    </button>
                 )}
            </div>
        </div>
    )
}


export default ReviewQuizScreen;