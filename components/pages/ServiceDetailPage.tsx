
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { SERVICES_DATA, ROUTES } from '../../constants';
import Breadcrumbs from '../Breadcrumbs';

interface ServiceDetailPageProps {
  onContactClick: () => void;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onContactClick }) => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { lang, t } = useLanguage();

  const service = SERVICES_DATA.find((s) => s.id === serviceId);

  if (!service) {
    return <Navigate to={ROUTES.SERVICES} />;
  }

  const breadcrumbs = [
    { label: t.breadcrumbs.home, path: ROUTES.HOME },
    { label: t.breadcrumbs.services, path: ROUTES.SERVICES },
    { label: service.title[lang], path: `/services/${service.id}` },
  ];

  return (
    <div className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs crumbs={breadcrumbs} />
        <div className="mt-8 lg:grid lg:grid-cols-3 lg:gap-x-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              {service.title[lang]}
            </h1>
            <img 
              src={service.image} 
              alt={service.title[lang]}
              className="mt-6 rounded-lg shadow-lg w-full h-auto object-cover max-h-96"
            />
            <div className="mt-8 prose prose-lg text-slate-600 max-w-none">
                <p>{service.description[lang]}</p>
                {service.details[lang].map((detail, index) => (
                    <div key={index} className="mt-6">
                        <h3 className="font-bold text-slate-800">{detail.title}</h3>
                        <p>{detail.content}</p>
                    </div>
                ))}
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-1">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 sticky top-24">
              <h3 className="text-xl font-bold text-slate-800">{t.services.featuresTitle}</h3>
              <ul className="mt-4 space-y-3">
                {service.features[lang].map((feature, index) => (
                  <li key={index} className="flex items-start">
                     <svg className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={onContactClick}
                className="mt-8 w-full bg-blue-500 text-white font-semibold px-4 py-3 rounded-md hover:bg-blue-600 transition-colors shadow-sm"
              >
                {t.services.contactForDetails}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
