import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';

// Add translations
const translations = {
  title: {
    en: 'Calculate the quantity of bricks',
    th: 'คำนวณปริมาณอิฐก่อสร้าง'
  },
  subtitle: {
    en: 'Convenient, accurate, easy to use and cost-effective for calculating brick quantity. For all types of brick walls',
    th: 'สะดวก แม่นยำ ใช้งานง่าย และคุ้มค่าสำหรับการคำนวณปริมาณอิฐก่อสร้าง สำหรับผนังอิฐทุกประเภท'
  },
  specifications: {
    en: 'Brick Wall Specifications',
    th: 'ข้อมูลจำเพาะของผนังอิฐ'
  },
  calculate: {
    en: 'Calculate Quantity',
    th: 'คำนวณปริมาณ'
  },
  brickType: {
    en: 'Brick Type',
    th: 'ประเภทอิฐ'
  },
  width: {
    en: 'Width',
    th: 'ความกว้าง'
  },
  length: {
    en: 'Length',
    th: 'ความยาว'
  },
  height: {
    en: 'Height',
    th: 'ความสูง'
  },
  deductArea: {
    en: 'Deduct Area',
    th: 'พื้นที่หัก'
  },
  results: {
    en: 'Calculation Results',
    th: 'ผลการคำนวณ'
  },
  totalArea: {
    en: 'Total wall area',
    th: 'พื้นที่ผนังรวม'
  },
  netArea: {
    en: 'Net wall area',
    th: 'พื้นที่ผนังสุทธิ'
  },
  brickQuantity: {
    en: 'Brick quantity',
    th: 'จำนวนอิฐที่ต้องใช้'
  },
  orderQuantity: {
    en: 'Order quantity',
    th: 'จำนวนที่ควรสั่งซื้อ'
  },
  reset: {
    en: 'Reset',
    th: 'รีเซ็ต'
  },
  back: {
    en: 'Back to Engineering Tools',
    th: 'กลับไปที่เครื่องมือวิศวกรรม'
  }
};

const brickTypes = {
  standard: {
    en: 'Standard Clay Brick',
    th: 'อิฐมอญ',
    size: { width: 0.065, length: 0.14, height: 0.035 },
    unitsPerM2: 100
  },
  concrete: {
    en: 'Concrete Block',
    th: 'คอนกรีตบล็อก',
    size: { width: 0.07, length: 0.19, height: 0.39 },
    unitsPerM2: 12.5
  },
  interlocking: {
    en: 'Interlocking Block',
    th: 'อิฐบล็อกประสาน',
    size: { width: 0.10, length: 0.25, height: 0.125 },
    unitsPerM2: 32
  }
};

const sectionImages = {
  standard: '/images/brick-sections/standard-brick.png',
  concrete: '/images/brick-sections/concrete-block.png',
  interlocking: '/images/brick-sections/interlocking-block.png'
};

