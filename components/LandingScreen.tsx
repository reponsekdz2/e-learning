// Fix: Populated placeholder file with a basic component.
import React from 'react';

const LandingScreen: React.FC = () => {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold">Welcome to Igacyane</h1>
            <p className="mt-4 text-lg">The AI-powered learning platform.</p>
        </div>
    );
};

export default LandingScreen;
