import React, { useState } from 'react';
import { Sparkles, Target, Brain, TrendingUp, MessageCircle, FileText, ArrowRight, Play } from 'lucide-react';

export const AIPreview: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const aiFeatures = [
    {
      id: 'exit-radar',
      title: 'Exit Opportunity Radar',
      description: 'AI identifies optimal exit timing and matches potential strategic acquirers',
      icon: Target,
      color: 'from-purple-500 to-blue-500',
      demo: {
        title: 'TechCorp Solutions - Exit Analysis',
        data: [
          { label: 'Exit Probability', value: '92%', trend: 'high' },
          { label: 'Optimal Window', value: 'Q1 2025', trend: 'optimal' },
          { label: 'Strategic Matches', value: '4 Identified', trend: 'good' }
        ]
      }
    },
    {
      id: 'performance-forecast',
      title: 'Performance Forecasting',
      description: 'ML models predict fund performance with 87% accuracy',
      icon: TrendingUp,
      color: 'from-green-500 to-teal-500',
      demo: {
        title: 'Fund II Performance Projection',
        data: [
          { label: 'Projected IRR', value: '26.5%', trend: 'high' },
          { label: 'TVPI Forecast', value: '2.8x', trend: 'excellent' },
          { label: 'Confidence', value: '87%', trend: 'high' }
        ]
      }
    },
    {
      id: 'risk-detection',
      title: 'Risk & Anomaly Detection',
      description: 'Proactive monitoring identifies portfolio risks 6 months early',
      icon: Brain,
      color: 'from-red-500 to-orange-500',
      demo: {
        title: 'Portfolio Risk Assessment',
        data: [
          { label: 'Companies Monitored', value: '24', trend: 'active' },
          { label: 'Alerts Generated', value: '3', trend: 'attention' },
          { label: 'Risk Score', value: 'Low', trend: 'good' }
        ]
      }
    }
  ];

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'high':
      case 'excellent':
      case 'good':
      case 'optimal':
        return 'text-green-600';
      case 'attention':
        return 'text-yellow-600';
      case 'active':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="font-medium">AI-Powered Investment Platform</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Advanced AI Tools for Smarter Investing
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of venture capital with our proprietary AI platform that 
            identifies opportunities, predicts performance, and mitigates risks.
          </p>
        </div>

        {/* Interactive AI Demo */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {aiFeatures.map((feature) => {
            const Icon = feature.icon;
            const isActive = activeDemo === feature.id;
            
            return (
              <div
                key={feature.id}
                className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                  isActive ? 'border-blue-500 scale-105' : 'border-transparent hover:border-gray-200'
                }`}
                onClick={() => setActiveDemo(isActive ? null : feature.id)}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="font-serif text-xl font-semibold text-slate-800 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                    <Play className="h-4 w-4" />
                    <span className="text-sm font-medium">View Demo</span>
                  </button>
                  {isActive && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  )}
                </div>

                {/* Demo Data */}
                {isActive && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-medium text-slate-800 mb-3">{feature.demo.title}</h4>
                    <div className="space-y-2">
                      {feature.demo.data.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm text-slate-600">{item.label}</span>
                          <span className={`text-sm font-medium ${getTrendColor(item.trend)}`}>
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* AI Capabilities Grid */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-semibold text-slate-800 mb-4">
              Complete AI Investment Suite
            </h3>
            <p className="text-slate-600">
              Our platform combines multiple AI technologies to deliver superior investment outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Document AI</h4>
              <p className="text-sm text-slate-600">Instant answers from investment documents using NLP</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Predictive Analytics</h4>
              <p className="text-sm text-slate-600">ML-powered forecasting for fund performance</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Exit Optimization</h4>
              <p className="text-sm text-slate-600">AI-driven exit timing and acquirer matching</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Auto Reporting</h4>
              <p className="text-sm text-slate-600">Automated tear sheet and report generation</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="font-serif text-2xl font-bold mb-4">
              Experience AI-Powered Investing
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join leading investors who use our AI platform to make smarter investment decisions 
              and achieve superior returns.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center space-x-2 mx-auto">
              <span>Request Platform Demo</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};