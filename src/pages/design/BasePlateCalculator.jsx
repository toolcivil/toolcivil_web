import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, translations } from '../../contexts/LanguageContext';
import { FaArrowLeft, FaCalculator, FaRuler, FaWeightHanging } from 'react-icons/fa';

const BasePlateCalculator = () => {
  const { language } = useLanguage();
  const t = translations.basePlate;
  const [formData, setFormData] = useState({
    columnSection: 'W',
    columnSize: '',
    axialLoad: '',
    moment: '',
    concreteStrength: '21',
    steelGrade: 'A36',
    plateThickness: ''
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateBasePlate = (e) => {
    e.preventDefault();
    const { columnSize, axialLoad, moment, plateThickness } = formData;
    
    if (columnSize && axialLoad && moment && plateThickness) {
      // Simple calculation for demonstration
      const columnArea = parseFloat(columnSize) * parseFloat(columnSize);
      const requiredArea = parseFloat(axialLoad) / 0.85; // Assuming 0.85 bearing strength reduction factor
      const plateSize = Math.sqrt(requiredArea);
      const bendingMoment = parseFloat(moment);
      const thickness = Math.sqrt((6 * bendingMoment) / (plateSize * 250)); // Assuming 250 MPa yield strength
      
      setResult({
        requiredPlateSize: plateSize.toFixed(0),
        minimumThickness: thickness.toFixed(1),
        bearingCapacity: (requiredArea * 0.85).toFixed(0),
        momentCapacity: (plateSize * Math.pow(parseFloat(plateThickness), 2) * 250 / 6).toFixed(0)
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
          <form onSubmit={calculateBasePlate} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.columnSection[language]}
                </label>
                <select
                  name="columnSection"
                  value={formData.columnSection}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="W">W Section</option>
                  <option value="H">H Section</option>
                  <option value="Box">Box Section</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.columnSize[language]}
                </label>
                <input
                  type="number"
                  name="columnSize"
                  value={formData.columnSize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0"
                  step="1"
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
                  step="0.01"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.moment[language]}
                </label>
                <input
                  type="number"
                  name="moment"
                  value={formData.moment}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.01"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.concreteStrength[language]}
                </label>
                <select
                  name="concreteStrength"
                  value={formData.concreteStrength}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="21">21 MPa</option>
                  <option value="28">28 MPa</option>
                  <option value="35">35 MPa</option>
                </select>
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
                  <p className="text-sm text-gray-600">{t.requiredPlateSize[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.requiredPlateSize} mm
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.minimumThickness[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.minimumThickness} mm
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.bearingCapacity[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.bearingCapacity} kN
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

export default BasePlateCalculator; 