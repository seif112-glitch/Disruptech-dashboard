import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FundOverview } from './components/FundOverview';
import { AIInsights } from './components/AIInsights';
import { AIPreview } from './components/AIPreview';
import { AIMarketInsights } from './components/AIMarketInsights';
import { SmartSearch } from './components/SmartSearch';
import { Team } from './components/Team';
import { Portfolio } from './components/Portfolio';
import { SecurityCompliance } from './components/SecurityCompliance';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { EnhancedAIAssistant } from './components/EnhancedAIAssistant';
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
import { ComplianceView } from './components/admin/ComplianceView';
import { WorkflowAutomation } from './components/admin/WorkflowAutomation';
import { BulkCommunication } from './components/admin/BulkCommunication';
import { AIFeaturesView } from './components/ai/AIFeaturesView';
import { CapitalAccount } from './components/investor/CapitalAccount';
import { TaxDocuments } from './components/investor/TaxDocuments';
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

  // If not authenticated, show the marketing website with login at the bottom
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <FundOverview />
          <AIInsights />
          <AIPreview />
          <AIMarketInsights />
          <SmartSearch />
          <Team />
          <Portfolio />
          <SecurityCompliance />
          <ContactForm />
        </main>
        <Footer />
        <EnhancedAIAssistant />
        {/* Login form at the bottom */}
        <LoginForm />
      </div>
    );
  }

  // If authenticated, show the dashboard
  const renderActiveView = () => {
    switch (activeTab) {
      case 'dashboard':
        return <InvestorDashboard />;
      case 'portfolio':
        return <PortfolioView />;
      case 'capital-account':
        return <CapitalAccount />;
      case 'tax-documents':
        return <TaxDocuments />;
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
      case 'compliance':
        return user?.role === 'admin' ? <ComplianceView /> : <InvestorDashboard />;
      case 'workflow':
        return user?.role === 'admin' ? <WorkflowAutomation /> : <InvestorDashboard />;
      case 'communication':
        return user?.role === 'admin' ? <BulkCommunication /> : <InvestorDashboard />;
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