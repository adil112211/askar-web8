
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { SERVICES_DATA, ROUTES } from '../constants';

const Footer: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="text-2xl font-bold text-blue-500">
              NewLS
            </Link>
            <p className="text-slate-600 text-base">{t.footer.slogan}</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-500 tracking-wider uppercase">{t.footer.services}</h3>
                <ul className="mt-4 space-y-4">
                  {SERVICES_DATA.map((service) => (
                    <li key={service.id}>
                      <Link to={`/services/${service.id}`} className="text-base text-slate-600 hover:text-blue-500 transition-colors">
                        {service.title[lang]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-500 tracking-wider uppercase">{t.footer.contactInfo}</h3>
                <ul className="mt-4 space-y-4">
                  <li><p className="text-base text-slate-600">{t.footer.address}</p></li>
                  <li><p className="text-base text-slate-600">{t.footer.phone}</p></li>
                  <li><p className="text-base text-slate-600">{t.footer.email}</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-base text-slate-500 xl:text-center">&copy; {new Date().getFullYear()} {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
