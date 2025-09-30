import React, { useState } from 'react';
import { ICONS } from '../constants';
import { Transaction } from '../types';

interface WalletScreenProps {
    balance: number;
    onRedeem: (amount: number) => void;
    transactions: Transaction[];
    onClaimLoginBonus: () => void;
    lastLoginBonusDate: string | null;
}

const WalletScreen: React.FC<WalletScreenProps> = ({ balance, onRedeem, transactions, onClaimLoginBonus, lastLoginBonusDate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amount, setAmount] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRedeemClick = () => {
    setError('');
    setSuccess('');
    setAmount('');
    setPhone('');
    setIsModalOpen(true);
  };

  const handleConfirmRedemption = () => {
    const redeemAmount = parseInt(amount, 10);
    if (isNaN(redeemAmount) || redeemAmount <= 0) { setError('Please enter a valid amount.'); return; }
    if (redeemAmount > balance) { setError('You cannot redeem more than your balance.'); return; }
    if (redeemAmount < 5000) { setError('Minimum redemption amount is 5,000 PTS.'); return; }
    if (!/^(07[2389])\d{7}$/.test(phone)) { setError('Please enter a valid Rwandan mobile money number (e.g., 078...).'); return; }
    
    onRedeem(redeemAmount);
    setSuccess(`Redemption of ${redeemAmount.toLocaleString()} PTS for ${phone} is being processed.`);
    setIsModalOpen(false);
  };
  
  const today = new Date().toISOString().split('T')[0];
  const canClaimBonus = lastLoginBonusDate !== today;

  const sortedTransactions = [...transactions].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <div className="w-full max-w-lg mx-auto p-6 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700">
          <div className="text-center mb-6">
              <div className="flex justify-center mb-4 text-purple-400">
              {React.cloneElement(ICONS.WALLET, { className: "h-20 w-20"})}
              </div>
              <h2 className="text-3xl font-bold text-white">My Wallet</h2>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-xl text-center mb-6">
              <p className="text-sm text-purple-200">CURRENT BALANCE</p>
              <p className="text-5xl font-extrabold text-white tracking-tight">{balance.toLocaleString()} PTS</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <button
                onClick={handleRedeemClick}
                disabled={balance < 5000}
                className="w-full px-6 py-3 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-700 disabled:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transform transition-all duration-300"
              >
                Redeem for Cash
              </button>
               <button
                onClick={onClaimLoginBonus}
                disabled={!canClaimBonus}
                className="w-full px-6 py-3 bg-yellow-500 text-white font-bold rounded-full shadow-lg hover:bg-yellow-600 disabled:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transform transition-all duration-300"
              >
                {canClaimBonus ? 'Claim Daily Bonus (+50)' : 'Bonus Claimed Today'}
              </button>
          </div>
          {success && <p className="text-center text-green-400 mb-4">{success}</p>}

          <div>
              <h3 className="text-lg font-semibold text-white mb-3">Transaction History</h3>
              <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                  {sortedTransactions.map(tx => (
                      <div key={tx.id} className="bg-gray-700 p-3 rounded-lg flex justify-between items-center">
                          <div>
                            <p className="text-gray-300">{tx.description}</p>
                            <p className="text-xs text-gray-500">{new Date(tx.date).toLocaleDateString()}</p>
                          </div>
                          <p className={`font-bold ${tx.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>{tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString()} PTS</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>
      
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50" onClick={() => setIsModalOpen(false)}>
          <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold text-white mb-4">Redeem Points</h3>
            <div className="space-y-4">
              <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Amount to Redeem (PTS)</label>
                  <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder={`Min 5,000 / Max ${balance.toLocaleString()}`} className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white focus:ring-purple-500 focus:border-purple-500" />
              </div>
              <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Mobile Money Number</label>
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="e.g., 0781234567" className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-white focus:ring-purple-500 focus:border-purple-500" />
              </div>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <p className="text-xs text-gray-500">Note: 100 PTS = 100 RWF. Payouts may take up to 5 business days.</p>
              <button onClick={handleConfirmRedemption} className="w-full mt-4 px-6 py-3 bg-purple-600 text-white font-bold rounded-md shadow-lg hover:bg-purple-700 transition-colors duration-300">
                Confirm Redemption
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WalletScreen;