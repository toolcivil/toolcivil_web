import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaSearch, FaFilter, FaDownload, FaShoppingCart, FaInfoCircle, FaStar, FaBuilding, FaFileAlt, FaTools, FaTags, FaMoneyBillWave, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Marketplace = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filters, setFilters] = useState({
    fileType: 'all',
    productCategory: 'all',
    price: 'all',
    vendor: 'all'
  });

  const translations = {
    title: {
      th: 'แหล่งสินค้า',
      en: 'Marketplace'
    },
    subtitle: {
      th: 'รวมสินค้าทั้งดิจิทัลและของจริงสำหรับงานวิศวกรรมก่อสร้าง',
      en: 'Digital and physical products for engineering and construction'
    },
    categories: {
      all: { th: 'ทุกประเภท', en: 'All Categories' },
      digital: { th: 'ดิจิทัล', en: 'Digital' },
      material: { th: 'วัสดุก่อสร้าง', en: 'Construction Materials' },
      service: { th: 'บริการ', en: 'Services' },
      sponsor: { th: 'จากผู้สนับสนุน', en: 'From Sponsors' }
    },
    filters: {
      search: { th: 'ค้นหาสินค้า', en: 'Search products' },
      fileType: {
        title: { th: 'ประเภทไฟล์', en: 'File Type' },
        options: {
          all: { th: 'ทั้งหมด', en: 'All' },
          revit: { th: 'Revit', en: 'Revit' },
          excel: { th: 'Excel', en: 'Excel' },
          pdf: { th: 'PDF', en: 'PDF' }
        }
      },
      productCategory: {
        title: { th: 'หมวดหมู่สินค้า', en: 'Product Category' },
        options: {
          all: { th: 'ทั้งหมด', en: 'All' },
          pile: { th: 'เสาเข็ม', en: 'Piles' },
          steel: { th: 'เหล็ก', en: 'Steel' },
          plan: { th: 'แบบบ้าน', en: 'House Plans' }
        }
      },
      price: {
        title: { th: 'ราคา', en: 'Price' },
        options: {
          all: { th: 'ทั้งหมด', en: 'All' },
          free: { th: 'ฟรี', en: 'Free' },
          paid: { th: 'มีค่าใช้จ่าย', en: 'Paid' },
          quote: { th: 'ขอใบเสนอราคา', en: 'Request Quote' }
        }
      },
      vendor: {
        title: { th: 'ผู้จัดจำหน่าย', en: 'Vendor' },
        options: {
          all: { th: 'ทั้งหมด', en: 'All' },
          sponsor: { th: 'ผู้สนับสนุน', en: 'Sponsors' },
          other: { th: 'อื่นๆ', en: 'Others' }
        }
      }
    },
    buttons: {
      viewDetails: { th: 'ดูรายละเอียด', en: 'View Details' },
      download: { th: 'ดาวน์โหลด', en: 'Download' },
      contact: { th: 'ติดต่อ', en: 'Contact' },
      requestQuote: { th: 'ขอใบเสนอราคา', en: 'Request Quote' },
      sellProduct: { th: '📤 ต้องการขายสินค้าของคุณ?', en: '📤 Want to sell your products?' },
      submit: { th: 'ส่งสินค้าเข้าระบบ', en: 'Submit Product' }
    }
  };

  // Sample products data with more items and proper categorization
  const products = [
    {
      id: 1,
      title: 'ไฟล์ BIM Revit',
      category: 'digital',
      type: 'revit',
      vendor: 'ToolCivil Digital',
      description: 'ไฟล์สำหรับงานออกแบบ BIM',
      price: 'free',
      image: '/images/bim-file.jpg',
      isSponsored: false
    },
    {
      id: 2,
      title: 'เสาเข็มคอนกรีตอัดแรง',
      category: 'material',
      type: 'material',
      vendor: 'บริษัท ABC',
      description: 'เสาเข็มคุณภาพสูง',
      price: 'quote',
      image: '/images/concrete-pile.jpg',
      isSponsored: true
    },
    {
      id: 3,
      title: 'Excel Template สำหรับถอดแบบ',
      category: 'digital',
      type: 'excel',
      vendor: 'ToolCivil Academy',
      description: 'เทมเพลตสำหรับถอดแบบงานก่อสร้าง',
      price: '350',
      image: '/images/excel-template.jpg',
      isSponsored: false
    },
    {
      id: 4,
      title: 'บริการรับเหมาก่อสร้าง',
      category: 'service',
      type: 'construction',
      vendor: 'XYZ Construction',
      description: 'บริการรับเหมาก่อสร้างครบวงจร',
      price: 'quote',
      image: '/images/construction-service.jpg',
      isSponsored: true
    }
  ];

  // Filter products based on category and search query
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || 
                          (selectedCategory === 'sponsor' ? product.isSponsored : product.category === selectedCategory);
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.vendor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="pt-12 pb-16 md:pt-16 md:pb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-center tracking-tight"
            >
              {translations.title[language]}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl lg:text-2xl text-center max-w-2xl mx-auto text-gray-100 mb-8 md:mb-12 leading-relaxed"
            >
              {translations.subtitle[language]}
            </motion.p>

            {/* Main Categories */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2 md:gap-3 px-2 md:px-4"
            >
              {Object.entries(translations.categories).map(([key, value]) => (
                <button
                  key={key}
                  className={`px-4 md:px-6 py-2.5 md:py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-200 ${
                    selectedCategory === key
                      ? 'bg-white text-blue-600 shadow-lg transform -translate-y-0.5'
                      : 'bg-blue-600/20 backdrop-blur-sm text-white hover:bg-blue-600/30 hover:-translate-y-0.5'
                  }`}
                  onClick={() => setSelectedCategory(key)}
                >
                  {value[language]}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 max-w-6xl">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 md:mb-12">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="text"
                placeholder={translations.filters.search[language]}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Filters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* File Type Filter */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                {translations.filters.fileType.title[language]}
              </label>
              <select
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-base shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filters.fileType}
                onChange={(e) => setFilters({ ...filters, fileType: e.target.value })}
              >
                {Object.entries(translations.filters.fileType.options).map(([key, value]) => (
                  <option key={key} value={key} className="py-2">
                    {value[language]}
                  </option>
                ))}
              </select>
            </div>

            {/* Product Category Filter */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                {translations.filters.productCategory.title[language]}
              </label>
              <select
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-base shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filters.productCategory}
                onChange={(e) => setFilters({ ...filters, productCategory: e.target.value })}
              >
                {Object.entries(translations.filters.productCategory.options).map(([key, value]) => (
                  <option key={key} value={key} className="py-2">
                    {value[language]}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                {translations.filters.price.title[language]}
              </label>
              <select
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-base shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filters.price}
                onChange={(e) => setFilters({ ...filters, price: e.target.value })}
              >
                {Object.entries(translations.filters.price.options).map(([key, value]) => (
                  <option key={key} value={key} className="py-2">
                    {value[language]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filters */}
          <div className="mt-6 flex flex-wrap gap-2">
            {Object.entries(filters).map(([key, value]) => {
              if (value === 'all') return null;
              const filterName = translations.filters[key].options[value]?.[language];
              if (!filterName) return null;
              return (
                <span
                  key={key}
                  className="inline-flex items-center px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 text-sm"
                >
                  {filterName}
                  <button
                    className="ml-2 hover:text-blue-800"
                    onClick={() => setFilters({ ...filters, [key]: 'all' })}
                  >
                    ×
                  </button>
                </span>
              );
            })}
            {(Object.values(filters).some(value => value !== 'all') || searchQuery) && (
              <button
                className="text-sm text-gray-500 hover:text-gray-700 underline"
                onClick={() => {
                  setFilters({
                    fileType: 'all',
                    productCategory: 'all',
                    price: 'all',
                    vendor: 'all'
                  });
                  setSearchQuery('');
                }}
              >
                ล้างตัวกรองทั้งหมด
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                {product.isSponsored && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full flex items-center">
                      <FaStar className="mr-1" />
                      ผู้สนับสนุนอย่างเป็นทางการ
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{product.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <FaBuilding className="mr-2 text-gray-400" />
                  <span className="text-sm">{product.vendor}</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600">{product.description}</span>
                  <div className="flex items-center">
                    {product.price === 'free' ? (
                      <span className="text-green-600 font-medium text-sm bg-green-50 px-3 py-1 rounded-full">
                        ฟรี
                      </span>
                    ) : product.price === 'quote' ? (
                      <span className="text-blue-600 font-medium text-sm bg-blue-50 px-3 py-1 rounded-full">
                        ขอใบเสนอราคา
                      </span>
                    ) : (
                      <span className="text-blue-600 font-medium text-sm bg-blue-50 px-3 py-1 rounded-full">
                        ฿{product.price}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-xl hover:bg-gray-200 transition-colors text-sm font-medium flex items-center justify-center"
                  >
                    <FaInfoCircle className="mr-2" />
                    {translations.buttons.viewDetails[language]}
                  </button>
                  {product.price === 'free' ? (
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center">
                      <FaDownload className="mr-2" />
                      {translations.buttons.download[language]}
                    </button>
                  ) : (
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center">
                      <FaShoppingCart className="mr-2" />
                      {translations.buttons.contact[language]}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            {translations.buttons.sellProduct[language]}
          </h3>
          <button 
            onClick={() => navigate('/submit-product')}
            className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors text-base font-medium shadow-sm hover:shadow-md"
          >
            {translations.buttons.submit[language]}
          </button>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedProduct.title}
                </h2>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-gray-600 p-2"
                >
                  ✕
                </button>
              </div>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">รายละเอียดสินค้า</h3>
                  <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <FaBuilding className="mr-2" />
                    <span>{selectedProduct.vendor}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">ข้อมูลการติดต่อ</h3>
                  <div className="space-y-4">
                    <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors">
                      LINE Official
                    </button>
                    <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-colors">
                      เบอร์โทร: 02-XXX-XXXX
                    </button>
                    <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-colors">
                      เว็บไซต์
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Marketplace; 