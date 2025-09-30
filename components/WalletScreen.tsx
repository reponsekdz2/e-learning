
import React from 'react';
import { ICONS } from '../constants';

interface WalletScreenProps {
    coins: number;
}

const WalletScreen: React.FC<WalletScreenProps> = ({ coins }) => {
    return (
        <div className="w-full max-w-xl mx-auto text-center">
            <div className="flex justify-center mb-4 text-purple-400">
                {React.cloneElement(ICONS.WALLET, { className: "h-24 w-24" })}
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">My Wallet</h2>
            <p className="text-xl text-gray-300 mb-8">
                Your current coin balance. Use coins for hints or special features.
            </p>
            
            <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700">
                <p className="text-gray-400 text-lg">Current Balance</p>
                <div className="flex items-center justify-center my-4">
                    <span className="text-6xl font-bold text-yellow-400">{coins.toLocaleString()}</span>
                    <span className="text-yellow-400 ml-2">Coins</span>
                </div>
                <button className="w-full px-8 py-4 bg-purple-600 text-white font-bold rounded-full shadow-lg hover:bg-purple-700 transform transition-transform duration-300 disabled:opacity-50" disabled>
                    Redeem Prizes (Coming Soon)
                </button>
            </div>
        </div>
    );
};

export default WalletScreen;
