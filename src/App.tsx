import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FundOverview } from './components/FundOverview';
import { Team } from './components/Team';
import { Portfolio } from './components/Portfolio';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FundOverview />
        <Team />
        <Portfolio />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;