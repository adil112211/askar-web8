
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useInView } from '../../hooks/useInView';
import AnimatedStatistic from '../AnimatedStatistic';
import { SERVICES_DATA, ROUTES } from '../../constants';
import ServiceCard from '../ServiceCard';

interface HomePageProps {
  onContactClick: () => void;
}

const partnerLogos = [
  'OOCL', 'MSC', 'Hapag Lloyd', 'CMA CGM', 'Hyundai', 'FESCO'
];

const AnimatedSection: React.FC<{children: ReactNode}> = ({ children }) => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <div ref={ref} className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {children}
    </div>
  );
};


const HomePage: React.FC<HomePageProps> = ({ onContactClick }) => {
  const { t, lang } = useLanguage();

  return (
    <div className="space-y-16 md:space-y-24 lg:space-y-32">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-slate-50 pt-16 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              {t.home.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-600">
              {t.home.heroSubtitle}
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link to={ROUTES.SERVICES} className="inline-block bg-blue-500 text-white font-bold text-lg px-8 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-transform hover:scale-105">
                {t.home.heroButton}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">{t.home.advantagesTitle}</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {t.home.advantages.map((adv, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-800">{adv.title}</h3>
                <p className="mt-2 text-slate-600">{adv.text}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

       {/* Services Preview Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">{t.home.servicesTitle}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES_DATA.map(service => (
                <div key={service.id} className="bg-white p-6 rounded-lg shadow-md border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="text-4xl mb-4">{service.emoji}</div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{service.title[lang]}</h3>
                  <p className="text-slate-600 mb-4 text-sm">{service.brief[lang]}</p>
                  <Link to={`/services/${service.id}`} className="font-semibold text-blue-500 hover:text-blue-600">
                    {t.services.learnMore} &rarr;
                  </Link>
                </div>
              ))}
            </div>
             <div className="mt-12 text-center">
                <Link to={ROUTES.SERVICES} className="inline-block bg-blue-500 text-white font-bold px-8 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-transform hover:scale-105">
                  {t.home.allServicesButton}
                </Link>
              </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <AnimatedStatistic target={6} label={t.home.stats[0].label} isPlus />
              <AnimatedStatistic target={500} label={t.home.stats[1].label} isPlus />
              <AnimatedStatistic target={15} label={t.home.stats[2].label} isPlus />
              <AnimatedStatistic target={247} label={t.home.stats[3].label} is247 />
            </div>
          </div>
        </AnimatedSection>
      </section>

       {/* Partners Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-center text-3xl font-bold text-slate-900">{t.home.partnersTitle}</h2>
          <div className="mt-10 flow-root">
            <div className="-mt-4 -ml-8 flex flex-wrap justify-center lg:-ml-4">
              {partnerLogos.map((logo, i) => (
                <div key={i} className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center items-center lg:ml-4 lg:flex-grow-0">
                  <p className="text-2xl font-semibold text-slate-500 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">{logo}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-500">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              {t.home.ctaTitle}
            </h2>
            <button onClick={onContactClick} className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-md text-base font-medium text-blue-600 bg-white hover:bg-blue-50 sm:w-auto transition-transform hover:scale-105">
              {t.home.ctaButton}
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
