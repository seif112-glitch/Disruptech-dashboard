import React, { useState } from 'react';
import { DollarSign, TrendingUp, Calendar, Download, Eye, Filter } from 'lucide-react';

export const CapitalAccount: React.FC = () => {
  const [selectedFund, setSelectedFund] = useState('fund-i');
  const [selectedPeriod, setSelectedPeriod] = useState('all');

  const funds = [
    { id: 'fund-i', name: 'Disruptech Fund I', commitment: 2500000 },
    { id: 'fund-ii', name: 'Disruptech Fund II', commitment: 1000000 }
  ];

  const capitalAccountData = {
    'fund-i': {
      totalCommitment: 2500000,
      totalCalled: 1800000,
      totalDistributed: 500000,
      currentNAV: 3200000,
      remainingCommitment: 700000,
      transactions: [
        {
          id: 1,
          date: '2024-10-15',
          type: 'Capital Call',
          description: 'Capital Call #8 - New investments',
          amount: -150000,
          balance: 1800000
        },
        {
          id: 2,
          date: '2024-09-30',
          type: 'Distribution',
          description: 'Q3 Distribution - TechCorp exit',
          amount: 75000,
          balance: 1650000
        },
        {
          id: 3,
          date: '2024-07-15',
          type: 'Capital Call',
          description: 'Capital Call #7 - Follow-on investments',
          amount: -200000,
          balance: 1575000
        },
        {
          id: 4,
          date: '2024-06-30',
          type: 'Distribution',
          description: 'Q2 Distribution - Portfolio dividends',
          amount: 50000,
          balance: 1375000
        },
        {
          id: 5,
          date: '2024-04-15',
          type: 'Capital Call',
          description: 'Capital Call #6 - New investments',
          amount: -175000,
          balance: 1325000
        }
      ]
    },
    'fund-ii': {
      totalCommitment: 1000000,
      totalCalled: 700000,
      totalDistributed: 100000,
      currentNAV: 1100000,
      remainingCommitment: 300000,
      transactions: [
        {
          id: 1,
          date: '2024-10-10',
          type: 'Capital Call',
          description: 'Capital Call #4 - New investments',
          amount: -100000,
          balance: 700000
        },
        {
          id: 2,
          date: '2024-08-15',
          type: 'Capital Call',
          description: 'Capital Call #3 - Follow-on investments',
          amount: -150000,
          balance: 600000
        },
        {
          id: 3,
          date: '2024-06-30',
          type: 'Distribution',
          description: 'Q2 Distribution - Early exit',
          amount: 25000,
          balance: 450000
        },
        {
          id: 4,
          date: '2024-05-15',
          type: 'Capital Call',
          description: 'Capital Call #2 - New investments',
          amount: -200000,
          balance: 425000
        },
        {
          id: 5,
          date: '2024-03-01',
          type: 'Capital Call',
          description: 'Initial Capital Call',
          amount: -250000,
          balance: 225000
        }
      ]
    }
  };

  const currentData = capitalAccountData[selectedFund as keyof typeof capitalAccountData];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getTransactionColor = (type: string) => {
    return type === 'Distribution' ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Capital Account</h1>
          <p className="text-gray-600">Track your capital commitments, calls, and distributions</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedFund}
            onChange={(e) => setSelectedFund(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {funds.map((fund) => (
              <option key={fund.id} value={fund.id}>
                {fund.name}
              </option>
            ))}
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Commitment</p>
            <p className="text-2xl font-bold text-gray-900">{formatCurrency(currentData.totalCommitment)}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-red-50 rounded-lg">
              <TrendingUp className="h-6 w-6 text-red-600" />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Called</p>
            <p className="text-2xl font-bold text-gray-900">{formatCurrency(currentData.totalCalled)}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Distributed</p>
            <p className="text-2xl font-bold text-green-600">{formatCurrency(currentData.totalDistributed)}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-50 rounded-lg">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Current NAV</p>
            <p className="text-2xl font-bold text-purple-600">{formatCurrency(currentData.currentNAV)}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-50 rounded-lg">
              <Calendar className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Remaining</p>
            <p className="text-2xl font-bold text-orange-600">{formatCurrency(currentData.remainingCommitment)}</p>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Performance Metrics</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">TVPI (Total Value to Paid-In)</p>
            <p className="text-3xl font-bold text-gray-900">
              {((currentData.currentNAV + currentData.totalDistributed) / currentData.totalCalled).toFixed(2)}x
            </p>
          </div>
          
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">DPI (Distributions to Paid-In)</p>
            <p className="text-3xl font-bold text-green-600">
              {(currentData.totalDistributed / currentData.totalCalled).toFixed(2)}x
            </p>
          </div>
          
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Deployment Rate</p>
            <p className="text-3xl font-bold text-blue-600">
              {((currentData.totalCalled / currentData.totalCommitment) * 100).toFixed(0)}%
            </p>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Transaction History</h3>
          <div className="flex items-center space-x-4">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Time</option>
              <option value="ytd">Year to Date</option>
              <option value="last-12">Last 12 Months</option>
              <option value="last-6">Last 6 Months</option>
            </select>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-500">Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500">Type</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500">Description</th>
                <th className="text-right py-3 px-4 font-medium text-gray-500">Amount</th>
                <th className="text-right py-3 px-4 font-medium text-gray-500">Running Balance</th>
                <th className="text-center py-3 px-4 font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentData.transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 text-gray-900">
                    {new Date(transaction.date).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      transaction.type === 'Distribution' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {transaction.type}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{transaction.description}</td>
                  <td className={`py-4 px-4 text-right font-medium ${getTransactionColor(transaction.type)}`}>
                    {transaction.amount > 0 ? '+' : ''}{formatCurrency(transaction.amount)}
                  </td>
                  <td className="py-4 px-4 text-right font-medium text-gray-900">
                    {formatCurrency(transaction.balance)}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};