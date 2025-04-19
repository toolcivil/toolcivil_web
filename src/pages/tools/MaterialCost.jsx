import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalculator, FaBox, FaTruck, FaDollarSign, FaPlus, FaTrash, FaSave, FaDownload, FaArrowLeft } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const MaterialCost = () => {
  const { language } = useLanguage();
  const t = {
    title: {
      en: "Material Cost Calculator",
      th: "เครื่องคำนวณต้นทุนวัสดุ"
    },
    description: {
      en: "Calculate the total cost of materials for your construction project. Add multiple materials and get instant cost calculations.",
      th: "คำนวณต้นทุนวัสดุทั้งหมดสำหรับโครงการก่อสร้างของคุณ เพิ่มวัสดุหลายรายการและรับการคำนวณต้นทุนทันที"
    },
    materialName: {
      en: "Material Name",
      th: "ชื่อวัสดุ"
    },
    enterMaterialName: {
      en: "Enter material name",
      th: "กรอกชื่อวัสดุ"
    },
    quantity: {
      en: "Quantity",
      th: "จำนวน"
    },
    unit: {
      en: "Unit",
      th: "หน่วย"
    },
    enterUnit: {
      en: "Enter unit (e.g., kg, m³)",
      th: "กรอกหน่วย (เช่น กก., ลบ.ม.)"
    },
    pricePerUnit: {
      en: "Price per Unit",
      th: "ราคาต่อหน่วย"
    },
    total: {
      en: "Total",
      th: "รวม"
    },
    addMaterial: {
      en: "Add Material",
      th: "เพิ่มวัสดุ"
    },
    totalCost: {
      en: "Total Cost",
      th: "ต้นทุนรวม"
    },
    save: {
      en: "Save List",
      th: "บันทึกรายการ"
    },
    download: {
      en: "Download PDF",
      th: "ดาวน์โหลด PDF"
    },
    backToTools: {
      en: "Back to Tools",
      th: "กลับไปที่เครื่องมือ"
    }
  };

  const [materials, setMaterials] = useState(() => {
    const savedMaterials = localStorage.getItem('materialsList');
    return savedMaterials ? JSON.parse(savedMaterials) : [
      { id: 1, name: '', quantity: '', unit: '', pricePerUnit: '', total: 0 }
    ];
  });
  
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    calculateTotalCost();
  }, [materials]);

  useEffect(() => {
    localStorage.setItem('materialsList', JSON.stringify(materials));
  }, [materials]);

  const handleAddMaterial = () => {
    setMaterials([
      ...materials,
      { id: Date.now(), name: '', quantity: '', unit: '', pricePerUnit: '', total: 0 }
    ]);
  };

  const handleRemoveMaterial = (id) => {
    if (materials.length > 1) {
      setMaterials(materials.filter(material => material.id !== id));
    }
  };

  const handleMaterialChange = (id, field, value) => {
    const updatedMaterials = materials.map(material => {
      if (material.id === id) {
        const updatedMaterial = { ...material, [field]: value };
        if (field === 'quantity' || field === 'pricePerUnit') {
          const quantity = parseFloat(updatedMaterial.quantity) || 0;
          const pricePerUnit = parseFloat(updatedMaterial.pricePerUnit) || 0;
          updatedMaterial.total = quantity * pricePerUnit;
        }
        return updatedMaterial;
      }
      return material;
    });
    setMaterials(updatedMaterials);
  };

  const calculateTotalCost = () => {
    const total = materials.reduce((sum, material) => sum + (material.total || 0), 0);
    setTotalCost(total);
  };

  const handleSaveList = () => {
    const timestamp = new Date().toISOString().slice(0, 10);
    const filename = `material-cost-${timestamp}.json`;
    const data = JSON.stringify(materials, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadPDF = () => {
    // PDF generation logic will be implemented here
    console.log('Downloading PDF...');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
            <FaCalculator className="text-4xl text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t.title[language]}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.description[language]}
          </p>
        </motion.div>

        {/* Calculator */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            {/* Materials List */}
            <div className="space-y-6">
              {materials.map((material, index) => (
                <motion.div
                  key={material.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 relative"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.materialName[language]}
                      </label>
                      <input
                        type="text"
                        value={material.name}
                        onChange={(e) => handleMaterialChange(material.id, 'name', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={t.enterMaterialName[language]}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.quantity[language]}
                      </label>
                      <input
                        type="number"
                        value={material.quantity}
                        onChange={(e) => handleMaterialChange(material.id, 'quantity', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="0"
                        min="0"
                        step="0.01"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.unit[language]}
                      </label>
                      <input
                        type="text"
                        value={material.unit}
                        onChange={(e) => handleMaterialChange(material.id, 'unit', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={t.enterUnit[language]}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.pricePerUnit[language]}
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                          ฿
                        </span>
                        <input
                          type="number"
                          value={material.pricePerUnit}
                          onChange={(e) => handleMaterialChange(material.id, 'pricePerUnit', e.target.value)}
                          className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="0"
                          min="0"
                          step="0.01"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-lg font-semibold text-blue-600">
                      {t.total[language]}: ฿{material.total.toFixed(2)}
                    </div>
                    {materials.length > 1 && (
                      <button
                        onClick={() => handleRemoveMaterial(material.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <FaTrash />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddMaterial}
                className="py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <FaPlus />
                {t.addMaterial[language]}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSaveList}
                className="py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <FaSave />
                {t.save[language]}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownloadPDF}
                className="py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
              >
                <FaDownload />
                {t.download[language]}
              </motion.button>
            </div>

            {/* Total Cost */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 p-6 bg-blue-50 rounded-xl"
            >
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold text-gray-800">
                  {t.totalCost[language]}
                </div>
                <div className="text-3xl font-bold text-blue-600">
                  ฿{totalCost.toFixed(2)}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Back to Tools Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex justify-center"
          >
            <Link
              to="/engineering-tools"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors duration-200 group"
            >
              <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              {t.backToTools[language]}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MaterialCost; 