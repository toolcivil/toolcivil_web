import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';

// Add translations
const translations = {
  title: {
    en: 'Calculate Plaster Quantity',
    th: 'คำนวณปริมาณปูนฉาบ'
  },
  subtitle: {
    en: 'Calculate plaster quantity for walls and ceilings with accurate results',
    th: 'คำนวณปริมาณปูนฉาบสำหรับผนังและเพดาน พร้อมผลลัพธ์ที่แม่นยำ'
  },
  specifications: {
    en: 'Plaster Specifications',
    th: 'ข้อมูลจำเพาะของปูนฉาบ'
  },
  calculate: {
    en: 'Calculate Materials',
    th: 'คำนวณวัสดุ'
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
  thickness: {
    en: 'Plaster Thickness',
    th: 'ความหนาปูนฉาบ'
  },
  deductArea: {
    en: 'Deduct Area',
    th: 'พื้นที่หัก'
  },
  results: {
    en: 'Material Requirements',
    th: 'วัสดุที่ต้องใช้'
  },
  totalArea: {
    en: 'Total wall area',
    th: 'พื้นที่ผนังรวม'
  },
  netArea: {
    en: 'Net wall area',
    th: 'พื้นที่ผนังสุทธิ'
  },
  cementRequired: {
    en: 'Cement required',
    th: 'ปูนซีเมนต์ที่ต้องใช้'
  },
  sandRequired: {
    en: 'Sand required',
    th: 'ทรายที่ต้องใช้'
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

const surfaceTypes = {
  brick: {
    en: 'Brick Wall',
    th: 'ผนังอิฐ',
    cementRatio: 1,
    sandRatio: 3,
    defaultThickness: 0.012 // 12mm
  },
  concrete: {
    en: 'Concrete Surface',
    th: 'ผิวคอนกรีต',
    cementRatio: 1,
    sandRatio: 2,
    defaultThickness: 0.010 // 10mm
  },
  ceiling: {
    en: 'Ceiling',
    th: 'เพดาน',
    cementRatio: 1,
    sandRatio: 2,
    defaultThickness: 0.008 // 8mm
  }
};

const sectionImages = {
  brick: '/images/plaster-sections/brick-wall.png',
  concrete: '/images/plaster-sections/concrete-surface.png',
  ceiling: '/images/plaster-sections/ceiling.png'
};

const PlasterCalculator = () => {
  const { language } = useLanguage();
  
  // State for wall dimensions
  const [width, setWidth] = useState(3.0);  // Default wall width 3m
  const [height, setHeight] = useState(2.8); // Default wall height 2.8m
  const [thickness, setThickness] = useState(0.012); // Default plaster thickness 1.2cm
  const [deductArea, setDeductArea] = useState(2.0); // Default deduct area 2m² (doors/windows)
  
  // State for results
  const [totalArea, setTotalArea] = useState(0);
  const [netArea, setNetArea] = useState(0);
  const [cementRequired, setCementRequired] = useState(0);
  const [sandRequired, setSandRequired] = useState(0);

  // Calculate quantities when dimensions change
  useEffect(() => {
    // Calculate areas
    const calculatedTotalArea = width * height;
    const calculatedNetArea = Math.max(calculatedTotalArea - deductArea, 0);
    
    // Calculate volume
    const plasterVolume = calculatedNetArea * thickness;
    
    // Calculate materials (1:4 cement:sand ratio)
    // Add 30% for joints and surface coverage
    const volumeWithWaste = plasterVolume * 1.3;
    
    // Calculate dry volume (add 25% to the total volume)
    const dryVolume = volumeWithWaste * 1.25;
    
    // Calculate cement (1 part out of 5 total parts)
    // 1 cement bag = 0.035 m³
    const cementBags = Math.ceil((dryVolume * 1/5) / 0.035);
    
    // Calculate sand (4 parts out of 5 total parts)
    // Sand density = 1550 kg/m³
    const sandVolume = dryVolume * 4/5;
    const sandWeight = sandVolume * 1550;
    
    setTotalArea(calculatedTotalArea.toFixed(2));
    setNetArea(calculatedNetArea.toFixed(2));
    setCementRequired(cementBags);
    setSandRequired((sandWeight / 1000).toFixed(2)); // Convert to tons
  }, [width, height, thickness, deductArea]);

  // Handle increment/decrement
  const handleIncrement = (setter, value, step = 0.1) => {
    setter(prev => Math.min(100, parseFloat((parseFloat(prev) + step).toFixed(3))));
  };

  const handleDecrement = (setter, value, step = 0.1) => {
    setter(prev => Math.max(0.001, parseFloat((parseFloat(prev) - step).toFixed(3))));
  };

  // Handle direct input change
  const handleInputChange = (setter, value) => {
    if (value === '' || isNaN(value)) {
      setter(0);
    } else {
      setter(parseFloat(parseFloat(value).toFixed(3)));
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
                      onClick={() => handleDecrement(setWidth, width)}
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
                      onClick={() => handleIncrement(setWidth, width)}
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
                      onClick={() => handleDecrement(setHeight, height)}
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
                      onClick={() => handleIncrement(setHeight, height)}
                    >
                      <FaPlus className="text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Thickness Input */}
                <div className="input-group">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    {translations.thickness[language]} (meter)
                  </label>
                  <div className="flex h-12 shadow-sm rounded-md overflow-hidden">
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-r border-gray-300"
                      onClick={() => handleDecrement(setThickness, thickness, 0.001)}
                    >
                      <FaMinus className="text-gray-600" />
                    </button>
                    <input
                      type="text"
                      value={thickness}
                      onChange={(e) => handleInputChange(setThickness, e.target.value)}
                      className="w-full text-center text-lg border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-l border-gray-300"
                      onClick={() => handleIncrement(setThickness, thickness, 0.001)}
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
                      onClick={() => handleDecrement(setDeductArea, deductArea)}
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
                      onClick={() => handleIncrement(setDeductArea, deductArea)}
                    >
                      <FaPlus className="text-gray-600" />
                    </button>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setWidth(3.0);
                    setHeight(2.8);
                    setThickness(0.012);
                    setDeductArea(2.0);
                  }}
                  className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-all transform hover:scale-[1.02] active:scale-[0.98] text-lg font-medium shadow-md"
                >
                  {translations.reset[language]}
                </button>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 text-gray-800">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 text-blue-600 border-b pb-4">
                {translations.results[language]}
              </h2>

              <div className="grid grid-cols-2 gap-4">
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
                    {translations.cementRequired[language]}
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600">
                    {cementRequired}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{language === 'en' ? 'bags' : 'ถุง'}</div>
                </div>
                <div className="border rounded-xl p-4 text-center bg-gradient-to-b from-blue-50 to-blue-100">
                  <div className="text-sm font-medium mb-2 text-gray-600">
                    {translations.sandRequired[language]}
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600">
                    {sandRequired}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{language === 'en' ? 'tons' : 'ตัน'}</div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                  <p className="text-sm text-blue-600">
                    * {language === 'en' 
                      ? 'Includes 30% extra volume for joints and surface coverage' 
                      : 'รวมปริมาณเพิ่ม 30% สำหรับรอยต่อและการปกคลุมพื้นผิว'}
                  </p>
                  <p className="text-sm text-blue-600">
                    * {language === 'en'
                      ? 'Cement to sand ratio is 1:4'
                      : 'อัตราส่วนปูนซีเมนต์ต่อทราย 1:4'}
                  </p>
                  <p className="text-sm text-blue-600">
                    * {language === 'en'
                      ? '1 cement bag = 50 kg = 0.035 m³'
                      : '1 ถุงปูน = 50 กก. = 0.035 ลบ.ม.'}
                  </p>
                </div>
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

export default PlasterCalculator; 