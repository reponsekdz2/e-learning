import { DailyChallenge } from '../types';

export const tvetChallenges: Record<string, DailyChallenge> = {
    'software-development': {
        id: 'tvet-daily-sd',
        title: 'Software Dev Code Challenge',
        quiz: {
            id: 'tvet-quiz-sd',
            title: 'Daily Challenge: Code & Logic',
            questions: [
                { id: '', questionText: 'What is the correct HTML element for the largest heading?', options: ['<h6>', '<heading>', '<h1>', '<head>'], correctAnswerIndex: 2 },
                { id: '', questionText: 'Which keyword is used to declare a constant variable in JavaScript?', options: ['var', 'let', 'const', 'define'], correctAnswerIndex: 2 },
                { id: '', questionText: 'What is the purpose of the `useState` hook in React?', options: ['To fetch data from an API', 'To add stateful logic to function components', 'To perform side effects', 'To create a new component'], correctAnswerIndex: 1},
                { id: '', questionText: 'How do you select an element with id "demo" in CSS?', options: ['.demo', 'demo', '#demo', '*demo'], correctAnswerIndex: 2 },
                { id: '', questionText: 'Which version control system is most commonly used by developers?', options: ['SVN', 'Mercurial', 'Git', 'CVS'], correctAnswerIndex: 2},
            ]
        }
    },
    'culinary-arts': {
        id: 'tvet-daily-ca',
        title: 'Culinary Arts Skills Test',
        quiz: {
            id: 'tvet-quiz-ca',
            title: 'Daily Challenge: Kitchen Knowledge',
            questions: [
                { id: '', questionText: 'What are the five "mother sauces" of classical French cuisine?', options: ['Ketchup, Mustard, Mayonnaise, BBQ, Hot Sauce', 'Béchamel, Velouté, Espagnole, Hollandaise, and Tomate', 'Pesto, Alfredo, Marinara, Carbonara, Bolognese', 'Soy, Teriyaki, Hoisin, Oyster, Fish Sauce'], correctAnswerIndex: 1},
                { id: '', questionText: 'What is the culinary term for cutting food into long, thin strips, like matchsticks?', options: ['Dicing', 'Mincing', 'Julienne', 'Chopping'], correctAnswerIndex: 2},
                { id: '', questionText: 'What is a "roux" used for in cooking?', options: ['As a garnish', 'To thicken sauces and soups', 'To add color', 'As a marinade'], correctAnswerIndex: 1},
                { id: '', questionText: 'What is the temperature "danger zone" where bacteria grow most rapidly on food?', options: ['Below 0°C', '0°C to 10°C', '4°C to 60°C', 'Above 100°C'], correctAnswerIndex: 2 },
                { id: '', questionText: 'What does it mean to "blanch" vegetables?', options: ['To cook them in a large amount of fat', 'To grill them until they are charred', 'To briefly boil them and then plunge them into ice water', 'To chop them very finely'], correctAnswerIndex: 2},
            ]
        }
    },
};
