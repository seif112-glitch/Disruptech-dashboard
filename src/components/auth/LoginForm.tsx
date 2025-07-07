import React from 'react';
import { Shield, User, Settings } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export const LoginForm: React.FC = () => {
  const { loginAsAdmin, loginAsInvestor } = useAuth();

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="mx-auto h-16 w-16 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Disruptech Ventures</h2>
            <p className="text-teal-200">Investor Dashboard Access</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-2xl p-8 space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Your Role</h3>
              <p className="text-gray-600 text-sm">Select your dashboard type to continue</p>
            </div>

            <div className="space-y-4">
              <button
                onClick={loginAsAdmin}
                className="w-full bg-gradient-to-r from-slate-800 to-slate-700 text-white py-4 px-6 rounded-lg font-medium hover:from-slate-700 hover:to-slate-600 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-3"
              >
                <Settings className="h-5 w-5" />
                <span>Admin Dashboard</span>
              </button>

              <button
                onClick={loginAsInvestor}
                className="w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white py-4 px-6 rounded-lg font-medium hover:from-teal-500 hover:to-teal-400 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-3"
              >
                <User className="h-5 w-5" />
                <span>Investor Dashboard</span>
              </button>
            </div>

            <div className="text-center text-sm text-gray-600 pt-4 border-t border-gray-200">
              <p>Demo Environment</p>
              <p className="text-xs mt-1">Click either button to access the respective dashboard</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="flex items-center justify-center space-x-2 text-teal-200">
              <Shield className="h-4 w-4" />
              <span className="text-sm">Secured with enterprise-grade encryption</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};