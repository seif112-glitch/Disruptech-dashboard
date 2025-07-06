import React, { useState } from 'react';
import { Mail, Send, Users, FileText, Calendar, Filter, Plus, Eye } from 'lucide-react';

export const BulkCommunication: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [selectedAudience, setSelectedAudience] = useState('all');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const templates = [
    {
      id: 'capital-call',
      name: 'Capital Call Notice',
      subject: 'Capital Call Notice - Fund II',
      content: 'Dear [INVESTOR_NAME],\n\nWe are pleased to inform you of a capital call for Fund II...'
    },
    {
      id: 'distribution',
      name: 'Distribution Notice',
      subject: 'Distribution Notice - Fund I',
      content: 'Dear [INVESTOR_NAME],\n\nWe are excited to announce a distribution from Fund I...'
    },
    {
      id: 'quarterly-update',
      name: 'Quarterly Update',
      subject: 'Q3 2024 Portfolio Update',
      content: 'Dear [INVESTOR_NAME],\n\nWe hope this message finds you well. We are pleased to share our Q3 2024 portfolio update...'
    },
    {
      id: 'annual-meeting',
      name: 'Annual Meeting Invitation',
      subject: 'Annual Investor Meeting - Save the Date',
      content: 'Dear [INVESTOR_NAME],\n\nYou are cordially invited to our Annual Investor Meeting...'
    }
  ];

  const audienceOptions = [
    { value: 'all', label: 'All Investors', count: 47 },
    { value: 'fund-i', label: 'Fund I Investors', count: 32 },
    { value: 'fund-ii', label: 'Fund II Investors', count: 28 },
    { value: 'high-net-worth', label: 'High Net Worth', count: 15 },
    { value: 'institutional', label: 'Institutional', count: 12 }
  ];

  const recentCampaigns = [
    {
      id: 1,
      subject: 'Q3 2024 Performance Update',
      audience: 'All Investors',
      sentDate: '2024-10-15',
      recipients: 47,
      openRate: 89,
      clickRate: 34,
      status: 'sent'
    },
    {
      id: 2,
      subject: 'Capital Call Notice - Fund II',
      audience: 'Fund II Investors',
      sentDate: '2024-10-10',
      recipients: 28,
      openRate: 96,
      clickRate: 78,
      status: 'sent'
    },
    {
      id: 3,
      subject: 'Annual Meeting Invitation',
      audience: 'All Investors',
      sentDate: '2024-09-25',
      recipients: 47,
      openRate: 92,
      clickRate: 45,
      status: 'sent'
    },
    {
      id: 4,
      subject: 'New Portfolio Company Announcement',
      audience: 'Fund II Investors',
      sentDate: '2024-09-20',
      recipients: 28,
      openRate: 85,
      clickRate: 28,
      status: 'sent'
    }
  ];

  const handleTemplateSelect = (templateId: string) => {
    const template = templates.find(t => t.id === templateId);
    if (template) {
      setSelectedTemplate(templateId);
      setSubject(template.subject);
      setMessage(template.content);
    }
  };

  const handleSend = () => {
    // Simulate sending
    alert('Campaign sent successfully!');
    setSubject('');
    setMessage('');
    setSelectedTemplate('');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Bulk Communication</h1>
          <p className="text-gray-600">Send targeted communications to investor groups</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Compose Message */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Compose Message</h3>
          
          <div className="space-y-6">
            {/* Template Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Template
              </label>
              <select
                value={selectedTemplate}
                onChange={(e) => handleTemplateSelect(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a template...</option>
                {templates.map((template) => (
                  <option key={template.id} value={template.id}>
                    {template.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Audience Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Audience
              </label>
              <select
                value={selectedAudience}
                onChange={(e) => setSelectedAudience(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {audienceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label} ({option.count} recipients)
                  </option>
                ))}
              </select>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject Line
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter email subject..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={12}
                placeholder="Enter your message..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
              <p className="text-xs text-gray-500 mt-2">
                Use [INVESTOR_NAME] for personalization
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
                  <FileText className="h-4 w-4" />
                  <span>Attach File</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
                  <Eye className="h-4 w-4" />
                  <span>Preview</span>
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Save Draft
                </button>
                <button
                  onClick={handleSend}
                  disabled={!subject || !message}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Campaign</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Campaign Stats */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign Stats</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Sent</span>
                <span className="font-medium">156</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Avg. Open Rate</span>
                <span className="font-medium text-green-600">90.5%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Avg. Click Rate</span>
                <span className="font-medium text-blue-600">46.3%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">This Month</span>
                <span className="font-medium">4 campaigns</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <Mail className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Send Capital Call</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <Calendar className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Schedule Update</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                <Users className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">Investor Survey</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Campaigns */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Campaigns</h3>
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-500">Subject</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500">Audience</th>
                <th className="text-right py-3 px-4 font-medium text-gray-500">Recipients</th>
                <th className="text-right py-3 px-4 font-medium text-gray-500">Open Rate</th>
                <th className="text-right py-3 px-4 font-medium text-gray-500">Click Rate</th>
                <th className="text-right py-3 px-4 font-medium text-gray-500">Sent Date</th>
              </tr>
            </thead>
            <tbody>
              {recentCampaigns.map((campaign) => (
                <tr key={campaign.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <p className="font-medium text-gray-900">{campaign.subject}</p>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{campaign.audience}</td>
                  <td className="py-4 px-4 text-right">{campaign.recipients}</td>
                  <td className="py-4 px-4 text-right">
                    <span className="text-green-600 font-medium">{campaign.openRate}%</span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <span className="text-blue-600 font-medium">{campaign.clickRate}%</span>
                  </td>
                  <td className="py-4 px-4 text-right text-gray-500">
                    {new Date(campaign.sentDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};