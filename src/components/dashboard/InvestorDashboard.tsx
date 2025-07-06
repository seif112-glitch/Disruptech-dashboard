import React from 'react';
import { MetricsCard } from './MetricsCard';
import { PortfolioChart } from './PortfolioChart';
import { RecentActivity } from './RecentActivity';
import { 
  DollarSign, 
  TrendingUp, 
  PieChart, 
  BarChart3,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

export const InvestorDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Portfolio Overview</h1>
          <p className="text-gray-600">Welcome back! Here's your investment summary.</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span>Last updated: Today, 2:30 PM</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricsCard
          title="Total Commitment"
          value="$2.5M"
          change="+$500K this quarter"
          changeType="positive"
          icon={DollarSign}
        />
        <MetricsCard
          title="Current NAV"
          value="$3.2M"
          change="+12.4% vs last quarter"
          changeType="positive"
          icon={TrendingUp}
        />
        <MetricsCard
          title="TVPI"
          value="1.48x"
          change="+0.12x this quarter"
          changeType="positive"
          icon={BarChart3}
        />
        <MetricsCard
          title="IRR"
          value="18.2%"
          change="+2.1% this quarter"
          changeType="positive"
          icon={PieChart}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Portfolio Performance</h3>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Last 12 months</option>
              <option>Last 6 months</option>
              <option>Last 3 months</option>
            </select>
          </div>
          <PortfolioChart />
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Fund Allocation</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Fund I</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">$1.2M</p>
                <p className="text-xs text-gray-500">48%</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Fund II</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">$800K</p>
                <p className="text-xs text-gray-500">32%</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Fund III</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">$500K</p>
                <p className="text-xs text-gray-500">20%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Performing Companies</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TC</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">TechCorp</p>
                  <p className="text-xs text-gray-500">SaaS Platform</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1 text-green-600">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="text-sm font-medium">+24.5%</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">AI Solutions</p>
                  <p className="text-xs text-gray-500">AI/ML Platform</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1 text-green-600">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="text-sm font-medium">+18.2%</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FT</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">FinTech Pro</p>
                  <p className="text-xs text-gray-500">Financial Services</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1 text-red-600">
                  <ArrowDownRight className="h-4 w-4" />
                  <span className="text-sm font-medium">-5.1%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};