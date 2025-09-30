import React, { useState } from 'react';
import { ICONS } from '../constants';
import { UserProfile, Subject } from '../types';

interface RegisterScreenProps {
  onRegister: (newUser: Omit<UserProfile, 'level' | 'xp' | 'id'>) => void;
  onSwitchToLogin: () => void;
  allTrades: Subject[];
  role: UserProfile['role'];
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ onRegister, onSwitchToLogin, allTrades, role }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [category, setCategory] = useState<'General' | 'TVET' | ''>('');
  const [trade, setTrade] = useState('');
  const [academicYear, setAcademicYear] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (role === 'student') {
        if (!category) { setError('Please select a category.'); return; }
        if (category === 'TVET' && !trade) { setError('Please select your trade.'); return; }
        if (!academicYear) { setError('Please enter your academic year.'); return; }
        if (!schoolName) { setError('Please enter your school name.'); return; }
    }
    setError('');
    
    const newUser: Omit<UserProfile, 'level' | 'xp' | 'id'> = {
        name: fullName,
        email: email,
        role: role,
        avatar: 'avatar1', // Default avatar
        preferredTrade: trade,
        bio: 'New learner ready to explore!',
        schoolName: schoolName,
        academicYear: academicYear
    };
    onRegister(newUser);
  };

  return (
    <div className="w-full max-w-lg p-8 space-y-6 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700">
      <div className="text-center">
        <div className="flex justify-center mb-4">
            {React.cloneElement(ICONS.LOGO, { className: 'h-16 w-16 text-purple-400' })}
        </div>
        <h1 className="text-3xl font-bold text-white capitalize">Create Your {role} Account</h1>
        <p className="text-gray-400">Join the community and start your journey today.</p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
              <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="••••••••" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="••••••••" />
            </div>
        </div>
        
        {role === 'student' && (
            <>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Select Your Category</label>
                    <div className="flex gap-4">
                        <button type="button" onClick={() => setCategory('General')} className={`flex-1 py-2 rounded-md ${category === 'General' ? 'bg-purple-600 text-white' : 'bg-gray-700'}`}>General</button>
                        <button type="button" onClick={() => setCategory('TVET')} className={`flex-1 py-2 rounded-md ${category === 'TVET' ? 'bg-purple-600 text-white' : 'bg-gray-700'}`}>TVET</button>
                    </div>
                </div>
                
                {category === 'TVET' && (
                     <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Select Your Trade</label>
                      <select value={trade} onChange={(e) => setTrade(e.target.value)} required className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option value="" disabled>-- Select a trade --</option>
                        {allTrades.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                      </select>
                    </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">School Name</label>
                        <input type="text" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="e.g., IPRC Kigali" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Academic Year</label>
                        <input type="text" value={academicYear} onChange={(e) => setAcademicYear(e.target.value)} className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="e.g., Year 2, Level 5" />
                    </div>
                </div>
            </>
        )}
       
        {error && <p className="text-red-400 text-sm text-center">{error}</p>}

        <div>
          <button type="submit" className="w-full mt-2 px-4 py-3 font-bold text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-md hover:opacity-90 transition-opacity">
            Create Account
          </button>
        </div>
      </form>
      <p className="text-sm text-center text-gray-400">
        Already have an account?{' '}
        <button onClick={onSwitchToLogin} className="font-medium text-purple-400 hover:underline">
          Sign In
        </button>
      </p>
    </div>
  );
};

export default RegisterScreen;