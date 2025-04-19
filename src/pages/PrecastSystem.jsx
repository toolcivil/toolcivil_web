import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaBook, FaCubes, FaCalculator, FaBuilding, FaLink, FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const PrecastSystem = () => {
  const { language } = useLanguage();

  const translations = {
    hero: {
      title: {
        en: 'Precast Concrete System',
        th: 'ระบบคอนกรีตสำเร็จรูป'
      },
      subtitle: {
        en: 'Complete guide to precast concrete systems including design, types, and applications',
        th: 'คู่มือสมบูรณ์สำหรับระบบคอนกรีตสำเร็จรูป รวมถึงการออกแบบ ประเภท และการใช้งาน'
      },
      explore: {
        en: 'Explore Guide',
        th: 'สำรวจคู่มือ'
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {translations.hero.title[language]}
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {translations.hero.subtitle[language]}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#knowledge" className="bg-white text-blue-600 font-medium py-4 px-8 rounded-full hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
                {translations.hero.explore[language]}
                <FaArrowRight />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Knowledge Section */}
          <section id="knowledge" className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <FaBook className="text-3xl text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {language === 'th' ? 'ความรู้เกี่ยวกับ Precast System' : 'Precast System Knowledge'}
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                {language === 'th' 
                  ? 'ระบบคอนกรีตสำเร็จรูปเป็นวิธีการก่อสร้างที่ทันสมัย โดยการผลิตชิ้นส่วนในโรงงานและนำมาประกอบที่หน้างาน'
                  : 'Precast concrete systems are modern construction methods where elements are manufactured in factories and assembled on-site.'}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  {language === 'th' ? 'ข้อดีของระบบ Precast' : 'Advantages of Precast Systems'}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  {language === 'th' ? 'กระบวนการผลิต' : 'Manufacturing Process'}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">•</span>
                  {language === 'th' ? 'การควบคุมคุณภาพ' : 'Quality Control'}
                </li>
              </ul>
            </div>
          </section>

          {/* Types Section */}
          <section className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-100 rounded-lg">
                <FaCubes className="text-3xl text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {language === 'th' ? 'ประเภทของ Precast Concrete' : 'Types of Precast Concrete'}
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold mb-2">
                  {language === 'th' ? 'ผนังสำเร็จรูป' : 'Precast Walls'}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === 'th' ? 'ผนังรับน้ำหนักและไม่รับน้ำหนัก' : 'Load-bearing and non-load bearing walls'}
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold mb-2">
                  {language === 'th' ? 'พื้นสำเร็จรูป' : 'Precast Slabs'}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === 'th' ? 'พื้นทางเดียวและสองทาง' : 'One-way and two-way slabs'}
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold mb-2">
                  {language === 'th' ? 'คานสำเร็จรูป' : 'Precast Beams'}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === 'th' ? 'คานรูปตัวไอและตัวที' : 'I-beams and T-beams'}
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold mb-2">
                  {language === 'th' ? 'เสาสำเร็จรูป' : 'Precast Columns'}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === 'th' ? 'เสาเดี่ยวและเสาผสม' : 'Single and composite columns'}
                </p>
              </div>
            </div>
          </section>

          {/* Design Examples Section */}
          <section className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-100 rounded-lg">
                <FaCalculator className="text-3xl text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {language === 'th' ? 'ตัวอย่างออกแบบและคำนวณ' : 'Design and Calculation Examples'}
              </h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 border border-purple-100 rounded-lg">
                <h3 className="font-semibold text-purple-700 mb-2">
                  {language === 'th' ? 'การออกแบบผนังรับน้ำหนัก' : 'Load-bearing Wall Design'}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {language === 'th' 
                    ? 'ตัวอย่างการคำนวณและออกแบบผนังรับน้ำหนักพร้อมแบบก่อสร้าง' 
                    : 'Complete design calculation example with construction drawings'}
                </p>
                <a href="#" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                  {language === 'th' ? 'ดูตัวอย่าง →' : 'View Example →'}
                </a>
              </div>
              <div className="p-4 border border-purple-100 rounded-lg">
                <h3 className="font-semibold text-purple-700 mb-2">
                  {language === 'th' ? 'การออกแบบพื้นสำเร็จรูป' : 'Precast Slab Design'}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {language === 'th'
                    ? 'การคำนวณน้ำหนักบรรทุกและการเสริมเหล็ก'
                    : 'Load calculation and reinforcement design'}
                </p>
                <a href="#" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                  {language === 'th' ? 'ดูตัวอย่าง →' : 'View Example →'}
                </a>
              </div>
            </div>
          </section>

          {/* Project Examples Section */}
          <section className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-orange-100 rounded-lg">
                <FaBuilding className="text-3xl text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {language === 'th' ? 'ตัวอย่างโครงการที่ใช้ Precast' : 'Precast Project Examples'}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="relative overflow-hidden rounded-lg group">
                <img 
                  src="/images/project1.jpg" 
                  alt="Project 1"
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {language === 'th' ? 'อาคารที่พักอาศัย 8 ชั้น' : '8-Story Residential Building'}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {language === 'th' ? 'ระบบผนังรับน้ำหนักสำเร็จรูป' : 'Precast load-bearing wall system'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg group">
                <img 
                  src="/images/project2.jpg" 
                  alt="Project 2"
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {language === 'th' ? 'โรงงานอุตสาหกรรม' : 'Industrial Factory'}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {language === 'th' ? 'ระบบโครงสร้างสำเร็จรูปทั้งหมด' : 'Full precast structural system'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Connections Section */}
          <section className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-100 rounded-lg">
                <FaLink className="text-3xl text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {language === 'th' ? 'จุดต่อ Precast' : 'Precast Connections'}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 border border-red-100 rounded-lg">
                <h3 className="font-semibold text-red-700 mb-2">
                  {language === 'th' ? 'จุดต่อผนัง-ฐานราก' : 'Wall-Foundation Connection'}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {language === 'th'
                    ? 'การเชื่อมต่อระหว่างผนังสำเร็จรูปกับฐานราก'
                    : 'Connection between precast wall and foundation'}
                </p>
                <img src="/images/connection1.jpg" alt="Connection 1" className="rounded-lg mb-3" />
                <a href="#" className="text-red-600 hover:text-red-700 text-sm font-medium">
                  {language === 'th' ? 'ดูรายละเอียด →' : 'View Details →'}
                </a>
              </div>
              <div className="p-4 border border-red-100 rounded-lg">
                <h3 className="font-semibold text-red-700 mb-2">
                  {language === 'th' ? 'จุดต่อผนัง-พื้น' : 'Wall-Slab Connection'}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {language === 'th'
                    ? 'การเชื่อมต่อระหว่างผนังและพื้นสำเร็จรูป'
                    : 'Connection between precast wall and slab'}
                </p>
                <img src="/images/connection2.jpg" alt="Connection 2" className="rounded-lg mb-3" />
                <a href="#" className="text-red-600 hover:text-red-700 text-sm font-medium">
                  {language === 'th' ? 'ดูรายละเอียด →' : 'View Details →'}
                </a>
              </div>
              <div className="p-4 border border-red-100 rounded-lg">
                <h3 className="font-semibold text-red-700 mb-2">
                  {language === 'th' ? 'จุดต่อเสา-คาน' : 'Column-Beam Connection'}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {language === 'th'
                    ? 'การเชื่อมต่อระหว่างเสาและคานสำเร็จรูป'
                    : 'Connection between precast column and beam'}
                </p>
                <img src="/images/connection3.jpg" alt="Connection 3" className="rounded-lg mb-3" />
                <a href="#" className="text-red-600 hover:text-red-700 text-sm font-medium">
                  {language === 'th' ? 'ดูรายละเอียด →' : 'View Details →'}
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrecastSystem;
