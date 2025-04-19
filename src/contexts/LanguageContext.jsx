import React, { createContext, useContext, useState, useEffect } from 'react';

// Create language context
const LanguageContext = createContext();

// Language provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('th');

  // Update localStorage when language changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  const value = {
    language,
    setLanguage,
    translations
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translations object
export const translations = {
  // Navbar
  nav: {
    home: {
      en: 'Home',
      th: 'หน้าหลัก'
    },
    engineeringTools: {
      en: 'Engineering Tools',
      th: 'เครื่องมือวิศวกรรม'
    },
    documentLibrary: {
      en: 'Document Library',
      th: 'คลังเอกสาร'
    },
    precastSystem: {
      en: 'Precast System',
      th: 'ระบบพรีคาสท์'
    },
    courses: {
      en: 'Courses',
      th: 'Courses'
    },
    marketplace: {
      en: 'Marketplace',
      th: 'Marketplace'
    },
    login: {
      en: 'Login',
      th: 'เข้าสู่ระบบ'
    },
    signUp: {
      en: 'Sign Up',
      th: 'สมัครสมาชิก'
    }
  },
  
  // Homepage
  home: {
    hero: {
      title: {
        en: 'The Ultimate Platform for Engineering & Construction Professionals',
        th: 'แพลตฟอร์มสำหรับผู้เชี่ยวชาญด้านวิศวกรรมและการก่อสร้าง'
      },
      subtitle: {
        en: 'Streamline your workflow with our comprehensive suite of engineering tools, document library, and precast solutions.',
        th: 'เพิ่มประสิทธิภาพการทำงานด้วยชุดเครื่องมือวิศวกรรม คลังเอกสาร และโซลูชันพรีคาสท์ที่ครบครัน'
      },
      exploreTools: {
        en: 'Explore Tools',
        th: 'สำรวจเครื่องมือ'
      },
      signUpFree: {
        en: 'Sign Up Free',
        th: 'สมัครฟรี'
      }
    },
    features: {
      title: {
        en: 'Key Features',
        th: 'คุณสมบัติหลัก'
      },
      engineeringTools: {
        title: {
          en: 'Engineering Tools',
          th: 'เครื่องมือวิศวกรรม'
        },
        description: {
          en: 'Access a comprehensive suite of calculation tools for material quantities, structural design, area calculations, and cost estimations.',
          th: 'เข้าถึงชุดเครื่องมือคำนวณสำหรับปริมาณวัสดุ การออกแบบโครงสร้าง การคำนวณพื้นที่ และการประมาณราคา'
        },
        link: {
          en: 'Explore Tools →',
          th: 'สำรวจเครื่องมือ →'
        }
      },
      documentLibrary: {
        title: {
          en: 'Document Library',
          th: 'คลังเอกสาร'
        },
        description: {
          en: 'Access essential spreadsheets, construction standards, design manuals, and reference documents for your projects.',
          th: 'เข้าถึงสเปรดชีต มาตรฐานการก่อสร้าง คู่มือการออกแบบ และเอกสารอ้างอิงสำหรับโครงการของคุณ'
        },
        link: {
          en: 'Browse Library →',
          th: 'เรียกดูคลัง →'
        }
      },
      precastSolutions: {
        title: {
          en: 'Precast Solutions',
          th: 'โซลูชันพรีคาสท์'
        },
        description: {
          en: 'Utilize our AI-powered structural analysis, auto report generation, BIM data processing, and construction scheduling.',
          th: 'ใช้การวิเคราะห์โครงสร้างด้วย AI การสร้างรายงานอัตโนมัติ การประมวลผลข้อมูล BIM และการจัดตารางการก่อสร้าง'
        },
        link: {
          en: 'Learn More →',
          th: 'เรียนรู้เพิ่มเติม →'
        }
      }
    },
    news: {
      title: {
        en: 'News & Updates',
        th: 'ข่าวสารและอัปเดต'
      },
      viewAll: {
        en: 'View All',
        th: 'ดูทั้งหมด'
      },
      readMore: {
        en: 'Read More →',
        th: 'อ่านเพิ่มเติม →'
      }
    },
    events: {
      title: {
        en: 'Upcoming Events',
        th: 'กิจกรรมที่กำลังจะมาถึง'
      },
      viewAll: {
        en: 'View All',
        th: 'ดูทั้งหมด'
      },
      registerNow: {
        en: 'Register Now →',
        th: 'ลงทะเบียนตอนนี้ →'
      }
    },
    cta: {
      title: {
        en: 'Ready to Streamline Your Engineering Workflow?',
        th: 'พร้อมที่จะเพิ่มประสิทธิภาพการทำงานด้านวิศวกรรมของคุณหรือไม่?'
      },
      subtitle: {
        en: 'Join thousands of engineering and construction professionals who trust ToolCivil.com for their daily work.',
        th: 'เข้าร่วมกับผู้เชี่ยวชาญด้านวิศวกรรมและการก่อสร้างนับพันที่ไว้วางใจ ToolCivil.com สำหรับการทำงานประจำวัน'
      },
      getStarted: {
        en: 'Get Started Free',
        th: 'เริ่มต้นฟรี'
      },
      contactSales: {
        en: 'Contact Sales',
        th: 'ติดต่อฝ่ายขาย'
      }
    }
  },
  
  // Engineering Tools
  engineeringTools: {
    title: {
      en: 'Engineering Tools',
      th: 'เครื่องมือวิศวกรรม'
    },
    tabs: {
      material: {
        en: 'Material & Quantity',
        th: 'วัสดุและปริมาณ'
      },
      design: {
        en: 'Design',
        th: 'ออกแบบโครงสร้าง'
      },
      area: {
        en: 'Area Calculation',
        th: 'คำนวณพื้นที่'
      },
      cost: {
        en: 'Cost Calculation',
        th: 'คำนวณต้นทุน'
      }
    },
    designSubTabs: {
      steel: {
        en: 'Steel Design',
        th: 'ออกแบบโครงสร้างเหล็ก'
      },
      rc: {
        en: 'RC Design',
        th: 'ออกแบบคอนกรีตเสริมเหล็ก'
      },
      foundation: {
        en: 'Foundation Design',
        th: 'ออกแบบฐานราก'
      },
      retaining: {
        en: 'Retaining Structure',
        th: 'ออกแบบกำแพงกันดิน'
      },
      precast: {
        en: 'Precast Connection',
        th: 'การเชื่อมต่อโครงสร้างสำเร็จรูป'
      }
    },
    useTool: {
      en: 'Use Tool',
      th: 'ใช้เครื่องมือ'
    },
    selectCategory: {
      en: 'Please select a design category from the options above.',
      th: 'โปรดเลือกหมวดหมู่การออกแบบจากตัวเลือกด้านบน'
    },
    backToTools: {
      en: 'Back to Engineering Tools',
      th: 'กลับไปที่เครื่องมือวิศวกรรม'
    },
    concreteCalculator: {
      title: {
        en: 'Concrete Volume Calculator',
        th: 'เครื่องคำนวณปริมาตรคอนกรีต'
      },
      length: {
        en: 'Length',
        th: 'ความยาว'
      },
      width: {
        en: 'Width',
        th: 'ความกว้าง'
      },
      thickness: {
        en: 'Thickness',
        th: 'ความหนา'
      },
      quantity: {
        en: 'Number of Elements',
        th: 'จำนวนชิ้น'
      },
      results: {
        en: 'Calculation Results',
        th: 'ผลการคำนวณ'
      },
      totalVolume: {
        en: 'Total Concrete Volume',
        th: 'ปริมาตรคอนกรีตทั้งหมด'
      },
      estimatedBags: {
        en: 'Estimated Cement Bags Needed',
        th: 'จำนวนกระสอบปูนซีเมนต์ที่ต้องการ'
      },
      bags: {
        en: 'bags',
        th: 'กระสอบ'
      },
      note: {
        en: 'Note: 1 bag of cement = 0.025 m³ (standard 50kg bag)',
        th: 'หมายเหตุ: 1 กระสอบปูนซีเมนต์ = 0.025 ลูกบาศก์เมตร (กระสอบมาตรฐาน 50 กก.)'
      }
    }
  },
  
  // Footer
  footer: {
    company: {
      title: {
        en: 'Company',
        th: 'บริษัท'
      },
      about: {
        en: 'About Us',
        th: 'เกี่ยวกับเรา'
      },
      careers: {
        en: 'Careers',
        th: 'ร่วมงานกับเรา'
      },
      contact: {
        en: 'Contact',
        th: 'ติดต่อ'
      }
    },
    products: {
      title: {
        en: 'Products',
        th: 'ผลิตภัณฑ์'
      },
      engineeringTools: {
        en: 'Engineering Tools',
        th: 'เครื่องมือวิศวกรรม'
      },
      certification: {
        en: 'Certification Programs',
        th: 'โปรแกรมการรับรอง'
      },
      community: {
        en: 'Community Tools',
        th: 'เครื่องมือชุมชน'
      }
    },
    resources: {
      title: {
        en: 'Resources',
        th: 'ทรัพยากร'
      },
      documentation: {
        en: 'Documentation',
        th: 'เอกสาร'
      },
      blog: {
        en: 'Blog',
        th: 'บล็อก'
      },
      support: {
        en: 'Support',
        th: 'การสนับสนุน'
      }
    },
    copyright: {
      en: 'All rights reserved.',
      th: 'สงวนลิขสิทธิ์ทั้งหมด'
    }
  },
  
  // Language Switcher
  languageSwitcher: {
    th: 'ภาษา',
    en: 'Language'
  },

  materialCost: {
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
    }
  },

  roomArea: {
    title: {
      en: "Room Area Calculator",
      th: "เครื่องคำนวณพื้นที่ห้อง"
    },
    description: {
      en: "Calculate the area and volume of a room by entering its dimensions.",
      th: "คำนวณพื้นที่และปริมาตรของห้องโดยการป้อนขนาด"
    },
    length: {
      en: "Length (m)",
      th: "ความยาว (เมตร)"
    },
    width: {
      en: "Width (m)",
      th: "ความกว้าง (เมตร)"
    },
    height: {
      en: "Height (m)",
      th: "ความสูง (เมตร)"
    },
    calculate: {
      en: "Calculate",
      th: "คำนวณ"
    },
    results: {
      en: "Results",
      th: "ผลลัพธ์"
    },
    area: {
      en: "Floor Area",
      th: "พื้นที่พื้น"
    },
    volume: {
      en: "Room Volume",
      th: "ปริมาตรห้อง"
    },
    backToTools: {
      en: "Back to Engineering Tools",
      th: "กลับไปที่เครื่องมือวิศวกรรม"
    }
  },

  floorArea: {
    title: {
      en: "Floor Area Calculator",
      th: "เครื่องคำนวณพื้นที่พื้น"
    },
    description: {
      en: "Calculate the floor area and total building area for multi-story buildings.",
      th: "คำนวณพื้นที่พื้นและพื้นที่อาคารรวมสำหรับอาคารหลายชั้น"
    },
    length: {
      en: "Length (m)",
      th: "ความยาว (เมตร)"
    },
    width: {
      en: "Width (m)",
      th: "ความกว้าง (เมตร)"
    },
    numberOfFloors: {
      en: "Number of Floors",
      th: "จำนวนชั้น"
    },
    calculate: {
      en: "Calculate",
      th: "คำนวณ"
    },
    results: {
      en: "Results",
      th: "ผลลัพธ์"
    },
    floorArea: {
      en: "Floor Area",
      th: "พื้นที่พื้น"
    },
    totalArea: {
      en: "Total Building Area",
      th: "พื้นที่อาคารรวม"
    },
    backToTools: {
      en: "Back to Engineering Tools",
      th: "กลับไปที่เครื่องมือวิศวกรรม"
    }
  },

  roofArea: {
    title: {
      en: "Roof Area Calculator",
      th: "เครื่องคำนวณพื้นที่หลังคา"
    },
    description: {
      en: "Calculate the total roof area including pitch angle for accurate material estimation.",
      th: "คำนวณพื้นที่หลังคารวมโดยคำนึงถึงมุมลาดเอียงเพื่อการประมาณวัสดุที่แม่นยำ"
    },
    length: {
      en: "Length (m)",
      th: "ความยาว (เมตร)"
    },
    width: {
      en: "Width (m)",
      th: "ความกว้าง (เมตร)"
    },
    pitch: {
      en: "Pitch Angle (degrees)",
      th: "มุมลาดเอียง (องศา)"
    },
    calculate: {
      en: "Calculate",
      th: "คำนวณ"
    },
    results: {
      en: "Results",
      th: "ผลลัพธ์"
    },
    roofArea: {
      en: "Total Roof Area",
      th: "พื้นที่หลังคารวม"
    },
    backToTools: {
      en: "Back to Engineering Tools",
      th: "กลับไปที่เครื่องมือวิศวกรรม"
    }
  },

  wallArea: {
    title: {
      en: "Wall Area Calculator",
      th: "เครื่องคำนวณพื้นที่ผนัง"
    },
    description: {
      en: "Calculate the total wall area for material estimation and cost planning.",
      th: "คำนวณพื้นที่ผนังรวมสำหรับการประมาณวัสดุและการวางแผนต้นทุน"
    },
    length: {
      en: "Length (m)",
      th: "ความยาว (เมตร)"
    },
    height: {
      en: "Height (m)",
      th: "ความสูง (เมตร)"
    },
    numberOfWalls: {
      en: "Number of Walls",
      th: "จำนวนผนัง"
    },
    calculate: {
      en: "Calculate",
      th: "คำนวณ"
    },
    results: {
      en: "Results",
      th: "ผลลัพธ์"
    },
    wallArea: {
      en: "Total Wall Area",
      th: "พื้นที่ผนังรวม"
    },
    backToTools: {
      en: "Back to Engineering Tools",
      th: "กลับไปที่เครื่องมือวิศวกรรม"
    }
  },

  landArea: {
    title: {
      en: "Land Area Calculator",
      th: "เครื่องคำนวณพื้นที่ดิน"
    },
    description: {
      en: "Calculate land areas in different units including square meters, rai, and square wa.",
      th: "คำนวณพื้นที่ดินในหน่วยต่างๆ รวมถึงตารางเมตร ไร่ และตารางวา"
    },
    length: {
      en: "Length (m)",
      th: "ความยาว (เมตร)"
    },
    width: {
      en: "Width (m)",
      th: "ความกว้าง (เมตร)"
    },
    unit: {
      en: "Unit",
      th: "หน่วย"
    },
    units: {
      meter: {
        en: "Square Meters",
        th: "ตารางเมตร"
      },
      rai: {
        en: "Rai",
        th: "ไร่"
      },
      wa: {
        en: "Square Wa",
        th: "ตารางวา"
      }
    },
    calculate: {
      en: "Calculate",
      th: "คำนวณ"
    },
    results: {
      en: "Results",
      th: "ผลลัพธ์"
    },
    landArea: {
      en: "Total Land Area",
      th: "พื้นที่ดินรวม"
    },
    backToTools: {
      en: "Back to Engineering Tools",
      th: "กลับไปที่เครื่องมือวิศวกรรม"
    }
  },

  steelSection: {
    title: {
      en: "Steel Section Calculator",
      th: "เครื่องคำนวณหน้าตัดเหล็ก"
    },
    description: {
      en: "Calculate the properties of steel sections including cross-sectional area, volume, and weight.",
      th: "คำนวณคุณสมบัติของหน้าตัดเหล็ก รวมถึงพื้นที่หน้าตัด ปริมาตร และน้ำหนัก"
    },
    sectionType: {
      en: "Section Type",
      th: "ประเภทหน้าตัด"
    },
    height: {
      en: "Height (mm)",
      th: "ความสูง (มิลลิเมตร)"
    },
    width: {
      en: "Width (mm)",
      th: "ความกว้าง (มิลลิเมตร)"
    },
    thickness: {
      en: "Thickness (mm)",
      th: "ความหนา (มิลลิเมตร)"
    },
    length: {
      en: "Length (m)",
      th: "ความยาว (เมตร)"
    },
    calculate: {
      en: "Calculate",
      th: "คำนวณ"
    },
    results: {
      en: "Results",
      th: "ผลลัพธ์"
    },
    crossSectionalArea: {
      en: "Cross-sectional Area",
      th: "พื้นที่หน้าตัด"
    },
    volume: {
      en: "Volume",
      th: "ปริมาตร"
    },
    weight: {
      en: "Weight",
      th: "น้ำหนัก"
    },
    backToTools: {
      en: "Back to Engineering Tools",
      th: "กลับไปที่เครื่องมือวิศวกรรม"
    }
  },

  connectionDesign: {
    title: {
      en: "Connection Design",
      th: "ออกแบบการเชื่อมต่อ"
    },
    description: {
      en: "Design steel connections for beams, columns, and braces with detailed calculations.",
      th: "ออกแบบการเชื่อมต่อเหล็กสำหรับคาน เสา และโครงยึด พร้อมการคำนวณโดยละเอียด"
    },
    connectionType: {
      en: "Connection Type",
      th: "ประเภทการเชื่อมต่อ"
    },
    connectionTypes: {
      bolted: {
        en: "Bolted Connection",
        th: "การเชื่อมต่อด้วยสลักเกลียว"
      },
      welded: {
        en: "Welded Connection",
        th: "การเชื่อมต่อด้วยการเชื่อม"
      }
    },
    plateThickness: {
      en: "Plate Thickness (mm)",
      th: "ความหนาแผ่นเหล็ก (มม.)"
    },
    boltDiameter: {
      en: "Bolt Diameter (mm)",
      th: "เส้นผ่านศูนย์กลางสลักเกลียว (มม.)"
    },
    numberOfBolts: {
      en: "Number of Bolts",
      th: "จำนวนสลักเกลียว"
    },
    steelGrade: {
      en: "Steel Grade",
      th: "เกรดเหล็ก"
    },
    calculate: {
      en: "Calculate",
      th: "คำนวณ"
    },
    results: {
      en: "Results",
      th: "ผลลัพธ์"
    },
    boltShearCapacity: {
      en: "Bolt Shear Capacity",
      th: "ความสามารถในการรับแรงเฉือนของสลักเกลียว"
    },
    plateBearingCapacity: {
      en: "Plate Bearing Capacity",
      th: "ความสามารถในการรับแรงกดของแผ่นเหล็ก"
    },
    designCapacity: {
      en: "Design Capacity",
      th: "ความสามารถในการรับแรงออกแบบ"
    },
    backToTools: {
      en: "Back to Engineering Tools",
      th: "กลับไปที่เครื่องมือวิศวกรรม"
    }
  },

  basePlate: {
    title: {
      en: "Base Plate Calculator",
      th: "เครื่องคำนวณแผ่นฐานเสา"
    },
    description: {
      en: "Design column base plates for steel structures with detailed calculations.",
      th: "ออกแบบแผ่นฐานเสาสำหรับโครงสร้างเหล็กพร้อมการคำนวณโดยละเอียด"
    },
    columnSection: {
      en: "Column Section",
      th: "หน้าตัดเสา"
    },
    columnSize: {
      en: "Column Size (mm)",
      th: "ขนาดเสา (มม.)"
    },
    axialLoad: {
      en: "Axial Load (kN)",
      th: "แรงตามแนวแกน (กิโลนิวตัน)"
    },
    moment: {
      en: "Moment (kN⋅m)",
      th: "โมเมนต์ดัด (กิโลนิวตัน-เมตร)"
    },
    concreteStrength: {
      en: "Concrete Strength",
      th: "กำลังอัดคอนกรีต"
    },
    plateThickness: {
      en: "Plate Thickness (mm)",
      th: "ความหนาแผ่นเหล็ก (มม.)"
    },
    calculate: {
      en: "Calculate",
      th: "คำนวณ"
    },
    results: {
      en: "Results",
      th: "ผลลัพธ์"
    },
    requiredPlateSize: {
      en: "Required Plate Size",
      th: "ขนาดแผ่นเหล็กที่ต้องการ"
    },
    minimumThickness: {
      en: "Minimum Thickness",
      th: "ความหนาต่ำสุด"
    },
    bearingCapacity: {
      en: "Bearing Capacity",
      th: "ความสามารถในการรับแรงกด"
    },
    momentCapacity: {
      en: "Moment Capacity",
      th: "ความสามารถในการรับโมเมนต์"
    },
    backToTools: {
      en: "Back to Engineering Tools",
      th: "กลับไปที่เครื่องมือวิศวกรรม"
    }
  },

  plate: {
    title: {
      en: "Plate Calculator",
      th: "เครื่องคำนวณแผ่นเหล็ก"
    },
    description: {
      en: "Calculate plate properties and stresses for steel plate design.",
      th: "คำนวณคุณสมบัติและความเค้นของแผ่นเหล็กสำหรับการออกแบบ"
    },
    plateType: {
      en: "Plate Type",
      th: "ประเภทแผ่นเหล็ก"
    },
    plateTypes: {
      rectangular: {
        en: "Rectangular Plate",
        th: "แผ่นเหล็กสี่เหลี่ยม"
      },
      circular: {
        en: "Circular Plate",
        th: "แผ่นเหล็กวงกลม"
      }
    },
    length: {
      en: "Length (mm)",
      th: "ความยาว (มม.)"
    },
    width: {
      en: "Width (mm)",
      th: "ความกว้าง (มม.)"
    },
    thickness: {
      en: "Thickness (mm)",
      th: "ความหนา (มม.)"
    },
    loadType: {
      en: "Load Type",
      th: "ประเภทของแรง"
    },
    loadTypes: {
      uniform: {
        en: "Uniform Load",
        th: "แรงกระจายสม่ำเสมอ"
      },
      point: {
        en: "Point Load",
        th: "แรงกระทำจุด"
      }
    },
    loadValue: {
      en: "Load Value (kN)",
      th: "ค่าแรง (กิโลนิวตัน)"
    },
    calculate: {
      en: "Calculate",
      th: "คำนวณ"
    },
    results: {
      en: "Results",
      th: "ผลลัพธ์"
    },
    plateArea: {
      en: "Plate Area",
      th: "พื้นที่แผ่นเหล็ก"
    },
    maxStress: {
      en: "Maximum Stress",
      th: "ความเค้นสูงสุด"
    },
    maxDeflection: {
      en: "Maximum Deflection",
      th: "การแอ่นตัวสูงสุด"
    },
    allowableStress: {
      en: "Allowable Stress",
      th: "ความเค้นที่ยอมให้"
    },
    backToTools: {
      en: "Back to Engineering Tools",
      th: "กลับไปที่เครื่องมือวิศวกรรม"
    }
  },

  beamPlate: {
    title: {
      en: "Beam Plate Calculator",
      th: "เครื่องคำนวณแผ่นปลายคาน"
    },
    description: {
      en: "Design beam end plates for moment connections with detailed calculations.",
      th: "ออกแบบแผ่นปลายคานสำหรับการเชื่อมต่อแบบโมเมนต์พร้อมการคำนวณโดยละเอียด"
    },
    beamSection: {
      en: "Beam Section",
      th: "หน้าตัดคาน"
    },
    beamDepth: {
      en: "Beam Depth (mm)",
      th: "ความลึกคาน (มม.)"
    },
    beamWidth: {
      en: "Beam Width (mm)",
      th: "ความกว้างคาน (มม.)"
    },
    plateThickness: {
      en: "Plate Thickness (mm)",
      th: "ความหนาแผ่นเหล็ก (มม.)"
    },
    boltDiameter: {
      en: "Bolt Diameter (mm)",
      th: "เส้นผ่านศูนย์กลางสลักเกลียว (มม.)"
    },
    numberOfBolts: {
      en: "Number of Bolts",
      th: "จำนวนสลักเกลียว"
    },
    steelGrade: {
      en: "Steel Grade",
      th: "เกรดเหล็ก"
    },
    momentLoad: {
      en: "Moment Load (kN⋅m)",
      th: "โมเมนต์ดัด (กิโลนิวตัน-เมตร)"
    },
    calculate: {
      en: "Calculate",
      th: "คำนวณ"
    },
    results: {
      en: "Results",
      th: "ผลลัพธ์"
    },
    plateHeight: {
      en: "Required Plate Height",
      th: "ความสูงแผ่นเหล็กที่ต้องการ"
    },
    plateWidth: {
      en: "Required Plate Width",
      th: "ความกว้างแผ่นเหล็กที่ต้องการ"
    },
    boltForce: {
      en: "Bolt Force",
      th: "แรงในสลักเกลียว"
    },
    boltShearCapacity: {
      en: "Bolt Shear Capacity",
      th: "ความสามารถในการรับแรงเฉือนของสลักเกลียว"
    },
    momentCapacity: {
      en: "Moment Capacity",
      th: "ความสามารถในการรับโมเมนต์"
    },
    backToTools: {
      en: "Back to Engineering Tools",
      th: "กลับไปที่เครื่องมือวิศวกรรม"
    }
  },

  beamDesign: {
    title: {
      en: "Beam Design Calculator",
      th: "เครื่องคำนวณออกแบบคาน"
    },
    description: {
      en: "Design reinforced concrete beams with detailed calculations for flexural and shear reinforcement.",
      th: "ออกแบบคานคอนกรีตเสริมเหล็กพร้อมการคำนวณเหล็กเสริมรับแรงดัดและแรงเฉือนโดยละเอียด"
    },
    beamWidth: {
      en: "Beam Width (mm)",
      th: "ความกว้างคาน (มม.)"
    },
    beamDepth: {
      en: "Beam Depth (mm)",
      th: "ความลึกคาน (มม.)"
    },
    effectiveDepth: {
      en: "Effective Depth (mm)",
      th: "ความลึกประสิทธิผล (มม.)"
    },
    concreteGrade: {
      en: "Concrete Grade",
      th: "กำลังอัดคอนกรีต"
    },
    steelGrade: {
      en: "Steel Grade",
      th: "ชั้นคุณภาพเหล็ก"
    },
    momentLoad: {
      en: "Moment Load (kN⋅m)",
      th: "โมเมนต์ดัด (กิโลนิวตัน-เมตร)"
    },
    shearForce: {
      en: "Shear Force (kN)",
      th: "แรงเฉือน (กิโลนิวตัน)"
    },
    beamLength: {
      en: "Beam Length (m)",
      th: "ความยาวคาน (เมตร)"
    },
    calculate: {
      en: "Calculate",
      th: "คำนวณ"
    },
    results: {
      en: "Results",
      th: "ผลลัพธ์"
    },
    steelArea: {
      en: "Required Steel Area",
      th: "พื้นที่หน้าตัดเหล็กเสริมที่ต้องการ"
    },
    requiredBars: {
      en: "Required Bars",
      th: "จำนวนเหล็กเสริม"
    },
    shearReinforcement: {
      en: "Shear Reinforcement",
      th: "เหล็กเสริมรับแรงเฉือน"
    },
    minimumSpacing: {
      en: "Minimum Spacing",
      th: "ระยะห่างต่ำสุด"
    },
    momentCapacity: {
      en: "Moment Capacity",
      th: "ความสามารถในการรับโมเมนต์"
    },
    backToTools: {
      en: "Back to Engineering Tools",
      th: "กลับไปที่เครื่องมือวิศวกรรม"
    }
  },

  columnDesign: {
    title: {
      en: "Column Design Calculator",
      th: "เครื่องคำนวณออกแบบเสา"
    },
    description: {
      en: "Design reinforced concrete columns for axial and bending loads with detailed calculations.",
      th: "ออกแบบเสาคอนกรีตเสริมเหล็กสำหรับแรงตามแนวแกนและแรงดัดพร้อมการคำนวณโดยละเอียด"
    },
    columnWidth: {
      en: "Column Width (mm)",
      th: "ความกว้างเสา (มม.)"
    },
    columnDepth: {
      en: "Column Depth (mm)",
      th: "ความลึกเสา (มม.)"
    },
    effectiveLength: {
      en: "Effective Length (mm)",
      th: "ความยาวประสิทธิผล (มม.)"
    },
    concreteGrade: {
      en: "Concrete Grade",
      th: "กำลังอัดคอนกรีต"
    },
    steelGrade: {
      en: "Steel Grade",
      th: "ชั้นคุณภาพเหล็ก"
    },
    axialLoad: {
      en: "Axial Load (kN)",
      th: "แรงตามแนวแกน (กิโลนิวตัน)"
    },
    momentX: {
      en: "Moment X (kN⋅m)",
      th: "โมเมนต์ดัด X (กิโลนิวตัน-เมตร)"
    },
    momentY: {
      en: "Moment Y (kN⋅m)",
      th: "โมเมนต์ดัด Y (กิโลนิวตัน-เมตร)"
    },
    columnLength: {
      en: "Column Length (m)",
      th: "ความยาวเสา (เมตร)"
    },
    calculate: {
      en: "Calculate",
      th: "คำนวณ"
    },
    results: {
      en: "Results",
      th: "ผลลัพธ์"
    },
    steelArea: {
      en: "Required Steel Area",
      th: "พื้นที่หน้าตัดเหล็กเสริมที่ต้องการ"
    },
    requiredBars: {
      en: "Required Bars",
      th: "จำนวนเหล็กเสริม"
    },
    slendernessRatio: {
      en: "Slenderness Ratio",
      th: "อัตราส่วนความเรียว"
    },
    momentCapacityX: {
      en: "Moment Capacity X",
      th: "ความสามารถในการรับโมเมนต์ X"
    },
    momentCapacityY: {
      en: "Moment Capacity Y",
      th: "ความสามารถในการรับโมเมนต์ Y"
    },
    backToTools: {
      en: "Back to Engineering Tools",
      th: "กลับไปที่เครื่องมือวิศวกรรม"
    }
  },

  slabDesign: {
    title: {
      en: "Slab Design Calculator",
      th: "เครื่องคำนวณออกแบบแผ่นพื้น"
    },
    description: {
      en: "Design reinforced concrete slabs with detailed calculations for flexural reinforcement and deflection.",
      th: "ออกแบบแผ่นพื้นคอนกรีตเสริมเหล็กพร้อมการคำนวณเหล็กเสริมรับแรงดัดและการแอ่นตัวโดยละเอียด"
    },
    slabLength: {
      en: "Slab Length (m)",
      th: "ความยาวแผ่นพื้น (เมตร)"
    },
    slabWidth: {
      en: "Slab Width (m)",
      th: "ความกว้างแผ่นพื้น (เมตร)"
    },
    slabThickness: {
      en: "Slab Thickness (mm)",
      th: "ความหนาแผ่นพื้น (มิลลิเมตร)"
    },
    concreteGrade: {
      en: "Concrete Grade",
      th: "กำลังอัดคอนกรีต"
    },
    steelGrade: {
      en: "Steel Grade",
      th: "ชั้นคุณภาพเหล็ก"
    },
    liveLoad: {
      en: "Live Load (kN/m²)",
      th: "น้ำหนักบรรทุกจร (กิโลนิวตัน/ตารางเมตร)"
    },
    deadLoad: {
      en: "Dead Load (kN/m²)",
      th: "น้ำหนักบรรทุกคงที่ (กิโลนิวตัน/ตารางเมตร)"
    },
    supportCondition: {
      en: "Support Condition",
      th: "เงื่อนไขการรองรับ"
    },
    supportTypes: {
      fourSides: {
        en: "Four Sides Supported",
        th: "รองรับทั้งสี่ด้าน"
      },
      twoSides: {
        en: "Two Sides Supported",
        th: "รองรับสองด้าน"
      },
      cantilever: {
        en: "Cantilever",
        th: "คานยื่น"
      }
    },
    cover: {
      en: "Concrete Cover (mm)",
      th: "ระยะหุมคอนกรีต (มิลลิเมตร)"
    },
    calculate: {
      en: "Calculate",
      th: "คำนวณ"
    },
    results: {
      en: "Results",
      th: "ผลลัพธ์"
    },
    totalLoad: {
      en: "Total Load",
      th: "น้ำหนักรวม"
    },
    moment: {
      en: "Design Moment",
      th: "โมเมนต์ดัดออกแบบ"
    },
    steelArea: {
      en: "Required Steel Area",
      th: "พื้นที่หน้าตัดเหล็กเสริมที่ต้องการ"
    },
    requiredBars: {
      en: "Required Bars",
      th: "จำนวนเหล็กเสริม"
    },
    barSpacing: {
      en: "Bar Spacing",
      th: "ระยะห่างเหล็กเสริม"
    },
    deflection: {
      en: "Maximum Deflection",
      th: "การแอ่นตัวสูงสุด"
    },
    backToTools: {
      en: "Back to Engineering Tools",
      th: "กลับไปที่เครื่องมือวิศวกรรม"
    }
  },

  footingDesign: {
    title: {
      en: "Footing Design Calculator",
      th: "เครื่องคำนวณออกแบบฐานราก"
    },
    description: {
      en: "Design reinforced concrete footings for columns with detailed calculations for bearing pressure, punching shear, and reinforcement.",
      th: "ออกแบบฐานรากคอนกรีตเสริมเหล็กสำหรับเสาพร้อมการคำนวณความดันดิน การเฉือนทะลุ และเหล็กเสริมโดยละเอียด"
    },
    columnWidth: {
      en: "Column Width (mm)",
      th: "ความกว้างเสา (มม.)"
    },
    columnDepth: {
      en: "Column Depth (mm)",
      th: "ความลึกเสา (มม.)"
    },
    axialLoad: {
      en: "Axial Load (kN)",
      th: "แรงตามแนวแกน (กิโลนิวตัน)"
    },
    momentX: {
      en: "Moment X (kN⋅m)",
      th: "โมเมนต์ดัด X (กิโลนิวตัน-เมตร)"
    },
    momentY: {
      en: "Moment Y (kN⋅m)",
      th: "โมเมนต์ดัด Y (กิโลนิวตัน-เมตร)"
    },
    soilBearingCapacity: {
      en: "Soil Bearing Capacity (kN/m²)",
      th: "กำลังรับน้ำหนักดิน (กิโลนิวตัน/ตารางเมตร)"
    },
    concreteGrade: {
      en: "Concrete Grade",
      th: "กำลังอัดคอนกรีต"
    },
    steelGrade: {
      en: "Steel Grade",
      th: "ชั้นคุณภาพเหล็ก"
    },
    footingDepth: {
      en: "Footing Depth (mm)",
      th: "ความลึกฐานราก (มม.)"
    },
    cover: {
      en: "Concrete Cover (mm)",
      th: "ระยะหุมคอนกรีต (มิลลิเมตร)"
    },
    calculate: {
      en: "Calculate",
      th: "คำนวณ"
    },
    results: {
      en: "Results",
      th: "ผลลัพธ์"
    },
    footingSize: {
      en: "Required Footing Size",
      th: "ขนาดฐานรากที่ต้องการ"
    },
    footingArea: {
      en: "Required Footing Area",
      th: "พื้นที่ฐานรากที่ต้องการ"
    },
    punchingShearStress: {
      en: "Punching Shear Stress",
      th: "ความเค้นเฉือนทะลุ"
    },
    steelArea: {
      en: "Required Steel Area",
      th: "พื้นที่หน้าตัดเหล็กเสริมที่ต้องการ"
    },
    requiredBars: {
      en: "Required Bars",
      th: "จำนวนเหล็กเสริม"
    },
    barSpacing: {
      en: "Bar Spacing",
      th: "ระยะห่างเหล็กเสริม"
    },
    bearingPressure: {
      en: "Bearing Pressure",
      th: "ความดันดิน"
    },
    backToTools: {
      en: "Back to Engineering Tools",
      th: "กลับไปที่เครื่องมือวิศวกรรม"
    }
  },

  shallowFoundation: {
    title: {
      en: "Shallow Foundation Calculator",
      th: "เครื่องคำนวณฐานรากตื้น"
    },
    description: {
      en: "Design shallow foundations for columns with detailed calculations for bearing pressure, punching shear, and reinforcement.",
      th: "ออกแบบฐานรากตื้นสำหรับเสาพร้อมการคำนวณความดันดิน การเฉือนทะลุ และเหล็กเสริมโดยละเอียด"
    },
    columnWidth: {
      en: "Column Width (mm)",
      th: "ความกว้างเสา (มม.)"
    },
    columnDepth: {
      en: "Column Depth (mm)",
      th: "ความลึกเสา (มม.)"
    },
    axialLoad: {
      en: "Axial Load (kN)",
      th: "แรงตามแนวแกน (กิโลนิวตัน)"
    },
    momentX: {
      en: "Moment X (kN⋅m)",
      th: "โมเมนต์ดัด X (กิโลนิวตัน-เมตร)"
    },
    momentY: {
      en: "Moment Y (kN⋅m)",
      th: "โมเมนต์ดัด Y (กิโลนิวตัน-เมตร)"
    },
    soilBearingCapacity: {
      en: "Soil Bearing Capacity (kN/m²)",
      th: "กำลังรับน้ำหนักดิน (กิโลนิวตัน/ตารางเมตร)"
    },
    concreteGrade: {
      en: "Concrete Grade",
      th: "กำลังอัดคอนกรีต"
    },
    steelGrade: {
      en: "Steel Grade",
      th: "ชั้นคุณภาพเหล็ก"
    },
    foundationDepth: {
      en: "Foundation Depth (mm)",
      th: "ความลึกฐานราก (มม.)"
    },
    cover: {
      en: "Concrete Cover (mm)",
      th: "ระยะหุมคอนกรีต (มิลลิเมตร)"
    },
    calculate: {
      en: "Calculate",
      th: "คำนวณ"
    },
    results: {
      en: "Results",
      th: "ผลลัพธ์"
    },
    foundationSize: {
      en: "Required Foundation Size",
      th: "ขนาดฐานรากที่ต้องการ"
    },
    foundationArea: {
      en: "Required Foundation Area",
      th: "พื้นที่ฐานรากที่ต้องการ"
    },
    punchingShearStress: {
      en: "Punching Shear Stress",
      th: "ความเค้นเฉือนทะลุ"
    },
    steelArea: {
      en: "Required Steel Area",
      th: "พื้นที่หน้าตัดเหล็กเสริมที่ต้องการ"
    },
    requiredBars: {
      en: "Required Bars",
      th: "จำนวนเหล็กเสริม"
    },
    barSpacing: {
      en: "Bar Spacing",
      th: "ระยะห่างเหล็กเสริม"
    },
    bearingPressure: {
      en: "Bearing Pressure",
      th: "ความดันดิน"
    },
    backToTools: {
      en: "Back to Engineering Tools",
      th: "กลับไปที่เครื่องมือวิศวกรรม"
    }
  },

  deepFoundation: {
    title: {
      en: "Deep Foundation Calculator",
      th: "เครื่องคำนวณฐานรากลึก"
    },
    description: {
      en: "Design deep foundations (piles) with detailed calculations for axial, lateral, and moment capacities.",
      th: "ออกแบบฐานรากลึก (เสาเข็ม) พร้อมการคำนวณความสามารถในการรับแรงตามแนวแกน แรงด้านข้าง และโมเมนต์โดยละเอียด"
    },
    pileDiameter: {
      en: "Pile Diameter (mm)",
      th: "เส้นผ่านศูนย์กลางเสาเข็ม (มม.)"
    },
    pileLength: {
      en: "Pile Length (m)",
      th: "ความยาวเสาเข็ม (เมตร)"
    },
    soilType: {
      en: "Soil Type",
      th: "ประเภทดิน"
    },
    soilTypes: {
      clay: {
        en: "Clay",
        th: "ดินเหนียว"
      },
      sand: {
        en: "Sand",
        th: "ดินทราย"
      },
      silt: {
        en: "Silt",
        th: "ดินตะกอน"
      }
    },
    soilStrength: {
      en: "Soil Strength (kPa)",
      th: "กำลังดิน (กิโลปาสคาล)"
    },
    pileType: {
      en: "Pile Type",
      th: "ประเภทเสาเข็ม"
    },
    pileTypes: {
      concrete: {
        en: "Concrete Pile",
        th: "เสาเข็มคอนกรีต"
      },
      steel: {
        en: "Steel Pile",
        th: "เสาเข็มเหล็ก"
      },
      timber: {
        en: "Timber Pile",
        th: "เสาเข็มไม้"
      }
    },
    axialLoad: {
      en: "Axial Load (kN)",
      th: "แรงตามแนวแกน (กิโลนิวตัน)"
    },
    lateralLoad: {
      en: "Lateral Load (kN)",
      th: "แรงด้านข้าง (กิโลนิวตัน)"
    },
    momentLoad: {
      en: "Moment Load (kN⋅m)",
      th: "โมเมนต์ดัด (กิโลนิวตัน-เมตร)"
    },
    safetyFactor: {
      en: "Safety Factor",
      th: "ปัจจัยความปลอดภัย"
    },
    groupSpacing: {
      en: "Group Spacing (m)",
      th: "ระยะห่างระหว่างกลุ่ม (เมตร)"
    },
    calculate: {
      en: "Calculate",
      th: "คำนวณ"
    },
    results: {
      en: "Results",
      th: "ผลลัพธ์"
    },
    pileCapacity: {
      en: "Pile Capacity",
      th: "ความสามารถในการรับแรงของเสาเข็ม"
    },
    lateralCapacity: {
      en: "Lateral Capacity",
      th: "ความสามารถในการรับแรงด้านข้าง"
    },
    momentCapacity: {
      en: "Moment Capacity",
      th: "ความสามารถในการรับโมเมนต์"
    },
    groupEfficiency: {
      en: "Group Efficiency",
      th: "ประสิทธิภาพของกลุ่มเสาเข็ม"
    },
    requiredPiles: {
      en: "Required Number of Piles",
      th: "จำนวนเสาเข็มที่ต้องการ"
    },
    piles: {
      en: "piles",
      th: "ต้น"
    },
    backToTools: {
      en: "Back to Engineering Tools",
      th: "กลับไปที่เครื่องมือวิศวกรรม"
    }
  },

  pileLoad: {
    title: {
      en: "Pile Load Calculator",
      th: "เครื่องคำนวณน้ำหนักเสาเข็ม"
    },
    description: {
      en: "Calculate pile load capacity and required number of piles for your foundation design.",
      th: "คำนวณความสามารถในการรับน้ำหนักของเสาเข็มและจำนวนเสาเข็มที่ต้องการสำหรับการออกแบบฐานราก"
    },
    pileDiameter: {
      en: "Pile Diameter (mm)",
      th: "เส้นผ่านศูนย์กลางเสาเข็ม (มม.)"
    },
    pileLength: {
      en: "Pile Length (m)",
      th: "ความยาวเสาเข็ม (เมตร)"
    },
    soilType: {
      en: "Soil Type",
      th: "ประเภทดิน"
    },
    soilTypes: {
      clay: {
        en: "Clay",
        th: "ดินเหนียว"
      },
      sand: {
        en: "Sand",
        th: "ดินทราย"
      },
      silt: {
        en: "Silt",
        th: "ดินตะกอน"
      }
    },
    soilStrength: {
      en: "Soil Strength (kPa)",
      th: "กำลังดิน (กิโลปาสคาล)"
    },
    pileType: {
      en: "Pile Type",
      th: "ประเภทเสาเข็ม"
    },
    pileTypes: {
      concrete: {
        en: "Concrete Pile",
        th: "เสาเข็มคอนกรีต"
      },
      steel: {
        en: "Steel Pile",
        th: "เสาเข็มเหล็ก"
      },
      timber: {
        en: "Timber Pile",
        th: "เสาเข็มไม้"
      }
    },
    axialLoad: {
      en: "Axial Load (kN)",
      th: "แรงตามแนวแกน (กิโลนิวตัน)"
    },
    lateralLoad: {
      en: "Lateral Load (kN)",
      th: "แรงด้านข้าง (กิโลนิวตัน)"
    },
    momentLoad: {
      en: "Moment Load (kN⋅m)",
      th: "โมเมนต์ดัด (กิโลนิวตัน-เมตร)"
    },
    safetyFactor: {
      en: "Safety Factor",
      th: "ปัจจัยความปลอดภัย"
    },
    groupSpacing: {
      en: "Group Spacing (m)",
      th: "ระยะห่างระหว่างกลุ่ม (เมตร)"
    },
    calculate: {
      en: "Calculate",
      th: "คำนวณ"
    },
    results: {
      en: "Results",
      th: "ผลลัพธ์"
    },
    pileCapacity: {
      en: "Pile Capacity",
      th: "ความสามารถในการรับแรงของเสาเข็ม"
    },
    lateralCapacity: {
      en: "Lateral Capacity",
      th: "ความสามารถในการรับแรงด้านข้าง"
    },
    momentCapacity: {
      en: "Moment Capacity",
      th: "ความสามารถในการรับโมเมนต์"
    },
    groupEfficiency: {
      en: "Group Efficiency",
      th: "ประสิทธิภาพของกลุ่มเสาเข็ม"
    },
    requiredPiles: {
      en: "Required Number of Piles",
      th: "จำนวนเสาเข็มที่ต้องการ"
    },
    piles: {
      en: "piles",
      th: "ต้น"
    },
    backToTools: {
      en: "Back to Engineering Tools",
      th: "กลับไปที่เครื่องมือวิศวกรรม"
    }
  },

  retainingWall: {
    title: {
      en: "Retaining Wall Design Calculator",
      th: "เครื่องคำนวณออกแบบกำแพงกันดิน"
    },
    description: {
      en: "Design reinforced concrete retaining walls with detailed calculations for earth pressure, wall stability, and reinforcement requirements.",
      th: "ออกแบบกำแพงกันดินคอนกรีตเสริมเหล็กพร้อมการคำนวณความดันดิน ความเสถียรของกำแพง และความต้องการเหล็กเสริมโดยละเอียด"
    },
    wallHeight: {
      en: "Wall Height (m)",
      th: "ความสูงกำแพง (เมตร)"
    },
    wallThickness: {
      en: "Wall Thickness (mm)",
      th: "ความหนากำแพง (มิลลิเมตร)"
    },
    soilType: {
      en: "Soil Type",
      th: "ประเภทดิน"
    },
    soilTypes: {
      clay: {
        en: "Clay",
        th: "ดินเหนียว"
      },
      sand: {
        en: "Sand",
        th: "ดินทราย"
      },
      silt: {
        en: "Silt",
        th: "ดินตะกอน"
      }
    },
    soilDensity: {
      en: "Soil Density (kN/m³)",
      th: "ความหนาแน่นดิน (กิโลนิวตัน/ลูกบาศก์เมตร)"
    },
    soilAngle: {
      en: "Soil Friction Angle (degrees)",
      th: "มุมเสียดทานดิน (องศา)"
    },
    surchargeLoad: {
      en: "Surcharge Load (kN/m²)",
      th: "น้ำหนักบรรทุกเพิ่มเติม (กิโลนิวตัน/ตารางเมตร)"
    },
    concreteGrade: {
      en: "Concrete Grade",
      th: "กำลังอัดคอนกรีต"
    },
    steelGrade: {
      en: "Steel Grade",
      th: "ชั้นคุณภาพเหล็ก"
    },
    cover: {
      en: "Concrete Cover (mm)",
      th: "ระยะหุมคอนกรีต (มิลลิเมตร)"
    },
    calculate: {
      en: "Calculate",
      th: "คำนวณ"
    },
    results: {
      en: "Results",
      th: "ผลลัพธ์"
    },
    activePressure: {
      en: "Active Earth Pressure",
      th: "ความดันดินด้านแอคทีฟ"
    },
    wallWeight: {
      en: "Wall Weight",
      th: "น้ำหนักกำแพง"
    },
    steelArea: {
      en: "Required Steel Area",
      th: "พื้นที่หน้าตัดเหล็กเสริมที่ต้องการ"
    },
    requiredBars: {
      en: "Required Number of Bars",
      th: "จำนวนเหล็กเสริมที่ต้องการ"
    },
    bars: {
      en: "bars",
      th: "เส้น"
    },
    barSpacing: {
      en: "Bar Spacing",
      th: "ระยะห่างเหล็กเสริม"
    },
    backToTools: {
      en: "Back to Engineering Tools",
      th: "กลับไปที่เครื่องมือวิศวกรรม"
    }
  },

  sheetPile: {
    title: {
      en: "Sheet Pile Design Calculator",
      th: "เครื่องคำนวณออกแบบเขื่อนกันดิน"
    },
    description: {
      en: "Design sheet piles for excavation support and waterfront structures with detailed calculations for earth pressure, water pressure, and structural requirements.",
      th: "ออกแบบเขื่อนกันดินสำหรับการรองรับการขุดและโครงสร้างริมน้ำพร้อมการคำนวณความดันดิน ความดันน้ำ และความต้องการโครงสร้างโดยละเอียด"
    },
    excavationDepth: {
      en: "Excavation Depth (m)",
      th: "ความลึกการขุด (เมตร)"
    },
    waterLevel: {
      en: "Water Level (m)",
      th: "ระดับน้ำ (เมตร)"
    },
    soilType: {
      en: "Soil Type",
      th: "ประเภทดิน"
    },
    soilTypes: {
      clay: {
        en: "Clay",
        th: "ดินเหนียว"
      },
      sand: {
        en: "Sand",
        th: "ดินทราย"
      },
      silt: {
        en: "Silt",
        th: "ดินตะกอน"
      }
    },
    soilDensity: {
      en: "Soil Density (kN/m³)",
      th: "ความหนาแน่นดิน (กิโลนิวตัน/ลูกบาศก์เมตร)"
    },
    soilAngle: {
      en: "Soil Friction Angle (degrees)",
      th: "มุมเสียดทานดิน (องศา)"
    },
    surchargeLoad: {
      en: "Surcharge Load (kN/m²)",
      th: "น้ำหนักบรรทุกเพิ่มเติม (กิโลนิวตัน/ตารางเมตร)"
    },
    sheetPileType: {
      en: "Sheet Pile Type",
      th: "ประเภทเขื่อนกันดิน"
    },
    pileTypes: {
      steel: {
        en: "Steel",
        th: "เหล็ก"
      },
      vinyl: {
        en: "Vinyl",
        th: "ไวนิล"
      },
      composite: {
        en: "Composite",
        th: "คอมโพสิต"
      }
    },
    steelGrade: {
      en: "Steel Grade",
      th: "ชั้นคุณภาพเหล็ก"
    },
    embedmentDepth: {
      en: "Embedment Depth (m)",
      th: "ความลึกฝัง (เมตร)"
    },
    calculate: {
      en: "Calculate",
      th: "คำนวณ"
    },
    results: {
      en: "Results",
      th: "ผลลัพธ์"
    },
    activePressure: {
      en: "Active Earth Pressure",
      th: "ความดันดินด้านแอคทีฟ"
    },
    waterPressure: {
      en: "Water Pressure",
      th: "ความดันน้ำ"
    },
    totalPressure: {
      en: "Total Pressure",
      th: "ความดันรวม"
    },
    requiredDepth: {
      en: "Required Embedment Depth",
      th: "ความลึกฝังที่ต้องการ"
    },
    sectionModulus: {
      en: "Required Section Modulus",
      th: "โมดูลัสหน้าตัดที่ต้องการ"
    },
    steelArea: {
      en: "Required Steel Area",
      th: "พื้นที่หน้าตัดเหล็กที่ต้องการ"
    },
    backToTools: {
      en: "Back to Engineering Tools",
      th: "กลับไปที่เครื่องมือวิศวกรรม"
    }
  },

  precastBeam: {
    title: {
      en: "Precast Beam Connection Calculator",
      th: "เครื่องคำนวณการเชื่อมต่อคานสำเร็จรูป"
    },
    description: {
      en: "Design precast beam connections with detailed calculations for shear, moment, and bolt capacities.",
      th: "ออกแบบการเชื่อมต่อคานสำเร็จรูปพร้อมการคำนวณความสามารถในการรับแรงเฉือน โมเมนต์ และความสามารถของสลักเกลียวโดยละเอียด"
    },
    beamHeight: {
      en: "Beam Height (mm)",
      th: "ความสูงคาน (มิลลิเมตร)"
    },
    beamWidth: {
      en: "Beam Width (mm)",
      th: "ความกว้างคาน (มิลลิเมตร)"
    },
    concreteGrade: {
      en: "Concrete Grade",
      th: "กำลังอัดคอนกรีต"
    },
    steelGrade: {
      en: "Steel Grade",
      th: "ชั้นคุณภาพเหล็ก"
    },
    cover: {
      en: "Concrete Cover (mm)",
      th: "ระยะหุมคอนกรีต (มิลลิเมตร)"
    },
    shearForce: {
      en: "Shear Force (kN)",
      th: "แรงเฉือน (กิโลนิวตัน)"
    },
    bendingMoment: {
      en: "Bending Moment (kN⋅m)",
      th: "โมเมนต์ดัด (กิโลนิวตัน-เมตร)"
    },
    connectionType: {
      en: "Connection Type",
      th: "ประเภทการเชื่อมต่อ"
    },
    connectionTypes: {
      bolted: {
        en: "Bolted Connection",
        th: "การเชื่อมต่อด้วยสลักเกลียว"
      },
      welded: {
        en: "Welded Connection",
        th: "การเชื่อมต่อด้วยการเชื่อม"
      },
      grouted: {
        en: "Grouted Connection",
        th: "การเชื่อมต่อด้วยปูนฉีด"
      }
    },
    boltGrade: {
      en: "Bolt Grade",
      th: "เกรดสลักเกลียว"
    },
    boltDiameter: {
      en: "Bolt Diameter (mm)",
      th: "เส้นผ่านศูนย์กลางสลักเกลียว (มิลลิเมตร)"
    },
    boltCount: {
      en: "Number of Bolts",
      th: "จำนวนสลักเกลียว"
    },
    calculate: {
      en: "Calculate",
      th: "คำนวณ"
    },
    results: {
      en: "Results",
      th: "ผลลัพธ์"
    },
    shearCapacity: {
      en: "Shear Capacity",
      th: "ความสามารถในการรับแรงเฉือน"
    },
    momentCapacity: {
      en: "Moment Capacity",
      th: "ความสามารถในการรับโมเมนต์"
    },
    boltCapacity: {
      en: "Bolt Capacity",
      th: "ความสามารถของสลักเกลียว"
    },
    efficiency: {
      en: "Connection Efficiency",
      th: "ประสิทธิภาพการเชื่อมต่อ"
    },
    backToTools: {
      en: "Back to Engineering Tools",
      th: "กลับไปที่เครื่องมือวิศวกรรม"
    }
  },

  precastColumn: {
    title: {
      en: "Precast Column Connection Calculator",
      th: "เครื่องคำนวณการเชื่อมต่อเสาคอนกรีตสำเร็จรูป"
    },
    description: {
      en: "Design precast column connections with detailed calculations for axial, moment, and bolt capacities.",
      th: "ออกแบบการเชื่อมต่อเสาคอนกรีตสำเร็จรูปพร้อมการคำนวณความสามารถในการรับแรงตามแนวแกน โมเมนต์ และความสามารถของสลักเกลียวโดยละเอียด"
    },
    columnHeight: {
      en: "Column Height (mm)",
      th: "ความสูงเสา (มิลลิเมตร)"
    },
    columnWidth: {
      en: "Column Width (mm)",
      th: "ความกว้างเสา (มิลลิเมตร)"
    },
    concreteGrade: {
      en: "Concrete Grade",
      th: "กำลังอัดคอนกรีต"
    },
    steelGrade: {
      en: "Steel Grade",
      th: "ชั้นคุณภาพเหล็ก"
    },
    cover: {
      en: "Concrete Cover (mm)",
      th: "ระยะหุมคอนกรีต (มิลลิเมตร)"
    },
    axialForce: {
      en: "Axial Force (kN)",
      th: "แรงตามแนวแกน (กิโลนิวตัน)"
    },
    bendingMoment: {
      en: "Bending Moment (kN⋅m)",
      th: "โมเมนต์ดัด (กิโลนิวตัน-เมตร)"
    },
    connectionType: {
      en: "Connection Type",
      th: "ประเภทการเชื่อมต่อ"
    },
    connectionTypes: {
      bolted: {
        en: "Bolted Connection",
        th: "การเชื่อมต่อด้วยสลักเกลียว"
      },
      welded: {
        en: "Welded Connection",
        th: "การเชื่อมต่อด้วยการเชื่อม"
      },
      grouted: {
        en: "Grouted Connection",
        th: "การเชื่อมต่อด้วยปูนฉีด"
      }
    },
    boltGrade: {
      en: "Bolt Grade",
      th: "เกรดสลักเกลียว"
    },
    boltDiameter: {
      en: "Bolt Diameter (mm)",
      th: "เส้นผ่านศูนย์กลางสลักเกลียว (มิลลิเมตร)"
    },
    boltCount: {
      en: "Number of Bolts",
      th: "จำนวนสลักเกลียว"
    },
    calculate: {
      en: "Calculate",
      th: "คำนวณ"
    },
    results: {
      en: "Results",
      th: "ผลลัพธ์"
    },
    axialCapacity: {
      en: "Axial Capacity",
      th: "ความสามารถในการรับแรงตามแนวแกน"
    },
    momentCapacity: {
      en: "Moment Capacity",
      th: "ความสามารถในการรับโมเมนต์"
    },
    boltCapacity: {
      en: "Bolt Capacity",
      th: "ความสามารถของสลักเกลียว"
    },
    efficiency: {
      en: "Connection Efficiency",
      th: "ประสิทธิภาพการเชื่อมต่อ"
    },
    backToTools: {
      en: "Back to Engineering Tools",
      th: "กลับไปที่เครื่องมือวิศวกรรม"
    }
  }
};
