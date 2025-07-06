import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

export const Team: React.FC = () => {
  const team = [
    {
      name: 'Ahmed Hassan',
      title: 'Managing Partner',
      bio: 'Former McKinsey partner with 15+ years in MENA tech investments. Led exits worth $500M+ across the region.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'ahmed@disruptech.com'
    },
    {
      name: 'Sarah El-Masry',
      title: 'Investment Partner',
      bio: 'Ex-Careem executive and serial entrepreneur. Deep expertise in fintech and marketplace businesses across MENA.',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'sarah@disruptech.com'
    },
    {
      name: 'Omar Farouk',
      title: 'Principal',
      bio: 'Former Google product manager turned investor. Specializes in SaaS and AI-driven startups with proven scaling experience.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'omar@disruptech.com'
    },
    {
      name: 'Nadia Mansour',
      title: 'Investment Associate',
      bio: 'CFA charterholder with investment banking background. Focuses on due diligence and portfolio company support.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'nadia@disruptech.com'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our Team
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A diverse team of experienced investors, operators, and entrepreneurs 
            committed to supporting the next generation of Egyptian startups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="group bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-r from-teal-600/20 to-slate-700/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="font-serif text-xl font-semibold text-slate-800 mb-2">
                  {member.name}
                </h3>
                
                <p className="text-teal-600 font-medium mb-4">
                  {member.title}
                </p>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                
                <div className="flex items-center justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    className="p-2 bg-slate-100 rounded-full hover:bg-teal-100 hover:text-teal-600 transition-colors duration-200"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 bg-slate-100 rounded-full hover:bg-teal-100 hover:text-teal-600 transition-colors duration-200"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Board */}
        <div className="mt-20 text-center">
          <h3 className="font-serif text-2xl font-semibold text-slate-800 mb-8">
            Advisory Board
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h4 className="font-semibold text-slate-800 mb-2">Dr. Mahmoud Mohieldin</h4>
              <p className="text-slate-600 text-sm">Former World Bank Senior VP</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-slate-800 mb-2">Amr Awadallah</h4>
              <p className="text-slate-600 text-sm">Co-founder, Cloudera</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-slate-800 mb-2">Dina Sherif</h4>
              <p className="text-slate-600 text-sm">Co-founder, Ahead of the Curve</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};