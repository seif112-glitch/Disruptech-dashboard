import React from 'react';
import { Shield, Lock, Eye, FileCheck, Server, AlertTriangle } from 'lucide-react';

export const SecurityCompliance: React.FC = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Bank-level encryption and security protocols protect all sensitive data',
      features: ['256-bit SSL/TLS encryption', 'SOC 2 Type II certified', 'Regular penetration testing']
    },
    {
      icon: Lock,
      title: 'Multi-Factor Authentication',
      description: 'Advanced 2FA and biometric authentication for secure access',
      features: ['SMS and app-based 2FA', 'Biometric login support', 'Single sign-on (SSO)']
    },
    {
      icon: Eye,
      title: 'Privacy Protection',
      description: 'GDPR and CCPA compliant data handling and privacy controls',
      features: ['Data anonymization', 'Right to be forgotten', 'Consent management']
    },
    {
      icon: FileCheck,
      title: 'Audit & Compliance',
      description: 'Comprehensive audit trails and regulatory compliance',
      features: ['Complete audit logs', 'Regulatory reporting', 'Document versioning']
    },
    {
      icon: Server,
      title: 'Secure Infrastructure',
      description: 'Cloud-native architecture with redundancy and backup',
      features: ['AWS/Azure hosting', '99.9% uptime SLA', 'Automated backups']
    },
    {
      icon: AlertTriangle,
      title: 'Threat Detection',
      description: 'AI-powered threat detection and incident response',
      features: ['Real-time monitoring', 'Anomaly detection', '24/7 security team']
    }
  ];

  const complianceStandards = [
    { name: 'SOC 2 Type II', status: 'Certified', icon: '🛡️' },
    { name: 'GDPR', status: 'Compliant', icon: '🇪🇺' },
    { name: 'CCPA', status: 'Compliant', icon: '🇺🇸' },
    { name: 'ISO 27001', status: 'In Progress', icon: '📋' },
    { name: 'PCI DSS', status: 'Compliant', icon: '💳' },
    { name: 'FINRA', status: 'Aligned', icon: '🏛️' }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-600/20 border border-teal-400/30 rounded-full px-4 py-2 mb-6">
            <Shield className="h-4 w-4 text-teal-400" />
            <span className="font-medium text-teal-200">Enterprise Security</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Bank-Level Security & Compliance
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Your sensitive investment data is protected by enterprise-grade security measures 
            and comprehensive compliance frameworks trusted by leading financial institutions.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-teal-500/50 transition-colors">
                <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Compliance Standards */}
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-semibold mb-4">
              Regulatory Compliance
            </h3>
            <p className="text-slate-300">
              We maintain the highest standards of regulatory compliance across multiple jurisdictions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="text-center p-4 bg-slate-700 rounded-xl">
                <div className="text-2xl mb-2">{standard.icon}</div>
                <h4 className="font-medium text-white mb-1">{standard.name}</h4>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  standard.status === 'Certified' || standard.status === 'Compliant' 
                    ? 'bg-green-600/20 text-green-400' 
                    : standard.status === 'In Progress'
                    ? 'bg-yellow-600/20 text-yellow-400'
                    : 'bg-blue-600/20 text-blue-400'
                }`}>
                  {standard.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Security Commitment */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-600/20 to-blue-600/20 rounded-2xl p-8 border border-teal-500/30">
            <h3 className="font-serif text-2xl font-bold mb-4">
              Our Security Commitment
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              We understand that trust is the foundation of our relationship with investors. 
              That's why we've invested heavily in creating a security-first platform that 
              exceeds industry standards and regulatory requirements.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-teal-400" />
                <span className="text-slate-300">24/7 Monitoring</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="h-4 w-4 text-teal-400" />
                <span className="text-slate-300">Zero-Trust Architecture</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileCheck className="h-4 w-4 text-teal-400" />
                <span className="text-slate-300">Annual Security Audits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};