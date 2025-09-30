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
        title: 'Insigamigani n\'Inshoberamahanga',
        questions: [
          { id: '', questionText: 'Umusaza n\'inkoni ye bisobanura iki?', options: ['Gusaza neza', 'Kuba umuntu adatandukana n\'icyo akunda', 'Kugira inkoni nziza', 'Gukunda abasaza'], correctAnswerIndex: 1 },
          { id: '', questionText: 'Icyo umutima ushaka amata agira...', options: ['umuhondo', 'umweru', 'ubururu', 'igikara'], correctAnswerIndex: 0 },
          { id: '', questionText: '"Gukubita agatoki ku kandi" bivuga iki?', options: ['Kurwana', 'Kwishima cyane', 'Kubabara', 'Gukina'], correctAnswerIndex: 1},
          { id: '', questionText: 'Iyo umuntu "yariye karungu" aba ameze ate?', options: ['Yishimye', 'Arakaye cyane', 'Arwaye', 'Asonje'], correctAnswerIndex: 1},
          { id: '', questionText: 'Iyo bavuga ngo "Amazi si ya yandi" baba bashaka kuvuga iki?', options: ['Amazi yarahindutse', 'Ibintu byahindutse, si nkuko byari bimeze', 'Amazi yaranduye', 'Hari andi mazi mashya'], correctAnswerIndex: 1 },
          { id: '', questionText: '"Guca inka amabere" bisobanuye?', options: ['Gukama inka nabi', 'Kwica inka', 'Gukora igikorwa kibi cyane ku muntu wagufashije', 'Kuvuna amabere y\'inka'], correctAnswerIndex: 2 },
          { id: '', questionText: 'Iyo umuntu "yicaye ku gutwi k\'ingoma" aba ari he?', options: ['Kure y\'abandi', 'Ahantu hihishe', 'Ahantu heza cyane kandi hatekanye', 'Mu ngoma'], correctAnswerIndex: 2}
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
        title: 'Grammar & Vocabulary',
        questions: [
          { id: '', questionText: 'Which of the following is a verb?', options: ['Quickly', 'Beautiful', 'Run', 'House'], correctAnswerIndex: 2 },
          { id: '', questionText: 'What is the plural of "mouse"?', options: ['Mouses', 'Mice', 'Mouse', 'Meese'], correctAnswerIndex: 1 },
          { id: '', questionText: 'Choose the correct sentence: ', options: ['They is going to the market.', 'They are going to the market.', 'They am going to the market.', 'They was going to the market.'], correctAnswerIndex: 1},
          { id: '', questionText: 'An antonym for "brave" is:', options: ['Heroic', 'Fearless', 'Cowardly', 'Strong'], correctAnswerIndex: 2},
          { id: '', questionText: 'Identify the adjective in the following sentence: "The quick brown fox jumps over the lazy dog."', options: ['jumps', 'quick', 'over', 'fox'], correctAnswerIndex: 1},
          { id: '', questionText: 'Which tense is used in this sentence: "I will be studying for my exam tomorrow."', options: ['Present Continuous', 'Past Perfect', 'Future Continuous', 'Present Perfect'], correctAnswerIndex: 2},
          { id: '', questionText: 'She has been working here ___ 2015.', options: ['for', 'since', 'at', 'in'], correctAnswerIndex: 1},
          { id: '', questionText: 'Choose the correct spelling:', options: ['Necessery', 'Neccessary', 'Necessary', 'Necesary'], correctAnswerIndex: 2}
        ]
      }
    ]
  },
  {
    id: 'french',
    name: 'French',
    category: 'General',
    quizzes: [
       {
        id: 'fr-1',
        title: 'Vocabulaire de Base',
        questions: [
          { id: '', questionText: 'How do you say "Hello" in French?', options: ['Au revoir', 'Bonjour', 'Merci', 'Oui'], correctAnswerIndex: 1 },
          { id: '', questionText: 'What is "Thank you"?', options: ['S\'il vous plaît', 'Excusez-moi', 'Merci', 'De rien'], correctAnswerIndex: 2 },
          { id: '', questionText: 'Which of these means "water"?', options: ['Le pain', 'Le lait', 'Le fromage', 'L\'eau'], correctAnswerIndex: 3},
          { id: '', questionText: 'How do you say "I am Rwandan" (male)?', options: ['Je suis Rwandais', 'Elle est Rwandaise', 'Il est Anglais', 'Je suis Belge'], correctAnswerIndex: 0},
          { id: '', questionText: 'What is the French word for "school"?', options: ['Maison', 'Livre', 'École', 'Rue'], correctAnswerIndex: 2},
          { id: '', questionText: 'How would you ask "What time is it?"', options: ['Quel âge as-tu?', 'Où sont les toilettes?', 'Comment ça va?', 'Quelle heure est-il?'], correctAnswerIndex: 3}
        ]
      }
    ]
  },
   {
    id: 'kiswahili',
    name: 'Kiswahili',
    category: 'General',
    quizzes: [
       {
        id: 'kis-1',
        title: 'Maneno ya Msingi (Basic Words)',
        questions: [
          { id: '', questionText: 'How do you say "Hello" to a group of people?', options: ['Jambo', 'Mambo', 'Hujambo', 'Habari'], correctAnswerIndex: 1 },
          { id: '', questionText: 'What is "Asante" in English?', options: ['Sorry', 'Please', 'Thank you', 'Welcome'], correctAnswerIndex: 2 },
          { id: '', questionText: 'The word "Mwalimu" means:', options: ['Student', 'Doctor', 'Teacher', 'Driver'], correctAnswerIndex: 2},
          { id: '', questionText: 'How do you say "Goodbye"?', options: ['Karibu', 'Kwaheri', 'Ndiyo', 'Hapana'], correctAnswerIndex: 1},
          { id: '', questionText: 'What is "Maji" in English?', options: ['Food', 'Water', 'Fire', 'House'], correctAnswerIndex: 1}
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
        title: 'The Cell & Genetics',
        questions: [
          { id: '', questionText: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Ribosome', 'Mitochondrion', 'Cell Wall'], correctAnswerIndex: 2 },
          { id: '', questionText: 'Which organelle is responsible for protein synthesis?', options: ['Golgi Apparatus', 'Ribosome', 'Lysosome', 'Vacuole'], correctAnswerIndex: 1 },
          { id: '', questionText: 'What is the main function of the cell membrane?', options: ['Provide structural support', 'Control what enters and leaves a cell', 'Store genetic information', 'Produce energy'], correctAnswerIndex: 1 },
          { id: '', questionText: 'What molecule carries genetic instructions for the development, functioning, growth, and reproduction of all known organisms?', options: ['RNA', 'ATP', 'DNA', 'Protein'], correctAnswerIndex: 2},
          { id: '', questionText: 'Which of these is not found in an animal cell?', options: ['Cell Wall', 'Mitochondrion', 'Nucleus', 'Cytoplasm'], correctAnswerIndex: 0 },
          { id: '', questionText: 'Photosynthesis primarily occurs in which part of the plant cell?', options: ['Mitochondria', 'Chloroplasts', 'Nucleus', 'Ribosomes'], correctAnswerIndex: 1},
          { id: '', questionText: 'What is the process of cell division that results in two identical daughter cells?', options: ['Meiosis', 'Mitosis', 'Fertilization', 'Osmosis'], correctAnswerIndex: 1}
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
        title: 'Elements & Reactions',
        questions: [
          { id: '', questionText: 'What is the chemical symbol for Gold?', options: ['Ag', 'Au', 'G', 'Go'], correctAnswerIndex: 1 },
          { id: '', questionText: 'Which element is most abundant in the Earth\'s atmosphere?', options: ['Oxygen', 'Hydrogen', 'Nitrogen', 'Carbon'], correctAnswerIndex: 2 },
          { id: '', questionText: 'What is the pH of a neutral solution?', options: ['0', '7', '14', '1'], correctAnswerIndex: 1},
          { id: '', questionText: 'A chemical reaction that releases heat is called:', options: ['Endothermic', 'Exothermic', 'Catalytic', 'Neutral'], correctAnswerIndex: 1},
          { id: '', questionText: 'What is the atomic number of Carbon?', options: ['12', '14', '6', '8'], correctAnswerIndex: 2},
          { id: '', questionText: 'H₂O is the chemical formula for:', options: ['Hydrogen Peroxide', 'Salt', 'Sugar', 'Water'], correctAnswerIndex: 3}
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
        title: 'Forces & Energy',
        questions: [
          { id: '', questionText: 'Who formulated the laws of motion?', options: ['Albert Einstein', 'Galileo Galilei', 'Isaac Newton', 'Nikola Tesla'], correctAnswerIndex: 2 },
          { id: '', questionText: 'What is the unit of force?', options: ['Watt', 'Joule', 'Newton', 'Pascal'], correctAnswerIndex: 2 },
          { id: '', questionText: 'What is the formula for calculating work done?', options: ['Force x Distance', 'Mass x Acceleration', 'Pressure / Area', 'Voltage x Current'], correctAnswerIndex: 0},
          { id: '', questionText: 'Gravity is a force of:', options: ['Repulsion', 'Attraction', 'Friction', 'Magnetism'], correctAnswerIndex: 1},
          { id: '', questionText: 'What is the unit of electrical resistance?', options: ['Ampere', 'Volt', 'Watt', 'Ohm'], correctAnswerIndex: 3},
          { id: '', questionText: 'Kinetic energy is the energy of:', options: ['Position', 'Motion', 'Heat', 'Light'], correctAnswerIndex: 1}
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
        title: 'Algebra & Geometry',
        questions: [
          { id: '', questionText: 'What is the value of x if x + 5 = 10?', options: ['3', '5', '10', '15'], correctAnswerIndex: 1 },
          { id: '', questionText: 'What is 7 multiplied by 8?', options: ['49', '54', '56', '63'], correctAnswerIndex: 2 },
          { id: '', questionText: 'What is the area of a circle with a radius of 5 units?', options: ['10π', '25π', '5π', '100π'], correctAnswerIndex: 1},
          { id: '', questionText: 'How many degrees are in a right angle?', options: ['45', '90', '180', '360'], correctAnswerIndex: 1},
          { id: '', questionText: 'What is the value of 2 to the power of 5?', options: ['10', '25', '32', '16'], correctAnswerIndex: 2},
          { id: '', questionText: 'What is the next prime number after 11?', options: ['12', '13', '14', '15'], correctAnswerIndex: 1},
          { id: '', questionText: 'Solve for x: 3x - 4 = 11', options: ['3', '4', '5', '6'], correctAnswerIndex: 2}
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
        title: 'Business Planning',
        questions: [
          { id: '', questionText: 'What is a business plan?', options: ['A financial statement', 'A marketing brochure', 'A document outlining business goals and how to achieve them', 'A list of employees'], correctAnswerIndex: 2 },
          { id: '', questionText: 'What does SWOT analysis stand for?', options: ['Sales, Weaknesses, Opportunities, Threats', 'Strengths, Weaknesses, Opportunities, Threats', 'Strengths, Work, Operations, Tasks', 'Sales, Work, Opportunities, Tasks'], correctAnswerIndex: 1},
          { id: '', questionText: 'The money used to start a business is called:', options: ['Profit', 'Revenue', 'Capital', 'Debt'], correctAnswerIndex: 2},
          { id: '', questionText: 'Who is a person who organizes and operates a business, taking on greater than normal financial risks?', options: ['An Employee', 'A Manager', 'A Shareholder', 'An Entrepreneur'], correctAnswerIndex: 3},
          { id: '', questionText: 'What is a target market?', options: ['A physical place to sell goods', 'All possible customers', 'A specific group of consumers a company aims to sell its products to', 'The company\'s marketing team'], correctAnswerIndex: 2}
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
        title: 'Rwandan & World Geography',
        questions: [
          { id: '', questionText: 'What is the capital of Rwanda?', options: ['Kigali', 'Butare', 'Gisenyi', 'Kibuye'], correctAnswerIndex: 0 },
          { id: '', questionText: 'What is the longest river in the world?', options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'], correctAnswerIndex: 1 },
          { id: '', questionText: 'Lake Kivu is located between Rwanda and which other country?', options: ['Uganda', 'Tanzania', 'Burundi', 'DR Congo'], correctAnswerIndex: 3},
          { id: '', questionText: 'Which is the largest continent by land area?', options: ['Africa', 'Europe', 'Asia', 'North America'], correctAnswerIndex: 2}
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
        title: 'World & Rwandan History',
        questions: [
          { id: '', questionText: 'What is the name of the writing system used by Ancient Egyptians?', options: ['Cuneiform', 'Hieroglyphics', 'Sanskrit', 'Latin'], correctAnswerIndex: 1 },
          { id: '', questionText: 'The Great Pyramid of Giza was built for which pharaoh?', options: ['Tutankhamun', 'Ramesses II', 'Cleopatra', 'Khufu'], correctAnswerIndex: 3 },
          { id: '', questionText: 'In what year did Rwanda gain its independence?', options: ['1959', '1962', '1994', '2000'], correctAnswerIndex: 1},
          { id: '', questionText: 'World War I began in which year?', options: ['1905', '1914', '1920', '1939'], correctAnswerIndex: 1}
        ]
      }
    ]
  },
  {
    id: 'civic-education',
    name: 'Civic Education',
    category: 'General',
    quizzes: [
       {
        id: 'civ-1',
        title: 'Rwandan Governance',
        questions: [
          { id: '', questionText: 'What do the colors of the Rwandan flag symbolize?', options: ['Hope, Peace, Economic development', 'Unity, Work, Patriotism', 'Sun, Hills, Water', 'People, Power, Progress'], correctAnswerIndex: 0},
          { id: '', questionText: 'What is the name of the Rwandan Parliament?', options: ['The Senate', 'The National Assembly', 'The Chamber of Deputies & The Senate', 'The Congress'], correctAnswerIndex: 2},
          { id: '', questionText: 'What is the term length for the President of Rwanda?', options: ['4 years', '5 years', '6 years', '7 years'], correctAnswerIndex: 1},
        ]
      }
    ]
  },
  {
    id: 'ict',
    name: 'ICT',
    category: 'General',
    quizzes: [
      {
        id: 'ict-1',
        title: 'Computer Hardware',
        questions: [
          { id: '', questionText: 'Which of these is an input device?', options: ['Monitor', 'Printer', 'Speakers', 'Mouse'], correctAnswerIndex: 3},
          { id: '', questionText: 'What does SSD stand for in the context of computer storage?', options: ['Solid State Drive', 'Super Storage Device', 'System Software Disk', 'Secure Socket Drive'], correctAnswerIndex: 0},
          { id: '', questionText: 'Which component is responsible for processing graphics and video output?', options: ['CPU', 'RAM', 'GPU (Graphics Processing Unit)', 'Motherboard'], correctAnswerIndex: 2},
          { id: '', questionText: 'Which of these is NOT a type of computer port?', options: ['USB', 'HDMI', 'Ethernet', 'CPU'], correctAnswerIndex: 3},
        ]
      },
      {
        id: 'ict-2',
        title: 'Software & Operating Systems',
        questions: [
          { id: '', questionText: 'Which of the following is an example of an Operating System?', options: ['Microsoft Word', 'Google Chrome', 'Windows 11', 'Adobe Photoshop'], correctAnswerIndex: 2},
          { id: '', questionText: 'What is the difference between system software and application software?', options: ['There is no difference', 'System software runs the computer, application software performs specific user tasks', 'Application software is free, system software is not', 'System software is for servers, application software is for desktops'], correctAnswerIndex: 1},
          { id: '', questionText: 'What does ".pdf" file extension usually stand for?', options: ['Picture Document File', 'Portable Document Format', 'Personal Data File', 'Printed Document Form'], correctAnswerIndex: 1},
          { id: '', questionText: 'What is "cloud computing"?', options: ['Storing data on your local hard drive', 'Using a network of remote servers hosted on the Internet to store, manage, and process data', 'A type of weather forecasting software', 'A new type of computer monitor'], correctAnswerIndex: 1}
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
        title: 'Web Fundamentals',
        questions: [
          { id: '', questionText: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyperlink and Text Markup Language', 'Home Tool Markup Language'], correctAnswerIndex: 0 },
          { id: '', questionText: 'Which CSS property is used to change the text color of an element?', options: ['font-color', 'text-color', 'color', 'font-style'], correctAnswerIndex: 2 },
          { id: '', questionText: 'What is the correct HTML element for the largest heading?', options: ['<h6>', '<heading>', '<h1>', '<head>'], correctAnswerIndex: 2 },
          { id: '', questionText: 'How do you select an element with id "demo" in CSS?', options: ['.demo', 'demo', '#demo', '*demo'], correctAnswerIndex: 2 },
          { id: '', questionText: 'Which keyword is used to declare a constant variable in JavaScript?', options: ['var', 'let', 'const', 'define'], correctAnswerIndex: 2 },
          { id: '', questionText: 'What is the purpose of a `<div>` tag?', options: ['To create a hyperlink', 'To define a division or a section', 'To display an image', 'To make text bold'], correctAnswerIndex: 1 },
          { id: '', questionText: 'In JavaScript, how do you call a function named "myFunction"?', options: ['call function myFunction()', 'myFunction()', 'call myFunction()', 'execute myFunction()'], correctAnswerIndex: 1 },
          { id: '', questionText: 'Which version control system is most commonly used by developers?', options: ['SVN', 'Mercurial', 'Git', 'CVS'], correctAnswerIndex: 2}
        ]
      },
      {
        id: 'sd-2',
        title: 'JavaScript & React',
        questions: [
            { id: '', questionText: 'What is the purpose of the `useState` hook in React?', options: ['To fetch data from an API', 'To add stateful logic to function components', 'To perform side effects', 'To create a new component'], correctAnswerIndex: 1},
            { id: '', questionText: 'Which JavaScript array method creates a new array with all elements that pass the test implemented by the provided function?', options: ['.map()', '.forEach()', '.filter()', '.reduce()'], correctAnswerIndex: 2},
            { id: '', questionText: 'What is JSX?', options: ['A templating engine for JavaScript', 'A JavaScript syntax extension for writing HTML-like code', 'A CSS preprocessor', 'A type of database'], correctAnswerIndex: 1},
            { id: '', questionText: 'How do you pass data from a parent component to a child component in React?', options: ['Using state', 'Using context', 'Using props', 'Using Redux'], correctAnswerIndex: 2},
            { id: '', questionText: 'What does the `useEffect` hook do?', options: ['It lets you perform side effects in function components', 'It manages component state', 'It defines the component\'s structure', 'It handles user events'], correctAnswerIndex: 0}
        ]
      }
    ]
  },
   {
    id: 'computer-systems',
    name: 'Computer Systems',
    category: 'TVET',
    quizzes: [
      {
        id: 'cs-1',
        title: 'Hardware & Architecture',
        questions: [
          { id: '', questionText: 'What does CPU stand for?', options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Process Unit', 'Central Processor Unit'], correctAnswerIndex: 0 },
          { id: '', questionText: 'What is RAM an acronym for?', options: ['Read-Only Memory', 'Random-Access Memory', 'Real-time Access Module', 'Remote-Access Memory'], correctAnswerIndex: 1 },
          { id: '', questionText: 'Which component is considered the "brain" of the computer?', options: ['RAM', 'Hard Drive', 'Motherboard', 'CPU'], correctAnswerIndex: 3 },
          { id: '', questionText: 'What is the difference between RAM and a Hard Drive (HDD/SSD)?', options: ['RAM is for long-term storage, Hard Drive is for short-term', 'RAM is volatile (temporary), Hard Drive is non-volatile (permanent)', 'There is no difference', 'RAM is much slower than a Hard Drive'], correctAnswerIndex: 1 },
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
        title: 'OSI Model & IP Addressing',
        questions: [
          { id: '', questionText: 'How many layers are in the OSI model?', options: ['5', '6', '7', '8'], correctAnswerIndex: 2 },
          { id: '', questionText: 'Which layer of the OSI model is responsible for routing?', options: ['Physical', 'Data Link', 'Network', 'Transport'], correctAnswerIndex: 2 },
          { id: '', questionText: 'What is the function of a DNS server?', options: ['To assign IP addresses', 'To translate domain names to IP addresses', 'To block network traffic', 'To store files'], correctAnswerIndex: 1},
          // FIX: Added missing correctAnswerIndex property. The correct answer is '172.16.0.1' at index 1.
          { id: '', questionText: 'Which of the following is a private IP address?', options: ['127.0.0.1', '172.16.0.1', '8.8.8.8', '208.67.222.222'], correctAnswerIndex: 1 }
        ]
      }
    ]
  },
]
