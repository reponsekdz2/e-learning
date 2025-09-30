import { Subject } from '../types';

export const subjects: Subject[] = [
  // General Subjects
  {
    id: 'biology',
    name: 'Biology',
    quizzes: [
      {
        id: 'bio-1',
        title: 'The Cell',
        questions: [
          { questionText: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Ribosome', 'Mitochondrion', 'Cell Wall'], correctAnswerIndex: 2 },
          { questionText: 'Which organelle is responsible for protein synthesis?', options: ['Golgi Apparatus', 'Ribosome', 'Lysosome', 'Vacuole'], correctAnswerIndex: 1 },
          { questionText: 'What is the main function of the cell membrane?', options: ['Provide structural support', 'Control what enters and leaves the cell', 'Store genetic information', 'Produce energy'], correctAnswerIndex: 1 },
          { questionText: 'In which part of the cell does photosynthesis occur?', options: ['Mitochondrion', 'Cytoplasm', 'Chloroplast', 'Nucleus'], correctAnswerIndex: 2 },
          { questionText: 'Which of these is not found in an animal cell?', options: ['Cell Wall', 'Mitochondrion', 'Nucleus', 'Cytoplasm'], correctAnswerIndex: 0 },
        ]
      }
    ]
  },
  {
    id: 'history',
    name: 'History',
    quizzes: [
       {
        id: 'hist-1',
        title: 'Ancient Egypt',
        questions: [
          { questionText: 'What is the name of the writing system used by Ancient Egyptians?', options: ['Cuneiform', 'Hieroglyphics', 'Sanskrit', 'Latin'], correctAnswerIndex: 1 },
          { questionText: 'The Great Pyramid of Giza was built for which pharaoh?', options: ['Tutankhamun', 'Ramesses II', 'Cleopatra', 'Khufu'], correctAnswerIndex: 3 },
        ]
      }
    ]
  },
  // TVET Subjects
  {
    id: 'software-development',
    name: 'Software Development',
    quizzes: [
      {
        id: 'sd-1',
        title: 'HTML & CSS Basics',
        questions: [
          { questionText: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyperlink and Text Markup Language', 'Home Tool Markup Language'], correctAnswerIndex: 0 },
          { questionText: 'Which CSS property is used to change the text color of an element?', options: ['font-color', 'text-color', 'color', 'font-style'], correctAnswerIndex: 2 },
          { questionText: 'What is the correct HTML element for inserting a line break?', options: ['<break>', '<lb>', '<br>', '<line>'], correctAnswerIndex: 2 },
          { questionText: 'How do you select an element with id "demo" in CSS?', options: ['.demo', 'demo', '#demo', '*demo'], correctAnswerIndex: 2 },
          { questionText: 'Which HTML tag is used to define an internal style sheet?', options: ['<script>', '<css>', '<style>', '<head>'], correctAnswerIndex: 2 },
        ]
      },
      {
        id: 'sd-2',
        title: 'JavaScript Fundamentals',
        questions: [
          { questionText: 'Which keyword is used to declare a variable in JavaScript?', options: ['var', 'let', 'const', 'All of the above'], correctAnswerIndex: 3 },
          { questionText: 'How do you write "Hello World" in an alert box?', options: ['alertBox("Hello World");', 'msg("Hello World");', 'alert("Hello World");', 'msgBox("Hello World");'], correctAnswerIndex: 2 },
        ]
      }
    ]
  },
  {
    id: 'networking',
    name: 'Networking',
    quizzes: [
      {
        id: 'net-1',
        title: 'OSI Model',
        questions: [
          { questionText: 'How many layers are in the OSI model?', options: ['5', '6', '7', '8'], correctAnswerIndex: 2 },
          { questionText: 'Which layer of the OSI model is responsible for routing?', options: ['Physical', 'Data Link', 'Network', 'Transport'], correctAnswerIndex: 2 },
        ]
      }
    ]
  }
];
