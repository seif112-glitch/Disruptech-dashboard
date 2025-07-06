import React, { useState } from 'react';
import { Search, Sparkles, TrendingUp, Building2, Users, DollarSign } from 'lucide-react';

export const SmartSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const mockData = {
    companies: [
      { name: 'PayMob', sector: 'FinTech', description: 'Digital payment solutions', funding: '$18M Series B' },
      { name: 'Vezeeta', sector: 'HealthTech', description: 'Healthcare booking platform', funding: '$40M Series C' },
      { name: 'Elmenus', sector: 'FoodTech', description: 'Food discovery platform', funding: '$10M Series A' }
    ],
    insights: [
      { title: 'FinTech Growth', content: 'Egyptian FinTech sector growing 45% annually' },
      { title: 'Series A Trends', content: 'Average Series A round size increased to $2.5M in 2024' },
      { title: 'Exit Activity', content: '3 major exits expected in Q1 2025' }
    ],
    metrics: [
      { label: 'Market Size', value: '$2.8B', trend: '+35%' },
      { label: 'Active Startups', value: '1,200+', trend: '+28%' },
      { label: 'Total Funding', value: '$450M', trend: '+52%' }
    ]
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate AI search
    setTimeout(() => {
      const results = [];
      const lowerQuery = query.toLowerCase();

      // Search companies
      const matchingCompanies = mockData.companies.filter(company =>
        company.name.toLowerCase().includes(lowerQuery) ||
        company.sector.toLowerCase().includes(lowerQuery) ||
        company.description.toLowerCase().includes(lowerQuery)
      );

      // Search insights
      const matchingInsights = mockData.insights.filter(insight =>
        insight.title.toLowerCase().includes(lowerQuery) ||
        insight.content.toLowerCase().includes(lowerQuery)
      );

      if (matchingCompanies.length > 0) {
        results.push({ type: 'companies', data: matchingCompanies });
      }
      if (matchingInsights.length > 0) {
        results.push({ type: 'insights', data: matchingInsights });
      }
      if (lowerQuery.includes('market') || lowerQuery.includes('funding') || lowerQuery.includes('startup')) {
        results.push({ type: 'metrics', data: mockData.metrics });
      }

      setSearchResults(results);
      setIsSearching(false);
    }, 800);
  };

  const popularSearches = [
    'FinTech startups Egypt',
    'Series A funding trends',
    'Healthcare technology',
    'E-commerce growth',
    'AI startups MENA'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="font-medium">AI-Powered Search</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Intelligent Market Research
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Search our comprehensive database of Egyptian startups, market insights, 
            and investment trends powered by advanced AI.
          </p>
        </div>

        {/* Search Interface */}
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search startups, sectors, trends, or ask questions..."
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
            />
            {isSearching && (
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
              </div>
            )}
          </div>

          {/* Popular Searches */}
          {!searchQuery && (
            <div className="mb-8">
              <p className="text-sm font-medium text-gray-700 mb-3">Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(search)}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="space-y-8">
              {searchResults.map((section, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6">
                  {section.type === 'companies' && (
                    <>
                      <div className="flex items-center space-x-2 mb-4">
                        <Building2 className="h-5 w-5 text-blue-600" />
                        <h3 className="font-semibold text-gray-900">Portfolio Companies</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {section.data.map((company: any, idx: number) => (
                          <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                            <h4 className="font-medium text-gray-900 mb-1">{company.name}</h4>
                            <p className="text-sm text-blue-600 mb-2">{company.sector}</p>
                            <p className="text-sm text-gray-600 mb-2">{company.description}</p>
                            <p className="text-xs text-green-600 font-medium">{company.funding}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {section.type === 'insights' && (
                    <>
                      <div className="flex items-center space-x-2 mb-4">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                        <h3 className="font-semibold text-gray-900">Market Insights</h3>
                      </div>
                      <div className="space-y-3">
                        {section.data.map((insight: any, idx: number) => (
                          <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                            <h4 className="font-medium text-gray-900 mb-1">{insight.title}</h4>
                            <p className="text-sm text-gray-600">{insight.content}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {section.type === 'metrics' && (
                    <>
                      <div className="flex items-center space-x-2 mb-4">
                        <DollarSign className="h-5 w-5 text-purple-600" />
                        <h3 className="font-semibold text-gray-900">Key Metrics</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {section.data.map((metric: any, idx: number) => (
                          <div key={idx} className="bg-white rounded-lg p-4 shadow-sm text-center">
                            <p className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</p>
                            <p className="text-sm text-gray-600 mb-1">{metric.label}</p>
                            <p className="text-xs text-green-600 font-medium">{metric.trend}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};