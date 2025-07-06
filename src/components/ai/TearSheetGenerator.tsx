import React, { useState } from 'react';
import { FileText, Download, Sparkles, Building2, TrendingUp, Calendar, DollarSign, Users } from 'lucide-react';

export const TearSheetGenerator: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState('techcorp');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showTearSheet, setShowTearSheet] = useState(false);

  const companies = [
    { id: 'techcorp', name: 'TechCorp Solutions', sector: 'SaaS' },
    { id: 'aiinnovations', name: 'AI Innovations', sector: 'AI/ML' },
    { id: 'fintechpro', name: 'FinTech Pro', sector: 'Financial Services' }
  ];

  const tearSheetData = {
    techcorp: {
      name: 'TechCorp Solutions',
      tagline: 'Enterprise SaaS Platform for Digital Transformation',
      logo: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=100',
      sector: 'Enterprise SaaS',
      founded: '2019',
      location: 'San Francisco, CA',
      website: 'www.techcorp.com',
      investment: {
        date: 'March 2021',
        amount: '$250K',
        round: 'Series A',
        ownership: '8.5%',
        leadInvestor: 'Disruptech Ventures'
      },
      financials: {
        arr: '$2.4M',
        growth: '+125% YoY',
        grossMargin: '85%',
        burnRate: '$85K/month',
        runway: '18 months'
      },
      metrics: {
        customers: '150+',
        nps: '72',
        churn: '2.1%',
        ltv: '$45K',
        cac: '$1.2K'
      },
      team: {
        employees: '28',
        engineering: '60%',
        leadership: 'CEO: John Smith (ex-Salesforce), CTO: Sarah Johnson (ex-Google)'
      },
      recent: [
        'Closed $5M Series B led by Accel Partners',
        'Launched AI-powered analytics module',
        'Signed 3 Fortune 500 customers',
        'Expanded to European market'
      ],
      outlook: 'Strong growth trajectory with expanding market opportunity. Well-positioned for potential exit in 2025-2026.',
      valuation: {
        current: '$31M',
        multiple: '12.9x ARR',
        change: '+24.5%'
      }
    }
  };

  const handleGenerateReport = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowTearSheet(true);
    }, 3000);
  };

  const currentData = tearSheetData[selectedCompany as keyof typeof tearSheetData];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-orange-50 rounded-lg">
            <FileText className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Automated Tear Sheet Generation</h2>
            <p className="text-gray-600">AI-powered company reports for investor distribution</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm text-orange-600 bg-orange-50 px-3 py-2 rounded-lg">
          <Sparkles className="h-4 w-4" />
          <span>AI Content Generation</span>
        </div>
      </div>

      {!showTearSheet ? (
        <>
          {/* Company Selection */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Portfolio Company</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {companies.map((company) => (
                <button
                  key={company.id}
                  onClick={() => setSelectedCompany(company.id)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedCompany === company.id
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-900">{company.name}</p>
                      <p className="text-sm text-gray-500">{company.sector}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <button
                onClick={handleGenerateReport}
                disabled={isGenerating}
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-3"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>AI is generating your report...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5" />
                    <span>Generate Tear Sheet</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Features Preview */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Automated Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Financial Metrics</h4>
                <p className="text-sm text-gray-600">Automatically pulls latest ARR, growth rates, and key ratios</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Team & Leadership</h4>
                <p className="text-sm text-gray-600">Gathers team size, key hires, and leadership backgrounds</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Recent Updates</h4>
                <p className="text-sm text-gray-600">Compiles recent milestones, funding, and product launches</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Valuation Analysis</h4>
                <p className="text-sm text-gray-600">Calculates current valuation and market multiples</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Generated Tear Sheet */
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={currentData.logo}
                  alt={currentData.name}
                  className="w-16 h-16 rounded-lg bg-white p-2"
                />
                <div>
                  <h1 className="text-2xl font-bold">{currentData.name}</h1>
                  <p className="text-blue-100">{currentData.tagline}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-100">Generated by AI</p>
                <p className="text-sm text-blue-100">{new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Company Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Company Overview</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sector:</span>
                    <span className="font-medium">{currentData.sector}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Founded:</span>
                    <span className="font-medium">{currentData.founded}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">{currentData.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Website:</span>
                    <span className="font-medium text-blue-600">{currentData.website}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Investment Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Investment Date:</span>
                    <span className="font-medium">{currentData.investment.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-medium">{currentData.investment.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Round:</span>
                    <span className="font-medium">{currentData.investment.round}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ownership:</span>
                    <span className="font-medium">{currentData.investment.ownership}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Performance */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Financial Performance</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-sm text-gray-600">ARR</p>
                  <p className="text-lg font-bold text-gray-900">{currentData.financials.arr}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-sm text-gray-600">Growth</p>
                  <p className="text-lg font-bold text-green-600">{currentData.financials.growth}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-sm text-gray-600">Gross Margin</p>
                  <p className="text-lg font-bold text-gray-900">{currentData.financials.grossMargin}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-sm text-gray-600">Burn Rate</p>
                  <p className="text-lg font-bold text-gray-900">{currentData.financials.burnRate}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-sm text-gray-600">Runway</p>
                  <p className="text-lg font-bold text-gray-900">{currentData.financials.runway}</p>
                </div>
              </div>
            </div>

            {/* Key Metrics & Recent Updates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Metrics</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Customers:</span>
                    <span className="font-medium">{currentData.metrics.customers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">NPS Score:</span>
                    <span className="font-medium">{currentData.metrics.nps}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Churn:</span>
                    <span className="font-medium">{currentData.metrics.churn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">LTV:</span>
                    <span className="font-medium">{currentData.metrics.ltv}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">CAC:</span>
                    <span className="font-medium">{currentData.metrics.cac}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Recent Updates</h3>
                <div className="space-y-2">
                  {currentData.recent.map((update, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">{update}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Valuation & Outlook */}
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Current Valuation</h3>
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{currentData.valuation.current}</p>
                      <p className="text-sm text-gray-600">{currentData.valuation.multiple}</p>
                    </div>
                    <div className="text-green-600 font-medium">
                      {currentData.valuation.change}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Investment Outlook</h3>
                  <p className="text-sm text-gray-700">{currentData.outlook}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Sparkles className="h-4 w-4" />
              <span>Generated automatically by Disruptech AI</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowTearSheet(false)}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Generate New Report
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};