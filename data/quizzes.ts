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
          { id: '', questionText: 'Which of the following is a private IP address?', options: ['127.0.0.1', '172.16.0.1', '8.8.8.8', '208.67.222.222'], correctAnswerIndex: 1 },
          { id: '', questionText: 'What protocol is often used to retrieve email from a mail server?', options: ['SMTP', 'POP3', 'HTTP', 'FTP'], correctAnswerIndex: 1 }
        ]
      }
    ]
  },
  {
    id: 'automobile-technology',
    name: 'Automobile Technology',
    category: 'TVET',
    quizzes: [
      {
        id: 'auto-1',
        title: 'Engine Fundamentals',
        questions: [
          { id: '', questionText: 'What is the function of a car\'s radiator?', options: ['To heat the engine', 'To cool the engine', 'To filter oil', 'To charge the battery'], correctAnswerIndex: 1 },
          { id: '', questionText: 'Which part of the engine ignites the fuel-air mixture?', options: ['Piston', 'Crankshaft', 'Spark Plug', 'Alternator'], correctAnswerIndex: 2 },
          { id: '', questionText: 'What does "ABS" stand for in cars?', options: ['Anti-lock Braking System', 'Automatic Battery Service', 'Advanced Boost System', 'All-around Bumper Safety'], correctAnswerIndex: 0 },
          { id: '', questionText: 'What type of current does a car battery provide?', options: ['Alternating Current (AC)', 'Direct Current (DC)', 'Positive Current (PC)', 'Negative Current (NC)'], correctAnswerIndex: 1 }
        ]
      }
    ]
  },
   {
    id: 'motorcycle-repair',
    name: 'Motorcycle Repair',
    category: 'TVET',
    quizzes: [
      {
        id: 'moto-1',
        title: 'Basic Maintenance',
        questions: [
          { id: '', questionText: 'What is the most common reason for a motorcycle not starting?', options: ['Flat tire', 'Dirty seat', 'Dead battery or empty fuel tank', 'Broken mirror'], correctAnswerIndex: 2 },
          { id: '', questionText: 'How often should you typically check your motorcycle\'s tire pressure?', options: ['Once a year', 'Once a month', 'Before every long ride', 'Only when it looks flat'], correctAnswerIndex: 2 },
          { id: '', questionText: 'What does the clutch lever on a motorcycle do?', options: ['Engages the brakes', 'Changes the radio station', 'Disengages the engine from the transmission', 'Turns on the headlights'], correctAnswerIndex: 2 },
        ]
      }
    ]
  },
  {
    id: 'welding',
    name: 'Welding',
    category: 'TVET',
    quizzes: [
      {
        id: 'weld-1',
        title: 'Welding Safety & Basics',
        questions: [
          { id: '', questionText: 'What is the MOST important piece of Personal Protective Equipment (PPE) for a welder?', options: ['Gloves', 'Steel-toed boots', 'Welding Helmet', 'Hard hat'], correctAnswerIndex: 2 },
          { id: '', questionText: 'What does MIG stand for in welding?', options: ['Metal Inert Gas', 'Manual Iron Gauge', 'Metallic Industrial Grade', 'Motorized Impact Gear'], correctAnswerIndex: 0 },
          { id: '', questionText: 'What is the main purpose of flux in welding?', options: ['To cool the metal', 'To shield the weld area from atmospheric gases', 'To make the weld shiny', 'To increase the electrical current'], correctAnswerIndex: 1 },
        ]
      }
    ]
  },
   {
    id: 'building-construction',
    name: 'Building Construction',
    category: 'TVET',
    quizzes: [
      {
        id: 'bc-1',
        title: 'Site Safety & Materials',
        questions: [
          { id: '', questionText: 'What is the primary purpose of wearing a hard hat on a construction site?', options: ['To look professional', 'To protect the head from falling objects', 'To keep the sun out of your eyes', 'To hold tools'], correctAnswerIndex: 1 },
          { id: '', questionText: 'What material is created by mixing cement, sand, aggregate, and water?', options: ['Mortar', 'Plaster', 'Concrete', 'Grout'], correctAnswerIndex: 2 },
          { id: '', questionText: 'What is "rebar"?', options: ['A type of brick', 'A wooden support beam', 'A common hand tool', 'Steel bars used to reinforce concrete'], correctAnswerIndex: 3 },
        ]
      }
    ]
  },
  {
    id: 'masonry',
    name: 'Masonry',
    category: 'TVET',
    quizzes: [
      {
        id: 'mason-1',
        title: 'Bricklaying Fundamentals',
        questions: [
          { id: '', questionText: 'What is the primary function of mortar in bricklaying?', options: ['To color the bricks', 'To bond the bricks together and seal gaps', 'To make the wall weaker', 'To absorb water'], correctAnswerIndex: 1 },
          { id: '', questionText: 'Which tool is used to ensure a wall is perfectly vertical?', options: ['Trowel', 'A Spirit Level or Plumb Bob', 'Hammer', 'Tape Measure'], correctAnswerIndex: 1 },
          { id: '', questionText: 'A brick laid with its end exposed on the face of a wall is called a:', options: ['Stretcher', 'Soldier', 'Header', 'Rowlock'], correctAnswerIndex: 2 },
        ]
      }
    ]
  },
  {
    id: 'plumbing',
    name: 'Plumbing',
    category: 'TVET',
    quizzes: [
      {
        id: 'plumb-1',
        title: 'Pipes & Fittings',
        questions: [
          { id: '', questionText: 'Which tool is primarily used to tighten and loosen pipes?', options: ['Hammer', 'Pipe Wrench', 'Screwdriver', 'Pliers'], correctAnswerIndex: 1 },
          { id: '', questionText: 'What does PVC stand for?', options: ['Pressurized Vinyl Compound', 'Polyvinyl Chloride', 'Primary Valve Connector', 'Pipe Vise Clamp'], correctAnswerIndex: 1 },
          { id: '', questionText: 'What is the main purpose of a P-trap under a sink?', options: ['To catch dropped items', 'To increase water pressure', 'To block sewer gases from entering the house', 'To filter the water'], correctAnswerIndex: 2 },
        ]
      }
    ]
  },
   {
    id: 'water-irrigation',
    name: 'Water & Irrigation',
    category: 'TVET',
    quizzes: [
      {
        id: 'water-1',
        title: 'Irrigation Systems',
        questions: [
          { id: '', questionText: 'Which irrigation method is most efficient in terms of water use?', options: ['Flood irrigation', 'Sprinkler irrigation', 'Drip irrigation', 'Furrow irrigation'], correctAnswerIndex: 2 },
          { id: '', questionText: 'What is the main function of a water pump in an irrigation system?', options: ['To filter the water', 'To add pressure and move water from the source to the field', 'To clean the pipes', 'To measure water flow'], correctAnswerIndex: 1 },
          { id: '', questionText: 'What is "salinization" in the context of irrigation?', options: ['The process of removing salt from water', 'The buildup of salts in soil, often due to improper irrigation', 'A type of water filter', 'A method of planting crops'], correctAnswerIndex: 1 },
        ]
      }
    ]
  },
  {
    id: 'electrical-technology',
    name: 'Electrical Technology',
    category: 'TVET',
    quizzes: [
      {
        id: 'elec-1',
        title: 'Basic Circuits',
        questions: [
          { id: '', questionText: 'What does Ohm\'s law state?', options: ['V = I / R', 'I = V * R', 'R = V + I', 'V = I * R'], correctAnswerIndex: 3 },
          { id: '', questionText: 'A material that allows electric current to pass through it easily is called a(n):', options: ['Insulator', 'Semiconductor', 'Conductor', 'Resistor'], correctAnswerIndex: 2 },
          { id: '', questionText: 'What is the function of a fuse or circuit breaker?', options: ['To increase voltage', 'To store electricity', 'To protect a circuit from excessive current', 'To convert AC to DC'], correctAnswerIndex: 2 },
        ]
      }
    ]
  },
   {
    id: 'electronics-telecom',
    name: 'Electronics & Telecommunication',
    category: 'TVET',
    quizzes: [
      {
        id: 'et-1',
        title: 'Basic Components',
        questions: [
          { id: '', questionText: 'What is the function of a resistor in an electronic circuit?', options: ['To store energy', 'To amplify signals', 'To limit or control the flow of current', 'To act as a switch'], correctAnswerIndex: 2 },
          { id: '', questionText: 'Which component stores electrical energy in an electric field?', options: ['Resistor', 'Inductor', 'Diode', 'Capacitor'], correctAnswerIndex: 3 },
          { id: '', questionText: 'What does "LED" stand for?', options: ['Low Energy Display', 'Light Emitting Diode', 'Liquid Electronic Device', 'Laser Emission Detector'], correctAnswerIndex: 1 },
        ]
      }
    ]
  },
  {
    id: 'carpentry',
    name: 'Carpentry',
    category: 'TVET',
    quizzes: [
      {
        id: 'carp-1',
        title: 'Woodworking Tools',
        questions: [
          { id: '', questionText: 'Which saw is best for cutting curves and complex shapes in wood?', options: ['Circular Saw', 'Miter Saw', 'Table Saw', 'Jigsaw'], correctAnswerIndex: 3 },
          { id: '', questionText: 'Which tool is used to check if an angle is exactly 90 degrees?', options: ['Sliding Bevel', 'Protractor', 'Try Square', 'Level'], correctAnswerIndex: 2 },
          { id: '', questionText: 'What is the primary use of a wood plane?', options: ['To drill holes', 'To smooth and flatten wood surfaces', 'To cut wood in half', 'To hammer nails'], correctAnswerIndex: 1 },
        ]
      }
    ]
  },
  {
    id: 'culinary-arts',
    name: 'Culinary Arts',
    category: 'TVET',
    quizzes: [
      {
        id: 'ca-1',
        title: 'Kitchen Basics',
        questions: [
          { id: '', questionText: 'What is the French culinary phrase for "everything in its place," referring to preparation before cooking?', options: ['Bon appétit', 'Mise en place', 'À la carte', 'Hors d\'œuvre'], correctAnswerIndex: 1 },
          { id: '', questionText: 'What is the temperature "danger zone" where bacteria grow most rapidly on food?', options: ['Below 0°C', '0°C to 10°C', '4°C to 60°C', 'Above 100°C'], correctAnswerIndex: 2 },
          { id: '', questionText: 'What is a "roux"?', options: ['A type of salad dressing', 'A mixture of flour and fat used to thicken sauces', 'A vegetable cutting technique', 'A dessert made with eggs'], correctAnswerIndex: 1 },
        ]
      }
    ]
  },
  {
    id: 'food-beverage-service',
    name: 'Food & Beverage Service',
    category: 'TVET',
    quizzes: [
      {
        id: 'fbs-1',
        title: 'Customer Service Basics',
        questions: [
          { id: '', questionText: 'When serving a guest, from which side should you typically serve the food?', options: ['The right side', 'The left side', 'From behind', 'Whichever is easiest'], correctAnswerIndex: 1 },
          { id: '', questionText: 'What is the first thing you should do when a guest sits down at a table?', options: ['Take their order', 'Bring the bill', 'Greet them and offer water or drinks', 'Tell them the specials'], correctAnswerIndex: 2 },
          { id: '', questionText: 'What does "upselling" mean in a restaurant context?', options: ['Selling items that are about to expire', 'Suggesting more expensive or additional items to a customer', 'Charging more than the menu price', 'Giving food away for free'], correctAnswerIndex: 1 },
        ]
      }
    ]
  },
  {
    id: 'tourism',
    name: 'Tourism',
    category: 'TVET',
    quizzes: [
      {
        id: 'tourism-1',
        title: 'Rwandan Tourism',
        questions: [
          { id: '', questionText: 'Which of the "Big Five" animals can be found in Akagera National Park?', options: ['Lion, Leopard, Rhino, Elephant, and Buffalo', 'Gorilla, Chimpanzee, Golden Monkey, Baboon, Colobus Monkey', 'Zebra, Giraffe, Hippo, Crocodile, Wildebeest', 'All of the above'], correctAnswerIndex: 0 },
          { id: '', questionText: 'What is the Canopy Walkway located in Nyungwe National Park famous for?', options: ['It is the longest in the world', 'It offers a unique perspective of the rainforest from above', 'It is made of gold', 'It is underground'], correctAnswerIndex: 1 },
          { id: '', questionText: 'What does the term "Kwita Izina" refer to in Rwanda?', options: ['A traditional dance festival', 'A coffee tasting ceremony', 'The annual baby gorilla naming ceremony', 'A national holiday'], correctAnswerIndex: 2 },
        ]
      }
    ]
  },
  {
    id: 'land-surveying',
    name: 'Land Surveying',
    category: 'TVET',
    quizzes: [
      {
        id: 'ls-1',
        title: 'Surveying Principles',
        questions: [
          { id: '', questionText: 'In surveying, what is a "benchmark"?', options: ['A type of survey equipment', 'The final map produced', 'A point of known elevation used as a reference', 'A property boundary marker'], correctAnswerIndex: 2 },
          { id: 'ls-1-2', questionText: 'Which instrument is used to measure horizontal and vertical angles?', options: ['GPS Rover', 'A Level', 'A measuring tape', 'A Theodolite or Total Station'], correctAnswerIndex: 3 },
          { id: '', questionText: 'On a topographic map, what do contour lines represent?', options: ['Roads and buildings', 'Property boundaries', 'Lines of equal elevation', 'Underground pipes'], correctAnswerIndex: 2 },
        ]
      }
    ]
  },
  {
    id: 'solar-energy',
    name: 'Solar Energy',
    category: 'TVET',
    quizzes: [
      {
        id: 'solar-1',
        title: 'Solar Panel Basics',
        questions: [
          { id: '', questionText: 'What does a photovoltaic (PV) panel do?', options: ['Heats water using the sun', 'Converts sunlight directly into electricity', 'Stores solar energy as heat', 'Blocks sunlight'], correctAnswerIndex: 1 },
          { id: '', questionText: 'In a solar power system, what is the function of an inverter?', options: ['To charge the battery', 'To convert DC electricity from the panels to AC electricity for home use', 'To clean the panels', 'To track the sun'], correctAnswerIndex: 1 },
          { id: '', questionText: 'In the Southern Hemisphere (like Rwanda), which direction should solar panels generally face for maximum exposure?', options: ['South', 'East', 'West', 'North'], correctAnswerIndex: 3 },
        ]
      }
    ]
  },
  {
    id: 'tailoring',
    name: 'Tailoring',
    category: 'TVET',
    quizzes: [
      {
        id: 'tailor-1',
        title: 'Sewing Essentials',
        questions: [
          { id: '', questionText: 'What is the "seam allowance"?', options: ['A discount on fabric', 'The area between the stitching line and the raw edge of the fabric', 'Extra thread for sewing', 'A type of needle'], correctAnswerIndex: 1 },
          { id: '', questionText: 'Which tool is specifically designed for cutting fabric?', options: ['Office scissors', 'A utility knife', 'Fabric shears or a rotary cutter', 'Pliers'], correctAnswerIndex: 2 },
          { id: '', questionText: 'What are "basting" stitches used for?', options: ['Permanent, strong seams', 'Decorative embroidery', 'Temporarily holding fabric pieces together before final sewing', 'Creating buttonholes'], correctAnswerIndex: 2 },
        ]
      }
    ]
  },
   {
    id: 'leathercraft',
    name: 'Leathercraft',
    category: 'TVET',
    quizzes: [
      {
        id: 'leather-1',
        title: 'Leather Basics',
        questions: [
          { id: '', questionText: 'What is the difference between "full-grain" and "top-grain" leather?', options: ['There is no difference', 'Full-grain is the highest quality and has not been sanded; top-grain has been sanded', 'Top-grain is thicker than full-grain', 'Full-grain is artificial leather'], correctAnswerIndex: 1 },
          { id: '', questionText: 'Which tool is used to punch holes in leather for stitching?', options: ['A hammer', 'A stitching awl or pricking iron', 'A screwdriver', 'A burnisher'], correctAnswerIndex: 1 },
          { id: '', questionText: 'What is "burnishing" the edge of leather?', options: ['Painting the edge', 'Cutting the edge straight', 'Smoothing and polishing the edge using friction', 'Setting it on fire'], correctAnswerIndex: 2 },
        ]
      }
    ]
  },
  {
    id: 'hairdressing-beautification',
    name: 'Hairdressing & Beautification',
    category: 'TVET',
    quizzes: [
      {
        id: 'hb-1',
        title: 'Salon Fundamentals',
        questions: [
          { id: '', questionText: 'What is the most important first step before applying any chemical treatment to a client\'s hair?', options: ['Washing the hair', 'Performing a patch test for allergies', 'Asking for payment', 'Cutting the hair'], correctAnswerIndex: 1 },
          { id: '', questionText: 'What is the purpose of using conditioner after shampooing?', options: ['To clean the scalp', 'To restore moisture and smooth the hair cuticle', 'To make the hair curly', 'To remove color'], correctAnswerIndex: 1 },
          { id: '', questionText: 'What is sanitation and sterilization essential in a salon?', options: ['It is not important', 'To make the tools look shiny', 'To prevent the spread of infections and diseases', 'To meet government regulations only'], correctAnswerIndex: 2 },
        ]
      }
    ]
  },
  {
    id: 'painting-decoration',
    name: 'Painting & Decoration',
    category: 'TVET',
    quizzes: [
      {
        id: 'pd-1',
        title: 'Surface Preparation',
        questions: [
          { id: '', questionText: 'What is the most crucial step before painting any surface?', options: ['Choosing the color', 'Buying brushes', 'Properly cleaning and preparing the surface', 'Opening the windows'], correctAnswerIndex: 2 },
          { id: '', questionText: 'What is the purpose of a "primer" coat?', options: ['It is the final color', 'To help the finish paint adhere better and provide a uniform surface', 'To make the wall shiny', 'To thin the paint'], correctAnswerIndex: 1 },
          { id: '', questionText: 'What is "cutting in" when painting a room?', options: ['Making holes in the wall', 'Using a brush to paint along edges, corners, and trim', 'Spilling paint on the floor', 'Mixing two colors together'], correctAnswerIndex: 1 },
        ]
      }
    ]
  },
  {
    id: 'manufacturing-tech',
    name: 'Manufacturing Technology',
    category: 'TVET',
    quizzes: [
      {
        id: 'mt-1',
        title: 'Safety & Machinery',
        questions: [
          { id: '', questionText: 'What does PPE stand for in a manufacturing environment?', options: ['Product Production Equipment', 'Personal Protective Equipment', 'Primary Power Engine', 'Process Planning Executive'], correctAnswerIndex: 1 },
          { id: '', questionText: 'Which type of machine is used to shape metal by removing material?', options: ['A lathe or milling machine', 'A 3D printer', 'A welding machine', 'A casting mold'], correctAnswerIndex: 0 },
          { id: '', questionText: 'What is an "assembly line"?', options: ['A line of people waiting for a product', 'A manufacturing process where parts are added in sequence to create a finished product', 'A quality control checklist', 'A type of conveyor belt'], correctAnswerIndex: 1 },
        ]
      }
    ]
  },
   {
    id: 'heavy-machinery',
    name: 'Heavy Machinery Operation',
    category: 'TVET',
    quizzes: [
      {
        id: 'hm-1',
        title: 'Operator Safety',
        questions: [
          { id: '', questionText: 'What is the first thing an operator should do before starting a piece of heavy machinery for the day?', options: ['Start the engine immediately', 'Perform a pre-operation inspection (walk-around check)', 'Check the radio', 'Adjust the seat'], correctAnswerIndex: 1 },
          { id: '', questionText: 'What does the "swing radius" of an excavator refer to?', options: ['How far it can dig', 'The unseen area at the rear of the machine that can crush objects when it rotates', 'The length of the arm', 'How fast it can turn'], correctAnswerIndex: 1 },
          { id: '', questionText: 'Why is it critical to know the location of underground utilities before digging?', options: ['To avoid them', 'To prevent costly damage and potentially fatal accidents', 'It is not important', 'Both A and B'], correctAnswerIndex: 3 },
        ]
      }
    ]
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    category: 'TVET',
    quizzes: [
      {
        id: 'agri-1',
        title: 'Farming Fundamentals',
        questions: [
          { id: '', questionText: 'What is the main purpose of crop rotation?', options: ['To make the field look different each year', 'To improve soil health and reduce pests', 'To grow only one type of crop', 'To use less water'], correctAnswerIndex: 1 },
          { id: '', questionText: 'In fertilizers, what do the letters N-P-K stand for?', options: ['Nitrate, Phosphate, Karat', 'Nitrogen, Phosphorus, Potassium', 'Natural, Pure, Keen', 'New, Plant, Kinetics'], correctAnswerIndex: 1 },
          { id: '', questionText: 'What is irrigation?', options: ['The process of removing weeds', 'The artificial application of water to land to assist in the production of crops', 'The use of pesticides', 'The process of harvesting crops'], correctAnswerIndex: 1 },
        ]
      }
    ]
  }
];