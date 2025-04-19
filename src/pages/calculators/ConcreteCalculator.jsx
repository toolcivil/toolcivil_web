import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useLanguage, translations } from '../../contexts/LanguageContext';

const ConcreteCalculator = () => {
  const { language } = useLanguage();
  
  // State for active tab
  const [activeTab, setActiveTab] = useState('floor');
  
  // State for input values
  const [width, setWidth] = useState(0.15);  // Default beam width 15cm
  const [length, setLength] = useState(4.0);  // Default beam length 4m
  const [height, setHeight] = useState(0.3);  // Default beam height 30cm
  
  // State for results
  const [volume, setVolume] = useState(0);
  const [orderVolume, setOrderVolume] = useState(0);

  // Calculate volume when dimensions change
  useEffect(() => {
    let calculatedVolume;
    
    if (activeTab === 'beam') {
      // For beams: width(m) x height(m) x length(m)
      calculatedVolume = width * height * length;
    } else {
      // For other elements: width x length x height
      calculatedVolume = width * length * height;
    }
    
    setVolume(calculatedVolume.toFixed(2));
    // Add 10% extra for ordering
    setOrderVolume((calculatedVolume * 1.1).toFixed(2));
  }, [width, length, height, activeTab]);

  // Handle increment/decrement
  const handleIncrement = (setter, value) => {
    setter(prev => Math.min(100, parseFloat((parseFloat(prev) + value).toFixed(2))));
  };

  const handleDecrement = (setter, value) => {
    setter(prev => Math.max(0.01, parseFloat((parseFloat(prev) - value).toFixed(2))));
  };

  // Handle direct input change
  const handleInputChange = (setter, value) => {
    if (value === '' || isNaN(value)) {
      setter(0);
    } else {
      setter(parseFloat(parseFloat(value).toFixed(2)));
    }
  };

  // Add section images object
  const sectionImages = {
    floor: '/images/concrete-sections/slab.png',
    beam: '/images/concrete-sections/beam.png',
    pillar: '/images/concrete-sections/pillar.png',
    base: '/images/concrete-sections/foundation.png'
  };

  const sectionLabels = {
    floor: {
      en: 'Floor Section',
      th: 'หน้าตัดพื้น'
    },
    beam: {
      en: 'Beam Section',
      th: 'หน้าตัดคาน'
    },
    pillar: {
      en: 'Pillar Section',
      th: 'หน้าตัดเสา'
    },
    base: {
      en: 'Foundation Section',
      th: 'หน้าตัดฐานราก'
    }
  };

  return (
    <div className="min-h-screen bg-blue-500 text-white">
      <div className="container mx-auto px-4 py-6 md:py-12">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {language === 'en' ? 'Calculate the consumption of concrete' : 'คำนวณปริมาณการใช้คอนกรีต'}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            {language === 'en' 
              ? 'Convenient, accurate, easy to use and cost-effective for calculating concrete quantity. For all areas of your work site' 
              : 'สะดวก แม่นยำ ใช้งานง่าย และคุ้มค่าสำหรับการคำนวณปริมาณคอนกรีต สำหรับทุกพื้นที่ในไซต์งานของคุณ'}
          </p>
        </div>

        {/* Tabs Section */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 w-full max-w-2xl px-2 sm:px-4">
            <TabButton 
              active={activeTab === 'floor'} 
              onClick={() => setActiveTab('floor')}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mx-auto mb-1">
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
              }
              label={language === 'en' ? 'Floor' : 'พื้น'}
              className="p-2 sm:p-3"
            />
            <TabButton 
              active={activeTab === 'beam'} 
              onClick={() => setActiveTab('beam')}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mx-auto mb-1">
                  <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
              }
              label={language === 'en' ? 'Beam' : 'คาน'}
              className="p-2 sm:p-3"
            />
            <TabButton 
              active={activeTab === 'pillar'} 
              onClick={() => setActiveTab('pillar')}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mx-auto mb-1">
                  <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                  <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                </svg>
              }
              label={language === 'en' ? 'Pillar' : 'เสา'}
              className="p-2 sm:p-3"
            />
            <TabButton 
              active={activeTab === 'base'} 
              onClick={() => setActiveTab('base')}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mx-auto mb-1">
                  <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
                  <path fillRule="evenodd" d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z" clipRule="evenodd" />
                </svg>
              }
              label={language === 'en' ? 'Base' : 'ฐานราก'}
              className="p-2 sm:p-3"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 max-w-7xl mx-auto">
          {/* Section Image and Dimensions */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-gray-800">
              {/* Section Image */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  {sectionLabels[activeTab][language]}
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 flex justify-center items-center">
                  <img
                    src={sectionImages[activeTab]}
                    alt={sectionLabels[activeTab][language]}
                    className="max-h-64 object-contain"
                  />
                </div>
              </div>

              {/* Dimension Labels */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">
                    {activeTab === 'beam' 
                      ? (language === 'en' ? 'Width (b)' : 'ความกว้าง (b)') 
                      : (language === 'en' ? 'Width' : 'ความกว้าง')}
                  </p>
                  <p className="font-semibold text-blue-600">{width} m</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">
                    {activeTab === 'beam'
                      ? (language === 'en' ? 'Height (h)' : 'ความสูง (h)')
                      : (language === 'en' ? 'Height' : 'ความสูง')}
                  </p>
                  <p className="font-semibold text-blue-600">{height} m</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">
                    {activeTab === 'beam'
                      ? (language === 'en' ? 'Length (L)' : 'ความยาว (L)')
                      : (language === 'en' ? 'Length' : 'ความยาว')}
                  </p>
                  <p className="font-semibold text-blue-600">{length} m</p>
                </div>
              </div>
            </div>
          </div>

          {/* Calculator Form */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 text-gray-800">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 text-blue-600 border-b pb-4">
                {language === 'en' 
                  ? `Calculate the consumption of concrete for ${activeTab === 'floor' ? 'flooring' : activeTab === 'beam' ? 'beams' : activeTab === 'pillar' ? 'pillars' : 'foundation'}.` 
                  : `คำนวณปริมาณการใช้คอนกรีตสำหรับ${activeTab === 'floor' ? 'พื้น' : activeTab === 'beam' ? 'คาน' : activeTab === 'pillar' ? 'เสา' : 'ฐานราก'}`}
              </h2>

              {/* Input Groups */}
              <div className="space-y-6">
                {/* Width Input */}
                <div className="input-group">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    {activeTab === 'beam' 
                      ? (language === 'en' ? 'Width (b)' : 'ความกว้าง (b)') 
                      : (language === 'en' ? 'Width' : 'ความกว้าง')} (meter)
                  </label>
                  <div className="flex h-12 shadow-sm rounded-md overflow-hidden">
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-r border-gray-300"
                      onClick={() => handleDecrement(setWidth, activeTab === 'beam' ? 0.05 : 0.1)}
                    >
                      <FaMinus className="text-gray-600" />
                    </button>
                    <input
                      type="text"
                      value={width}
                      onChange={(e) => handleInputChange(setWidth, e.target.value)}
                      className="w-full text-center text-lg border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-l border-gray-300"
                      onClick={() => handleIncrement(setWidth, activeTab === 'beam' ? 0.05 : 0.1)}
                    >
                      <FaPlus className="text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Length Input */}
                <div className="input-group">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    {activeTab === 'beam'
                      ? (language === 'en' ? 'Length (L)' : 'ความยาว (L)')
                      : (language === 'en' ? 'Length' : 'ความยาว')} (meter)
                  </label>
                  <div className="flex h-12 shadow-sm rounded-md overflow-hidden">
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-r border-gray-300"
                      onClick={() => handleDecrement(setLength, activeTab === 'beam' ? 0.1 : 0.1)}
                    >
                      <FaMinus className="text-gray-600" />
                    </button>
                    <input
                      type="text"
                      value={length}
                      onChange={(e) => handleInputChange(setLength, e.target.value)}
                      className="w-full text-center text-lg border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-l border-gray-300"
                      onClick={() => handleIncrement(setLength, activeTab === 'beam' ? 0.1 : 0.1)}
                    >
                      <FaPlus className="text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Height Input */}
                <div className="input-group">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    {activeTab === 'beam'
                      ? (language === 'en' ? 'Height (h)' : 'ความสูง (h)')
                      : (language === 'en' ? 'Height' : 'ความสูง')} (meter)
                  </label>
                  <div className="flex h-12 shadow-sm rounded-md overflow-hidden">
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-r border-gray-300"
                      onClick={() => handleDecrement(setHeight, activeTab === 'beam' ? 0.05 : 0.01)}
                    >
                      <FaMinus className="text-gray-600" />
                    </button>
                    <input
                      type="text"
                      value={height}
                      onChange={(e) => handleInputChange(setHeight, e.target.value)}
                      className="w-full text-center text-lg border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-l border-gray-300"
                      onClick={() => handleIncrement(setHeight, activeTab === 'beam' ? 0.05 : 0.01)}
                    >
                      <FaPlus className="text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Results Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                  <div className="border rounded-xl p-4 text-center bg-gradient-to-b from-white to-gray-50">
                    <div className="text-sm font-medium mb-2 text-gray-600">
                      {language === 'en' ? 'Required Concrete' : 'ปริมาณคอนกรีตที่ต้องการ'}
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-blue-600">{volume}</div>
                    <div className="text-sm text-gray-500 mt-1">
                      {language === 'en' ? 'm³' : 'ลบ.ม.'}
                    </div>
                  </div>
                  <div className="border rounded-xl p-4 text-center bg-gradient-to-b from-blue-50 to-blue-100">
                    <div className="text-sm font-medium mb-2 text-gray-600">
                      {language === 'en' ? 'Order Amount' : 'ปริมาณที่ควรสั่งซื้อ'}
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-blue-600">{orderVolume}</div>
                    <div className="text-sm text-gray-500 mt-1">
                      {language === 'en' ? 'm³' : 'ลบ.ม.'}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-blue-600 italic bg-blue-50 p-3 rounded-lg">
                  * {language === 'en' 
                    ? 'Includes 10% extra volume as recommended by CPAC' 
                    : 'รวมส่วนเผื่อ 10% ตามคำแนะนำของ CPAC'}
                </p>

                <button 
                  onClick={() => {
                    setWidth(0.15);
                    setLength(4.0);
                    setHeight(0.3);
                  }}
                  className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-all transform hover:scale-[1.02] active:scale-[0.98] text-lg font-medium shadow-md"
                >
                  {language === 'en' ? 'Recalculate' : 'คำนวณใหม่'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Tools Link */}
        <div className="mt-8 md:mt-12 text-center">
          <Link 
            to="/engineering-tools" 
            className="inline-flex items-center text-white hover:text-blue-100 transition-colors text-base sm:text-lg"
          >
            <span className="mr-2">←</span>
            {language === 'en' ? 'Back to Engineering Tools' : 'กลับไปที่เครื่องมือวิศวกรรม'}
          </Link>
        </div>
      </div>
    </div>
  );
};

// Update TabButton component
const TabButton = ({ active, onClick, icon, label, className = '' }) => {
  return (
    <button
      className={`rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
        active 
          ? 'bg-white text-blue-600 shadow-lg' 
          : 'bg-blue-600 text-white hover:bg-blue-700'
      } ${className}`}
      onClick={onClick}
    >
      <div className="text-center">
        {icon}
        <span className="block text-sm sm:text-base font-medium">{label}</span>
      </div>
    </button>
  );
};

export default ConcreteCalculator;
