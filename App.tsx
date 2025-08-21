
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import AllServicesPage from './components/pages/AllServicesPage';
import ServiceDetailPage from './components/pages/ServiceDetailPage';
import ContactModal from './components/ContactModal';
import { ROUTES } from './constants';

const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="bg-white text-slate-800 flex flex-col min-h-screen font-sans">
          <Header onContactClick={() => setModalOpen(true)} />
          <main className="flex-grow">
            <Routes>
              <Route path={ROUTES.HOME} element={<HomePage onContactClick={() => setModalOpen(true)} />} />
              <Route path={ROUTES.SERVICES} element={<AllServicesPage onContactClick={() => setModalOpen(true)} />} />
              <Route path={ROUTES.SERVICE_DETAIL} element={<ServiceDetailPage onContactClick={() => setModalOpen(true)} />} />
            </Routes>
          </main>
          <Footer />
          <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;
