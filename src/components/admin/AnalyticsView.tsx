import React, { useState } from 'react';
import { BarChart3, TrendingUp, PieChart, Calendar, DollarSign, Users, Building2, Target } from 'lucide-react';

export const AnalyticsView: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('12m');

  const performanceData = [
    { period: 'Q1 2024', fundI: 115, fundII: 108, benchmark: 110 },
    { period: 'Q2 2024', fundI: 125, fundII: 115, benchmark: 118 },
    { period: 'Q3 2024', fundI: 135, fundII: 125, benchmark: 125 },
    { period: 'Q4 2024', fundI: 148, fundII: 135, benchmark: 130 }
  ];

  const sectorAllocation = [
    { sector: 'SaaS', percentage: 35, value: 15.2 },
    { sector: 'AI/ML', percentage: 25, value: 10.8 },
    { sector: 'FinTech', percentage: 20, value: 8.6 },
    { sector: 'HealthTech', percentage: 15, value: 6.5 },
    { sector: 'Other', percentage: 5, value: 2.2 }
  ];

  const keyMetrics = [
    {
      title: 'Total AUM',
      value: '$43.3M',
      change: '+8.2%',
      changeType: 'positive' as const,
      icon: DollarSign
    },
    {
      title: 'Portfolio Companies',
      value: '24',
      change: '+3 this quarter',
      changeType: 'positive' as const,
      icon: Building2
    },
    {
      title: 'Active Investors',
      value: '47',
      change: '+5 this quarter',
      changeType: 'positive' as const,
      icon: Users
    },
    {
      title: 'Avg. IRR',
      value: '22.4%',
      change: '+2.1% vs benchmark',
      changeType: 'positive' as const,
      icon: Target
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Comprehensive fund performance and portfolio analytics</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="3m">Last 3 months</option>
            <option value="6m">Last 6 months</option>
            <option value="12m">Last 12 months</option>
            <option value="all">All time</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className={`text-sm font-medium ${
                  metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Fund Performance vs Benchmark</h3>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Fund I</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Fund II</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <span>Benchmark</span>
              </div>
            </div>
          </div>
          
          <div className="h-64">
            <svg className="w-full h-full">
              <defs>
                <linearGradient id="fundIGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Grid lines */}
              {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
                <line
                  key={ratio}
                  x1="0"
                  y1={`${ratio * 100}%`}
                  x2="100%"
                  y2={`${ratio * 100}%`}
                  stroke="#E5E7EB"
                  strokeWidth="1"
                />
              ))}
              
              {/* Fund I line */}
              <path
                d={`M 0 ${100 - ((performanceData[0].fundI - 100) / 50) * 100} ${performanceData
                  .map((d, i) => `L ${(i / (performanceData.length - 1)) * 100} ${100 - ((d.fundI - 100) / 50) * 100}`)
                  .join(' ')}`}
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
              />
              
              {/* Fund II line */}
              <path
                d={`M 0 ${100 - ((performanceData[0].fundII - 100) / 50) * 100} ${performanceData
                  .map((d, i) => `L ${(i / (performanceData.length - 1)) * 100} ${100 - ((d.fundII - 100) / 50) * 100}`)
                  .join(' ')}`}
                fill="none"
                stroke="#10B981"
                strokeWidth="3"
              />
              
              {/* Benchmark line */}
              <path
                d={`M 0 ${100 - ((performanceData[0].benchmark - 100) / 50) * 100} ${performanceData
                  .map((d, i) => `L ${(i / (performanceData.length - 1)) * 100} ${100 - ((d.benchmark - 100) / 50) * 100}`)
                  .join(' ')}`}
                fill="none"
                stroke="#6B7280"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            </svg>
          </div>
          
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            {performanceData.map((d, i) => (
              <span key={i}>{d.period}</span>
            ))}
          </div>
        </div>

        {/* Sector Allocation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Portfolio Allocation by Sector</h3>
          
          <div className="space-y-4">
            {sectorAllocation.map((sector, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ 
                      backgroundColor: `hsl(${index * 60}, 70%, 50%)` 
                    }}
                  ></div>
                  <span className="text-sm font-medium text-gray-700">{sector.sector}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">${sector.value}M</p>
                  <p className="text-xs text-gray-500">{sector.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Total Portfolio Value</span>
              <span className="font-medium text-gray-900">$43.3M</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Capital Deployment</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Total Committed</span>
              <span className="font-medium">$50M</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Total Called</span>
              <span className="font-medium">$35M</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Deployment Rate</span>
              <span className="font-medium text-blue-600">70%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Investment Activity</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">New Investments (Q4)</span>
              <span className="font-medium">3</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Follow-on Rounds</span>
              <span className="font-medium">5</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Exits</span>
              <span className="font-medium">1</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Pipeline Companies</span>
              <span className="font-medium text-orange-600">12</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Risk Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Portfolio Beta</span>
              <span className="font-medium">1.2</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Sharpe Ratio</span>
              <span className="font-medium">1.8</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Max Drawdown</span>
              <span className="font-medium text-red-600">-8.5%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Volatility</span>
              <span className="font-medium">15.2%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};