import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, translations } from '../../contexts/LanguageContext';
import { FaArrowLeft, FaCalculator, FaRuler, FaWeightHanging } from 'react-icons/fa';

const PrecastBeamConnection = () => {
  const { language } = useLanguage();
  const t = translations.precastBeam;
  const [formData, setFormData] = useState({
    beamHeight: '',
    beamWidth: '',
    concreteGrade: '30',
    steelGrade: '400',
    cover: '',
    shearForce: '',
    bendingMoment: '',
    connectionType: 'bolted',
    boltGrade: '8.8',
    boltDiameter: '',
    boltCount: ''
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
    const { beamHeight, beamWidth, concreteGrade, steelGrade, cover, shearForce, bendingMoment, boltGrade, boltDiameter, boltCount } = formData;
    
    if (beamHeight && beamWidth && cover && shearForce && bendingMoment && boltDiameter && boltCount) {
      // Convert inputs to numbers
      const h = parseFloat(beamHeight);
      const b = parseFloat(beamWidth);
      const c = parseFloat(cover);
      const V = parseFloat(shearForce);
      const M = parseFloat(bendingMoment);
      const d = parseFloat(boltDiameter);
      const n = parseFloat(boltCount);
      
      // Calculate effective depth
      const d_eff = h - c;
      
      // Calculate shear capacity (simplified)
      const Vc = 0.17 * Math.sqrt(parseFloat(concreteGrade)) * b * d_eff;
      
      // Calculate moment capacity (simplified)
      const Mc = 0.9 * parseFloat(steelGrade) * b * d_eff * d_eff / 4;
      
      // Calculate bolt capacity (simplified)
      const Vb = 0.6 * parseFloat(boltGrade) * Math.PI * d * d / 4 * n;
      
      // Calculate connection efficiency
      const efficiency = Math.min(Vc/V, Mc/M, Vb/V) * 100;
      
      setResult({
        shearCapacity: Vc.toFixed(2),
        momentCapacity: Mc.toFixed(2),
        boltCapacity: Vb.toFixed(2),
        efficiency: efficiency.toFixed(2)
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.beamHeight[language]}
                </label>
                <input
                  type="number"
                  name="beamHeight"
                  value={formData.beamHeight}
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
                  {t.concreteGrade[language]}
                </label>
                <select
                  name="concreteGrade"
                  value={formData.concreteGrade}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="20">C20</option>
                  <option value="25">C25</option>
                  <option value="30">C30</option>
                  <option value="35">C35</option>
                  <option value="40">C40</option>
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
                  <option value="400">SD40</option>
                  <option value="500">SD50</option>
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
                  placeholder="0.00"
                  step="0.1"
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
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.bendingMoment[language]}
                </label>
                <input
                  type="number"
                  name="bendingMoment"
                  value={formData.bendingMoment}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  step="0.1"
                />
              </div>
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
                  <option value="grouted">{t.connectionTypes.grouted[language]}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.boltGrade[language]}
                </label>
                <select
                  name="boltGrade"
                  value={formData.boltGrade}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="8.8">8.8</option>
                  <option value="10.9">10.9</option>
                </select>
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
                  {t.boltCount[language]}
                </label>
                <input
                  type="number"
                  name="boltCount"
                  value={formData.boltCount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0"
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
                  <p className="text-sm text-gray-600">{t.shearCapacity[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.shearCapacity} kN
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.momentCapacity[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.momentCapacity} kN-m
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.boltCapacity[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.boltCapacity} kN
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t.efficiency[language]}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {result.efficiency}%
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

export default PrecastBeamConnection; 