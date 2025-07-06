import React, { useState } from 'react';
import { FileText, Download, Calendar, Search, Filter, Eye, AlertCircle } from 'lucide-react';

export const TaxDocuments: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedType, setSelectedType] = useState('all');

  const taxDocuments = [
    {
      id: 1,
      title: 'Schedule K-1 - Fund I',
      type: 'k1',
      year: '2024',
      fund: 'Disruptech Fund I',
      uploadDate: '2024-03-15',
      size: '1.2 MB',
      status: 'available',
      description: 'Partnership tax information for 2024'
    },
    {
      id: 2,
      title: 'Schedule K-1 - Fund II',
      type: 'k1',
      year: '2024',
      fund: 'Disruptech Fund II',
      uploadDate: '2024-03-15',
      size: '0.9 MB',
      status: 'available',
      description: 'Partnership tax information for 2024'
    },
    {
      id: 3,
      title: 'Tax Basis Summary - Fund I',
      type: 'basis',
      year: '2024',
      fund: 'Disruptech Fund I',
      uploadDate: '2024-03-20',
      size: '0.5 MB',
      status: 'available',
      description: 'Tax basis calculation summary'
    },
    {
      id: 4,
      title: 'Schedule K-1 - Fund I',
      type: 'k1',
      year: '2023',
      fund: 'Disruptech Fund I',
      uploadDate: '2023-03-15',
      size: '1.1 MB',
      status: 'available',
      description: 'Partnership tax information for 2023'
    },
    {
      id: 5,
      title: 'Tax Basis Summary - Fund I',
      type: 'basis',
      year: '2023',
      fund: 'Disruptech Fund I',
      uploadDate: '2023-03-20',
      size: '0.4 MB',
      status: 'available',
      description: 'Tax basis calculation summary'
    },
    {
      id: 6,
      title: 'Schedule K-1 - Fund II',
      type: 'k1',
      year: '2023',
      fund: 'Disruptech Fund II',
      uploadDate: '2023-03-15',
      size: '0.8 MB',
      status: 'available',
      description: 'Partnership tax information for 2023'
    }
  ];

  const taxYears = ['2024', '2023', '2022', '2021'];
  const documentTypes = [
    { value: 'all', label: 'All Documents' },
    { value: 'k1', label: 'Schedule K-1' },
    { value: 'basis', label: 'Tax Basis' },
    { value: '1099', label: 'Form 1099' },
    { value: 'summary', label: 'Tax Summary' }
  ];

  const filteredDocuments = taxDocuments.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.fund.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === 'all' || doc.year === selectedYear;
    const matchesType = selectedType === 'all' || doc.type === selectedType;
    return matchesSearch && matchesYear && matchesType;
  });

  const getDocumentIcon = (type: string) => {
    switch (type) {
      case 'k1':
        return 'bg-blue-100 text-blue-600';
      case 'basis':
        return 'bg-green-100 text-green-600';
      case '1099':
        return 'bg-purple-100 text-purple-600';
      case 'summary':
        return 'bg-orange-100 text-orange-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tax Documents</h1>
          <p className="text-gray-600">Access your tax-related documents and forms</p>
        </div>
      </div>

      {/* Tax Season Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-6 w-6 text-blue-600 mt-1" />
          <div>
            <h3 className="font-medium text-blue-900 mb-2">2024 Tax Season Information</h3>
            <p className="text-blue-800 text-sm mb-3">
              Your 2024 tax documents are now available. Schedule K-1 forms have been uploaded 
              and are ready for download. Please consult with your tax advisor for proper filing.
            </p>
            <div className="flex items-center space-x-4 text-sm text-blue-700">
              <span>• K-1 forms available: March 15, 2024</span>
              <span>• Tax filing deadline: April 15, 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search tax documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-gray-400" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Years</option>
                {taxYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {documentTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Tax Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">6</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Documents</p>
            <p className="text-xs text-gray-400 mt-1">Available for download</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <Calendar className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">2</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Tax Years</p>
            <p className="text-xs text-gray-400 mt-1">2023-2024</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-50 rounded-lg">
              <Download className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">2</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Funds</p>
            <p className="text-xs text-gray-400 mt-1">Fund I & Fund II</p>
          </div>
        </div>
      </div>

      {/* Documents List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Tax Documents ({filteredDocuments.length})
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
                      <span className="text-sm text-gray-500">{document.fund}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">Tax Year {document.year}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{document.size}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{document.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="text-right mr-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(document.uploadDate).toLocaleDateString()}</span>
                    </div>
                    <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full mt-1">
                      {document.status}
                    </span>
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

      {/* Tax Information */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Tax Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Schedule K-1 Information</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• Partnership income, deductions, and credits</p>
              <p>• Required for your personal tax return</p>
              <p>• Typically available by March 15th</p>
              <p>• Consult your tax advisor for proper filing</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Important Dates</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• K-1 Distribution: March 15, 2024</p>
              <p>• Tax Filing Deadline: April 15, 2024</p>
              <p>• Extension Deadline: October 15, 2024</p>
              <p>• Estimated Tax Payments: Quarterly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};