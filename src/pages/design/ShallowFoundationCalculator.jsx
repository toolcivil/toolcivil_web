import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, translations } from '../../contexts/LanguageContext';
import { FaArrowLeft, FaCalculator, FaRuler, FaWeightHanging } from 'react-icons/fa';

const ShallowFoundationCalculator = () => {
  const { language } = useLanguage();
  const t = translations.shallowFoundation;
  const [formData, setFormData] = useState({
    columnWidth: '',
    columnDepth: '',
    axialLoad: '',
    momentX: '',
    momentY: '',
    soilBearingCapacity: '',
    concreteGrade: '25',
    steelGrade: 'SD40',
    foundationDepth: '',
    cover: '75'
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateFoundation = (e) => {
    e.preventDefault();
    const { columnWidth, columnDepth, axialLoad, momentX, momentY, soilBearingCapacity, foundationDepth } = formData;
    
    if (columnWidth && columnDepth && axialLoad && soilBearingCapacity && foundationDepth) {
      // Convert inputs to numbers
      const cw = parseFloat(columnWidth);
      const cd = parseFloat(columnDepth);
      const P = parseFloat(axialLoad);
      const Mx = parseFloat(momentX) || 0;
      const My = parseFloat(momentY) || 0;
      const qa = parseFloat(soilBearingCapacity);
      const h = parseFloat(foundationDepth);
      
      // Calculate required foundation area
      const requiredArea = P / qa;
      
      // Calculate foundation dimensions (assuming square foundation)
      const foundationSize = Math.sqrt(requiredArea);
      
      // Calculate effective depth
      const d = h - 75; // Assuming 75mm cover
      
      // Calculate punching shear perimeter
      const punchingPerimeter = 4 * (cw + d);
      
      // Calculate punching shear force
      const punchingShearForce = P * (1 - Math.pow(cw + d, 2) / Math.pow(foundationSize, 2));
      
      // Calculate punching shear stress
      const punchingShearStress = punchingShearForce / (punchingPerimeter * d);
      
      // Calculate required steel area (simplified calculation)
      const fc = 25; // Concrete strength in MPa
      const fy = 400; // Steel yield strength in MPa
      const As = (P * 1000) / (0.9 * fy * d);
      
      // Calculate minimum steel area
      const minAs = 0.002 * foundationSize * foundationSize;
      
      // Use the larger of required and minimum steel area
      const finalAs = Math.max(As, minAs);
      
      // Calculate bar spacing (assuming 16mm bars)
      const barArea = Math.PI * Math.pow(16/2, 2);
      const spacing = (foundationSize * barArea) / finalAs;
      
      setResult({
        foundationSize: foundationSize.toFixed(2),
        foundationArea: requiredArea.toFixed(2),
        punchingShearStress: punchingShearStress.toFixed(2),
        steelArea: finalAs.toFixed(2),
        requiredBars: Math.ceil(finalAs / barArea),
        barSpacing: spacing.toFixed(0),
        bearingPressure: (P / (foundationSize * foundationSize)).toFixed(2)
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
          <form onSubmit={calculateFoundation} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.columnWidth[language]}
                </label>
                <input
                  type="number"
                  name="columnWidth"
                  value={formData.columnWidth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.columnDepth[language]}
                </label>
                <input
                  type="number"
                  name="columnDepth"
                  value={formData.columnDepth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.1"
                />
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
                  {t.momentX[language]}
                </label>
                <input
                  type="number"
                  name="momentX"
                  value={formData.momentX}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.momentY[language]}
                </label>
                <input
                  type="number"
                  name="momentY"
                  value={formData.momentY}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.soilBearingCapacity[language]}
                </label>
                <input
                  type="number"
                  name="soilBearingCapacity"
                  value={formData.soilBearingCapacity}
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
                  {t.foundationDepth[language]}
                </label>
                <input
                  type="number"
                  name="foundationDepth"
                  value={formData.foundationDepth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.1"
                />
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
                  placeholder="75"
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
                  <p className="text-sm text-gray-600">{t.foundationSize[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.foundationSize} m
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.foundationArea[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.foundationArea} m²
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.punchingShearStress[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.punchingShearStress} MPa
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.steelArea[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.steelArea} mm²
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.requiredBars[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.requiredBars} x Ø16mm
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.barSpacing[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.barSpacing} mm
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.bearingPressure[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.bearingPressure} kN/m²
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

export default ShallowFoundationCalculator; 