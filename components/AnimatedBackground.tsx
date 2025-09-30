// Fix: Implemented the AnimatedBackground component.
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900">
        {/* Simple gradient or pattern, a real one would be more complex */}
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-900 rounded-full opacity-30 filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-indigo-900 rounded-full opacity-30 filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 -left-1/4 w-1/3 h-1/3 bg-pink-900 rounded-full opacity-30 filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
