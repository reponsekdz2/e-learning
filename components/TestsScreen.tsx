import React, { useState } from 'react';
import { tests } from '../data/tests';
import { subjects } from '../data/quizzes';
import { ICONS } from '../constants';
import { UserProgress } from '../types';
import CertificateModal from './CertificateModal';

interface TestsScreenProps {
  userPreferredTradeId: string;
  onStartTest: (testId: string) => void;
  userProgress: UserProgress;
}

const TestsScreen: React.FC<TestsScreenProps> = ({ userPreferredTradeId, onStartTest, userProgress }) => {
  const recommendedTest = tests.find(t => t.subjectId === userPreferredTradeId);
  const otherTests = tests.filter(t => t.id !== recommendedTest?.id);

  const [selectedCertificate, setSelectedCertificate] = useState<{title: string, date: string} | null>(null);

  return (
    <>
      <div className="w-full max-w-2xl mx-auto">
         <div className="text-center mb-8">
              <div className="flex justify-center mb-4 text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
              </div>
              <h2 className="text-4xl font-bold text-white mb-2">Formal Tests & Certifications</h2>
              <p className="text-xl text-gray-300">
                  Pass these comprehensive tests to earn a certificate of completion.
              </p>
         </div>

        <div className="space-y-6">
          {recommendedTest && (
              <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Recommended for you</h3>
                  <TestCard 
                      test={recommendedTest}
                      subjectName={subjects.find(s => s.id === recommendedTest.subjectId)?.name || ''}
                      onClick={() => onStartTest(recommendedTest.id)}
                      progress={userProgress[recommendedTest.id]}
                      onViewCertificate={() => setSelectedCertificate({title: recommendedTest.title, date: userProgress[recommendedTest.id]?.date})}
                      isRecommended
                  />
              </div>
          )}
          
          {otherTests.length > 0 && (
            <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">{recommendedTest ? 'Other Available Tests' : 'All Available Tests'}</h3>
                <div className="space-y-3">
                    {otherTests.map(test => (
                        <TestCard 
                            key={test.id}
                            test={test}
                            subjectName={subjects.find(s => s.id === test.subjectId)?.name || ''}
                            onClick={() => onStartTest(test.id)}
                            progress={userProgress[test.id]}
                            onViewCertificate={() => setSelectedCertificate({title: test.title, date: userProgress[test.id]?.date})}
                        />
                    ))}
                </div>
            </div>
          )}

          {!recommendedTest && otherTests.length > 0 && (
              <div className="text-center mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <p className="text-gray-300">Go to your <span className="font-bold text-purple-400">Profile</span> to set a preferred trade for recommended tests!</p>
              </div>
          )}
        </div>
      </div>
      {selectedCertificate && <CertificateModal certificate={selectedCertificate} userName="Kwizera Alex" onClose={() => setSelectedCertificate(null)} />}
    </>
  );
};

const TestCard: React.FC<{test: {id: string, title: string, questions: {length: number}}, subjectName: string, onClick: () => void, isRecommended?: boolean, progress?: {score: number, date: string}, onViewCertificate: () => void}> = 
({ test, subjectName, onClick, isRecommended = false, progress, onViewCertificate }) => {
    const cardClass = isRecommended 
        ? "bg-gradient-to-r from-purple-800 to-indigo-800 border-purple-500" 
        : "bg-gray-800 border-gray-700 hover:border-purple-500";
    
    const hasPassed = progress && (progress.score / test.questions.length) >= 0.8; // 80% to pass

    return (
         <div className={`p-4 rounded-lg border ${cardClass} flex flex-col sm:flex-row justify-between sm:items-center transition-colors duration-300`}>
            <div>
                <p className="font-bold text-white text-lg">{test.title}</p>
                <p className="text-sm text-gray-400">{subjectName} - {test.questions.length} Questions</p>
                {progress && (
                  <p className={`text-sm font-semibold mt-1 ${hasPassed ? 'text-green-400' : 'text-yellow-400'}`}>
                    Completed: {new Date(progress.date).toLocaleDateString()} - Score: {Math.round((progress.score / test.questions.length) * 100)}%
                  </p>
                )}
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-4 flex-shrink-0">
              {hasPassed ? (
                 <button 
                    onClick={onViewCertificate}
                    className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 flex items-center"
                >
                    {React.cloneElement(ICONS.CERTIFICATE, {className: "h-5 w-5 mr-2"})}
                    View Certificate
                </button>
              ) : (
                <button 
                    onClick={onClick}
                    className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transform hover:scale-105 transition-transform duration-200"
                >
                    {progress ? 'Try Again' : 'Start Test'}
                </button>
              )}
            </div>
        </div>
    )
}

export default TestsScreen;