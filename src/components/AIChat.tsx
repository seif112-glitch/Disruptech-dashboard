import React, { useState } from 'react';
import { MessageCircle, Send, Sparkles, X, Bot, User, Zap } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Hello! I'm DisrupTech's AI assistant. I can help you learn about Fund II, our AI-powered investment platform, portfolio companies, and answer questions about venture capital in Egypt. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const aiResponses = {
    'ai features': "Our AI platform includes Exit Opportunity Radar (92% accuracy in timing), Performance Forecasting (87% prediction accuracy), Risk Detection (identifies issues 6 months early), Document AI (instant answers from investment docs), and Automated Reporting. These tools help us achieve 12% alpha over benchmarks.",
    'fund size': "DisrupTech Fund II is targeting $50 million to invest in 25-30 early-stage Egyptian startups. We focus on Seed to Series A rounds with initial investments ranging from $100K to $2M, leveraging our AI platform for superior deal sourcing and due diligence.",
    'ai platform': "Our proprietary AI platform combines machine learning, natural language processing, and predictive analytics. It analyzes 500+ data points per company, monitors portfolio KPIs in real-time, and has helped us achieve a 28% net IRR in Fund I with 40% lower risk.",
    'portfolio': "Our AI-selected portfolio includes PayMob (FinTech), Vezeeta (HealthTech), Elmenus (FoodTech), and Rabbit (E-commerce). Fund I achieved a 28% net IRR and 2.4x multiple, with our AI platform identifying exit opportunities 18 months earlier than traditional methods.",
    'investment criteria': "We use AI to evaluate Egyptian tech startups across 15 key metrics including product-market fit, scalability potential, team strength, and market opportunity. Our AI scores companies on 500+ data points and has a 94% accuracy rate in predicting Series A success.",
    'performance': "Fund I performance: 28% net IRR, 2.4x multiple, 5 successful exits. Our AI platform contributed to 12% alpha generation vs benchmarks through better entry timing, risk management, and exit optimization. 87% of our AI predictions have been accurate.",
    'team': "Our team combines 15+ years of MENA investment experience with cutting-edge AI expertise. Led by Ahmed Hassan (ex-McKinsey), Sarah El-Masry (ex-Careem), and Omar Farouk (ex-Google), we've built proprietary AI tools that give us a significant competitive advantage.",
    'contact': "You can reach us at investors@disruptech.com or +20 2 1234 5678. We're located in New Cairo, Egypt. To see our AI platform in action, request a demo through our contact form or schedule a call with our team.",
    'demo': "I'd love to show you our AI platform! You can request a personalized demo by contacting us at investors@disruptech.com. The demo includes live AI analysis of portfolio companies, real-time risk monitoring, and our exit opportunity radar in action."
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

    // Simulate AI processing
    setTimeout(() => {
      const lowerInput = inputMessage.toLowerCase();
      let response = "Thank you for your question! Our AI-powered investment platform is designed to identify the best opportunities in Egypt's growing tech ecosystem. For detailed information about Fund II or to see our AI tools in action, I recommend requesting a demo at investors@disruptech.com.";

      // Check for AI-specific responses
      for (const [key, answer] of Object.entries(aiResponses)) {
        if (lowerInput.includes(key)) {
          response = answer;
          break;
        }
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);

    setInputMessage('');
  };

  const suggestedQuestions = [
    "Tell me about your AI features",
    "What is your fund size?",
    "How does your AI platform work?",
    "Show me portfolio performance",
    "Request a platform demo"
  ];

  return (
    <>
      {/* AI Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 group"
      >
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Sparkles className="h-6 w-6" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <span className="hidden group-hover:block text-sm font-medium whitespace-nowrap">
            AI Assistant
          </span>
        </div>
      </button>

      {/* AI Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Bot className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">DisrupTech AI Assistant</h3>
                    <div className="flex items-center space-x-2 text-sm text-blue-100">
                      <Zap className="h-3 w-3" />
                      <span>Powered by advanced AI</span>
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

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-xs ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
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
                      <p className={`text-xs mt-1 ${
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
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="bg-gray-100 text-gray-900 px-4 py-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="px-4 py-2 border-t border-gray-200 bg-gray-50">
                <p className="text-xs font-medium text-gray-700 mb-2">Try asking:</p>
                <div className="space-y-1">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => setInputMessage(question)}
                      className="text-left w-full p-2 text-xs text-blue-600 hover:bg-blue-50 rounded transition-colors"
                    >
                      "{question}"
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask about our AI platform..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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