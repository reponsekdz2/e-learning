import { DailyChallenge } from '../types';

export const allChallenges: DailyChallenge[] = [
    {
        id: 'daily-1',
        title: 'Tech & Logic Mix-Up',
        quiz: {
            id: 'daily-quiz-1',
            title: 'Daily Challenge: Tech & Logic',
            questions: [
                { questionText: 'What does CPU stand for?', options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Process Unit', 'Central Processor Unit'], correctAnswerIndex: 0 },
                { questionText: 'What is the value of x if 2x = 8?', options: ['2', '4', '6', '8'], correctAnswerIndex: 1 },
                { questionText: 'Which CSS property is used to change the background color?', options: ['color', 'bgcolor', 'background-color', 'background'], correctAnswerIndex: 2 },
                { questionText: 'How many layers are in the OSI model?', options: ['5', '6', '7', '8'], correctAnswerIndex: 2 },
                { questionText: 'What is the next prime number after 7?', options: ['8', '9', '10', '11'], correctAnswerIndex: 3 },
            ]
        }
    },
    {
        id: 'daily-2',
        title: 'Rwandan General Knowledge',
        quiz: {
            id: 'daily-quiz-2',
            title: 'Daily Challenge: Rwanda Focus',
            questions: [
                { questionText: 'What is the capital of Rwanda?', options: ['Kigali', 'Butare', 'Gisenyi', 'Kibuye'], correctAnswerIndex: 0 },
                { questionText: 'Lake Kivu is located between Rwanda and which other country?', options: ['Uganda', 'Tanzania', 'Burundi', 'DR Congo'], correctAnswerIndex: 3},
                { questionText: 'Which national park in Rwanda is famous for mountain gorillas?', options: ['Akagera National Park', 'Nyungwe Forest National Park', 'Volcanoes National Park', 'Gishwati Mukura National Park'], correctAnswerIndex: 2 },
                { questionText: 'In what year did Rwanda gain its independence?', options: ['1959', '1962', '1994', '2000'], correctAnswerIndex: 1},
                { questionText: 'Umusaza n\'inkoni ye bisobanura iki?', options: ['Gusaza neza', 'Kuba umuntu adatandukana n\'icyo akunda', 'Kugira inkoni nziza', 'Gukunda abasaza'], correctAnswerIndex: 1 },
            ]
        }
    },
    {
        id: 'daily-3',
        title: 'Hands-On Trades Challenge',
        quiz: {
            id: 'daily-quiz-3',
            title: 'Daily Challenge: TVET Skills',
            questions: [
                { questionText: 'What is the primary function of mortar in bricklaying?', options: ['To color the bricks', 'To bond the bricks together and seal gaps', 'To make the wall weaker', 'To absorb water'], correctAnswerIndex: 1},
                { questionText: 'What is the most important piece of personal protective equipment (PPE) for a welder?', options: ['Gloves', 'Steel-toed boots', 'Welding Helmet', 'Hard hat'], correctAnswerIndex: 2 },
                { questionText: 'What is the French term for finely chopped vegetables used as a base for stocks?', options: ['Mirepoix', 'Roux', 'Consommé', 'Julienne'], correctAnswerIndex: 0 },
                { questionText: 'Which tool is used to tighten and loosen pipes?', options: ['Hammer', 'Pipe Wrench', 'Screwdriver', 'Pliers'], correctAnswerIndex: 1 },
                { questionText: 'What does Ohm\'s law state?', options: ['V = I / R', 'I = V * R', 'R = V + I', 'V = I * R'], correctAnswerIndex: 3 },
            ]
        }
    },
];
