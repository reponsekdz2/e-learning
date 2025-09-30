
export interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

// Fix: Add QuizData interface for typing Gemini API response.
export interface QuizData {
  questions: Question[];
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
}

export interface Subject {
  id: string;
  name: string;
  quizzes: Quiz[];
}

export enum GameState {
  SubjectSelection = 'subject_selection',
  QuizSelection = 'quiz_selection',
  Playing = 'playing',
  Finished = 'finished',
  Prize = 'prize',
}