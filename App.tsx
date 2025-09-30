import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import LandingScreen from './components/LandingScreen';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
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
import ReviewQuizScreen from './components/ReviewQuizScreen';
import AchievementToast from './components/AchievementToast';
import LevelUpModal from './components/LevelUpModal';
import TeacherDashboard from './components/TeacherDashboard';
import AdminDashboard from './components/AdminDashboard';


import { subjects as initialSubjects } from './data/quizzes';
import { tests as initialTests } from './data/tests';
import { allChallenges } from './data/challenges';
import { tvetChallenges } from './data/tvetChallenges';
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
    Notification,
    QuizAttempt
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

const calculateXpForNextLevel = (level: number) => 100 * Math.pow(level, 1.5);

// Custom hook for localStorage
function useStickyState<T>(defaultValue: T | (() => T), key: string): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const resolvedDefaultValue = typeof defaultValue === 'function'
      ? (defaultValue as Function)()
      : defaultValue;

    try {
        const stickyValue = window.localStorage.getItem(key);
        if (stickyValue !== null) {
          const parsed = JSON.parse(stickyValue);
           // Basic type check to prevent hydration errors
          if (typeof parsed !== typeof resolvedDefaultValue || (Array.isArray(resolvedDefaultValue) && !Array.isArray(parsed))) {
              console.warn(`LocalStorage for key "${key}" has a type mismatch. Reverting to default.`);
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
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, value]);
  
  return [value, setValue];
}

const initialUsers: UserProfile[] = [
    { id: 'user-1', name: 'Kwizera Alex', email: 'student@gemini.com', role: 'student', avatar: 'avatar1', preferredTrade: 'software-development', bio: 'Aspiring full-stack developer.', schoolName: 'Kigali Coding School', academicYear: 'Year 2', level: 5, xp: 150 },
    { id: 'user-2', name: 'Mutesi Grace', email: 'teacher@gemini.com', role: 'teacher', avatar: 'avatar2', preferredTrade: '', bio: 'Guiding the next generation of developers.', schoolName: '', academicYear: '', level: 1, xp: 0 },
    { id: 'user-3', name: 'Mugisha Jean', email: 'admin@gemini.com', role: 'admin', avatar: 'avatar3', preferredTrade: '', bio: 'Keeping the platform running smoothly.', schoolName: '', academicYear: '', level: 1, xp: 0 },
];


