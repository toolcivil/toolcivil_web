import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaHandsHelping, FaUsers, FaLightbulb, FaCoffee, FaGithub, FaBuilding, FaStar, FaCrown, FaMedal, FaTrophy, FaClock, FaGift, FaGlobe, FaFacebook, FaLine, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Support = () => {
  const { language } = useLanguage();

  const translations = {
    title: {
      th: 'ร่วมเป็นส่วนหนึ่งในการพัฒนา',
      en: 'Be Part of Our Growth'
    },
    subtitle: {
      th: 'ช่วยกันพัฒนาเครื่องมือวิศวกรรมที่ดีขึ้นสำหรับทุกคน',
      en: 'Help us build better engineering tools for everyone'
    },
    community: {
      title: {
        th: 'ชุมชนของเรา',
        en: 'Our Community'
      },
      description: {
        th: 'เราเชื่อในพลังของการแบ่งปันความรู้และการช่วยเหลือซึ่งกันและกัน เพื่อสร้างเครื่องมือที่ดีที่สุดสำหรับวิศวกรทุกคน',
        en: 'We believe in the power of sharing knowledge and helping each other to create the best tools for all engineers'
      }
    },
    ways: {
      title: {
        th: 'วิธีที่คุณสามารถมีส่วนร่วม',
        en: 'Ways You Can Contribute'
      }
    },
    support: {
      button: {
        th: 'สนับสนุนเรา',
        en: 'Support Us'
      },
      description: {
        th: 'การสนับสนุนของคุณจะช่วยให้เราพัฒนาฟีเจอร์ใหม่ๆ และปรับปรุงเครื่องมือให้ดียิ่งขึ้น',
        en: 'Your support helps us develop new features and improve our tools'
      }
    }
  };

  const contributionWays = [
    {
      icon: <FaUsers className="text-4xl text-blue-500" />,
      title: language === 'th' ? 'แชร์ประสบการณ์' : 'Share Experience',
      description: language === 'th' 
        ? 'แบ่งปันความรู้และประสบการณ์ของคุณกับชุมชน' 
        : 'Share your knowledge and experience with the community',
      link: '/support/share-experience'
    },
    {
      icon: <FaLightbulb className="text-4xl text-yellow-500" />,
      title: language === 'th' ? 'เสนอไอเดีย' : 'Suggest Ideas',
      description: language === 'th'
        ? 'เสนอไอเดียเพื่อพัฒนาเครื่องมือใหม่ๆ หรือปรับปรุงเครื่องมือที่มีอยู่'
        : 'Propose new tools or improvements to existing ones',
      link: '/support/suggest-ideas'
    },
    {
      icon: <FaGithub className="text-4xl text-gray-800" />,
      title: language === 'th' ? 'ร่วมพัฒนา' : 'Contribute Code',
      description: language === 'th'
        ? 'ร่วมพัฒนาโค้ดกับเราบน GitHub'
        : 'Contribute to our codebase on GitHub'
    }
  ];

  const supportTiers = [
    {
      icon: <FaCoffee className="text-3xl text-brown-500" />,
      name: language === 'th' ? 'เลี้ยงกาแฟ' : 'Buy us a coffee',
      amount: '฿79',
      description: language === 'th' 
        ? 'สนับสนุนเราด้วยการเลี้ยงกาแฟสักแก้ว'
        : 'Support us with a cup of coffee',
      link: '/support/buy-coffee'
    },
    {
      icon: <FaHeart className="text-3xl text-red-500" />,
      name: language === 'th' ? 'สนับสนุนรายเดือน' : 'Monthly Supporter',
      amount: '฿159/เดือน',
      description: language === 'th'
        ? 'สนับสนุนเราอย่างต่อเนื่องเพื่อการพัฒนาที่ยั่งยืน'
        : 'Support us monthly for sustainable development',
      link: '/support/monthly-support'
    },
    {
      icon: <FaHandsHelping className="text-3xl text-green-500" />,
      name: language === 'th' ? 'ผู้สนับสนุนองค์กร' : 'Organization Supporter',
      amount: language === 'th' ? 'ติดต่อเรา' : 'Contact Us',
      description: language === 'th'
        ? 'สำหรับองค์กรที่ต้องการสนับสนุนโครงการ'
        : 'For organizations wanting to support the project',
      link: '/support/organization-support'
    }
  ];

  const supporters = {
    organizations: [
      {
        name: 'บริษัท เอบีซี คอนสตรัคชั่น จำกัด',
        nameEn: 'ABC Construction Co., Ltd.',
        tier: 'Platinum',
        logo: '/images/supporters/abc-construction.png',
        slogan: {
          th: 'สร้างสรรค์นวัตกรรมการก่อสร้าง เพื่อคุณภาพชีวิตที่ดีกว่า',
          en: 'Innovating construction for better living'
        },
        description: {
          th: 'ผู้นำด้านการก่อสร้างและพัฒนาอสังหาริมทรัพย์ มุ่งมั่นสร้างสรรค์งานคุณภาพมาตรฐานระดับสากล',
          en: 'Leading construction and real estate development company, committed to international quality standards'
        },
        website: 'https://www.abc-construction.com',
        facebook: 'https://facebook.com/ABCConstruction',
        line: '@abcconstruction'
      },
      {
        name: 'บริษัท 123 เอ็นจิเนียริ่ง จำกัด',
        nameEn: '123 Engineering Co., Ltd.',
        tier: 'Gold',
        logo: '/images/supporters/123-engineering.png',
        slogan: {
          th: 'วิศวกรรมก้าวหน้า พัฒนาอย่างยั่งยืน',
          en: 'Advanced Engineering, Sustainable Development'
        },
        description: {
          th: 'บริษัทวิศวกรที่ปรึกษาชั้นนำ เชี่ยวชาญด้านการออกแบบและควบคุมงานก่อสร้าง',
          en: 'Leading engineering consultancy specializing in design and construction supervision'
        },
        website: 'https://www.123engineering.com',
        facebook: 'https://facebook.com/123Engineering',
        line: '@123engineering'
      }
    ],
    monthly: [
      {
        name: 'คุณสมศักดิ์ วิศวกรโยธา',
        duration: '8 เดือน',
        company: 'XYZ Construction'
      },
      {
        name: 'คุณวิชัย ผู้รับเหมาก่อสร้าง',
        duration: '6 เดือน',
        company: 'วิชัยการช่าง'
      },
      {
        name: 'คุณนภา วิศวกรที่ปรึกษา',
        duration: '4 เดือน',
        company: 'Design Engineering'
      }
    ],
    oneTime: [
      {
        name: 'คุณประเสริฐ',
        cups: 5,
        lastSupport: 'วันนี้'
      },
      {
        name: 'คุณมานะ',
        cups: 3,
        lastSupport: '2 วันที่แล้ว'
      },
      {
        name: 'คุณสุดา',
        cups: 4,
        lastSupport: '3 วันที่แล้ว'
      },
      {
        name: 'คุณวีระ',
        cups: 2,
        lastSupport: 'สัปดาห์ที่แล้ว'
      },
      {
        name: 'คุณพรทิพย์',
        cups: 3,
        lastSupport: 'สัปดาห์ที่แล้ว'
      }
    ]
  };

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

        {/* Community Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              {translations.community.title[language]}
            </h2>
            <p className="text-lg text-blue-100">
              {translations.community.description[language]}
            </p>
          </div>
        </motion.div>

        {/* Ways to Contribute */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            {translations.ways.title[language]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contributionWays.map((way, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  {way.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{way.title}</h3>
                <p className="text-gray-600 mb-4">{way.description}</p>
                {way.link && (
                  <Link
                    to={way.link}
                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    {language === 'th' ? 'เริ่มแชร์' : 'Start Sharing'}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Support Tiers */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {translations.support.button[language]}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {translations.support.description[language]}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportTiers.map((tier, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                <div className="flex justify-center mb-4">
                  {tier.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                <p className="text-2xl font-bold text-primary-main mb-4">{tier.amount}</p>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                {tier.link ? (
                  <Link
                    to={tier.link}
                    className="w-full py-2 px-4 bg-primary-main text-white rounded-lg hover:bg-primary-dark transition-colors inline-block"
                  >
                    {translations.support.button[language]}
                  </Link>
                ) : (
                  <button className="w-full py-2 px-4 bg-primary-main text-white rounded-lg hover:bg-primary-dark transition-colors">
                    {translations.support.button[language]}
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Supporters Showcase */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'th' ? 'ผู้สนับสนุนของเรา' : 'Our Supporters'}
          </h2>

          {/* Organization Supporters */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8">
              {language === 'th' ? 'องค์กรผู้สนับสนุน' : 'Organization Supporters'}
            </h3>
            <div className="grid grid-cols-1 gap-8">
              {supporters.organizations.map((org, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Top Banner with Tier */}
                  <div className={`h-2 ${
                    org.tier === 'Platinum' ? 'bg-gradient-to-r from-platinum-light to-platinum-dark' :
                    org.tier === 'Gold' ? 'bg-gradient-to-r from-yellow-300 to-yellow-500' :
                    'bg-gradient-to-r from-gray-300 to-gray-500'
                  }`} />

                  <div className="p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Logo Section */}
                      <div className="md:w-1/3">
                        <div className="bg-gray-50 rounded-xl p-6 flex items-center justify-center h-48">
                          <img 
                            src={org.logo} 
                            alt={org.name}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        {/* Tier Badge */}
                        <div className="mt-4 flex justify-center">
                          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                            org.tier === 'Platinum' ? 'bg-platinum-light text-gray-800' :
                            org.tier === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            <FaStar className={`${
                              org.tier === 'Platinum' ? 'text-platinum-dark' :
                              org.tier === 'Gold' ? 'text-yellow-500' :
                              'text-gray-500'
                            }`} />
                            <span className="font-semibold">{org.tier} Supporter</span>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="md:w-2/3">
                        <div className="mb-4">
                          <h4 className="text-2xl font-bold text-gray-800 mb-1">
                            {language === 'th' ? org.name : org.nameEn}
                          </h4>
                          <p className="text-lg font-medium text-primary-main mb-4">
                            {org.slogan[language]}
                          </p>
                          <p className="text-gray-600">
                            {org.description[language]}
                          </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-wrap gap-4 mt-6">
                          <a 
                            href={org.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-gray-700"
                          >
                            <FaGlobe className="text-primary-main" />
                            <span>Website</span>
                          </a>
                          <a 
                            href={org.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-blue-700"
                          >
                            <FaFacebook />
                            <span>Facebook</span>
                          </a>
                          <a 
                            href={`https://line.me/ti/p/${org.line}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-green-700"
                          >
                            <FaLine />
                            <span>LINE</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Banner - Contact CTA */}
                  <div className="bg-gray-50 p-4 flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      {language === 'th' ? 'สนใจติดต่อเรา' : 'Contact us for more information'}
                    </div>
                    <Link
                      to="/support/organization-support"
                      className="px-4 py-2 bg-primary-main text-white rounded-lg hover:bg-primary-dark transition-colors inline-flex items-center gap-2"
                    >
                      <FaEnvelope />
                      {language === 'th' ? 'ติดต่อเรา' : 'Contact Us'}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Join Organizations CTA */}
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                <h4 className="text-xl font-semibold mb-4">
                  {language === 'th' 
                    ? 'สนใจเป็นองค์กรผู้สนับสนุน?' 
                    : 'Interested in becoming an organization supporter?'}
                </h4>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  {language === 'th'
                    ? 'ร่วมเป็นส่วนหนึ่งในการพัฒนาเครื่องมือวิศวกรรมที่ดีขึ้น พร้อมรับสิทธิประโยชน์มากมายสำหรับองค์กรของคุณ'
                    : 'Join us in developing better engineering tools while receiving exclusive benefits for your organization'}
                </p>
                <Link
                  to="/support/organization-support"
                  className="bg-primary-main text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors inline-flex items-center gap-2"
                >
                  <FaBuilding />
                  {language === 'th' ? 'สมัครเป็นองค์กรผู้สนับสนุน' : 'Become an Organization Supporter'}
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Monthly Supporters */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-6">
              {language === 'th' ? 'ผู้สนับสนุนรายเดือน' : 'Monthly Supporters'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supporters.monthly.map((supporter, index) => (
                <motion.div
                  key={index}
                  className={`bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden ${
                    index === 0 ? 'border-2 border-yellow-400' :
                    index === 1 ? 'border-2 border-gray-400' :
                    index === 2 ? 'border-2 border-amber-600' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Ranking Badge */}
                  {index < 3 && (
                    <div className={`absolute top-0 right-0 w-16 h-16 ${
                      index === 0 ? 'bg-yellow-400' :
                      index === 1 ? 'bg-gray-400' :
                      'bg-amber-600'
                    } transform rotate-45 translate-x-6 -translate-y-6`}>
                    </div>
                  )}
                  {index < 3 && (
                    <div className="absolute top-2 right-2 text-white font-bold">
                      #{index + 1}
                    </div>
                  )}
                  
                  {/* Supporter Info */}
                  <div className="text-center">
                    <div className="mb-4">
                      {index === 0 ? (
                        <FaCrown className="text-4xl text-yellow-400 mx-auto" />
                      ) : index === 1 ? (
                        <FaMedal className="text-4xl text-gray-400 mx-auto" />
                      ) : index === 2 ? (
                        <FaTrophy className="text-4xl text-amber-600 mx-auto" />
                      ) : (
                        <FaHeart className="text-3xl text-red-500 mx-auto" />
                      )}
                    </div>
                    <h4 className="font-bold text-xl mb-2">{supporter.name}</h4>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <FaBuilding className="text-gray-500" />
                      <p className="text-gray-600">{supporter.company}</p>
                    </div>
                    <div className="flex items-center justify-center text-primary-main">
                      <FaClock className="mr-2" />
                      <span className="font-medium">{supporter.duration}</span>
                    </div>
                    
                    {/* Support Level Badge */}
                    <div className={`mt-4 py-1 px-3 rounded-full text-sm font-medium inline-flex items-center gap-1 ${
                      index === 0 ? 'bg-yellow-100 text-yellow-800' :
                      index === 1 ? 'bg-gray-100 text-gray-800' :
                      index === 2 ? 'bg-amber-100 text-amber-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      <FaStar className="text-xs" />
                      {language === 'th' ? 'ผู้สนับสนุนระดับ' : 'Support Level'} {index + 1}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Call to Action */}
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/support/monthly-support"
                className="bg-primary-main text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors inline-flex items-center gap-2"
              >
                <FaHeart />
                {language === 'th' ? 'ร่วมเป็นผู้สนับสนุน' : 'Become a Supporter'}
              </Link>
            </motion.div>
          </div>

          {/* One-time Supporters */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-6">
              {language === 'th' ? 'ผู้สนับสนุนทั่วไป' : 'One-time Supporters'}
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {supporters.oneTime.map((supporter, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl px-6 py-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary-50 rounded-lg">
                        <div className="relative">
                          <FaCoffee className="text-primary-main text-xl" />
                          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                            {supporter.cups}
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-800">{supporter.name}</span>
                          <div className="flex items-center">
                            {[...Array(supporter.cups)].map((_, i) => (
                              <FaCoffee 
                                key={i} 
                                className="text-amber-600 text-sm transform -translate-x-1 first:translate-x-0"
                              />
                            ))}
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                          <FaClock className="text-gray-400" />
                          {supporter.lastSupport}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 pt-2 border-t border-gray-100">
                      <div className="text-xs text-gray-600 flex items-center justify-between">
                        <span>
                          {language === 'th' 
                            ? `สนับสนุนแล้ว ${supporter.cups} แก้ว` 
                            : `Supported ${supporter.cups} cups`}
                        </span>
                        <button className="text-primary-main hover:text-primary-dark flex items-center gap-1 transition-colors">
                          <FaCoffee className="text-sm" />
                          {language === 'th' ? 'เพิ่มการสนับสนุน' : 'Support more'}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Achievement Stats */}
              <div className="bg-white rounded-xl p-6 mb-8 shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-main mb-1">
                      {supporters.oneTime.reduce((sum, s) => sum + s.cups, 0)}
                    </div>
                    <div className="text-sm text-gray-600">
                      {language === 'th' ? 'แก้วกาแฟทั้งหมด' : 'Total Coffee Cups'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-1">
                      {Math.max(...supporters.oneTime.map(s => s.cups))}
                    </div>
                    <div className="text-sm text-gray-600">
                      {language === 'th' ? 'แก้วมากที่สุดต่อคน' : 'Most Cups per Person'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      {supporters.oneTime.length}
                    </div>
                    <div className="text-sm text-gray-600">
                      {language === 'th' ? 'จำนวนผู้สนับสนุน' : 'Total Supporters'}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Motivational Message */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-gray-600 mb-4">
                  {language === 'th' 
                    ? 'ร่วมเป็นส่วนหนึ่งของการพัฒนา เลี้ยงกาแฟเราสักแก้ว และมีชื่อของคุณอยู่ที่นี่' 
                    : 'Be part of our growth, buy us a coffee, and have your name featured here'}
                </p>
                <Link
                  to="/support/buy-coffee"
                  className="bg-white text-primary-main border-2 border-primary-main px-6 py-3 rounded-lg hover:bg-primary-main hover:text-white transition-all duration-300 inline-flex items-center gap-2"
                >
                  <FaCoffee />
                  {language === 'th' ? 'เลี้ยงกาแฟเรา' : 'Buy us a coffee'}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Support; 