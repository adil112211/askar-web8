
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { LANGUAGES, ROUTES } from '../constants';

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const { lang, setLang, t } = useLanguage();
  const [isLangDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const NavLink: React.FC<{ to: string, children: React.ReactNode }> = ({ to, children }) => (
    <Link 
      to={to} 
      onClick={() => setMobileMenuOpen(false)}
      className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === to ? 'text-blue-500' : 'text-slate-700 hover:text-blue-500'} transition-colors`}
    >
      {children}
    </Link>
  );

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to={ROUTES.HOME} className="text-2xl font-bold text-blue-500">
              NewLS
            </Link>
          </div>
          <div className="hidden md:block">
            <nav className="ml-10 flex items-baseline space-x-4">
              <NavLink to={ROUTES.HOME}>{t.breadcrumbs.home}</NavLink>
              <NavLink to={ROUTES.SERVICES}>{t.header.services}</NavLink>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center text-slate-700 hover:text-blue-500 focus:outline-none transition-colors"
              >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a8 8 0 015.484 13.48l-1.47-1.47A6 6 0 104.99 8.99l.99.99V7a1 1 0 012 0v4a1 1 0 01-1 1H5a1 1 0 110-2h1.383A8.003 8.003 0 0110 2z" />
                    <path d="M14.516 6.52a1 1 0 01.707 1.707l-7.071 7.071a1 1 0 01-1.414 0l-3.536-3.535a1 1 0 011.414-1.414L7.5 12.586l6.309-6.309a1 1 0 01.707-.757z" />
                 </svg>
                {LANGUAGES.find(l => l.code === lang)?.name}
                <svg className={`w-4 h-4 ml-1 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isLangDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {LANGUAGES.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => { setLang(language.code); setLangDropdownOpen(false); }}
                        className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                      >
                        {language.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={onContactClick}
              className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors shadow-sm"
            >
              {t.header.contact}
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path className={!isMobileMenuOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                <path className={isMobileMenuOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to={ROUTES.HOME}>{t.breadcrumbs.home}</NavLink>
            <NavLink to={ROUTES.SERVICES}>{t.header.services}</NavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-slate-200">
             <div className="px-5">
               <button onClick={onContactClick} className="w-full px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors shadow-sm">{t.header.contact}</button>
             </div>
             <div className="mt-3 px-2 space-y-1">
                {LANGUAGES.map((language) => (
                    <button
                        key={language.code}
                        onClick={() => { setLang(language.code); setMobileMenuOpen(false); }}
                        className={`block w-full text-left rounded-md px-3 py-2 text-base font-medium ${lang === language.code ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-100'}`}
                    >
                        {language.name}
                    </button>
                ))}
             </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
