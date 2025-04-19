import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';

// Add translations
const translations = {
  title: {
    en: 'Calculate Tiles Quantity',
    th: 'คำนวณปริมาณกระเบื้อง'
  },
  subtitle: {
    en: 'Calculate tiles quantity for floors and walls with accurate results',
    th: 'คำนวณปริมาณกระเบื้องสำหรับพื้นและผนัง พร้อมผลลัพธ์ที่แม่นยำ'
  },
  specifications: {
    en: 'Tiles Specifications',
    th: 'ข้อมูลจำเพาะของกระเบื้อง'
  },
  calculate: {
    en: 'Calculate Materials',
    th: 'คำนวณวัสดุ'
  },
  width: {
    en: 'Room Width',
    th: 'ความกว้างห้อง'
  },
  length: {
    en: 'Room Length',
    th: 'ความยาวห้อง'
  },
  tileSize: {
    en: 'Tile Size',
    th: 'ขนาดกระเบื้อง'
  },
  deductArea: {
    en: 'Deduct Area',
    th: 'พื้นที่หัก'
  },
  extraTiles: {
    en: 'Extra Tiles',
    th: 'กระเบื้องสำรอง'
  },
  results: {
    en: 'Tiles Requirements',
    th: 'ปริมาณกระเบื้องที่ต้องใช้'
  },
  totalArea: {
    en: 'Total area',
    th: 'พื้นที่รวม'
  },
  netArea: {
    en: 'Net area',
    th: 'พื้นที่สุทธิ'
  },
  tilesRequired: {
    en: 'Tiles required',
    th: 'กระเบื้องที่ต้องใช้'
  },
  adhesiveRequired: {
    en: 'Adhesive required',
    th: 'กาวยาแนวที่ต้องใช้'
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

const tileSizes = {
  '30x30': {
    en: '30x30 cm',
    th: '30x30 ซม.',
    area: 0.09 // m²
  },
  '60x60': {
    en: '60x60 cm',
    th: '60x60 ซม.',
    area: 0.36 // m²
  },
  '80x80': {
    en: '80x80 cm',
    th: '80x80 ซม.',
    area: 0.64 // m²
  }
};

const TilesCalculator = () => {
  const { language } = useLanguage();
  
  // State for room dimensions
  const [width, setWidth] = useState(4.0);  // Default room width 4m
  const [length, setLength] = useState(5.0); // Default room length 5m
  const [tileSize, setTileSize] = useState('60x60'); // Default tile size 60x60cm
  const [deductArea, setDeductArea] = useState(0.5); // Default deduct area 0.5m² (fixtures)
  const [extraPercentage, setExtraPercentage] = useState(10); // Default 10% extra tiles
  
  // State for results
  const [totalArea, setTotalArea] = useState(0);
  const [netArea, setNetArea] = useState(0);
  const [tilesRequired, setTilesRequired] = useState(0);
  const [adhesiveRequired, setAdhesiveRequired] = useState(0);

  // Calculate quantities when dimensions change
  useEffect(() => {
    // Calculate areas
    const calculatedTotalArea = width * length;
    const calculatedNetArea = Math.max(calculatedTotalArea - deductArea, 0);
    
    // Calculate tiles needed
    const tileArea = tileSizes[tileSize].area;
    const extraMultiplier = 1 + (extraPercentage / 100);
    const tilesNeeded = Math.ceil((calculatedNetArea / tileArea) * extraMultiplier);
    
    // Calculate adhesive needed (approximately 5kg per m²)
    const adhesiveNeeded = Math.ceil(calculatedNetArea * 5);
    
    setTotalArea(calculatedTotalArea.toFixed(2));
    setNetArea(calculatedNetArea.toFixed(2));
    setTilesRequired(tilesNeeded);
    setAdhesiveRequired(adhesiveNeeded);
  }, [width, length, tileSize, deductArea, extraPercentage]);

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

                {/* Length Input */}
                <div className="input-group">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    {translations.length[language]} (meter)
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

                {/* Tile Size Selection */}
                <div className="input-group">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    {translations.tileSize[language]}
                  </label>
                  <select
                    value={tileSize}
                    onChange={(e) => setTileSize(e.target.value)}
                    className="w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-lg"
                  >
                    {Object.entries(tileSizes).map(([size, data]) => (
                      <option key={size} value={size}>
                        {data[language]}
                      </option>
                    ))}
                  </select>
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

                {/* Extra Tiles Percentage */}
                <div className="input-group">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    {translations.extraTiles[language]} (%)
                  </label>
                  <div className="flex h-12 shadow-sm rounded-md overflow-hidden">
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-r border-gray-300"
                      onClick={() => handleDecrement(setExtraPercentage, extraPercentage, 5)}
                    >
                      <FaMinus className="text-gray-600" />
                    </button>
                    <input
                      type="text"
                      value={extraPercentage}
                      onChange={(e) => handleInputChange(setExtraPercentage, e.target.value)}
                      className="w-full text-center text-lg border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-l border-gray-300"
                      onClick={() => handleIncrement(setExtraPercentage, extraPercentage, 5)}
                    >
                      <FaPlus className="text-gray-600" />
                    </button>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setWidth(4.0);
                    setLength(5.0);
                    setTileSize('60x60');
                    setDeductArea(0.5);
                    setExtraPercentage(10);
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
                    {translations.tilesRequired[language]}
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600">
                    {tilesRequired}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{language === 'en' ? 'pieces' : 'แผ่น'}</div>
                </div>
                <div className="border rounded-xl p-4 text-center bg-gradient-to-b from-blue-50 to-blue-100">
                  <div className="text-sm font-medium mb-2 text-gray-600">
                    {translations.adhesiveRequired[language]}
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600">
                    {adhesiveRequired}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">kg</div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                  <p className="text-sm text-blue-600">
                    * {language === 'en' 
                      ? `Includes ${extraPercentage}% extra tiles for cuts and waste` 
                      : `รวมกระเบื้องเพิ่ม ${extraPercentage}% สำหรับการตัดและสูญเสีย`}
                  </p>
                  <p className="text-sm text-blue-600">
                    * {language === 'en'
                      ? 'Adhesive calculation: 5kg per m²'
                      : 'คำนวณกาวยาแนว: 5 กก. ต่อ ตร.ม.'}
                  </p>
                  <p className="text-sm text-blue-600">
                    * {language === 'en'
                      ? `Selected tile size: ${tileSizes[tileSize][language]}`
                      : `ขนาดกระเบื้องที่เลือก: ${tileSizes[tileSize][language]}`}
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

export default TilesCalculator; 