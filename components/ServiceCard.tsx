
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  onContactClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onContactClick }) => {
  const { lang, t } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate-200 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <img className="h-56 w-full object-cover" src={service.image} alt={service.title[lang]} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-slate-900">{service.title[lang]}</h3>
        <p className="mt-2 text-slate-600 flex-grow">{service.brief[lang]}</p>
        <div className="mt-4 pt-4 border-t border-slate-200">
          <h4 className="text-sm font-semibold text-slate-500 uppercase mb-2">{t.services.featuresTitle}</h4>
          <ul className="space-y-2">
            {service.features[lang].slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center text-slate-700">
                <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          <Link
            to={`/services/${service.id}`}
            className="w-full text-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors shadow-sm"
          >
            {t.services.learnMore}
          </Link>
          <button
            onClick={onContactClick}
            className="w-full px-4 py-2 bg-slate-100 text-slate-700 font-semibold rounded-md hover:bg-slate-200 transition-colors border border-slate-300"
          >
            {t.services.contactForDetails}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
