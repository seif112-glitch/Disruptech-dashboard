import React from 'react';
import { Linkedin, Twitter, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-600 to-slate-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">DisrupTech Ventures</h3>
                <p className="text-slate-400">Fund II</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Empowering Egypt's next generation of startups through strategic 
              investments and hands-on support.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-lg hover:bg-teal-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-lg hover:bg-teal-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:investors@disruptech.com"
                className="p-2 bg-slate-800 rounded-lg hover:bg-teal-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#overview" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Fund Overview
                </a>
              </li>
              <li>
                <a href="#team" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-teal-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-teal-400" />
                <span className="text-slate-300 text-sm">investors@disruptech.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-teal-400" />
                <span className="text-slate-300 text-sm">+20 2 1234 5678</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-400 text-sm">
            © 2024 DisrupTech Ventures. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};