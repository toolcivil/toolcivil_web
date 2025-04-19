import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

// Hardcoded translations as fallback
const footerTranslations = {
  company: {
    title: { en: 'Company', th: 'บริษัท' },
    about: { en: 'About Us', th: 'เกี่ยวกับเรา' },
    careers: { en: 'Careers', th: 'ร่วมงานกับเรา' },
    contact: { en: 'Contact', th: 'ติดต่อ' }
  },
  products: {
    title: { en: 'Products', th: 'ผลิตภัณฑ์' },
    engineeringTools: { en: 'Engineering Tools', th: 'เครื่องมือวิศวกรรม' },
    certification: { en: 'Certification Programs', th: 'โปรแกรมการรับรอง' },
    community: { en: 'Community Tools', th: 'เครื่องมือชุมชน' }
  },
  resources: {
    title: { en: 'Resources', th: 'ทรัพยากร' },
    documentation: { en: 'Documentation', th: 'เอกสาร' },
    blog: { en: 'Blog', th: 'บล็อก' },
    support: { en: 'Support', th: 'การสนับสนุน' }
  },
  copyright: { en: 'All rights reserved.', th: 'สงวนลิขสิทธิ์ทั้งหมด' }
};

const Footer = () => {
  // Use English as default language
  const currentLanguage = 'en';
  const t = footerTranslations;

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ToolCivil.com</h3>
            <p className="text-gray-300 mb-4">
              A comprehensive platform for engineering and construction professionals.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.company.title[currentLanguage]}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">{t.company.about[currentLanguage]}</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white">{t.company.careers[currentLanguage]}</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">{t.company.contact[currentLanguage]}</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.products.title[currentLanguage]}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/engineering-tools" className="text-gray-300 hover:text-white">{t.products.engineeringTools[currentLanguage]}</Link>
              </li>
              <li>
                <Link to="/certification" className="text-gray-300 hover:text-white">{t.products.certification[currentLanguage]}</Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-300 hover:text-white">{t.products.community[currentLanguage]}</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.resources.title[currentLanguage]}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/documentation" className="text-gray-300 hover:text-white">{t.resources.documentation[currentLanguage]}</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white">{t.resources.blog[currentLanguage]}</Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-white">{t.resources.support[currentLanguage]}</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ToolCivil.com. {t.copyright[currentLanguage]}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
