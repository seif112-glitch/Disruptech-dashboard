import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-teal-600 to-slate-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div>
              <h1 className={`font-bold text-xl transition-colors ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}>
                DisrupTech
              </h1>
              <p className={`text-sm transition-colors ${
                isScrolled ? 'text-teal-600' : 'text-teal-200'
              }`}>
                Fund II
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            <div className="inline-flex items-center space-x-2 bg-teal-600/20 backdrop-blur-sm border border-teal-400/30 rounded-full px-6 py-2">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
              <span className="text-teal-200 font-medium">Now Fundraising</span>
            </div>
            
            {[
              { label: 'Overview', id: 'overview' },
              { label: 'Team', id: 'team' },
              { label: 'Portfolio', id: 'portfolio' },
              { label: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-200 hover:scale-105 ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-teal-600' 
                    : 'text-white hover:text-teal-200'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <a
              href="/fund-ii-deck.pdf"
              download
              className="bg-gradient-to-r from-teal-600 to-slate-700 text-white px-6 py-2 rounded-full font-medium hover:from-teal-700 hover:to-slate-800 transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>Fund Deck</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'text-slate-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <nav className="py-4 space-y-2">
              <div className="px-4 py-2">
                <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse"></div>
                  <span className="font-medium text-sm">Now Fundraising</span>
                </div>
              </div>
              
              {[
                { label: 'Overview', id: 'overview' },
                { label: 'Team', id: 'team' },
                { label: 'Portfolio', id: 'portfolio' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-gray-50 hover:text-teal-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="px-4 pt-2">
                <a
                  href="/fund-ii-deck.pdf"
                  download
                  className="bg-gradient-to-r from-teal-600 to-slate-700 text-white px-6 py-2 rounded-full font-medium hover:from-teal-700 hover:to-slate-800 transition-all duration-200 flex items-center justify-center space-x-2 w-full"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Fund Deck</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};