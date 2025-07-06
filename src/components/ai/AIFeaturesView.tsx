import React, { useState } from 'react';
import { Target, MessageCircle, TrendingUp, AlertTriangle, FileText, Sparkles } from 'lucide-react';
import { ExitOpportunityRadar } from './ExitOpportunityRadar';
import { AskTheDocsAssistant } from './AskTheDocsAssistant';
import { PerformanceForecasting } from './PerformanceForecasting';
import { RiskAnomalyDetection } from './RiskAnomalyDetection';
import { TearSheetGenerator } from './TearSheetGenerator';

export const AIFeaturesView: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState('exit-radar');

  const features = [
    {
      id: 'exit-radar',
      name: 'Exit Opportunity Radar',
      icon: Target,
      description: 'AI-powered exit timing and acquirer matching',
      color: 'teal'
    },
    {
      id: 'ask-docs',
      name: 'Ask the Docs Assistant',
      icon: MessageCircle,
      description: 'Conversational AI for document queries',
      color: 'slate'
    },
    {
      id: 'forecasting',
      name: 'Performance Forecasting',
      icon: TrendingUp,
      description: 'AI-generated fund performance predictions',
      color: 'green'
    },
    {
      id: 'risk-detection',
      name: 'Risk & Anomaly Detection',
      icon: AlertTriangle,
      description: 'Proactive monitoring of portfolio KPIs',
      color: 'red'
    },
    {
      id: 'tear-sheets',
      name: 'Tear Sheet Generator',
      icon: FileText,
      description: 'Automated company report generation',
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string, active: boolean) => {
    const colors = {
      teal: active ? 'bg-teal-600 text-white' : 'text-teal-600 hover:bg-teal-50',
      slate: active ? 'bg-slate-600 text-white' : 'text-slate-600 hover:bg-slate-50',
      green: active ? 'bg-green-600 text-white' : 'text-green-600 hover:bg-green-50',
      red: active ? 'bg-red-600 text-white' : 'text-red-600 hover:bg-red-50',
      orange: active ? 'bg-orange-600 text-white' : 'text-orange-600 hover:bg-orange-50'
    };
    return colors[color as keyof typeof colors] || colors.slate;
  };

  const renderActiveFeature = () => {
    switch (activeFeature) {
      case 'exit-radar':
        return <ExitOpportunityRadar />;
      case 'ask-docs':
        return <AskTheDocsAssistant />;
      case 'forecasting':
        return <PerformanceForecasting />;
      case 'risk-detection':
        return <RiskAnomalyDetection />;
      case 'tear-sheets':
        return <TearSheetGenerator />;
      default:
        return <ExitOpportunityRadar />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-teal-500 to-slate-600 rounded-lg">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">AI-Powered Features</h1>
            <p className="text-gray-600">Advanced artificial intelligence tools for investment management</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm text-teal-600 bg-teal-50 px-3 py-2 rounded-lg">
          <Sparkles className="h-4 w-4" />
          <span>Demo Environment</span>
        </div>
      </div>

      {/* Feature Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Select AI Feature</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            const isActive = activeFeature === feature.id;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  isActive 
                    ? `border-${feature.color}-500 ${getColorClasses(feature.color, true)}` 
                    : `border-gray-200 ${getColorClasses(feature.color, false)}`
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <Icon className="h-8 w-8" />
                  <div>
                    <p className="font-medium">{feature.name}</p>
                    <p className={`text-xs mt-1 ${isActive ? 'text-white opacity-90' : 'text-gray-500'}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Feature Content */}
      <div>
        {renderActiveFeature()}
      </div>

      {/* Demo Notice */}
      <div className="bg-gradient-to-r from-teal-50 to-slate-50 rounded-xl p-6 border border-teal-200">
        <div className="flex items-start space-x-3">
          <Sparkles className="h-6 w-6 text-teal-600 mt-1" />
          <div>
            <h3 className="font-medium text-slate-800 mb-2">AI Features Demo</h3>
            <p className="text-sm text-slate-700">
              These advanced AI features represent the future vision of the Disruptech Ventures platform. 
              All data shown is simulated for demonstration purposes. The actual implementation would 
              integrate with real-time data sources, machine learning models, and external APIs to provide 
              genuine insights and automation capabilities.
            </p>
            <div className="mt-3 text-xs text-slate-600">
              Features include: Machine Learning Models • Natural Language Processing • Predictive Analytics • Real-time Monitoring • Automated Report Generation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};