import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const News = () => {
  const { language } = useLanguage();

  const translations = {
    title: {
      th: 'ข่าวสารและอัปเดต',
      en: 'News & Updates'
    },
    subtitle: {
      th: 'ติดตามข่าวสารล่าสุดเกี่ยวกับการพัฒนาเครื่องมือวิศวกรรมและเทคโนโลยีใหม่ๆ',
      en: 'Stay updated with the latest news about engineering tools and new technologies'
    },
    readMore: {
      th: 'อ่านเพิ่มเติม',
      en: 'Read More'
    }
  };

  const newsItems = [
    {
      id: 1,
      date: 'June 15, 2023',
      title: {
        th: 'เปิดตัวเครื่องคำนวณคอนกรีตใหม่',
        en: 'New Concrete Calculator Released'
      },
      description: {
        th: 'เราได้อัปเดตเครื่องคำนวณคอนกรีตด้วยฟีเจอร์ใหม่สำหรับการประมาณปริมาตรที่แม่นยำยิ่งขึ้นสำหรับโครงสร้างที่ซับซ้อน',
        en: 'We\'ve updated our concrete calculator with new features for more accurate volume estimations for complex structures.'
      },
      link: '/news/concrete-calculator'
    },
    {
      id: 2,
      date: 'June 10, 2023',
      title: {
        th: 'อัปเดตมาตรฐานอุตสาหกรรม',
        en: 'Industry Standards Update'
      },
      description: {
        th: 'คลังเอกสารของเราตอนนี้มีมาตรฐานการก่อสร้างล่าสุดปี 2023 และแนวทางการวิศวกรรมโครงสร้าง',
        en: 'Our document library now includes the latest 2023 construction standards and guidelines for structural engineering.'
      },
      link: '/news/standards-update'
    },
    {
      id: 3,
      date: 'June 5, 2023',
      title: {
        th: 'การวิเคราะห์โครงสร้างด้วย AI',
        en: 'AI-Powered Structural Analysis'
      },
      description: {
        th: 'แนะนำเครื่องมือวิเคราะห์โครงสร้างด้วย AI ใหม่สำหรับระบบคอนกรีตสำเร็จรูปพร้อมความแม่นยำและความเร็วที่เพิ่มขึ้น',
        en: 'Introducing our new AI-powered structural analysis tool for precast systems with enhanced accuracy and speed.'
      },
      link: '/news/ai-structural-analysis'
    },
    {
      id: 4,
      date: 'May 30, 2023',
      title: {
        th: 'การอัปเดตระบบ Precast',
        en: 'Precast System Update'
      },
      description: {
        th: 'เพิ่มฟีเจอร์ใหม่สำหรับการออกแบบและคำนวณระบบคอนกรีตสำเร็จรูป',
        en: 'Added new features for precast concrete system design and calculation.'
      },
      link: '/news/precast-update'
    },
    {
      id: 5,
      date: 'May 25, 2023',
      title: {
        th: 'การปรับปรุงประสิทธิภาพ',
        en: 'Performance Improvements'
      },
      description: {
        th: 'ปรับปรุงประสิทธิภาพการทำงานของเครื่องมือทั้งหมดเพื่อการใช้งานที่เร็วขึ้น',
        en: 'Enhanced performance of all tools for faster operation.'
      },
      link: '/news/performance-improvements'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {translations.title[language]}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {translations.subtitle[language]}
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <motion.div 
              key={news.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center text-gray-500 mb-4">
                <FaCalendarAlt className="mr-2" />
                <span>{news.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{news.title[language]}</h3>
              <p className="text-gray-600 mb-4">
                {news.description[language]}
              </p>
              <Link 
                to={news.link} 
                className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-2"
              >
                {translations.readMore[language]}
                <FaArrowRight className="text-sm" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Back to Home Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-main text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            {language === 'th' ? 'กลับไปหน้าหลัก' : 'Back to Home'}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default News; 