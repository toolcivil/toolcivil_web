import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaPlus, FaTrash, FaSave, FaDownload, FaArrowLeft } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const LaborCost = () => {
  const { language } = useLanguage();
  const t = {
    title: {
      en: "Labor Cost Calculator",
      th: "เครื่องคำนวณต้นทุนแรงงาน"
    },
    description: {
      en: "Calculate labor costs for your construction project. Add multiple labor types and get instant cost calculations.",
      th: "คำนวณต้นทุนแรงงานสำหรับโครงการก่อสร้างของคุณ เพิ่มประเภทแรงงานและรับการคำนวณต้นทุนทันที"
    },
    laborType: {
      en: "Labor Type",
      th: "ประเภทแรงงาน"
    },
    enterLaborType: {
      en: "Enter labor type",
      th: "กรอกประเภทแรงงาน"
    },
    numberOfWorkers: {
      en: "Number of Workers",
      th: "จำนวนคนงาน"
    },
    workingDays: {
      en: "Working Days",
      th: "จำนวนวันทำงาน"
    },
    wagePerDay: {
      en: "Wage per Day",
      th: "ค่าแรงต่อวัน"
    },
    total: {
      en: "Total",
      th: "รวม"
    },
    addLabor: {
      en: "Add Labor Type",
      th: "เพิ่มประเภทแรงงาน"
    },
    totalCost: {
      en: "Total Labor Cost",
      th: "ต้นทุนแรงงานรวม"
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

  const [laborItems, setLaborItems] = useState(() => {
    const savedLabor = localStorage.getItem('laborList');
    return savedLabor ? JSON.parse(savedLabor) : [
      { id: 1, type: '', workers: '', days: '', wagePerDay: '', total: 0 }
    ];
  });
  
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    calculateTotalCost();
  }, [laborItems]);

  useEffect(() => {
    localStorage.setItem('laborList', JSON.stringify(laborItems));
  }, [laborItems]);

  const handleAddLabor = () => {
    setLaborItems([
      ...laborItems,
      { id: Date.now(), type: '', workers: '', days: '', wagePerDay: '', total: 0 }
    ]);
  };

  const handleRemoveLabor = (id) => {
    if (laborItems.length > 1) {
      setLaborItems(laborItems.filter(item => item.id !== id));
    }
  };

  const handleLaborChange = (id, field, value) => {
    const updatedItems = laborItems.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        const workers = parseFloat(updatedItem.workers) || 0;
        const days = parseFloat(updatedItem.days) || 0;
        const wagePerDay = parseFloat(updatedItem.wagePerDay) || 0;
        updatedItem.total = workers * days * wagePerDay;
        return updatedItem;
      }
      return item;
    });
    setLaborItems(updatedItems);
  };

  const calculateTotalCost = () => {
    const total = laborItems.reduce((sum, item) => sum + (item.total || 0), 0);
    setTotalCost(total);
  };

  const handleSaveList = () => {
    const timestamp = new Date().toISOString().slice(0, 10);
    const filename = `labor-cost-${timestamp}.json`;
    const data = JSON.stringify(laborItems, null, 2);
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
            <FaUsers className="text-4xl text-blue-600" />
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
            {/* Labor Items List */}
            <div className="space-y-6">
              {laborItems.map((item, index) => (
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
                        {t.laborType[language]}
                      </label>
                      <input
                        type="text"
                        value={item.type}
                        onChange={(e) => handleLaborChange(item.id, 'type', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={t.enterLaborType[language]}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.numberOfWorkers[language]}
                      </label>
                      <input
                        type="number"
                        value={item.workers}
                        onChange={(e) => handleLaborChange(item.id, 'workers', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="0"
                        min="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.workingDays[language]}
                      </label>
                      <input
                        type="number"
                        value={item.days}
                        onChange={(e) => handleLaborChange(item.id, 'days', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="0"
                        min="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.wagePerDay[language]}
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                          ฿
                        </span>
                        <input
                          type="number"
                          value={item.wagePerDay}
                          onChange={(e) => handleLaborChange(item.id, 'wagePerDay', e.target.value)}
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
                    {laborItems.length > 1 && (
                      <button
                        onClick={() => handleRemoveLabor(item.id)}
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
                onClick={handleAddLabor}
                className="py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <FaPlus />
                {t.addLabor[language]}
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

export default LaborCost; 