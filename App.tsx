import React, { useState, useMemo, useEffect } from 'react';
import { GameState, Quiz, Subject, ActiveView, SubjectCategory, UserProfile, Question, UserProgress, Transaction, Achievement } from './types';
import { subjects as rawSubjects } from './data/quizzes';
import { tests as rawTests } from './data/tests';
import { allChallenges as rawChallenges } from './data/challenges';
import { allAchievements } from './data/achievements';
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

const processQuizzes = <T extends { quizzes: Quiz[] }>(data: T[]): T[] =>
  data.map(subject => ({
    ...subject,
    quizzes: subject.quizzes.map(quiz => ({
      ...quiz,
      questions: quiz.questions.map((q, index) => ({ ...q, id: `${quiz.id}-${index}` })),
    })),
  }));

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
    bio: 'Aspiring software developer with a passion for learning new technologies.',
    avatar: 'avatar1',
    preferredTrade: 'software-development',
    achievements: ['ach-quiz-novice']
  });
  
  const [walletBalance, setWalletBalance] = useState(1250);
  const [transactions, setTransactions] = useState<Transaction[]>([
      { id: 1, date: new Date(Date.now() - 86400000 * 3).toISOString(), description: "Perfect Score: Chemistry", amount: 100 },
      { id: 2, date: new Date(Date.now() - 86400000 * 2).toISOString(), description: "Daily Challenge Bonus", amount: 250 },
      { id: 3, date: new Date(Date.now() - 86400000 * 1).toISOString(), description: "Perfect Score: Web Fundamentals", amount: 100 },
  ]);
  const [lastLoginBonusDate, setLastLoginBonusDate] = useState<string | null>(new Date(Date.now() - 86400000).toISOString().split('T')[0]);

  const [bookmarkedQuestionIds, setBookmarkedQuestionIds] = useState<Set<string>>(new Set());
  const [userProgress, setUserProgress] = useState<UserProgress>({
      'kin-1': { score: 5, date: new Date(Date.now() - 86400000 * 5).toISOString() },
      'sd-1': { score: 8, date: new Date(Date.now() - 86400000 * 2).toISOString() },
      'chem-1': { score: 6, date: new Date(Date.now() - 86400000 * 3).toISOString() },
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const subjects = useMemo(() => processQuizzes(rawSubjects), []);
  const tests = useMemo(() => processTestsOrChallenges(rawTests), []);
  const allChallenges = useMemo(() => rawChallenges.map(challenge => ({
    ...challenge,
    quiz: { ...challenge.quiz, questions: challenge.quiz.questions.map((q, index) => ({ ...q, id: `${challenge.quiz.id}-${index}` })) }
  })), []);
  
  const allQuestionsMap = useMemo(() => {
    const map = new Map<string, Question>();
    const allData = [...subjects.flatMap(s => s.quizzes), ...tests, ...allChallenges.map(c => c.quiz)];
    allData.forEach(item => item.questions.forEach(q => map.set(q.id, q)));
    return map;
  }, [subjects, tests, allChallenges]);

  const bookmarkedQuestions = useMemo(() => Array.from(bookmarkedQuestionIds).map(id => allQuestionsMap.get(id)).filter((q): q is Question => q !== undefined), [bookmarkedQuestionIds, allQuestionsMap]);

  const dailyChallenge = useMemo(() => {
    const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    return allChallenges[dayOfYear % allChallenges.length];
  }, [allChallenges]);

  const selectedSubject = useMemo(() => subjects.find(s => s.id === selectedSubjectId) || null, [selectedSubjectId, subjects]);
  const filteredSubjects = useMemo(() => subjectFilter === 'All' ? subjects : subjects.filter(subject => subject.category === subjectFilter), [subjectFilter, subjects]);

  const unlockedAchievements = useMemo(() => userProfile.achievements.map(id => allAchievements.find(a => a.id === id)).filter((a): a is Achievement => !!a), [userProfile.achievements]);

  const addTransaction = (description: string, amount: number) => {
    setTransactions(prev => [...prev, { id: Date.now(), date: new Date().toISOString(), description, amount }]);
    setWalletBalance(prev => prev + amount);
  };
  
  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore(prev => prev + 1);
    
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (currentQuiz && nextQuestionIndex < currentQuiz.questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setGameState(GameState.Finished);
    }
  };

  const handleClaimPrize = () => {
    if (currentQuiz && score === currentQuiz.questions.length) {
        addTransaction(`Perfect Score: ${currentQuiz.title}`, 100);
    }
    setGameState(GameState.Prize);
  };
  
  // Update progress and check for achievements when a game finishes
  useEffect(() => {
    if (gameState === GameState.Finished && currentQuiz) {
      setUserProgress(prev => ({ ...prev, [currentQuiz.id]: { score: score, date: new Date().toISOString() } }));

      // Check for achievements
      const newAchievements = new Set(userProfile.achievements);
      const isPerfectScore = score === currentQuiz.questions.length;
      
      if (isPerfectScore && !newAchievements.has('ach-perfect-score')) newAchievements.add('ach-perfect-score');
      if (Object.keys(userProgress).length + 1 >= 5 && !newAchievements.has('ach-quick-learner')) newAchievements.add('ach-quick-learner');

      if (newAchievements.size > userProfile.achievements.length) {
        setUserProfile(prev => ({ ...prev, achievements: Array.from(newAchievements) }));
      }
    }
  }, [gameState, currentQuiz, score, userProgress]);

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

  const handleBookmarkToggle = (questionId: string) => setBookmarkedQuestionIds(prev => { const newSet = new Set(prev); if (newSet.has(questionId)) newSet.delete(questionId); else newSet.add(questionId); return newSet; });
  const handleSelectSubject = (subjectId: string) => { setSelectedSubjectId(subjectId); setGameState(GameState.QuizSelection); };
  const handleBackToSubjects = () => { setSelectedSubjectId(null); setGameState(GameState.SubjectSelection); };
  
  const startQuiz = (quiz: Quiz) => {
    setCurrentQuiz(quiz);
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameState(GameState.Playing);
    setActiveView(ActiveView.Quizzes);
    setIsSidebarOpen(false);
  };

  const handleStartChallenge = () => startQuiz(dailyChallenge.quiz);
  const handleStartTest = (testId: string) => { const test = tests.find(t => t.id === testId); if (test) startQuiz({ id: test.id, title: test.title, questions: test.questions }); };
  const handleRedeemPoints = (amount: number) => addTransaction('Points Redemption', -amount);
  
  const handleClaimLoginBonus = () => {
    const today = new Date().toISOString().split('T')[0];
    if (lastLoginBonusDate !== today) {
        addTransaction('Daily Login Bonus', 50);
        setLastLoginBonusDate(today);
    }
  };

  const renderQuizContent = () => {
    switch (gameState) {
      case GameState.SubjectSelection: return <SubjectSelectionScreen subjects={filteredSubjects} onSelectSubject={handleSelectSubject} />;
      case GameState.QuizSelection: return selectedSubject ? <QuizSelectionScreen subject={selectedSubject} onStartQuiz={startQuiz} onBack={handleBackToSubjects} /> : null; 
      case GameState.Playing:
        if (currentQuiz) {
          const question = currentQuiz.questions[currentQuestionIndex];
          return <QuizScreen key={question.id} question={question} questionNumber={currentQuestionIndex + 1} totalQuestions={currentQuiz.questions.length} onAnswer={handleAnswer} isBookmarked={bookmarkedQuestionIds.has(question.id)} onBookmarkToggle={handleBookmarkToggle} />;
        }
        return null;
      case GameState.Finished: return currentQuiz ? <EndScreen score={score} totalQuestions={currentQuiz.questions.length} onRestart={handleRestart} onClaimPrize={handleClaimPrize} /> : null;
      case GameState.Prize: return <PrizeScreen onRestart={resetToHome} pointsAwarded={(currentQuiz && score === currentQuiz.questions.length) ? 100 : 0} />;
      default: return null;
    }
  };
  
  const renderActiveView = () => {
    switch(activeView) {
      case ActiveView.Quizzes: return renderQuizContent();
      case ActiveView.Profile: return <ProfileScreen userProfile={userProfile} onUpdateProfile={setUserProfile} allTrades={subjects.filter(s => s.category === 'TVET')} userProgress={userProgress} unlockedAchievements={unlockedAchievements} subjects={subjects}/>;
      case ActiveView.Tests: return <TestsScreen userPreferredTradeId={userProfile.preferredTrade} onStartTest={handleStartTest} userProgress={userProgress}/>;
      case ActiveView.Challenges: return <ChallengesScreen dailyChallenge={dailyChallenge} onStartChallenge={handleStartChallenge} />;
      case ActiveView.Wallet: return <WalletScreen balance={walletBalance} onRedeem={handleRedeemPoints} transactions={transactions} onClaimLoginBonus={handleClaimLoginBonus} lastLoginBonusDate={lastLoginBonusDate} />;
      case ActiveView.Leaderboard: return <LeaderboardScreen currentUser={userProfile} />;
      case ActiveView.Study: return <StudyModeScreen subjects={subjects} bookmarkedQuestionIds={bookmarkedQuestionIds} onBookmarkToggle={handleBookmarkToggle} />;
      case ActiveView.Bookmarks: return <BookmarksScreen bookmarkedQuestions={bookmarkedQuestions} onBookmarkToggle={handleBookmarkToggle} />;
      case ActiveView.Chatbot: return <ChatbotScreen />;
      default: return null;
    }
  }

  const handleSidebarNavigation = (view: ActiveView) => {
    setActiveView(view);
    setIsSidebarOpen(false); // Close sidebar on navigation
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Sidebar activeView={activeView} setActiveView={handleSidebarNavigation} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="lg:ml-64 flex flex-col h-screen">
        <Header userProfile={userProfile} activeView={activeView} activeFilter={subjectFilter} onFilterChange={setSubjectFilter} onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
          <div className="w-full max-w-4xl">
            {renderActiveView()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;