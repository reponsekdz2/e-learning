import { Subject } from '../types';

export const subjects: Subject[] = [
  // General Subjects
  {
    id: 'kinyarwanda',
    name: 'Kinyarwanda',
    category: 'General',
    quizzes: [
      {
        id: 'kin-1',
        title: 'Insigamigani',
        questions: [
          { questionText: 'Umusaza n\'inkoni ye bisobanura iki?', options: ['Gusaza neza', 'Kuba umuntu adatandukana n\'icyo akunda', 'Kugira inkoni nziza', 'Gukunda abasaza'], correctAnswerIndex: 1 },
          { questionText: 'Icyo umutima ushaka amata agira...', options: ['umuhondo', 'umweru', 'ubururu', 'igikara'], correctAnswerIndex: 0 },
        ]
      }
    ]
  },
  {
    id: 'english',
    name: 'English',
    category: 'General',
    quizzes: [
       {
        id: 'eng-1',
        title: 'Grammar Basics',
        questions: [
          { questionText: 'Which of the following is a verb?', options: ['Quickly', 'Beautiful', 'Run', 'House'], correctAnswerIndex: 2 },
          { questionText: 'What is the plural of "mouse"?', options: ['Mouses', 'Mice', 'Mouse', 'Meese'], correctAnswerIndex: 1 },
        ]
      }
    ]
  },
  {
    id: 'biology',
    name: 'Biology',
    category: 'General',
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
    id: 'chemistry',
    name: 'Chemistry',
    category: 'General',
    quizzes: [
      {
        id: 'chem-1',
        title: 'Chemical Elements',
        questions: [
          { questionText: 'What is the chemical symbol for Gold?', options: ['Ag', 'Au', 'G', 'Go'], correctAnswerIndex: 1 },
          { questionText: 'Which element is most abundant in the Earth\'s atmosphere?', options: ['Oxygen', 'Hydrogen', 'Nitrogen', 'Carbon'], correctAnswerIndex: 2 },
        ]
      }
    ]
  },
  {
    id: 'physics',
    name: 'Physics',
    category: 'General',
    quizzes: [
      {
        id: 'phy-1',
        title: 'Laws of Motion',
        questions: [
          { questionText: 'Who formulated the laws of motion?', options: ['Albert Einstein', 'Galileo Galilei', 'Isaac Newton', 'Nikola Tesla'], correctAnswerIndex: 2 },
          { questionText: 'What is the unit of force?', options: ['Watt', 'Joule', 'Newton', 'Pascal'], correctAnswerIndex: 2 },
        ]
      }
    ]
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    category: 'General',
    quizzes: [
      {
        id: 'math-1',
        title: 'Basic Algebra',
        questions: [
          { questionText: 'What is the value of x if x + 5 = 10?', options: ['3', '5', '10', '15'], correctAnswerIndex: 1 },
          { questionText: 'What is 7 multiplied by 8?', options: ['49', '54', '56', '63'], correctAnswerIndex: 2 },
        ]
      }
    ]
  },
  {
    id: 'entrepreneurship',
    name: 'Entrepreneurship',
    category: 'General',
    quizzes: [
       {
        id: 'ent-1',
        title: 'Business Basics',
        questions: [
          { questionText: 'What is a business plan?', options: ['A financial statement', 'A marketing brochure', 'A document outlining business goals and how to achieve them', 'A list of employees'], correctAnswerIndex: 2 },
        ]
      }
    ]
  },
  {
    id: 'geography',
    name: 'Geography',
    category: 'General',
    quizzes: [
       {
        id: 'geo-1',
        title: 'World Capitals',
        questions: [
          { questionText: 'What is the capital of Rwanda?', options: ['Kigali', 'Butare', 'Gisenyi', 'Kibuye'], correctAnswerIndex: 0 },
          { questionText: 'What is the longest river in the world?', options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'], correctAnswerIndex: 1 },
        ]
      }
    ]
  },
  {
    id: 'history',
    name: 'History',
    category: 'General',
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
    category: 'TVET',
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
    id: 'wood-technology',
    name: 'Wood Technology',
    category: 'TVET',
    quizzes: [
      {
        id: 'wood-1',
        title: 'Tree Species',
        questions: [
          { questionText: 'Which of these is a hardwood?', options: ['Pine', 'Fir', 'Oak', 'Spruce'], correctAnswerIndex: 2 },
          { questionText: 'What is the process of drying timber called?', options: ['Seasoning', 'Curing', 'Dehydrating', 'Baking'], correctAnswerIndex: 0 },
        ]
      }
    ]
  },
  {
    id: 'networking',
    name: 'Networking',
    category: 'TVET',
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
  },
    {
    id: 'multimedia',
    name: 'Multimedia',
    category: 'TVET',
    quizzes: [
      {
        id: 'mm-1',
        title: 'Color Models',
        questions: [
          { questionText: 'What does RGB stand for?', options: ['Red Green Blue', 'Red Grey Black', 'Royal Gold Brown', 'Rapid Graphic Builder'], correctAnswerIndex: 0 },
        ]
      }
    ]
  },
  {
    id: 'nursing',
    name: 'Nursing',
    category: 'TVET',
    quizzes: [
      {
        id: 'nur-1',
        title: 'Basic First Aid',
        questions: [
          { questionText: 'What is the first step in assessing an emergency situation?', options: ['Call for help', 'Check for danger', 'Check for response', 'Administer CPR'], correctAnswerIndex: 1 },
        ]
      }
    ]
  },
  {
    id: 'accounting',
    name: 'Accounting',
    category: 'TVET',
    quizzes: [
      {
        id: 'acc-1',
        title: 'Fundamental Concepts',
        questions: [
          { questionText: 'What does "debit" mean?', options: ['An increase in assets or a decrease in liabilities', 'A decrease in assets or an increase in liabilities', 'An increase in equity', 'A decrease in revenue'], correctAnswerIndex: 0 },
        ]
      }
    ]
  },
];
