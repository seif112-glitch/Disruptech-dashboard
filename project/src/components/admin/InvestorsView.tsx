import React, { useState } from 'react';
import { Search, Filter, Plus, Mail, Phone, Calendar, DollarSign, TrendingUp, Edit, Eye } from 'lucide-react';

export const InvestorsView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const investors = [
    {
      id: '1',
      name: 'John Investor',
      email: 'john@example.com',
      phone: '+1 (555) 123-4567',
      totalCommitment: 2500000,
      totalCalled: 1800000,
      totalDistributed: 500000,
      currentNAV: 3200000,
      joinDate: '2021-03-15',
      status: 'active',
      funds: ['Fund I', 'Fund II'],
      lastActivity: '2 days ago'
    },
    {
      id: '2',
      name: 'Sarah Smith',
      email: 'sarah@example.com',
      phone: '+1 (555) 234-5678',
      totalCommitment: 1000000,
      totalCalled: 700000,
      totalDistributed: 100000,
      currentNAV: 1100000,
      joinDate: '2022-01-10',
      status: 'active',
      funds: ['Fund II'],
      lastActivity: '1 week ago'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike@example.com',
      phone: '+1 (555) 345-6789',
      totalCommitment: 5000000,
      totalCalled: 3500000,
      totalDistributed: 1200000,
      currentNAV: 6800000,
      joinDate: '2020-06-20',
      status: 'active',
      funds: ['Fund I', 'Fund II'],
      lastActivity: '3 hours ago'
    }
  ];

  const filteredInvestors = investors.filter(investor => {
    const matchesSearch = investor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         investor.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || investor.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Investor Management</h1>
          <p className="text-gray-600">Manage and monitor all Limited Partners</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add Investor</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Investors</p>
              <p className="text-2xl font-bold text-gray-900">{investors.length}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Commitments</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(investors.reduce((sum, inv) => sum + inv.totalCommitment, 0))}
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Called</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(investors.reduce((sum, inv) => sum + inv.totalCalled, 0))}
              </p>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <Calendar className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total NAV</p>
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(investors.reduce((sum, inv) => sum + inv.currentNAV, 0))}
              </p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search investors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Investors Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Investors ({filteredInvestors.length})
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-6 font-medium text-gray-500">Investor</th>
                <th className="text-right py-3 px-6 font-medium text-gray-500">Commitment</th>
                <th className="text-right py-3 px-6 font-medium text-gray-500">Called</th>
                <th className="text-right py-3 px-6 font-medium text-gray-500">NAV</th>
                <th className="text-center py-3 px-6 font-medium text-gray-500">Funds</th>
                <th className="text-center py-3 px-6 font-medium text-gray-500">Last Activity</th>
                <th className="text-center py-3 px-6 font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredInvestors.map((investor) => (
                <tr key={investor.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-gray-900">{investor.name}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Mail className="h-3 w-3" />
                          <span>{investor.email}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Phone className="h-3 w-3" />
                          <span>{investor.phone}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right font-medium">
                    {formatCurrency(investor.totalCommitment)}
                  </td>
                  <td className="py-4 px-6 text-right font-medium">
                    {formatCurrency(investor.totalCalled)}
                  </td>
                  <td className="py-4 px-6 text-right font-medium text-green-600">
                    {formatCurrency(investor.currentNAV)}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center space-x-1">
                      {investor.funds.map((fund, index) => (
                        <span
                          key={index}
                          className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                        >
                          {fund}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-sm text-gray-500">
                    {investor.lastActivity}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex justify-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                        <Mail className="h-4 w-4" />
                      </button>
                    </div>
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