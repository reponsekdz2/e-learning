import React, { useState } from 'react';
import { Subject, Question } from '../types';
import { getExplanation } from '../services/geminiService';
import Spinner from './Spinner';

interface StudyModeScreenProps {
  subjects: Subject[];
}

const StudyModeScreen: React.FC<StudyModeScreenProps> = ({ subjects }) => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  if (!selectedSubject) {
    return <SubjectSelection onSelectSubject={setSelectedSubject} subjects={subjects} />;
  }
  
  return <SubjectReview subject={selectedSubject} onBack={() => setSelectedSubject(null)} />;
};


// Sub-component for subject selection
const SubjectSelection: React.FC<{subjects: Subject[], onSelectSubject: (subject: Subject) => void}> = ({ subjects, onSelectSubject }) => {
    return (
        <div className="text-center">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
                Study Mode
            </h1>
            <p className="text-xl text-gray-300 mb-8">
                Select a subject to review all its questions and explanations.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {subjects.map((subject) => (
                    <button
                        key={subject.id}
                        onClick={() => onSelectSubject(subject)}
                        className="p-6 bg-gray-800 text-white font-bold rounded-lg shadow-lg hover:bg-purple-700 transform transition-transform duration-300 ease-in-out hover:scale-105"
                    >
                        {subject.name}
                    </button>
                ))}
            </div>
        </div>
    );
}

// Sub-component for reviewing a subject's questions
const SubjectReview: React.FC<{subject: Subject, onBack: () => void}> = ({ subject, onBack }) => {
    const allQuestions = subject.quizzes.flatMap(quiz => quiz.questions);

    return (
        <div className="w-full max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-white">{subject.name}</h1>
                    <p className="text-lg text-gray-400">Reviewing {allQuestions.length} questions</p>
                </div>
                <button
                    onClick={onBack}
                    className="px-6 py-2 bg-transparent border border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-colors duration-300"
                >
                    Back to Subjects
                </button>
            </div>
            <div className="space-y-6">
                {allQuestions.map((question, index) => (
                    <QuestionCard key={index} question={question} />
                ))}
            </div>
        </div>
    )
}

// Sub-component for a single question card
const QuestionCard: React.FC<{question: Question}> = ({ question }) => {
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
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4" dangerouslySetInnerHTML={{ __html: question.questionText }}></h3>
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

export default StudyModeScreen;
