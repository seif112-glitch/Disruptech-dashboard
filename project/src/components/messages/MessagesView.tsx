import React, { useState } from 'react';
import { Send, Paperclip, Search, Plus, MessageCircle, Clock } from 'lucide-react';

export const MessagesView: React.FC = () => {
  const [selectedThread, setSelectedThread] = useState<string | null>('1');
  const [newMessage, setNewMessage] = useState('');

  const threads = [
    {
      id: '1',
      subject: 'Q3 Performance Review',
      participants: ['John Doe', 'Fund Manager'],
      lastMessage: 'Thank you for the detailed analysis. The performance metrics look promising.',
      timestamp: '2 hours ago',
      unread: false
    },
    {
      id: '2',
      subject: 'Capital Call Questions',
      participants: ['Sarah Smith', 'Fund Manager'],
      lastMessage: 'I have a few questions about the upcoming capital call.',
      timestamp: '1 day ago',
      unread: true
    },
    {
      id: '3',
      subject: 'Annual Meeting Agenda',
      participants: ['Mike Johnson', 'Fund Manager'],
      lastMessage: 'The agenda for the annual meeting has been finalized.',
      timestamp: '3 days ago',
      unread: false
    }
  ];

  const messages = [
    {
      id: '1',
      threadId: '1',
      sender: 'Fund Manager',
      content: 'Hi John, I wanted to share our Q3 performance review with you. Overall, the fund has performed well with a 12.4% increase in NAV.',
      timestamp: '2 days ago',
      isOwn: false
    },
    {
      id: '2',
      threadId: '1',
      sender: 'John Doe',
      content: 'Thank you for the update. The numbers look great! Could you provide more details about the top-performing companies?',
      timestamp: '2 days ago',
      isOwn: true
    },
    {
      id: '3',
      threadId: '1',
      sender: 'Fund Manager',
      content: 'Absolutely! TechCorp has shown exceptional growth with a 24.5% increase in valuation. AI Solutions has also performed well with an 18.2% increase.',
      timestamp: '1 day ago',
      isOwn: false
    },
    {
      id: '4',
      threadId: '1',
      sender: 'John Doe',
      content: 'Thank you for the detailed analysis. The performance metrics look promising.',
      timestamp: '2 hours ago',
      isOwn: true
    }
  ];

  const currentMessages = messages.filter(msg => msg.threadId === selectedThread);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600">Secure communication with the Disruptech team</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>New Message</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-[600px] flex">
        {/* Threads List */}
        <div className="w-1/3 border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {threads.map((thread) => (
              <div
                key={thread.id}
                onClick={() => setSelectedThread(thread.id)}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedThread === thread.id ? 'bg-blue-50 border-blue-200' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900 truncate">{thread.subject}</h4>
                  {thread.unread && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  {thread.participants.join(', ')}
                </p>
                <p className="text-sm text-gray-500 truncate mb-1">
                  {thread.lastMessage}
                </p>
                <div className="flex items-center space-x-1 text-xs text-gray-400">
                  <Clock className="h-3 w-3" />
                  <span>{thread.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 flex flex-col">
          {selectedThread ? (
            <>
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-medium text-gray-900">
                  {threads.find(t => t.id === selectedThread)?.subject}
                </h3>
                <p className="text-sm text-gray-500">
                  {threads.find(t => t.id === selectedThread)?.participants.join(', ')}
                </p>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {currentMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                        message.isOwn
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.isOwn ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Paperclip className="h-4 w-4" />
                  </button>
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Select a conversation to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};