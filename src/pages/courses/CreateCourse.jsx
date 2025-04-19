import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCloudUploadAlt, FaImage, FaClock, FaUser, FaMoneyBillWave, FaGraduationCap } from 'react-icons/fa';

const CreateCourse = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'free',
    level: 'beginner',
    duration: '',
    price: '0',
    instructor: '',
    image: null,
    video: null
  });

  const translations = {
    title: {
      en: 'Create New Course',
      th: 'สมัครคอร์สใหม่'
    },
    subtitle: {
      en: 'Share your knowledge with the engineering community',
      th: 'แบ่งปันความรู้ของคุณกับชุมชนวิศวกรรม'
    },
    form: {
      title: {
        label: { en: 'Course Title', th: 'ชื่อคอร์ส' },
        placeholder: { en: 'Enter course title', th: 'ใส่ชื่อคอร์ส' }
      },
      description: {
        label: { en: 'Course Description', th: 'รายละเอียดคอร์ส' },
        placeholder: { en: 'Describe what students will learn', th: 'อธิบายสิ่งที่ผู้เรียนจะได้เรียนรู้' }
      },
      type: {
        label: { en: 'Course Type', th: 'ประเภทคอร์ส' },
        options: {
          free: { en: 'Free', th: 'ฟรี' },
          premium: { en: 'Premium', th: 'พรีเมียม' },
          template: { en: 'Template', th: 'Template' },
          bim: { en: 'BIM', th: 'BIM' }
        }
      },
      level: {
        label: { en: 'Level', th: 'ระดับ' },
        options: {
          beginner: { en: 'Beginner', th: 'เริ่มต้น' },
          intermediate: { en: 'Intermediate', th: 'ปานกลาง' },
          advanced: { en: 'Advanced', th: 'ขั้นสูง' }
        }
      },
      duration: {
        label: { en: 'Duration', th: 'ระยะเวลา' },
        placeholder: { en: 'e.g. 2 hours', th: 'เช่น 2 ชั่วโมง' }
      },
      price: {
        label: { en: 'Price (THB)', th: 'ราคา (บาท)' },
        placeholder: { en: 'Enter price (0 for free)', th: 'ใส่ราคา (0 สำหรับฟรี)' }
      },
      instructor: {
        label: { en: 'Instructor Name', th: 'ชื่อผู้สอน' },
        placeholder: { en: 'Enter instructor name', th: 'ใส่ชื่อผู้สอน' }
      },
      image: {
        label: { en: 'Course Image', th: 'รูปภาพคอร์ส' },
        hint: { en: 'Upload a cover image (max 2MB)', th: 'อัพโหลดรูปภาพปก (สูงสุด 2MB)' }
      },
      video: {
        label: { en: 'Course Preview Video', th: 'วิดีโอตัวอย่างคอร์ส' },
        hint: { en: 'Upload a preview video (max 50MB)', th: 'อัพโหลดวิดีโอตัวอย่าง (สูงสุด 50MB)' }
      }
    },
    buttons: {
      back: {
        en: 'Back to Courses',
        th: 'กลับไปหน้า Courses'
      },
      submit: {
        en: 'Create Course',
        th: 'สร้างคอร์ส'
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

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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

            {/* Course Type and Level */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.form.type.label[language]}
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {Object.entries(translations.form.type.options).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value[language]}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.form.level.label[language]}
                </label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {Object.entries(translations.form.level.options).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value[language]}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Duration and Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.form.duration.label[language]}
                </label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  placeholder={translations.form.duration.placeholder[language]}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.form.price.label[language]}
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder={translations.form.price.placeholder[language]}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                  required
                />
              </div>
            </div>

            {/* Instructor */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations.form.instructor.label[language]}
              </label>
              <input
                type="text"
                name="instructor"
                value={formData.instructor}
                onChange={handleInputChange}
                placeholder={translations.form.instructor.placeholder[language]}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* File Uploads */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.form.image.label[language]}
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl">
                  <div className="space-y-1 text-center">
                    <FaImage className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                        <span>{translations.form.image.hint[language]}</span>
                        <input
                          type="file"
                          name="image"
                          onChange={handleFileChange}
                          className="sr-only"
                          accept="image/*"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.form.video.label[language]}
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl">
                  <div className="space-y-1 text-center">
                    <FaCloudUploadAlt className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                        <span>{translations.form.video.hint[language]}</span>
                        <input
                          type="file"
                          name="video"
                          onChange={handleFileChange}
                          className="sr-only"
                          accept="video/*"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
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

export default CreateCourse; 