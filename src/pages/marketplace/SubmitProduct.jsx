import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { FaCloudUploadAlt, FaImage, FaFileAlt, FaBuilding, FaTags, FaMoneyBillWave, FaArrowLeft } from 'react-icons/fa';

const SubmitProduct = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'digital',
    type: 'revit',
    price: 'free',
    vendor: '',
    image: null,
    file: null
  });

  const translations = {
    title: {
      th: 'ส่งสินค้าเข้าระบบ',
      en: 'Submit Product'
    },
    subtitle: {
      th: 'แบ่งปันสินค้าและบริการของคุณกับชุมชนวิศวกรรมก่อสร้าง',
      en: 'Share your products and services with the engineering community'
    },
    form: {
      productTitle: {
        th: 'ชื่อสินค้า',
        en: 'Product Title'
      },
      description: {
        th: 'รายละเอียดสินค้า',
        en: 'Product Description'
      },
      category: {
        th: 'หมวดหมู่',
        en: 'Category',
        options: {
          digital: { th: 'ดิจิทัล', en: 'Digital' },
          material: { th: 'วัสดุก่อสร้าง', en: 'Construction Materials' },
          service: { th: 'บริการ', en: 'Services' }
        }
      },
      type: {
        th: 'ประเภทไฟล์',
        en: 'File Type',
        options: {
          revit: { th: 'Revit', en: 'Revit' },
          excel: { th: 'Excel', en: 'Excel' },
          pdf: { th: 'PDF', en: 'PDF' }
        }
      },
      price: {
        th: 'ราคา',
        en: 'Price',
        options: {
          free: { th: 'ฟรี', en: 'Free' },
          paid: { th: 'มีค่าใช้จ่าย', en: 'Paid' },
          quote: { th: 'ขอใบเสนอราคา', en: 'Request Quote' }
        }
      },
      vendor: {
        th: 'ชื่อผู้ขาย/บริษัท',
        en: 'Vendor/Company Name'
      },
      image: {
        th: 'รูปภาพสินค้า',
        en: 'Product Image'
      },
      file: {
        th: 'ไฟล์สินค้า (สำหรับสินค้าดิจิทัล)',
        en: 'Product File (for digital products)'
      }
    },
    buttons: {
      submit: {
        th: 'ส่งสินค้าเข้าระบบ',
        en: 'Submit Product'
      },
      cancel: {
        th: 'ยกเลิก',
        en: 'Cancel'
      }
    },
    placeholders: {
      title: {
        th: 'กรอกชื่อสินค้าของคุณ',
        en: 'Enter your product title'
      },
      description: {
        th: 'อธิบายรายละเอียดสินค้าของคุณ',
        en: 'Describe your product'
      },
      vendor: {
        th: 'กรอกชื่อผู้ขายหรือบริษัทของคุณ',
        en: 'Enter your vendor or company name'
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    // Redirect back to marketplace
    navigate('/marketplace');
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        [type]: file
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate('/marketplace')}
          className="group mb-8 inline-flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-white hover:shadow-sm"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">
            {language === 'th' ? 'กลับไปหน้าแหล่งสินค้า' : 'Back to Marketplace'}
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
            {/* Product Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations.form.productTitle[language]}
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={translations.placeholders.title[language]}
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations.form.description[language]}
              </label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={translations.placeholders.description[language]}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            {/* Category and Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.form.category[language]}
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  {Object.entries(translations.form.category.options).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value[language]}
                    </option>
                  ))}
                </select>
              </div>

              {formData.category === 'digital' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {translations.form.type[language]}
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    {Object.entries(translations.form.type.options).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value[language]}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Price and Vendor */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.form.price[language]}
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                >
                  {Object.entries(translations.form.price.options).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value[language]}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.form.vendor[language]}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={translations.placeholders.vendor[language]}
                  value={formData.vendor}
                  onChange={(e) => setFormData({ ...formData, vendor: e.target.value })}
                />
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translations.form.image[language]}
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl">
                <div className="space-y-1 text-center">
                  <FaImage className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                      <span>Upload a file</span>
                      <input
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, 'image')}
                      />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                </div>
              </div>
            </div>

            {/* File Upload (for digital products) */}
            {formData.category === 'digital' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.form.file[language]}
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl">
                  <div className="space-y-1 text-center">
                    <FaFileAlt className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                        <span>Upload a file</span>
                        <input
                          type="file"
                          className="sr-only"
                          onChange={(e) => handleFileChange(e, 'file')}
                        />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">PDF, XLSX, RVT up to 50MB</p>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-6">
              <button
                type="button"
                onClick={() => navigate('/marketplace')}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {translations.buttons.cancel[language]}
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-3 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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

export default SubmitProduct; 