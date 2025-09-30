
import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import SubjectSelectionScreen from './components/SubjectSelectionScreen';
import QuizSelectionScreen from './components/QuizSelectionScreen';
import QuizScreen from './components/QuizScreen';
import EndScreen from './components/EndScreen';
import PrizeScreen from './components/PrizeScreen';
import ProfileScreen from './components/ProfileScreen';
import TestsScreen from './components/TestsScreen';
import ChallengesScreen from './components/ChallengesScreen';
import WalletScreen from './components/WalletScreen';
import LeaderboardScreen from './components/LeaderboardScreen';
import StudyModeScreen from './components/StudyModeScreen';
import BookmarksScreen from './components/BookmarksScreen';
import ChatbotScreen from './components/ChatbotScreen';
import AchievementToast from './components/AchievementToast';

import { subjects as initialSubjects } from './data/quizzes';
import { tests as initialTests } from './data/tests';
import { allChallenges } from './data/challenges';
import { allAchievements } from './data/achievements';
import { notifications as initialNotifications } from './data/notifications';

import { 
    Subject, 
    Quiz, 
    Question, 
    ActiveView, 
    UserProfile, 
    UserProgress, 
    Transaction, 
    Achievement, 
    DailyChallenge,
    Test,
    Notification
} from './types';

// Utility to add unique IDs to questions
const processSubjects = (data: Subject[]): Subject[] => {
    return data.map(subject => ({
        ...subject,
        quizzes: subject.quizzes.map(quiz => ({
            ...quiz,
            questions: quiz.questions.map((question, index) => ({
                ...question,
                id: question.id || `${quiz.id}-q-${index}`
            }))
        }))
    }));
};
const processTests = (data: Test[]): Test[] => {
    return data.map(test => ({
        ...test,
        questions: test.questions.map((question, index) => ({
            ...question,
            id: question.id || `${test.id}-q-${index}`
        }))
    }));
};
const processChallenges = (data: DailyChallenge[]): DailyChallenge[] => {
    return data.map(challenge => ({
        ...challenge,
        quiz: {
            ...challenge.quiz,
            questions: challenge.quiz.questions.map((question, index) => ({
                ...challenge.quiz.questions[index],
                id: question.id || `${challenge.quiz.id}-q-${index}`
            }))
        }
    }));
};

// Custom hook for localStorage
// FIX: Updated the type of defaultValue to allow for a lazy initialization function, matching the hook's implementation.
function useStickyState<T>(defaultValue: T | (() => T), key: string): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const resolvedDefaultValue = typeof defaultValue === 'function'
      ? (defaultValue as Function)()
      : defaultValue;

    try {
        const stickyValue = window.localStorage.getItem(key);
        if (stickyValue !== null) {
          const parsed = JSON.parse(stickyValue);
          if (Array.isArray(resolvedDefaultValue) && !Array.isArray(parsed)) {
            console.warn(`LocalStorage for key "${key}" is corrupted (expected array). Reverting to default.`);
            return resolvedDefaultValue;
          }
          return parsed;
        }
        return resolvedDefaultValue;
    } catch (error) {
        console.warn(`Error reading localStorage key “${key}”:`, error);
        return resolvedDefaultValue;
    }
  });
  
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue];
}


