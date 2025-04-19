import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCalculator, FaRuler, FaBuilding, FaMoneyBillWave, FaChevronRight,
  FaCubes, FaBars, FaLayerGroup, FaChartLine, FaTools, FaDrawPolygon,
  FaIndustry, FaWarehouse, FaHome, FaRoad, FaWater, FaHammer,
  FaTruck, FaHardHat, FaClipboardList, FaChartBar, FaUsers, FaCog
} from 'react-icons/fa';
import { useLanguage, translations } from '../contexts/LanguageContext';

const EngineeringTools = () => {
  const [activeTab, setActiveTab] = useState('material');
  const [activeSubTab, setActiveSubTab] = useState(null);
  const { language } = useLanguage();
  const t = translations.engineeringTools;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveSubTab(null);
  };

  const handleSubTabChange = (subTab) => {
    setActiveSubTab(subTab);
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">{t.title[language]}</h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Comprehensive engineering tools for construction and design calculations
        </p>
        
        {/* Main Tabs */}
        <div className="flex flex-wrap justify-center mb-8 gap-4">
          <button
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center ${
              activeTab === 'material' 
                ? 'bg-primary-main text-white shadow-lg transform scale-105' 
                : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md'
            }`}
            onClick={() => handleTabChange('material')}
          >
            <FaCubes className="text-xl mr-2" />
            {t.tabs.material[language]}
          </button>
          <button
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center ${
              activeTab === 'design' 
                ? 'bg-primary-main text-white shadow-lg transform scale-105' 
                : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md'
            }`}
            onClick={() => handleTabChange('design')}
          >
            <FaTools className="text-xl mr-2" />
            {t.tabs.design[language]}
          </button>
          <button
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center ${
              activeTab === 'area' 
                ? 'bg-primary-main text-white shadow-lg transform scale-105' 
                : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md'
            }`}
            onClick={() => handleTabChange('area')}
          >
            <FaDrawPolygon className="text-xl mr-2" />
            {t.tabs.area[language]}
          </button>
          <button
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center ${
              activeTab === 'cost' 
                ? 'bg-primary-main text-white shadow-lg transform scale-105' 
                : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md'
            }`}
            onClick={() => handleTabChange('cost')}
          >
            <FaChartBar className="text-xl mr-2" />
            {t.tabs.cost[language]}
          </button>
        </div>

        {/* Sub Tabs for Design */}
        {activeTab === 'design' && (
          <div className="flex flex-wrap justify-center mb-8 gap-3">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center ${
                activeSubTab === 'steel' 
                  ? 'bg-secondary-main text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-sm'
              }`}
              onClick={() => handleSubTabChange('steel')}
            >
              <FaIndustry className="mr-2" />
              {t.designSubTabs.steel[language]}
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center ${
                activeSubTab === 'rc' 
                  ? 'bg-secondary-main text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-sm'
              }`}
              onClick={() => handleSubTabChange('rc')}
            >
              <FaLayerGroup className="mr-2" />
              {t.designSubTabs.rc[language]}
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center ${
                activeSubTab === 'foundation' 
                  ? 'bg-secondary-main text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-sm'
              }`}
              onClick={() => handleSubTabChange('foundation')}
            >
              <FaHome className="mr-2" />
              {t.designSubTabs.foundation[language]}
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center ${
                activeSubTab === 'retaining' 
                  ? 'bg-secondary-main text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-sm'
              }`}
              onClick={() => handleSubTabChange('retaining')}
            >
              <FaRoad className="mr-2" />
              {t.designSubTabs.retaining[language]}
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center ${
                activeSubTab === 'precast' 
                  ? 'bg-secondary-main text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-sm'
              }`}
              onClick={() => handleSubTabChange('precast')}
            >
              <FaWarehouse className="mr-2" />
              {t.designSubTabs.precast[language]}
            </button>
          </div>
        )}

        {/* Tool Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Material & Quantity Tools */}
          {activeTab === 'material' && (
            <>
              <ToolCard 
                title="Concrete Calculator" 
                description={{
                  en: "Calculate concrete volume for slabs, footings, and columns.",
                  th: "คำนวณปริมาตรคอนกรีตสำหรับแผ่นพื้น, ฐานราก และเสา"
                }}
                link="/tools/concrete-calculator"
                language={language}
                icon={<FaCubes className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Steel Bar Calculator" 
                description={{
                  en: "Calculate reinforcement quantities for your construction projects.",
                  th: "คำนวณปริมาณเหล็กเสริมสำหรับโครงการก่อสร้าง"
                }}
                link="/tools/steel-bar-calculator"
                language={language}
                icon={<FaIndustry className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Steel Pipes Weight Calculator" 
                description={{
                  en: "Calculate the weight and quantity of steel pipes and structural sections.",
                  th: "คำนวณน้ำหนักและปริมาณท่อเหล็กและโครงสร้าง"
                }}
                link="/tools/steel-pipes-calculator"
                language={language}
                icon={<FaBars className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Bricks Calculator" 
                description={{
                  en: "Calculate brick quantities needed for walls and structures.",
                  th: "คำนวณปริมาณอิฐที่จำเป็นสำหรับผนังและโครงสร้าง"
                }}
                link="/tools/bricks-calculator"
                language={language}
                icon={<FaHome className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Plaster Calculator" 
                description={{
                  en: "Calculate plaster quantities for wall and ceiling finishes.",
                  th: "คำนวณปริมาณปูนฉาบสำหรับผนังและเพดาน"
                }}
                link="/tools/plaster-calculator"
                language={language}
                icon={<FaWater className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Paint Calculator" 
                description={{
                  en: "Calculate paint quantities for interior and exterior surfaces.",
                  th: "คำนวณปริมาณสีสำหรับพื้นผิวภายในและภายนอก"
                }}
                link="/tools/paint-calculator"
                language={language}
                icon={<FaWater className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Tiles Calculator" 
                description={{
                  en: "Calculate tile quantities for floors and walls.",
                  th: "คำนวณปริมาณกระเบื้องสำหรับพื้นและผนัง"
                }}
                link="/tools/tiles-calculator"
                language={language}
                icon={<FaLayerGroup className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Excavation Calculation" 
                description={{
                  en: "Calculate excavation volume and soil expansion for construction projects.",
                  th: "คำนวณปริมาตรการขุดดินและการขยายตัวของดินสำหรับโครงการก่อสร้าง"
                }}
                link="/tools/excavation-calculator"
                language={language}
                icon={<FaHammer className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Mortar Mix" 
                description={{
                  en: "Calculate mortar mix proportions for different applications.",
                  th: "คำนวณสัดส่วนการผสมปูนสำหรับการใช้งานต่างๆ"
                }}
                link="/tools/mortar-mix"
                language={language}
                icon={<FaTools className="text-3xl text-primary-main" />}
              />
            </>
          )}

          {/* Design Tools - Steel Design */}
          {activeTab === 'design' && activeSubTab === 'steel' && (
            <>
              <ToolCard 
                title="Steel Section Calculator" 
                description={{
                  en: "Design and analyze steel sections for various loading conditions.",
                  th: "ออกแบบและวิเคราะห์หน้าตัดเหล็กสำหรับเงื่อนไขการรับน้ำหนักต่างๆ"
                }}
                link="/tools/steel-section"
                language={language}
                icon={<FaIndustry className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Connection Design" 
                description={{
                  en: "Design steel connections for beams, columns, and braces.",
                  th: "ออกแบบการเชื่อมต่อเหล็กสำหรับคาน, เสา และโครงยึด"
                }}
                link="/tools/connection-design"
                language={language}
                icon={<FaTools className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Base Plate Calculator" 
                description={{
                  en: "Design column base plates for steel structures.",
                  th: "ออกแบบแผ่นฐานเสาสำหรับโครงสร้างเหล็ก"
                }}
                link="/tools/base-plate"
                language={language}
                icon={<FaHome className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Plate Calculator" 
                description={{
                  en: "Design steel plates for various structural applications.",
                  th: "ออกแบบแผ่นเหล็กสำหรับการใช้งานโครงสร้างต่างๆ"
                }}
                link="/tools/plate-calculator"
                language={language}
                icon={<FaLayerGroup className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Beam Plate Calculator" 
                description={{
                  en: "Design beam end plates for moment connections.",
                  th: "ออกแบบแผ่นปลายคานสำหรับการเชื่อมต่อแบบโมเมนต์"
                }}
                link="/tools/beam-plate-calculator"
                language={language}
                icon={<FaBars className="text-3xl text-primary-main" />}
              />
            </>
          )}

          {/* Design Tools - RC Design */}
          {activeTab === 'design' && activeSubTab === 'rc' && (
            <>
              <ToolCard 
                title="Beam Design Calculator" 
                description={{
                  en: "Design reinforced concrete beams for various loading conditions.",
                  th: "ออกแบบคานคอนกรีตเสริมเหล็กสำหรับเงื่อนไขการรับน้ำหนักต่างๆ"
                }}
                link="/tools/beam-design-calculator"
                language={language}
                icon={<FaBars className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Column Design Calculator" 
                description={{
                  en: "Design reinforced concrete columns for axial and bending loads.",
                  th: "ออกแบบเสาคอนกรีตเสริมเหล็กสำหรับแรงตามแนวแกนและแรงดัด"
                }}
                link="/tools/column-design-calculator"
                language={language}
                icon={<FaIndustry className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Slab Design Calculator" 
                description={{
                  en: "Design reinforced concrete slabs for various support conditions.",
                  th: "ออกแบบแผ่นพื้นคอนกรีตเสริมเหล็กสำหรับเงื่อนไขการรองรับต่างๆ"
                }}
                link="/tools/slab-design-calculator"
                language={language}
                icon={<FaLayerGroup className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Footing Design Calculator" 
                description={{
                  en: "Design reinforced concrete footings for columns and walls.",
                  th: "ออกแบบฐานรากคอนกรีตเสริมเหล็กสำหรับเสาและผนัง"
                }}
                link="/tools/footing-design-calculator"
                language={language}
                icon={<FaHome className="text-3xl text-primary-main" />}
              />
            </>
          )}

          {/* Design Tools - Foundation Design */}
          {activeTab === 'design' && activeSubTab === 'foundation' && (
            <>
              <ToolCard 
                title="Shallow Foundation Calculator" 
                description={{
                  en: "Design shallow foundations for various soil conditions.",
                  th: "ออกแบบฐานรากตื้นสำหรับสภาพดินต่างๆ"
                }}
                link="/tools/shallow-foundation-calculator"
                language={language}
                icon={<FaHome className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Deep Foundation Calculator" 
                description={{
                  en: "Design deep foundations for heavy structures.",
                  th: "ออกแบบฐานรากลึกสำหรับโครงสร้างหนัก"
                }}
                link="/tools/deep-foundation-calculator"
                language={language}
                icon={<FaHammer className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Pile Load Calculator" 
                description={{
                  en: "Calculate pile load capacity for different soil types.",
                  th: "คำนวณความสามารถในการรับน้ำหนักของเสาเข็มสำหรับดินประเภทต่างๆ"
                }}
                link="/tools/pile-load-calculator"
                language={language}
                icon={<FaTools className="text-3xl text-primary-main" />}
              />
            </>
          )}

          {/* Design Tools - Retaining Structure */}
          {activeTab === 'design' && activeSubTab === 'retaining' && (
            <>
              <ToolCard 
                title="Retaining Wall Design" 
                description={{
                  en: "Design retaining walls for various soil and loading conditions.",
                  th: "ออกแบบกำแพงกันดินสำหรับสภาพดินและเงื่อนไขการรับน้ำหนักต่างๆ"
                }}
                link="/tools/retaining-wall-design"
                language={language}
                icon={<FaRoad className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Sheet Pile Design" 
                description={{
                  en: "Design sheet piles for excavation support and waterfront structures.",
                  th: "ออกแบบเขื่อนกันดินสำหรับการรองรับการขุดและโครงสร้างริมน้ำ"
                }}
                link="/tools/sheet-pile-design"
                language={language}
                icon={<FaWater className="text-3xl text-primary-main" />}
              />
            </>
          )}

          {/* Design Tools - Precast Connection */}
          {activeTab === 'design' && activeSubTab === 'precast' && (
            <>
              <ToolCard 
                title="Precast Beam Connection" 
                description={{
                  en: "Design connections for precast concrete beams.",
                  th: "ออกแบบการเชื่อมต่อสำหรับคานคอนกรีตสำเร็จรูป"
                }}
                link="/tools/precast-beam-connection"
                language={language}
                icon={<FaWarehouse className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Precast Column Connection" 
                description={{
                  en: "Design connections for precast concrete columns.",
                  th: "ออกแบบการเชื่อมต่อสำหรับเสาคอนกรีตสำเร็จรูป"
                }}
                link="/tools/precast-column-connection"
                language={language}
                icon={<FaIndustry className="text-3xl text-primary-main" />}
              />
            </>
          )}

          {/* Design Tools - Default View */}
          {activeTab === 'design' && !activeSubTab && (
            <div className="col-span-full text-center py-8">
              <FaTools className="text-5xl text-gray-400 mx-auto mb-4" />
              <p className="text-lg text-gray-600">{t.selectCategory[language]}</p>
            </div>
          )}

          {/* Area Calculation Tools */}
          {activeTab === 'area' && (
            <>
              <ToolCard 
                title="Room Area" 
                description={{
                  en: "Calculate room areas for various room shapes.",
                  th: "คำนวณพื้นที่ห้องสำหรับรูปร่างห้องต่างๆ"
                }}
                link="/tools/room-area"
                language={language}
                icon={<FaHome className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Floor Area" 
                description={{
                  en: "Calculate floor areas for building design and planning.",
                  th: "คำนวณพื้นที่พื้นสำหรับการออกแบบและวางแผนอาคาร"
                }}
                link="/tools/floor-area"
                language={language}
                icon={<FaLayerGroup className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Roof Area" 
                description={{
                  en: "Calculate roof areas for various roof types.",
                  th: "คำนวณพื้นที่หลังคาสำหรับประเภทหลังคาต่างๆ"
                }}
                link="/tools/roof-area"
                language={language}
                icon={<FaHome className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Wall Area" 
                description={{
                  en: "Calculate wall areas for material estimation.",
                  th: "คำนวณพื้นที่ผนังสำหรับการประมาณการวัสดุ"
                }}
                link="/tools/wall-area"
                language={language}
                icon={<FaRoad className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Land Area" 
                description={{
                  en: "Calculate land areas for property development.",
                  th: "คำนวณพื้นที่ดินสำหรับการพัฒนาอสังหาริมทรัพย์"
                }}
                link="/tools/land-area"
                language={language}
                icon={<FaDrawPolygon className="text-3xl text-primary-main" />}
              />
            </>
          )}

          {/* Cost Calculation Tools */}
          {activeTab === 'cost' && (
            <>
              <ToolCard 
                title="Material Cost Calculator" 
                description={{
                  en: "Calculate and manage material costs for construction projects with detailed breakdowns.",
                  th: "คำนวณและจัดการต้นทุนวัสดุสำหรับโครงการก่อสร้างพร้อมรายละเอียดแยกตามรายการ"
                }}
                link="/tools/material-cost"
                language={language}
                icon={<FaTruck className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Labor Cost" 
                description={{
                  en: "Calculate labor costs for construction activities.",
                  th: "คำนวณต้นทุนแรงงานสำหรับกิจกรรมการก่อสร้าง"
                }}
                link="/tools/labor-cost"
                language={language}
                icon={<FaUsers className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Equipment Cost" 
                description={{
                  en: "Calculate equipment costs for construction operations.",
                  th: "คำนวณต้นทุนอุปกรณ์สำหรับการดำเนินงานก่อสร้าง"
                }}
                link="/tools/equipment-cost"
                language={language}
                icon={<FaCog className="text-3xl text-primary-main" />}
              />
              <ToolCard 
                title="Total Project Cost" 
                description={{
                  en: "Calculate total project costs including all components.",
                  th: "คำนวณต้นทุนโครงการทั้งหมดรวมถึงทุกองค์ประกอบ"
                }}
                link="/tools/total-project-cost"
                language={language}
                icon={<FaChartBar className="text-3xl text-primary-main" />}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Tool Card Component
const ToolCard = ({ title, description, link, language, icon }) => {
  const t = translations.engineeringTools;
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-gray-50 rounded-lg mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description[language]}</p>
      <Link 
        to={link} 
        className="text-primary-main font-medium hover:text-primary-dark flex items-center group"
      >
        {t.useTool[language]} 
        <FaChevronRight className="ml-1 transform group-hover:translate-x-1 transition-transform" size={14} />
      </Link>
    </div>
  );
};

export default EngineeringTools;
