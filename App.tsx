import React, { useState, useMemo } from 'react';
import { GameState, Question, Quiz, Subject } from './types';
import { subjects } from './data/quizzes';
import SubjectSelectionScreen from './components/SubjectSelectionScreen';
import QuizSelectionScreen from './components/QuizSelectionScreen';
import QuizScreen from './components/QuizScreen';
import EndScreen from './components/EndScreen';
import PrizeScreen from './components/PrizeScreen';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.SubjectSelection);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const selectedSubject = useMemo(() => {
    if (!selectedSubjectId) return null;
    return subjects.find(s => s.id === selectedSubjectId) || null;
  }, [selectedSubjectId]);

  const handleSelectSubject = (subjectId: string) => {
    setSelectedSubjectId(subjectId);
    setGameState(GameState.QuizSelection);
  };

  const handleBackToSubjects = () => {
    setSelectedSubjectId(null);
    setGameState(GameState.SubjectSelection);
  };

  const handleSelectQuiz = (quizId: string) => {
    const quiz = selectedSubject?.quizzes.find(q => q.id === quizId);
    if (quiz) {
      setCurrentQuiz(quiz);
      setCurrentQuestionIndex(0);
      setScore(0);
      setGameState(GameState.Playing);
    }
  };
  
  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (currentQuiz && nextQuestionIndex < currentQuiz.questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setGameState(GameState.Finished);
    }
  };

  const handleClaimPrize = () => {
    setGameState(GameState.Prize);
  };

  const handleRestart = () => {
     setCurrentQuiz(null);
     setSelectedSubjectId(null);
     setGameState(GameState.SubjectSelection);
  };

  const renderContent = () => {
    switch (gameState) {
      case GameState.SubjectSelection:
        return <SubjectSelectionScreen subjects={subjects} onSelectSubject={handleSelectSubject} />;
      
      case GameState.QuizSelection:
        if (selectedSubject) {
          return <QuizSelectionScreen subject={selectedSubject} onSelectQuiz={handleSelectQuiz} onBack={handleBackToSubjects} />;
        }
        return null; // Or some error/fallback UI

      case GameState.Playing:
        if (currentQuiz) {
          return (
            <QuizScreen
              question={currentQuiz.questions[currentQuestionIndex]}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={currentQuiz.questions.length}
              onAnswer={handleAnswer}
            />
          );
        }
        return null;

      case GameState.Finished:
          if(currentQuiz) {
            return (
              <EndScreen
                score={score}
                totalQuestions={currentQuiz.questions.length}
                onRestart={handleRestart}
                onClaimPrize={handleClaimPrize}
              />
            );
          }
          return null;

      case GameState.Prize:
        return <PrizeScreen onRestart={handleRestart} />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <main className="w-full max-w-4xl">
        {renderContent()}
      </main>
      <footer className="text-gray-500 text-sm mt-8">
        Quiz Hub Platform
      </footer>
    </div>
  );
};

export default App;
