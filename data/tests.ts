import { Test } from '../types';

export const tests: Test[] = [
    {
        id: 'test-sd-1',
        title: 'Final Exam: Web Fundamentals',
        subjectId: 'software-development',
        questions: [
            { id: '', questionText: 'Which HTML tag is used to define an internal style sheet?', options: ['<script>', '<css>', '<style>', '<head>'], correctAnswerIndex: 2 },
            { id: '', questionText: 'How do you write "Hello World" in an alert box in JavaScript?', options: ['alertBox("Hello World");', 'msg("Hello World");', 'alert("Hello World");', 'msgBox("Hello World");'], correctAnswerIndex: 2 },
            { id: '', questionText: 'Which CSS property controls the spacing between elements?', options: ['padding', 'margin', 'border', 'space'], correctAnswerIndex: 1},
            { id: '', questionText: 'What is the correct syntax for referring to an external script called "app.js"?', options: ['<script href="app.js">', '<script name="app.js">', '<script src="app.js">', '<script file="app.js">'], correctAnswerIndex: 2},
            { id: '', questionText: 'How do you declare a JavaScript variable?', options: ['variable carName;', 'v carName;', 'var carName;', 'string carName;'], correctAnswerIndex: 2},
            { id: '', questionText: 'Which operator is used to assign a value to a variable?', options: ['*', '-', '=', 'x'], correctAnswerIndex: 2},
            { id: '', questionText: 'What will the following code return: Boolean(10 > 9)?', options: ['false', 'true', 'NaN', 'undefined'], correctAnswerIndex: 1},
            { id: '', questionText: 'In CSS, what is the correct syntax for making all the <p> elements bold?', options: ['p {text-size:bold;}', 'p {font-weight:bold;}', '<p style="font-size:bold;">', 'p {style:bold;}'], correctAnswerIndex: 1},
        ]
    },
    {
        id: 'test-ict-1',
        title: 'ICT Essentials Exam',
        subjectId: 'ict',
        questions: [
            { id: '', questionText: 'Which of these components provides short-term, volatile memory for a computer?', options: ['CPU', 'SSD', 'HDD', 'RAM'], correctAnswerIndex: 3},
            { id: '', questionText: 'What is the primary function of an Operating System?', options: ['To browse the internet', 'To create documents', 'To manage computer hardware and software resources', 'To protect against viruses'], correctAnswerIndex: 2},
            { id: '', questionText: 'What does "URL" stand for?', options: ['Universal Resource Link', 'Uniform Resource Locator', 'Universal Reference Locator', 'Uniform Resource Link'], correctAnswerIndex: 1},
            { id: '', questionText: 'Which of the following is a type of malware?', options: ['Firewall', 'Router', 'Ransomware', 'Browser'], correctAnswerIndex: 2},
            { id: '', questionText: 'The main circuit board in a computer that connects all components is called the:', options: ['CPU', 'RAM chip', 'Motherboard', 'Graphics Card'], correctAnswerIndex: 2},
        ]
    },
    {
        id: 'test-net-1',
        title: 'Certification Test: Networking Basics',
        subjectId: 'networking',
        questions: [
            { id: '', questionText: 'Which device connects multiple computers together in a local area network (LAN)?', options: ['Modem', 'Router', 'Switch', 'Firewall'], correctAnswerIndex: 2},
            { id: '', questionText: 'What is the purpose of an IP address?', options: ['To identify a device on a network', 'To secure the network', 'To provide power to a device', 'To store data'], correctAnswerIndex: 0},
            { id: '', questionText: 'Which protocol is used for sending emails?', options: ['HTTP', 'FTP', 'SMTP', 'POP3'], correctAnswerIndex: 2},
            { id: '', questionText: 'What does "LAN" stand for?', options: ['Long Area Network', 'Local Area Network', 'Logical Area Network', 'Large Area Network'], correctAnswerIndex: 1},
            { id: '', questionText: 'The physical address of a network card is called:', options: ['IP Address', 'MAC Address', 'Subnet Mask', 'Gateway Address'], correctAnswerIndex: 1},
        ]
    },
     {
        id: 'test-auto-1',
        title: 'Mechanic\'s Exam: Engine Systems',
        subjectId: 'automobile-technology',
        questions: [
            { id: '', questionText: 'What is the function of the radiator in a car?', options: ['To heat the engine', 'To cool the engine', 'To filter the oil', 'To charge the battery'], correctAnswerIndex: 1},
            { id: '', questionText: 'Which part of the engine ignites the fuel-air mixture?', options: ['Piston', 'Crankshaft', 'Spark Plug', 'Alternator'], correctAnswerIndex: 2},
            { id: '', questionText: 'What does "ABS" stand for in cars?', options: ['Anti-lock Braking System', 'Automatic Battery Service', 'Advanced Boost System', 'All-around Bumper Safety'], correctAnswerIndex: 0},
            { id: '', questionText: 'What fluid is used in a hydraulic brake system?', options: ['Water', 'Engine oil', 'Brake fluid', 'Antifreeze'], correctAnswerIndex: 2},
            { id: '', questionText: 'A car\'s battery provides what type of current?', options: ['Alternating Current (AC)', 'Direct Current (DC)', 'Positive Current (PC)', 'Negative Current (NC)'], correctAnswerIndex: 1},
        ]
    },
    {
        id: 'test-masonry-1',
        title: 'Certified Masonry Exam',
        subjectId: 'masonry',
        questions: [
            { id: '', questionText: 'What is the ideal ratio of cement to sand for general-purpose mortar?', options: ['1:1', '1:3', '3:1', '1:10'], correctAnswerIndex: 1},
            { id: '', questionText: 'What does "curing" mean for concrete and mortar?', options: ['The process of drying it out as fast as possible', 'The process of maintaining moisture for proper hydration and strength development', 'The process of mixing the materials', 'The process of smoothing the surface'], correctAnswerIndex: 1},
            { id: '', questionText: 'A "stretcher bond" is a brick pattern where all bricks are laid...', options: ['Vertically', 'Lengthwise', 'Widthwise', 'At a 45-degree angle'], correctAnswerIndex: 1},
        ]
    },
    {
        id: 'test-solar-1',
        title: 'Solar Installation Certification',
        subjectId: 'solar-energy',
        questions: [
            { id: '', questionText: 'For maximum energy production, in which direction should solar panels be oriented in Rwanda (Southern Hemisphere)?', options: ['East', 'West', 'South', 'North'], correctAnswerIndex: 3},
            { id: '', questionText: 'What is the primary purpose of a charge controller in an off-grid solar system?', options: ['To convert DC to AC', 'To prevent the battery from overcharging or over-discharging', 'To clean the solar panels', 'To increase the voltage from the panels'], correctAnswerIndex: 1},
            { id: '', questionText: 'Connecting solar panels in "series" increases the total...', options: ['Current (Amps)', 'Voltage (Volts)', 'Wattage (Watts)', 'Resistance (Ohms)'], correctAnswerIndex: 1},
        ]
    },
    {
        id: 'test-landsurvey-1',
        title: 'Land Surveying Proficiency Test',
        subjectId: 'land-surveying',
        questions: [
            { id: '', questionText: 'What is a "benchmark" in surveying?', options: ['A type of surveying equipment', 'The final map produced', 'A point of known elevation used as a reference', 'A property boundary marker'], correctAnswerIndex: 2},
            { id: '', questionText: 'Which of the following would be used to measure the difference in elevation between two points?', options: ['A compass', 'A GPS receiver', 'A leveling instrument (level)', 'A measuring tape'], correctAnswerIndex: 2},
            { id: '', questionText: 'What does a "topographic map" show?', options: ['Only property boundaries', 'Only roads and buildings', 'The shape and elevation of the land using contour lines', 'Only vegetation types'], correctAnswerIndex: 2},
        ]
    },
    {
        id: 'test-ca-1',
        title: 'Professional Chef Exam',
        subjectId: 'culinary-arts',
        questions: [
            { id: '', questionText: 'What are the five "mother sauces" of classical French cuisine?', options: ['Ketchup, Mustard, Mayonnaise, BBQ, Hot Sauce', 'Béchamel, Velouté, Espagnole, Hollandaise, and Tomate', 'Pesto, Alfredo, Marinara, Carbonara, Bolognese', 'Soy, Teriyaki, Hoisin, Oyster, Fish Sauce'], correctAnswerIndex: 1},
            { id: '', questionText: 'What is the culinary term for cutting food into long, thin strips, like matchsticks?', options: ['Dicing', 'Mincing', 'Julienne', 'Chopping'], correctAnswerIndex: 2},
            { id: '', questionText: 'What is a "roux" used for in cooking?', options: ['As a garnish', 'To thicken sauces and soups', 'To add color', 'As a marinade'], correctAnswerIndex: 1},
        ]
    }
];
