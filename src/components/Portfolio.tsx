import React from 'react';
import { ExternalLink, TrendingUp } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const portfolioCompanies = [
    {
      name: 'PayMob',
      sector: 'FinTech',
      description: 'Digital payment solutions for businesses',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100',
      website: '#',
      status: 'Series B'
    },
    {
      name: 'Vezeeta',
      sector: 'HealthTech',
      description: 'Healthcare booking and management platform',
      logo: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=100',
      website: '#',
      status: 'Growth'
    },
    {
      name: 'Elmenus',
      sector: 'FoodTech',
      description: 'Food discovery and delivery platform',
      logo: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100',
      website: '#',
      status: 'Series A'
    },
    {
      name: 'Rabbit',
      sector: 'E-commerce',
      description: 'Last-mile delivery and logistics',
      logo: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=100',
      website: '#',
      status: 'Series B'
    },
    {
      name: 'Nagwa',
      sector: 'EdTech',
      description: 'Educational content and learning platform',
      logo: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=100',
      website: '#',
      status: 'Growth'
    },
    {
      name: 'Breadfast',
      sector: 'E-commerce',
      description: 'On-demand grocery delivery',
      logo: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=100',
      website: '#',
      status: 'Series A'
    }
  ];

  const sectors = [
    { name: 'FinTech', percentage: 30, color: 'bg-teal-500' },
    { name: 'E-commerce', percentage: 25, color: 'bg-slate-600' },
    { name: 'HealthTech', percentage: 20, color: 'bg-teal-400' },
    { name: 'EdTech', percentage: 15, color: 'bg-slate-500' },
    { name: 'Other', percentage: 10, color: 'bg-slate-400' }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Portfolio Highlights
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We're proud to back some of Egypt's most innovative and fastest-growing 
            technology companies across multiple sectors.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioCompanies.map((company, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-12 h-12 rounded-lg object-cover"
                  loading="lazy"
                />
                <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                  {company.status}
                </span>
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-slate-800 mb-2">
                {company.name}
              </h3>
              
              <p className="text-teal-600 font-medium mb-3">
                {company.sector}
              </p>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {company.description}
              </p>
              
              <div className="flex items-center justify-between">
                <a
                  href={company.website}
                  className="flex items-center space-x-2 text-slate-500 hover:text-teal-600 transition-colors group-hover:text-teal-600"
                >
                  <span className="text-sm">Visit Website</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Sector Allocation */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-slate-800 mb-6">
                Sector Allocation
              </h3>
              <div className="space-y-4">
                {sectors.map((sector, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${sector.color}`}></div>
                      <span className="font-medium text-slate-700">{sector.name}</span>
                    </div>
                    <span className="font-semibold text-slate-800">{sector.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="w-64 h-64 mx-auto">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {sectors.map((sector, index) => {
                    const offset = sectors.slice(0, index).reduce((sum, s) => sum + s.percentage, 0);
                    const circumference = 2 * Math.PI * 40;
                    const strokeDasharray = `${(sector.percentage / 100) * circumference} ${circumference}`;
                    const strokeDashoffset = -((offset / 100) * circumference);
                    
                    return (
                      <circle
                        key={index}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke={sector.color.replace('bg-', '#')}
                        strokeWidth="8"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        className="transition-all duration-300 hover:stroke-width-10"
                      />
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};