import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, translations } from '../../contexts/LanguageContext';
import { FaArrowLeft, FaCalculator, FaRuler, FaWeightHanging } from 'react-icons/fa';

const BeamDesignCalculator = () => {
  const { language } = useLanguage();
  const t = translations.beamDesign;
  const [formData, setFormData] = useState({
    beamWidth: '',
    beamDepth: '',
    effectiveDepth: '',
    concreteGrade: '25',
    steelGrade: 'SD40',
    momentLoad: '',
    shearForce: '',
    beamLength: ''
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateBeamDesign = (e) => {
    e.preventDefault();
    const { beamWidth, beamDepth, effectiveDepth, momentLoad, shearForce } = formData;
    
    if (beamWidth && beamDepth && effectiveDepth && momentLoad && shearForce) {
      // Convert inputs to numbers
      const b = parseFloat(beamWidth);
      const h = parseFloat(beamDepth);
      const d = parseFloat(effectiveDepth);
      const M = parseFloat(momentLoad) * 1000000; // Convert kN·m to N·mm
      const V = parseFloat(shearForce) * 1000; // Convert kN to N
      
      // Calculate required steel area (simplified calculation)
      const fc = 25; // Concrete strength in MPa
      const fy = 400; // Steel yield strength in MPa
      
      // Moment capacity calculation
      const k = M / (b * Math.pow(d, 2) * fc);
      const z = d * (0.5 + Math.sqrt(0.25 - k/1.134));
      const As = M / (0.87 * fy * z);
      
      // Shear calculation
      const v = V / (b * d);
      const vc = 0.17 * Math.sqrt(fc);
      const vs = v - vc;
      const Asv = (vs * b * 200) / (0.87 * 250); // Assuming 250MPa links at 200mm spacing
      
      setResult({
        steelArea: As.toFixed(2),
        requiredBars: Math.ceil(As / (Math.PI * Math.pow(20/2, 2))), // Assuming 20mm bars
        shearReinforcement: Asv.toFixed(2),
        minimumSpacing: Math.min(0.75 * d, 200).toFixed(0),
        momentCapacity: ((0.87 * fy * As * d) / 1000000).toFixed(2) // Convert back to kN·m
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
          <form onSubmit={calculateBeamDesign} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.beamWidth[language]}
                </label>
                <input
                  type="number"
                  name="beamWidth"
                  value={formData.beamWidth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.beamDepth[language]}
                </label>
                <input
                  type="number"
                  name="beamDepth"
                  value={formData.beamDepth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.effectiveDepth[language]}
                </label>
                <input
                  type="number"
                  name="effectiveDepth"
                  value={formData.effectiveDepth}
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
                  {t.momentLoad[language]}
                </label>
                <input
                  type="number"
                  name="momentLoad"
                  value={formData.momentLoad}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.01"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.shearForce[language]}
                </label>
                <input
                  type="number"
                  name="shearForce"
                  value={formData.shearForce}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.01"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.beamLength[language]}
                </label>
                <input
                  type="number"
                  name="beamLength"
                  value={formData.beamLength}
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
                  <p className="text-sm text-gray-600">{t.shearReinforcement[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.shearReinforcement} mm²/m
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.minimumSpacing[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.minimumSpacing} mm
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.momentCapacity[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.momentCapacity} kN⋅m
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

export default BeamDesignCalculator; 