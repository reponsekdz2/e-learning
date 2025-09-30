import { Test } from '../types';

export const tests: Test[] = [
    {
        id: 'test-sd-1',
        title: 'Final Exam: Web Fundamentals',
        subjectId: 'software-development',
        questions: [
            { questionText: 'Which HTML tag is used to define an internal style sheet?', options: ['<script>', '<css>', '<style>', '<head>'], correctAnswerIndex: 2 },
            { questionText: 'How do you write "Hello World" in an alert box in JavaScript?', options: ['alertBox("Hello World");', 'msg("Hello World");', 'alert("Hello World");', 'msgBox("Hello World");'], correctAnswerIndex: 2 },
            { questionText: 'Which CSS property controls the spacing between elements?', options: ['padding', 'margin', 'border', 'space'], correctAnswerIndex: 1},
            { questionText: 'What is the correct syntax for referring to an external script called "app.js"?', options: ['<script href="app.js">', '<script name="app.js">', '<script src="app.js">', '<script file="app.js">'], correctAnswerIndex: 2},
            { questionText: 'How do you declare a JavaScript variable?', options: ['variable carName;', 'v carName;', 'var carName;', 'string carName;'], correctAnswerIndex: 2},
            { questionText: 'Which operator is used to assign a value to a variable?', options: ['*', '-', '=', 'x'], correctAnswerIndex: 2},
            { questionText: 'What will the following code return: Boolean(10 > 9)?', options: ['false', 'true', 'NaN', 'undefined'], correctAnswerIndex: 1},
            { questionText: 'In CSS, what is the correct syntax for making all the <p> elements bold?', options: ['p {text-size:bold;}', 'p {font-weight:bold;}', '<p style="font-size:bold;">', 'p {style:bold;}'], correctAnswerIndex: 1},
        ]
    },
    {
        id: 'test-net-1',
        title: 'Certification Test: Networking Basics',
        subjectId: 'networking',
        questions: [
            { questionText: 'Which device connects multiple computers together in a local area network (LAN)?', options: ['Modem', 'Router', 'Switch', 'Firewall'], correctAnswerIndex: 2},
            { questionText: 'What is the purpose of an IP address?', options: ['To identify a device on a network', 'To secure the network', 'To provide power to a device', 'To store data'], correctAnswerIndex: 0},
            { questionText: 'Which protocol is used for sending emails?', options: ['HTTP', 'FTP', 'SMTP', 'POP3'], correctAnswerIndex: 2},
            { questionText: 'What does "LAN" stand for?', options: ['Long Area Network', 'Local Area Network', 'Logical Area Network', 'Large Area Network'], correctAnswerIndex: 1},
        ]
    },
     {
        id: 'test-auto-1',
        title: 'Mechanic\'s Exam: Engine Systems',
        subjectId: 'automobile-technology',
        questions: [
            { questionText: 'What is the function of the radiator in a car?', options: ['To heat the engine', 'To cool the engine', 'To filter the oil', 'To charge the battery'], correctAnswerIndex: 1},
            { questionText: 'Which part of the engine ignites the fuel-air mixture?', options: ['Piston', 'Crankshaft', 'Spark Plug', 'Alternator'], correctAnswerIndex: 2},
            { questionText: 'What does "ABS" stand for in cars?', options: ['Anti-lock Braking System', 'Automatic Battery Service', 'Advanced Boost System', 'All-around Bumper Safety'], correctAnswerIndex: 0},
            { questionText: 'What fluid is used in a hydraulic brake system?', options: ['Water', 'Engine oil', 'Brake fluid', 'Antifreeze'], correctAnswerIndex: 2},
        ]
    }
];