import React, { useState } from 'react';
import { MessageCircle, Send, FileText, Search, Sparkles, Clock } from 'lucide-react';

export const AskTheDocsAssistant: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      id: '1',
      type: 'assistant' as const,
      content: "Hello! I'm your AI document assistant. I can help you find information from your investment documents. Try asking me about capital commitments, key person clauses, or fund performance.",
      timestamp: new Date(Date.now() - 60000)
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const predefinedQA = {
    'capital commitment': {
      question: 'What is my remaining capital commitment for Fund II?',
      answer: 'Based on your subscription agreement for Fund II, your total capital commitment is $1,000,000. As of the latest capital call (October 2024), $700,000 has been called, leaving a remaining commitment of $300,000.',
      source: 'Fund II Subscription Agreement, Section 3.1'
    },
    'key person clause': {
      question: 'Summarize the key person clause in the LPA',
      answer: 'The key person clause in the Limited Partnership Agreement states that if two or more of the designated key persons (John Smith, Sarah Johnson, Mike Chen) cease to devote substantially all of their business time to the fund, limited partners may elect to suspend new investments and accelerate the investment period.',
      source: 'Limited Partnership Agreement, Section 7.3'
    },
    'fund performance': {
      question: 'How is Fund I performing?',
      answer: 'Fund I is performing well with a current TVPI of 1.48x and an IRR of 18.2%. The fund has made distributions totaling $500K to date, representing a DPI of 0.35x. The current NAV stands at $3.2M.',
      source: 'Q3 2024 Fund Report, Performance Summary'
    },
    'distribution policy': {
      question: 'What is the distribution policy?',
      answer: 'Distributions follow a waterfall structure: (1) Return of capital to LPs, (2) 8% preferred return to LPs, (3) 20% catch-up to GP, (4) 80/20 split thereafter. Distributions are made quarterly when cash is available.',
      source: 'Limited Partnership Agreement, Section 5.2'
    }
  };

  const suggestedQuestions = [
    'What is my remaining capital commitment for Fund II?',
    'Summarize the key person clause in the LPA',
    'How is Fund I performing?',
    'What is the distribution policy?'
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      type: 'user' as const,
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI processing
    setTimeout(() => {
      const lowerInput = inputMessage.toLowerCase();
      let response = "I'm still learning about your documents. Please try asking about 'capital commitment', 'key person clause', 'fund performance', or 'distribution policy'.";
      let source = '';

      // Check for predefined responses
      for (const [key, qa] of Object.entries(predefinedQA)) {
        if (lowerInput.includes(key)) {
          response = qa.answer;
          source = qa.source;
          break;
        }
      }

      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant' as const,
        content: response,
        source: source,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);

    setInputMessage('');
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputMessage(question);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <MessageCircle className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">"Ask the Docs" AI Assistant</h2>
            <p className="text-gray-600">Get instant answers from your investment documents</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm text-blue-600 bg-blue-50 px-3 py-2 rounded-lg">
          <Sparkles className="h-4 w-4" />
          <span>AI Powered</span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-[600px] flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Document AI Assistant</h3>
              <p className="text-sm text-gray-500">Connected to 47 documents</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                {message.source && (
                  <div className="mt-2 pt-2 border-t border-gray-300">
                    <div className="flex items-center space-x-1 text-xs text-gray-600">
                      <FileText className="h-3 w-3" />
                      <span>{message.source}</span>
                    </div>
                  </div>
                )}
                <p className={`text-xs mt-1 ${
                  message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-900 px-4 py-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span className="text-sm text-gray-500">AI is analyzing documents...</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Suggested Questions */}
        {messages.length === 1 && (
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <p className="text-sm font-medium text-gray-700 mb-3">Try asking:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestedQuestion(question)}
                  className="text-left p-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
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
              placeholder="Ask me anything about your documents..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};