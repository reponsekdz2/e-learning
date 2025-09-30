
import React, { useState } from 'react';
import { Subject, Question } from '../types';
import { getExplanation } from '../services/geminiService';
import Spinner from './Spinner';
import { ICONS } from '../constants';

interface StudyModeScreenProps {
  subjects: Subject[];
  bookmarkedQuestionIds: Set<string>;
  onBookmarkToggle: (questionId: string) => void;
}

// FIX: Define QuestionCardProps interface
interface QuestionCardProps {
  question: Question;
  isBookmarked: boolean;
  onBookmarkToggle: (questionId: string) => void;
}

const StudyModeScreen: React.FC<StudyModeScreenProps> = ({ subjects, bookmarkedQuestionIds, onBookmarkToggle }) => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  if (!selectedSubject) {
    return <SubjectSelection onSelectSubject={setSelectedSubject} subjects={subjects} />;
  }
  
  return <SubjectReview subject={selectedSubject} onBack={() => setSelectedSubject(null)} bookmarkedQuestionIds={bookmarkedQuestionIds} onBookmarkToggle={onBookmarkToggle} />;
};

const SubjectSelection: React.FC<{subjects: Subject[], onSelectSubject: (subject: Subject) => void}> = ({ subjects, onSelectSubject }) => {
    return (
        <div className="text-center">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
                Study Mode
            </h1>
            <p className="text-xl text-gray-300 mb-8">
                Review all questions, get AI explanations, or use the new Flashcard mode.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {subjects.map((subject) => (
                    <button key={subject.id} onClick={() => onSelectSubject(subject)} className="p-6 bg-gray-800 text-white font-bold rounded-lg shadow-lg hover:bg-purple-700 transform transition-transform duration-300 ease-in-out hover:scale-105">
                        {subject.name}
                    </button>
                ))}
            </div>
        </div>
    );
}

const SubjectReview: React.FC<{subject: Subject, onBack: () => void, bookmarkedQuestionIds: Set<string>, onBookmarkToggle: (questionId: string) => void}> = ({ subject, onBack, bookmarkedQuestionIds, onBookmarkToggle }) => {
    const allQuestions = subject.quizzes.flatMap(quiz => quiz.questions);
    const [viewMode, setViewMode] = useState<'list' | 'flashcard'>('list');
    const [currentFlashcard, setCurrentFlashcard] = useState(0);

    return (
        <div className="w-full max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-4xl font-bold text-white">{subject.name}</h1>
                    <p className="text-lg text-gray-400">Reviewing {allQuestions.length} questions</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-gray-800 p-1 rounded-lg flex space-x-1">
                        <button onClick={() => setViewMode('list')} className={`px-3 py-1 text-sm rounded-md ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-700'}`}>List</button>
                        <button onClick={() => setViewMode('flashcard')} className={`px-3 py-1 text-sm rounded-md ${viewMode === 'flashcard' ? 'bg-purple-600 text-white' : 'text-gray-700'}`}>Flashcard</button>
                    </div>
                    <button onClick={onBack} className="px-4 py-2 bg-transparent border border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-colors duration-300">
                        Back
                    </button>
                </div>
            </div>

            {allQuestions.length > 0 ? (
                viewMode === 'list' ? (
                    <div className="space-y-6">
                        {allQuestions.map((question) => <QuestionCard key={question.id} question={question} isBookmarked={bookmarkedQuestionIds.has(question.id)} onBookmarkToggle={onBookmarkToggle} />)}
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        <Flashcard question={allQuestions[currentFlashcard]} isBookmarked={bookmarkedQuestionIds.has(allQuestions[currentFlashcard].id)} onBookmarkToggle={onBookmarkToggle} />
                        <div className="flex items-center gap-4 mt-6">
                            <button onClick={() => setCurrentFlashcard(p => Math.max(0, p - 1))} disabled={currentFlashcard === 0} className="px-4 py-2 bg-gray-700 rounded-md disabled:opacity-50">Previous</button>
                            <span className="text-gray-400">{currentFlashcard + 1} / {allQuestions.length}</span>
                            <button onClick={() => setCurrentFlashcard(p => Math.min(allQuestions.length - 1, p + 1))} disabled={currentFlashcard === allQuestions.length - 1} className="px-4 py-2 bg-gray-700 rounded-md disabled:opacity-50">Next</button>
                        </div>
                    </div>
                )
            ) : (
                <p className="text-center text-gray-400">No questions available in this subject yet.</p>
            )}
        </div>
    )
}

const Flashcard: React.FC<QuestionCardProps> = ({ question, isBookmarked, onBookmarkToggle }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [explanation, setExplanation] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const handleFlip = async () => {
      setIsFlipped(true);
      if (!explanation) {
            setIsLoading(true);
            const result = await getExplanation(question);
            setExplanation(result);
            setIsLoading(false);
      }
    };

    React.useEffect(() => {
        setIsFlipped(false);
        setExplanation('');
    }, [question]);

    return (
        <div className="w-full max-w-xl h-96 [perspective:1000px]">
            <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                {/* Front */}
                <div className="absolute w-full h-full bg-gray-800 p-6 rounded-lg border border-gray-700 flex flex-col justify-center items-center [backface-visibility:hidden]">
                    <h3 className="text-2xl font-semibold text-center text-white" dangerouslySetInnerHTML={{ __html: question.questionText }}></h3>
                    <button onClick={handleFlip} className="mt-8 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700">Flip Card</button>
                </div>
                {/* Back */}
                <div className="absolute w-full h-full bg-gray-800 p-6 rounded-lg border border-gray-700 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto">
                     <button onClick={() => onBookmarkToggle(question.id)} className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400 z-10">{isBookmarked ? React.cloneElement(ICONS.BOOKMARK_FILLED, { className: "h-6 w-6 text-yellow-400" }) : React.cloneElement(ICONS.BOOKMARK_EMPTY, { className: "h-6 w-6" })}</button>
                     <h4 className="text-md font-bold text-purple-400 mb-2">Answer</h4>
                     <p className="text-lg text-green-400 font-semibold mb-4" dangerouslySetInnerHTML={{ __html: question.options[question.correctAnswerIndex] }}></p>
                     <h4 className="text-md font-bold text-purple-400 mb-2">Explanation</h4>
                     {isLoading ? <Spinner size="sm" /> : <p className="text-gray-300 text-sm whitespace-pre-wrap">{explanation}</p>}
                     <button onClick={() => setIsFlipped(false)} className="absolute bottom-4 left-4 px-3 py-1 text-xs bg-gray-700 rounded-md">Flip Back</button>
                </div>
            </div>
        </div>
    )
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, isBookmarked, onBookmarkToggle }) => {
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
            <button onClick={() => onBookmarkToggle(question.id)} className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400">{isBookmarked ? React.cloneElement(ICONS.BOOKMARK_FILLED, { className: "h-6 w-6 text-yellow-400" }) : React.cloneElement(ICONS.BOOKMARK_EMPTY, { className: "h-6 w-6" })}</button>
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
                     {isLoading ? ( <div className="flex items-center space-x-2 text-gray-400"><Spinner size="sm" /><span>Gemini is thinking...</span></div> ) : ( <p className="text-gray-300 whitespace-pre-wrap">{explanation}</p> )}
                 </div>
            )}
        </div>
    )
}

export default StudyModeScreen;
