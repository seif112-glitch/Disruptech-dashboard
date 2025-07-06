import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Calendar, Building2 } from 'lucide-react';

export const PortfolioView: React.FC = () => {
  const funds = [
    {
      id: 1,
      name: 'Disruptech Fund I',
      vintage: 2020,
      size: '50M',
      committed: '2.5M',
      called: '1.8M',
      distributed: '0.5M',
      nav: '3.2M',
      tvpi: 1.48,
      dpi: 0.35,
      irr: 18.2,
      companies: 12
    },
    {
      id: 2,
      name: 'Disruptech Fund II',
      vintage: 2022,
      size: '100M',
      committed: '1.0M',
      called: '0.7M',
      distributed: '0.1M',
      nav: '1.1M',
      tvpi: 1.12,
      dpi: 0.08,
      irr: 12.5,
      companies: 8
    }
  ];

  const companies = [
    {
      id: 1,
      name: 'TechCorp Solutions',
      sector: 'SaaS',
      invested: 250000,
      currentValue: 310000,
      change: 24.5,
      investmentDate: '2021-03-15',
      fund: 'Fund I'
    },
    {
      id: 2,
      name: 'AI Innovations',
      sector: 'AI/ML',
      invested: 180000,
      currentValue: 213000,
      change: 18.2,
      investmentDate: '2021-07-22',
      fund: 'Fund I'
    },
    {
      id: 3,
      name: 'FinTech Pro',
      sector: 'Financial Services',
      invested: 200000,
      currentValue: 190000,
      change: -5.1,
      investmentDate: '2022-01-10',
      fund: 'Fund II'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Portfolio Overview</h1>
          <p className="text-gray-600">Detailed view of your investments and performance</p>
        </div>
      </div>

      {/* Fund Performance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Fund Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-500">Fund</th>
                <th className="text-right py-3 px-4 font-medium text-gray-500">Size</th>
                <th className="text-right py-3 px-4 font-medium text-gray-500">Committed</th>
                <th className="text-right py-3 px-4 font-medium text-gray-500">Called</th>
                <th className="text-right py-3 px-4 font-medium text-gray-500">NAV</th>
                <th className="text-right py-3 px-4 font-medium text-gray-500">TVPI</th>
                <th className="text-right py-3 px-4 font-medium text-gray-500">IRR</th>
                <th className="text-right py-3 px-4 font-medium text-gray-500">Companies</th>
              </tr>
            </thead>
            <tbody>
              {funds.map((fund) => (
                <tr key={fund.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-gray-900">{fund.name}</p>
                      <p className="text-sm text-gray-500">Vintage {fund.vintage}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right">${fund.size}</td>
                  <td className="py-4 px-4 text-right">${fund.committed}</td>
                  <td className="py-4 px-4 text-right">${fund.called}</td>
                  <td className="py-4 px-4 text-right">${fund.nav}</td>
                  <td className="py-4 px-4 text-right">
                    <span className={`font-medium ${fund.tvpi > 1 ? 'text-green-600' : 'text-red-600'}`}>
                      {fund.tvpi}x
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <span className={`font-medium ${fund.irr > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {fund.irr}%
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">{fund.companies}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Portfolio Companies */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Portfolio Companies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <div key={company.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{company.name}</h4>
                    <p className="text-sm text-gray-500">{company.sector}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {company.change > 0 ? (
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500" />
                  )}
                  <span className={`text-sm font-medium ${
                    company.change > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {company.change > 0 ? '+' : ''}{company.change}%
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Invested</span>
                  <span className="text-sm font-medium">${(company.invested / 1000).toFixed(0)}K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Current Value</span>
                  <span className="text-sm font-medium">${(company.currentValue / 1000).toFixed(0)}K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Investment Date</span>
                  <span className="text-sm font-medium">{new Date(company.investmentDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Fund</span>
                  <span className="text-sm font-medium">{company.fund}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};