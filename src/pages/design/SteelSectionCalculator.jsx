import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, translations } from '../../contexts/LanguageContext';
import { FaArrowLeft, FaCalculator, FaRuler, FaWeightHanging } from 'react-icons/fa';

const SteelSectionCalculator = () => {
  const { language } = useLanguage();
  const t = translations.steelSection;
  const [dimensions, setDimensions] = useState({
    sectionType: 'I',
    height: '',
    width: '',
    thickness: '',
    length: ''
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDimensions(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateSection = (e) => {
    e.preventDefault();
    const { sectionType, height, width, thickness, length } = dimensions;
    if (height && width && thickness && length) {
      // Simple calculation for demonstration
      const area = parseFloat(height) * parseFloat(width) * parseFloat(thickness);
      const volume = area * parseFloat(length);
      const weight = volume * 7850; // Steel density: 7850 kg/m³

      setResult({
        area: area.toFixed(2),
        volume: volume.toFixed(2),
        weight: weight.toFixed(2)
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
          <form onSubmit={calculateSection} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.sectionType[language]}
              </label>
              <select
                name="sectionType"
                value={dimensions.sectionType}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="I">I-Section</option>
                <option value="H">H-Section</option>
                <option value="C">C-Section</option>
                <option value="L">L-Section</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.height[language]}
                </label>
                <input
                  type="number"
                  name="height"
                  value={dimensions.height}
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
                  value={dimensions.width}
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
                  value={dimensions.thickness}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.01"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.length[language]}
                </label>
                <input
                  type="number"
                  name="length"
                  value={dimensions.length}
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
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-gray-600">{t.crossSectionalArea[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.area} m²
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.volume[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.volume} m³
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.weight[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.weight} kg
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link
            to="/engineering-tools?tab=design&subTab=steel"
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

export default SteelSectionCalculator; 