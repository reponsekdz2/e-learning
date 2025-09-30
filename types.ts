export interface Question {
  id: string; // Unique identifier, e.g., "quiz-id-index"
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
}

export type SubjectCategory = 'General' | 'TVET';

export interface Subject {
  id: string;
  name: string;
  category: SubjectCategory;
  quizzes: Quiz[];
}

export interface Test {
  id:string;
  title: string;
  subjectId: string;
  questions: Question[];
}

export interface DailyChallenge {
    id: string;
    title: string;
    quiz: Quiz;
}

export enum GameState {
  SubjectSelection = 'subject_selection',
  QuizSelection = 'quiz_selection',
  Playing = 'playing',
  Finished = 'finished',
  Prize = 'prize',
}

export enum ActiveView {
  Quizzes,
  Profile,
  Tests,
  Challenges,
  Wallet,
  Leaderboard,
  Study,
  Bookmarks,
  Chatbot,
}

export interface UserProfile {
    name: string;
    bio: string;
    avatar: string; // e.g., 'avatar1', 'avatar2'
    preferredTrade: string; // Corresponds to a subject ID
    achievements: string[]; // IDs of unlocked achievements
}

export interface UserProgress {
    [quizId: string]: {
        score: number;
        date: string; // ISO date string
    }
}

export interface Achievement {
    id: string;
    name: string;
    description: string;
    icon: '🏆' | '🥇' | '🧠' | '🔥' | '📚' | '⭐️';
}

export interface Transaction {
    id: number;
    date: string; // ISO date string
    description: string;
    amount: number; // Can be positive or negative
}

export interface LeaderboardEntry {
    rank: number;
    name: string;
    score: number;
    avatar: string; // e.g., 'avatar1', 'avatar2'
    isCurrentUser: boolean;
}