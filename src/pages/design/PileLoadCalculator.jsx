import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, translations } from '../../contexts/LanguageContext';
import { FaArrowLeft, FaCalculator, FaRuler, FaWeightHanging } from 'react-icons/fa';

const PileLoadCalculator = () => {
  const { language } = useLanguage();
  const t = translations.pileLoad;
  const [formData, setFormData] = useState({
    pileDiameter: '',
    pileLength: '',
    soilType: 'clay',
    soilStrength: '',
    pileType: 'concrete',
    axialLoad: '',
    lateralLoad: '',
    momentLoad: '',
    safetyFactor: '2.5',
    groupSpacing: ''
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculatePileLoad = (e) => {
    e.preventDefault();
    const { pileDiameter, pileLength, soilStrength, axialLoad, lateralLoad, momentLoad, safetyFactor, groupSpacing } = formData;
    
    if (pileDiameter && pileLength && soilStrength && axialLoad) {
      // Convert inputs to numbers
      const D = parseFloat(pileDiameter);
      const L = parseFloat(pileLength);
      const qu = parseFloat(soilStrength);
      const P = parseFloat(axialLoad);
      const H = parseFloat(lateralLoad) || 0;
      const M = parseFloat(momentLoad) || 0;
      const SF = parseFloat(safetyFactor);
      const S = parseFloat(groupSpacing) || 0;
      
      // Calculate pile capacity (simplified calculation)
      const pileArea = Math.PI * Math.pow(D/2, 2);
      const skinFriction = 0.7 * qu * Math.PI * D * L;
      const endBearing = 9 * qu * pileArea;
      const totalCapacity = (skinFriction + endBearing) / SF;
      
      // Calculate lateral capacity (simplified)
      const lateralCapacity = 0.1 * qu * D * L;
      
      // Calculate moment capacity (simplified)
      const momentCapacity = 0.15 * qu * D * L * L;
      
      // Calculate group efficiency if spacing is provided
      const groupEfficiency = S > 0 ? 1 - (D / (2 * S)) : 1;
      
      setResult({
        pileCapacity: totalCapacity.toFixed(2),
        lateralCapacity: lateralCapacity.toFixed(2),
        momentCapacity: momentCapacity.toFixed(2),
        groupEfficiency: (groupEfficiency * 100).toFixed(1),
        requiredPiles: Math.ceil(P / totalCapacity)
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
          <form onSubmit={calculatePileLoad} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.pileDiameter[language]}
                </label>
                <input
                  type="number"
                  name="pileDiameter"
                  value={formData.pileDiameter}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.pileLength[language]}
                </label>
                <input
                  type="number"
                  name="pileLength"
                  value={formData.pileLength}
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
                  {t.soilStrength[language]}
                </label>
                <input
                  type="number"
                  name="soilStrength"
                  value={formData.soilStrength}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.pileType[language]}
                </label>
                <select
                  name="pileType"
                  value={formData.pileType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="concrete">{t.pileTypes.concrete[language]}</option>
                  <option value="steel">{t.pileTypes.steel[language]}</option>
                  <option value="timber">{t.pileTypes.timber[language]}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.axialLoad[language]}
                </label>
                <input
                  type="number"
                  name="axialLoad"
                  value={formData.axialLoad}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.lateralLoad[language]}
                </label>
                <input
                  type="number"
                  name="lateralLoad"
                  value={formData.lateralLoad}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.momentLoad[language]}
                </label>
                <input
                  type="number"
                  name="momentLoad"
                  value={formData.momentLoad}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.safetyFactor[language]}
                </label>
                <input
                  type="number"
                  name="safetyFactor"
                  value={formData.safetyFactor}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="2.5"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.groupSpacing[language]}
                </label>
                <input
                  type="number"
                  name="groupSpacing"
                  value={formData.groupSpacing}
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
                  <p className="text-sm text-gray-600">{t.pileCapacity[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.pileCapacity} kN
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.lateralCapacity[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.lateralCapacity} kN
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.momentCapacity[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.momentCapacity} kN⋅m
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.groupEfficiency[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.groupEfficiency}%
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.requiredPiles[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.requiredPiles} {t.piles[language]}
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

export default PileLoadCalculator; 