import React from 'react';
import { 
  BarChart3, 
  FileText, 
  MessageSquare, 
  PieChart, 
  Settings, 
  Users,
  Home,
  TrendingUp,
  Shield,
  Sparkles,
  DollarSign,
  Calendar,
  Zap,
  Mail,
  CheckCircle
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const { user } = useAuth();

  const investorNavigation = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'portfolio', label: 'Portfolio', icon: PieChart },
    { id: 'capital-account', label: 'Capital Account', icon: DollarSign },
    { id: 'tax-documents', label: 'Tax Documents', icon: Calendar },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'ai-features', label: 'AI Features', icon: Sparkles },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const adminNavigation = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'portfolio', label: 'Portfolio', icon: PieChart },
    { id: 'investors', label: 'Investors', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'compliance', label: 'Compliance', icon: CheckCircle },
    { id: 'workflow', label: 'Automation', icon: Zap },
    { id: 'communication', label: 'Communications', icon: Mail },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'ai-features', label: 'AI Features', icon: Sparkles },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const navigation = user?.role === 'admin' ? adminNavigation : investorNavigation;

  return (
    <div className="w-64 bg-slate-800 text-white flex flex-col h-screen fixed left-0 top-0 z-30">
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 bg-gradient-to-r from-teal-600 to-teal-500 rounded-lg flex items-center justify-center">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Disruptech</h2>
            <p className="text-slate-400 text-sm">Ventures</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <div className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isAIFeature = item.id === 'ai-features';
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 relative ${
                  activeTab === item.id
                    ? isAIFeature 
                      ? 'bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-lg'
                      : 'bg-teal-600 text-white shadow-lg'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
                {isAIFeature && (
                  <div className="absolute -top-1 -right-1">
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 bg-gradient-to-r from-teal-600 to-teal-500 rounded-lg flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium">Performance</p>
            <p className="text-xs text-slate-400">+12.4% this quarter</p>
          </div>
        </div>
      </div>
    </div>
  );
};