import React from 'react';
import { ICONS } from '../constants';

const WalletScreen: React.FC = () => {
  return (
    <div className="text-center p-8 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 max-w-md mx-auto">
        <div className="flex justify-center mb-4 text-purple-400">
           {React.cloneElement(ICONS.WALLET, { className: "h-24 w-24"})}
        </div>
        <h2 className="text-4xl font-bold text-white mb-2">My Wallet</h2>
        <p className="text-xl text-gray-300">
            This section will display your rewards and points. Coming soon!
        </p>
    </div>
  );
};

export default WalletScreen;