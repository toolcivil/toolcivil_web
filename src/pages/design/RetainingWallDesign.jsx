import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, translations } from '../../contexts/LanguageContext';
import { FaArrowLeft, FaCalculator, FaRuler, FaWeightHanging } from 'react-icons/fa';

const RetainingWallDesign = () => {
  const { language } = useLanguage();
  const t = translations.retainingWall;
  const [formData, setFormData] = useState({
    wallHeight: '',
    wallThickness: '',
    soilType: 'clay',
    soilDensity: '',
    soilAngle: '',
    surchargeLoad: '',
    concreteGrade: '25',
    steelGrade: '400',
    cover: '50'
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateWall = (e) => {
    e.preventDefault();
    const { wallHeight, wallThickness, soilDensity, soilAngle, surchargeLoad } = formData;
    
    if (wallHeight && wallThickness && soilDensity && soilAngle) {
      // Convert inputs to numbers
      const H = parseFloat(wallHeight);
      const t = parseFloat(wallThickness);
      const γ = parseFloat(soilDensity);
      const φ = parseFloat(soilAngle);
      const q = parseFloat(surchargeLoad) || 0;
      
      // Calculate active earth pressure coefficient
      const Ka = Math.pow(Math.tan((45 - φ/2) * Math.PI/180), 2);
      
      // Calculate total active earth pressure
      const Pa = 0.5 * γ * H * H * Ka + q * H * Ka;
      
      // Calculate wall weight
      const wallWeight = 24 * t * H; // Assuming concrete density of 24 kN/m³
      
      // Calculate required steel area (simplified)
      const steelArea = 0.002 * t * 1000; // 0.2% of wall thickness
      
      // Calculate required number of bars
      const barDiameter = 16; // Assuming 16mm bars
      const barArea = Math.PI * Math.pow(barDiameter/2, 2);
      const requiredBars = Math.ceil(steelArea / barArea);
      
      // Calculate bar spacing
      const spacing = Math.floor(1000 / requiredBars);
      
      setResult({
        activePressure: Pa.toFixed(2),
        wallWeight: wallWeight.toFixed(2),
        steelArea: steelArea.toFixed(2),
        requiredBars: requiredBars,
        barSpacing: spacing
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t.title[language]}
          </h1>
          <p className="text-lg text-gray-600">
            {t.description[language]}
          </p>
        </div>

        {/* Calculator Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={calculateWall} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.wallHeight[language]}
                </label>
                <input
                  type="number"
                  name="wallHeight"
                  value={formData.wallHeight}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.wallThickness[language]}
                </label>
                <input
                  type="number"
                  name="wallThickness"
                  value={formData.wallThickness}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.soilType[language]}
                </label>
                <select
                  name="soilType"
                  value={formData.soilType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="clay">{t.soilTypes.clay[language]}</option>
                  <option value="sand">{t.soilTypes.sand[language]}</option>
                  <option value="silt">{t.soilTypes.silt[language]}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.soilDensity[language]}
                </label>
                <input
                  type="number"
                  name="soilDensity"
                  value={formData.soilDensity}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.soilAngle[language]}
                </label>
                <input
                  type="number"
                  name="soilAngle"
                  value={formData.soilAngle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.surchargeLoad[language]}
                </label>
                <input
                  type="number"
                  name="surchargeLoad"
                  value={formData.surchargeLoad}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.concreteGrade[language]}
                </label>
                <select
                  name="concreteGrade"
                  value={formData.concreteGrade}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="20">C20</option>
                  <option value="25">C25</option>
                  <option value="30">C30</option>
                  <option value="35">C35</option>
                  <option value="40">C40</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.steelGrade[language]}
                </label>
                <select
                  name="steelGrade"
                  value={formData.steelGrade}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="400">SD40</option>
                  <option value="500">SD50</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.cover[language]}
                </label>
                <input
                  type="number"
                  name="cover"
                  value={formData.cover}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="50"
                  step="5"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <FaCalculator />
              {t.calculate[language]}
            </button>
          </form>

          {/* Results */}
          {result && (
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t.results[language]}
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">{t.activePressure[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.activePressure} kN/m
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.wallWeight[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.wallWeight} kN/m
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.steelArea[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.steelArea} mm²/m
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.requiredBars[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.requiredBars} {t.bars[language]}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.barSpacing[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.barSpacing} mm
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link
            to="/engineering-tools?tab=design"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FaArrowLeft />
            {t.backToTools[language]}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RetainingWallDesign; 