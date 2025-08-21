
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { SERVICES_DATA } from '../../constants';
import ServiceCard from '../ServiceCard';

interface AllServicesPageProps {
  onContactClick: () => void;
}

const AllServicesPage: React.FC<AllServicesPageProps> = ({ onContactClick }) => {
  const { t } = useLanguage();

  return (
    <div className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">{t.services.pageTitle}</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">{t.home.heroSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} onContactClick={onContactClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServicesPage;
