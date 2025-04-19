import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaUser, FaBuilding, FaLightbulb, FaPaperPlane, FaCheck, FaTag } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const SuggestIdeas = () => {
  const { language } = useLanguage();
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = {
    title: {
      en: "Suggest New Ideas",
      th: "เสนอไอเดียใหม่"
    },
    description: {
      en: "Help us improve by suggesting new features or improvements to existing tools",
      th: "ช่วยให้เราเติบโตขึ้นด้วยการเสนอฟีเจอร์ใหม่หรือปรับปรุงเครื่องมือที่มีอยู่"
    },
    form: {
      name: {
        en: "Your Name",
        th: "ชื่อของคุณ"
      },
      company: {
        en: "Company/Organization",
        th: "บริษัท/องค์กร"
      },
      category: {
        en: "Category",
        th: "หมวดหมู่"
      },
      title: {
        en: "Idea Title",
        th: "หัวข้อไอเดีย"
      },
      description: {
        en: "Describe your idea",
        th: "อธิบายไอเดียของคุณ"
      },
      benefits: {
        en: "Expected Benefits",
        th: "ประโยชน์ที่คาดว่าจะได้รับ"
      },
      submit: {
        en: "Submit Idea",
        th: "ส่งไอเดีย"
      }
    },
    backToSupport: {
      en: "Back to Support",
      th: "กลับไปที่หน้าสนับสนุน"
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    category: '',
    title: '',
    description: '',
    benefits: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      setShowSuccess(true);
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          company: '',
          category: '',
          title: '',
          description: '',
          benefits: ''
        });
        setShowSuccess(false);
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t.title[language]}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.description[language]}
          </p>
        </motion.div>

        {/* Success Message */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
            >
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
                <FaCheck className="text-green-500" />
                <span>
                  {language === 'th' 
                    ? 'ส่งไอเดียของคุณเรียบร้อยแล้ว' 
                    : 'Your idea has been submitted successfully'}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.form.name[language]}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.form.company[language]}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaBuilding className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.form.category[language]}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaTag className="text-gray-400" />
                </div>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">{language === 'th' ? 'เลือกหมวดหมู่' : 'Select Category'}</option>
                  <option value="new-tool">{language === 'th' ? 'เครื่องมือใหม่' : 'New Tool'}</option>
                  <option value="improvement">{language === 'th' ? 'ปรับปรุงเครื่องมือที่มีอยู่' : 'Existing Tool Improvement'}</option>
                  <option value="feature">{language === 'th' ? 'ฟีเจอร์ใหม่' : 'New Feature'}</option>
                  <option value="other">{language === 'th' ? 'อื่นๆ' : 'Other'}</option>
                </select>
              </div>
            </div>

            {/* Idea Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.form.title[language]}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLightbulb className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.form.description[language]}
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Benefits */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.form.benefits[language]}
              </label>
              <textarea
                name="benefits"
                value={formData.benefits}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 text-white rounded-lg transition-colors flex items-center justify-center gap-2 ${
                isSubmitting 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <FaPaperPlane />
                </motion.div>
              ) : (
                <FaPaperPlane />
              )}
              {isSubmitting 
                ? (language === 'th' ? 'กำลังส่ง...' : 'Submitting...')
                : t.form.submit[language]
              }
            </motion.button>
          </form>
        </motion.div>

        {/* Back to Support Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <Link
            to="/support"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors duration-200 group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            {t.backToSupport[language]}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default SuggestIdeas; 