import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Events = () => {
  const { language } = useLanguage();

  const translations = {
    title: {
      th: 'กิจกรรมที่กำลังจะมาถึง',
      en: 'Upcoming Events'
    },
    subtitle: {
      th: 'เข้าร่วมกิจกรรมและเวิร์กช็อปที่เกี่ยวข้องกับวิศวกรรมโครงสร้างและการก่อสร้าง',
      en: 'Join our events and workshops related to structural engineering and construction'
    },
    registerNow: {
      th: 'ลงทะเบียน',
      en: 'Register Now'
    },
    backToHome: {
      th: 'กลับไปหน้าหลัก',
      en: 'Back to Home'
    }
  };

  const events = [
    {
      id: 1,
      date: 'June 25, 2023',
      time: '2:00 PM - 4:00 PM',
      title: {
        th: 'เวิร์กช็อปการออกแบบคอนกรีตขั้นสูง',
        en: 'Advanced Concrete Design Webinar'
      },
      description: {
        th: 'เรียนรู้เทคนิคขั้นสูงในการออกแบบโครงสร้างคอนกรีตที่ซับซ้อนกับวิศวกรผู้เชี่ยวชาญของเรา',
        en: 'Learn advanced techniques for designing complex concrete structures with our expert engineers.'
      },
      location: {
        th: 'ออนไลน์',
        en: 'Online'
      },
      link: '/events/concrete-design-webinar'
    },
    {
      id: 2,
      date: 'July 10, 2023',
      time: '1:00 PM - 5:00 PM',
      title: {
        th: 'เวิร์กช็อปการบูรณาการ BIM',
        en: 'BIM Integration Workshop'
      },
      description: {
        th: 'ค้นพบวิธีการบูรณาการข้อมูล BIM กับระบบคอนกรีตสำเร็จรูปของเราเพื่อการจัดการโครงการที่มีประสิทธิภาพ',
        en: 'Discover how to seamlessly integrate BIM data with our precast system for efficient project management.'
      },
      location: {
        th: 'ออนไลน์',
        en: 'Online'
      },
      link: '/events/bim-workshop'
    },
    {
      id: 3,
      date: 'July 25, 2023',
      time: '10:00 AM - 12:00 PM',
      title: {
        th: 'การคำนวณโครงสร้างเหล็ก',
        en: 'Steel Structure Calculation'
      },
      description: {
        th: 'เรียนรู้วิธีการคำนวณและออกแบบโครงสร้างเหล็กอย่างถูกต้องและปลอดภัย',
        en: 'Learn how to properly calculate and design steel structures safely and efficiently.'
      },
      location: {
        th: 'ออนไลน์',
        en: 'Online'
      },
      link: '/events/steel-calculation'
    },
    {
      id: 4,
      date: 'August 5, 2023',
      time: '2:00 PM - 4:00 PM',
      title: {
        th: 'การวิเคราะห์โครงสร้างด้วย AI',
        en: 'AI-Powered Structural Analysis'
      },
      description: {
        th: 'สัมมนาออนไลน์เกี่ยวกับการใช้ AI ในการวิเคราะห์โครงสร้างและการออกแบบ',
        en: 'Online seminar about using AI in structural analysis and design.'
      },
      location: {
        th: 'ออนไลน์',
        en: 'Online'
      },
      link: '/events/ai-analysis'
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

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div 
              key={event.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center text-gray-500 mb-4">
                <FaCalendarAlt className="mr-2" />
                <span>{event.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{event.title[language]}</h3>
              <p className="text-gray-600 mb-4">
                {event.description[language]}
              </p>
              <div className="flex items-center text-gray-500 mb-4">
                <FaClock className="mr-2" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-gray-500 mb-4">
                <FaMapMarkerAlt className="mr-2" />
                <span>{event.location[language]}</span>
              </div>
              <Link 
                to={event.link} 
                className="inline-flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {translations.registerNow[language]}
                <FaArrowRight className="ml-2" />
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
            {translations.backToHome[language]}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Events; 