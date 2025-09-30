
import React from 'react';

// Fix: Add and export TOTAL_QUESTIONS constant.
export const TOTAL_QUESTIONS = 5;

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
    )
};