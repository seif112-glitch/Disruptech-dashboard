import React, { useState } from 'react';
import { MessageCircle, Send, Sparkles, X, Bot, User, FileText, TrendingUp, Target, Brain } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  attachments?: Array<{
    type: 'chart' | 'document' | 'insight';
    title: string;
    data?: any;
  }>;
}

export const EnhancedAIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Hello! I'm your AI investment assistant. I can help you with fund performance, portfolio analysis, market insights, and document queries. I have access to real-time data and can generate custom reports. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const enhancedResponses = {
    'fund performance': {
      content: "Fund II is performing exceptionally well. Here's the latest analysis:",
      attachments: [{
        type: 'chart' as const,
        title: 'Performance Metrics',
        data: {
          tvpi: '1.48x',
          irr: '18.2%',
          dpi: '0.35x',
          nav: '$3.2M'
        }
      }]
    },
    'portfolio analysis': {
      content: "I've analyzed your portfolio companies using our AI models. Here are the key insights:",
      attachments: [{
        type: 'insight' as const,
        title: 'Portfolio Health Score',
        data: {
          overall: '87/100',
          topPerformer: 'TechCorp (+24.5%)',
          riskAlert: 'FinTech Pro (runway concern)',
          recommendation: 'Consider follow-on investment in TechCorp'
        }
      }]
    },
    'market insights': {
      content: "Based on real-time market analysis, here are the current opportunities:",
      attachments: [{
        type: 'insight' as const,
        title: 'Market Intelligence',
        data: {
          hotSector: 'FinTech (+45% growth)',
          dealFlow: '12 qualified Series A companies',
          valuation: 'Favorable entry multiples',
          timing: 'Optimal deployment window'
        }
      }]
    },
    'exit opportunities': {
      content: "Our AI has identified several exit opportunities in your portfolio:",
      attachments: [{
        type: 'insight' as const,
        title: 'Exit Radar Analysis',
        data: {
          readyForExit: 'TechCorp (Q1 2025)',
          potentialAcquirers: '4 strategic matches',
          exitProbability: '92%',
          projectedMultiple: '3.2x'
        }
      }]
    },
    'risk analysis': {
      content: "I've detected some portfolio risks that need attention:",
      attachments: [{
        type: 'insight' as const,
        title: 'Risk Assessment',
        data: {
          highRisk: '1 company',
          mediumRisk: '2 companies',
          lowRisk: '9 companies',
          action: 'Monitor FinTech Pro burn rate'
        }
      }]
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const lowerInput = inputMessage.toLowerCase();
      let response = {
        content: "I can help you with fund performance, portfolio analysis, market insights, exit opportunities, and risk analysis. I also have access to all your investment documents. What specific information would you like?",
        attachments: undefined
      };

      // Check for enhanced responses
      for (const [key, answer] of Object.entries(enhancedResponses)) {
        if (lowerInput.includes(key.replace(' ', ''))) {
          response = answer;
          break;
        }
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response.content,
        attachments: response.attachments,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);

    setInputMessage('');
  };

  const quickActions = [
    { label: "Fund Performance", icon: TrendingUp, query: "fund performance" },
    { label: "Portfolio Analysis", icon: Target, query: "portfolio analysis" },
    { label: "Market Insights", icon: Brain, query: "market insights" },
    { label: "Exit Opportunities", icon: FileText, query: "exit opportunities" }
  ];

  const renderAttachment = (attachment: any) => {
    if (attachment.type === 'chart') {
      return (
        <div className="mt-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h5 className="font-medium text-blue-900 mb-3">{attachment.title}</h5>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(attachment.data).map(([key, value]) => (
              <div key={key} className="text-center">
                <p className="text-lg font-bold text-blue-800">{value as string}</p>
                <p className="text-xs text-blue-600 uppercase">{key}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (attachment.type === 'insight') {
      return (
        <div className="mt-3 p-4 bg-green-50 rounded-lg border border-green-200">
          <h5 className="font-medium text-green-900 mb-3">{attachment.title}</h5>
          <div className="space-y-2">
            {Object.entries(attachment.data).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="text-sm text-green-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                <span className="text-sm font-medium text-green-800">{value as string}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {/* Enhanced AI Assistant Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-teal-600 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 group"
      >
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Sparkles className="h-6 w-6" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <span className="hidden group-hover:block text-sm font-medium whitespace-nowrap">
            AI Investment Assistant
          </span>
        </div>
      </button>

      {/* Enhanced AI Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg h-[700px] flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Bot className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Investment Assistant</h3>
                    <div className="flex items-center space-x-2 text-sm text-teal-100">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Connected to live data</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <p className="text-xs font-medium text-gray-700 mb-3">Quick Actions:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => setInputMessage(action.query)}
                      className="flex items-center space-x-2 p-2 bg-white rounded-lg hover:bg-blue-50 transition-colors text-left"
                    >
                      <Icon className="h-4 w-4 text-blue-600" />
                      <span className="text-xs text-gray-700">{action.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-sm ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
                    }`}>
                      {message.type === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                    </div>
                    <div
                      className={`px-4 py-3 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      {message.attachments && message.attachments.map((attachment, index) => (
                        <div key={index}>
                          {renderAttachment(attachment)}
                        </div>
                      ))}
                      <p className={`text-xs mt-2 ${
                        message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="bg-gray-100 text-gray-900 px-4 py-3 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        <span className="text-xs text-gray-500">Analyzing data...</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask about performance, portfolio, or market insights..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-2 rounded-lg hover:from-teal-700 hover:to-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};