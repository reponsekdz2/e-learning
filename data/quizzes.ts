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
          { questionText: 'Iyo umuntu "yariye karungu" aba ameze ate?', options: ['Yishimye', 'Arakaye cyane', 'Arwaye', 'Asonje'], correctAnswerIndex: 1}
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
          { questionText: 'An antonym for "brave" is:', options: ['Heroic', 'Fearless', 'Cowardly', 'Strong'], correctAnswerIndex: 2}
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
          { questionText: 'How do you say "I am Rwandan" (male)?', options: ['Je suis Rwandais', 'Elle est Rwandaise', 'Il est Anglais', 'Je suis Belge'], correctAnswerIndex: 0}
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
          { questionText: 'A chemical reaction that releases heat is called:', options: ['Endothermic', 'Exothermic', 'Catalytic', 'Neutral'], correctAnswerIndex: 1}
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
          { questionText: 'Gravity is a force of:', options: ['Repulsion', 'Attraction', 'Friction', 'Magnetism'], correctAnswerIndex: 1}
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
          { questionText: 'How many degrees are in a right angle?', options: ['45', '90', '180', '360'], correctAnswerIndex: 1}
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
          { questionText: 'The money used to start a business is called:', options: ['Profit', 'Revenue', 'Capital', 'Debt'], correctAnswerIndex: 2}
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
          { questionText: 'Lake Kivu is located between Rwanda and which other country?', options: ['Uganda', 'Tanzania', 'Burundi', 'DR Congo'], correctAnswerIndex: 3}
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
          { questionText: 'In what year did Rwanda gain its independence?', options: ['1959', '1962', '1994', '2000'], correctAnswerIndex: 1}
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
          { questionText: 'Which of the following is a private IP address?', options: ['127.0.0.1', '8.8.8.8', '192.168.1.1', '208.67.222.222'], correctAnswerIndex: 2}
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
        title: 'Graphics & Video',
        questions: [
          { questionText: 'What does RGB stand for?', options: ['Red Green Blue', 'Red Grey Black', 'Royal Gold Brown', 'Rapid Graphic Builder'], correctAnswerIndex: 0 },
          { questionText: 'Which file format is best for a logo with a transparent background?', options: ['.jpg', '.gif', '.png', '.bmp'], correctAnswerIndex: 2},
          { questionText: 'In video editing, what does "FPS" stand for?', options: ['Frames Per Second', 'File Processing Speed', 'Final Production Stage', 'Focus Point Sharpness'], correctAnswerIndex: 0}
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
          { questionText: 'Which joint is known for its strength and is often used in drawers?', options: ['Butt joint', 'Dovetail joint', 'Mortise and tenon', 'Lap joint'], correctAnswerIndex: 1}
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
          { questionText: 'The acronym "SOAP" in nursing notes stands for:', options: ['Subjective, Objective, Assessment, Plan', 'Symptoms, Observations, Analysis, Prescription', 'Situation, Onset, Action, Progress', 'Support, Oxygen, Assistance, Pills'], correctAnswerIndex: 0}
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
          { questionText: 'What does "FIFO" stand for in inventory management?', options: ['First-In, First-Out', 'Finally-In, Finally-Out', 'Finance-In, Finance-Out', 'Full-Inventory, Full-Order'], correctAnswerIndex: 0}
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
        ]
      }
    ]
  },
  {
    id: 'electrical-installation',
    name: 'Electrical Installation',
    category: 'TVET',
    quizzes: [
      {
        id: 'elec-1',
        title: 'Ohm\'s Law & Safety',
        questions: [
          { questionText: 'What does Ohm\'s law state?', options: ['V = I / R', 'I = V * R', 'R = V + I', 'V = I * R'], correctAnswerIndex: 3 },
          { questionText: 'Which material is a good electrical insulator?', options: ['Copper', 'Aluminum', 'Rubber', 'Gold'], correctAnswerIndex: 2},
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
        title: 'Fabrics & Stitches',
        questions: [
          { questionText: 'Which fabric is made from the flax plant?', options: ['Cotton', 'Silk', 'Linen', 'Wool'], correctAnswerIndex: 2 },
          { questionText: 'What is the purpose of a "basting" stitch?', options: ['To create a strong, permanent seam', 'To temporarily hold fabric pieces together', 'To create a decorative edge', 'To repair a hole'], correctAnswerIndex: 1},
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
        title: 'Salon Safety',
        questions: [
          { questionText: 'Why is it important to sanitize salon tools between clients?', options: ['To make them shiny', 'To prevent the spread of bacteria and infections', 'The law requires it but it\'s not important', 'To make them last longer'], correctAnswerIndex: 1 },
          { questionText: 'A patch test is required before which chemical service?', options: ['Haircut', 'Hair coloring', 'Shampooing', 'Blow-drying'], correctAnswerIndex: 1},
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
        ]
      }
    ]
  },
];