
import { Notification } from '../types';

export const notifications: Notification[] = [
    {
        id: '1',
        message: 'Welcome to Gemini Genius! Complete your profile to get started.',
        date: new Date().toISOString(),
        read: false,
    },
    {
        id: '2',
        message: 'A new "Web Fundamentals" test is available. Check it out!',
        date: new Date(Date.now() - 86400000 * 2).toISOString(), // 2 days ago
        read: false,
    },
    {
        id: '3',
        message: 'You unlocked the "Quiz Novice" achievement!',
        date: new Date(Date.now() - 86400000 * 5).toISOString(), // 5 days ago
        read: true,
    }
];
