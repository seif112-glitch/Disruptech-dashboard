import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FundOverview } from './components/FundOverview';
import { AIInsights } from './components/AIInsights';
import { SmartSearch } from './components/SmartSearch';
import { Team } from './components/Team';
import { Portfolio } from './components/Portfolio';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import { LoginForm } from './components/auth/LoginForm';
import { Header as DashboardHeader } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { InvestorDashboard } from './components/dashboard/InvestorDashboard';
import { PortfolioView } from './components/portfolio/PortfolioView';
import { DocumentsView } from './components/documents/DocumentsView';
import { MessagesView } from './components/messages/MessagesView';
import { SettingsView } from './components/settings/SettingsView';
import { InvestorsView } from './components/admin/InvestorsView';
import { AnalyticsView } from './components/admin/AnalyticsView';
import { AIFeaturesView } from './components/ai/AIFeaturesView';
import { useAuth } from './hooks/useAuth';

function App() {
  const { user, isAuthenticated, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Hero />
            <FundOverview />
            <AIInsights />
            <SmartSearch />
            <Team />
            <Portfolio />
            <ContactForm />
          </main>
          <Footer />
          <AIAssistant />
        </div>
        <LoginForm />
      </>
    );
  }

  const renderActiveView = () => {
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
        return user?.role === 'admin' ? <InvestorsView /> : <InvestorDashboard />;
      case 'analytics':
        return user?.role === 'admin' ? <AnalyticsView /> : <InvestorDashboard />;
      case 'ai-features':
        return <AIFeaturesView />;
      default:
        return <InvestorDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="ml-64">
        <DashboardHeader />
        <main className="p-6">
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
}

export default App;