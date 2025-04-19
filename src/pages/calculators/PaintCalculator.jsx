import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';

// Add translations
const translations = {
  title: {
    en: 'Calculate Paint Quantity',
    th: 'คำนวณปริมาณสี'
  },
  subtitle: {
    en: 'Calculate paint quantity for walls and surfaces with accurate results',
    th: 'คำนวณปริมาณสีสำหรับผนังและพื้นผิว พร้อมผลลัพธ์ที่แม่นยำ'
  },
  specifications: {
    en: 'Paint Specifications',
    th: 'ข้อมูลจำเพาะของสี'
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
  coats: {
    en: 'Number of Coats',
    th: 'จำนวนเที่ยวทาสี'
  },
  deductArea: {
    en: 'Deduct Area',
    th: 'พื้นที่หัก'
  },
  results: {
    en: 'Paint Requirements',
    th: 'ปริมาณสีที่ต้องใช้'
  },
  totalArea: {
    en: 'Total wall area',
    th: 'พื้นที่ผนังรวม'
  },
  netArea: {
    en: 'Net wall area',
    th: 'พื้นที่ผนังสุทธิ'
  },
  paintRequired: {
    en: 'Paint required',
    th: 'สีที่ต้องใช้'
  },
  primerRequired: {
    en: 'Primer required',
    th: 'สีรองพื้นที่ต้องใช้'
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
  interior: {
    en: 'Interior Wall',
    th: 'ผนังภายใน',
    coverage: 35, // m² per gallon
    primerCoverage: 40 // m² per gallon
  },
  exterior: {
    en: 'Exterior Wall',
    th: 'ผนังภายนอก',
    coverage: 30, // m² per gallon
    primerCoverage: 35 // m² per gallon
  },
  ceiling: {
    en: 'Ceiling',
    th: 'เพดาน',
    coverage: 32, // m² per gallon
    primerCoverage: 38 // m² per gallon
  }
};

const PaintCalculator = () => {
  const { language } = useLanguage();
  
  // State for wall dimensions
  const [width, setWidth] = useState(3.0);  // Default wall width 3m
  const [height, setHeight] = useState(2.8); // Default wall height 2.8m
  const [coats, setCoats] = useState(2); // Default 2 coats of paint
  const [deductArea, setDeductArea] = useState(2.0); // Default deduct area 2m² (doors/windows)
  
  // State for results
  const [totalArea, setTotalArea] = useState(0);
  const [netArea, setNetArea] = useState(0);
  const [paintRequired, setPaintRequired] = useState(0);
  const [primerRequired, setPrimerRequired] = useState(0);

  // Calculate quantities when dimensions change
  useEffect(() => {
    // Calculate areas
    const calculatedTotalArea = width * height;
    const calculatedNetArea = Math.max(calculatedTotalArea - deductArea, 0);
    
    // Calculate paint requirements
    // Using interior wall as default type
    const { coverage, primerCoverage } = surfaceTypes.interior;
    
    // Add 10% for wastage
    const totalPaintArea = calculatedNetArea * coats * 1.1;
    const totalPrimerArea = calculatedNetArea * 1.1;
    
    // Calculate paint gallons needed
    const paintGallons = Math.ceil(totalPaintArea / coverage);
    const primerGallons = Math.ceil(totalPrimerArea / primerCoverage);
    
    setTotalArea(calculatedTotalArea.toFixed(2));
    setNetArea(calculatedNetArea.toFixed(2));
    setPaintRequired(paintGallons);
    setPrimerRequired(primerGallons);
  }, [width, height, coats, deductArea]);

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

                {/* Number of Coats Input */}
                <div className="input-group">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    {translations.coats[language]}
                  </label>
                  <div className="flex h-12 shadow-sm rounded-md overflow-hidden">
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-r border-gray-300"
                      onClick={() => handleDecrement(setCoats, coats, 1)}
                    >
                      <FaMinus className="text-gray-600" />
                    </button>
                    <input
                      type="text"
                      value={coats}
                      onChange={(e) => handleInputChange(setCoats, e.target.value)}
                      className="w-full text-center text-lg border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-l border-gray-300"
                      onClick={() => handleIncrement(setCoats, coats, 1)}
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
                    setCoats(2);
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
                    {translations.paintRequired[language]}
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600">
                    {paintRequired}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{language === 'en' ? 'gallons' : 'แกลลอน'}</div>
                </div>
                <div className="border rounded-xl p-4 text-center bg-gradient-to-b from-blue-50 to-blue-100">
                  <div className="text-sm font-medium mb-2 text-gray-600">
                    {translations.primerRequired[language]}
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600">
                    {primerRequired}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{language === 'en' ? 'gallons' : 'แกลลอน'}</div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                  <p className="text-sm text-blue-600">
                    * {language === 'en' 
                      ? 'Includes 10% extra for wastage and touch-ups' 
                      : 'รวมปริมาณเพิ่ม 10% สำหรับการสูญเสียและแต่งเติม'}
                  </p>
                  <p className="text-sm text-blue-600">
                    * {language === 'en'
                      ? '1 gallon covers approximately 35m² per coat (interior paint)'
                      : '1 แกลลอนครอบคลุมพื้นที่ประมาณ 35 ตร.ม. ต่อเที่ยว (สีภายใน)'}
                  </p>
                  <p className="text-sm text-blue-600">
                    * {language === 'en'
                      ? 'Primer coverage: 40m² per gallon'
                      : 'สีรองพื้น: ครอบคลุมพื้นที่ 40 ตร.ม. ต่อแกลลอน'}
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

export default PaintCalculator; 