const App: React.FC = () => {
    // App State
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeView, setActiveView] = useStickyState<ActiveView>(ActiveView.Quizzes, 'activeView');
    const [subjectFilter, setSubjectFilter] = useState<'All' | 'General' | 'TVET'>('All');
    
    // Data state
    const [subjects, setSubjects] = useStickyState<Subject[]>(() => processSubjects(initialSubjects), 'subjects');
    const [tests, setTests] = useState<Test[]>(() => processTests(initialTests));
    const [challenges, setChallenges] = useState<DailyChallenge[]>(() => processChallenges(allChallenges));
    const [notifications, setNotifications] = useStickyState<Notification[]>(initialNotifications, 'notifications');
    
    // User data
    const [userProfile, setUserProfile] = useStickyState<UserProfile>({
        name: 'Kwizera Alex',
        avatar: 'avatar1',
        preferredTrade: 'software-development',
        bio: 'Aspiring full-stack developer with a passion for learning.'
    }, 'userProfile');
    const [userProgress, setUserProgress] = useStickyState<UserProgress>({}, 'userProgress');
    const [balance, setBalance] = useStickyState<number>(12500, 'walletBalance');
    const [transactions, setTransactions] = useStickyState<Transaction[]>([
        { id: 'tx1', date: new Date(Date.now() - 86400000).toISOString(), description: 'Perfect score on "Web Fundamentals"', amount: 500 },
        { id: 'tx2', date: new Date(Date.now() - 86400000 * 3).toISOString(), description: 'Daily Login Bonus', amount: 50 },
    ], 'transactions');
    const [unlockedAchievements, setUnlockedAchievements] = useStickyState<Achievement[]>([], 'unlockedAchievements');
    const [bookmarkedQuestionIds, setBookmarkedQuestionIds] = useStickyState<string[]>([], 'bookmarkedQuestionIds');
    const [lastLoginBonusDate, setLastLoginBonusDate] = useStickyState<string | null>(null, 'lastLoginBonusDate');
    const [lastUnlockedAchievement, setLastUnlockedAchievement] = useState<Achievement | null>(null);

    // Quiz/Test State
    const [gameState, setGameState] = useState<'selecting-subject' | 'selecting-quiz' | 'in-quiz' | 'quiz-ended' | 'prize-claimed'>('selecting-subject');
    const [currentSubject, setCurrentSubject] = useState<Subject | null>(null);
    const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    const todayChallenge = useMemo(() => {
        const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
        return challenges[dayOfYear % challenges.length];
    }, [challenges]);
    
    // Handlers
    const handleSelectSubject = (subjectId: string) => {
        const subject = subjects.find(s => s.id === subjectId);
        if (subject) {
            setCurrentSubject(subject);
            setGameState('selecting-quiz');
        }
    };
    
    const handleUpdateSubject = (updatedSubject: Subject) => {
        setSubjects(prevSubjects => prevSubjects.map(s => s.id === updatedSubject.id ? updatedSubject : s));
    }

    const startQuiz = (quiz: Quiz) => {
        setCurrentQuiz(quiz);
        setCurrentQuestionIndex(0);
        setScore(0);
        setGameState('in-quiz');
        setActiveView(ActiveView.Quizzes); // Switch to quiz view if starting from another tab
    };

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) {
            setScore(prev => prev + 1);
        }
        if (currentQuestionIndex < (currentQuiz?.questions.length || 0) - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setGameState('quiz-ended');
            const finalScore = score + (isCorrect ? 1 : 0);
            const totalQuestions = currentQuiz?.questions.length || 0;
            if (currentQuiz) {
                setUserProgress(prev => ({
                    ...prev,
                    [currentQuiz.id]: { score: finalScore, date: new Date().toISOString() }
                }));
                if (finalScore === totalQuestions && totalQuestions > 0) {
                    unlockAchievement('ach-perfect-score');
                }
            }
        }
    };
    
    const handleRestart = () => {
        setGameState('selecting-subject');
        setCurrentSubject(null);
        setCurrentQuiz(null);
    };

    const handleClaimPrize = () => {
        const points = (currentQuiz?.questions.length || 0) * 100;
        setBalance(b => b + points);
        setTransactions(txs => [{id: `tx-${Date.now()}`, date: new Date().toISOString(), description: `Perfect score on "${currentQuiz?.title}"`, amount: points }, ...txs]);
        setGameState('prize-claimed');
    };
    
    const unlockAchievement = (id: string) => {
        if (unlockedAchievements.some(a => a.id === id)) return;
        const achievement = allAchievements.find(a => a.id === id);
        if (achievement) {
            setUnlockedAchievements(prev => [...prev, achievement]);
            setLastUnlockedAchievement(achievement);
            // Add a new notification
            const newNotification: Notification = {
                id: `notif-${Date.now()}`,
                message: `Achievement Unlocked: ${achievement.name}!`,
                date: new Date().toISOString(),
                read: false,
            };
            setNotifications(prev => [newNotification, ...prev]);
        }
    }
    
    const handleBookmarkToggle = (questionId: string) => {
        setBookmarkedQuestionIds(prev => {
            const newSet = new Set(prev);
            if (newSet.has(questionId)) {
                newSet.delete(questionId);
            } else {
                newSet.add(questionId);
            }
            return Array.from(newSet);
        });
    }

    const bookmarkedQuestions = useMemo(() => {
        const allQuestions = new Map<string, Question>();
        subjects.forEach(s => s.quizzes.forEach(q => q.questions.forEach(ques => allQuestions.set(ques.id, ques))));
        tests.forEach(t => t.questions.forEach(ques => allQuestions.set(ques.id, ques)));
        challenges.forEach(c => c.quiz.questions.forEach(ques => allQuestions.set(ques.id, ques)));
        
        const bookmarks = new Set(bookmarkedQuestionIds);
        return Array.from(allQuestions.values()).filter(q => bookmarks.has(q.id));
    }, [bookmarkedQuestionIds, subjects, tests, challenges]);
    
    const handleMarkNotificationsRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    }


    const renderActiveView = () => {
        switch (activeView) {
            case ActiveView.Profile:
                return <ProfileScreen userProfile={userProfile} onUpdateProfile={setUserProfile} allTrades={subjects.filter(s => s.category === 'TVET')} userProgress={userProgress} unlockedAchievements={unlockedAchievements} subjects={subjects} />;
            case ActiveView.Tests:
                return <TestsScreen userPreferredTradeId={userProfile.preferredTrade} onStartTest={(testId) => startQuiz(tests.find(t => t.id === testId)!)} userProgress={userProgress} />;
            case ActiveView.Challenges:
                return <ChallengesScreen dailyChallenge={todayChallenge} onStartChallenge={() => startQuiz(todayChallenge.quiz)} />;
            case ActiveView.Wallet:
                const handleRedeem = (amount: number) => {
                    setBalance(b => b - amount);
                    setTransactions(txs => [{id: `tx-${Date.now()}`, date: new Date().toISOString(), description: `Redeemed for cash`, amount: -amount }, ...txs]);
                };
                const handleClaimLoginBonus = () => {
                    const today = new Date().toISOString().split('T')[0];
                    if (lastLoginBonusDate !== today) {
                        setBalance(b => b + 50);
                        setTransactions(txs => [{id: `tx-${Date.now()}`, date: new Date().toISOString(), description: 'Daily Login Bonus', amount: 50}, ...txs]);
                        setLastLoginBonusDate(today);
                    }
                };
                return <WalletScreen balance={balance} onRedeem={handleRedeem} transactions={transactions} onClaimLoginBonus={handleClaimLoginBonus} lastLoginBonusDate={lastLoginBonusDate} />;
            case ActiveView.Leaderboard:
                return <LeaderboardScreen currentUser={userProfile} />;
            case ActiveView.Study:
                return <StudyModeScreen subjects={subjects} bookmarkedQuestionIds={new Set(bookmarkedQuestionIds)} onBookmarkToggle={handleBookmarkToggle} />;
            case ActiveView.Bookmarks:
                return <BookmarksScreen bookmarkedQuestions={bookmarkedQuestions} onBookmarkToggle={handleBookmarkToggle} />;
            case ActiveView.Chatbot:
                return <ChatbotScreen />;
            case ActiveView.Quizzes:
            default:
                switch(gameState) {
                    case 'selecting-subject':
                        return <SubjectSelectionScreen subjects={subjects} onSelectSubject={handleSelectSubject} subjectFilter={subjectFilter} />;
                    case 'selecting-quiz':
                        if (currentSubject) {
                            return <QuizSelectionScreen subject={currentSubject} onSelectQuiz={startQuiz} onBack={() => setGameState('selecting-subject')} onUpdateSubject={handleUpdateSubject} />;
                        }
                        return null;
                    case 'in-quiz':
                        if (currentQuiz) {
                             const question = currentQuiz.questions[currentQuestionIndex];
                             return <QuizScreen 
                                question={question}
                                questionNumber={currentQuestionIndex + 1}
                                totalQuestions={currentQuiz.questions.length}
                                onAnswer={handleAnswer}
                                isBookmarked={bookmarkedQuestionIds.includes(question.id)}
                                onBookmarkToggle={handleBookmarkToggle}
                             />;
                        }
                        return null;
                    case 'quiz-ended':
                        return <EndScreen score={score} totalQuestions={currentQuiz?.questions.length || 0} onRestart={handleRestart} onClaimPrize={handleClaimPrize} />;
                    case 'prize-claimed':
                        return <PrizeScreen onRestart={handleRestart} pointsAwarded={(currentQuiz?.questions.length || 0) * 100} />;
                    default:
                        handleRestart(); // Reset to a known state if something goes wrong
                        return null;
                }
        }
    };
    
    // Check for achievements on progress update
    useEffect(() => {
        if(Object.keys(userProgress).length > 0) unlockAchievement('ach-quiz-novice');
        if(Object.keys(userProgress).length >= 5) unlockAchievement('ach-quick-learner');
    }, [userProgress]);

    return (
        <div className="bg-gray-900 text-gray-200 font-sans min-h-screen flex">
            <Sidebar activeView={activeView} setActiveView={setActiveView} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <div className="flex-1 flex flex-col lg:ml-64">
                <Header 
                    onMenuClick={() => setIsSidebarOpen(o => !o)} 
                    userProfile={userProfile} 
                    notifications={notifications}
                    onMarkNotificationsRead={handleMarkNotificationsRead}
                    activeView={activeView}
                    subjectFilter={subjectFilter}
                    setSubjectFilter={setSubjectFilter}
                />
                <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
                    {renderActiveView()}
                </main>
            </div>
            {lastUnlockedAchievement && <AchievementToast achievement={lastUnlockedAchievement} onClose={() => setLastUnlockedAchievement(null)} />}
        </div>
    );
};

export default App;
