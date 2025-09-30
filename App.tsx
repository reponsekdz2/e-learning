import React, { useState, useMemo } from 'react';
import { GameState, Quiz, Subject, ActiveView, SubjectCategory, UserProfile } from './types';
import { subjects } from './data/quizzes';
import { tests } from './data/tests';
import { dailyChallenge } from './data/challenges';
import SubjectSelectionScreen from './components/SubjectSelectionScreen';
import QuizSelectionScreen from './components/QuizSelectionScreen';
import QuizScreen from './components/QuizScreen';
import EndScreen from './components/EndScreen';
import PrizeScreen from './components/PrizeScreen';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProfileScreen from './components/ProfileScreen';
import TestsScreen from './components/TestsScreen';
import ChallengesScreen from './components/ChallengesScreen';
import WalletScreen from './components/WalletScreen';
import LeaderboardScreen from './components/LeaderboardScreen';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.SubjectSelection);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const [activeView, setActiveView] = useState<ActiveView>(ActiveView.Quizzes);
  const [subjectFilter, setSubjectFilter] = useState<SubjectCategory | 'All'>('All');
  
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'Kwizera Alex',
    preferredTrade: 'software-development',
  });
  const [walletBalance, setWalletBalance] = useState(1250);

  const selectedSubject = useMemo(() => {
    if (!selectedSubjectId) return null;
    return subjects.find(s => s.id === selectedSubjectId) || null;
  }, [selectedSubjectId]);
  
  const filteredSubjects = useMemo(() => {
    if (subjectFilter === 'All') return subjects;
    return subjects.filter(subject => subject.category === subjectFilter);
  }, [subjectFilter]);

  const handleSelectSubject = (subjectId: string) => {
    setSelectedSubjectId(subjectId);
    setGameState(GameState.QuizSelection);
  };

  const handleBackToSubjects = () => {
    setSelectedSubjectId(null);
    setGameState(GameState.SubjectSelection);
  };

  const startQuiz = (quiz: Quiz) => {
    setCurrentQuiz(quiz);
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameState(GameState.Playing);
    setActiveView(ActiveView.Quizzes);
  };

  const handleSelectQuiz = (quizId: string) => {
    const quiz = selectedSubject?.quizzes.find(q => q.id === quizId);
    if (quiz) {
      startQuiz(quiz);
    }
  };

  const handleStartChallenge = () => {
    startQuiz(dailyChallenge.quiz);
  };

  const handleStartTest = (testId: string) => {
    const test = tests.find(t => t.id === testId);
    if (test) {
      const testAsQuiz: Quiz = {
        id: test.id,
        title: test.title,
        questions: test.questions,
      };
      startQuiz(testAsQuiz);
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
    // Award points only for perfect scores on regular quizzes
    if (currentQuiz && score === currentQuiz.questions.length) {
        setWalletBalance(prev => prev + 100);
    }
    setGameState(GameState.Prize);
  };

  const handleRestart = () => {
     setCurrentQuiz(null);
     setSelectedSubjectId(null);
     setGameState(GameState.SubjectSelection);
  };
  
  const resetToHome = () => {
    handleRestart(); // Resets quiz state
    setActiveView(ActiveView.Quizzes); // Go back to quizzes view
    setSubjectFilter('All');
  }

  const renderQuizContent = () => {
    switch (gameState) {
      case GameState.SubjectSelection:
        return <SubjectSelectionScreen subjects={filteredSubjects} onSelectSubject={handleSelectSubject} />;
      
      case GameState.QuizSelection:
        if (selectedSubject) {
          return <QuizSelectionScreen subject={selectedSubject} onSelectQuiz={handleSelectQuiz} onBack={handleBackToSubjects} />;
        }
        return null; 

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
        const wasPerfectScore = currentQuiz ? score === currentQuiz.questions.length : false;
        return <PrizeScreen onRestart={resetToHome} pointsAwarded={wasPerfectScore ? 100 : 0} />;

      default:
        return null;
    }
  };
  
  const renderActiveView = () => {
    switch(activeView) {
      case ActiveView.Quizzes:
        return renderQuizContent();
      case ActiveView.Profile:
        return <ProfileScreen userProfile={userProfile} onUpdateProfile={setUserProfile} allTrades={subjects.filter(s => s.category === 'TVET')} />;
      case ActiveView.Tests:
        return <TestsScreen userPreferredTradeId={userProfile.preferredTrade} onStartTest={handleStartTest} />;
      case ActiveView.Challenges:
        return <ChallengesScreen onStartChallenge={handleStartChallenge} />;
      case ActiveView.Wallet:
        return <WalletScreen balance={walletBalance} />;
      case ActiveView.Leaderboard:
        return <LeaderboardScreen />;
      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="ml-64 flex flex-col h-screen">
        {activeView === ActiveView.Quizzes && gameState === GameState.SubjectSelection && (
          <Header activeFilter={subjectFilter} setFilter={setSubjectFilter} />
        )}
        <main className="flex-1 flex items-center justify-center p-4 overflow-y-auto">
          <div className="w-full max-w-4xl">
            {renderActiveView()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;