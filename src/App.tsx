import React, { useState } from 'react';
import { useAuth } from './hooks/useAuth';
import { LoginForm } from './components/auth/LoginForm';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { InvestorDashboard } from './components/dashboard/InvestorDashboard';
import { PortfolioView } from './components/portfolio/PortfolioView';
import { DocumentsView } from './components/documents/DocumentsView';
import { MessagesView } from './components/messages/MessagesView';
import { SettingsView } from './components/settings/SettingsView';
import { InvestorsView } from './components/admin/InvestorsView';
import { AnalyticsView } from './components/admin/AnalyticsView';
import { AIFeaturesView } from './components/ai/AIFeaturesView';

function App() {
  const { isAuthenticated, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <InvestorDashboard />;
      case 'portfolio':
        return <PortfolioView />;
      case 'documents':
        return <DocumentsView />;
      case 'messages':
        return <MessagesView />;
      case 'settings':
        return <SettingsView />;
      case 'investors':
        return <InvestorsView />;
      case 'analytics':
        return <AnalyticsView />;
      case 'ai-features':
        return <AIFeaturesView />;
      default:
        return <InvestorDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col ml-64">
        <Header />
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;