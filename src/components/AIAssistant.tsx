import React, { useState } from 'react';
import { MessageCircle, Send, Sparkles, X, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Hello! I'm the DisrupTech AI Assistant. I can help you learn about Fund II, our investment criteria, portfolio companies, and answer any questions about venture capital in Egypt. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const predefinedResponses = {
    'fund size': "DisrupTech Fund II is targeting $50 million to invest in 25-30 early-stage Egyptian startups. We focus on Seed to Series A rounds with initial investments ranging from $100K to $2M.",
    'investment criteria': "We invest in Egyptian tech startups with strong product-market fit, scalable business models, and regional expansion potential. Our focus sectors include SaaS, FinTech, HealthTech, EdTech, and E-commerce.",
    'portfolio': "Our portfolio includes successful companies like PayMob (FinTech), Vezeeta (HealthTech), Elmenus (FoodTech), and Rabbit (E-commerce). Fund I achieved a 28% net IRR with a 2.4x multiple.",
    'team': "Our team is led by Ahmed Hassan (Managing Partner, ex-McKinsey), Sarah El-Masry (Investment Partner, ex-Careem), and Omar Farouk (Principal, ex-Google). We have 15+ years of combined MENA investment experience.",
    'application': "To apply for funding, startups should have an Egyptian presence, be in the tech sector, and demonstrate traction. We evaluate based on team strength, market opportunity, product differentiation, and scalability potential.",
    'contact': "You can reach us at investors@disruptech.com or +20 2 1234 5678. Our office is located in New Cairo, Egypt. We're always open to meeting promising entrepreneurs and qualified investors."
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
      let response = "Thank you for your question! For detailed information about DisrupTech Fund II, I recommend downloading our fund deck or contacting our team directly. Is there anything specific about our investment focus or portfolio you'd like to know more about?";

      // Check for predefined responses
      for (const [key, answer] of Object.entries(predefinedResponses)) {
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
    "What is your fund size?",
    "What are your investment criteria?",
    "Tell me about your portfolio",
    "How can I apply for funding?"
  ];

  return (
    <>
      {/* AI Assistant Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-teal-600 to-slate-700 text-white p-4 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 group"
      >
        <div className="flex items-center space-x-2">
          <Sparkles className="h-6 w-6" />
          <span className="hidden group-hover:block text-sm font-medium whitespace-nowrap">
            Ask AI Assistant
          </span>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
      </button>

      {/* AI Assistant Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-teal-600 to-slate-700 text-white rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Bot className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">DisrupTech AI Assistant</h3>
                    <p className="text-sm text-teal-100">Powered by advanced AI</p>
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
                        ? 'bg-teal-600 text-white' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {message.type === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                    </div>
                    <div
                      className={`px-4 py-3 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-teal-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.type === 'user' ? 'text-teal-100' : 'text-gray-500'
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
                    <div className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center">
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
                      className="text-left w-full p-2 text-xs text-teal-600 hover:bg-teal-50 rounded transition-colors"
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
                  placeholder="Ask me anything about DisrupTech..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-teal-600 text-white p-2 rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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