import React, { useState } from 'react';
import { TrendingUp, BarChart3, PieChart, Zap, RefreshCw, Target, Brain } from 'lucide-react';

export const AIMarketInsights: React.FC = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const marketData = [
    {
      metric: 'Egyptian Tech Market Size',
      value: '$2.8B',
      change: '+35%',
      trend: 'up',
      aiInsight: 'AI predicts 40% growth in 2025 driven by fintech expansion'
    },
    {
      metric: 'Active Startups',
      value: '1,200+',
      change: '+28%',
      trend: 'up',
      aiInsight: 'ML models identify 300+ Series A ready companies'
    },
    {
      metric: 'Total Funding YTD',
      value: '$450M',
      change: '+52%',
      trend: 'up',
      aiInsight: 'AI forecasts $600M+ total funding by year-end'
    },
    {
      metric: 'Average Series A',
      value: '$2.5M',
      change: '+15%',
      trend: 'up',
      aiInsight: 'Optimal entry point identified by valuation models'
    }
  ];

  const sectorInsights = [
    { sector: 'FinTech', growth: '+45%', aiScore: 94, companies: 180 },
    { sector: 'HealthTech', growth: '+38%', aiScore: 87, companies: 95 },
    { sector: 'E-commerce', growth: '+32%', aiScore: 82, companies: 220 },
    { sector: 'EdTech', growth: '+29%', aiScore: 79, companies: 140 }
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastUpdated(new Date());
    }, 2000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
            <Zap className="h-4 w-4" />
            <span className="font-medium">Real-Time AI Market Analysis</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            AI-Powered Market Intelligence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our AI continuously analyzes market trends, startup metrics, and investment patterns 
            to identify the most promising opportunities in Egypt's tech ecosystem.
          </p>
        </div>

        {/* Real-time Market Metrics */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-slate-800">Live Market Data</h3>
                <p className="text-slate-600">Updated every 15 minutes by AI algorithms</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-500">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </span>
              <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="p-2 bg-white rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`h-4 w-4 text-slate-600 ${isRefreshing ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketData.map((data, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-slate-800">{data.metric}</h4>
                  <div className="flex items-center space-x-1 text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">{data.change}</span>
                  </div>
                </div>
                <p className="text-3xl font-bold text-slate-900 mb-3">{data.value}</p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="flex items-start space-x-2">
                    <Brain className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-blue-800">{data.aiInsight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sector Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-serif text-xl font-semibold text-slate-800 mb-6">
              AI Sector Scoring
            </h3>
            <div className="space-y-4">
              {sectorInsights.map((sector, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{sector.sector.slice(0, 2)}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800">{sector.sector}</h4>
                      <p className="text-sm text-slate-600">{sector.companies} companies</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-medium text-green-600">{sector.growth}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-slate-500">AI Score:</span>
                      <span className="text-sm font-bold text-blue-600">{sector.aiScore}/100</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-serif text-xl font-semibold text-slate-800 mb-6">
              Investment Opportunities
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="h-4 w-4 text-green-600" />
                  <h4 className="font-medium text-green-800">High Confidence</h4>
                </div>
                <p className="text-sm text-green-700">
                  AI identifies 12 companies ready for Series A funding with 85%+ success probability
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <PieChart className="h-4 w-4 text-blue-600" />
                  <h4 className="font-medium text-blue-800">Portfolio Optimization</h4>
                </div>
                <p className="text-sm text-blue-700">
                  Recommended allocation: 40% FinTech, 25% HealthTech, 20% E-commerce, 15% EdTech
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-r-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Brain className="h-4 w-4 text-purple-600" />
                  <h4 className="font-medium text-purple-800">Market Timing</h4>
                </div>
                <p className="text-sm text-purple-700">
                  AI suggests increasing deployment pace by 25% to capitalize on current valuations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};