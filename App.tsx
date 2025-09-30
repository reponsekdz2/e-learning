// Fix: Implemented the main App component with state management and routing logic.
import React, { useState, useEffect, useMemo } from 'react';
import StartScreen from './components/StartScreen';
import SubjectSelectionScreen from './components/SubjectSelectionScreen';
import QuizSelectionScreen from './components/QuizSelectionScreen';
import QuizScreen from './components/QuizScreen';
import EndScreen from './components/EndScreen';
import PrizeScreen from './components/PrizeScreen';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProfileScreen from './components/ProfileScreen';
import LeaderboardScreen from './components/LeaderboardScreen';
import BookmarksScreen from './components/BookmarksScreen';
import ChallengesScreen from './components/ChallengesScreen';
import TestsScreen from './components/TestsScreen';
import WalletScreen from './components/WalletScreen';
import StudyModeScreen from './components/StudyModeScreen';
import ChatbotScreen from './components/ChatbotScreen';
import ReviewQuizScreen from './components/ReviewQuizScreen';
import CertificateModal from './components/CertificateModal';
import AchievementToast from './components/AchievementToast';
import LevelUpModal from './components/LevelUpModal';

import { allSubjects as initialSubjects } from './data/quizzes';
import { allAchievements } from './data/achievements';
import { notifications as initialNotifications } from './data/notifications';
import { allChallenges } from './data/challenges';
import { tests } from './data/tests';
import { leaderboardData } from './data/leaderboard';

import { Subject, Quiz, Question, UserProfile, QuizAttempt, Achievement, Notification } from './types';
import AnimatedBackground from './components/AnimatedBackground';

type GameState =
  | 'start'
  | 'subject_selection'
  | 'quiz_selection'
  | 'quiz_inprogress'
  | 'quiz_end'
  | 'prize'
  | 'review'
  | 'profile'
  | 'leaderboard'
  | 'bookmarks'
  | 'challenges'
  | 'tests'
  | 'wallet'
  | 'study'
  | 'chatbot';

