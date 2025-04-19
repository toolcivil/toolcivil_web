import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, translations } from '../../contexts/LanguageContext';
import { FaArrowLeft, FaCalculator, FaRuler, FaWeightHanging } from 'react-icons/fa';

const ColumnDesignCalculator = () => {
  const { language } = useLanguage();
  const t = translations.columnDesign;
  const [formData, setFormData] = useState({
    columnWidth: '',
    columnDepth: '',
    effectiveLength: '',
    concreteGrade: '25',
    steelGrade: 'SD40',
    axialLoad: '',
    momentX: '',
    momentY: '',
    columnLength: ''
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateColumnDesign = (e) => {
    e.preventDefault();
    const { columnWidth, columnDepth, effectiveLength, axialLoad, momentX, momentY } = formData;
    
    if (columnWidth && columnDepth && effectiveLength && axialLoad && momentX && momentY) {
      // Convert inputs to numbers
      const b = parseFloat(columnWidth);
      const h = parseFloat(columnDepth);
      const le = parseFloat(effectiveLength);
      const P = parseFloat(axialLoad) * 1000; // Convert kN to N
      const Mx = parseFloat(momentX) * 1000000; // Convert kN·m to N·mm
      const My = parseFloat(momentY) * 1000000; // Convert kN·m to N·mm
      
      // Calculate required steel area (simplified calculation)
      const fc = 25; // Concrete strength in MPa
      const fy = 400; // Steel yield strength in MPa
      
      // Calculate slenderness ratio
      const k = le / Math.min(b, h);
      
      // Calculate required steel area
      const Ag = b * h;
      const As = (P / (0.85 * fc * Ag)) * Ag;
      
      // Calculate moment capacity
      const MxCapacity = (0.85 * fc * Ag * h) / 1000000; // Convert back to kN·m
      const MyCapacity = (0.85 * fc * Ag * b) / 1000000; // Convert back to kN·m
      
      setResult({
        steelArea: As.toFixed(2),
        requiredBars: Math.ceil(As / (Math.PI * Math.pow(20/2, 2))), // Assuming 20mm bars
        slendernessRatio: k.toFixed(2),
        momentCapacityX: MxCapacity.toFixed(2),
        momentCapacityY: MyCapacity.toFixed(2)
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
          <form onSubmit={calculateColumnDesign} className="space-y-6">
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
                  {t.effectiveLength[language]}
                </label>
                <input
                  type="number"
                  name="effectiveLength"
                  value={formData.effectiveLength}
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
                  {t.axialLoad[language]}
                </label>
                <input
                  type="number"
                  name="axialLoad"
                  value={formData.axialLoad}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.01"
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
                  step="0.01"
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
                  step="0.01"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.columnLength[language]}
                </label>
                <input
                  type="number"
                  name="columnLength"
                  value={formData.columnLength}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.01"
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
                  <p className="text-sm text-gray-600">{t.steelArea[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.steelArea} mm²
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.requiredBars[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.requiredBars} x Ø20mm
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.slendernessRatio[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.slendernessRatio}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.momentCapacityX[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.momentCapacityX} kN⋅m
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.momentCapacityY[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.momentCapacityY} kN⋅m
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

export default ColumnDesignCalculator; 