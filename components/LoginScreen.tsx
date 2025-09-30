import React, { useState } from 'react';
import { ICONS } from '../constants';

interface LoginScreenProps {
  onLogin: (email: string) => void;
  onSwitchToRegister: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      // In a real app, you would validate credentials here
      onLogin(email);
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700">
      <div className="text-center">
        <div className="flex justify-center mb-4">
            {React.cloneElement(ICONS.LOGO, { className: 'h-16 w-16 text-purple-400' })}
        </div>
        <h1 className="text-3xl font-bold text-white">Welcome Back!</h1>
        <p className="text-gray-400">Sign in to continue your learning journey.</p>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
           <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                <a href="#" className="text-sm text-purple-400 hover:underline">Forgot?</a>
           </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="••••••••"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-3 font-bold text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-md hover:opacity-90 transition-opacity"
          >
            Sign In
          </button>
        </div>
      </form>
      <p className="text-sm text-center text-gray-400">
        Don't have an account?{' '}
        <button onClick={onSwitchToRegister} className="font-medium text-purple-400 hover:underline">
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default LoginScreen;