const App: React.FC = () => {
    // State Management
    const [gameState, setGameState] = useState<GameState>('start');
    const [allSubjects, setAllSubjects] = useState<Subject[]>(initialSubjects);
    const [currentSubject, setCurrentSubject] = useState<Subject | null>(null);
    const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState<number[]>([]);
    const [lastAttempt, setLastAttempt] = useState<QuizAttempt | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [subjectFilter, setSubjectFilter] = useState<'All' | 'General' | 'TVET'>('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [bookmarkedQuestionIds, setBookmarkedQuestionIds] = useState<Set<string>>(new Set());
    const [unlockedAchievement, setUnlockedAchievement] = useState<Achievement | null>(null);
    const [showLevelUp, setShowLevelUp] = useState(false);
    const [earnedCertificate, setEarnedCertificate] = useState<{title: string, date: string} | null>(null);

    // Mock User Profile
    const [userProfile, setUserProfile] = useState<UserProfile>({
        name: 'Kwizera Alex',
        role: 'student',
        level: 4,
        xp: 12500,
        xpToNextLevel: 15000,
        coins: 850,
        avatar: 'avatar1',
        achievements: ['ach-quiz-novice', 'ach-quick-learner'],
        certificates: [],
    });

    const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
    const [quizHistory, setQuizHistory] = useState<QuizAttempt[]>([]);

    // Logic for unlocking achievements
    const unlockAchievement = (id: string) => {
        if (!userProfile.achievements.includes(id)) {
            setUserProfile(prev => ({ ...prev, achievements: [...prev.achievements, id] }));
            const achievement = allAchievements.find(a => a.id === id);
            if (achievement) {
                setUnlockedAchievement(achievement);
            }
        }
    };
    
    // Logic for XP and Level Up
    const addXp = (amount: number) => {
        setUserProfile(prev => {
            const newXp = prev.xp + amount;
            if (newXp >= prev.xpToNextLevel) {
                // Level Up!
                setShowLevelUp(true);
                return {
                    ...prev,
                    level: prev.level + 1,
                    xp: newXp - prev.xpToNextLevel,
                    xpToNextLevel: Math.floor(prev.xpToNextLevel * 1.5),
                };
            }
            return { ...prev, xp: newXp };
        });
    };

    // Quiz Flow Handlers
    const handleStart = () => setGameState('subject_selection');

    const handleSelectSubject = (subjectId: string) => {
        const subject = allSubjects.find(s => s.id === subjectId);
        if (subject) {
            setCurrentSubject(subject);
            setGameState('quiz_selection');
        }
    };

    const handleSelectQuiz = (quiz: Quiz) => {
        setCurrentQuiz(quiz);
        setCurrentQuestionIndex(0);
        setScore(0);
        setUserAnswers([]);
        setGameState('quiz_inprogress');
        unlockAchievement('ach-quiz-novice');
    };

    const handleAnswer = (isCorrect: boolean, answerIndex: number) => {
        if (isCorrect) {
            setScore(prev => prev + 1);
            addXp(100); // 100 XP per correct answer
        }
        setUserAnswers(prev => [...prev, answerIndex]);
        
        if (currentQuestionIndex + 1 < (currentQuiz?.questions.length || 0)) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            // Quiz finished
            const finalScore = isCorrect ? score + 1 : score;
            const totalQuestions = currentQuiz?.questions.length || 0;
            if (finalScore === totalQuestions && totalQuestions > 0) {
                 unlockAchievement('ach-perfect-score');
                 if (currentQuiz && tests.some(t => t.id === currentQuiz.id)) {
                     // It's a test, grant a certificate
                     const newCert = { title: currentQuiz.title, date: new Date().toISOString() };
                     setEarnedCertificate(newCert);
                     setUserProfile(p => ({ ...p, certificates: [...p.certificates, newCert] }));
                 }
            }

            const attempt: QuizAttempt = {
                quizId: currentQuiz!.id,
                quizTitle: currentQuiz!.title,
                score: finalScore,
                totalQuestions: totalQuestions,
                answers: [...userAnswers, answerIndex],
                date: new Date().toISOString(),
            };
            setLastAttempt(attempt);
            setQuizHistory(prev => [attempt, ...prev]);

            setGameState('quiz_end');
        }
    };

    const handleRestart = () => {
        setGameState('subject_selection');
        setCurrentQuiz(null);
        setCurrentSubject(null);
    };


    const handleClaimPrize = () => {
        setUserProfile(prev => ({...prev, coins: prev.coins + 100}));
        setGameState('quiz_end');
    }

    const handleUpdateSubject = (updatedSubject: Subject) => {
        setAllSubjects(prev => prev.map(s => s.id === updatedSubject.id ? updatedSubject : s));
        setCurrentSubject(updatedSubject);
    }
    
    // UI and Navigation
    const handleToggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const handleNavigate = (state: GameState) => {
        setGameState(state);
        setIsSidebarOpen(false);
    };
    
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
    
    const allQuestions = useMemo(() => allSubjects.flatMap(s => s.quizzes.flatMap(q => q.questions)), [allSubjects]);
    const bookmarkedQuestions = useMemo(() => allQuestions.filter(q => bookmarkedQuestionIds.has(q.id)), [allQuestions, bookmarkedQuestionIds]);

    const filteredSubjects = useMemo(() => {
        return allSubjects
            .filter(s => subjectFilter === 'All' || s.category === subjectFilter)
            .filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [allSubjects, subjectFilter, searchTerm]);
    
    // Today's challenge (deterministic based on day)
    const dailyChallenge = useMemo(() => {
        const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);
        return allChallenges[dayOfYear % allChallenges.length];
    }, []);


    const renderContent = () => {
        switch (gameState) {
            case 'start':
                return <StartScreen onStart={handleStart} />;
            case 'subject_selection':
                return <SubjectSelectionScreen subjects={filteredSubjects} onSelectSubject={handleSelectSubject} subjectFilter={subjectFilter} searchTerm={searchTerm} />;
            case 'quiz_selection':
                if (currentSubject) {
                    return <QuizSelectionScreen subject={currentSubject} onSelectQuiz={handleSelectQuiz} onBack={() => setGameState('subject_selection')} onUpdateSubject={handleUpdateSubject} />;
                }
                return null;
            case 'quiz_inprogress':
                if (currentQuiz) {
                    return <QuizScreen 
                                question={currentQuiz.questions[currentQuestionIndex]} 
                                questionNumber={currentQuestionIndex + 1}
                                totalQuestions={currentQuiz.questions.length}
                                onAnswer={handleAnswer}
                                isBookmarked={bookmarkedQuestionIds.has(currentQuiz.questions[currentQuestionIndex].id)}
                                onBookmarkToggle={handleBookmarkToggle}
                           />;
                }
                return null;
            case 'quiz_end':
                return <EndScreen 
                            score={score} 
                            totalQuestions={currentQuiz?.questions.length || 0}
                            onRestart={handleRestart}
                            onClaimPrize={() => setGameState('prize')}
                            onReview={() => setGameState('review')}
                        />;
            case 'prize':
                return <PrizeScreen onClaim={handleClaimPrize} onRestart={handleRestart} />;
            case 'review':
                if (currentQuiz && lastAttempt) {
                    return <ReviewQuizScreen quiz={currentQuiz} attempt={lastAttempt} onBack={() => setGameState('quiz_end')} />;
                }
                return null;
            case 'profile':
                return <ProfileScreen user={userProfile} achievements={allAchievements} history={quizHistory} />;
            case 'leaderboard':
                const currentUserLeaderboard = { ...userProfile, score: userProfile.xp, rank: 0, isCurrentUser: true };
                return <LeaderboardScreen currentUser={currentUserLeaderboard} />;
            case 'bookmarks':
                return <BookmarksScreen bookmarkedQuestions={bookmarkedQuestions} onBookmarkToggle={handleBookmarkToggle} />;
            case 'challenges':
                return <ChallengesScreen challenge={dailyChallenge} onStartChallenge={() => handleSelectQuiz(dailyChallenge.quiz)} />;
            case 'tests':
                return <TestsScreen tests={tests} subjects={allSubjects} onStartTest={handleSelectQuiz} />;
            case 'wallet':
                return <WalletScreen coins={userProfile.coins} />;
            case 'study':
                return <StudyModeScreen subjects={filteredSubjects} bookmarkedQuestionIds={bookmarkedQuestionIds} onBookmarkToggle={handleBookmarkToggle} />;
            case 'chatbot':
                return <ChatbotScreen />;
            default:
                return <StartScreen onStart={handleStart} />;
        }
    };
    
    return (
        <div className="bg-gray-900 text-white min-h-screen flex font-sans">
            <AnimatedBackground />
            <Sidebar 
                isOpen={isSidebarOpen} 
                onClose={() => setIsSidebarOpen(false)} 
                onNavigate={handleNavigate}
                activeState={gameState}
            />
            <div className="flex-1 flex flex-col lg:ml-64 transition-all duration-300">
                <Header 
                    userProfile={userProfile} 
                    onLogout={handleStart}
                    onToggleSidebar={handleToggleSidebar}
                    subjectFilter={subjectFilter}
                    setSubjectFilter={setSubjectFilter}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    notifications={notifications}
                    showFilters={gameState === 'subject_selection' || gameState === 'study'}
                />
                <main className="flex-1 p-4 md:p-8 flex items-center justify-center overflow-y-auto">
                    {renderContent()}
                </main>
            </div>
            {unlockedAchievement && <AchievementToast achievement={unlockedAchievement} onClose={() => setUnlockedAchievement(null)} />}
            {showLevelUp && <LevelUpModal level={userProfile.level} onClose={() => setShowLevelUp(false)} />}
            {earnedCertificate && <CertificateModal certificate={earnedCertificate} userName={userProfile.name} onClose={() => setEarnedCertificate(null)} />}
        </div>
    );
};

export default App;
