import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaUser, FaBuilding, FaCreditCard, FaCheck } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const MonthlySupport = () => {
  const { language } = useLanguage();
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const translations = {
    title: {
      th: 'สนับสนุนรายเดือน',
      en: 'Monthly Support'
    },
    description: {
      th: 'ร่วมสนับสนุนเราอย่างต่อเนื่องเพื่อการพัฒนาที่ยั่งยืน',
      en: 'Support us monthly for sustainable development'
    },
    bankInfo: {
      title: {
        th: 'ข้อมูลบัญชีธนาคาร',
        en: 'Bank Account Information'
      },
      description: {
        th: 'โอนเงินเข้าบัญชีด้านล่างนี้ และกรอกข้อมูลของคุณเพื่อยืนยันการสนับสนุน',
        en: 'Transfer to the account below and fill in your information to confirm your support'
      }
    },
    form: {
      name: {
        th: 'ชื่อ-นามสกุล',
        en: 'Full Name'
      },
      email: {
        th: 'อีเมล',
        en: 'Email'
      },
      company: {
        th: 'บริษัท',
        en: 'Company'
      },
      amount: {
        th: 'จำนวนเงินที่โอน',
        en: 'Transfer Amount'
      },
      transferDate: {
        th: 'วันที่โอน',
        en: 'Transfer Date'
      },
      transferTime: {
        th: 'เวลาที่โอน',
        en: 'Transfer Time'
      },
      slip: {
        th: 'แนบสลิป (ถ้ามี)',
        en: 'Attach Slip (optional)'
      },
      submit: {
        th: 'ยืนยันการสนับสนุน',
        en: 'Confirm Support'
      },
      submitting: {
        th: 'กำลังดำเนินการ...',
        en: 'Processing...'
      },
      success: {
        th: 'ขอบคุณสำหรับการสนับสนุนของคุณ!',
        en: 'Thank you for your support!'
      },
      back: {
        th: 'กลับไปที่หน้าสนับสนุน',
        en: 'Back to Support'
      }
    }
  };

  const bankAccounts = [
    {
      bank: 'KBANK',
      name: 'บริษัท ทูลซิวิล จำกัด',
      number: '123-4-56789-0',
      nameEn: 'TOOLCIVIL CO., LTD.',
      logo: '/images/banks/kbank.png'
    },
    {
      bank: 'SCB',
      name: 'บริษัท ทูลซิวิล จำกัด',
      number: '987-6-54321-0',
      nameEn: 'TOOLCIVIL CO., LTD.',
      logo: '/images/banks/scb.png'
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    amount: '159',
    transferDate: '',
    transferTime: '',
    slip: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setShowSuccess(true);
    setIsSubmitting(false);

    // Reset form after 2 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        amount: '159',
        transferDate: '',
        transferTime: '',
        slip: null
      });
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-4">
            {translations.title[language]}
          </h1>
          <p className="text-gray-600 text-center mb-8">
            {translations.description[language]}
          </p>

          {/* Bank Account Information */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              {translations.bankInfo.title[language]}
            </h2>
            <p className="text-gray-600 text-center mb-6">
              {translations.bankInfo.description[language]}
            </p>

            <div className="space-y-6">
              {bankAccounts.map((account, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 hover:border-primary-main transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={account.logo}
                      alt={account.bank}
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <div className="font-medium text-gray-900">
                        {language === 'th' ? account.name : account.nameEn}
                      </div>
                      <div className="text-lg font-semibold text-primary-main">
                        {account.number}
                      </div>
                      <div className="text-sm text-gray-500">
                        {account.bank}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Confirmation Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.form.name[language]}
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-main focus:border-transparent"
                    placeholder={language === 'th' ? 'กรอกชื่อ-นามสกุล' : 'Enter your full name'}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.form.email[language]}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-main focus:border-transparent"
                  placeholder={language === 'th' ? 'กรอกอีเมล' : 'Enter your email'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.form.company[language]}
                </label>
                <div className="relative">
                  <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-main focus:border-transparent"
                    placeholder={language === 'th' ? 'กรอกชื่อบริษัท' : 'Enter company name'}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.form.amount[language]}
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">฿</span>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                    min="159"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-main focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {translations.form.transferDate[language]}
                  </label>
                  <input
                    type="date"
                    name="transferDate"
                    value={formData.transferDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-main focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {translations.form.transferTime[language]}
                  </label>
                  <input
                    type="time"
                    name="transferTime"
                    value={formData.transferTime}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-main focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.form.slip[language]}
                </label>
                <input
                  type="file"
                  name="slip"
                  onChange={handleChange}
                  accept="image/*"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-main focus:border-transparent"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-8 py-3 bg-primary-main text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? translations.form.submitting[language] : translations.form.submit[language]}
            </button>
          </form>

          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2"
              >
                <FaCheck />
                {translations.form.success[language]}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="text-center mt-8">
            <Link
              to="/support"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-main transition-colors"
            >
              <FaArrowLeft />
              {translations.form.back[language]}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MonthlySupport; 