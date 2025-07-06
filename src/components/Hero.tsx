import React from 'react';
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-teal-600/20 backdrop-blur-sm border border-teal-400/30 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            <span className="text-teal-200 font-medium">Now Fundraising</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            DisrupTech
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">
              Fund II
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering Egypt's Next Generation of Startups
          </p>
          
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            A $50M venture capital fund focused on early-stage Egyptian startups 
            that are transforming industries and creating lasting impact.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-teal-600/20 rounded-full">
                <Target className="h-8 w-8 text-teal-400" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">$50M</h3>
            <p className="text-slate-300">Target Fund Size</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-teal-600/20 rounded-full">
                <TrendingUp className="h-8 w-8 text-teal-400" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">25+</h3>
            <p className="text-slate-300">Portfolio Companies</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-teal-600/20 rounded-full">
                <Users className="h-8 w-8 text-teal-400" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">15+</h3>
            <p className="text-slate-300">Years Experience</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-teal-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-teal-700 hover:to-teal-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
          >
            <span>Request Fund Deck</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="#overview"
            className="group text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-slate-800 transition-all duration-300 hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};