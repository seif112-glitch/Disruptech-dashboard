import React, { useState } from 'react';
import { Shield, FileCheck, AlertTriangle, CheckCircle, Clock, Download, Eye } from 'lucide-react';

export const ComplianceView: React.FC = () => {
  const [selectedStandard, setSelectedStandard] = useState('soc2');

  const complianceStandards = [
    {
      id: 'soc2',
      name: 'SOC 2 Type II',
      status: 'certified',
      lastAudit: '2024-06-15',
      nextAudit: '2025-06-15',
      score: 98,
      description: 'Security, availability, and confidentiality controls'
    },
    {
      id: 'gdpr',
      name: 'GDPR Compliance',
      status: 'compliant',
      lastAudit: '2024-03-20',
      nextAudit: '2025-03-20',
      score: 95,
      description: 'European data protection regulation compliance'
    },
    {
      id: 'ccpa',
      name: 'CCPA Compliance',
      status: 'compliant',
      lastAudit: '2024-04-10',
      nextAudit: '2025-04-10',
      score: 92,
      description: 'California Consumer Privacy Act compliance'
    },
    {
      id: 'iso27001',
      name: 'ISO 27001',
      status: 'in-progress',
      lastAudit: '2024-01-15',
      nextAudit: '2024-12-15',
      score: 85,
      description: 'Information security management system'
    }
  ];

  const auditFindings = [
    {
      id: 1,
      type: 'high',
      title: 'Password Policy Enhancement',
      description: 'Implement stronger password complexity requirements',
      status: 'resolved',
      dueDate: '2024-08-15',
      assignee: 'Security Team'
    },
    {
      id: 2,
      type: 'medium',
      title: 'Access Review Process',
      description: 'Quarterly access review documentation needs improvement',
      status: 'in-progress',
      dueDate: '2024-12-01',
      assignee: 'IT Team'
    },
    {
      id: 3,
      type: 'low',
      title: 'Training Documentation',
      description: 'Update security awareness training materials',
      status: 'pending',
      dueDate: '2025-01-15',
      assignee: 'HR Team'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'certified':
      case 'compliant':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'in-progress':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'expired':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getFindingColor = (type: string) => {
    switch (type) {
      case 'high':
        return 'text-red-600 bg-red-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'low':
        return 'text-blue-600 bg-blue-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Compliance Management</h1>
          <p className="text-gray-600">Monitor regulatory compliance and audit status</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Download className="h-4 w-4" />
          <span>Export Report</span>
        </button>
      </div>

      {/* Compliance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Standards</p>
              <p className="text-2xl font-bold text-gray-900">{complianceStandards.length}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Compliant</p>
              <p className="text-2xl font-bold text-green-600">
                {complianceStandards.filter(s => s.status === 'compliant' || s.status === 'certified').length}
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">In Progress</p>
              <p className="text-2xl font-bold text-yellow-600">
                {complianceStandards.filter(s => s.status === 'in-progress').length}
              </p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Avg. Score</p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round(complianceStandards.reduce((sum, s) => sum + s.score, 0) / complianceStandards.length)}%
              </p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <FileCheck className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Standards */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Compliance Standards</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {complianceStandards.map((standard) => (
            <div
              key={standard.id}
              className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                selectedStandard === standard.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedStandard(standard.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900">{standard.name}</h4>
                <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(standard.status)}`}>
                  {standard.status.charAt(0).toUpperCase() + standard.status.slice(1)}
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">{standard.description}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Compliance Score</span>
                  <span className="font-medium">{standard.score}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${standard.score}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Last Audit: {new Date(standard.lastAudit).toLocaleDateString()}</span>
                  <span>Next: {new Date(standard.nextAudit).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Audit Findings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Audit Findings</h3>
        
        <div className="space-y-4">
          {auditFindings.map((finding) => (
            <div key={finding.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`px-2 py-1 rounded text-xs font-medium ${getFindingColor(finding.type)}`}>
                      {finding.type.toUpperCase()}
                    </div>
                    <h4 className="font-medium text-gray-900">{finding.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{finding.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Due: {new Date(finding.dueDate).toLocaleDateString()}</span>
                    <span>Assignee: {finding.assignee}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      finding.status === 'resolved' ? 'bg-green-100 text-green-800' :
                      finding.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {finding.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};