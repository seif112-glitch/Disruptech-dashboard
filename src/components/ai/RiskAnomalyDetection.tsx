import React, { useState } from 'react';
import { AlertTriangle, TrendingDown, Activity, Eye, Bell, CheckCircle } from 'lucide-react';

export const RiskAnomalyDetection: React.FC = () => {
  const [selectedAlert, setSelectedAlert] = useState<string | null>(null);

  const companies = [
    {
      id: 'techcorp',
      name: 'TechCorp Solutions',
      status: 'healthy',
      metrics: {
        burnRate: { value: 85000, forecast: 80000, variance: 6.25, trend: 'up' },
        runway: { value: 18, forecast: 24, variance: -25, trend: 'down' },
        userGrowth: { value: 12.5, forecast: 15, variance: -16.7, trend: 'down' },
        revenue: { value: 245000, forecast: 250000, variance: -2, trend: 'stable' }
      }
    },
    {
      id: 'aiinnovations',
      name: 'AI Innovations',
      status: 'warning',
      metrics: {
        burnRate: { value: 125000, forecast: 100000, variance: 25, trend: 'up' },
        runway: { value: 14, forecast: 20, variance: -30, trend: 'down' },
        userGrowth: { value: 8.2, forecast: 12, variance: -31.7, trend: 'down' },
        revenue: { value: 180000, forecast: 200000, variance: -10, trend: 'down' }
      },
      alerts: [
        {
          id: 'burn-rate-alert',
          type: 'critical',
          title: 'Burn Rate Anomaly Detected',
          description: 'Burn rate is 25% above forecast for the second consecutive month',
          impact: 'Runway reduced by 6 months if trend continues',
          recommendation: 'Immediate cost reduction measures recommended'
        }
      ]
    },
    {
      id: 'fintechpro',
      name: 'FinTech Pro',
      status: 'critical',
      metrics: {
        burnRate: { value: 95000, forecast: 75000, variance: 26.7, trend: 'up' },
        runway: { value: 8, forecast: 15, variance: -46.7, trend: 'down' },
        userGrowth: { value: 3.1, forecast: 10, variance: -69, trend: 'down' },
        revenue: { value: 120000, forecast: 160000, variance: -25, trend: 'down' }
      },
      alerts: [
        {
          id: 'runway-alert',
          type: 'critical',
          title: 'Critical Runway Alert',
          description: 'Runway has decreased 30% faster than projected',
          impact: 'Company may need emergency funding within 6 months',
          recommendation: 'Immediate bridge funding or strategic pivot required'
        },
        {
          id: 'growth-alert',
          type: 'warning',
          title: 'User Growth Decline',
          description: 'User growth significantly below targets for 3 consecutive months',
          impact: 'Revenue projections at risk',
          recommendation: 'Review product-market fit and marketing strategy'
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600 bg-green-50 border-green-200';
      case 'warning': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'critical': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy': return CheckCircle;
      case 'warning': return AlertTriangle;
      case 'critical': return AlertTriangle;
      default: return Activity;
    }
  };

  const getVarianceColor = (variance: number) => {
    if (variance > 20) return 'text-red-600 bg-red-50';
    if (variance > 10) return 'text-yellow-600 bg-yellow-50';
    if (variance < -10) return 'text-red-600 bg-red-50';
    return 'text-green-600 bg-green-50';
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const totalAlerts = companies.reduce((sum, company) => sum + (company.alerts?.length || 0), 0);
  const criticalAlerts = companies.reduce((sum, company) => 
    sum + (company.alerts?.filter(alert => alert.type === 'critical').length || 0), 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-red-50 rounded-lg">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Proactive Risk & Anomaly Detection</h2>
            <p className="text-gray-600">AI-powered monitoring of portfolio company KPIs</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">
            <Bell className="h-4 w-4" />
            <span>{totalAlerts} Active Alerts</span>
          </div>
          <div className="text-sm text-gray-500">
            Last scan: 2 minutes ago
          </div>
        </div>
      </div>

      {/* Alert Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Alerts</p>
              <p className="text-2xl font-bold text-gray-900">{totalAlerts}</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Critical Alerts</p>
              <p className="text-2xl font-bold text-red-600">{criticalAlerts}</p>
            </div>
            <div className="p-3 bg-red-50 rounded-lg">
              <TrendingDown className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Companies Monitored</p>
              <p className="text-2xl font-bold text-gray-900">{companies.length}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Activity className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Healthy Companies</p>
              <p className="text-2xl font-bold text-green-600">
                {companies.filter(c => c.status === 'healthy').length}
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Company KPI Dashboard */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Portfolio Company KPI Monitoring</h3>
        
        <div className="space-y-6">
          {companies.map((company) => {
            const StatusIcon = getStatusIcon(company.status);
            return (
              <div key={company.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <h4 className="text-lg font-medium text-gray-900">{company.name}</h4>
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(company.status)}`}>
                      <StatusIcon className="h-4 w-4" />
                      <span className="capitalize">{company.status}</span>
                    </div>
                  </div>
                  {company.alerts && company.alerts.length > 0 && (
                    <div className="flex items-center space-x-2 text-sm text-red-600">
                      <AlertTriangle className="h-4 w-4" />
                      <span>{company.alerts.length} Alert{company.alerts.length > 1 ? 's' : ''}</span>
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Monthly Burn Rate</span>
                      <div className={`px-2 py-1 rounded text-xs font-medium ${getVarianceColor(company.metrics.burnRate.variance)}`}>
                        {company.metrics.burnRate.variance > 0 ? '+' : ''}{company.metrics.burnRate.variance}%
                      </div>
                    </div>
                    <p className="text-lg font-bold text-gray-900">{formatCurrency(company.metrics.burnRate.value)}</p>
                    <p className="text-sm text-gray-500">Forecast: {formatCurrency(company.metrics.burnRate.forecast)}</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Runway (Months)</span>
                      <div className={`px-2 py-1 rounded text-xs font-medium ${getVarianceColor(company.metrics.runway.variance)}`}>
                        {company.metrics.runway.variance > 0 ? '+' : ''}{company.metrics.runway.variance}%
                      </div>
                    </div>
                    <p className="text-lg font-bold text-gray-900">{company.metrics.runway.value}</p>
                    <p className="text-sm text-gray-500">Forecast: {company.metrics.runway.forecast}</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">User Growth (%)</span>
                      <div className={`px-2 py-1 rounded text-xs font-medium ${getVarianceColor(company.metrics.userGrowth.variance)}`}>
                        {company.metrics.userGrowth.variance > 0 ? '+' : ''}{company.metrics.userGrowth.variance}%
                      </div>
                    </div>
                    <p className="text-lg font-bold text-gray-900">{company.metrics.userGrowth.value}%</p>
                    <p className="text-sm text-gray-500">Forecast: {company.metrics.userGrowth.forecast}%</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Monthly Revenue</span>
                      <div className={`px-2 py-1 rounded text-xs font-medium ${getVarianceColor(company.metrics.revenue.variance)}`}>
                        {company.metrics.revenue.variance > 0 ? '+' : ''}{company.metrics.revenue.variance}%
                      </div>
                    </div>
                    <p className="text-lg font-bold text-gray-900">{formatCurrency(company.metrics.revenue.value)}</p>
                    <p className="text-sm text-gray-500">Forecast: {formatCurrency(company.metrics.revenue.forecast)}</p>
                  </div>
                </div>
                
                {company.alerts && company.alerts.length > 0 && (
                  <div className="space-y-3">
                    {company.alerts.map((alert) => (
                      <div
                        key={alert.id}
                        className={`border-l-4 p-4 rounded-r-lg cursor-pointer transition-all ${
                          alert.type === 'critical' 
                            ? 'border-red-500 bg-red-50 hover:bg-red-100' 
                            : 'border-yellow-500 bg-yellow-50 hover:bg-yellow-100'
                        } ${selectedAlert === alert.id ? 'ring-2 ring-blue-500' : ''}`}
                        onClick={() => setSelectedAlert(selectedAlert === alert.id ? null : alert.id)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <AlertTriangle className={`h-4 w-4 ${alert.type === 'critical' ? 'text-red-600' : 'text-yellow-600'}`} />
                              <h5 className="font-medium text-gray-900">{alert.title}</h5>
                            </div>
                            <p className="text-sm text-gray-700 mb-2">{alert.description}</p>
                            {selectedAlert === alert.id && (
                              <div className="mt-3 space-y-2">
                                <div className="bg-white rounded-lg p-3">
                                  <p className="text-sm font-medium text-gray-900 mb-1">Impact:</p>
                                  <p className="text-sm text-gray-700">{alert.impact}</p>
                                </div>
                                <div className="bg-white rounded-lg p-3">
                                  <p className="text-sm font-medium text-gray-900 mb-1">Recommendation:</p>
                                  <p className="text-sm text-gray-700">{alert.recommendation}</p>
                                </div>
                              </div>
                            )}
                          </div>
                          <button className="ml-4 p-1 text-gray-400 hover:text-gray-600">
                            <Eye className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
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