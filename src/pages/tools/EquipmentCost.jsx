import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCog, FaPlus, FaTrash, FaSave, FaDownload, FaArrowLeft } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const EquipmentCost = () => {
  const { language } = useLanguage();
  const t = {
    title: {
      en: "Equipment Cost Calculator",
      th: "เครื่องคำนวณต้นทุนอุปกรณ์"
    },
    description: {
      en: "Calculate equipment costs for your construction project. Add multiple equipment types and get instant cost calculations.",
      th: "คำนวณต้นทุนอุปกรณ์สำหรับโครงการก่อสร้างของคุณ เพิ่มประเภทอุปกรณ์และรับการคำนวณต้นทุนทันที"
    },
    equipmentType: {
      en: "Equipment Type",
      th: "ประเภทอุปกรณ์"
    },
    enterEquipmentType: {
      en: "Enter equipment type",
      th: "กรอกประเภทอุปกรณ์"
    },
    quantity: {
      en: "Quantity",
      th: "จำนวน"
    },
    rentalDays: {
      en: "Rental Days",
      th: "จำนวนวันเช่า"
    },
    costPerDay: {
      en: "Cost per Day",
      th: "ค่าเช่าต่อวัน"
    },
    total: {
      en: "Total",
      th: "รวม"
    },
    addEquipment: {
      en: "Add Equipment",
      th: "เพิ่มอุปกรณ์"
    },
    totalCost: {
      en: "Total Equipment Cost",
      th: "ต้นทุนอุปกรณ์รวม"
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

  const [equipmentItems, setEquipmentItems] = useState(() => {
    const savedEquipment = localStorage.getItem('equipmentList');
    return savedEquipment ? JSON.parse(savedEquipment) : [
      { id: 1, type: '', quantity: '', days: '', costPerDay: '', total: 0 }
    ];
  });
  
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    calculateTotalCost();
  }, [equipmentItems]);

  useEffect(() => {
    localStorage.setItem('equipmentList', JSON.stringify(equipmentItems));
  }, [equipmentItems]);

  const handleAddEquipment = () => {
    setEquipmentItems([
      ...equipmentItems,
      { id: Date.now(), type: '', quantity: '', days: '', costPerDay: '', total: 0 }
    ]);
  };

  const handleRemoveEquipment = (id) => {
    if (equipmentItems.length > 1) {
      setEquipmentItems(equipmentItems.filter(item => item.id !== id));
    }
  };

  const handleEquipmentChange = (id, field, value) => {
    const updatedItems = equipmentItems.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        const quantity = parseFloat(updatedItem.quantity) || 0;
        const days = parseFloat(updatedItem.days) || 0;
        const costPerDay = parseFloat(updatedItem.costPerDay) || 0;
        updatedItem.total = quantity * days * costPerDay;
        return updatedItem;
      }
      return item;
    });
    setEquipmentItems(updatedItems);
  };

  const calculateTotalCost = () => {
    const total = equipmentItems.reduce((sum, item) => sum + (item.total || 0), 0);
    setTotalCost(total);
  };

  const handleSaveList = () => {
    const timestamp = new Date().toISOString().slice(0, 10);
    const filename = `equipment-cost-${timestamp}.json`;
    const data = JSON.stringify(equipmentItems, null, 2);
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
            <FaCog className="text-4xl text-blue-600" />
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
            {/* Equipment Items List */}
            <div className="space-y-6">
              {equipmentItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 relative"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.equipmentType[language]}
                      </label>
                      <input
                        type="text"
                        value={item.type}
                        onChange={(e) => handleEquipmentChange(item.id, 'type', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={t.enterEquipmentType[language]}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.quantity[language]}
                      </label>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleEquipmentChange(item.id, 'quantity', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="0"
                        min="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.rentalDays[language]}
                      </label>
                      <input
                        type="number"
                        value={item.days}
                        onChange={(e) => handleEquipmentChange(item.id, 'days', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="0"
                        min="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.costPerDay[language]}
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                          ฿
                        </span>
                        <input
                          type="number"
                          value={item.costPerDay}
                          onChange={(e) => handleEquipmentChange(item.id, 'costPerDay', e.target.value)}
                          className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-lg font-semibold text-blue-600">
                      {t.total[language]}: ฿{item.total.toFixed(2)}
                    </div>
                    {equipmentItems.length > 1 && (
                      <button
                        onClick={() => handleRemoveEquipment(item.id)}
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
                onClick={handleAddEquipment}
                className="py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <FaPlus />
                {t.addEquipment[language]}
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

export default EquipmentCost; 