import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaLightbulb, FaUser, FaEnvelope } from 'react-icons/fa';

const SuggestCourse = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    name: '',
    email: '',
    reason: ''
  });

  const translations = {
    title: {
      en: 'Suggest a Course',
      th: 'อยากเรียนอะไร? แนะนำคอร์ส'
    },
    subtitle: {
      en: 'Help us understand what courses you would like to see',
      th: 'ช่วยบอกเราว่าคุณอยากเรียนคอร์สแบบไหน'
    },
    form: {
      title: {
        label: { en: 'Course Title', th: 'ชื่อคอร์ส' },
        placeholder: { en: 'What course would you like to see?', th: 'คุณอยากเรียนคอร์สอะไร?' }
      },
      description: {
        label: { en: 'Course Description', th: 'รายละเอียดคอร์ส' },
        placeholder: { en: 'Describe what you would like to learn in this course', th: 'อธิบายสิ่งที่คุณอยากเรียนรู้ในคอร์สนี้' }
      },
      name: {
        label: { en: 'Your Name', th: 'ชื่อของคุณ' },
        placeholder: { en: 'Enter your name', th: 'ใส่ชื่อของคุณ' }
      },
      email: {
        label: { en: 'Your Email', th: 'อีเมลของคุณ' },
        placeholder: { en: 'Enter your email', th: 'ใส่อีเมลของคุณ' }
      },
      reason: {
        label: { en: 'Why do you want this course?', th: 'ทำไมคุณถึงอยากเรียนคอร์สนี้?' },
        placeholder: { en: 'Tell us why this course would be helpful for you', th: 'บอกเราว่าทำไมคอร์สนี้ถึงจะเป็นประโยชน์สำหรับคุณ' }
      }
    },
    buttons: {
      back: {
        en: 'Back to Courses',
        th: 'กลับไปหน้า Courses'
      },
      submit: {
        en: 'Submit Suggestion',
        th: 'ส่งคำแนะนำ'
      },
      cancel: {
        en: 'Cancel',
        th: 'ยกเลิก'
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Suggestion submitted:', formData);
    navigate('/courses');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate('/courses')}
          className="group mb-8 inline-flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-white hover:shadow-sm"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">
            {translations.buttons.back[language]}
          </span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
              <FaLightbulb className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {translations.title[language]}
            </h1>
            <p className="text-gray-600">
              {translations.subtitle[language]}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Course Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations.form.title.label[language]}
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder={translations.form.title.placeholder[language]}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Course Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations.form.description.label[language]}
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder={translations.form.description.placeholder[language]}
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Your Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations.form.name.label[language]}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={translations.form.name.placeholder[language]}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Your Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations.form.email.label[language]}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={translations.form.email.placeholder[language]}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Reason */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations.form.reason.label[language]}
              </label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                placeholder={translations.form.reason.placeholder[language]}
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Submit Buttons */}
            <div className="flex justify-end space-x-4 pt-6">
              <button
                type="button"
                onClick={() => navigate('/courses')}
                className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {translations.buttons.cancel[language]}
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
              >
                {translations.buttons.submit[language]}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SuggestCourse; 