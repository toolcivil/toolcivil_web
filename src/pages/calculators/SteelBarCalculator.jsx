import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus, FaCalculator } from 'react-icons/fa';
import { useLanguage, translations } from '../../contexts/LanguageContext';

const SteelBarCalculator = () => {
  const { language } = useLanguage();
  
  // State for active tab
  const [activeTab, setActiveTab] = useState('deformed');
  
  // State for selected bar properties
  const [barType, setBarType] = useState('SD-30');
  const [barSize, setBarSize] = useState('DB 10');
  const [barLength, setBarLength] = useState(10); // in meters
  const [barQuantity, setBarQuantity] = useState(10); // number of bars
  
  // State for calculation results
  const [totalWeight, setTotalWeight] = useState(0);
  const [weightPerMeter, setWeightPerMeter] = useState(0);
  
  // Get weight per meter based on selected bar type and size
  useEffect(() => {
    let weight = 0;
    
    if (activeTab === 'deformed') {
      // Find weight for deformed bars
      if (barType === 'SD-30') {
        switch (barSize) {
          case 'DB 10': weight = 0.617; break;
          case 'DB 12': weight = 0.888; break;
          case 'DB 16': weight = 1.578; break;
          case 'DB 20': weight = 2.466; break;
          case 'DB 25': weight = 3.853; break;
          case 'DB 28': weight = 4.834; break;
          default: weight = 0.617;
        }
      } else if (barType === 'SD-40') {
        switch (barSize) {
          case 'DB 10': weight = 0.616; break;
          case 'DB 12': weight = 0.888; break;
          case 'DB 16': weight = 1.578; break;
          case 'DB 20': weight = 2.466; break;
          case 'DB 25': weight = 3.853; break;
          case 'DB 28': weight = 4.834; break;
          case 'DB 32': weight = 6.313; break;
          default: weight = 0.616;
        }
      }
    } else {
      // Find weight for round bars
      switch (barSize) {
        case '6.0': weight = 0.222; break;
        case '9.0': weight = 0.499; break;
        case '12.0': weight = 0.888; break;
        case '15.0': weight = 1.387; break;
        case '19.0': weight = 2.226; break;
        case '25.0': weight = 3.853; break;
        default: weight = 0.222;
      }
    }
    
    setWeightPerMeter(weight);
    setTotalWeight((weight * barLength * barQuantity).toFixed(2));
  }, [activeTab, barType, barSize, barLength, barQuantity]);

  // Handle increment/decrement
  const handleIncrement = (setter, value, current) => {
    setter(current + value);
  };

  const handleDecrement = (setter, value, current, min = 1) => {
    if (current > min) {
      setter(current - value);
    }
  };

  return (
    <div className="min-h-screen bg-blue-500 text-white">
      <div className="container mx-auto px-4 py-6 md:py-12">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {language === 'en' ? 'Steel Bar Calculator' : 'เครื่องคำนวณเหล็กเส้น'}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            {language === 'en' 
              ? 'Calculate the weight and quantity of steel bars for your construction project' 
              : 'คำนวณน้ำหนักและปริมาณเหล็กเส้นสำหรับโครงการก่อสร้างของคุณ'}
          </p>
        </div>

        {/* Tabs Section */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-md px-2">
            <TabButton 
              active={activeTab === 'deformed'} 
              onClick={() => {
                setActiveTab('deformed');
                setBarType('SD-30');
                setBarSize('DB 10');
              }}
              icon={<FaCalculator className="text-xl sm:text-2xl" />}
              label={language === 'en' ? 'Deformed Bars' : 'เหล็กข้ออ้อย'}
            />
            <TabButton 
              active={activeTab === 'round'} 
              onClick={() => {
                setActiveTab('round');
                setBarSize('6.0');
              }}
              icon={<FaCalculator className="text-xl sm:text-2xl" />}
              label={language === 'en' ? 'Round Bars' : 'เหล็กเส้นกลม'}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 max-w-7xl mx-auto">
          {/* Steel Bar Data Table */}
          <div className="lg:w-3/5">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-gray-800 overflow-x-auto">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 text-blue-600 border-b pb-4">
                {activeTab === 'deformed' 
                  ? (language === 'en' ? 'Deformed Bars' : 'เหล็กข้ออ้อย (Deformed Bars)') 
                  : (language === 'en' ? 'Round Bars' : 'เหล็กเส้นกลม (Round Bars)')}
              </h2>
              
              <div className="overflow-x-auto">
                {activeTab === 'deformed' ? (
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-4 py-2 text-left">{language === 'en' ? 'Quality' : 'ชั้นคุณภาพ'}</th>
                        <th className="border px-4 py-2 text-left">{language === 'en' ? 'Size' : 'ขนาด'}</th>
                        <th className="border px-4 py-2 text-left">{language === 'en' ? 'Diameter (mm.)' : 'วงนอก (mm.)'}</th>
                        <th className="border px-4 py-2 text-center" colSpan="3">{language === 'en' ? 'Weight (kg.)' : 'น้ำหนัก (kg.)'}</th>
                      </tr>
                      <tr className="bg-gray-50">
                        <th className="border px-4 py-2"></th>
                        <th className="border px-4 py-2"></th>
                        <th className="border px-4 py-2"></th>
                        <th className="border px-4 py-2 text-center">1 m.</th>
                        <th className="border px-4 py-2 text-center">10 m.</th>
                        <th className="border px-4 py-2 text-center">12 m.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* SD-30 Rows */}
                      <tr>
                        <td className="border px-4 py-2 font-medium" rowSpan="6">SD-30</td>
                        <td className="border px-4 py-2">DB 10</td>
                        <td className="border px-4 py-2">10.0</td>
                        <td className="border px-4 py-2 text-center">0.617</td>
                        <td className="border px-4 py-2 text-center">6.17</td>
                        <td className="border px-4 py-2 text-center">7.404</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">DB 12</td>
                        <td className="border px-4 py-2">12.0</td>
                        <td className="border px-4 py-2 text-center">0.888</td>
                        <td className="border px-4 py-2 text-center">8.88</td>
                        <td className="border px-4 py-2 text-center">10.656</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">DB 16</td>
                        <td className="border px-4 py-2">16.0</td>
                        <td className="border px-4 py-2 text-center">1.578</td>
                        <td className="border px-4 py-2 text-center">15.78</td>
                        <td className="border px-4 py-2 text-center">18.936</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">DB 20</td>
                        <td className="border px-4 py-2">20.0</td>
                        <td className="border px-4 py-2 text-center">2.466</td>
                        <td className="border px-4 py-2 text-center">24.66</td>
                        <td className="border px-4 py-2 text-center">29.592</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">DB 25</td>
                        <td className="border px-4 py-2">25.0</td>
                        <td className="border px-4 py-2 text-center">3.853</td>
                        <td className="border px-4 py-2 text-center">38.53</td>
                        <td className="border px-4 py-2 text-center">46.236</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">DB 28</td>
                        <td className="border px-4 py-2">28.0</td>
                        <td className="border px-4 py-2 text-center">4.834</td>
                        <td className="border px-4 py-2 text-center">48.34</td>
                        <td className="border px-4 py-2 text-center">58.008</td>
                      </tr>
                      
                      {/* SD-40 Rows */}
                      <tr>
                        <td className="border px-4 py-2 font-medium" rowSpan="7">SD-40</td>
                        <td className="border px-4 py-2">DB 10</td>
                        <td className="border px-4 py-2">10.0</td>
                        <td className="border px-4 py-2 text-center">0.616</td>
                        <td className="border px-4 py-2 text-center">6.16</td>
                        <td className="border px-4 py-2 text-center">7.404</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">DB 12</td>
                        <td className="border px-4 py-2">12.0</td>
                        <td className="border px-4 py-2 text-center">0.888</td>
                        <td className="border px-4 py-2 text-center">8.88</td>
                        <td className="border px-4 py-2 text-center">10.656</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">DB 16</td>
                        <td className="border px-4 py-2">16.0</td>
                        <td className="border px-4 py-2 text-center">1.578</td>
                        <td className="border px-4 py-2 text-center">15.78</td>
                        <td className="border px-4 py-2 text-center">18.936</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">DB 20</td>
                        <td className="border px-4 py-2">20.2</td>
                        <td className="border px-4 py-2 text-center">2.466</td>
                        <td className="border px-4 py-2 text-center">24.66</td>
                        <td className="border px-4 py-2 text-center">29.592</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">DB 25</td>
                        <td className="border px-4 py-2">25.0</td>
                        <td className="border px-4 py-2 text-center">3.853</td>
                        <td className="border px-4 py-2 text-center">38.53</td>
                        <td className="border px-4 py-2 text-center">46.236</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">DB 28</td>
                        <td className="border px-4 py-2">28.0</td>
                        <td className="border px-4 py-2 text-center">4.834</td>
                        <td className="border px-4 py-2 text-center">48.34</td>
                        <td className="border px-4 py-2 text-center">58.008</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">DB 32</td>
                        <td className="border px-4 py-2">32.0</td>
                        <td className="border px-4 py-2 text-center">6.313</td>
                        <td className="border px-4 py-2 text-center">63.13</td>
                        <td className="border px-4 py-2 text-center">75.756</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-4 py-2 text-left">{language === 'en' ? 'Grade' : 'เกรด'}</th>
                        <th className="border px-4 py-2 text-left">{language === 'en' ? 'Size (mm.)' : 'ขนาด (mm.)'}</th>
                        <th className="border px-4 py-2 text-center" colSpan="3">{language === 'en' ? 'Weight (kg.)' : 'น้ำหนัก (kg.)'}</th>
                      </tr>
                      <tr className="bg-gray-50">
                        <th className="border px-4 py-2"></th>
                        <th className="border px-4 py-2"></th>
                        <th className="border px-4 py-2 text-center">1 m.</th>
                        <th className="border px-4 py-2 text-center">10 m.</th>
                        <th className="border px-4 py-2 text-center">12 m.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Round Bar Rows */}
                      <tr>
                        <td className="border px-4 py-2 font-medium" rowSpan="6">
                          {language === 'en' ? 'Round Bar SR24' : 'เหล็กเส้นกลม SR24'}
                        </td>
                        <td className="border px-4 py-2">6.0</td>
                        <td className="border px-4 py-2 text-center">0.222</td>
                        <td className="border px-4 py-2 text-center">2.22</td>
                        <td className="border px-4 py-2 text-center">2.66</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">9.0</td>
                        <td className="border px-4 py-2 text-center">0.499</td>
                        <td className="border px-4 py-2 text-center">4.99</td>
                        <td className="border px-4 py-2 text-center">5.99</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">12.0</td>
                        <td className="border px-4 py-2 text-center">0.888</td>
                        <td className="border px-4 py-2 text-center">8.88</td>
                        <td className="border px-4 py-2 text-center">10.66</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">15.0</td>
                        <td className="border px-4 py-2 text-center">1.387</td>
                        <td className="border px-4 py-2 text-center">13.87</td>
                        <td className="border px-4 py-2 text-center">16.64</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">19.0</td>
                        <td className="border px-4 py-2 text-center">2.226</td>
                        <td className="border px-4 py-2 text-center">22.26</td>
                        <td className="border px-4 py-2 text-center">26.71</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">25.0</td>
                        <td className="border px-4 py-2 text-center">3.853</td>
                        <td className="border px-4 py-2 text-center">38.53</td>
                        <td className="border px-4 py-2 text-center">46.24</td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>

          {/* Calculator Form */}
          <div className="lg:w-2/5">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 text-gray-800">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 text-blue-600 border-b pb-4">
                {language === 'en' ? 'Calculate Steel Bar Weight' : 'คำนวณน้ำหนักเหล็กเส้น'}
              </h2>

              <div className="space-y-6">
                {/* Bar Type Selection */}
                {activeTab === 'deformed' && (
                  <div className="form-group">
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                      {language === 'en' ? 'Steel Quality' : 'ชั้นคุณภาพเหล็ก'}
                    </label>
                    <select 
                      value={barType}
                      onChange={(e) => setBarType(e.target.value)}
                      className="w-full p-3 border rounded-lg text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                    >
                      <option value="SD-30">SD-30</option>
                      <option value="SD-40">SD-40</option>
                    </select>
                  </div>
                )}

                {/* Bar Size Selection */}
                <div className="form-group">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    {language === 'en' ? 'Bar Size' : 'ขนาดเหล็ก'}
                  </label>
                  <select 
                    value={barSize}
                    onChange={(e) => setBarSize(e.target.value)}
                    className="w-full p-3 border rounded-lg text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                  >
                    {activeTab === 'deformed' ? (
                      barType === 'SD-30' ? (
                        <>
                          <option value="DB 10">DB 10</option>
                          <option value="DB 12">DB 12</option>
                          <option value="DB 16">DB 16</option>
                          <option value="DB 20">DB 20</option>
                          <option value="DB 25">DB 25</option>
                          <option value="DB 28">DB 28</option>
                        </>
                      ) : (
                        <>
                          <option value="DB 10">DB 10</option>
                          <option value="DB 12">DB 12</option>
                          <option value="DB 16">DB 16</option>
                          <option value="DB 20">DB 20</option>
                          <option value="DB 25">DB 25</option>
                          <option value="DB 28">DB 28</option>
                          <option value="DB 32">DB 32</option>
                        </>
                      )
                    ) : (
                      <>
                        <option value="6.0">6.0 mm</option>
                        <option value="9.0">9.0 mm</option>
                        <option value="12.0">12.0 mm</option>
                        <option value="15.0">15.0 mm</option>
                        <option value="19.0">19.0 mm</option>
                        <option value="25.0">25.0 mm</option>
                      </>
                    )}
                  </select>
                </div>

                {/* Bar Length Input */}
                <div className="form-group">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    {language === 'en' ? 'Length per Bar (meters)' : 'ความยาวต่อเส้น (เมตร)'}
                  </label>
                  <div className="flex h-12 shadow-sm rounded-lg overflow-hidden">
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-r border-gray-300"
                      onClick={() => handleDecrement(setBarLength, 1, barLength)}
                    >
                      <FaMinus className="text-gray-600" />
                    </button>
                    <input
                      type="number"
                      value={barLength}
                      onChange={(e) => setBarLength(parseInt(e.target.value) || 1)}
                      className="w-full text-center text-lg border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      min="1"
                    />
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-l border-gray-300"
                      onClick={() => handleIncrement(setBarLength, 1, barLength)}
                    >
                      <FaPlus className="text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Bar Quantity Input */}
                <div className="form-group">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    {language === 'en' ? 'Number of Bars' : 'จำนวนเส้น'}
                  </label>
                  <div className="flex h-12 shadow-sm rounded-lg overflow-hidden">
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-r border-gray-300"
                      onClick={() => handleDecrement(setBarQuantity, 1, barQuantity)}
                    >
                      <FaMinus className="text-gray-600" />
                    </button>
                    <input
                      type="number"
                      value={barQuantity}
                      onChange={(e) => setBarQuantity(parseInt(e.target.value) || 1)}
                      className="w-full text-center text-lg border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      min="1"
                    />
                    <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-l border-gray-300"
                      onClick={() => handleIncrement(setBarQuantity, 1, barQuantity)}
                    >
                      <FaPlus className="text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Results Section */}
                <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl p-6 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-sm text-gray-600 mb-1">
                        {language === 'en' ? 'Weight per meter' : 'น้ำหนักต่อเมตร'}
                      </p>
                      <p className="text-xl sm:text-2xl font-bold text-blue-600">
                        {weightPerMeter} kg/m
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-sm text-gray-600 mb-1">
                        {language === 'en' ? 'Total length' : 'ความยาวรวม'}
                      </p>
                      <p className="text-xl sm:text-2xl font-bold text-blue-600">
                        {barLength * barQuantity} m
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">
                      {language === 'en' ? 'Total Weight' : 'น้ำหนักรวม'}
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-blue-700">
                      {totalWeight} kg
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    if (activeTab === 'deformed') {
                      setBarType('SD-30');
                      setBarSize('DB 10');
                    } else {
                      setBarSize('6.0');
                    }
                    setBarLength(10);
                    setBarQuantity(10);
                  }}
                  className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-all transform hover:scale-[1.02] active:scale-[0.98] text-lg font-medium shadow-md"
                >
                  {language === 'en' ? 'Reset Calculator' : 'รีเซ็ตเครื่องคำนวณ'}
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
const TabButton = ({ active, onClick, icon, label }) => {
  return (
    <button
      className={`rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] p-3 sm:p-4 ${
        active 
          ? 'bg-white text-blue-600 shadow-lg' 
          : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}
      onClick={onClick}
    >
      <div className="text-center">
        <span className="block mb-2">{icon}</span>
        <span className="block text-sm sm:text-base font-medium">{label}</span>
      </div>
    </button>
  );
};

export default SteelBarCalculator;
