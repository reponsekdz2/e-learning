import React from 'react';
import { tests } from '../data/tests';
import { subjects } from '../data/quizzes';

interface TestsScreenProps {
  userPreferredTradeId: string;
  onStartTest: (testId: string) => void;
}

const TestsScreen: React.FC<TestsScreenProps> = ({ userPreferredTradeId, onStartTest }) => {
  const recommendedTest = tests.find(t => t.subjectId === userPreferredTradeId);

  return (
    <div className="w-full max-w-2xl mx-auto">
       <div className="text-center mb-8">
            <div className="flex justify-center mb-4 text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">Formal Tests</h2>
            <p className="text-xl text-gray-300">
                Challenge your knowledge with these comprehensive tests.
            </p>
       </div>

      <div className="space-y-6">
        {recommendedTest && (
            <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Recommended for you</h3>
                <TestCard 
                    title={recommendedTest.title}
                    subjectName={subjects.find(s => s.id === recommendedTest.subjectId)?.name || ''}
                    questionCount={recommendedTest.questions.length}
                    onClick={() => onStartTest(recommendedTest.id)}
                    isRecommended
                />
            </div>
        )}

        <div>
            <h3 className="text-lg font-semibold text-purple-400 mb-2">All Available Tests</h3>
            <div className="space-y-3">
                 {tests.filter(t => t.id !== recommendedTest?.id).map(test => (
                    <TestCard 
                        key={test.id}
                        title={test.title}
                        subjectName={subjects.find(s => s.id === test.subjectId)?.name || ''}
                        questionCount={test.questions.length}
                        onClick={() => onStartTest(test.id)}
                    />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

const TestCard: React.FC<{title: string, subjectName: string, questionCount: number, onClick: () => void, isRecommended?: boolean}> = 
({ title, subjectName, questionCount, onClick, isRecommended = false }) => {
    const cardClass = isRecommended 
        ? "bg-gradient-to-r from-purple-800 to-indigo-800 border-purple-500" 
        : "bg-gray-800 border-gray-700 hover:border-purple-500";
    
    return (
         <div className={`p-4 rounded-lg border ${cardClass} flex justify-between items-center transition-colors duration-300`}>
            <div>
                <p className="font-bold text-white text-lg">{title}</p>
                <p className="text-sm text-gray-400">{subjectName} - {questionCount} Questions</p>
            </div>
            <button 
                onClick={onClick}
                className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transform hover:scale-105 transition-transform duration-200"
            >
                Start Test
            </button>
        </div>
    )
}


export default TestsScreen;