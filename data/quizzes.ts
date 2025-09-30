
import { Subject } from '../types';

export const allSubjects: Subject[] = [
  // TVET Subjects
  {
    id: 'software-development',
    name: 'Software Development',
    category: 'TVET',
    quizzes: [
      {
        id: 'sd-quiz-1',
        title: 'HTML Basics',
        questions: [
          { id: 'sd-q-1-1', questionText: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'High Text Machine Language', 'Hyperlink and Text Markup Language', 'Home Tool Markup Language'], correctAnswerIndex: 0 },
          { id: 'sd-q-1-2', questionText: 'Which tag is used to create a hyperlink?', options: ['<link>', '<a>', '<href>', '<p>'], correctAnswerIndex: 1 },
          { id: 'sd-q-1-3', questionText: 'What is the correct tag for the largest heading?', options: ['<h6>', '<h1>', '<head>', '<heading>'], correctAnswerIndex: 1 },
        ]
      },
      {
        id: 'sd-quiz-2',
        title: 'CSS Fundamentals',
        questions: [
            { id: 'sd-q-2-1', questionText: 'What does CSS stand for?', options: ['Cascading Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'], correctAnswerIndex: 0 },
            { id: 'sd-q-2-2', questionText: 'Which property is used to change the text color?', options: ['text-color', 'font-color', 'color', 'foreground-color'], correctAnswerIndex: 2 },
        ]
      },
    ]
  },
  {
    id: 'culinary-arts',
    name: 'Culinary Arts',
    category: 'TVET',
    quizzes: [
        {
            id: 'ca-quiz-1',
            title: 'Kitchen Safety',
            questions: [
                { id: 'ca-q-1-1', questionText: 'What is the most common cause of kitchen fires?', options: ['Electrical malfunctions', 'Unattended cooking', 'Gas leaks', 'Smoking'], correctAnswerIndex: 1 },
                { id: 'ca-q-1-2', questionText: 'What is the "temperature danger zone" for food?', options: ['0°C - 20°C', '4°C - 60°C', '20°C - 80°C', '60°C - 100°C'], correctAnswerIndex: 1 },
            ]
        }
    ]
  },
   {
    id: 'automobile-technology',
    name: 'Automobile Technology',
    category: 'TVET',
    quizzes: []
  },
  {
    id: 'masonry',
    name: 'Masonry',
    category: 'TVET',
    quizzes: []
  },
  {
    id: 'networking',
    name: 'Networking',
    category: 'TVET',
    quizzes: []
  },
   {
    id: 'solar-energy',
    name: 'Solar Energy',
    category: 'TVET',
    quizzes: []
  },
  {
    id: 'land-surveying',
    name: 'Land Surveying',
    category: 'TVET',
    quizzes: []
  },
   {
    id: 'ict',
    name: 'ICT',
    category: 'TVET',
    quizzes: []
  },
  // General Subjects
  {
    id: 'mathematics',
    name: 'Mathematics',
    category: 'General',
    quizzes: [
       {
        id: 'math-quiz-1',
        title: 'Basic Algebra',
        questions: [
            { id: 'math-q-1-1', questionText: 'Solve for x: 2x + 5 = 15', options: ['5', '10', '2.5', '7'], correctAnswerIndex: 0 },
        ]
      },
    ]
  },
  {
    id: 'english',
    name: 'English',
    category: 'General',
    quizzes: []
  },
  {
    id: 'kinyarwanda',
    name: 'Kinyarwanda',
    category: 'General',
    quizzes: []
  },
];
