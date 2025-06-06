import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, translations } from '../../contexts/LanguageContext';
import { FaArrowLeft, FaCalculator, FaRuler, FaWeightHanging } from 'react-icons/fa';

const SheetPileDesign = () => {
  const { language } = useLanguage();
  const t = translations.sheetPile;
  const [formData, setFormData] = useState({
    excavationDepth: '',
    waterLevel: '',
    soilType: 'clay',
    soilDensity: '',
    soilAngle: '',
    surchargeLoad: '',
    sheetPileType: 'steel',
    steelGrade: '400',
    embedmentDepth: ''
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateSheetPile = (e) => {
    e.preventDefault();
    const { excavationDepth, waterLevel, soilDensity, soilAngle, surchargeLoad, embedmentDepth } = formData;
    
    if (excavationDepth && soilDensity && soilAngle && embedmentDepth) {
      // Convert inputs to numbers
      const H = parseFloat(excavationDepth);
      const D = parseFloat(embedmentDepth);
      const γ = parseFloat(soilDensity);
      const φ = parseFloat(soilAngle);
      const q = parseFloat(surchargeLoad) || 0;
      const hw = parseFloat(waterLevel) || 0;
      
      // Calculate active earth pressure coefficient
      const Ka = Math.pow(Math.tan((45 - φ/2) * Math.PI/180), 2);
      
      // Calculate total active earth pressure
      const Pa = 0.5 * γ * H * H * Ka + q * H * Ka;
      
      // Calculate water pressure if water level is present
      const Pw = hw > 0 ? 9.81 * hw * hw / 2 : 0;
      
      // Calculate required embedment depth (simplified)
      const requiredDepth = H * 1.5; // Typical factor of safety
      
      // Calculate required section modulus (simplified)
      const sectionModulus = Pa * H * H / (0.6 * 400); // Assuming steel grade 400
      
      // Calculate required steel area (simplified)
      const steelArea = sectionModulus / 100; // Simplified conversion
      
      setResult({
        activePressure: Pa.toFixed(2),
        waterPressure: Pw.toFixed(2),
        totalPressure: (Pa + Pw).toFixed(2),
        requiredDepth: requiredDepth.toFixed(2),
        sectionModulus: sectionModulus.toFixed(2),
        steelArea: steelArea.toFixed(2)
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
          <form onSubmit={calculateSheetPile} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.excavationDepth[language]}
                </label>
                <input
                  type="number"
                  name="excavationDepth"
                  value={formData.excavationDepth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.waterLevel[language]}
                </label>
                <input
                  type="number"
                  name="waterLevel"
                  value={formData.waterLevel}
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
                  {t.sheetPileType[language]}
                </label>
                <select
                  name="sheetPileType"
                  value={formData.sheetPileType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="steel">{t.pileTypes.steel[language]}</option>
                  <option value="vinyl">{t.pileTypes.vinyl[language]}</option>
                  <option value="composite">{t.pileTypes.composite[language]}</option>
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
                  {t.embedmentDepth[language]}
                </label>
                <input
                  type="number"
                  name="embedmentDepth"
                  value={formData.embedmentDepth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.1"
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
                  <p className="text-sm text-gray-600">{t.waterPressure[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.waterPressure} kN/m
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.totalPressure[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.totalPressure} kN/m
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.requiredDepth[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.requiredDepth} m
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.sectionModulus[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.sectionModulus} cm³/m
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.steelArea[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.steelArea} cm²/m
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

export default SheetPileDesign; 