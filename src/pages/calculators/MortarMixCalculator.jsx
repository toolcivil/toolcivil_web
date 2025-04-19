import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';

// Add translations
const translations = {
  title: {
    en: 'Calculate Mortar Mix',
    th: 'คำนวณส่วนผสมปูนก่อ'
  },
  subtitle: {
    en: 'Calculate mortar mix proportions with accurate results',
    th: 'คำนวณสัดส่วนส่วนผสมปูนก่อ พร้อมผลลัพธ์ที่แม่นยำ'
  },
  specifications: {
    en: 'Mix Specifications',
    th: 'ข้อมูลจำเพาะของส่วนผสม'
  },
  calculate: {
    en: 'Calculate Mix',
    th: 'คำนวณส่วนผสม'
  },
  dimensions: {
    en: 'Dimensions',
    th: 'ขนาด'
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
    en: 'Thickness',
    th: 'ความหนา'
  },
  mixRatio: {
    en: 'Mix Ratio',
    th: 'อัตราส่วนผสม'
  },
  mixType: {
    en: 'Mix Type',
    th: 'ประเภทส่วนผสม'
  },
  cement: {
    en: 'Cement',
    th: 'ปูนซีเมนต์'
  },
  sand: {
    en: 'Sand',
    th: 'ทราย'
  },
  aggregate: {
    en: 'Aggregate',
    th: 'หิน'
  },
  results: {
    en: 'Material Requirements',
    th: 'ปริมาณวัสดุที่ต้องใช้'
  },
  volume: {
    en: 'Total Volume',
    th: 'ปริมาตรรวม'
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

// Standard mix ratios
const mixRatios = {
  'standard': {
    en: '1:2:4 - Standard Structural (Columns, Beams)',
    th: '1:2:4 - โครงสร้างทั่วไป (เสา, คาน)',
    ratio: { cement: 1, sand: 2, aggregate: 4 },
    description: {
      en: 'Suitable for general structural concrete requiring high strength',
      th: 'เหมาะสำหรับงานโครงสร้างคอนกรีตทั่วไปที่ต้องการความแข็งแรงมาก'
    }
  },
  'lean': {
    en: '1:3:5 - Lean Concrete',
    th: '1:3:5 - คอนกรีตหยาบ',
    ratio: { cement: 1, sand: 3, aggregate: 5 },
    description: {
      en: 'Suitable for leveling or low-strength applications',
      th: 'เหมาะสำหรับเทคอนกรีตหยาบ ใช้ปรับระดับความสูงต่ำ'
    }
  },
  'road': {
    en: '1:1.5:3 - High Strength (Roads)',
    th: '1:1.5:3 - กำลังสูง (ถนน)',
    ratio: { cement: 1, sand: 1.5, aggregate: 3 },
    description: {
      en: 'Suitable for roads and high-load structures',
      th: 'เหมาะสำหรับงานถนน และโครงสร้างที่ต้องการความแข็งแรงมาก'
    }
  },
  'highrise': {
    en: '1:1.5:2 - High Rise Buildings',
    th: '1:1.5:2 - อาคารสูง',
    ratio: { cement: 1, sand: 1.5, aggregate: 2 },
    description: {
      en: 'Suitable for high-rise buildings requiring durability',
      th: 'เหมาะกับงานโครงสร้างที่ต้องการความแข็งแรงและความทนทาน เช่น คอนโด'
    }
  }
};

const MortarMixCalculator = () => {
  const { language } = useLanguage();
  
  // State for dimensions
  const [width, setWidth] = useState(3.0);
  const [length, setLength] = useState(4.0);
  const [height, setHeight] = useState(0.15);
  const [mixType, setMixType] = useState('standard');
  
  // State for results
  const [volume, setVolume] = useState(0);
  const [cementRequired, setCementRequired] = useState(0);
  const [sandRequired, setSandRequired] = useState(0);
  const [aggregateRequired, setAggregateRequired] = useState(0);
  const [cementBags, setCementBags] = useState(0);
  const [sandCubic, setSandCubic] = useState(0);
  const [aggregateCubic, setAggregateCubic] = useState(0);

  // Calculate quantities when dimensions or mix type changes
  useEffect(() => {
    // Calculate volume
    const calculatedVolume = width * length * height;
    
    // Get selected ratio
    const { ratio } = mixRatios[mixType];
    const totalParts = ratio.cement + ratio.sand + ratio.aggregate;
    
    // Calculate dry volume (add 54% for voids)
    const dryVolume = calculatedVolume * 1.54;
    
    // Calculate individual volumes based on ratio
    const cementVolume = (ratio.cement / totalParts) * dryVolume;
    const sandVolume = (ratio.sand / totalParts) * dryVolume;
    const aggregateVolume = (ratio.aggregate / totalParts) * dryVolume;
    
    // Convert to kg (using density)
    const cementKg = cementVolume * 1400; // 1400 kg/m³
    const sandKg = sandVolume * 1450; // 1450 kg/m³
    const aggregateKg = aggregateVolume * 1450; // 1450 kg/m³
    
    // Convert to practical units
    const cementBagsCount = Math.ceil(cementKg / 50); // 50kg per bag
    const sandCubicMeters = Math.ceil(sandKg / 15) / 100; // Convert to m³
    const aggregateCubicMeters = Math.ceil(aggregateKg / 18) / 100; // Convert to m³
    
    setVolume(calculatedVolume.toFixed(3));
    setCementRequired(cementKg.toFixed(0));
    setSandRequired(sandKg.toFixed(0));
    setAggregateRequired(aggregateKg.toFixed(0));
    setCementBags(cementBagsCount);
    setSandCubic(sandCubicMeters.toFixed(2));
    setAggregateCubic(aggregateCubicMeters.toFixed(2));
  }, [width, length, height, mixType]);

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
                {/* Dimensions Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-700">
                    {translations.dimensions[language]}
                  </h3>
                  
                  {/* Width Input */}
                  <div className="input-group mb-4">
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
                  <div className="input-group mb-4">
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

                  {/* Height/Thickness Input */}
                  <div className="input-group">
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                      {translations.height[language]} (meter)
                    </label>
                    <div className="flex h-12 shadow-sm rounded-md overflow-hidden">
                      <button 
                        className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-r border-gray-300"
                        onClick={() => handleDecrement(setHeight, height, 0.01)}
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
                        onClick={() => handleIncrement(setHeight, height, 0.01)}
                      >
                        <FaPlus className="text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Mix Type Selection */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-700">
                    {translations.mixType[language]}
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(mixRatios).map(([key, data]) => (
                      <div
                        key={key}
                        className={`p-4 rounded-lg cursor-pointer transition-all ${
                          mixType === key 
                            ? 'bg-blue-50 border-2 border-blue-500' 
                            : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                        }`}
                        onClick={() => setMixType(key)}
                      >
                        <div className="font-medium text-gray-800">{data[language]}</div>
                        <div className="text-sm text-gray-600 mt-1">{data.description[language]}</div>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="bg-blue-100 px-3 py-1 rounded-full text-sm">
                            {translations.cement[language]}: {data.ratio.cement}
                          </div>
                          <div className="bg-yellow-100 px-3 py-1 rounded-full text-sm">
                            {translations.sand[language]}: {data.ratio.sand}
                          </div>
                          <div className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                            {translations.aggregate[language]}: {data.ratio.aggregate}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setWidth(3.0);
                    setLength(4.0);
                    setHeight(0.15);
                    setMixType('standard');
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

              {/* Volume Result */}
              <div className="mb-6">
                <div className="border rounded-xl p-4 bg-gradient-to-b from-gray-50 to-gray-100">
                  <div className="text-sm font-medium mb-2 text-gray-600">
                    {translations.volume[language]}
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-gray-800">
                    {volume}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">m³</div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {/* Cement Results */}
                <div className="border rounded-xl p-4 bg-gradient-to-b from-blue-50 to-blue-100">
                  <div className="text-sm font-medium mb-2 text-gray-600">
                    {translations.cement[language]}
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-3xl sm:text-4xl font-bold text-blue-600">
                        {cementRequired}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">kg</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        {cementBags}
                      </div>
                      <div className="text-sm text-gray-500">{language === 'en' ? 'bags' : 'ถุง'}</div>
                    </div>
                  </div>
                </div>

                {/* Sand Results */}
                <div className="border rounded-xl p-4 bg-gradient-to-b from-yellow-50 to-yellow-100">
                  <div className="text-sm font-medium mb-2 text-gray-600">
                    {translations.sand[language]}
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-3xl sm:text-4xl font-bold text-yellow-600">
                        {sandRequired}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">kg</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-yellow-600">
                        {sandCubic}
                      </div>
                      <div className="text-sm text-gray-500">m³</div>
                    </div>
                  </div>
                </div>

                {/* Aggregate Results */}
                <div className="border rounded-xl p-4 bg-gradient-to-b from-gray-50 to-gray-100">
                  <div className="text-sm font-medium mb-2 text-gray-600">
                    {translations.aggregate[language]}
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-3xl sm:text-4xl font-bold text-gray-600">
                        {aggregateRequired}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">kg</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-600">
                        {aggregateCubic}
                      </div>
                      <div className="text-sm text-gray-500">m³</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                  <p className="text-sm text-blue-600">
                    * {language === 'en'
                      ? 'Includes 54% extra volume for voids'
                      : 'รวมปริมาตรเพิ่ม 54% สำหรับช่องว่าง'}
                  </p>
                  <p className="text-sm text-blue-600">
                    * {language === 'en'
                      ? 'Cement: 50kg per bag'
                      : 'ปูนซีเมนต์: 50 กก. ต่อถุง'}
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

export default MortarMixCalculator; 