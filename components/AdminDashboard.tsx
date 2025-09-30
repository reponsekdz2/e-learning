import React, { useState, useMemo } from 'react';
import { ActiveView, UserProfile, Subject } from '../types';
import ProfileScreen from './ProfileScreen';

interface AdminDashboardProps {
    activeView: ActiveView;
    setActiveView: (view: ActiveView) => void;
    userProfile: UserProfile;
    users: UserProfile[];
    setUsers: React.Dispatch<React.SetStateAction<UserProfile[]>>;
    subjects: Subject[];
    setSubjects: React.Dispatch<React.SetStateAction<Subject[]>>;
    onUpdateProfile: (newProfile: UserProfile) => void;
    onLogout: () => void;
    subjectFilter: 'All' | 'General' | 'TVET';
    searchTerm: string;
    onBroadcast: (message: string) => void;
}

const StatCard: React.FC<{ label: string; value: string | number; }> = ({ label, value }) => (
    <div className="bg-gray-800 p-4 rounded-lg text-center border border-gray-700">
        <p className="text-sm text-gray-400 uppercase tracking-wider">{label}</p>
        <p className="text-3xl font-bold text-white">{value}</p>
    </div>
);


const UserManagementScreen: React.FC<{users: UserProfile[], setUsers: React.Dispatch<React.SetStateAction<UserProfile[]>>}> = ({ users, setUsers }) => {
    const [editingUser, setEditingUser] = useState<UserProfile | null>(null);
    const [userSearch, setUserSearch] = useState('');

    const handleUpdateUser = (updatedUser: UserProfile) => {
        setUsers(prev => prev.map(u => u.id === updatedUser.id ? updatedUser : u));
        setEditingUser(null);
    };

    const handleDeleteUser = (userId: string) => {
        if (window.confirm("Are you sure you want to delete this user? This action cannot be undone.")) {
            setUsers(prev => prev.filter(u => u.id !== userId));
        }
    };
    
    const filteredUsers = users.filter(u => 
        u.name.toLowerCase().includes(userSearch.toLowerCase()) ||
        u.email.toLowerCase().includes(userSearch.toLowerCase())
    );

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-4">
                <h2 className="text-2xl font-bold text-white">User Management ({filteredUsers.length})</h2>
                <input 
                    type="text"
                    value={userSearch}
                    onChange={e => setUserSearch(e.target.value)}
                    placeholder="Search by name or email..."
                    className="bg-gray-700 border border-gray-600 rounded-md p-2 text-white w-full md:w-64"
                />
            </div>
            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b border-gray-700">
                        <tr>
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Role</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map(user => (
                            <tr key={user.id} className="border-b border-gray-700 last:border-none">
                                <td className="p-3">{user.name}</td>
                                <td className="p-3 text-gray-400">{user.email}</td>
                                <td className="p-3 capitalize"><span className="px-2 py-1 text-xs font-semibold bg-purple-600 text-purple-100 rounded-full">{user.role}</span></td>
                                <td className="p-3 space-x-2">
                                    <button onClick={() => setEditingUser(user)} className="px-2 py-1 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700">Edit</button>
                                    <button onClick={() => handleDeleteUser(user.id)} className="px-2 py-1 bg-red-600 text-white text-xs rounded-md hover:bg-red-700">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {editingUser && <EditUserModal user={editingUser} onSave={handleUpdateUser} onClose={() => setEditingUser(null)} />}
        </div>
    );
};

const EditUserModal: React.FC<{user: UserProfile, onClose: () => void, onSave: (user: UserProfile) => void}> = ({ user, onClose, onSave }) => {
    const [editedUser, setEditedUser] = useState(user);
    return (
         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50" onClick={onClose}>
            <div className="bg-gray-800 rounded-lg shadow-2xl max-w-md w-full p-6 border border-gray-700" onClick={e => e.stopPropagation()}>
                <h3 className="text-2xl font-bold text-white mb-4">Edit User</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                        <input type="text" value={editedUser.name} onChange={e => setEditedUser({...editedUser, name: e.target.value})} className="w-full bg-gray-700 p-2 rounded-md"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                        <input type="email" value={editedUser.email} disabled className="w-full bg-gray-900 p-2 rounded-md cursor-not-allowed"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Role</label>
                        <select value={editedUser.role} onChange={e => setEditedUser({...editedUser, role: e.target.value as UserProfile['role']})} className="w-full bg-gray-700 p-2 rounded-md">
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                </div>
                 <div className="flex justify-end gap-4 pt-4 mt-4 border-t border-gray-700">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-600 rounded-md">Cancel</button>
                    <button onClick={() => onSave(editedUser)} className="px-4 py-2 bg-purple-600 rounded-md">Save Changes</button>
                </div>
            </div>
        </div>
    )
}

const ContentManagementScreen: React.FC<{
    subjects: Subject[], 
    setSubjects: React.Dispatch<React.SetStateAction<Subject[]>>,
    subjectFilter: 'All' | 'General' | 'TVET',
    searchTerm: string,
}> = ({ subjects, setSubjects, subjectFilter, searchTerm }) => {

    const handleDeleteSubject = (subjectId: string) => {
        if(window.confirm("Are you sure? Deleting a subject will also delete all its quizzes.")) {
            setSubjects(prev => prev.filter(s => s.id !== subjectId));
        }
    };
    
    const filteredSubjects = useMemo(() => subjects.filter(subject => {
        const categoryMatch = subjectFilter === 'All' || subject.category === subjectFilter;
        const searchMatch = searchTerm ? subject.name.toLowerCase().includes(searchTerm.toLowerCase()) : true;
        return categoryMatch && searchMatch;
    }), [subjects, subjectFilter, searchTerm]);

    return (
        <div>
            <h2 className="text-2xl font-bold text-white mb-4">Content Management ({filteredSubjects.length})</h2>
             {filteredSubjects.length > 0 ? (
                <div className="space-y-4">
                    {filteredSubjects.map(subject => (
                         <div key={subject.id} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{subject.name}</h3>
                                    <p className="text-sm text-gray-400">{subject.category} - {subject.quizzes.length} quizzes</p>
                                </div>
                                <div className="space-x-2">
                                    <button onClick={() => alert("Editing quizzes in this view coming soon!")} className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">Manage Quizzes</button>
                                    <button onClick={() => handleDeleteSubject(subject.id)} className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700">Delete Subject</button>
                                </div>
                            </div>
                         </div>
                    ))}
                </div>
             ) : (
                <div className="text-center bg-gray-800 p-8 rounded-lg">
                    <p className="text-xl text-gray-300">No subjects match your current filters.</p>
                    <p className="text-gray-400 mt-2">Try adjusting the search or category filters in the header.</p>
                </div>
             )}
        </div>
    )
}

const AdminOverviewScreen: React.FC<{users: UserProfile[], subjects: Subject[], onBroadcast: (message: string) => void}> = ({ users, subjects, onBroadcast }) => {
    const totalQuizzes = subjects.reduce((sum, s) => sum + s.quizzes.length, 0);
    const userRoles = users.reduce((acc, user) => {
        acc[user.role] = (acc[user.role] || 0) + 1;
        return acc;
    }, {} as Record<UserProfile['role'], number>);
    
    const [broadcastMessage, setBroadcastMessage] = useState('');

    const handleBroadcast = () => {
        if (broadcastMessage.trim()) {
            onBroadcast(broadcastMessage.trim());
            setBroadcastMessage('');
            alert('Notification sent!');
        }
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-6">Platform Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <StatCard label="Total Users" value={users.length} />
                <StatCard label="Total Subjects" value={subjects.length} />
                <StatCard label="Total Quizzes" value={totalQuizzes} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h2 className="text-xl font-bold text-white mb-4">User Roles</h2>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center bg-gray-700 p-3 rounded-md">
                            <p className="font-semibold text-gray-200">Students</p>
                            <p className="text-purple-400 font-bold">{userRoles.student || 0}</p>
                        </div>
                         <div className="flex justify-between items-center bg-gray-700 p-3 rounded-md">
                            <p className="font-semibold text-gray-200">Teachers</p>
                            <p className="text-purple-400 font-bold">{userRoles.teacher || 0}</p>
                        </div>
                         <div className="flex justify-between items-center bg-gray-700 p-3 rounded-md">
                            <p className="font-semibold text-gray-200">Admins</p>
                            <p className="text-purple-400 font-bold">{userRoles.admin || 0}</p>
                        </div>
                    </div>
                </div>
                 <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h2 className="text-xl font-bold text-white mb-4">Broadcast Notification</h2>
                    <textarea 
                        value={broadcastMessage}
                        onChange={(e) => setBroadcastMessage(e.target.value)}
                        placeholder="Announce new features or content here..."
                        className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white h-24 resize-none"
                    />
                    <button onClick={handleBroadcast} className="w-full mt-2 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 disabled:opacity-50" disabled={!broadcastMessage.trim()}>
                        Send to All Users
                    </button>
                </div>
            </div>
        </div>
    );
};

const AdminDashboard: React.FC<AdminDashboardProps> = (props) => {
    const { activeView, userProfile, users, setUsers, subjects, setSubjects, onUpdateProfile, onLogout, subjectFilter, searchTerm, onBroadcast } = props;

    const renderAdminView = () => {
        switch (activeView) {
            case ActiveView.UserManagement:
                return <UserManagementScreen users={users} setUsers={setUsers} />;
             case ActiveView.ContentManagement:
                 return <ContentManagementScreen subjects={subjects} setSubjects={setSubjects} subjectFilter={subjectFilter} searchTerm={searchTerm} />;
             case ActiveView.Profile:
                 return <ProfileScreen 
                            userProfile={userProfile} 
                            onUpdateProfile={onUpdateProfile} 
                            onLogout={onLogout}
                            allTrades={subjects.filter(s => s.category === 'TVET')}
                            userProgress={{}} unlockedAchievements={[]} subjects={subjects} xpForNextLevel={0}
                            onStartReview={() => {}}
                        />;
            case ActiveView.AdminDashboard:
            default:
                 return <AdminOverviewScreen users={users} subjects={subjects} onBroadcast={onBroadcast} />;
        }
    };

    return (
        <div>
            {renderAdminView()}
        </div>
    );
};

export default AdminDashboard;