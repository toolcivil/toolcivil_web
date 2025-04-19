import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, translations } from '../../contexts/LanguageContext';
import { FaArrowLeft, FaCalculator, FaRuler, FaWeightHanging } from 'react-icons/fa';

const SlabDesignCalculator = () => {
  const { language } = useLanguage();
  const t = translations.slabDesign;
  const [formData, setFormData] = useState({
    slabLength: '',
    slabWidth: '',
    slabThickness: '',
    concreteGrade: '25',
    steelGrade: 'SD40',
    liveLoad: '',
    deadLoad: '',
    supportCondition: 'fourSides',
    cover: '25'
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateSlabDesign = (e) => {
    e.preventDefault();
    const { slabLength, slabWidth, slabThickness, liveLoad, deadLoad, supportCondition } = formData;
    
    if (slabLength && slabWidth && slabThickness && liveLoad && deadLoad) {
      // Convert inputs to numbers
      const L = parseFloat(slabLength);
      const W = parseFloat(slabWidth);
      const t = parseFloat(slabThickness);
      const LL = parseFloat(liveLoad);
      const DL = parseFloat(deadLoad);
      
      // Calculate total load
      const totalLoad = LL + DL;
      
      // Calculate moment (simplified calculation)
      const moment = (totalLoad * L * W * W) / 8;
      
      // Calculate required steel area (simplified calculation)
      const fc = 25; // Concrete strength in MPa
      const fy = 400; // Steel yield strength in MPa
      const d = t - 25; // Effective depth (assuming 25mm cover)
      const As = (moment * 1000000) / (0.9 * fy * d);
      
      // Calculate minimum steel area
      const minAs = 0.002 * 1000 * t;
      
      // Use the larger of required and minimum steel area
      const finalAs = Math.max(As, minAs);
      
      // Calculate bar spacing (assuming 10mm bars)
      const barArea = Math.PI * Math.pow(10/2, 2);
      const spacing = (1000 * barArea) / finalAs;
      
      setResult({
        totalLoad: totalLoad.toFixed(2),
        moment: moment.toFixed(2),
        steelArea: finalAs.toFixed(2),
        requiredBars: Math.ceil(finalAs / barArea),
        barSpacing: spacing.toFixed(0),
        deflection: (5 * totalLoad * Math.pow(L, 4)) / (384 * 30000 * (1000 * Math.pow(t, 3)) / 12)
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
          <form onSubmit={calculateSlabDesign} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.slabLength[language]}
                </label>
                <input
                  type="number"
                  name="slabLength"
                  value={formData.slabLength}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.slabWidth[language]}
                </label>
                <input
                  type="number"
                  name="slabWidth"
                  value={formData.slabWidth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.slabThickness[language]}
                </label>
                <input
                  type="number"
                  name="slabThickness"
                  value={formData.slabThickness}
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
                  <option value="25">25 MPa</option>
                  <option value="30">30 MPa</option>
                  <option value="35">35 MPa</option>
                  <option value="40">40 MPa</option>
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
                  <option value="SD40">SD40</option>
                  <option value="SD50">SD50</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.liveLoad[language]}
                </label>
                <input
                  type="number"
                  name="liveLoad"
                  value={formData.liveLoad}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.01"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.deadLoad[language]}
                </label>
                <input
                  type="number"
                  name="deadLoad"
                  value={formData.deadLoad}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.01"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.supportCondition[language]}
                </label>
                <select
                  name="supportCondition"
                  value={formData.supportCondition}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="fourSides">{t.supportTypes.fourSides[language]}</option>
                  <option value="twoSides">{t.supportTypes.twoSides[language]}</option>
                  <option value="cantilever">{t.supportTypes.cantilever[language]}</option>
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
                  placeholder="25"
                  step="1"
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
                  <p className="text-sm text-gray-600">{t.totalLoad[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.totalLoad} kN/m²
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.moment[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.moment} kN⋅m
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
                    {result.requiredBars} x Ø10mm
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.barSpacing[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.barSpacing} mm
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.deflection[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.deflection.toFixed(2)} mm
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

export default SlabDesignCalculator; 