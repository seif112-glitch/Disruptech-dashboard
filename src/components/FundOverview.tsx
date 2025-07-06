import React from 'react';
import { Target, TrendingUp, Globe, Zap, Download } from 'lucide-react';

export const FundOverview: React.FC = () => {
  return (
    <section id="overview" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Fund II Overview
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Building on our proven track record, DisrupTech Fund II represents our commitment 
            to backing Egypt's most promising entrepreneurs as they scale innovative solutions 
            across the MENA region.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-slate-800 mb-4">
                Investment Thesis
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                We focus on early-stage technology companies that demonstrate strong 
                product-market fit, scalable business models, and the potential to 
                become category leaders in their respective markets.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-teal-100 rounded-lg mt-1">
                    <Target className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Seed to Series A</h4>
                    <p className="text-slate-600">$100K - $2M initial investments</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-teal-100 rounded-lg mt-1">
                    <Globe className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">MENA Focus</h4>
                    <p className="text-slate-600">Egypt-based with regional expansion potential</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-teal-100 rounded-lg mt-1">
                    <Zap className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Tech-Enabled</h4>
                    <p className="text-slate-600">SaaS, FinTech, HealthTech, EdTech, and E-commerce</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="font-serif text-2xl font-semibold text-slate-800 mb-6">
              Fund Highlights
            </h3>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-slate-600">Target Fund Size</span>
                <span className="font-semibold text-slate-800">$50 Million</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-slate-600">Investment Range</span>
                <span className="font-semibold text-slate-800">$100K - $2M</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-slate-600">Portfolio Companies</span>
                <span className="font-semibold text-slate-800">25-30</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-slate-600">Fund Term</span>
                <span className="font-semibold text-slate-800">10 Years</span>
              </div>
              
              <div className="flex justify-between items-center py-3">
                <span className="text-slate-600">Target IRR</span>
                <span className="font-semibold text-teal-600">25%+</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <a
                href="/fund-ii-onepager.pdf"
                download
                className="w-full bg-gradient-to-r from-teal-600 to-slate-700 text-white py-3 px-6 rounded-lg font-medium hover:from-teal-700 hover:to-slate-800 transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Download className="h-5 w-5" />
                <span>Download One-Pager</span>
              </a>
            </div>
          </div>
        </div>

        {/* Track Record */}
        <div className="bg-gradient-to-r from-teal-600 to-slate-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="font-serif text-3xl font-bold mb-4">
              Proven Track Record
            </h3>
            <p className="text-teal-100 text-lg max-w-2xl mx-auto">
              Our Fund I performance demonstrates our ability to identify and support 
              high-growth companies in the Egyptian startup ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-teal-300" />
              </div>
              <h4 className="text-3xl font-bold mb-2">28%</h4>
              <p className="text-teal-100">Net IRR (Fund I)</p>
            </div>
            
            <div className="text-center">
              <h4 className="text-3xl font-bold mb-2">2.4x</h4>
              <p className="text-teal-100">Multiple (Fund I)</p>
            </div>
            
            <div className="text-center">
              <h4 className="text-3xl font-bold mb-2">5</h4>
              <p className="text-teal-100">Successful Exits</p>
            </div>
            
            <div className="text-center">
              <h4 className="text-3xl font-bold mb-2">18</h4>
              <p className="text-teal-100">Active Companies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};