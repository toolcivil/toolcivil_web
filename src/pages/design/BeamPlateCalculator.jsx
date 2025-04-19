import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, translations } from '../../contexts/LanguageContext';
import { FaArrowLeft, FaCalculator, FaRuler, FaWeightHanging } from 'react-icons/fa';

const BeamPlateCalculator = () => {
  const { language } = useLanguage();
  const t = translations.beamPlate;
  const [formData, setFormData] = useState({
    beamSection: 'W',
    beamDepth: '',
    beamWidth: '',
    plateThickness: '',
    boltDiameter: '',
    numberOfBolts: '',
    steelGrade: 'A36',
    momentLoad: ''
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateBeamPlate = (e) => {
    e.preventDefault();
    const { beamDepth, beamWidth, plateThickness, boltDiameter, numberOfBolts, momentLoad } = formData;
    
    if (beamDepth && beamWidth && plateThickness && boltDiameter && numberOfBolts && momentLoad) {
      // Simple calculation for demonstration
      const plateHeight = parseFloat(beamDepth) + 100; // Add 50mm each side
      const plateWidth = parseFloat(beamWidth) + 100; // Add 50mm each side
      const t = parseFloat(plateThickness);
      const moment = parseFloat(momentLoad);
      const d = parseFloat(boltDiameter);
      const n = parseFloat(numberOfBolts);
      
      // Calculate plate properties
      const leverArm = plateHeight - 50; // Approximate lever arm
      const boltForce = (moment * 1000) / leverArm; // Convert kN·m to N·m
      const boltShearCapacity = Math.PI * Math.pow(d/2, 2) * 400 * 0.6 * n; // Assuming Fu = 400MPa
      const momentCapacity = (plateWidth * Math.pow(t, 2) * 250) / 6; // Assuming Fy = 250MPa
      
      setResult({
        plateHeight: plateHeight.toFixed(0),
        plateWidth: plateWidth.toFixed(0),
        boltForce: (boltForce/1000).toFixed(2), // Convert to kN
        boltShearCapacity: (boltShearCapacity/1000).toFixed(2), // Convert to kN
        momentCapacity: momentCapacity.toFixed(2)
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
          <form onSubmit={calculateBeamPlate} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.beamSection[language]}
                </label>
                <select
                  name="beamSection"
                  value={formData.beamSection}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="W">W</option>
                  <option value="H">H</option>
                  <option value="I">I</option>
                </select>
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
                  {t.plateThickness[language]}
                </label>
                <input
                  type="number"
                  name="plateThickness"
                  value={formData.plateThickness}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.boltDiameter[language]}
                </label>
                <input
                  type="number"
                  name="boltDiameter"
                  value={formData.boltDiameter}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.numberOfBolts[language]}
                </label>
                <input
                  type="number"
                  name="numberOfBolts"
                  value={formData.numberOfBolts}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0"
                  step="1"
                />
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
                  <option value="A36">A36</option>
                  <option value="A572">A572</option>
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
                  <p className="text-sm text-gray-600">{t.plateHeight[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.plateHeight} mm
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.plateWidth[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.plateWidth} mm
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.boltForce[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.boltForce} kN
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.boltShearCapacity[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.boltShearCapacity} kN
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

export default BeamPlateCalculator; 