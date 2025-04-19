import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaBuilding, FaUser, FaEnvelope, FaPhone, FaCheck, FaHandshake } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const OrganizationSupport = () => {
  const { language } = useLanguage();
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const translations = {
    title: {
      th: 'ผู้สนับสนุนองค์กร',
      en: 'Organization Supporter'
    },
    description: {
      th: 'ร่วมเป็นส่วนหนึ่งในการพัฒนาเครื่องมือวิศวกรรมที่ดีขึ้น พร้อมรับสิทธิประโยชน์มากมายสำหรับองค์กรของคุณ',
      en: 'Join us in developing better engineering tools while receiving exclusive benefits for your organization'
    },
    benefits: {
      title: {
        th: 'สิทธิประโยชน์สำหรับองค์กร',
        en: 'Organization Benefits'
      },
      items: {
        th: [
          'สิทธิ์ใช้งานฟีเจอร์พิเศษทั้งหมด',
          'การสนับสนุนทางเทคนิคแบบ VIP',
          'การฝึกอบรมสำหรับทีมงาน',
          'โลโก้และแบรนด์ของคุณในหน้าเว็บ',
          'สิทธิ์เข้าถึง API พิเศษ'
        ],
        en: [
          'Access to all premium features',
          'VIP technical support',
          'Team training sessions',
          'Your logo and brand on our website',
          'Special API access'
        ]
      }
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
      companyName: {
        th: 'ชื่อองค์กร',
        en: 'Organization Name'
      },
      contactPerson: {
        th: 'ผู้ติดต่อ',
        en: 'Contact Person'
      },
      email: {
        th: 'อีเมล',
        en: 'Email'
      },
      phone: {
        th: 'เบอร์โทรศัพท์',
        en: 'Phone Number'
      },
      website: {
        th: 'เว็บไซต์',
        en: 'Website'
      },
      supportAmount: {
        th: 'จำนวนเงินที่สนับสนุน',
        en: 'Support Amount'
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
      message: {
        th: 'ข้อความถึงเรา (ถ้ามี)',
        en: 'Message (optional)'
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
        th: 'ขอบคุณสำหรับการสนับสนุน!',
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
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    supportAmount: '',
    transferDate: '',
    transferTime: '',
    message: '',
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
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        website: '',
        supportAmount: '',
        transferDate: '',
        transferTime: '',
        message: '',
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
          className="max-w-4xl mx-auto"
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

          {/* Benefits Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              {translations.benefits.title[language]}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {translations.benefits.items[language].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                >
                  <FaHandshake className="text-primary-main text-xl mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

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

          {/* Organization Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.form.companyName[language]}
                </label>
                <div className="relative">
                  <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-main focus:border-transparent"
                    placeholder={language === 'th' ? 'กรอกชื่อองค์กร' : 'Enter organization name'}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.form.contactPerson[language]}
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-main focus:border-transparent"
                    placeholder={language === 'th' ? 'กรอกชื่อผู้ติดต่อ' : 'Enter contact person name'}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {translations.form.email[language]}
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-main focus:border-transparent"
                      placeholder={language === 'th' ? 'กรอกอีเมล' : 'Enter email'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {translations.form.phone[language]}
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-main focus:border-transparent"
                      placeholder={language === 'th' ? 'กรอกเบอร์โทรศัพท์' : 'Enter phone number'}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.form.website[language]}
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-main focus:border-transparent"
                  placeholder={language === 'th' ? 'กรอกเว็บไซต์ (ถ้ามี)' : 'Enter website (optional)'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.form.supportAmount[language]}
                </label>
                <input
                  type="number"
                  name="supportAmount"
                  value={formData.supportAmount}
                  onChange={handleChange}
                  required
                  min="1000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-main focus:border-transparent"
                  placeholder={language === 'th' ? 'กรอกจำนวนเงินที่สนับสนุน' : 'Enter support amount'}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translations.form.message[language]}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-main focus:border-transparent"
                  placeholder={language === 'th' ? 'ฝากข้อความถึงเรา (ถ้ามี)' : 'Leave us a message (optional)'}
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

export default OrganizationSupport; 