const BricksCalculator = () => {
  const { language } = useLanguage();
  
  // State for brick type
  const [brickType, setBrickType] = useState('standard');
  
  // State for wall dimensions
  const [width, setWidth] = useState(3.0);  // Default wall width 3m
  const [length, setLength] = useState(4.0); // Default wall length 4m
  const [height, setHeight] = useState(2.8); // Default wall height 2.8m
  const [deductArea, setDeductArea] = useState(2.0); // Default deduct area 2m² (doors/windows)
  
  // State for results
  const [totalArea, setTotalArea] = useState(0);
  const [netArea, setNetArea] = useState(0);
  const [brickQuantity, setBrickQuantity] = useState(0);
  const [orderQuantity, setOrderQuantity] = useState(0);

  // Calculate areas and quantities when dimensions change
  useEffect(() => {
    const calculatedTotalArea = width * height;
    const calculatedNetArea = Math.max(calculatedTotalArea - deductArea, 0);
    const calculatedBrickQuantity = Math.ceil(calculatedNetArea * brickTypes[brickType].unitsPerM2);
    
    setTotalArea(calculatedTotalArea.toFixed(2));
    setNetArea(calculatedNetArea.toFixed(2));
    setBrickQuantity(calculatedBrickQuantity);
    // Add 5% extra for breakage and waste
    setOrderQuantity(Math.ceil(calculatedBrickQuantity * 1.05));
  }, [width, height, deductArea, brickType]);

  // Handle increment/decrement
  const handleIncrement = (setter, value, current) => {
    setter(prev => Math.min(100, parseFloat((parseFloat(prev) + value).toFixed(2))));
  };

  const handleDecrement = (setter, value, current) => {
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

  return (
    <div className="min-h-screen bg-blue-500 text-white">
      <div className="container mx-auto px-4 py-6 md:py-12">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {translations.title[language]}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            {translations.subtitle[language]}
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 max-w-7xl mx-auto">
          {/* Section Image and Specifications */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-gray-800">
              {/* Section Image */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  {translations.brickType[language]}
                </h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <img
                    src={sectionImages[brickType]}
                    alt={brickTypes[brickType][language]}
                    className="max-h-64 object-contain mx-auto"
                  />
                </div>
              </div>

              {/* Brick Type Selection */}
              <div className="mb-6">
                <select
                  value={brickType}
                  onChange={(e) => setBrickType(e.target.value)}
                  className="w-full p-3 border rounded-lg text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                  {Object.entries(brickTypes).map(([type, data]) => (
                    <option key={type} value={type}>
                      {data[language]}
                    </option>
                  ))}
                </select>
              </div>

              {/* Brick Specifications */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">{translations.width[language]}</p>
                  <p className="font-semibold text-blue-600">
                    {(brickTypes[brickType].size.width * 100).toFixed(2)} cm
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">{translations.length[language]}</p>
                  <p className="font-semibold text-blue-600">
                    {(brickTypes[brickType].size.length * 100).toFixed(2)} cm
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">{translations.height[language]}</p>
                  <p className="font-semibold text-blue-600">
                    {(brickTypes[brickType].size.height * 100).toFixed(2)} cm
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Calculator Form */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 text-gray-800">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 text-blue-600 border-b pb-4">
                {translations.calculate[language]}
              </h2>

              {/* Input Groups */}
              <div className="space-y-6">
                {/* Width Input */}
                <div className="input-group">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    {translations.width[language]} (meter)
                  </label>
                  <div className="flex h-12 shadow-sm rounded-md overflow-hidden">
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-r border-gray-300"
                      onClick={() => handleDecrement(setWidth, 0.1)}
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
                      onClick={() => handleIncrement(setWidth, 0.1)}
                    >
                      <FaPlus className="text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Height Input */}
                <div className="input-group">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    {translations.height[language]} (meter)
                  </label>
                  <div className="flex h-12 shadow-sm rounded-md overflow-hidden">
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-r border-gray-300"
                      onClick={() => handleDecrement(setHeight, 0.1)}
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
                      onClick={() => handleIncrement(setHeight, 0.1)}
                    >
                      <FaPlus className="text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Deduct Area Input */}
                <div className="input-group">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    {translations.deductArea[language]} (m²)
                  </label>
                  <div className="flex h-12 shadow-sm rounded-md overflow-hidden">
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-r border-gray-300"
                      onClick={() => handleDecrement(setDeductArea, 0.1)}
                    >
                      <FaMinus className="text-gray-600" />
                    </button>
                    <input
                      type="text"
                      value={deductArea}
                      onChange={(e) => handleInputChange(setDeductArea, e.target.value)}
                      className="w-full text-center text-lg border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-l border-gray-300"
                      onClick={() => handleIncrement(setDeductArea, 0.1)}
                    >
                      <FaPlus className="text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Results Section */}
                <div className="grid grid-cols-2 gap-4 my-8">
                  <div className="border rounded-xl p-4 text-center bg-gradient-to-b from-white to-gray-50">
                    <div className="text-sm font-medium mb-2 text-gray-600">
                      {translations.totalArea[language]}
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-blue-600">{totalArea}</div>
                    <div className="text-sm text-gray-500 mt-1">m²</div>
                  </div>
                  <div className="border rounded-xl p-4 text-center bg-gradient-to-b from-white to-gray-50">
                    <div className="text-sm font-medium mb-2 text-gray-600">
                      {translations.netArea[language]}
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-blue-600">{netArea}</div>
                    <div className="text-sm text-gray-500 mt-1">m²</div>
                  </div>
                  <div className="border rounded-xl p-4 text-center bg-gradient-to-b from-white to-gray-50">
                    <div className="text-sm font-medium mb-2 text-gray-600">
                      {translations.brickQuantity[language]}
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-blue-600">
                      {brickQuantity.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{language === 'en' ? 'pieces' : 'ก้อน'}</div>
                  </div>
                  <div className="border rounded-xl p-4 text-center bg-gradient-to-b from-blue-50 to-blue-100">
                    <div className="text-sm font-medium mb-2 text-gray-600">
                      {translations.orderQuantity[language]}
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-blue-600">
                      {orderQuantity.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{language === 'en' ? 'pieces' : 'ก้อน'}</div>
                  </div>
                </div>

                <p className="text-sm text-blue-600 italic bg-blue-50 p-3 rounded-lg">
                  * {language === 'en' 
                    ? 'Includes 5% extra quantity for breakage and waste' 
                    : 'รวมส่วนเผื่อ 5% สำหรับการแตกหักและสูญเสีย'}
                </p>

                <button 
                  onClick={() => {
                    setBrickType('standard');
                    setWidth(3.0);
                    setHeight(2.8);
                    setDeductArea(2.0);
                  }}
                  className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-all transform hover:scale-[1.02] active:scale-[0.98] text-lg font-medium shadow-md"
                >
                  {translations.reset[language]}
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
            {translations.back[language]}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BricksCalculator; 