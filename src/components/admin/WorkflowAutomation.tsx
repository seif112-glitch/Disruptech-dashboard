import React, { useState } from 'react';
import { Zap, Play, Pause, Settings, Plus, Calendar, Mail, DollarSign, FileText } from 'lucide-react';

export const WorkflowAutomation: React.FC = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<string | null>(null);

  const workflows = [
    {
      id: '1',
      name: 'Capital Call Process',
      description: 'Automated capital call notices and follow-ups',
      status: 'active',
      trigger: 'Manual/Scheduled',
      lastRun: '2024-10-15',
      nextRun: '2024-11-15',
      successRate: 98,
      icon: DollarSign,
      steps: [
        'Generate capital call notice',
        'Send to all LPs via email',
        'Track responses and payments',
        'Send reminders for overdue payments',
        'Update investor records'
      ]
    },
    {
      id: '2',
      name: 'Distribution Workflow',
      description: 'Automated distribution calculations and notices',
      status: 'active',
      trigger: 'Quarterly',
      lastRun: '2024-09-30',
      nextRun: '2024-12-31',
      successRate: 95,
      icon: Calendar,
      steps: [
        'Calculate distribution amounts',
        'Generate distribution notices',
        'Send to investors',
        'Process wire transfers',
        'Update capital accounts'
      ]
    },
    {
      id: '3',
      name: 'Quarterly Reporting',
      description: 'Automated quarterly report generation and distribution',
      status: 'active',
      trigger: 'Quarterly',
      lastRun: '2024-10-01',
      nextRun: '2025-01-01',
      successRate: 100,
      icon: FileText,
      steps: [
        'Compile portfolio data',
        'Generate performance reports',
        'Create investor-specific reports',
        'Send via secure portal',
        'Track report access'
      ]
    },
    {
      id: '4',
      name: 'Investor Onboarding',
      description: 'Streamlined new investor onboarding process',
      status: 'draft',
      trigger: 'New Investor',
      lastRun: 'Never',
      nextRun: 'On Demand',
      successRate: 0,
      icon: Mail,
      steps: [
        'Send welcome email',
        'Provide portal access',
        'Schedule onboarding call',
        'Collect required documents',
        'Complete KYC/AML checks'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'paused':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'draft':
        return 'text-gray-600 bg-gray-50 border-gray-200';
      case 'error':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Workflow Automation</h1>
          <p className="text-gray-600">Automate repetitive processes and improve efficiency</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Create Workflow</span>
        </button>
      </div>

      {/* Workflow Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Workflows</p>
              <p className="text-2xl font-bold text-gray-900">{workflows.length}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Active</p>
              <p className="text-2xl font-bold text-green-600">
                {workflows.filter(w => w.status === 'active').length}
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <Play className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Success Rate</p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round(workflows.reduce((sum, w) => sum + w.successRate, 0) / workflows.length)}%
              </p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <Settings className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Time Saved</p>
              <p className="text-2xl font-bold text-gray-900">24h</p>
              <p className="text-xs text-gray-500">per week</p>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <Calendar className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Workflows List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Automated Workflows</h3>
        
        <div className="space-y-4">
          {workflows.map((workflow) => {
            const Icon = workflow.icon;
            return (
              <div
                key={workflow.id}
                className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                  selectedWorkflow === workflow.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedWorkflow(selectedWorkflow === workflow.id ? null : workflow.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <Icon className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{workflow.name}</h4>
                      <p className="text-sm text-gray-600">{workflow.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{workflow.successRate}%</p>
                      <p className="text-xs text-gray-500">Success Rate</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(workflow.status)}`}>
                      {workflow.status.charAt(0).toUpperCase() + workflow.status.slice(1)}
                    </div>
                    <div className="flex items-center space-x-2">
                      {workflow.status === 'active' ? (
                        <button className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors">
                          <Pause className="h-4 w-4" />
                        </button>
                      ) : (
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                          <Play className="h-4 w-4" />
                        </button>
                      )}
                      <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                        <Settings className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Trigger:</span>
                    <span className="ml-2 font-medium">{workflow.trigger}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Last Run:</span>
                    <span className="ml-2 font-medium">{workflow.lastRun}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Next Run:</span>
                    <span className="ml-2 font-medium">{workflow.nextRun}</span>
                  </div>
                </div>

                {selectedWorkflow === workflow.id && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h5 className="font-medium text-gray-900 mb-3">Workflow Steps</h5>
                    <div className="space-y-2">
                      {workflow.steps.map((step, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium">
                            {index + 1}
                          </div>
                          <span className="text-sm text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};