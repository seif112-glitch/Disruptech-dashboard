import React, { useState } from 'react';
import { Target, TrendingUp, Calendar, Building2, Star, ExternalLink } from 'lucide-react';

export const ExitOpportunityRadar: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState('techcorp');

  const companies = [
    { id: 'techcorp', name: 'TechCorp Solutions', sector: 'SaaS' },
    { id: 'aiinnovations', name: 'AI Innovations', sector: 'AI/ML' },
    { id: 'fintechpro', name: 'FinTech Pro', sector: 'Financial Services' }
  ];

  const exitWindows = [
    { period: 'Q1 2025', status: 'optimal', confidence: 92 },
    { period: 'Q2 2025', status: 'good', confidence: 78 },
    { period: 'Q3 2025', status: 'possible', confidence: 65 },
    { period: 'Q4 2025', status: 'suboptimal', confidence: 45 }
  ];

  const potentialAcquirers = [
    {
      name: 'Microsoft Corporation',
      logo: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=100',
      matchScore: 94,
      rationale: 'Strong strategic fit with Azure cloud services',
      marketCap: '$2.8T',
      recentActivity: '3 similar acquisitions in 2024'
    },
    {
      name: 'Salesforce Inc.',
      logo: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=100',
      matchScore: 88,
      rationale: 'Complementary CRM integration capabilities',
      marketCap: '$245B',
      recentActivity: '2 SaaS acquisitions this year'
    },
    {
      name: 'Oracle Corporation',
      logo: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=100',
      matchScore: 82,
      rationale: 'Enterprise software portfolio expansion',
      marketCap: '$385B',
      recentActivity: 'Active in cloud acquisitions'
    },
    {
      name: 'Adobe Inc.',
      logo: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=100',
      matchScore: 76,
      rationale: 'Digital experience platform synergies',
      marketCap: '$210B',
      recentActivity: '1 strategic acquisition in Q3'
    }
  ];

  const getWindowColor = (status: string) => {
    switch (status) {
      case 'optimal': return 'bg-green-500';
      case 'good': return 'bg-blue-500';
      case 'possible': return 'bg-yellow-500';
      case 'suboptimal': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-50';
    if (score >= 80) return 'text-blue-600 bg-blue-50';
    if (score >= 70) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-purple-50 rounded-lg">
            <Target className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Strategic Exit Opportunity Radar</h2>
            <p className="text-gray-600">AI-powered exit timing and acquirer matching</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm text-green-600 bg-green-50 px-3 py-2 rounded-lg">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>AI Analysis Active</span>
        </div>
      </div>

      {/* Company Selector */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Portfolio Company</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {companies.map((company) => (
            <button
              key={company.id}
              onClick={() => setSelectedCompany(company.id)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedCompany === company.id
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">{company.name}</p>
                  <p className="text-sm text-gray-500">{company.sector}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Exit Timeline */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Optimal Exit Windows</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
              <span>Next 12 months</span>
            </div>
          </div>
          
          <div className="space-y-4">
            {exitWindows.map((window, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full ${getWindowColor(window.status)}`}></div>
                    <div>
                      <p className="font-medium text-gray-900">{window.period}</p>
                      <p className="text-sm text-gray-500 capitalize">{window.status} window</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{window.confidence}%</p>
                    <p className="text-sm text-gray-500">Confidence</p>
                  </div>
                </div>
                {index === 0 && (
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                      <Star className="h-3 w-3" />
                      <span>Best</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Market Conditions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Market Conditions Analysis</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-900">SaaS Valuations</span>
              </div>
              <span className="text-sm font-medium text-green-600">+15% YoY</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Building2 className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-900">M&A Activity</span>
              </div>
              <span className="text-sm font-medium text-blue-600">High</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Target className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-900">Strategic Interest</span>
              </div>
              <span className="text-sm font-medium text-purple-600">Very High</span>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>AI Insight:</strong> Current market conditions favor strategic exits in the SaaS sector. 
              Enterprise software acquisitions are up 23% this quarter, with premium valuations for 
              companies with strong recurring revenue models.
            </p>
          </div>
        </div>
      </div>

      {/* Potential Acquirers */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Potential Strategic Acquirers</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {potentialAcquirers.map((acquirer, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={acquirer.logo}
                    alt={acquirer.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{acquirer.name}</h4>
                    <p className="text-sm text-gray-500">{acquirer.marketCap}</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${getMatchScoreColor(acquirer.matchScore)}`}>
                  {acquirer.matchScore}% Match
                </div>
              </div>
              
              <p className="text-sm text-gray-700 mb-3">{acquirer.rationale}</p>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{acquirer.recentActivity}</span>
                <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700">
                  <span>View Details</span>
                  <ExternalLink className="h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};