import React, { useState } from 'react';
import { FaFileExcel, FaFileAlt, FaBook, FaFileContract, FaDownload, FaSearch } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const DocumentLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const { language } = useLanguage();

  // Define translations directly in the component
  const translations = {
    title: {
      en: 'Document Library',
      th: 'ห้องสมุดเอกสาร'
    },
    search: {
      en: 'Search documents...',
      th: 'ค้นหาเอกสาร...'
    },
    categories: {
      all: {
        en: 'All Documents',
        th: 'เอกสารทั้งหมด'
      },
      spreadsheets: {
        en: 'Spreadsheets',
        th: 'สเปรดชีต'
      },
      standards: {
        en: 'Standards',
        th: 'มาตรฐาน'
      },
      manuals: {
        en: 'Manuals',
        th: 'คู่มือ'
      },
      reference: {
        en: 'Reference',
        th: 'เอกสารอ้างอิง'
      }
    },
    download: {
      en: 'Download',
      th: 'ดาวน์โหลด'
    },
    noResults: {
      en: 'No documents found',
      th: 'ไม่พบเอกสาร'
    },
    searchTip: {
      en: 'Try adjusting your search or filter criteria',
      th: 'ลองปรับเงื่อนไขการค้นหาหรือตัวกรอง'
    },
    subtitle: {
      en: 'Access engineering documents, spreadsheets, and reference materials for your projects',
      th: 'เข้าถึงเอกสารวิศวกรรม สเปรดชีต และเอกสารอ้างอิงสำหรับโครงการของคุณ'
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  // Document data
  const documents = [
    {
      id: 1,
      title: language === 'th' ? 'สเปรดชีตออกแบบส่วนผสมคอนกรีต' : 'Concrete Mix Design Spreadsheet',
      description: language === 'th' ? 'คำนวณสัดส่วนผสมคอนกรีตที่เหมาะสมตามความต้องการกำลัง' : 'Calculate optimal concrete mix proportions based on strength requirements.',
      category: 'spreadsheets',
      downloadLink: '/documents/concrete-mix-design.xlsx',
      icon: <FaFileExcel className="text-green-600" size={36} />,
    },
    {
      id: 2,
      title: language === 'th' ? 'สเปรดชีตออกแบบคาน' : 'Beam Design Spreadsheet',
      description: language === 'th' ? 'สเปรดชีตสำหรับการคำนวณออกแบบคานคอนกรีตเสริมเหล็ก' : 'Comprehensive spreadsheet for reinforced concrete beam design calculations.',
      category: 'spreadsheets',
      downloadLink: '/documents/beam-design.xlsx',
      icon: <FaFileExcel className="text-green-600" size={36} />,
    },
    {
      id: 3,
      title: 'ACI 318-19 Building Code',
      description: language === 'th' ? 'ข้อกำหนดสำหรับการออกแบบและก่อสร้างคอนกรีต' : 'Requirements for structural concrete design and construction.',
      category: 'standards',
      downloadLink: '/documents/aci-318-19.pdf',
      icon: <FaFileContract className="text-blue-600" size={36} />,
    },
    {
      id: 4,
      title: 'AISC Steel Construction Manual',
      description: language === 'th' ? 'คู่มืออ้างอิงสำหรับการออกแบบและก่อสร้างโครงสร้างเหล็ก' : 'Reference for structural steel design and construction.',
      category: 'standards',
      downloadLink: '/documents/aisc-manual.pdf',
      icon: <FaFileContract className="text-blue-600" size={36} />,
    },
    {
      id: 5,
      title: language === 'th' ? 'คู่มือออกแบบคอนกรีตเสริมเหล็ก' : 'Reinforced Concrete Design Handbook',
      description: language === 'th' ? 'คู่มือครอบคลุมสำหรับการออกแบบโครงสร้างคอนกรีตเสริมเหล็ก' : 'Comprehensive guide for designing reinforced concrete structures.',
      category: 'manuals',
      downloadLink: '/documents/rc-design-handbook.pdf',
      icon: <FaBook className="text-red-600" size={36} />,
    },
    {
      id: 6,
      title: language === 'th' ? 'คู่มือวิศวกรรมฐานราก' : 'Foundation Engineering Handbook',
      description: language === 'th' ? 'คู่มือสำหรับการออกแบบฐานรากประเภทต่างๆ' : 'Guide for designing various types of foundations.',
      category: 'manuals',
      downloadLink: '/documents/foundation-handbook.pdf',
      icon: <FaBook className="text-red-600" size={36} />,
    },
    {
      id: 7,
      title: language === 'th' ? 'ตารางคุณสมบัติดิน' : 'Soil Properties Reference Table',
      description: language === 'th' ? 'ตารางอ้างอิงคุณสมบัติดินที่ใช้ในงานวิศวกรรมปฐพี' : 'Reference table for common soil properties used in geotechnical engineering.',
      category: 'reference',
      downloadLink: '/documents/soil-properties.pdf',
      icon: <FaFileAlt className="text-purple-600" size={36} />,
    },
    {
      id: 8,
      title: language === 'th' ? 'คุณสมบัติวัสดุก่อสร้าง' : 'Construction Material Properties',
      description: language === 'th' ? 'เอกสารอ้างอิงสำหรับคุณสมบัติของวัสดุก่อสร้างทั่วไป' : 'Reference document for properties of common construction materials.',
      category: 'reference',
      downloadLink: '/documents/material-properties.pdf',
      icon: <FaFileAlt className="text-purple-600" size={36} />,
    },
  ];

  // Filter documents based on search term and active category
  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || doc.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 tracking-tight">
            {translations.title[language]}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {translations.subtitle[language]}
          </p>
        </div>
        
        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-6">
            {/* Search Input */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder={translations.search[language]}
                className="w-full h-12 pl-12 pr-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                value={searchTerm}
                onChange={handleSearch}
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 md:justify-end">
              {['all', 'spreadsheets', 'standards', 'manuals', 'reference'].map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    activeCategory === category 
                    ? 'bg-blue-600 text-white shadow-md transform scale-105' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {translations.categories[category][language]}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Document Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.length > 0 ? (
            filteredDocuments.map((doc) => (
              <div 
                key={doc.id} 
                className="bg-white rounded-2xl shadow-lg p-6 transition-all duration-200 hover:shadow-xl hover:transform hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    {doc.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{doc.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{doc.description}</p>
                    <a 
                      href={doc.downloadLink}
                      className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                    >
                      <FaDownload className="mr-2" /> 
                      {translations.download[language]}
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16 text-gray-500">
              <FaSearch className="text-5xl mb-4 opacity-50" />
              <p className="text-xl font-medium">{translations.noResults[language]}</p>
              <p className="text-sm mt-2">{translations.searchTip[language]}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentLibrary;
