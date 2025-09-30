export interface Question {
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
  id: string;
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
}

export interface UserProfile {
    name: string;
    preferredTrade: string; // Corresponds to a subject ID
}

export interface LeaderboardEntry {
    rank: number;
    name: string;
    score: number;
    isCurrentUser: boolean;
}