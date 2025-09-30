import { DailyChallenge } from '../types';

export const dailyChallenge: DailyChallenge = {
    id: 'daily-1',
    title: 'General Knowledge Mix-Up',
    quiz: {
        id: 'daily-quiz-1',
        title: 'Daily Challenge: General Knowledge',
        questions: [
            { questionText: 'What is the capital of Rwanda?', options: ['Kigali', 'Butare', 'Gisenyi', 'Kibuye'], correctAnswerIndex: 0 },
            { questionText: 'What does CPU stand for?', options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Process Unit', 'Central Processor Unit'], correctAnswerIndex: 0 },
            { questionText: 'What is the chemical symbol for Gold?', options: ['Ag', 'Au', 'G', 'Go'], correctAnswerIndex: 1 },
            { questionText: 'Who formulated the laws of motion?', options: ['Albert Einstein', 'Galileo Galilei', 'Isaac Newton', 'Nikola Tesla'], correctAnswerIndex: 2 },
            { questionText: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyperlink and Text Markup Language', 'Home Tool Markup Language'], correctAnswerIndex: 0 },
        ]
    }
};