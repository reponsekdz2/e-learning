

import React, { useState, useMemo } from 'react';
import { ActiveView, UserProfile, Subject, Quiz, Question, UserProgress, QuizAttempt } from '../types';
import QuizCreator from './QuizCreator';
import ProfileScreen from './ProfileScreen';

interface TeacherDashboardProps {
    activeView: ActiveView;
    setActiveView: (view: ActiveView) => void;
    userProfile: UserProfile;
    users: UserProfile[];
    subjects: Subject[];
    setSubjects: React.Dispatch<React.SetStateAction<Subject[]>>;
    onUpdateProfile: (newProfile: UserProfile) => void;
    onLogout: () => void;
    subjectFilter: 'All' | 'General' | 'TVET';
    searchTerm: string;
    userProgress: UserProgress;
}

const StatCard: React.FC<{ label: string; value: string | number; }> = ({ label, value }) => (
    <div className="bg-gray-800 p-4 rounded-lg text-center border border-gray-700">
        <p className="text-sm text-gray-400 uppercase tracking-wider">{label}</p>
        <p className="text-3xl font-bold text-white">{value}</p>
    </div>
);

const MyQuizzesScreen: React.FC<{
    teacher: UserProfile, 
    subjects: Subject[], 
    setSubjects: React.Dispatch<React.SetStateAction<Subject[]>>,
    subjectFilter: 'All' | 'General' | 'TVET',
    searchTerm: string,
    allUserProgress: UserProgress
}> = ({ teacher, subjects, setSubjects, subjectFilter, searchTerm, allUserProgress }) => {
    
    const [editingQuiz, setEditingQuiz] = useState<Quiz | null>(null);
    const [viewingAnalytics, setViewingAnalytics] = useState<Quiz | null>(null);

    const myQuizzes = useMemo(() => {
        return subjects
            .filter(s => subjectFilter === 'All' || s.category === subjectFilter)
            .flatMap(s => s.quizzes.filter(q => {
                const createdByMatch = q.createdBy === teacher.email;
                const searchMatch = searchTerm ? q.title.toLowerCase().includes(searchTerm.toLowerCase()) : true;
                return createdByMatch && searchMatch;
            }));
    }, [subjects, teacher.email, subjectFilter, searchTerm]);


    const handleQuizCreated = (newQuiz: Quiz, subjectId: string) => {
        setSubjects(prevSubjects => {
            return prevSubjects.map(s => {
                if (s.id === subjectId) {
                    return { ...s, quizzes: [...s.quizzes, { ...newQuiz, createdBy: teacher.email }] };
                }
                return s;
            });
        });
    };

    const handleQuizUpdated = (updatedQuiz: Quiz) => {
        setSubjects(prevSubjects => {
            return prevSubjects.map(s => ({
                ...s,
                quizzes: s.quizzes.map(q => q.id === updatedQuiz.id ? updatedQuiz : q)
            }));
        });
        setEditingQuiz(null);
    };

    const handleQuizDeleted = (quizId: string) => {
        if (window.confirm("Are you sure you want to delete this quiz?")) {
            setSubjects(prevSubjects => {
                return prevSubjects.map(s => ({
                    ...s,
                    quizzes: s.quizzes.filter(q => q.id !== quizId)
                }));
            });
        }
    };
    
    return (
        <div>
            <QuizCreator onQuizCreated={handleQuizCreated} subjects={subjects} />

            <div className="mt-8">
                <h2 className="text-2xl font-bold text-white mb-4">My Created Quizzes ({myQuizzes.length})</h2>
                {myQuizzes.length > 0 ? (
                    <div className="space-y-3">
                        {myQuizzes.map(quiz => (
                            <div key={quiz.id} className="bg-gray-800 p-4 rounded-lg flex justify-between items-center border border-gray-700">
                                <div>
                                    <p className="font-semibold text-white">{quiz.title}</p>
                                    <p className="text-sm text-gray-400">{quiz.questions.length} questions</p>
                                </div>
                                <div className="space-x-2">
                                    <button onClick={() => setViewingAnalytics(quiz)} className="px-3 py-1 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700">Analytics</button>
                                    <button onClick={() => setEditingQuiz(quiz)} className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">Edit</button>
                                    <button onClick={() => handleQuizDeleted(quiz.id)} className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center bg-gray-800 p-8 rounded-lg">
                        <p className="text-xl text-gray-300">No quizzes match your current filters.</p>
                        <p className="text-gray-400 mt-2">Try adjusting the search or category filters in the header.</p>
                    </div>
                )}
            </div>
            {editingQuiz && <EditQuizModal quiz={editingQuiz} onSave={handleQuizUpdated} onClose={() => setEditingQuiz(null)} />}
            {viewingAnalytics && <QuizAnalyticsModal quiz={viewingAnalytics} allUserProgress={allUserProgress} onClose={() => setViewingAnalytics(null)} />}
        </div>
    );
};

const QuizAnalyticsModal: React.FC<{quiz: Quiz, onClose: () => void, allUserProgress: UserProgress}> = ({ quiz, onClose, allUserProgress }) => {
    const analytics = useMemo(() => {
        // FIX: Logic was flawed and had typing issues. Correctly calculate stats for the specific quiz.
        // Assuming `allUserProgress` is for a single user for now, as per data structure.
        const attempt = allUserProgress[quiz.id] as QuizAttempt | undefined;
        const questionStats = quiz.questions.map(q => ({
            id: q.id,
            text: q.questionText,
            correct: 0,
            total: 0
        }));

        if (attempt?.answers) {
            quiz.questions.forEach((q, index) => {
                const stat = questionStats[index];
                if (stat && attempt.answers[index] !== undefined) {
                    stat.total++;
                    if (attempt.answers[index] === q.correctAnswerIndex) {
                        stat.correct++;
                    }
                }
            });
        }
        
        return {
            totalAttempts: attempt?.answers ? 1 : 0,
            questionStats
        };
    }, [quiz, allUserProgress]);

    return (
         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50" onClick={onClose}>
            <div className="bg-gray-800 rounded-lg shadow-2xl max-w-2xl w-full p-6 border border-gray-700 max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
                <h3 className="text-2xl font-bold text-white mb-2">Quiz Analytics</h3>
                <p className="text-gray-400 mb-4">{quiz.title}</p>
                <p className="mb-4"><span className="font-bold">{analytics.totalAttempts}</span> total attempts recorded.</p>
                <div className="overflow-y-auto pr-2 flex-grow space-y-4">
                    {analytics.questionStats.map((stat) => {
                        const correctPercentage = stat.total > 0 ? (stat.correct / stat.total) * 100 : 0;
                        return (
                            <div key={stat.id} className="bg-gray-700 p-3 rounded-md">
                                <p className="text-sm text-gray-300 mb-2" dangerouslySetInnerHTML={{__html: stat.text}}></p>
                                <div className="flex items-center gap-4">
                                    <div className="flex-grow bg-gray-600 rounded-full h-4">
                                        <div className="bg-green-500 h-4 rounded-full" style={{ width: `${correctPercentage}%` }}></div>
                                    </div>
                                    <span className="w-16 text-right font-semibold">{Math.round(correctPercentage)}%</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">{stat.correct} / {stat.total} correct answers</p>
                            </div>
                        )
                    })}
                </div>
                <div className="flex justify-end pt-4 mt-4 border-t border-gray-700">
                    <button onClick={onClose} className="px-4 py-2 bg-purple-600 rounded-md">Close</button>
                </div>
            </div>
        </div>
    )
}

const EditQuizModal: React.FC<{quiz: Quiz, onClose: () => void, onSave: (quiz: Quiz) => void}> = ({ quiz, onClose, onSave }) => {
    const [editedQuiz, setEditedQuiz] = useState<Quiz>(JSON.parse(JSON.stringify(quiz)));

    const handleQuestionChange = (qIndex: number, field: keyof Question, value: any) => {
        const newQuestions = [...editedQuiz.questions];
        const questionToUpdate = newQuestions[qIndex];
        if(questionToUpdate) {
            (questionToUpdate[field] as any) = value;
            setEditedQuiz({...editedQuiz, questions: newQuestions});
        }
    };
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50" onClick={onClose}>
            <div className="bg-gray-800 rounded-lg shadow-2xl max-w-2xl w-full p-6 border border-gray-700 max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
                <h3 className="text-2xl font-bold text-white mb-4">Edit Quiz</h3>
                <div className="overflow-y-auto pr-2 flex-grow">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Quiz Title</label>
                            <input type="text" value={editedQuiz.title} onChange={e => setEditedQuiz({...editedQuiz, title: e.target.value})} className="w-full bg-gray-700 p-2 rounded-md"/>
                        </div>
                        {editedQuiz.questions.map((q, qIndex) => (
                            <div key={q.id || qIndex} className="bg-gray-700 p-3 rounded-md">
                                <label className="block text-sm font-medium text-gray-400 mb-1">Question {qIndex + 1}</label>
                                <textarea value={q.questionText} onChange={e => handleQuestionChange(qIndex, 'questionText', e.target.value)} className="w-full bg-gray-600 p-2 rounded-md text-sm" rows={2}/>
                                {q.options.map((opt, oIndex) => (
                                     <div key={oIndex} className="flex items-center gap-2 mt-1">
                                        <input type="radio" name={`correct-${q.id || qIndex}`} checked={q.correctAnswerIndex === oIndex} onChange={() => handleQuestionChange(qIndex, 'correctAnswerIndex', oIndex)} />
                                        <input type="text" value={opt} onChange={e => {
                                            const newOptions = [...q.options];
                                            newOptions[oIndex] = e.target.value;
                                            handleQuestionChange(qIndex, 'options', newOptions);
                                        }} className={`w-full bg-gray-600 p-1 rounded-md text-sm ${q.correctAnswerIndex === oIndex ? 'border border-green-500' : ''}`} />
                                     </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end gap-4 pt-4 mt-4 border-t border-gray-700">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-600 rounded-md">Cancel</button>
                    <button onClick={() => onSave(editedQuiz)} className="px-4 py-2 bg-purple-600 rounded-md">Save Changes</button>
                </div>
            </div>
        </div>
    )
}

const MyStudentsScreen: React.FC<{users: UserProfile[]}> = ({ users }) => {
    const students = users.filter(u => u.role === 'student');
    return (
        <div>
            <h2 className="text-2xl font-bold text-white mb-4">All Students ({students.length})</h2>
             <div className="bg-gray-800 rounded-lg border border-gray-700">
                <table className="w-full text-left">
                    <thead className="border-b border-gray-700">
                        <tr>
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">School</th>
                            <th className="p-3 text-center">Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(user => (
                            <tr key={user.id} className="border-b border-gray-700 last:border-none">
                                <td className="p-3">{user.name}</td>
                                <td className="p-3 text-gray-400">{user.email}</td>
                                <td className="p-3 text-gray-400">{user.schoolName}</td>
                                <td className="p-3 text-center font-bold">{user.level}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const TeacherOverviewScreen: React.FC<{
    teacher: UserProfile,
    subjects: Subject[],
    users: UserProfile[],
    userProgress: UserProgress
}> = ({ teacher, subjects, users, userProgress }) => {
    const myQuizzes = subjects.flatMap(s => s.quizzes.filter(q => q.createdBy === teacher.email));
    
    const { totalAttempts, avgScore } = useMemo(() => {
        let totalAttempts = 0;
        let totalScoreSum = 0;
        
        // FIX: Original logic was flawed and had typing issues.
        // Iterate over own quizzes and find attempts in userProgress.
        myQuizzes.forEach(quiz => {
            const progress = userProgress[quiz.id] as QuizAttempt | undefined;
            if (progress && progress.answers) {
                totalAttempts++;
                totalScoreSum += (progress.score / quiz.questions.length) * 100;
            }
        });
        
        const avg = totalAttempts > 0 ? Math.round(totalScoreSum / totalAttempts) : 0;
        return { totalAttempts, avgScore: avg };
    }, [userProgress, myQuizzes]);
    
    const studentCount = users.filter(u => u.role === 'student').length;

    const popularQuizzes = myQuizzes
        .map(q => {
            const attempts = Object.keys(userProgress).filter(quizId => quizId === q.id).length;
            return { ...q, attempts };
        })
        .sort((a, b) => b.attempts - a.attempts)
        .slice(0, 5);

    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-6">Teacher Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <StatCard label="My Quizzes" value={myQuizzes.length} />
                <StatCard label="Total Students" value={studentCount} />
                <StatCard label="Avg. Score on My Quizzes" value={`${avgScore}%`} />
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h2 className="text-xl font-bold text-white mb-4">Most Popular Quizzes</h2>
                 {popularQuizzes.length > 0 && popularQuizzes.some(q => q.attempts > 0) ? (
                    <div className="space-y-3">
                        {popularQuizzes.map(quiz => (
                            <div key={quiz.id} className="flex justify-between items-center bg-gray-700 p-3 rounded-md">
                                <p className="font-semibold text-gray-200">{quiz.title}</p>
                                <p className="text-purple-400 font-bold">{quiz.attempts} attempts</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-400 text-center py-4">No student has attempted your quizzes yet.</p>
                )}
            </div>
        </div>
    );
}


const TeacherDashboard: React.FC<TeacherDashboardProps> = (props) => {
    const { activeView, userProfile, users, subjects, setSubjects, onUpdateProfile, onLogout, subjectFilter, searchTerm, userProgress } = props;

    const renderTeacherView = () => {
        switch (activeView) {
            case ActiveView.MyQuizzes:
                return <MyQuizzesScreen teacher={userProfile} subjects={subjects} setSubjects={setSubjects} subjectFilter={subjectFilter} searchTerm={searchTerm} allUserProgress={userProgress} />;
            case ActiveView.MyStudents:
                return <MyStudentsScreen users={users} />;
            case ActiveView.Profile:
                 return <ProfileScreen 
                            userProfile={userProfile} 
                            onUpdateProfile={onUpdateProfile} 
                            onLogout={onLogout}
                            allTrades={subjects.filter(s => s.category === 'TVET')}
                            userProgress={{}} unlockedAchievements={[]} subjects={subjects} xpForNextLevel={0}
                            onStartReview={() => {}}
                        />;
            case ActiveView.TeacherDashboard:
            default:
                return <TeacherOverviewScreen teacher={userProfile} subjects={subjects} users={users} userProgress={userProgress} />;
        }
    };

    return (
        <div>
            {renderTeacherView()}
        </div>
    );
};

export default TeacherDashboard;