const App: React.FC = () => {
    // App State
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeView, setActiveView] = useStickyState<ActiveView>(ActiveView.Quizzes, 'activeView');
    const [subjectFilter, setSubjectFilter] = useState<'All' | 'General' | 'TVET'>('All');
    const [searchTerm, setSearchTerm] = useState('');
    
    // Data state
    const [subjects, setSubjects] = useStickyState<Subject[]>(() => processSubjects(initialSubjects), 'subjects');
    const [tests, setTests] = useState<Test[]>(() => processTests(initialTests));
    const [challenges, setChallenges] = useState<DailyChallenge[]>(() => processChallenges(allChallenges));
    const [notifications, setNotifications] = useStickyState<Notification[]>(initialNotifications, 'notifications');
    const [users, setUsers] = useStickyState<UserProfile[]>(initialUsers, 'users');

    // Auth State
    const [currentUser, setCurrentUser] = useStickyState<UserProfile | null>(null, 'currentUser');
    const [authFlow, setAuthFlow] = useState<{screen: 'landing' | 'login' | 'register', role: UserProfile['role'] | null}>({screen: 'landing', role: null});

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
    const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
    const [reviewingQuiz, setReviewingQuiz] = useState<{quiz: Quiz, attempt: QuizAttempt} | null>(null);

    const [showLevelUpModal, setShowLevelUpModal] = useState(false);
    const [leveledUpTo, setLeveledUpTo] = useState(0);


    const todayChallenge = useMemo(() => {
        const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
        if (currentUser?.role === 'student' && currentUser.preferredTrade && tvetChallenges[currentUser.preferredTrade]) {
            return tvetChallenges[currentUser.preferredTrade];
        }
        return challenges[dayOfYear % challenges.length];
    }, [challenges, currentUser]);
    
    const addXp = (amount: number) => {
        if(!currentUser || currentUser.role !== 'student') return;
        
        const updateUserXp = (user: UserProfile) => {
             let newXp = user.xp + amount;
            let newLevel = user.level;
            let xpForNextLevel = calculateXpForNextLevel(newLevel);

            while (newXp >= xpForNextLevel) {
                newXp -= xpForNextLevel;
                newLevel++;
                xpForNextLevel = calculateXpForNextLevel(newLevel);
                setLeveledUpTo(newLevel);
                setShowLevelUpModal(true);
            }
            return { ...user, xp: newXp, level: newLevel };
        };

        setCurrentUser(prevUser => prevUser ? updateUserXp(prevUser) : null);
        setUsers(prevUsers => prevUsers.map(u => u.id === currentUser.id ? updateUserXp(u) : u));
    };
    
    // Auth Handlers
    const handleLogin = (email: string) => {
        const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
        if (user) { // Simplified login, no password check
            setCurrentUser(user);
            switch(user.role) {
                case 'teacher': setActiveView(ActiveView.TeacherDashboard); break;
                case 'admin': setActiveView(ActiveView.AdminDashboard); break;
                default: setActiveView(ActiveView.Quizzes);
            }
        } else {
            // In a real app, you'd show an error message
            alert("User not found. Please register.");
        }
    };

    const handleRegister = (newUser: Omit<UserProfile, 'level' | 'xp' | 'id'>) => {
        const userWithDetails: UserProfile = { ...newUser, id: `user-${Date.now()}`, level: 1, xp: 0 };
        setUsers(prev => [...prev, userWithDetails]);
        setCurrentUser(userWithDetails);
        switch(userWithDetails.role) {
            case 'teacher': setActiveView(ActiveView.TeacherDashboard); break;
            case 'admin': setActiveView(ActiveView.AdminDashboard); break;
            default: setActiveView(ActiveView.Quizzes);
        }
    };

    const handleLogout = () => {
        setCurrentUser(null);
        setAuthFlow({screen: 'login', role: 'student'});
    };

    const handleUpdateProfile = (updatedProfile: UserProfile) => {
        setCurrentUser(updatedProfile);
        setUsers(prev => prev.map(u => u.id === updatedProfile.id ? updatedProfile : u));
    }

    // Quiz Handlers
    const handleSelectSubject = (subjectId: string) => {
        const subject = subjects.find(s => s.id === subjectId);
        if (subject) {
            setCurrentSubject(subject);
            setGameState('selecting-quiz');
        }
    };

    const startQuiz = (quiz: Quiz) => {
        setCurrentQuiz(quiz);
        setCurrentQuestionIndex(0);
        setScore(0);
        setQuizAnswers([]);
        setGameState('in-quiz');
        setActiveView(ActiveView.Quizzes);
    };

    const handleAnswer = (isCorrect: boolean, answerIndex: number) => {
        setQuizAnswers(prev => [...prev, answerIndex]);
        if (isCorrect) {
            setScore(prev => prev + 1);
            addXp(10);
        }
        if (currentQuestionIndex < (currentQuiz?.questions.length || 0) - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setGameState('quiz-ended');
            const finalScore = score + (isCorrect ? 1 : 0);
            const totalQuestions = currentQuiz?.questions.length || 0;
            const finalAnswers = [...quizAnswers, answerIndex];
            addXp(finalScore * 5);

            if (currentQuiz) {
                setUserProgress(prev => ({
                    ...prev,
                    [currentQuiz.id]: { score: finalScore, date: new Date().toISOString(), answers: finalAnswers }
                }));
                if (finalScore === totalQuestions && totalQuestions > 0) {
                    unlockAchievement('ach-perfect-score');
                    addXp(50);
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

    const handleReview = () => {
        if (currentQuiz && userProgress[currentQuiz.id]) {
            setReviewingQuiz({ quiz: currentQuiz, attempt: userProgress[currentQuiz.id] });
            setActiveView(ActiveView.ReviewQuiz);
        }
    };

    const handleStartReviewFromProfile = (quizId: string) => {
        const quiz = subjects.flatMap(s => s.quizzes).find(q => q.id === quizId) || tests.find(t => t.id === quizId);
        if (quiz && userProgress[quizId]) {
            setReviewingQuiz({ quiz, attempt: userProgress[quizId]});
            setActiveView(ActiveView.ReviewQuiz);
        }
    };
    
    const unlockAchievement = (id: string) => {
        if (unlockedAchievements.some(a => a.id === id)) return;
        const achievement = allAchievements.find(a => a.id === id);
        if (achievement) {
            setUnlockedAchievements(prev => [...prev, achievement]);
            setLastUnlockedAchievement(achievement);
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

    const broadcastNotification = (message: string) => {
        const newNotification: Notification = {
            id: `notif-admin-${Date.now()}`,
            message,
            date: new Date().toISOString(),
            read: false,
        };
        // This is a simplified implementation. In a real app, this would be a push to a server.
        // For now, we'll just add it to the current user's notifications.
        // A better local implementation would be to add to a global notifications list and have users pull from it.
        // But for this project's scope, this demonstrates the Admin's capability.
        setNotifications(prev => [newNotification, ...prev]);
    };

    const filteredSubjects = useMemo(() => subjects.filter(subject => {
        const categoryMatch = subjectFilter === 'All' || subject.category === subjectFilter;
        const searchMatch = searchTerm ? subject.name.toLowerCase().includes(searchTerm.toLowerCase()) : true;
        return categoryMatch && searchMatch;
    }), [subjects, subjectFilter, searchTerm]);

    const renderStudentView = () => {
        if (!currentUser) return null;
        switch (activeView) {
            case ActiveView.Profile:
                return <ProfileScreen userProfile={currentUser} onUpdateProfile={handleUpdateProfile} allTrades={subjects.filter(s => s.category === 'TVET')} userProgress={userProgress} unlockedAchievements={unlockedAchievements} subjects={subjects} xpForNextLevel={calculateXpForNextLevel(currentUser.level)} onLogout={handleLogout} onStartReview={handleStartReviewFromProfile} />;
            case ActiveView.Tests:
                return <TestsScreen userPreferredTradeId={currentUser.preferredTrade} onStartTest={(testId) => startQuiz(tests.find(t => t.id === testId)!)} userProgress={userProgress} />;
            case ActiveView.Challenges:
                return <ChallengesScreen challenge={todayChallenge} onStartChallenge={() => startQuiz(todayChallenge.quiz)} />;
            case ActiveView.Wallet:
                const handleRedeem = (amount: number) => {
                    setBalance(b => b - amount);
                    setTransactions(txs => [{id: `tx-${Date.now()}`, date: new Date().toISOString(), description: `Redeemed for cash`, amount: -amount }, ...txs]);
                };
                const handleClaimLoginBonus = () => {
                    const today = new Date().toISOString().split('T')[0];
                    if (lastLoginBonusDate !== today) {
                        setBalance(b => b + 50);
                        addXp(25); // Bonus XP for logging in
                        setTransactions(txs => [{id: `tx-${Date.now()}`, date: new Date().toISOString(), description: 'Daily Login Bonus', amount: 50}, ...txs]);
                        setLastLoginBonusDate(today);
                    }
                };
                return <WalletScreen balance={balance} onRedeem={handleRedeem} transactions={transactions} onClaimLoginBonus={handleClaimLoginBonus} lastLoginBonusDate={lastLoginBonusDate} />;
            case ActiveView.Leaderboard:
                return <LeaderboardScreen currentUser={currentUser} />;
            case ActiveView.Study:
                return <StudyModeScreen subjects={filteredSubjects} bookmarkedQuestionIds={new Set(bookmarkedQuestionIds)} onBookmarkToggle={handleBookmarkToggle} />;
            case ActiveView.Bookmarks:
                return <BookmarksScreen bookmarkedQuestions={bookmarkedQuestions} onBookmarkToggle={handleBookmarkToggle} />;
            case ActiveView.Chatbot:
                return <ChatbotScreen />;
            case ActiveView.ReviewQuiz:
                if (reviewingQuiz) {
                    return <ReviewQuizScreen quiz={reviewingQuiz.quiz} attempt={reviewingQuiz.attempt} onBack={() => setActiveView(ActiveView.Profile)} />;
                }
                return null;
            case ActiveView.Quizzes:
            default:
                switch(gameState) {
                    case 'selecting-subject':
                        return <SubjectSelectionScreen subjects={filteredSubjects} onSelectSubject={handleSelectSubject} subjectFilter={subjectFilter} searchTerm={searchTerm} />;
                    case 'selecting-quiz':
                        if (currentSubject) {
                            return <QuizSelectionScreen subject={currentSubject} onSelectQuiz={startQuiz} onBack={() => setGameState('selecting-subject')} onUpdateSubject={(updated) => setSubjects(prev => prev.map(s => s.id === updated.id ? updated : s))} />;
                        }
                        return null;
                    case 'in-quiz':
                        if (currentQuiz) {
                             const question = currentQuiz.questions[currentQuestionIndex];
                             return <QuizScreen 
                                question={question}
                                questionNumber={currentQuestionIndex + 1}
                                totalQuestions={currentQuiz.questions.length}
                                onAnswer={(isCorrect, answerIndex) => handleAnswer(isCorrect, answerIndex)}
                                isBookmarked={bookmarkedQuestionIds.includes(question.id)}
                                onBookmarkToggle={handleBookmarkToggle}
                             />;
                        }
                        return null;
                    case 'quiz-ended':
                        return <EndScreen score={score} totalQuestions={currentQuiz?.questions.length || 0} onRestart={handleRestart} onClaimPrize={handleClaimPrize} onReview={handleReview} />;
                    case 'prize-claimed':
                        return <PrizeScreen onRestart={handleRestart} pointsAwarded={(currentQuiz?.questions.length || 0) * 100} />;
                    default:
                        handleRestart(); // Reset to a known state if something goes wrong
                        return null;
                }
        }
    };
    
    const renderMainView = () => {
        if (!currentUser) return null;
        switch(currentUser.role) {
            case 'teacher':
                return <TeacherDashboard 
                            activeView={activeView} 
                            setActiveView={setActiveView} 
                            userProfile={currentUser} 
                            users={users}
                            subjects={subjects}
                            setSubjects={setSubjects}
                            onUpdateProfile={handleUpdateProfile}
                            onLogout={handleLogout}
                            subjectFilter={subjectFilter}
                            searchTerm={searchTerm}
                            userProgress={userProgress}
                        />;
            case 'admin':
                return <AdminDashboard 
                            activeView={activeView} 
                            setActiveView={setActiveView} 
                            userProfile={currentUser} 
                            users={users}
                            setUsers={setUsers}
                            subjects={subjects}
                            setSubjects={setSubjects}
                            onUpdateProfile={handleUpdateProfile}
                            onLogout={handleLogout}
                            subjectFilter={subjectFilter}
                            searchTerm={searchTerm}
                            onBroadcast={broadcastNotification}
                        />;
            case 'student':
            default:
                return renderStudentView();
        }
    }
    
    useEffect(() => {
        if (!currentUser || currentUser.role !== 'student') return;
        if(Object.keys(userProgress).length > 0) unlockAchievement('ach-quiz-novice');
        if(Object.keys(userProgress).length >= 5) unlockAchievement('ach-quick-learner');
    }, [userProgress, currentUser]);

    if (!currentUser) {
        return (
            <div className="bg-gray-900 text-gray-200 font-sans min-h-screen flex items-center justify-center p-4">
                {authFlow.screen === 'landing' && <LandingScreen onSelectRole={(role) => setAuthFlow({screen: 'login', role})} />}
                {authFlow.screen === 'login' && <LoginScreen onLogin={handleLogin} onSwitchToRegister={() => setAuthFlow(prev => ({...prev, screen: 'register'}))} />}
                {authFlow.screen === 'register' && <RegisterScreen onRegister={handleRegister} onSwitchToLogin={() => setAuthFlow(prev => ({...prev, screen: 'login'}))} allTrades={subjects.filter(s => s.category === 'TVET')} role={authFlow.role || 'student'}/>}
            </div>
        );
    }

    return (
        <div className="bg-gray-900 text-gray-200 font-sans min-h-screen flex">
            <Sidebar activeView={activeView} setActiveView={setActiveView} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} userRole={currentUser.role} />
            <div className="flex-1 flex flex-col lg:ml-64">
                <Header 
                    onMenuClick={() => setIsSidebarOpen(o => !o)} 
                    userProfile={currentUser} 
                    notifications={notifications}
                    onMarkNotificationsRead={handleMarkNotificationsRead}
                    activeView={activeView}
                    subjectFilter={subjectFilter}
                    setSubjectFilter={setSubjectFilter}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    xpForNextLevel={calculateXpForNextLevel(currentUser.level)}
                />
                <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
                    {renderMainView()}
                </main>
            </div>
            {lastUnlockedAchievement && <AchievementToast achievement={lastUnlockedAchievement} onClose={() => setLastUnlockedAchievement(null)} />}
            {showLevelUpModal && <LevelUpModal level={leveledUpTo} onClose={() => setShowLevelUpModal(false)} />}
        </div>
    );
};

export default App;