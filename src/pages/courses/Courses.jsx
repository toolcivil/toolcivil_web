import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaSearch, FaFilter, FaStar, FaClock, FaUser, FaPlayCircle, FaCertificate, FaQuestionCircle, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    type: 'all',
    level: 'all',
    price: 'all'
  });
  const [sortBy, setSortBy] = useState('newest');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const translations = {
    title: {
      en: '🎓 Online Training Courses',
      th: '🎓 คอร์สอบรมออนไลน์'
    },
    subtitle: {
      en: 'Learn new skills from engineering and construction experts with practical content',
      th: 'เรียนรู้ทักษะใหม่ ๆ จากผู้เชี่ยวชาญด้านวิศวกรรมและก่อสร้าง พร้อมเนื้อหาใช้งานได้จริง'
    },
    search: {
      en: 'Search courses',
      th: 'ค้นหาชื่อคอร์ส'
    },
    filters: {
      type: {
        label: { en: 'Course Type', th: 'ประเภทคอร์ส' },
        all: { en: 'All Types', th: 'ทุกประเภท' },
        free: { en: 'Free', th: 'ฟรี' },
        premium: { en: 'Premium', th: 'พรีเมียม' },
        template: { en: 'Template', th: 'Template' },
        bim: { en: 'BIM', th: 'BIM' }
      },
      level: {
        label: { en: 'Level', th: 'ระดับ' },
        all: { en: 'All Levels', th: 'ทุกระดับ' },
        beginner: { en: 'Beginner', th: 'เริ่มต้น' },
        intermediate: { en: 'Intermediate', th: 'ปานกลาง' },
        advanced: { en: 'Advanced', th: 'ขั้นสูง' }
      },
      price: {
        label: { en: 'Price', th: 'ราคา' },
        all: { en: 'All Prices', th: 'ทุกราคา' },
        free: { en: 'Free', th: 'ฟรี' },
        paid: { en: 'Paid', th: 'มีค่าใช้จ่าย' }
      }
    },
    sort: {
      newest: { en: 'Newest', th: 'ใหม่ล่าสุด' },
      popular: { en: 'Most Popular', th: 'เรียนมากที่สุด' },
      priceAsc: { en: 'Price: Low to High', th: 'ราคา: ต่ำ-สูง' },
      priceDesc: { en: 'Price: High to Low', th: 'ราคา: สูง-ต่ำ' }
    },
    activeFilters: {
      en: 'Active Filters',
      th: 'ตัวกรองที่เลือก'
    },
    clearAll: {
      en: 'Clear All',
      th: 'ล้างทั้งหมด'
    },
    viewDetails: {
      en: 'View Details',
      th: 'ดูรายละเอียด'
    },
    register: {
      en: 'Register',
      th: 'ลงทะเบียน'
    },
    faq: {
      title: { en: 'Frequently Asked Questions', th: 'คำถามที่พบบ่อย' },
      questions: [
        {
          q: { en: 'Do I need prior knowledge?', th: 'ต้องมีพื้นฐานไหม?' },
          a: { en: 'Most courses are designed for all levels', th: 'คอร์สส่วนใหญ่ออกแบบมาสำหรับทุกระดับ' }
        },
        {
          q: { en: 'How can I access the course?', th: 'จะเรียนผ่านอะไร?' },
          a: { en: 'Through our online platform or recorded videos', th: 'ผ่านแพลตฟอร์มออนไลน์หรือวิดีโอบันทึก' }
        },
        {
          q: { en: 'Will I get a certificate?', th: 'ได้ใบประกาศไหม?' },
          a: { en: 'Yes, upon course completion', th: 'ได้รับเมื่อเรียนจบคอร์ส' }
        }
      ]
    },
    cta: {
      createCourse: { en: 'Create New Course', th: 'สมัครคอร์สใหม่' },
      suggest: { en: 'Suggest a Course', th: 'อยากเรียนอะไร? แนะนำคอร์ส' }
    }
  };

  // Sample course data with more variety
  const courses = [
    {
      id: 1,
      title: 'การออกแบบโครงสร้างเหล็กเบื้องต้น',
      instructor: 'ToolCivil Academy',
      duration: '2 hrs',
      image: '/images/course-steel.jpg',
      price: 0,
      type: 'free',
      level: 'beginner',
      students: 150
    },
    {
      id: 2,
      title: 'Advanced BIM for Construction',
      instructor: 'BIM Expert',
      duration: '8 hrs',
      image: '/images/course-bim.jpg',
      price: 390,
      type: 'premium',
      level: 'advanced',
      students: 75
    },
    {
      id: 3,
      title: 'Revit Template Creation Guide',
      instructor: 'BIM Master',
      duration: '4 hrs',
      image: '/images/course-revit.jpg',
      price: 290,
      type: 'template',
      level: 'intermediate',
      students: 120
    },
    {
      id: 4,
      title: 'BIM Coordination Best Practices',
      instructor: 'BIM Coordinator',
      duration: '6 hrs',
      image: '/images/course-coordination.jpg',
      price: 490,
      type: 'bim',
      level: 'advanced',
      students: 85
    }
  ];

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setSelectedFilters({
      type: 'all',
      level: 'all',
      price: 'all'
    });
    setSearchQuery('');
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = selectedFilters.type === 'all' || course.type === selectedFilters.type;
    const matchesLevel = selectedFilters.level === 'all' || course.level === selectedFilters.level;
    const matchesPrice = selectedFilters.price === 'all' || 
                        (selectedFilters.price === 'free' && course.price === 0) ||
                        (selectedFilters.price === 'paid' && course.price > 0);

    return matchesSearch && matchesType && matchesLevel && matchesPrice;
  });

  const hasActiveFilters = Object.values(selectedFilters).some(value => value !== 'all') || searchQuery;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            {translations.title[language]}
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl mx-auto text-gray-100">
            {translations.subtitle[language]}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Search and Filters Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder={translations.search[language]}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Course Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations.filters.type.label[language]}
              </label>
              <select
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-base cursor-pointer hover:border-gray-300 transition-colors"
                value={selectedFilters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
              >
                {Object.entries(translations.filters.type)
                  .filter(([key]) => key !== 'label')
                  .map(([key, value]) => (
                    <option key={key} value={key}>
                      {value[language]}
                    </option>
                  ))}
              </select>
            </div>

            {/* Level Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations.filters.level.label[language]}
              </label>
              <select
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-base cursor-pointer hover:border-gray-300 transition-colors"
                value={selectedFilters.level}
                onChange={(e) => handleFilterChange('level', e.target.value)}
              >
                {Object.entries(translations.filters.level)
                  .filter(([key]) => key !== 'label')
                  .map(([key, value]) => (
                    <option key={key} value={key}>
                      {value[language]}
                    </option>
                  ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations.filters.price.label[language]}
              </label>
              <select
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-base cursor-pointer hover:border-gray-300 transition-colors"
                value={selectedFilters.price}
                onChange={(e) => handleFilterChange('price', e.target.value)}
              >
                {Object.entries(translations.filters.price)
                  .filter(([key]) => key !== 'label')
                  .map(([key, value]) => (
                    <option key={key} value={key}>
                      {value[language]}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-700">
                  {translations.activeFilters[language]}
                </h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  {translations.clearAll[language]}
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {searchQuery && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700">
                    {searchQuery}
                    <button
                      onClick={() => setSearchQuery('')}
                      className="ml-2 text-blue-500 hover:text-blue-700"
                    >
                      <FaTimes size={12} />
                    </button>
                  </span>
                )}
                {Object.entries(selectedFilters).map(([type, value]) => {
                  if (value === 'all') return null;
                  const filterLabel = translations.filters[type].label[language];
                  const filterValue = translations.filters[type][value][language];
                  return (
                    <span
                      key={type}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700"
                    >
                      {filterLabel}: {filterValue}
                      <button
                        onClick={() => handleFilterChange(type, 'all')}
                        className="ml-2 text-blue-500 hover:text-blue-700"
                      >
                        <FaTimes size={12} />
                      </button>
                    </span>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{course.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <FaUser className="mr-2 text-gray-400" />
                  <span className="text-sm">{course.instructor}</span>
                </div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center text-gray-600">
                    <FaClock className="mr-2 text-gray-400" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    {course.price === 0 ? (
                      <span className="text-green-600 font-medium text-sm bg-green-50 px-3 py-1 rounded-full">ฟรี</span>
                    ) : (
                      <span className="text-blue-600 font-medium text-sm bg-blue-50 px-3 py-1 rounded-full">
                        ฿{course.price}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-colors text-sm font-medium"
                >
                  {translations.viewDetails[language]}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-32">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 text-gray-900">
            {translations.faq.title[language]}
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {translations.faq.questions.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <FaQuestionCircle className="text-blue-600 flex-shrink-0 mt-1.5 text-xl" />
                  <div>
                    <h3 className="font-medium text-lg text-gray-900 mb-3">
                      {faq.q[language]}
                    </h3>
                    <p className="text-gray-600">{faq.a[language]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 pb-16">
          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-lg mx-auto px-4">
            <button
              onClick={() => navigate('/create-course')}
              className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors text-base font-medium shadow-sm hover:shadow-md"
            >
              {translations.cta.createCourse[language]}
            </button>
            <button
              onClick={() => navigate('/suggest-course')}
              className="flex-1 bg-white text-gray-700 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors text-base font-medium border border-gray-200"
            >
              {translations.cta.suggest[language]}
            </button>
          </div>
        </div>
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{selectedCourse.title}</h2>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="text-gray-400 hover:text-gray-600 p-2"
                >
                  ✕
                </button>
              </div>
              {/* Add more course details here */}
              <button
                className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors mt-6 font-medium"
                onClick={() => {
                  // Handle registration
                  setSelectedCourse(null);
                }}
              >
                {translations.register[language]}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default Courses; 