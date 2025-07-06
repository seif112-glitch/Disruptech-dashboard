import React, { useState } from 'react';
import { FileText, Download, Calendar, Search, Filter, Eye } from 'lucide-react';

export const DocumentsView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const documents = [
    {
      id: 1,
      title: 'Q3 2024 Fund Report',
      type: 'financial',
      category: 'Quarterly Report',
      uploadDate: '2024-10-15',
      size: '2.4 MB',
      fund: 'Fund I'
    },
    {
      id: 2,
      title: 'Partnership Agreement Amendment',
      type: 'legal',
      category: 'Legal Document',
      uploadDate: '2024-09-20',
      size: '1.8 MB',
      fund: 'Fund I'
    },
    {
      id: 3,
      title: 'Capital Call Notice #5',
      type: 'financial',
      category: 'Capital Call',
      uploadDate: '2024-10-10',
      size: '0.5 MB',
      fund: 'Fund II'
    },
    {
      id: 4,
      title: 'Tax Document K-1',
      type: 'tax',
      category: 'Tax Document',
      uploadDate: '2024-03-15',
      size: '0.8 MB',
      fund: 'Fund I'
    },
    {
      id: 5,
      title: 'Annual Report 2023',
      type: 'report',
      category: 'Annual Report',
      uploadDate: '2024-01-30',
      size: '5.2 MB',
      fund: 'Fund I'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Documents' },
    { value: 'financial', label: 'Financial' },
    { value: 'legal', label: 'Legal' },
    { value: 'tax', label: 'Tax' },
    { value: 'report', label: 'Reports' }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDocumentIcon = (type: string) => {
    switch (type) {
      case 'financial':
        return 'bg-green-100 text-green-600';
      case 'legal':
        return 'bg-blue-100 text-blue-600';
      case 'tax':
        return 'bg-purple-100 text-purple-600';
      case 'report':
        return 'bg-orange-100 text-orange-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Document Center</h1>
          <p className="text-gray-600">Access all your investment documents in one secure location</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Documents List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Documents ({filteredDocuments.length})
          </h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {filteredDocuments.map((document) => (
            <div key={document.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${getDocumentIcon(document.type)}`}>
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{document.title}</h4>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-sm text-gray-500">{document.category}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{document.fund}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{document.size}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="text-right mr-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(document.uploadDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};