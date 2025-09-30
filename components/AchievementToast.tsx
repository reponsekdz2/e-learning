
import React, { useEffect } from 'react';
import { Achievement } from '../types';

interface AchievementToastProps {
  achievement: Achievement;
  onClose: () => void;
}

const AchievementToast: React.FC<AchievementToastProps> = ({ achievement, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // Auto-close after 5 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-5 right-5 bg-gray-900 border border-yellow-500 text-white p-4 rounded-lg shadow-lg flex items-center animate-fade-in-up z-50">
      <span className="text-3xl mr-3">{achievement.icon}</span>
      <div>
        <p className="font-bold text-yellow-400">Achievement Unlocked!</p>
        <p className="text-sm">{achievement.name}</p>
      </div>
      <button onClick={onClose} className="ml-4 text-gray-400 hover:text-white">&times;</button>
    </div>
  );
};

export default AchievementToast;
