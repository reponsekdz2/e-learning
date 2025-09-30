import React from 'react';

const TestsScreen: React.FC = () => {
  return (
    <div className="text-center p-8 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 max-w-md mx-auto">
       <div className="flex justify-center mb-4 text-purple-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        </div>
      <h2 className="text-4xl font-bold text-white mb-2">Tests</h2>
      <p className="text-xl text-gray-300">
        The tests section is coming soon. Stay tuned!
      </p>
    </div>
  );
};

export default TestsScreen;
