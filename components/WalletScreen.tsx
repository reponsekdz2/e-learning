import React from 'react';
import { ICONS } from '../constants';

interface WalletScreenProps {
    balance: number;
}

const WalletScreen: React.FC<WalletScreenProps> = ({ balance }) => {
  // Mock transaction data
  const transactions = [
    { id: 1, description: "Perfect Score: Chemistry Elements", amount: 100 },
    { id: 2, description: "Perfect Score: HTML & CSS Basics", amount: 100 },
    { id: 3, description: "Daily Challenge Bonus", amount: 250 },
    { id: 4, description: "Perfect Score: Kinyarwanda", amount: 100 },
  ];

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700">
        <div className="text-center mb-6">
            <div className="flex justify-center mb-4 text-purple-400">
            {React.cloneElement(ICONS.WALLET, { className: "h-20 w-20"})}
            </div>
            <h2 className="text-3xl font-bold text-white">My Wallet</h2>
            <p className="text-gray-400">Your accumulated points</p>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-xl text-center mb-8">
            <p className="text-sm text-purple-200">CURRENT BALANCE</p>
            <p className="text-5xl font-extrabold text-white tracking-tight">{balance.toLocaleString()} PTS</p>
        </div>

        <div>
            <h3 className="text-lg font-semibold text-white mb-3">Recent Transactions</h3>
            <div className="space-y-3">
                {transactions.map(tx => (
                    <div key={tx.id} className="bg-gray-700 p-3 rounded-lg flex justify-between items-center">
                        <p className="text-gray-300">{tx.description}</p>
                        <p className="font-bold text-green-400">+{tx.amount} PTS</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default WalletScreen;