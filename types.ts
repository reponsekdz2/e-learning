// Fix: Populated file with type definitions used across the application.
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

export interface Subject {
  id: string;
  name: string;
  category: 'General' | 'TVET';
  quizzes: Quiz[];
}

export type UserRole = 'student' | 'teacher' | 'admin';

export interface UserProfile {
  name: string;
  role: UserRole;
  level: number;
  xp: number;
  xpToNextLevel: number;
  coins: number;
  avatar: string; // key for AVATARS object
  achievements: string[]; // array of achievement IDs
  certificates: { title: string; date: string }[];
}

export interface Notification {
  id: string;
  message: string;
  date: string;
  read: boolean;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface QuizAttempt {
  quizId: string;
  quizTitle: string;
  score: number;
  totalQuestions: number;
  answers: number[];
  date: string;
}

export interface Test extends Quiz {
    subjectId: string;
}

export interface DailyChallenge {
  id: string;
  title: string;
  quiz: Quiz;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
  avatar: string; // key for AVATARS object
  isCurrentUser: boolean;
}
