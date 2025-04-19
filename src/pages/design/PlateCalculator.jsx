import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, translations } from '../../contexts/LanguageContext';
import { FaArrowLeft, FaCalculator, FaRuler, FaWeightHanging } from 'react-icons/fa';

const PlateCalculator = () => {
  const { language } = useLanguage();
  const t = translations.plate;
  const [formData, setFormData] = useState({
    plateType: 'rectangular',
    length: '',
    width: '',
    thickness: '',
    loadType: 'uniform',
    loadValue: '',
    steelGrade: 'A36'
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculatePlate = (e) => {
    e.preventDefault();
    const { length, width, thickness, loadValue } = formData;
    
    if (length && width && thickness && loadValue) {
      // Simple calculation for demonstration
      const area = parseFloat(length) * parseFloat(width);
      const load = parseFloat(loadValue);
      const t = parseFloat(thickness);
      
      // Calculate plate properties
      const momentOfInertia = (width * Math.pow(t, 3)) / 12;
      const maxStress = (6 * load * Math.pow(length, 2)) / (8 * width * Math.pow(t, 2));
      const maxDeflection = (5 * load * Math.pow(length, 4)) / (384 * 200000 * momentOfInertia);
      
      setResult({
        area: area.toFixed(2),
        maxStress: maxStress.toFixed(2),
        maxDeflection: maxDeflection.toFixed(2),
        allowableStress: (250).toFixed(2) // Assuming 250 MPa yield strength
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
          <form onSubmit={calculatePlate} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.plateType[language]}
                </label>
                <select
                  name="plateType"
                  value={formData.plateType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="rectangular">{t.plateTypes.rectangular[language]}</option>
                  <option value="circular">{t.plateTypes.circular[language]}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.length[language]}
                </label>
                <input
                  type="number"
                  name="length"
                  value={formData.length}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.01"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.width[language]}
                </label>
                <input
                  type="number"
                  name="width"
                  value={formData.width}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.01"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.thickness[language]}
                </label>
                <input
                  type="number"
                  name="thickness"
                  value={formData.thickness}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.loadType[language]}
                </label>
                <select
                  name="loadType"
                  value={formData.loadType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="uniform">{t.loadTypes.uniform[language]}</option>
                  <option value="point">{t.loadTypes.point[language]}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.loadValue[language]}
                </label>
                <input
                  type="number"
                  name="loadValue"
                  value={formData.loadValue}
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
                  <p className="text-sm text-gray-600">{t.plateArea[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.area} mm²
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.maxStress[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.maxStress} MPa
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.maxDeflection[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.maxDeflection} mm
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.allowableStress[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.allowableStress} MPa
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

export default PlateCalculator; 