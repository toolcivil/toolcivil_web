import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();

  const translations = {
    home: {
      th: 'หน้าแรก',
      en: 'Home'
    },
    engineeringTools: {
      th: 'เครื่องมือวิศวกรรม',
      en: 'Engineering Tools'
    },
    documentLibrary: {
      th: 'คลังเอกสาร',
      en: 'Document Library'
    },
    precastSystem: {
      th: 'ระบบคอนกรีตสำเร็จรูป',
      en: 'Precast System'
    },
    support: {
      th: 'สนับสนุน',
      en: 'Support'
    },
    login: {
      th: 'เข้าสู่ระบบ',
      en: 'Login'
    },
    register: {
      th: 'ลงทะเบียน',
      en: 'Register'
    },
    courses: {
      th: 'คอร์สอบรม',
      en: 'Courses'
    },
    marketplace: {
      th: 'Marketplace',
      en: 'Marketplace'
    }
  };

  const navItems = [
    { path: '/', label: translations.home[language] },
    { path: '/engineering-tools', label: translations.engineeringTools[language] },
    { path: '/document-library', label: translations.documentLibrary[language] },
    { path: '/precast-system', label: translations.precastSystem[language] },
    { path: '/courses', label: translations.courses[language] },
    { path: '/marketplace', label: translations.marketplace[language] },
    { path: '/support', label: translations.support[language] }
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600">
                ToolCivil.com
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-2 flex-nowrap overflow-x-auto">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    location.pathname === item.path
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <LanguageSwitcher />
            <Link
              to="/login"
              className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              {translations.login[language]}
            </Link>
            <Link
              to="/register"
              className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
            >
              {translations.register[language]}
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                location.pathname === item.path
                  ? 'bg-blue-50 border-blue-500 text-blue-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-3 py-2">
            <LanguageSwitcher />
          </div>
          <Link
            to="/login"
            className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50"
          >
            {translations.login[language]}
          </Link>
          <Link
            to="/register"
            className="block px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            {translations.register[language]}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
