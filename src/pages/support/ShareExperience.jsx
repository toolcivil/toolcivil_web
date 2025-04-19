import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaUser, FaBuilding, FaCalendar, FaStar, FaImage, FaPaperPlane, FaCheck } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link, useNavigate } from 'react-router-dom';

const ShareExperience = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = {
    title: {
      en: "Share Your Experience",
      th: "แชร์ประสบการณ์ของคุณ"
    },
    description: {
      en: "Share your engineering experiences and help others learn from your projects",
      th: "แชร์ประสบการณ์ทางวิศวกรรมของคุณและช่วยให้ผู้อื่นเรียนรู้จากโครงการของคุณ"
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
      projectDate: {
        en: "Project Date",
        th: "วันที่โครงการ"
      },
      projectType: {
        en: "Project Type",
        th: "ประเภทโครงการ"
      },
      rating: {
        en: "Rating",
        th: "คะแนน"
      },
      title: {
        en: "Experience Title",
        th: "หัวข้อประสบการณ์"
      },
      content: {
        en: "Share your experience",
        th: "แชร์ประสบการณ์ของคุณ"
      },
      image: {
        en: "Add Image",
        th: "เพิ่มรูปภาพ"
      },
      submit: {
        en: "Share Experience",
        th: "แชร์ประสบการณ์"
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
    projectDate: '',
    projectType: '',
    rating: 5,
    title: '',
    content: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
    }
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
          projectDate: '',
          projectType: '',
          rating: 5,
          title: '',
          content: '',
          image: null
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
                    ? 'ส่งประสบการณ์ของคุณเรียบร้อยแล้ว' 
                    : 'Your experience has been shared successfully'}
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

            {/* Project Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.form.projectDate[language]}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCalendar className="text-gray-400" />
                  </div>
                  <input
                    type="date"
                    name="projectDate"
                    value={formData.projectDate}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.form.projectType[language]}
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">{language === 'th' ? 'เลือกประเภทโครงการ' : 'Select Project Type'}</option>
                  <option value="residential">{language === 'th' ? 'ที่อยู่อาศัย' : 'Residential'}</option>
                  <option value="commercial">{language === 'th' ? 'พาณิชย์' : 'Commercial'}</option>
                  <option value="industrial">{language === 'th' ? 'อุตสาหกรรม' : 'Industrial'}</option>
                  <option value="infrastructure">{language === 'th' ? 'โครงสร้างพื้นฐาน' : 'Infrastructure'}</option>
                </select>
              </div>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.form.rating[language]}
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleChange({ target: { name: 'rating', value: star } })}
                    className="focus:outline-none"
                  >
                    <FaStar
                      className={`text-2xl ${
                        star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Content */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.form.title[language]}
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.form.content[language]}
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.form.image[language]}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaImage className="text-gray-400" />
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
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

export default ShareExperience; 