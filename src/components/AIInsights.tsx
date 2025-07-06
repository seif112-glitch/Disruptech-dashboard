import React from 'react';
import { TrendingUp, Target, Brain, BarChart3, Sparkles } from 'lucide-react';

export const AIInsights: React.FC = () => {
  const insights = [
    {
      icon: TrendingUp,
      title: "Market Opportunity",
      description: "AI analysis shows Egyptian tech market growing 35% annually",
      metric: "35% CAGR",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Target,
      title: "Investment Sweet Spot",
      description: "Optimal entry point for Series A rounds in MENA region",
      metric: "$500K-2M",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Brain,
      title: "AI-Driven Due Diligence",
      description: "Advanced analytics reduce investment risk by 40%",
      metric: "40% Risk Reduction",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Portfolio Performance",
      description: "AI-optimized portfolio allocation beats benchmark by 12%",
      metric: "+12% Alpha",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="font-medium">AI-Powered Insights</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Data-Driven Investment Intelligence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our proprietary AI platform analyzes market trends, startup metrics, and investment 
            patterns to identify the most promising opportunities in the Egyptian ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${insight.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="font-serif text-xl font-semibold text-slate-800 mb-3">
                  {insight.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {insight.description}
                </p>
                
                <div className={`inline-block bg-gradient-to-r ${insight.color} bg-clip-text text-transparent font-bold text-lg`}>
                  {insight.metric}
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Features Preview */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-semibold text-slate-800 mb-4">
              Advanced AI Tools for Investors
            </h3>
            <p className="text-slate-600">
              Get exclusive access to our AI-powered investment platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Exit Opportunity Radar</h4>
              <p className="text-sm text-slate-600">AI-powered exit timing and strategic acquirer matching</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Risk Detection</h4>
              <p className="text-sm text-slate-600">Proactive monitoring and anomaly detection for portfolio KPIs</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Performance Forecasting</h4>
              <p className="text-sm text-slate-600">ML-driven predictions for fund performance and returns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};