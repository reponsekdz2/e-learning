
export interface Question {
  id: string;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
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
    name: string;
    avatar: string; // key for AVATARS object
    preferredTrade: string; // subjectId
    bio: string;
}

export interface UserProgress {
    [quizId: string]: {
        score: number;
        date: string; // ISO string
    }
}

export interface Achievement {
    id: string;
    name: string;
    description: string;
    icon: string; // emoji
}

export enum ActiveView {
    Quizzes = 'Quizzes',
    Profile = 'Profile',
    Tests = 'Tests',
    Challenges = 'Challenges',
    Wallet = 'Wallet',
    Leaderboard = 'Leaderboard',
    Study = 'Study',
    Bookmarks = 'Bookmarks',
    Chatbot = 'Chatbot',
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
