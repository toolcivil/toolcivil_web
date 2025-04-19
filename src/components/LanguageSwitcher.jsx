import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    {
      code: 'th',
      name: 'ไทย',
      flag: (
        <svg className="w-5 h-5" viewBox="0 0 36 24" xmlns="http://www.w3.org/2000/svg">
          {/* แถบสีแดง (แถบบน) */}
          <rect width="36" height="4.8" fill="#B22234" />
          {/* แถบสีขาว */}
          <rect width="36" height="4.8" y="4.8" fill="#FFFFFF" />
          {/* แถบสีน้ำเงิน (แถบกลาง) */}
          <rect width="36" height="9.6" y="9.6" fill="#002366" />
          {/* แถบสีขาว */}
          <rect width="36" height="4.8" y="19.2" fill="#FFFFFF" />
          {/* แถบสีแดง (แถบล่าง) */}
          <rect width="36" height="4.8" y="24" fill="#B22234" />
        </svg>
      )
    },
    {
      code: 'en',
      name: 'English',
      flag: (
        <svg className="w-5 h-5" viewBox="0 0 36 24" xmlns="http://www.w3.org/2000/svg">
          {/* พื้นหลังสีน้ำเงิน */}
          <rect width="36" height="24" fill="#012169"/>
          
          {/* กางเขนขาวในแนวเฉียง */}
          <path d="M0,0 L36,24 M36,0 L0,24" stroke="#FFFFFF" stroke-width="6"/>
          
          {/* กางเขนแดงในแนวเฉียง */}
          <path d="M0,0 L36,24 M36,0 L0,24" stroke="#C8102E" stroke-width="3.6"/> {/* ลดความกว้างของเส้นสีแดง */}
    
          {/* กางเขนขาวในแนวตั้งและแนวนอน */}
          <path d="M18,0 L18,24 M0,12 L36,12" stroke="#FFFFFF" stroke-width="8"/>
          
          {/* กางเขนแดงในแนวตั้งและแนวนอน */}
          <path d="M18,0 L18,24 M0,12 L36,12" stroke="#C8102E" stroke-width="3.6"/> {/* ลดความกว้างของเส้นสีแดง */}
        </svg>
      )
    }
  ];

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
      >
        {language === 'th' ? languages[0].flag : languages[1].flag}
        <span>{language === 'th' ? 'ไทย' : 'English'}</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                language === lang.code ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
              }`}
            >
              {lang.flag}
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
