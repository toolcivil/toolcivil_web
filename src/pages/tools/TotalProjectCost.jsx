import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChartBar, FaPlus, FaTrash, FaSave, FaDownload, FaArrowLeft } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const TotalProjectCost = () => {
  const { language } = useLanguage();
  const t = {
    title: {
      en: "Total Project Cost Calculator",
      th: "เครื่องคำนวณต้นทุนโครงการรวม"
    },
    description: {
      en: "Calculate the total cost of your construction project by combining material, labor, and equipment costs.",
      th: "คำนวณต้นทุนโครงการก่อสร้างรวมโดยรวมต้นทุนวัสดุ แรงงาน และอุปกรณ์"
    },
    costItem: {
      en: "Cost Item",
      th: "รายการต้นทุน"
    },
    enterCostItem: {
      en: "Enter cost item name",
      th: "กรอกชื่อรายการต้นทุน"
    },
    amount: {
      en: "Amount",
      th: "จำนวนเงิน"
    },
    category: {
      en: "Category",
      th: "หมวดหมู่"
    },
    categories: {
      material: {
        en: "Material Cost",
        th: "ต้นทุนวัสดุ"
      },
      labor: {
        en: "Labor Cost",
        th: "ต้นทุนแรงงาน"
      },
      equipment: {
        en: "Equipment Cost",
        th: "ต้นทุนอุปกรณ์"
      },
      other: {
        en: "Other Cost",
        th: "ต้นทุนอื่นๆ"
      }
    },
    addItem: {
      en: "Add Cost Item",
      th: "เพิ่มรายการต้นทุน"
    },
    totalCost: {
      en: "Total Project Cost",
      th: "ต้นทุนโครงการรวม"
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

  const [costItems, setCostItems] = useState(() => {
    const savedItems = localStorage.getItem('projectCostList');
    return savedItems ? JSON.parse(savedItems) : [
      { id: 1, name: '', amount: '', category: 'material', total: 0 }
    ];
  });
  
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    calculateTotalCost();
  }, [costItems]);

  useEffect(() => {
    localStorage.setItem('projectCostList', JSON.stringify(costItems));
  }, [costItems]);

  const handleAddItem = () => {
    setCostItems([
      ...costItems,
      { id: Date.now(), name: '', amount: '', category: 'material', total: 0 }
    ]);
  };

  const handleRemoveItem = (id) => {
    if (costItems.length > 1) {
      setCostItems(costItems.filter(item => item.id !== id));
    }
  };

  const handleItemChange = (id, field, value) => {
    const updatedItems = costItems.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        if (field === 'amount') {
          updatedItem.total = parseFloat(value) || 0;
        }
        return updatedItem;
      }
      return item;
    });
    setCostItems(updatedItems);
  };

  const calculateTotalCost = () => {
    const total = costItems.reduce((sum, item) => sum + (item.total || 0), 0);
    setTotalCost(total);
  };

  const handleSaveList = () => {
    const timestamp = new Date().toISOString().slice(0, 10);
    const filename = `project-cost-${timestamp}.json`;
    const data = JSON.stringify(costItems, null, 2);
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
          <div className="inline-block p-4 bg-purple-100 rounded-full mb-4">
            <FaChartBar className="text-4xl text-purple-600" />
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
            {/* Cost Items List */}
            <div className="space-y-6">
              {costItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 relative"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.costItem[language]}
                      </label>
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) => handleItemChange(item.id, 'name', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder={t.enterCostItem[language]}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.category[language]}
                      </label>
                      <select
                        value={item.category}
                        onChange={(e) => handleItemChange(item.id, 'category', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="material">{t.categories.material[language]}</option>
                        <option value="labor">{t.categories.labor[language]}</option>
                        <option value="equipment">{t.categories.equipment[language]}</option>
                        <option value="other">{t.categories.other[language]}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.amount[language]}
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                          ฿
                        </span>
                        <input
                          type="number"
                          value={item.amount}
                          onChange={(e) => handleItemChange(item.id, 'amount', e.target.value)}
                          className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-lg font-semibold text-purple-600">
                      {t.amount[language]}: ฿{item.total.toFixed(2)}
                    </div>
                    {costItems.length > 1 && (
                      <button
                        onClick={() => handleRemoveItem(item.id)}
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
                onClick={handleAddItem}
                className="py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
              >
                <FaPlus />
                {t.addItem[language]}
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
                className="py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
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
              className="mt-8 p-6 bg-purple-50 rounded-xl"
            >
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold text-gray-800">
                  {t.totalCost[language]}
                </div>
                <div className="text-3xl font-bold text-purple-600">
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

export default TotalProjectCost; 