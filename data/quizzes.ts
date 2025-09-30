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
          { questionText: 'Umusaza n\'inkoni ye bisobanura iki?', options: ['Gusaza neza', 'Kuba umuntu adatandukana n\'icyo akunda', 'Kugira inkoni nziza', 'Gukunda abasaza'], correctAnswerIndex: 1 },
          { questionText: 'Icyo umutima ushaka amata agira...', options: ['umuhondo', 'umweru', 'ubururu', 'igikara'], correctAnswerIndex: 0 },
          { questionText: '"Gukubita agatoki ku kandi" bivuga iki?', options: ['Kurwana', 'Kwishima cyane', 'Kubabara', 'Gukina'], correctAnswerIndex: 1},
          { questionText: 'Iyo umuntu "yariye karungu" aba ameze ate?', options: ['Yishimye', 'Arakaye cyane', 'Arwaye', 'Asonje'], correctAnswerIndex: 1},
          { questionText: 'Iyo bavuga ngo "Amazi si ya yandi" baba bashaka kuvuga iki?', options: ['Amazi yarahindutse', 'Ibintu byahindutse, si nkuko byari bimeze', 'Amazi yaranduye', 'Hari andi mazi mashya'], correctAnswerIndex: 1 },
          { questionText: '"Guca inka amabere" bisobanuye?', options: ['Gukama inka nabi', 'Kwica inka', 'Gukora igikorwa kibi cyane ku muntu wagufashije', 'Kuvuna amabere y\'inka'], correctAnswerIndex: 2 }
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
          { questionText: 'Which of the following is a verb?', options: ['Quickly', 'Beautiful', 'Run', 'House'], correctAnswerIndex: 2 },
          { questionText: 'What is the plural of "mouse"?', options: ['Mouses', 'Mice', 'Mouse', 'Meese'], correctAnswerIndex: 1 },
          { questionText: 'Choose the correct sentence: ', options: ['They is going to the market.', 'They are going to the market.', 'They am going to the market.', 'They was going to the market.'], correctAnswerIndex: 1},
          { questionText: 'An antonym for "brave" is:', options: ['Heroic', 'Fearless', 'Cowardly', 'Strong'], correctAnswerIndex: 2},
          { questionText: 'Identify the adjective in the following sentence: "The quick brown fox jumps over the lazy dog."', options: ['jumps', 'quick', 'over', 'fox'], correctAnswerIndex: 1},
          { questionText: 'Which tense is used in this sentence: "I will be studying for my exam tomorrow."', options: ['Present Continuous', 'Past Perfect', 'Future Continuous', 'Present Perfect'], correctAnswerIndex: 2}
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
          { questionText: 'How do you say "Hello" in French?', options: ['Au revoir', 'Bonjour', 'Merci', 'Oui'], correctAnswerIndex: 1 },
          { questionText: 'What is "Thank you"?', options: ['S\'il vous plaît', 'Excusez-moi', 'Merci', 'De rien'], correctAnswerIndex: 2 },
          { questionText: 'Which of these means "water"?', options: ['Le pain', 'Le lait', 'Le fromage', 'L\'eau'], correctAnswerIndex: 3},
          { questionText: 'How do you say "I am Rwandan" (male)?', options: ['Je suis Rwandais', 'Elle est Rwandaise', 'Il est Anglais', 'Je suis Belge'], correctAnswerIndex: 0},
          { questionText: 'What is the French word for "school"?', options: ['Maison', 'Livre', 'École', 'Rue'], correctAnswerIndex: 2},
          { questionText: 'How would you ask "What time is it?"', options: ['Quel âge as-tu?', 'Où sont les toilettes?', 'Comment ça va?', 'Quelle heure est-il?'], correctAnswerIndex: 3}
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
          { questionText: 'How do you say "Hello" to a group of people?', options: ['Jambo', 'Mambo', 'Hujambo', 'Habari'], correctAnswerIndex: 1 },
          { questionText: 'What is "Asante" in English?', options: ['Sorry', 'Please', 'Thank you', 'Welcome'], correctAnswerIndex: 2 },
          { questionText: 'The word "Mwalimu" means:', options: ['Student', 'Doctor', 'Teacher', 'Driver'], correctAnswerIndex: 2},
          { questionText: 'How do you say "Goodbye"?', options: ['Karibu', 'Kwaheri', 'Ndiyo', 'Hapana'], correctAnswerIndex: 1}
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
          { questionText: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Ribosome', 'Mitochondrion', 'Cell Wall'], correctAnswerIndex: 2 },
          { questionText: 'Which organelle is responsible for protein synthesis?', options: ['Golgi Apparatus', 'Ribosome', 'Lysosome', 'Vacuole'], correctAnswerIndex: 1 },
          { questionText: 'What is the main function of the cell membrane?', options: ['Provide structural support', 'Control what enters and leaves a cell', 'Store genetic information', 'Produce energy'], correctAnswerIndex: 1 },
          { questionText: 'What molecule carries genetic instructions for the development, functioning, growth, and reproduction of all known organisms?', options: ['RNA', 'ATP', 'DNA', 'Protein'], correctAnswerIndex: 2},
          { questionText: 'Which of these is not found in an animal cell?', options: ['Cell Wall', 'Mitochondrion', 'Nucleus', 'Cytoplasm'], correctAnswerIndex: 0 },
          { questionText: 'Photosynthesis primarily occurs in which part of the plant cell?', options: ['Mitochondria', 'Chloroplasts', 'Nucleus', 'Ribosomes'], correctAnswerIndex: 1},
          { questionText: 'What is the process of cell division that results in two identical daughter cells?', options: ['Meiosis', 'Mitosis', 'Fertilization', 'Osmosis'], correctAnswerIndex: 1}
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
          { questionText: 'What is the chemical symbol for Gold?', options: ['Ag', 'Au', 'G', 'Go'], correctAnswerIndex: 1 },
          { questionText: 'Which element is most abundant in the Earth\'s atmosphere?', options: ['Oxygen', 'Hydrogen', 'Nitrogen', 'Carbon'], correctAnswerIndex: 2 },
          { questionText: 'What is the pH of a neutral solution?', options: ['0', '7', '14', '1'], correctAnswerIndex: 1},
          { questionText: 'A chemical reaction that releases heat is called:', options: ['Endothermic', 'Exothermic', 'Catalytic', 'Neutral'], correctAnswerIndex: 1},
          { questionText: 'What is the atomic number of Carbon?', options: ['12', '14', '6', '8'], correctAnswerIndex: 2},
          { questionText: 'H₂O is the chemical formula for:', options: ['Hydrogen Peroxide', 'Salt', 'Sugar', 'Water'], correctAnswerIndex: 3}
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
          { questionText: 'Who formulated the laws of motion?', options: ['Albert Einstein', 'Galileo Galilei', 'Isaac Newton', 'Nikola Tesla'], correctAnswerIndex: 2 },
          { questionText: 'What is the unit of force?', options: ['Watt', 'Joule', 'Newton', 'Pascal'], correctAnswerIndex: 2 },
          { questionText: 'What is the formula for calculating work done?', options: ['Force x Distance', 'Mass x Acceleration', 'Pressure / Area', 'Voltage x Current'], correctAnswerIndex: 0},
          { questionText: 'Gravity is a force of:', options: ['Repulsion', 'Attraction', 'Friction', 'Magnetism'], correctAnswerIndex: 1},
          { questionText: 'What is the unit of electrical resistance?', options: ['Ampere', 'Volt', 'Watt', 'Ohm'], correctAnswerIndex: 3},
          { questionText: 'Kinetic energy is the energy of:', options: ['Position', 'Motion', 'Heat', 'Light'], correctAnswerIndex: 1}
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
          { questionText: 'What is the value of x if x + 5 = 10?', options: ['3', '5', '10', '15'], correctAnswerIndex: 1 },
          { questionText: 'What is 7 multiplied by 8?', options: ['49', '54', '56', '63'], correctAnswerIndex: 2 },
          { questionText: 'What is the area of a circle with a radius of 5 units?', options: ['10π', '25π', '5π', '100π'], correctAnswerIndex: 1},
          { questionText: 'How many degrees are in a right angle?', options: ['45', '90', '180', '360'], correctAnswerIndex: 1},
          { questionText: 'What is the value of 2 to the power of 5?', options: ['10', '25', '32', '16'], correctAnswerIndex: 2},
          { questionText: 'What is the next prime number after 11?', options: ['12', '13', '14', '15'], correctAnswerIndex: 1}
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
          { questionText: 'What is a business plan?', options: ['A financial statement', 'A marketing brochure', 'A document outlining business goals and how to achieve them', 'A list of employees'], correctAnswerIndex: 2 },
          { questionText: 'What does SWOT analysis stand for?', options: ['Sales, Weaknesses, Opportunities, Threats', 'Strengths, Weaknesses, Opportunities, Threats', 'Strengths, Work, Operations, Tasks', 'Sales, Work, Opportunities, Tasks'], correctAnswerIndex: 1},
          { questionText: 'The money used to start a business is called:', options: ['Profit', 'Revenue', 'Capital', 'Debt'], correctAnswerIndex: 2},
          { questionText: 'Who is a person who organizes and operates a business, taking on greater than normal financial risks?', options: ['An Employee', 'A Manager', 'A Shareholder', 'An Entrepreneur'], correctAnswerIndex: 3}
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
          { questionText: 'What is the capital of Rwanda?', options: ['Kigali', 'Butare', 'Gisenyi', 'Kibuye'], correctAnswerIndex: 0 },
          { questionText: 'What is the longest river in the world?', options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'], correctAnswerIndex: 1 },
          { questionText: 'Lake Kivu is located between Rwanda and which other country?', options: ['Uganda', 'Tanzania', 'Burundi', 'DR Congo'], correctAnswerIndex: 3},
          { questionText: 'Which is the largest continent by land area?', options: ['Africa', 'Europe', 'Asia', 'North America'], correctAnswerIndex: 2}
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
          { questionText: 'What is the name of the writing system used by Ancient Egyptians?', options: ['Cuneiform', 'Hieroglyphics', 'Sanskrit', 'Latin'], correctAnswerIndex: 1 },
          { questionText: 'The Great Pyramid of Giza was built for which pharaoh?', options: ['Tutankhamun', 'Ramesses II', 'Cleopatra', 'Khufu'], correctAnswerIndex: 3 },
          { questionText: 'In what year did Rwanda gain its independence?', options: ['1959', '1962', '1994', '2000'], correctAnswerIndex: 1},
          { questionText: 'World War I began in which year?', options: ['1905', '1914', '1920', '1939'], correctAnswerIndex: 1}
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
          { questionText: 'What do the colors of the Rwandan flag symbolize?', options: ['Hope, Peace, Economic development', 'Unity, Work, Patriotism', 'Sun, Hills, Water', 'People, Power, Progress'], correctAnswerIndex: 0},
          { questionText: 'What is the name of the Rwandan Parliament?', options: ['The Senate', 'The National Assembly', 'The Chamber of Deputies & The Senate', 'The Congress'], correctAnswerIndex: 2},
          { questionText: 'What is the term length for the President of Rwanda?', options: ['4 years', '5 years', '6 years', '7 years'], correctAnswerIndex: 1},
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
          { questionText: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyperlink and Text Markup Language', 'Home Tool Markup Language'], correctAnswerIndex: 0 },
          { questionText: 'Which CSS property is used to change the text color of an element?', options: ['font-color', 'text-color', 'color', 'font-style'], correctAnswerIndex: 2 },
          { questionText: 'What is the correct HTML element for the largest heading?', options: ['<h6>', '<heading>', '<h1>', '<head>'], correctAnswerIndex: 2 },
          { questionText: 'How do you select an element with id "demo" in CSS?', options: ['.demo', 'demo', '#demo', '*demo'], correctAnswerIndex: 2 },
          { questionText: 'Which keyword is used to declare a constant variable in JavaScript?', options: ['var', 'let', 'const', 'define'], correctAnswerIndex: 2 },
          { questionText: 'What is the purpose of a `<div>` tag?', options: ['To create a hyperlink', 'To define a division or a section', 'To display an image', 'To make text bold'], correctAnswerIndex: 1 },
          { questionText: 'In JavaScript, how do you call a function named "myFunction"?', options: ['call function myFunction()', 'myFunction()', 'call myFunction()', 'execute myFunction()'], correctAnswerIndex: 1 },
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
          { questionText: 'What does CPU stand for?', options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Process Unit', 'Central Processor Unit'], correctAnswerIndex: 0 },
          { questionText: 'What is RAM an acronym for?', options: ['Read-Only Memory', 'Random-Access Memory', 'Real-time Access Module', 'Remote-Access Memory'], correctAnswerIndex: 1 },
          { questionText: 'Which component is considered the "brain" of the computer?', options: ['RAM', 'Hard Drive', 'Motherboard', 'CPU'], correctAnswerIndex: 3 },
          { questionText: 'What is the difference between RAM and a Hard Drive (HDD/SSD)?', options: ['RAM is for long-term storage, Hard Drive is for short-term', 'RAM is volatile (temporary), Hard Drive is non-volatile (permanent)', 'There is no difference', 'RAM is much slower than a Hard Drive'], correctAnswerIndex: 1 },
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
          { questionText: 'How many layers are in the OSI model?', options: ['5', '6', '7', '8'], correctAnswerIndex: 2 },
          { questionText: 'Which layer of the OSI model is responsible for routing?', options: ['Physical', 'Data Link', 'Network', 'Transport'], correctAnswerIndex: 2 },
          { questionText: 'What is the function of a DNS server?', options: ['To assign IP addresses', 'To translate domain names to IP addresses', 'To block network traffic', 'To store files'], correctAnswerIndex: 1},
          { questionText: 'Which of the following is a private IP address?', options: ['127.0.0.1', '8.8.8.8', '192.168.1.1', '208.67.222.222'], correctAnswerIndex: 2},
          { questionText: 'What is a firewall used for?', options: ['To increase internet speed', 'To monitor and control network traffic', 'To store passwords', 'To connect to a printer'], correctAnswerIndex: 1},
          { questionText: 'What does "LAN" stand for?', options: ['Large Area Network', 'Local Access Network', 'Local Area Network', 'Long Access Network'], correctAnswerIndex: 2},
        ]
      }
    ]
  },
  {
    id: 'multimedia',
    name: 'Multimedia Production',
    category: 'TVET',
    quizzes: [
      {
        id: 'mm-1',
        title: 'Graphics & Video',
        questions: [
          { questionText: 'What does RGB stand for?', options: ['Red Green Blue', 'Red Grey Black', 'Royal Gold Brown', 'Rapid Graphic Builder'], correctAnswerIndex: 0 },
          { questionText: 'Which file format is best for a logo with a transparent background?', options: ['.jpg', '.gif', '.png', '.bmp'], correctAnswerIndex: 2},
          { questionText: 'In video editing, what does "FPS" stand for?', options: ['Frames Per Second', 'File Processing Speed', 'Final Production Stage', 'Focus Point Sharpness'], correctAnswerIndex: 0},
          { questionText: 'Which software is commonly used for vector graphics?', options: ['Adobe Photoshop', 'Adobe Illustrator', 'Microsoft Word', 'Adobe Premiere Pro'], correctAnswerIndex: 1},
          { questionText: 'What is resolution in the context of an image?', options: ['The physical size of the image', 'The number of pixels in an image', 'The color depth of the image', 'The file size of the image'], correctAnswerIndex: 1},
        ]
      }
    ]
  },
  {
    id: 'graphic-arts',
    name: 'Graphic & Fine Arts',
    category: 'TVET',
    quizzes: [
      {
        id: 'gfa-1',
        title: 'Design Principles',
        questions: [
          { questionText: 'Which of these is a primary color in the CMYK model?', options: ['Red', 'Green', 'Blue', 'Yellow'], correctAnswerIndex: 3 },
          { questionText: 'What is "kerning" in typography?', options: ['The space between lines of text', 'The space between all letters', 'The adjustment of space between specific pairs of letters', 'The height of the letters'], correctAnswerIndex: 2},
          { questionText: 'What does the design principle of "contrast" refer to?', options: ['Making all elements the same', 'Arranging opposite elements to create visual interest', 'Repeating elements throughout a design', 'Aligning elements on a page'], correctAnswerIndex: 1}
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
        title: 'Tools and Techniques',
        questions: [
          { questionText: 'Which of these is a hardwood?', options: ['Pine', 'Fir', 'Oak', 'Spruce'], correctAnswerIndex: 2 },
          { questionText: 'What is the process of drying timber called?', options: ['Seasoning', 'Curing', 'Dehydrating', 'Baking'], correctAnswerIndex: 0 },
          { questionText: 'Which joint is known for its strength and is often used in drawers?', options: ['Butt joint', 'Dovetail joint', 'Mortise and tenon', 'Lap joint'], correctAnswerIndex: 1},
          { questionText: 'What is the main purpose of sandpaper?', options: ['To color the wood', 'To smooth the surface of the wood', 'To cut the wood', 'To join wood pieces'], correctAnswerIndex: 1},
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
        title: 'Measurements and Safety',
        questions: [
          { questionText: 'What is the most important safety rule in carpentry?', options: ['Always wear safety glasses', 'Work as fast as possible', 'Use dull tools', 'Never measure twice'], correctAnswerIndex: 0},
          { questionText: 'A "level" is a tool used to check if a surface is...', options: ['Perfectly smooth', 'Horizontal or vertical', 'The correct length', 'The correct color'], correctAnswerIndex: 1},
          { questionText: 'What does "measure twice, cut once" mean?', options: ['Make two cuts for every measurement', 'Use two different tape measures', 'Double-check your measurements before cutting to avoid mistakes', 'It\'s a brand of saw'], correctAnswerIndex: 2},
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
        title: 'Patient Care Fundamentals',
        questions: [
          { questionText: 'What is the first step in assessing an emergency situation?', options: ['Call for help', 'Check for danger', 'Check for response', 'Administer CPR'], correctAnswerIndex: 1 },
          { questionText: 'What is a normal range for an adult\'s heart rate?', options: ['40-60 bpm', '60-100 bpm', '100-140 bpm', '140-180 bpm'], correctAnswerIndex: 1},
          { questionText: 'The acronym "SOAP" in nursing notes stands for:', options: ['Subjective, Objective, Assessment, Plan', 'Symptoms, Observations, Analysis, Prescription', 'Situation, Onset, Action, Progress', 'Support, Oxygen, Assistance, Pills'], correctAnswerIndex: 0},
          { questionText: 'What is the medical term for high blood pressure?', options: ['Hypotension', 'Hypertension', 'Anemia', 'Hyperglycemia'], correctAnswerIndex: 1},
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
        title: 'Core Principles',
        questions: [
          { questionText: 'What does "debit" mean in accounting?', options: ['An increase in assets or a decrease in liabilities', 'A decrease in assets or an increase in liabilities', 'An increase in equity', 'A decrease in revenue'], correctAnswerIndex: 0 },
          { questionText: 'Which financial statement shows a company\'s financial position at a specific point in time?', options: ['Income Statement', 'Cash Flow Statement', 'Balance Sheet', 'Statement of Retained Earnings'], correctAnswerIndex: 2},
          { questionText: 'What does "FIFO" stand for in inventory management?', options: ['First-In, First-Out', 'Finally-In, Finally-Out', 'Finance-In, Finance-Out', 'Full-Inventory, Full-Order'], correctAnswerIndex: 0},
          { questionText: 'The accounting equation is:', options: ['Assets = Liabilities - Equity', 'Assets = Liabilities + Equity', 'Equity = Assets + Liabilities', 'Liabilities = Equity - Assets'], correctAnswerIndex: 1},
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
        title: 'Materials & Foundations',
        questions: [
          { questionText: 'What is the primary binding agent in modern concrete?', options: ['Lime', 'Portland Cement', 'Gypsum', 'Clay'], correctAnswerIndex: 1 },
          { questionText: 'What is the purpose of a foundation in a building?', options: ['To provide decoration', 'To transfer the building\'s load to the earth', 'To keep the building warm', 'To store water'], correctAnswerIndex: 1},
          { questionText: 'What are rebars used for in concrete?', options: ['To add color', 'To provide tensile strength', 'To make it lighter', 'To help it dry faster'], correctAnswerIndex: 1},
          { questionText: 'Which tool is used to check if a wall is perfectly vertical?', options: ['A level', 'A tape measure', 'A hammer', 'A trowel'], correctAnswerIndex: 0}
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
        title: 'Brickwork & Mortar',
        questions: [
          { questionText: 'What is the primary function of mortar in bricklaying?', options: ['To color the bricks', 'To bond the bricks together and seal gaps', 'To make the wall weaker', 'To absorb water'], correctAnswerIndex: 1},
          { questionText: 'A "header" in brickwork is a brick laid...', options: ['Lengthwise along the wall', 'Widthwise across the wall', 'Vertically', 'Diagonally'], correctAnswerIndex: 1},
          { questionText: 'What is the tool used to apply mortar to bricks?', options: ['A hammer', 'A saw', 'A trowel', 'A chisel'], correctAnswerIndex: 2},
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
        title: 'Engine & Brakes',
        questions: [
          { questionText: 'What are the four strokes of an internal combustion engine?', options: ['Intake, Compression, Power, Exhaust', 'Start, Stop, Reverse, Neutral', 'Fuel, Air, Spark, Piston', 'Oil, Water, Gas, Heat'], correctAnswerIndex: 0 },
          { questionText: 'What is the primary function of a car\'s braking system?', options: ['To make the car go faster', 'To convert kinetic energy into heat', 'To cool the engine', 'To charge the battery'], correctAnswerIndex: 1},
          { questionText: 'What does the alternator do?', options: ['Starts the car', 'Charges the battery and powers the electrical system', 'Cools the engine', 'Filters the fuel'], correctAnswerIndex: 1},
          { questionText: 'What is the purpose of engine oil?', options: ['To clean the fuel', 'To cool the car interior', 'To lubricate moving parts and reduce friction', 'To power the radio'], correctAnswerIndex: 2},
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
        title: 'Basics & Maintenance',
        questions: [
          { questionText: 'What is the most common type of engine in a motorcycle?', options: ['Diesel engine', 'Electric motor', 'Four-stroke gasoline engine', 'Steam engine'], correctAnswerIndex: 2 },
          { questionText: 'What is the final drive system that uses a metal chain and sprockets?', options: ['Belt drive', 'Shaft drive', 'Chain drive', 'Direct drive'], correctAnswerIndex: 2},
          { questionText: 'Why is it important to regularly check tire pressure on a motorcycle?', options: ['For proper handling, safety, and tire longevity', 'It is not important', 'Only for aesthetic reasons', 'To make the motorcycle heavier'], correctAnswerIndex: 0},
        ]
      }
    ]
  },
  {
    id: 'domestic-electricity',
    name: 'Domestic Electricity',
    category: 'TVET',
    quizzes: [
      {
        id: 'elec-1',
        title: 'Ohm\'s Law & Safety',
        questions: [
          { questionText: 'What does Ohm\'s law state?', options: ['V = I / R', 'I = V * R', 'R = V + I', 'V = I * R'], correctAnswerIndex: 3 },
          { questionText: 'Which material is a good electrical insulator?', options: ['Copper', 'Aluminum', 'Rubber', 'Gold'], correctAnswerIndex: 2},
          { questionText: 'What is the purpose of a fuse or circuit breaker?', options: ['To increase voltage', 'To protect a circuit from excessive current', 'To store electricity', 'To decrease resistance'], correctAnswerIndex: 1},
          { questionText: 'In a standard Rwandan wall socket, what is the voltage?', options: ['110V', '230V', '12V', '500V'], correctAnswerIndex: 1},
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
        title: 'PV Systems',
        questions: [
          { questionText: 'What does "PV" stand for in solar energy?', options: ['Photo-Voltage', 'Positive Voltage', 'Photovoltaic', 'Primary Voltage'], correctAnswerIndex: 2},
          { questionText: 'Which component in a solar power system converts DC electricity to AC electricity?', options: ['Solar Panel', 'Charge Controller', 'Battery', 'Inverter'], correctAnswerIndex: 3},
          { questionText: 'What is the main advantage of solar energy?', options: ['It works best at night', 'It is a renewable energy source', 'It is very expensive', 'It is not reliable'], correctAnswerIndex: 1},
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
        title: 'Safety & Processes',
        questions: [
          { questionText: 'What is the most important piece of personal protective equipment (PPE) for a welder?', options: ['Gloves', 'Steel-toed boots', 'Welding Helmet', 'Hard hat'], correctAnswerIndex: 2 },
          { questionText: 'What does "SMAW" stand for in welding?', options: ['Shielded Metal Arc Welding', 'Strong Metal Alloy Welding', 'Standard Manual Arc Welding', 'Simple Machine Arc Welding'], correctAnswerIndex: 0},
          { questionText: 'What is the primary purpose of flux in welding?', options: ['To cool the metal', 'To create a protective gas shield and remove impurities', 'To make the weld look shiny', 'To increase the electrical current'], correctAnswerIndex: 1},
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
        title: 'Tools & Safety',
        questions: [
          { questionText: 'Which tool is used to tighten and loosen pipes?', options: ['Hammer', 'Pipe Wrench', 'Screwdriver', 'Pliers'], correctAnswerIndex: 1 },
          { questionText: 'What is a "P-trap" used for in plumbing?', options: ['To increase water pressure', 'To filter water', 'To prevent sewer gases from entering the house', 'To connect hot and cold water lines'], correctAnswerIndex: 2},
          { questionText: 'What is the main water pipe entering a building called?', options: ['The drain line', 'The supply line', 'The vent stack', 'The P-trap'], correctAnswerIndex: 1},
        ]
      }
    ]
  },
  {
    id: 'hospitality',
    name: 'Hospitality Management',
    category: 'TVET',
    quizzes: [
      {
        id: 'hosp-1',
        title: 'Customer Service Excellence',
        questions: [
          { questionText: 'What is a key principle of good customer service in hospitality?', options: ['Ignoring complaints', 'Anticipating guest needs', 'Charging extra fees', 'Being unavailable'], correctAnswerIndex: 1 },
          { questionText: 'What does the term "check-in" refer to in a hotel?', options: ['Paying the bill', 'Leaving the hotel', 'The guest arrival and registration process', 'Ordering room service'], correctAnswerIndex: 2},
        ]
      }
    ]
  },
  {
    id: 'housekeeping',
    name: 'Housekeeping',
    category: 'TVET',
    quizzes: [
      {
        id: 'hk-1',
        title: 'Cleaning & Safety',
        questions: [
          { questionText: 'What does PPE stand for in the context of housekeeping?', options: ['Professional Polishing Equipment', 'Personal Protective Equipment', 'Public Place Entry', 'Premium Package Extra'], correctAnswerIndex: 1},
          { questionText: 'When cleaning a guest room, what should be done first?', options: ['Clean the toilet', 'Empty the trash bins', 'Make the bed', 'Dust the furniture'], correctAnswerIndex: 1},
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
        id: 'tour-1',
        title: 'Rwandan Tourism',
        questions: [
          { questionText: 'Which national park in Rwanda is famous for mountain gorillas?', options: ['Akagera National Park', 'Nyungwe Forest National Park', 'Volcanoes National Park', 'Gishwati Mukura National Park'], correctAnswerIndex: 2 },
          { questionText: 'The "Canopy Walk" is a famous attraction in which Rwandan park?', options: ['Akagera', 'Volcanoes', 'Gishwati Mukura', 'Nyungwe'], correctAnswerIndex: 3},
          { questionText: 'What are the "Big Five" animals that tourists often want to see in Akagera?', options: ['Gorilla, Chimp, Monkey, Baboon, Lemur', 'Lion, Leopard, Rhinoceros, Elephant, and Cape Buffalo', 'Zebra, Giraffe, Hippo, Crocodile, Antelope', 'Eagle, Ostrich, Flamingo, Pelican, Stork'], correctAnswerIndex: 1},
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
          { questionText: 'What is the French term for finely chopped vegetables (onion, celery, carrot) used as a base for stocks and sauces?', options: ['Mirepoix', 'Roux', 'Consommé', 'Julienne'], correctAnswerIndex: 0 },
          { questionText: 'What is the temperature danger zone where bacteria grow rapidly?', options: ['0°C - 20°C', '5°C - 63°C', '70°C - 100°C', 'Below 0°C'], correctAnswerIndex: 1},
          { questionText: 'What does it mean to "blanch" a vegetable?', options: ['To cook it slowly in fat', 'To grill it over high heat', 'To scald it in boiling water briefly, then plunge into cold water', 'To chop it into very small pieces'], correctAnswerIndex: 2},
        ]
      }
    ]
  },
  {
    id: 'tailoring',
    name: 'Tailoring & Fashion',
    category: 'TVET',
    quizzes: [
      {
        id: 'tailor-1',
        title: 'Fabrics & Stitches',
        questions: [
          { questionText: 'Which fabric is made from the flax plant?', options: ['Cotton', 'Silk', 'Linen', 'Wool'], correctAnswerIndex: 2 },
          { questionText: 'What is the purpose of a "basting" stitch?', options: ['To create a strong, permanent seam', 'To temporarily hold fabric pieces together', 'To create a decorative edge', 'To repair a hole'], correctAnswerIndex: 1},
          { questionText: 'What is a "pattern" in sewing?', options: ['The color of the fabric', 'A type of needle', 'A template used to cut fabric pieces', 'A decorative stitch'], correctAnswerIndex: 2},
        ]
      }
    ]
  },
  {
    id: 'hairdressing',
    name: 'Hairdressing & Beauty',
    category: 'TVET',
    quizzes: [
      {
        id: 'h-b-1',
        title: 'Salon Safety & Tools',
        questions: [
          { questionText: 'Why is it important to sanitize salon tools between clients?', options: ['To make them shiny', 'To prevent the spread of bacteria and infections', 'The law requires it but it\'s not important', 'To make them last longer'], correctAnswerIndex: 1 },
          { questionText: 'A patch test is required before which chemical service?', options: ['Haircut', 'Hair coloring', 'Shampooing', 'Blow-drying'], correctAnswerIndex: 1},
          { questionText: 'What is the purpose of conditioner?', options: ['To clean the hair', 'To moisturize and detangle the hair', 'To color the hair', 'To make the hair curly'], correctAnswerIndex: 1},
        ]
      }
    ]
  },
  {
    id: 'crop-production',
    name: 'Crop Production',
    category: 'TVET',
    quizzes: [
      {
        id: 'crop-1',
        title: 'Soil & Plant Nutrients',
        questions: [
          { questionText: 'Which of these is a primary macronutrient for plants?', options: ['Carbon', 'Oxygen', 'Nitrogen', 'Iron'], correctAnswerIndex: 2 },
          { questionText: 'What is crop rotation?', options: ['Planting the same crop every year', 'Growing different crops in succession on the same land', 'Watering crops on a schedule', 'Harvesting crops in a circle'], correctAnswerIndex: 1},
          { questionText: 'What is photosynthesis?', options: ['The process plants use to convert light energy into chemical energy', 'The process of a plant absorbing water', 'The process of a plant growing taller', 'The process of pollination'], correctAnswerIndex: 0}
        ]
      }
    ]
  },
  {
    id: 'animal-farming',
    name: 'Animal Farming',
    category: 'TVET',
    quizzes: [
      {
        id: 'animal-1',
        title: 'Ruminant Farming',
        questions: [
          { questionText: 'Which of these animals is a ruminant?', options: ['Chicken', 'Pig', 'Cow', 'Fish'], correctAnswerIndex: 2 },
          { questionText: 'What is pasteurization of milk?', options: ['The process of adding vitamins', 'The process of heating milk to kill harmful bacteria', 'The process of cooling milk quickly', 'The process of making cheese'], correctAnswerIndex: 1}
        ]
      }
    ]
  },
  {
    id: 'leather-crafting',
    name: 'Leather Crafting',
    category: 'TVET',
    quizzes: [
      {
        id: 'lc-1',
        title: 'Leather Basics',
        questions: [
          { questionText: 'What is the process of converting animal hides into leather called?', options: ['Stitching', 'Tanning', 'Dyeing', 'Embossing'], correctAnswerIndex: 1},
          { questionText: 'Which tool is used to cut thick leather?', options: ['Scissors', 'Rotary cutter', 'Head knife', 'All of the above'], correctAnswerIndex: 3},
          { questionText: 'What is the difference between "full-grain" and "top-grain" leather?', options: ['There is no difference', 'Full-grain has not been sanded and shows natural imperfections', 'Top-grain is thicker than full-grain', 'Full-grain is always black'], correctAnswerIndex: 1}
        ]
      }
    ]
  },
  {
    id: 'mining-technology',
    name: 'Mining Technology',
    category: 'TVET',
    quizzes: [
      {
        id: 'mine-1',
        title: 'Safety and Minerals',
        questions: [
          { questionText: 'What is one of the most important safety concerns in underground mining?', options: ['Loud noises', 'Proper ventilation to prevent gas buildup', 'Bright lights', 'Clean uniforms'], correctAnswerIndex: 1},
          { questionText: 'Which mineral, commonly found in Rwanda, is essential for making electronic components like capacitors?', options: ['Gold', 'Diamond', 'Coltan', 'Iron Ore'], correctAnswerIndex: 2},
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
        title: 'Equipment and Principles',
        questions: [
          { questionText: 'What is a "total station" used for in surveying?', options: ['As a landmark', 'To measure angles and distances electronically', 'To dig holes', 'To communicate with satellites'], correctAnswerIndex: 1},
          { questionText: 'What does GIS stand for?', options: ['Global Information System', 'Geographic Information System', 'General Investigation Service', 'Global Internet Service'], correctAnswerIndex: 1},
        ]
      }
    ]
  },
];
