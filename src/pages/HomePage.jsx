import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalculator, FaFileAlt, FaBuilding, FaCalendarAlt, FaArrowRight, FaHeart, FaCoffee, FaHandshake, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useLanguage, translations } from '../contexts/LanguageContext';

const HomePage = () => {
  const { language } = useLanguage();
  const t = translations.home;

  const scrollSupporters = (direction) => {
    const container = document.getElementById('supporters-container');
    const scrollAmount = direction === 'left' ? -300 : 300;
    
    if (container) {
      const targetScroll = container.scrollLeft + scrollAmount;
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t.hero.title[language]}
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t.hero.subtitle[language]}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/engineering-tools" className="bg-white text-blue-600 font-medium py-4 px-8 rounded-full hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
                {t.hero.exploreTools[language]}
                <FaArrowRight />
              </Link>
              <Link to="/register" className="bg-transparent border-2 border-white text-white font-medium py-4 px-8 rounded-full hover:bg-white/10 transition-colors">
                {t.hero.signUpFree[language]}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t.features.title[language]}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-100 rounded-xl">
                  <FaCalculator className="text-4xl text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{t.features.engineeringTools.title[language]}</h3>
              <p className="text-gray-600 text-center mb-6">
                {t.features.engineeringTools.description[language]}
              </p>
              <Link to="/engineering-tools" className="flex items-center justify-center text-blue-600 font-medium hover:text-blue-700 gap-2">
                {t.features.engineeringTools.link[language]}
                <FaArrowRight className="text-sm" />
              </Link>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-green-100 rounded-xl">
                  <FaFileAlt className="text-4xl text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{t.features.documentLibrary.title[language]}</h3>
              <p className="text-gray-600 text-center mb-6">
                {t.features.documentLibrary.description[language]}
              </p>
              <Link to="/document-library" className="flex items-center justify-center text-green-600 font-medium hover:text-green-700 gap-2">
                {t.features.documentLibrary.link[language]}
                <FaArrowRight className="text-sm" />
              </Link>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-purple-100 rounded-xl">
                  <FaBuilding className="text-4xl text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{t.features.precastSolutions.title[language]}</h3>
              <p className="text-gray-600 text-center mb-6">
                {t.features.precastSolutions.description[language]}
              </p>
              <Link to="/precast-system" className="flex items-center justify-center text-purple-600 font-medium hover:text-purple-700 gap-2">
                {t.features.precastSolutions.link[language]}
                <FaArrowRight className="text-sm" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {t.news.title[language]}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/news" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-2">
                {t.news.viewAll[language]}
                <FaArrowRight className="text-sm" />
              </Link>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm text-gray-500">June 15, 2023</span>
              <h3 className="text-xl font-semibold my-3">{language === 'th' ? 'เปิดตัวเครื่องคำนวณคอนกรีตใหม่' : 'New Concrete Calculator Released'}</h3>
              <p className="text-gray-600 mb-4">
                {language === 'th' 
                  ? 'เราได้อัปเดตเครื่องคำนวณคอนกรีตด้วยฟีเจอร์ใหม่สำหรับการประมาณปริมาตรที่แม่นยำยิ่งขึ้นสำหรับโครงสร้างที่ซับซ้อน'
                  : 'We\'ve updated our concrete calculator with new features for more accurate volume estimations for complex structures.'}
              </p>
              <Link to="/news/concrete-calculator" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-2">
                {t.news.readMore[language]}
                <FaArrowRight className="text-sm" />
              </Link>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-sm text-gray-500">June 10, 2023</span>
              <h3 className="text-xl font-semibold my-3">{language === 'th' ? 'อัปเดตมาตรฐานอุตสาหกรรม' : 'Industry Standards Update'}</h3>
              <p className="text-gray-600 mb-4">
                {language === 'th'
                  ? 'คลังเอกสารของเราตอนนี้มีมาตรฐานการก่อสร้างล่าสุดปี 2023 และแนวทางการวิศวกรรมโครงสร้าง'
                  : 'Our document library now includes the latest 2023 construction standards and guidelines for structural engineering.'}
              </p>
              <Link to="/news/standards-update" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-2">
                {t.news.readMore[language]}
                <FaArrowRight className="text-sm" />
              </Link>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="text-sm text-gray-500">June 5, 2023</span>
              <h3 className="text-xl font-semibold my-3">{language === 'th' ? 'การวิเคราะห์โครงสร้างด้วย AI' : 'AI-Powered Structural Analysis'}</h3>
              <p className="text-gray-600 mb-4">
                {language === 'th'
                  ? 'แนะนำเครื่องมือวิเคราะห์โครงสร้างด้วย AI ใหม่สำหรับระบบคอนกรีตสำเร็จรูปพร้อมความแม่นยำและความเร็วที่เพิ่มขึ้น'
                  : 'Introducing our new AI-powered structural analysis tool for precast systems with enhanced accuracy and speed.'}
              </p>
              <Link to="/news/ai-structural-analysis" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-2">
                {t.news.readMore[language]}
                <FaArrowRight className="text-sm" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {t.events.title[language]}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/events" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-2">
                {t.events.viewAll[language]}
                <FaArrowRight className="text-sm" />
              </Link>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex-shrink-0">
                <div className="bg-blue-600 text-white rounded-xl p-4 text-center w-20">
                  <div className="text-sm font-medium">JUN</div>
                  <div className="text-2xl font-bold">25</div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Advanced Concrete Design Webinar</h3>
                <p className="text-gray-600 mb-3">
                  Learn advanced techniques for designing complex concrete structures with our expert engineers.
                </p>
                <div className="flex items-center text-gray-500 mb-4">
                  <FaCalendarAlt className="mr-2" />
                  <span>June 25, 2023 • 2:00 PM - 4:00 PM</span>
                </div>
                <Link to="/events/concrete-design-webinar" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-2">
                  {t.events.registerNow[language]}
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex-shrink-0">
                <div className="bg-blue-600 text-white rounded-xl p-4 text-center w-20">
                  <div className="text-sm font-medium">JUL</div>
                  <div className="text-2xl font-bold">10</div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">BIM Integration Workshop</h3>
                <p className="text-gray-600 mb-3">
                  Discover how to seamlessly integrate BIM data with our precast system for efficient project management.
                </p>
                <div className="flex items-center text-gray-500 mb-4">
                  <FaCalendarAlt className="mr-2" />
                  <span>July 10, 2023 • 1:00 PM - 5:00 PM</span>
                </div>
                <Link to="/events/bim-workshop" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-2">
                  {t.events.registerNow[language]}
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Section - replacing CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">สนับสนุนการพัฒนา</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              ร่วมเป็นส่วนหนึ่งในการพัฒนาเครื่องมือวิศวกรรมที่เป็นประโยชน์ต่อวงการก่อสร้างไทย
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* One-time Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCoffee className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">เลี้ยงกาแฟ</h3>
              <p className="text-blue-100 mb-4">
                สนับสนุนครั้งเดียวเพื่อเป็นกำลังใจให้ทีมพัฒนา
              </p>
              <Link to="/support" className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 transition-colors rounded-full py-2 px-6">
                สนับสนุน <FaArrowRight className="text-sm" />
              </Link>
            </motion.div>

            {/* Monthly Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center transform scale-105 border border-white/20"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">สนับสนุนรายเดือน</h3>
              <p className="text-blue-100 mb-4">
                ร่วมเป็นส่วนหนึ่งในการพัฒนาอย่างต่อเนื่อง
              </p>
              <Link to="/support" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 transition-colors rounded-full py-2 px-6">
                สนับสนุน <FaArrowRight className="text-sm" />
              </Link>
            </motion.div>

            {/* Organization Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">สนับสนุนองค์กร</h3>
              <p className="text-blue-100 mb-4">
                ร่วมสนับสนุนในนามองค์กรของคุณ
              </p>
              <Link to="/support" className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 transition-colors rounded-full py-2 px-6">
                ติดต่อเรา <FaArrowRight className="text-sm" />
              </Link>
            </motion.div>
          </div>

          {/* Supporters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <h3 className="text-3xl font-bold mb-8">ผู้สนับสนุนของเรา</h3>
            <div className="relative max-w-6xl mx-auto">
              <button 
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors z-10"
                onClick={() => scrollSupporters('left')}
                aria-label="Scroll left"
              >
                <FaChevronLeft className="text-white text-xl" />
              </button>

              <div 
                id="supporters-container"
                className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 py-8 scroll-smooth"
                style={{
                  msOverflowStyle: 'none',
                  scrollbarWidth: 'none',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {/* Organization Supporters */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center gap-4 min-w-[300px] group hover:bg-white/20 transition-all duration-300 snap-start">
                  <div className="w-24 h-24 bg-white/20 rounded-xl p-4 flex items-center justify-center">
                    <img src="/images/sponsors/abc-logo.png" alt="ABC Company" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <FaStar className="text-yellow-400 text-xl" />
                      <h4 className="text-xl font-semibold">บริษัท เอบีซี จำกัด</h4>
                    </div>
                    <p className="text-blue-100 text-sm mb-2">ผู้นำด้านการก่อสร้างและพัฒนาอสังหาริมทรัพย์</p>
                    <div className="text-xs text-blue-200">สนับสนุนตั้งแต่ 2023</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center gap-4 min-w-[300px] group hover:bg-white/20 transition-all duration-300 snap-start">
                  <div className="w-24 h-24 bg-white/20 rounded-xl p-4 flex items-center justify-center">
                    <img src="/images/sponsors/xyz-logo.png" alt="XYZ Company" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <FaStar className="text-yellow-400 text-xl" />
                      <h4 className="text-xl font-semibold">บริษัท เอ็กซ์วายแซด จำกัด</h4>
                    </div>
                    <p className="text-blue-100 text-sm mb-2">ผู้เชี่ยวชาญด้านวิศวกรรมโครงสร้าง</p>
                    <div className="text-xs text-blue-200">สนับสนุนตั้งแต่ 2023</div>
                  </div>
                </div>

                {/* Individual Supporters */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center gap-4 min-w-[300px] group hover:bg-white/20 transition-all duration-300 snap-start">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <FaHeart className="text-red-400 text-4xl" />
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h4 className="text-xl font-semibold">คุณสมชาย ใจดี</h4>
                    </div>
                    <p className="text-blue-100 text-sm mb-2">วิศวกรโยธาอาวุโส</p>
                    <div className="text-xs text-blue-200">สนับสนุนรายเดือน</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center gap-4 min-w-[300px] group hover:bg-white/20 transition-all duration-300 snap-start">
                  <div className="w-24 h-24 bg-white/20 rounded-xl p-4 flex items-center justify-center">
                    <img src="/images/sponsors/123eng-logo.png" alt="123 Engineering" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <FaStar className="text-yellow-400 text-xl" />
                      <h4 className="text-xl font-semibold">บริษัท 123 เอ็นจิเนียริ่ง จำกัด</h4>
                    </div>
                    <p className="text-blue-100 text-sm mb-2">บริษัทที่ปรึกษาด้านวิศวกรรม</p>
                    <div className="text-xs text-blue-200">สนับสนุนตั้งแต่ 2023</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center gap-4 min-w-[300px] group hover:bg-white/20 transition-all duration-300 snap-start">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <FaHeart className="text-red-400 text-4xl" />
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h4 className="text-xl font-semibold">ดร.นวัตกรรม ก้าวหน้า</h4>
                    </div>
                    <p className="text-blue-100 text-sm mb-2">อาจารย์คณะวิศวกรรมศาสตร์</p>
                    <div className="text-xs text-blue-200">สนับสนุนรายเดือน</div>
                  </div>
                </div>
              </div>

              <button 
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors z-10"
                onClick={() => scrollSupporters('right')}
                aria-label="Scroll right"
              >
                <FaChevronRight className="text-white text-xl" />
              </button>

              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-blue-800 to-transparent pointer-events-none"></div>
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-blue-800 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
