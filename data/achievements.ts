import { Achievement } from '../types';

export const allAchievements: Achievement[] = [
    {
        id: 'ach-quiz-novice',
        name: 'Quiz Novice',
        description: 'Complete your first quiz.',
        icon: '⭐️',
    },
    {
        id: 'ach-perfect-score',
        name: 'Perfectionist',
        description: 'Achieve a perfect score on any quiz.',
        icon: '🏆',
    },
    {
        id: 'ach-quick-learner',
        name: 'Quick Learner',
        description: 'Complete 5 quizzes.',
        icon: '🔥',
    },
    {
        id: 'ach-subject-master',
        name: 'Subject Master',
        description: 'Get a perfect score on all quizzes in one subject.',
        icon: '🥇',
    },
    {
        id: 'ach-knowledge-explorer',
        name: 'Knowledge Explorer',
        description: 'Complete a quiz in 3 different subjects.',
        icon: '📚',
    },
    {
        id: 'ach-brainiac',
        name: 'Brainiac',
        description: 'Answer 50 questions correctly.',
        icon: '🧠',
    },
];
