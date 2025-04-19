import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';

// Add translations
const translations = {
  title: {
    en: 'Excavation Calculator',
    th: 'คำนวณงานขุดดิน'
  },
  subtitle: {
    en: 'Calculate excavation volume and soil expansion for construction projects',
    th: 'คำนวณปริมาตรดินขุดและการขยายตัวของดิน สำหรับงานก่อสร้าง'
  },
  dimensions: {
    en: 'Excavation Dimensions',
    th: 'ขนาดพื้นที่ขุด'
  },
  width: {
    en: 'Width',
    th: 'ความกว้าง'
  },
  length: {
    en: 'Length',
    th: 'ความยาว'
  },
  depth: {
    en: 'Depth',
    th: 'ความลึก'
  },
  slope: {
    en: 'Slope Angle',
    th: 'ความลาดเอียง'
  },
  expansionFactor: {
    en: 'Soil Expansion Factor',
    th: 'ค่าการขยายตัวของดิน'
  },
  results: {
    en: 'Results',
    th: 'ผลลัพธ์'
  },
  excavationVolume: {
    en: 'Excavation Volume',
    th: 'ปริมาตรดินขุด'
  },
  expandedVolume: {
    en: 'Expanded Volume',
    th: 'ปริมาตรดินหลังขยายตัว'
  },
  reset: {
    en: 'Reset',
    th: 'รีเซ็ต'
  },
  back: {
    en: 'Back to Engineering Tools',
    th: 'กลับไปที่เครื่องมือวิศวกรรม'
  },
  unit: {
    en: 'meters',
    th: 'เมตร'
  },
  degrees: {
    en: 'degrees',
    th: 'องศา'
  },
  cubicMeters: {
    en: 'cubic meters',
    th: 'ลูกบาศก์เมตร'
  }
};

const ExcavationCalculator = () => {
  const { language } = useLanguage();
  
  // State for dimensions
  const [width, setWidth] = useState(3.0);
  const [length, setLength] = useState(4.0);
  const [depth, setDepth] = useState(2.0);
  const [slope, setSlope] = useState(45);
  const [expansionFactor, setExpansionFactor] = useState(1.3);
  
  // State for results
  const [excavationVolume, setExcavationVolume] = useState(0);
  const [expandedVolume, setExpandedVolume] = useState(0);

  // Calculate volumes when dimensions change
  useEffect(() => {
    // Calculate base area
    const baseArea = width * length;
    
    // Calculate average width and length including slope
    const slopeRatio = Math.tan(slope * Math.PI / 180);
    const depthEffect = depth / slopeRatio;
    
    const avgWidth = width + depthEffect;
    const avgLength = length + depthEffect;
    const avgArea = avgWidth * avgLength;
    
    // Calculate volume using average of top and bottom areas
    const volume = ((baseArea + avgArea) / 2) * depth;
    
    // Calculate expanded volume
    const expanded = volume * expansionFactor;
    
    setExcavationVolume(volume.toFixed(2));
    setExpandedVolume(expanded.toFixed(2));
  }, [width, length, depth, slope, expansionFactor]);

  // Handle increment/decrement
  const handleIncrement = (setter, value, step = 0.1) => {
    setter(prev => Math.min(100, parseFloat((parseFloat(prev) + step).toFixed(2))));
  };

  const handleDecrement = (setter, value, step = 0.1) => {
    setter(prev => Math.max(0.1, parseFloat((parseFloat(prev) - step).toFixed(2))));
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
          {/* Calculator Form */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 text-gray-800">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 text-blue-600 border-b pb-4">
                {translations.dimensions[language]}
              </h2>

              {/* Input Groups */}
              <div className="space-y-6">
                {/* Width Input */}
                <div className="input-group">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    {translations.width[language]} ({translations.unit[language]})
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

                {/* Length Input */}
                <div className="input-group">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    {translations.length[language]} ({translations.unit[language]})
                  </label>
                  <div className="flex h-12 shadow-sm rounded-md overflow-hidden">
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-r border-gray-300"
                      onClick={() => handleDecrement(setLength, length)}
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
                      onClick={() => handleIncrement(setLength, length)}
                    >
                      <FaPlus className="text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Depth Input */}
                <div className="input-group">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    {translations.depth[language]} ({translations.unit[language]})
                  </label>
                  <div className="flex h-12 shadow-sm rounded-md overflow-hidden">
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-r border-gray-300"
                      onClick={() => handleDecrement(setDepth, depth)}
                    >
                      <FaMinus className="text-gray-600" />
                    </button>
                    <input
                      type="text"
                      value={depth}
                      onChange={(e) => handleInputChange(setDepth, e.target.value)}
                      className="w-full text-center text-lg border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-l border-gray-300"
                      onClick={() => handleIncrement(setDepth, depth)}
                    >
                      <FaPlus className="text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Slope Input */}
                <div className="input-group">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    {translations.slope[language]} ({translations.degrees[language]})
                  </label>
                  <div className="flex h-12 shadow-sm rounded-md overflow-hidden">
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-r border-gray-300"
                      onClick={() => handleDecrement(setSlope, slope, 5)}
                    >
                      <FaMinus className="text-gray-600" />
                    </button>
                    <input
                      type="text"
                      value={slope}
                      onChange={(e) => handleInputChange(setSlope, e.target.value)}
                      className="w-full text-center text-lg border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-l border-gray-300"
                      onClick={() => handleIncrement(setSlope, slope, 5)}
                    >
                      <FaPlus className="text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Expansion Factor Input */}
                <div className="input-group">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    {translations.expansionFactor[language]}
                  </label>
                  <div className="flex h-12 shadow-sm rounded-md overflow-hidden">
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-r border-gray-300"
                      onClick={() => handleDecrement(setExpansionFactor, expansionFactor, 0.1)}
                    >
                      <FaMinus className="text-gray-600" />
                    </button>
                    <input
                      type="text"
                      value={expansionFactor}
                      onChange={(e) => handleInputChange(setExpansionFactor, e.target.value)}
                      className="w-full text-center text-lg border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-l border-gray-300"
                      onClick={() => handleIncrement(setExpansionFactor, expansionFactor, 0.1)}
                    >
                      <FaPlus className="text-gray-600" />
                    </button>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setWidth(3.0);
                    setLength(4.0);
                    setDepth(2.0);
                    setSlope(45);
                    setExpansionFactor(1.3);
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

              <div className="space-y-6">
                {/* Excavation Volume */}
                <div className="border rounded-xl p-6 bg-gradient-to-b from-blue-50 to-blue-100">
                  <div className="text-sm font-medium mb-2 text-gray-600">
                    {translations.excavationVolume[language]}
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600">
                    {excavationVolume}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {translations.cubicMeters[language]}
                  </div>
                </div>

                {/* Expanded Volume */}
                <div className="border rounded-xl p-6 bg-gradient-to-b from-yellow-50 to-yellow-100">
                  <div className="text-sm font-medium mb-2 text-gray-600">
                    {translations.expandedVolume[language]}
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-yellow-600">
                    {expandedVolume}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {translations.cubicMeters[language]}
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                  <p className="text-sm text-blue-600">
                    * {language === 'en'
                      ? 'Slope angle affects the excavation volume'
                      : 'ความลาดเอียงมีผลต่อปริมาตรดินขุด'}
                  </p>
                  <p className="text-sm text-blue-600">
                    * {language === 'en'
                      ? 'Expansion factor accounts for soil bulking after excavation'
                      : 'ค่าการขยายตัวคำนวณการพองตัวของดินหลังการขุด'}
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

export default ExcavationCalculator; 