import React, { useState, useMemo } from 'react';
import { GameState, Quiz, Subject, ActiveView, SubjectCategory, UserProfile, Question } from './types';
import { subjects as rawSubjects } from './data/quizzes';
import { tests as rawTests } from './data/tests';
import { allChallenges as rawChallenges } from './data/challenges';
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
import StudyModeScreen from './components/StudyModeScreen';
import ChatbotScreen from './components/ChatbotScreen';
import BookmarksScreen from './components/BookmarksScreen';

// Helper to add unique IDs to questions
const processQuizzes = <T extends { quizzes: Quiz[] }>(data: T[]): T[] =>
  data.map(subject => ({
    ...subject,
    quizzes: subject.quizzes.map(quiz => ({
      ...quiz,
      questions: quiz.questions.map((q, index) => ({ ...q, id: `${quiz.id}-${index}` })),
    })),
  }));

// FIX: Added 'id: string' to the generic constraint to ensure that any item passed to this function has an 'id' property.
const processTestsOrChallenges = <T extends { id: string; questions: Question[] }>(data: T[]): T[] =>
  data.map(item => ({
    ...item,
    questions: item.questions.map((q, index) => ({ ...q, id: `${item.id}-${index}` })),
  }));

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
    bio: 'Aspiring software developer with a passion for learning new technologies and solving complex problems.',
    avatar: 'avatar1',
    preferredTrade: 'software-development',
  });
  const [walletBalance, setWalletBalance] = useState(1250);
  const [bookmarkedQuestionIds, setBookmarkedQuestionIds] = useState<Set<string>>(new Set());
  
  // Memoize processed data to prevent re-computation on every render
  const subjects = useMemo(() => processQuizzes(rawSubjects), []);
  const tests = useMemo(() => processTestsOrChallenges(rawTests), []);
  const allChallenges = useMemo(() => rawChallenges.map(challenge => ({
    ...challenge,
    quiz: {
      ...challenge.quiz,
      questions: challenge.quiz.questions.map((q, index) => ({ ...q, id: `${challenge.quiz.id}-${index}` }))
    }
  })), []);
  
  const allQuestionsMap = useMemo(() => {
    const map = new Map<string, Question>();
    const allData = [...subjects.flatMap(s => s.quizzes), ...tests, ...allChallenges.map(c => c.quiz)];
    allData.forEach(item => {
      item.questions.forEach(q => map.set(q.id, q));
    });
    return map;
  }, [subjects, tests, allChallenges]);

  const bookmarkedQuestions = useMemo(() => {
    return Array.from(bookmarkedQuestionIds)
      .map(id => allQuestionsMap.get(id))
      .filter((q): q is Question => q !== undefined);
  }, [bookmarkedQuestionIds, allQuestionsMap]);

  const dailyChallenge = useMemo(() => {
    const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    return allChallenges[dayOfYear % allChallenges.length];
  }, [allChallenges]);

  const selectedSubject = useMemo(() => {
    if (!selectedSubjectId) return null;
    return subjects.find(s => s.id === selectedSubjectId) || null;
  }, [selectedSubjectId, subjects]);
  
  const filteredSubjects = useMemo(() => {
    if (subjectFilter === 'All') return subjects;
    return subjects.filter(subject => subject.category === subjectFilter);
  }, [subjectFilter, subjects]);

  const handleBookmarkToggle = (questionId: string) => {
    setBookmarkedQuestionIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

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
    handleRestart();
    setActiveView(ActiveView.Quizzes);
    setSubjectFilter('All');
  }

  const handleRedeemPoints = (amount: number) => {
    setWalletBalance(prev => prev - amount);
  };

  const renderQuizContent = () => {
    switch (gameState) {
      case GameState.SubjectSelection:
        return <SubjectSelectionScreen subjects={filteredSubjects} onSelectSubject={handleSelectSubject} />;
      case GameState.QuizSelection:
        if (selectedSubject) {
          return <QuizSelectionScreen subject={selectedSubject} onStartQuiz={startQuiz} onBack={handleBackToSubjects} />;
        }
        return null; 
      case GameState.Playing:
        if (currentQuiz) {
          const question = currentQuiz.questions[currentQuestionIndex];
          return (
            <QuizScreen
              key={question.id}
              question={question}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={currentQuiz.questions.length}
              onAnswer={handleAnswer}
              isBookmarked={bookmarkedQuestionIds.has(question.id)}
              onBookmarkToggle={handleBookmarkToggle}
            />
          );
        }
        return null;
      case GameState.Finished:
        if(currentQuiz) {
          return (
            <EndScreen score={score} totalQuestions={currentQuiz.questions.length} onRestart={handleRestart} onClaimPrize={handleClaimPrize} />
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
        return <ChallengesScreen dailyChallenge={dailyChallenge} onStartChallenge={handleStartChallenge} />;
      case ActiveView.Wallet:
        return <WalletScreen balance={walletBalance} onRedeem={handleRedeemPoints} />;
      case ActiveView.Leaderboard:
        return <LeaderboardScreen />;
      case ActiveView.Study:
        return <StudyModeScreen subjects={subjects} bookmarkedQuestionIds={bookmarkedQuestionIds} onBookmarkToggle={handleBookmarkToggle} />;
      case ActiveView.Bookmarks:
        return <BookmarksScreen bookmarkedQuestions={bookmarkedQuestions} onBookmarkToggle={handleBookmarkToggle} />;
      case ActiveView.Chatbot:
        return <ChatbotScreen />;
      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="ml-64 flex flex-col h-screen">
        <Header userProfile={userProfile} activeView={activeView} activeFilter={subjectFilter} onFilterChange={setSubjectFilter} />
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
