export interface Question {
  id: string;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface Quiz {
  id:string;
  title: string;
  questions: Question[];
  createdBy?: string; // email of the teacher who created it
}

export interface Test extends Quiz {
    subjectId: string;
}

export interface Subject {
  id: string;
  name: string;
  category: 'General' | 'TVET';
  quizzes: Quiz[];
}

export interface UserProfile {
    id: string;
    name: string;
    email: string;
    role: 'student' | 'teacher' | 'admin';
    avatar: string; // key for AVATARS object
    preferredTrade: string; // subjectId
    bio: string;
    schoolName: string;
    academicYear: string;
    level: number;
    xp: number;
}

export interface QuizAttempt {
    score: number;
    date: string; // ISO string
    answers: number[]; // Index of the answer chosen for each question
}

export interface UserProgress {
    [quizId: string]: QuizAttempt;
}

export interface Achievement {
    id: string;
    name: string;
    description: string;
    icon: string; // emoji
}

export enum ActiveView {
    // Shared
    Profile = 'Profile',

    // Student Views
    Quizzes = 'Quizzes',
    Tests = 'Tests',
    Challenges = 'Challenges',
    Wallet = 'Wallet',
    Leaderboard = 'Leaderboard',
    Study = 'Study',
    Bookmarks = 'Bookmarks',
    Chatbot = 'Chatbot',
    ReviewQuiz = 'ReviewQuiz',
    
    // Teacher Views
    TeacherDashboard = 'Overview',
    MyQuizzes = 'My Quizzes',
    MyStudents = 'Students',

    // Admin Views
    AdminDashboard = 'Overview',
    UserManagement = 'User Management',
    ContentManagement = 'Content Management',
}

export interface Transaction {
    id: string;
    date: string; // ISO string
    description: string;
    amount: number;
}

export interface LeaderboardEntry {
    rank: number;
    name: string;
    score: number;
    avatar: string;
    isCurrentUser: boolean;
}

export interface DailyChallenge {
    id: string;
    title: string;
    quiz: Quiz;
}

export interface Notification {
    id: string;
    message: string;
    date: string; // ISO string
    read: boolean;
}