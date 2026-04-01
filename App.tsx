import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { HouseExtensionsPage } from './pages/HouseExtensionsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { AreasPage } from './pages/AreasPage';
import { PartnershipsPage } from './pages/PartnershipsPage';
import { WhyChoosePage } from './pages/WhyChoosePage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { FAQsPage } from './pages/FAQsPage';
import { DealPage } from './pages/DealPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { BuildersDealPage } from './pages/BuildersDealPage';
import { BuildersWalmerPage } from './pages/BuildersWalmerPage';
import { BuildersSholdenPage } from './pages/BuildersSholdenPage';
import { DoverPage } from './pages/DoverPage';
import { BuildersDealKentPage } from './pages/BuildersDealKentPage';
import { BuildersDoverKentPage } from './pages/BuildersDoverKentPage';
import { BuildersRamsgateKentPage } from './pages/BuildersRamsgateKentPage';
import { BuildersThanetKentPage } from './pages/BuildersThanetKentPage';
import { BuildersCanterburyKentPage } from './pages/BuildersCanterburyKentPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 text-brand-slate font-body">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/house-extensions" element={<HouseExtensionsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/areas" element={<AreasPage />} />
            <Route path="/partnerships" element={<PartnershipsPage />} />
            <Route path="/why-choose-us" element={<WhyChoosePage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/deal-areas" element={<DealPage />} />
            <Route path="/builders-deal" element={<BuildersDealPage />} />
            <Route path="/builders-walmer" element={<BuildersWalmerPage />} />
            <Route path="/builders-sholden" element={<BuildersSholdenPage />} />
            <Route path="/builders-dover" element={<DoverPage />} />
            <Route path="/builders-deal-kent" element={<BuildersDealKentPage />} />
            <Route path="/builders-dover-kent" element={<BuildersDoverKentPage />} />
            <Route path="/builders-ramsgate-kent" element={<BuildersRamsgateKentPage />} />
            <Route path="/builders-thanet-kent" element={<BuildersThanetKentPage />} />
            <Route path="/builders-canterbury-kent" element={<BuildersCanterburyKentPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
