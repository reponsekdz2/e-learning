import React from 'react';

export const ICONS = {
    MONEY: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-green-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8.433 7.418c.158-.103.346-.196.567-.267v1.698a2.5 2.5 0 00-1.133 0V7.418zM11.567 7.151c.221.07.409.164.567.267v1.698a2.5 2.5 0 00-1.133 0V7.418zM10 16a6 6 0 100-12 6 6 0 000 12z" />
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.5 4.5 0 00-1.879 3.141A1 1 0 009 9.583v.092a2.5 2.5 0 010 1.65v.092a1 1 0 102 0v-.092a2.5 2.5 0 010-1.65V8.5a1 1 0 10-2 0v.092a4.5 4.5 0 001.879-3.141A1 1 0 0011 5z" clipRule="evenodd" />
        </svg>
    ),
    TROPHY: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM5 4.75A.75.75 0 015.75 4h8.5a.75.75 0 010 1.5h-8.5A.75.75 0 015 4.75z" />
            <path fillRule="evenodd" d="M6.5 6a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5h-7zm3.5 1.5a.5.5 0 00-1 0v1.5a.5.5 0 001 0v-1.5z" clipRule="evenodd" />
            <path d="M10 8a1 1 0 011 1v1.083l.5.5a1 1 0 01-1.414 1.414L10 11.414l-.086.086a1 1 0 01-1.414-1.414l.5-.5V9a1 1 0 011-1z" />
        </svg>
    ),
    ERROR: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    PROFILE: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    ),
    QUIZZES: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    TESTS: (
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
    ),
    CHALLENGES: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    ),
    WALLET: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
    ),
    LEADERBOARD: (
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
    ),
};