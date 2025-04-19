import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, translations } from '../../contexts/LanguageContext';
import { FaArrowLeft, FaCalculator, FaRuler, FaWeightHanging } from 'react-icons/fa';

const ConnectionDesign = () => {
  const { language } = useLanguage();
  const t = translations.connectionDesign;
  const [formData, setFormData] = useState({
    connectionType: 'bolted',
    plateThickness: '',
    boltDiameter: '',
    numberOfBolts: '',
    steelGrade: 'A36',
    loadType: 'shear'
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateConnection = (e) => {
    e.preventDefault();
    const { plateThickness, boltDiameter, numberOfBolts } = formData;
    
    if (plateThickness && boltDiameter && numberOfBolts) {
      // Simple calculation for demonstration
      const boltArea = Math.PI * Math.pow(parseFloat(boltDiameter) / 2, 2);
      const totalBoltArea = boltArea * parseFloat(numberOfBolts);
      const plateArea = parseFloat(plateThickness) * 100; // Assuming 100mm width
      
      setResult({
        boltShearCapacity: (totalBoltArea * 240).toFixed(2), // Assuming 240MPa shear strength
        plateBearingCapacity: (plateArea * 360).toFixed(2), // Assuming 360MPa bearing strength
        designCapacity: Math.min(totalBoltArea * 240, plateArea * 360).toFixed(2)
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
          <form onSubmit={calculateConnection} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.connectionType[language]}
              </label>
              <select
                name="connectionType"
                value={formData.connectionType}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="bolted">{t.connectionTypes.bolted[language]}</option>
                <option value="welded">{t.connectionTypes.welded[language]}</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  min="1"
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
                  <option value="A992">A992</option>
                </select>
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
                  <p className="text-sm text-gray-600">{t.boltShearCapacity[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.boltShearCapacity} kN
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.plateBearingCapacity[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.plateBearingCapacity} kN
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.designCapacity[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.designCapacity} kN
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

export default ConnectionDesign; 