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