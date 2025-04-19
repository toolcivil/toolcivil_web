import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus } from 'react-icons/fa';
import NavigationTabs from '../../components/NavigationTabs';
import * as steelData from '../../data/steelData';
import { useLanguage } from '../../contexts/LanguageContext';

// Add translations
const translations = {
  title: {
    en: 'Steel Weight Calculator',
    th: 'เครื่องคำนวณน้ำหนักเหล็ก'
  },
  subtitle: {
    en: 'Calculate the weight and quantity of steel sections for your construction project',
    th: 'คำนวณน้ำหนักและปริมาณเหล็กสำหรับโครงการก่อสร้างของคุณ'
  },
  specifications: {
    en: 'Steel Section Specifications',
    th: 'ข้อมูลจำเพาะของหน้าตัดเหล็ก'
  },
  calculate: {
    en: 'Calculate Weight',
    th: 'คำนวณน้ำหนัก'
  },
  selectThickness: {
    en: 'Select Thickness',
    th: 'เลือกความหนา'
  },
  plateSize: {
    en: 'Plate Size (ft)',
    th: 'ขนาดแผ่น (ฟุต)'
  },
  selectSize: {
    en: 'Select Size',
    th: 'เลือกขนาด'
  },
  thickness: {
    en: 'Thickness',
    th: 'ความหนา'
  },
  length: {
    en: 'Length (meters)',
    th: 'ความยาว (เมตร)'
  },
  quantity: {
    en: 'Quantity',
    th: 'จำนวน'
  },
  results: {
    en: 'Calculation Results',
    th: 'ผลการคำนวณ'
  },
  weightPerMeter: {
    en: 'Weight per meter',
    th: 'น้ำหนักต่อเมตร'
  },
  totalWeight: {
    en: 'Total weight',
    th: 'น้ำหนักรวม'
  },
  reset: {
    en: 'Reset',
    th: 'รีเซ็ต'
  },
  back: {
    en: 'Back to Engineering Tools',
    th: 'กลับไปที่เครื่องมือวิศวกรรม'
  }
};

const sectionImages = {
  steelPipes: '/images/steel-sections/steel-pipes.png',
  hBeams: '/images/steel-sections/h-beams.png',
  iBeams: '/images/steel-sections/i-beams.png',
  channels: '/images/steel-sections/channels.png',
  lipChannels: '/images/steel-sections/lip-channels.png',
  flatBars: '/images/steel-sections/flat-bars.png',
  equalAngles: '/images/steel-sections/equal-angles.png',
  squareBars: '/images/steel-sections/square-bars.png',
  squareTubes: '/images/steel-sections/square-tubes.png',
  sheetPiles: '/images/steel-sections/sheet-piles.png',
  standardPlates: '/images/steel-sections/standard-plates.png',
  checkeredPlates: '/images/steel-sections/checkered-plates.png'
};

const sectionLabels = {
  steelPipes: {
    en: 'Steel Pipes Section',
    th: 'หน้าตัดท่อเหล็ก'
  },
  hBeams: {
    en: 'H-Beams Section',
    th: 'หน้าตัดเหล็กรูปพรรณตัวเอช'
  },
  iBeams: {
    en: 'I-Beams Section',
    th: 'หน้าตัดเหล็กรูปพรรณตัวไอ'
  },
  channels: {
    en: 'Standard Channels Section',
    th: 'หน้าตัดเหล็กรางน้ำ'
  },
  lipChannels: {
    en: 'Light Lip Channels Section',
    th: 'หน้าตัดเหล็กรางน้ำตัวซี'
  },
  flatBars: {
    en: 'Flat Bars Section',
    th: 'หน้าตัดเหล็กแบน'
  },
  equalAngles: {
    en: 'Equal Angles Section',
    th: 'หน้าตัดเหล็กฉาก'
  },
  squareBars: {
    en: 'Square Bars Section',
    th: 'หน้าตัดเหล็กสี่เหลี่ยม'
  },
  squareTubes: {
    en: 'Square Tubes Section',
    th: 'หน้าตัดท่อเหล็กสี่เหลี่ยม'
  },
  sheetPiles: {
    en: 'Sheet Piles Section',
    th: 'หน้าตัดเข็มพืด'
  },
  standardPlates: {
    en: 'Standard Plates',
    th: 'แผ่นเหล็กเรียบ'
  },
  checkeredPlates: {
    en: 'Checkered Plates',
    th: 'แผ่นเหล็กลาย'
  }
};

const SteelPipesCalculator = () => {
  const { language } = useLanguage();
  
  // State for active tab
  const [activeTab, setActiveTab] = useState('steelPipes');
  
  // State for selected pipe properties
  const [diameter, setDiameter] = useState('1/2 (15)');
  const [thickness, setThickness] = useState(2.0);
  const [length, setLength] = useState(6); // in meters
  const [quantity, setQuantity] = useState(10); // number of pipes
  const [plateSize, setPlateSize] = useState('4x8');
  
  // State for calculation results
  const [totalWeight, setTotalWeight] = useState(0);
  const [weightPerMeter, setWeightPerMeter] = useState(0);

  // Calculate weight based on selected properties and active tab
  useEffect(() => {
    let weight = 0;
    let totalWeight = 0;
    
    if (activeTab === 'steelPipes') {
      const selectedPipe = steelData.steelPipeData.find(pipe => pipe.dn === diameter);
      if (selectedPipe) {
        const thicknessIndex = selectedPipe.t.findIndex(t => t === thickness);
        if (thicknessIndex !== -1) {
          weight = selectedPipe.w[thicknessIndex];
          totalWeight = weight * length * quantity;
          setWeightPerMeter(weight);
        }
      }
    } else if (activeTab === 'hBeams') {
      const selectedBeam = steelData.hBeamData.find(beam => beam.size === diameter);
      if (selectedBeam) {
        weight = selectedBeam.weight;
        totalWeight = weight * length * quantity;
        setWeightPerMeter(weight);
      }
    } else if (activeTab === 'iBeams') {
      const [size, variantIndex] = diameter.split('-');
      const selectedBeam = steelData.iBeamData.find(beam => beam.size === size);
      if (selectedBeam) {
        if (selectedBeam.variants) {
          const variant = selectedBeam.variants[parseInt(variantIndex) || 0];
          if (variant) {
            weight = variant.weight;
            totalWeight = weight * length * quantity;
            setWeightPerMeter(weight);
          }
        } else {
          weight = selectedBeam.weight;
          totalWeight = weight * length * quantity;
          setWeightPerMeter(weight);
        }
      }
    } else if (activeTab === 'channels') {
      const selectedChannel = steelData.channelData.find(channel => channel.size === diameter);
      if (selectedChannel) {
        weight = selectedChannel.weight;
        totalWeight = weight * length * quantity;
        setWeightPerMeter(weight);
      }
    } else if (activeTab === 'lipChannels') {
      const [size, variantIndex] = diameter.split('-');
      const selectedChannel = steelData.lipChannelData.find(channel => channel.size === size);
      if (selectedChannel) {
        if (selectedChannel.variants) {
          const variant = selectedChannel.variants[parseInt(variantIndex) || 0];
          if (variant) {
            weight = variant.weight;
            totalWeight = weight * length * quantity;
            setWeightPerMeter(weight);
          }
        } else {
          weight = selectedChannel.weight;
          totalWeight = weight * length * quantity;
          setWeightPerMeter(weight);
        }
      }
    } else if (activeTab === 'flatBars') {
      const [thickness, variantIndex] = diameter.split('-').map(Number);
      const selectedBar = steelData.flatBarData.find(bar => bar.thickness === thickness);
      if (selectedBar && selectedBar.variants[variantIndex]) {
        weight = selectedBar.variants[variantIndex].weight;
        totalWeight = weight * length * quantity;
        setWeightPerMeter(weight);
      }
    } else if (activeTab === 'equalAngles') {
      const [size, variantIndex] = diameter.split('-').map(Number);
      const selectedAngle = steelData.equalAngleData.find(angle => angle.size === size);
      if (selectedAngle) {
        if (selectedAngle.variants) {
          const variant = selectedAngle.variants[variantIndex];
          if (variant) {
            weight = variant.weight;
            totalWeight = weight * length * quantity;
            setWeightPerMeter(weight);
          }
        } else if (selectedAngle.weight) {
          weight = selectedAngle.weight;
          totalWeight = weight * length * quantity;
          setWeightPerMeter(weight);
        }
      }
    } else if (activeTab === 'squareBars') {
      const selectedBar = steelData.squareBarData.find(bar => bar.size === diameter);
      weight = selectedBar ? selectedBar.weight : 0;
      totalWeight = weight * length * quantity;
      setWeightPerMeter(weight);
    } else if (activeTab === 'squareTubes') {
      const [size, variantIndex] = diameter.split('-');
      const selectedTube = steelData.squareTubeData[parseInt(variantIndex) || 0];
      if (selectedTube && selectedTube.size === size) {
        weight = selectedTube.w;
        totalWeight = weight * length * quantity;
        setWeightPerMeter(weight);
      } else {
        weight = 0;
        totalWeight = 0;
        setWeightPerMeter(0);
      }
    } else if (activeTab === 'sheetPiles') {
      const selectedPile = steelData.sheetPileData.find(pile => pile.section === diameter);
      if (selectedPile) {
        weight = selectedPile.weight.perPile;
        totalWeight = weight * length * quantity;
        setWeightPerMeter(weight);
      } else {
        weight = 0;
        totalWeight = 0;
        setWeightPerMeter(0);
      }
    } else if (activeTab === 'standardPlates') {
      const selectedPlate = steelData.standardPlateData.find(
        plate => plate.thickness === parseFloat(diameter)
      );
      if (selectedPlate && plateSize) {
        weight = selectedPlate.dimensions[plateSize];
        totalWeight = weight * quantity;
        setWeightPerMeter(selectedPlate.unitWeight);
      } else {
        setWeightPerMeter(0);
        totalWeight = 0;
      }
    } else if (activeTab === 'checkeredPlates') {
      const selectedPlate = steelData.checkeredPlateData.find(
        plate => parseFloat(plate.thickness) === parseFloat(diameter)
      );
      
      if (selectedPlate && plateSize) {
        weight = selectedPlate.weightPerSqm;
    setWeightPerMeter(weight);
        
        const plateWeight = selectedPlate.dimensions[plateSize];
        if (plateWeight) {
          totalWeight = plateWeight * quantity;
        } else {
          totalWeight = 0;
        }
      } else {
        weight = 0;
        totalWeight = 0;
        setWeightPerMeter(0);
      }
    }
    
    setTotalWeight(Number(totalWeight.toFixed(3)));
  }, [activeTab, diameter, thickness, length, quantity, plateSize]);

  // Handle increment/decrement
  const handleIncrement = (setter, value, current) => {
    setter(current + value);
  };

  const handleDecrement = (setter, value, current, min = 1) => {
    if (current > min) {
      setter(current - value);
    }
  };

  // Get size options based on active tab
  const getSizeOptions = () => {
    switch (activeTab) {
      case 'steelPipes':
        return steelData.steelPipeData.map(pipe => (
          <option key={pipe.dn} value={pipe.dn}>{pipe.dn}</option>
        ));
      case 'hBeams':
        return steelData.hBeamData.map(beam => (
          <option key={beam.size} value={beam.size}>{beam.size}</option>
        ));
      case 'iBeams':
        return steelData.iBeamData.map(beam => {
          if (beam.variants) {
            return beam.variants.map((variant, idx) => (
              <option key={`${beam.size}-${idx}`} value={`${beam.size}-${idx}`}>
                {`${beam.size} (t₁=${variant.t1}, t₂=${variant.t2})`}
              </option>
            ));
          } else {
            return (
              <option key={beam.size} value={beam.size}>
                {`${beam.size} (t₁=${beam.t1}, t₂=${beam.t2})`}
              </option>
            );
          }
        });
      case 'channels':
        return steelData.channelData.map(channel => (
          <option key={channel.size} value={channel.size}>
            {`${channel.size} (t₁=${channel.t1}, t₂=${channel.t2})`}
          </option>
        ));
      case 'lipChannels':
        return steelData.lipChannelData.map(channel => {
          if (channel.variants) {
            return channel.variants.map((variant, idx) => (
              <option key={`${channel.size}-${idx}`} value={`${channel.size}-${idx}`}>
                {`${channel.size} (t=${variant.t}mm)`}
              </option>
            ));
          } else {
            return (
              <option key={channel.size} value={channel.size}>
                {`${channel.size} (t=${channel.t}mm)`}
              </option>
            );
          }
        });
      case 'flatBars':
        return steelData.flatBarData.map(bar => {
          return bar.variants.map((variant, idx) => (
            <option key={`${bar.thickness}-${variant.width}`} value={`${bar.thickness}-${idx}`}>
              {`${variant.width} x ${bar.thickness} mm`}
            </option>
          ));
        });
      case 'equalAngles':
        return steelData.equalAngleData.map(angle => {
          if (angle.variants) {
            return angle.variants.map((variant, idx) => (
              <option key={`${angle.size}-${idx}`} value={`${angle.size}-${idx}`}>
                {`${angle.size} (t=${variant.t}mm)`}
              </option>
            ));
          } else {
            return (
              <option key={angle.size} value={angle.size}>
                {`${angle.size} (t=${angle.t}mm)`}
              </option>
            );
          }
        });
      case 'squareBars':
        return steelData.squareBarData.map(bar => (
          <option key={bar.size} value={bar.size}>{bar.size}</option>
        ));
      case 'squareTubes':
        return steelData.squareTubeData.map((tube, idx) => (
          <option key={`${tube.size}-${tube.t}`} value={`${tube.size}-${idx}`}>
            {`${tube.size} (t=${tube.t}mm)`}
          </option>
        ));
      case 'sheetPiles':
        return steelData.sheetPileData.map(pile => (
          <option key={pile.section} value={pile.section}>{pile.section}</option>
        ));
      case 'standardPlates':
        return steelData.standardPlateData.map(plate => (
          <option key={plate.thickness} value={plate.thickness}>
            {plate.thickness} mm
          </option>
        ));
      case 'checkeredPlates':
        return steelData.checkeredPlateData.map(plate => (
          <option key={plate.thickness} value={plate.thickness}>
            {plate.thickness} mm
          </option>
        ));
      default:
        return [];
    }
  };

  const getPlateSizeOptions = () => {
    if (activeTab === 'standardPlates') {
      const selectedPlate = steelData.standardPlateData.find(
        plate => plate.thickness === parseFloat(diameter)
      );
      if (selectedPlate) {
        return Object.keys(selectedPlate.dimensions).map(size => (
          <option key={size} value={size}>{size} ft</option>
        ));
      }
    } else if (activeTab === 'checkeredPlates') {
      const selectedPlate = steelData.checkeredPlateData.find(
        plate => parseFloat(plate.thickness) === parseFloat(diameter)
      );
      if (selectedPlate) {
        return Object.keys(selectedPlate.dimensions).map(size => (
          <option key={size} value={size}>{size} ft</option>
        ));
      }
    }
    return [];
  };

  // Get thickness options for selected pipe
  const getThicknessOptions = () => {
    if (activeTab === 'steelPipes') {
      const selectedPipe = steelData.steelPipeData.find(pipe => pipe.dn === diameter);
      if (selectedPipe) {
        return selectedPipe.t.map(thickness => (
          <option key={thickness} value={thickness}>{thickness} mm</option>
        ));
      }
    }
    return [];
  };

  // Get size label based on active tab
  const getSizeLabel = () => {
    switch (activeTab) {
      case 'steelPipes': return 'Nominal Pipe Size';
      case 'hBeams': 
      case 'iBeams': 
      case 'channels': 
      case 'lipChannels': 
      case 'flatBars': 
      case 'equalAngles': 
      case 'squareBars': 
      case 'squareTubes': 
        return 'Size (mm)';
      case 'sheetPiles': return 'Type';
      case 'standardPlates': return 'Material';
      case 'checkeredPlates': return 'Thickness';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-blue-500 text-white">
      <div className="container mx-auto px-4 py-6 md:py-12">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {translations.title[language]}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            {translations.subtitle[language]}
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8 md:mb-12">
          <NavigationTabs 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            setDiameter={setDiameter}
            setThickness={setThickness}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 max-w-7xl mx-auto">
          {/* Steel Section Data */}
          <div className="lg:w-3/5">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-gray-800">
              {/* Section Image */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  {sectionLabels[activeTab][language]}
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 flex justify-center items-center">
                  <img
                    src={sectionImages[activeTab]}
                    alt={sectionLabels[activeTab][language]}
                    className="max-h-64 object-contain"
            />
          </div>
        </div>

              <h2 className="text-xl sm:text-2xl font-bold mb-6 text-blue-600 border-b pb-4">
                {translations.specifications[language]}
              </h2>
              
              <div className="overflow-x-auto">
                {activeTab === 'steelPipes' && (
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                          <th className="border px-2 py-1 text-center">DN</th>
                          <th className="border px-2 py-1 text-center">D (mm)</th>
                          <th className="border px-2 py-1 text-center">T (mm)</th>
                          <th className="border px-2 py-1 text-center">W (kg/m)</th>
                          <th className="border px-2 py-1 text-center">A (cm²)</th>
                          <th className="border px-2 py-1 text-center">I (cm⁴)</th>
                          <th className="border px-2 py-1 text-center">Z (cm³)</th>
                          <th className="border px-2 py-1 text-center">i (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                        {steelData.steelPipeData.map(pipe => (
                          pipe.t.map((thickness, idx) => (
                            <tr key={`${pipe.dn}-${thickness}`} className={diameter === pipe.dn ? 'bg-blue-50' : ''}>
                              {idx === 0 && <td className="border px-2 py-1 text-center" rowSpan={pipe.t.length}>{pipe.dn}</td>}
                              {idx === 0 && <td className="border px-2 py-1 text-center" rowSpan={pipe.t.length}>{pipe.d}</td>}
                              <td className="border px-2 py-1 text-center">{thickness}</td>
                              <td className="border px-2 py-1 text-center bg-cyan-100">{pipe.w[idx]}</td>
                              <td className="border px-2 py-1 text-center">{pipe.a[idx]}</td>
                              <td className="border px-2 py-1 text-center">{pipe.i[idx]}</td>
                              <td className="border px-2 py-1 text-center">{pipe.z[idx]}</td>
                              <td className="border px-2 py-1 text-center">{pipe.rad[idx]}</td>
                        </tr>
                      ))
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === 'hBeams' && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border px-2 py-1 text-center">Size</th>
                          <th className="border px-2 py-1 text-center">H (mm)</th>
                          <th className="border px-2 py-1 text-center">B (mm)</th>
                          <th className="border px-2 py-1 text-center">t₁ (mm)</th>
                          <th className="border px-2 py-1 text-center">t₂ (mm)</th>
                          <th className="border px-2 py-1 text-center">r (mm)</th>
                          <th className="border px-2 py-1 text-center">Area (cm²)</th>
                          <th className="border px-2 py-1 text-center">W (kg/m)</th>
                          <th className="border px-2 py-1 text-center">Ix (cm⁴)</th>
                          <th className="border px-2 py-1 text-center">Iy (cm⁴)</th>
                          <th className="border px-2 py-1 text-center">Zx (cm³)</th>
                          <th className="border px-2 py-1 text-center">Zy (cm³)</th>
                          <th className="border px-2 py-1 text-center">rx (cm)</th>
                          <th className="border px-2 py-1 text-center">ry (cm)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {steelData.hBeamData.map(beam => (
                          <tr key={beam.size} className={diameter === beam.size ? 'bg-blue-50' : ''}>
                            <td className="border px-2 py-1 text-center">{beam.size}</td>
                            <td className="border px-2 py-1 text-center">{beam.h}</td>
                            <td className="border px-2 py-1 text-center">{beam.b}</td>
                            <td className="border px-2 py-1 text-center">{beam.t1}</td>
                            <td className="border px-2 py-1 text-center">{beam.t2}</td>
                            <td className="border px-2 py-1 text-center">{beam.r}</td>
                            <td className="border px-2 py-1 text-center">{beam.area}</td>
                            <td className="border px-2 py-1 text-center bg-cyan-100">{beam.weight}</td>
                            <td className="border px-2 py-1 text-center">{beam.ix}</td>
                            <td className="border px-2 py-1 text-center">{beam.iy}</td>
                            <td className="border px-2 py-1 text-center">{beam.zx}</td>
                            <td className="border px-2 py-1 text-center">{beam.zy}</td>
                            <td className="border px-2 py-1 text-center">{beam.rx}</td>
                            <td className="border px-2 py-1 text-center">{beam.ry}</td>
                        </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === 'iBeams' && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border px-2 py-1 text-center">Size (H×B)</th>
                          <th className="border px-2 py-1 text-center">t₁ (mm)</th>
                          <th className="border px-2 py-1 text-center">t₂ (mm)</th>
                          <th className="border px-2 py-1 text-center">r₁ (mm)</th>
                          <th className="border px-2 py-1 text-center">r₂ (mm)</th>
                          <th className="border px-2 py-1 text-center">Area (cm²)</th>
                          <th className="border px-2 py-1 text-center">W (kg/m)</th>
                          <th className="border px-2 py-1 text-center">Ix (cm⁴)</th>
                          <th className="border px-2 py-1 text-center">Iy (cm⁴)</th>
                          <th className="border px-2 py-1 text-center">rx (cm)</th>
                          <th className="border px-2 py-1 text-center">ry (cm)</th>
                          <th className="border px-2 py-1 text-center">Zx (cm³)</th>
                          <th className="border px-2 py-1 text-center">Zy (cm³)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {steelData.iBeamData.map(beam => {
                          if (beam.variants) {
                            // For beams with multiple variants
                            return beam.variants.map((variant, idx) => (
                              <tr key={`${beam.size}-${idx}`} className={diameter === `${beam.size}-${idx}` ? 'bg-blue-50' : ''}>
                                {idx === 0 && <td className="border px-2 py-1 text-center" rowSpan={beam.variants.length}>{beam.size}</td>}
                                <td className="border px-2 py-1 text-center">{variant.t1}</td>
                                <td className="border px-2 py-1 text-center">{variant.t2}</td>
                                <td className="border px-2 py-1 text-center">{variant.r1}</td>
                                <td className="border px-2 py-1 text-center">{variant.r2}</td>
                                <td className="border px-2 py-1 text-center">{variant.area}</td>
                                <td className="border px-2 py-1 text-center bg-cyan-100">{variant.weight}</td>
                                <td className="border px-2 py-1 text-center">{variant.ix}</td>
                                <td className="border px-2 py-1 text-center">{variant.iy}</td>
                                <td className="border px-2 py-1 text-center">{variant.rx}</td>
                                <td className="border px-2 py-1 text-center">{variant.ry}</td>
                                <td className="border px-2 py-1 text-center">{variant.zx}</td>
                                <td className="border px-2 py-1 text-center">{variant.zy}</td>
                        </tr>
                            ));
                          } else {
                            // For beams without variants
                            return (
                              <tr key={beam.size} className={diameter === beam.size ? 'bg-blue-50' : ''}>
                                <td className="border px-2 py-1 text-center">{beam.size}</td>
                                <td className="border px-2 py-1 text-center">{beam.t1}</td>
                                <td className="border px-2 py-1 text-center">{beam.t2}</td>
                                <td className="border px-2 py-1 text-center">{beam.r1}</td>
                                <td className="border px-2 py-1 text-center">{beam.r2}</td>
                                <td className="border px-2 py-1 text-center">{beam.area}</td>
                                <td className="border px-2 py-1 text-center bg-cyan-100">{beam.weight}</td>
                                <td className="border px-2 py-1 text-center">{beam.ix}</td>
                                <td className="border px-2 py-1 text-center">{beam.iy}</td>
                                <td className="border px-2 py-1 text-center">{beam.rx}</td>
                                <td className="border px-2 py-1 text-center">{beam.ry}</td>
                                <td className="border px-2 py-1 text-center">{beam.zx}</td>
                                <td className="border px-2 py-1 text-center">{beam.zy}</td>
                        </tr>
                            );
                          }
                        })}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === 'channels' && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border px-2 py-1 text-center">Size (H×B)</th>
                          <th className="border px-2 py-1 text-center">t₁ (mm)</th>
                          <th className="border px-2 py-1 text-center">t₂ (mm)</th>
                          <th className="border px-2 py-1 text-center">r₁ (mm)</th>
                          <th className="border px-2 py-1 text-center">r₂ (mm)</th>
                          <th className="border px-2 py-1 text-center">Area (cm²)</th>
                          <th className="border px-2 py-1 text-center">W (kg/m)</th>
                          <th className="border px-2 py-1 text-center">Ix (cm⁴)</th>
                          <th className="border px-2 py-1 text-center">Iy (cm⁴)</th>
                          <th className="border px-2 py-1 text-center">rx (cm)</th>
                          <th className="border px-2 py-1 text-center">ry (cm)</th>
                          <th className="border px-2 py-1 text-center">Zx (cm³)</th>
                          <th className="border px-2 py-1 text-center">Zy (cm³)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {steelData.channelData.map((channel, idx) => (
                          <tr key={`${channel.size}-${idx}`} className={diameter === channel.size ? 'bg-blue-50' : ''}>
                            <td className="border px-2 py-1 text-center">{channel.size}</td>
                            <td className="border px-2 py-1 text-center">{channel.t1}</td>
                            <td className="border px-2 py-1 text-center">{channel.t2}</td>
                            <td className="border px-2 py-1 text-center">{channel.r1}</td>
                            <td className="border px-2 py-1 text-center">{channel.r2}</td>
                            <td className="border px-2 py-1 text-center">{channel.area}</td>
                            <td className="border px-2 py-1 text-center bg-cyan-100">{channel.weight}</td>
                            <td className="border px-2 py-1 text-center">{channel.ix}</td>
                            <td className="border px-2 py-1 text-center">{channel.iy}</td>
                            <td className="border px-2 py-1 text-center">{channel.rx}</td>
                            <td className="border px-2 py-1 text-center">{channel.ry}</td>
                            <td className="border px-2 py-1 text-center">{channel.zx}</td>
                            <td className="border px-2 py-1 text-center">{channel.zy}</td>
                        </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === 'lipChannels' && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border px-2 py-1 text-center">Size (H×A×C)</th>
                          <th className="border px-2 py-1 text-center">t (mm)</th>
                          <th className="border px-2 py-1 text-center">Area (cm²)</th>
                          <th className="border px-2 py-1 text-center">W (kg/m)</th>
                          <th className="border px-2 py-1 text-center">Cx (cm)</th>
                          <th className="border px-2 py-1 text-center">Cy (cm)</th>
                          <th className="border px-2 py-1 text-center">Ix (cm⁴)</th>
                          <th className="border px-2 py-1 text-center">Iy (cm⁴)</th>
                          <th className="border px-2 py-1 text-center">rx (cm)</th>
                          <th className="border px-2 py-1 text-center">ry (cm)</th>
                          <th className="border px-2 py-1 text-center">Zx (cm³)</th>
                          <th className="border px-2 py-1 text-center">Zy (cm³)</th>
                          <th className="border px-2 py-1 text-center">Sx (cm)</th>
                          <th className="border px-2 py-1 text-center">Sy (cm)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {steelData.lipChannelData.map(channel => {
                          if (channel.variants) {
                            // For channels with multiple variants
                            return channel.variants.map((variant, idx) => (
                              <tr key={`${channel.size}-${idx}`} className={diameter === `${channel.size}-${idx}` ? 'bg-blue-50' : ''}>
                                {idx === 0 && <td className="border px-2 py-1 text-center" rowSpan={channel.variants.length}>{channel.size}</td>}
                                <td className="border px-2 py-1 text-center">{variant.t}</td>
                                <td className="border px-2 py-1 text-center">{variant.area}</td>
                                <td className="border px-2 py-1 text-center bg-cyan-100">{variant.weight}</td>
                                <td className="border px-2 py-1 text-center">{variant.cx}</td>
                                <td className="border px-2 py-1 text-center">{variant.cy}</td>
                                <td className="border px-2 py-1 text-center">{variant.ix}</td>
                                <td className="border px-2 py-1 text-center">{variant.iy}</td>
                                <td className="border px-2 py-1 text-center">{variant.rx}</td>
                                <td className="border px-2 py-1 text-center">{variant.ry}</td>
                                <td className="border px-2 py-1 text-center">{variant.zx}</td>
                                <td className="border px-2 py-1 text-center">{variant.zy}</td>
                                <td className="border px-2 py-1 text-center">{variant.sx}</td>
                                <td className="border px-2 py-1 text-center">{variant.sy}</td>
                        </tr>
                            ));
                          } else {
                            // For channels without variants
                            return (
                              <tr key={channel.size} className={diameter === channel.size ? 'bg-blue-50' : ''}>
                                <td className="border px-2 py-1 text-center">{channel.size}</td>
                                <td className="border px-2 py-1 text-center">{channel.t}</td>
                                <td className="border px-2 py-1 text-center">{channel.area}</td>
                                <td className="border px-2 py-1 text-center bg-cyan-100">{channel.weight}</td>
                                <td className="border px-2 py-1 text-center">{channel.cx}</td>
                                <td className="border px-2 py-1 text-center">{channel.cy}</td>
                                <td className="border px-2 py-1 text-center">{channel.ix}</td>
                                <td className="border px-2 py-1 text-center">{channel.iy}</td>
                                <td className="border px-2 py-1 text-center">{channel.rx}</td>
                                <td className="border px-2 py-1 text-center">{channel.ry}</td>
                                <td className="border px-2 py-1 text-center">{channel.zx}</td>
                                <td className="border px-2 py-1 text-center">{channel.zy}</td>
                                <td className="border px-2 py-1 text-center">{channel.sx}</td>
                                <td className="border px-2 py-1 text-center">{channel.sy}</td>
                              </tr>
                            );
                          }
                        })}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === 'flatBars' && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border px-2 py-1 text-center">Thickness (mm)</th>
                          <th className="border px-2 py-1 text-center">Width (mm)</th>
                          <th className="border px-2 py-1 text-center">Sectional Area (cm²)</th>
                          <th className="border px-2 py-1 text-center">Unit Weight (kg/m)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {steelData.flatBarData.map(bar => (
                          bar.variants.map((variant, idx) => (
                            <tr key={`${bar.thickness}-${variant.width}`} className={diameter === `${bar.thickness}-${idx}` ? 'bg-blue-50' : ''}>
                              {idx === 0 && <td className="border px-2 py-1 text-center" rowSpan={bar.variants.length}>{bar.thickness}</td>}
                              <td className="border px-2 py-1 text-center">{variant.width}</td>
                              <td className="border px-2 py-1 text-center">{variant.area}</td>
                              <td className="border px-2 py-1 text-center bg-cyan-100">{variant.weight}</td>
                        </tr>
                      ))
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === 'equalAngles' && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border px-2 py-1 text-center">Size (H×B)</th>
                          <th className="border px-2 py-1 text-center">t (mm)</th>
                          <th className="border px-2 py-1 text-center">t₁ (mm)</th>
                          <th className="border px-2 py-1 text-center">t₂ (mm)</th>
                          <th className="border px-2 py-1 text-center">Area (cm²)</th>
                          <th className="border px-2 py-1 text-center">W (kg/m)</th>
                          <th className="border px-2 py-1 text-center">Cx (cm)</th>
                          <th className="border px-2 py-1 text-center">Cy (cm)</th>
                          <th className="border px-2 py-1 text-center">Ix (cm⁴)</th>
                          <th className="border px-2 py-1 text-center">Iy (cm⁴)</th>
                          <th className="border px-2 py-1 text-center">Max Ix (cm⁴)</th>
                          <th className="border px-2 py-1 text-center">Min Iy (cm⁴)</th>
                          <th className="border px-2 py-1 text-center">rx (cm)</th>
                          <th className="border px-2 py-1 text-center">ry (cm)</th>
                          <th className="border px-2 py-1 text-center">Max rx (cm)</th>
                          <th className="border px-2 py-1 text-center">Max ry (cm)</th>
                          <th className="border px-2 py-1 text-center">Zx (cm³)</th>
                          <th className="border px-2 py-1 text-center">Zy (cm³)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {steelData.equalAngleData.map(angle => (
                          angle.variants.map((variant, idx) => (
                            <tr key={`${angle.size}-${idx}`} className={diameter === `${angle.size}-${idx}` ? 'bg-blue-50' : ''}>
                              {idx === 0 && <td className="border px-2 py-1 text-center" rowSpan={angle.variants.length}>{angle.size}</td>}
                              <td className="border px-2 py-1 text-center">{variant.t}</td>
                              <td className="border px-2 py-1 text-center">{variant.t1}</td>
                              <td className="border px-2 py-1 text-center">{variant.t2}</td>
                              <td className="border px-2 py-1 text-center">{variant.area}</td>
                              <td className="border px-2 py-1 text-center bg-cyan-100">{variant.weight}</td>
                              <td className="border px-2 py-1 text-center">{variant.cx}</td>
                              <td className="border px-2 py-1 text-center">{variant.cy}</td>
                              <td className="border px-2 py-1 text-center">{variant.ix}</td>
                              <td className="border px-2 py-1 text-center">{variant.iy}</td>
                              <td className="border px-2 py-1 text-center">{variant.maxIx}</td>
                              <td className="border px-2 py-1 text-center">{variant.minIy}</td>
                              <td className="border px-2 py-1 text-center">{variant.rx}</td>
                              <td className="border px-2 py-1 text-center">{variant.ry}</td>
                              <td className="border px-2 py-1 text-center">{variant.maxrx}</td>
                              <td className="border px-2 py-1 text-center">{variant.maxry}</td>
                              <td className="border px-2 py-1 text-center">{variant.zx}</td>
                              <td className="border px-2 py-1 text-center">{variant.zy}</td>
                        </tr>
                      ))
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === 'squareBars' && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border px-2 py-1 text-center">Size</th>
                          <th className="border px-2 py-1 text-center">Weight (kg/m)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {steelData.squareBarData.map(bar => (
                          <tr key={bar.size} className={diameter === bar.size ? 'bg-blue-50' : ''}>
                            <td className="border px-2 py-1 text-center">{bar.size}</td>
                            <td className="border px-2 py-1 text-center bg-cyan-100">{bar.weight}</td>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>
                )}

                {activeTab === 'squareTubes' && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100 text-black">
                          <th className="border px-2 py-1 text-center" colSpan="2">D x D</th>
                          <th className="border px-2 py-1 text-center">T</th>
                          <th className="border px-2 py-1 text-center">W</th>
                          <th className="border px-2 py-1 text-center">A</th>
                          <th className="border px-2 py-1 text-center" colSpan="2">Ix, Iy</th>
                          <th className="border px-2 py-1 text-center" colSpan="2">Zx, Zy</th>
                          <th className="border px-2 py-1 text-center" colSpan="2">rx, ry</th>
                        </tr>
                        <tr className="bg-gray-100 text-black">
                          <th className="border px-2 py-1 text-center">in.</th>
                          <th className="border px-2 py-1 text-center">mm.</th>
                          <th className="border px-2 py-1 text-center">mm.</th>
                          <th className="border px-2 py-1 text-center">kg./m.</th>
                          <th className="border px-2 py-1 text-center">cm²</th>
                          <th className="border px-2 py-1 text-center" colSpan="2">cm⁴</th>
                          <th className="border px-2 py-1 text-center" colSpan="2">cm³</th>
                          <th className="border px-2 py-1 text-center" colSpan="2">cm.</th>
                        </tr>
                      </thead>
                      <tbody>
                        {steelData.squareTubeData.map((tube, idx) => {
                          const [width] = tube.size.split('x');
                          let inchSize = '';
                          if (width === '25') inchSize = '1×1';
                          else if (width === '32') inchSize = '1¼×1¼';
                          else if (width === '38') inchSize = '1½×1½';
                          else if (width === '50') inchSize = '2×2';
                          else if (width === '75') inchSize = '3×3';
                          else if (width === '100') inchSize = '4×4';
                          else if (width === '125') inchSize = '5×5';
                          else if (width === '150') inchSize = '6×6';
                          
                          return (
                            <tr key={`${tube.size}-${tube.t}`} className={diameter === `${tube.size}-${idx}` ? 'bg-gray-100' : ''}>
                              <td className="border px-2 py-1 text-center">{inchSize}</td>
                              <td className="border px-2 py-1 text-center">{tube.size}</td>
                              <td className="border px-2 py-1 text-center">{tube.t.toFixed(1)}</td>
                              <td className="border px-2 py-1 text-center bg-cyan-100">{tube.w.toFixed(2)}</td>
                              <td className="border px-2 py-1 text-center">{tube.a.toFixed(2)}</td>
                              <td className="border px-2 py-1 text-center" colSpan="2">{tube.ix.toFixed(1)}</td>
                              <td className="border px-2 py-1 text-center" colSpan="2">{tube.zx.toFixed(1)}</td>
                              <td className="border px-2 py-1 text-center" colSpan="2">{tube.rx.toFixed(2)}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
            </div>
                )}

                {activeTab === 'sheetPiles' && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100 text-black">
                          <th className="border px-2 py-1 text-center" rowSpan="2">Section</th>
                          <th className="border px-2 py-1 text-center" colSpan="3">Dimensions</th>
                          <th className="border px-2 py-1 text-center" colSpan="1">Sectional Area</th>
                          <th className="border px-2 py-1 text-center" colSpan="2">Weight</th>
                          <th className="border px-2 py-1 text-center" colSpan="2">Moment of Inertia</th>
                          <th className="border px-2 py-1 text-center" colSpan="2">Section Modulus</th>
                        </tr>
                        <tr className="bg-gray-100 text-black">
                          <th className="border px-2 py-1 text-center">w<br/>mm.</th>
                          <th className="border px-2 py-1 text-center">h<br/>mm.</th>
                          <th className="border px-2 py-1 text-center">t<br/>mm.</th>
                          <th className="border px-2 py-1 text-center">per pile<br/>cm²</th>
                          <th className="border px-2 py-1 text-center">perpile<br/>kg/m.</th>
                          <th className="border px-2 py-1 text-center">per wall width<br/>kg/m²</th>
                          <th className="border px-2 py-1 text-center">perpile<br/>cm⁴</th>
                          <th className="border px-2 py-1 text-center">per wall width<br/>cm⁴</th>
                          <th className="border px-2 py-1 text-center">perpile<br/>cm³</th>
                          <th className="border px-2 py-1 text-center">per wall width<br/>cm³/m.</th>
                        </tr>
                      </thead>
                      <tbody>
                        {steelData.sheetPileData.map(pile => (
                          <tr key={pile.section} className={diameter === pile.section ? 'bg-gray-100' : ''}>
                            <td className="border px-2 py-1 text-center">{pile.section}</td>
                            <td className="border px-2 py-1 text-center">{pile.dimensions.w}</td>
                            <td className="border px-2 py-1 text-center">{pile.dimensions.h}</td>
                            <td className="border px-2 py-1 text-center">{pile.dimensions.t}</td>
                            <td className="border px-2 py-1 text-center">{pile.area.perPile}</td>
                            <td className="border px-2 py-1 text-center bg-cyan-100">{pile.weight.perPile}</td>
                            <td className="border px-2 py-1 text-center">{pile.weight.perWallWidth}</td>
                            <td className="border px-2 py-1 text-center">{pile.momentOfInertia.perPile}</td>
                            <td className="border px-2 py-1 text-center">{pile.momentOfInertia.perWallWidth}</td>
                            <td className="border px-2 py-1 text-center">{pile.sectionModulus.perPile}</td>
                            <td className="border px-2 py-1 text-center">{pile.sectionModulus.perWallWidth}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === 'standardPlates' && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100 text-black">
                          <th className="border px-2 py-1 text-center">Thickness (mm)</th>
                          <th className="border px-2 py-1 text-center">Weight (kg/m²)</th>
                          <th className="border px-2 py-1 text-center">Size (ft)</th>
                          <th className="border px-2 py-1 text-center">Weight per Sheet (kg)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {steelData.standardPlateData.map(plate => (
                          <tr 
                            key={plate.thickness} 
                            className={`text-black ${parseFloat(diameter) === plate.thickness ? 'bg-gray-100' : ''}`}
                          >
                            <td className="border px-2 py-1 text-center">{plate.thickness}</td>
                            <td className="border px-2 py-1 text-center">{plate.unitWeight.toFixed(3)}</td>
                            <td className="border px-2 py-1 text-center">{plateSize}</td>
                            <td className="border px-2 py-1 text-center">
                              {plateSize && plate.dimensions[plateSize] ? plate.dimensions[plateSize].toFixed(3) : '-'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === 'checkeredPlates' && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100 text-black">
                          <th className="border px-2 py-1 text-center" rowSpan="2">Thickness<br/>(mm)</th>
                          <th className="border px-2 py-1 text-center" rowSpan="2">Weight<br/>(kg/m²)</th>
                          <th className="border px-2 py-1 text-center" colSpan="8">Width and Length, mm. (Figures in the lower e.g. 3x6 are nominal sizes in feet.)</th>
                        </tr>
                        <tr className="bg-gray-100 text-black">
                          <th className="border px-2 py-1 text-center">914×1,829<br/>(3×6)</th>
                          <th className="border px-2 py-1 text-center">914×3,658<br/>(3×12)</th>
                          <th className="border px-2 py-1 text-center">1,219×2,438<br/>(4×8)</th>
                          <th className="border px-2 py-1 text-center">1,219×3,048<br/>(4×10)</th>
                          <th className="border px-2 py-1 text-center">1,219×4,877<br/>(4×16)</th>
                          <th className="border px-2 py-1 text-center">1,219×6,096<br/>(4×20)</th>
                          <th className="border px-2 py-1 text-center">1,524×3,048<br/>(5×10)</th>
                          <th className="border px-2 py-1 text-center">1,524×6,096<br/>(5×20)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {steelData.checkeredPlateData.map(plate => (
                          <tr 
                            key={plate.thickness} 
                            className={`text-black ${parseFloat(diameter) === plate.thickness ? 'bg-gray-100' : ''}`}
                          >
                            <td className="border px-2 py-1 text-center">{plate.thickness}</td>
                            <td className="border px-2 py-1 text-center bg-cyan-100">{plate.weightPerSqm}</td>
                            <td className="border px-2 py-1 text-center">{plate.dimensions['3x6']}</td>
                            <td className="border px-2 py-1 text-center">{plate.dimensions['3x12']}</td>
                            <td className="border px-2 py-1 text-center">{plate.dimensions['4x8']}</td>
                            <td className="border px-2 py-1 text-center">{plate.dimensions['4x10']}</td>
                            <td className="border px-2 py-1 text-center">{plate.dimensions['4x16']}</td>
                            <td className="border px-2 py-1 text-center">{plate.dimensions['4x20']}</td>
                            <td className="border px-2 py-1 text-center">{plate.dimensions['5x10']}</td>
                            <td className="border px-2 py-1 text-center">{plate.dimensions['5x20']}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Calculator Form */}
          <div className="lg:w-2/5">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 text-gray-800">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 text-blue-600 border-b pb-4">
                {translations.calculate[language]}
              </h2>

              <div className="space-y-6">
              {/* Size Selection */}
                <div className="form-group">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  {getSizeLabel()}
                </label>
                <select 
                  value={diameter}
                  onChange={(e) => setDiameter(e.target.value)}
                    className="w-full p-3 border rounded-lg text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                >
                    <option value="">{translations.selectThickness[language]}</option>
                  {getSizeOptions()}
                </select>
              </div>

                {/* Plate Size Selection */}
                {(activeTab === 'standardPlates' || activeTab === 'checkeredPlates') && (
                  <div className="form-group">
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                      {translations.plateSize[language]}
                    </label>
                    <select 
                      value={plateSize}
                      onChange={(e) => setPlateSize(e.target.value)}
                      className="w-full p-3 border rounded-lg text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                    >
                      <option value="">{translations.selectSize[language]}</option>
                      {getPlateSizeOptions()}
                    </select>
                  </div>
                )}

                {/* Thickness Selection */}
              {activeTab === 'steelPipes' && (
                  <div className="form-group">
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                      {translations.thickness[language]}
                  </label>
                  <select 
                      value={thickness}
                      onChange={(e) => setThickness(parseFloat(e.target.value))}
                      className="w-full p-3 border rounded-lg text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                    >
                      {getThicknessOptions()}
                  </select>
                </div>
              )}

              {/* Length Input */}
                {activeTab !== 'standardPlates' && activeTab !== 'checkeredPlates' && (
                  <div className="form-group">
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                      {translations.length[language]}
                </label>
                    <div className="flex h-12 shadow-sm rounded-lg overflow-hidden">
                  <button 
                        className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-r border-gray-300"
                    onClick={() => handleDecrement(setLength, 1, length)}
                  >
                        <FaMinus className="text-gray-600" />
                  </button>
                  <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(parseInt(e.target.value) || 1)}
                        className="w-full text-center text-lg border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    min="1"
                  />
                  <button 
                        className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-l border-gray-300"
                    onClick={() => handleIncrement(setLength, 1, length)}
                  >
                        <FaPlus className="text-gray-600" />
                  </button>
                </div>
              </div>
                )}

              {/* Quantity Input */}
                <div className="form-group">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    {translations.quantity[language]}
                </label>
                  <div className="flex h-12 shadow-sm rounded-lg overflow-hidden">
                  <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-r border-gray-300"
                    onClick={() => handleDecrement(setQuantity, 1, quantity)}
                  >
                      <FaMinus className="text-gray-600" />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                      className="w-full text-center text-lg border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    min="1"
                  />
                  <button 
                      className="bg-gray-100 px-4 hover:bg-gray-200 flex items-center justify-center transition-colors border-l border-gray-300"
                      onClick={() => handleIncrement(setQuantity, 1, quantity)}
                    >
                      <FaPlus className="text-gray-600" />
                </button>
              </div>
            </div>

                {/* Results Section */}
                <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl p-6 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-sm text-gray-600 mb-1">
                        {translations.weightPerMeter[language]}
                      </p>
                      <p className="text-xl sm:text-2xl font-bold text-blue-600">
                        {weightPerMeter.toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })} kg/m
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-sm text-gray-600 mb-1">
                        {language === 'en' ? 'Total length' : 'ความยาวรวม'}
                      </p>
                      <p className="text-xl sm:text-2xl font-bold text-blue-600">
                        {length * quantity} m
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">
                      {translations.totalWeight[language]}
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-blue-700">
                      {totalWeight.toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })} kg
                </p>
              </div>
            </div>

            {/* Reset Button */}
              <button
                onClick={() => {
                    setDiameter('1/2 (15)');
                    setThickness(2.0);
                  setLength(6);
                  setQuantity(10);
                  setActiveTab('steelPipes');
                }}
                  className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-all transform hover:scale-[1.02] active:scale-[0.98] text-lg font-medium shadow-md"
              >
                  {translations.reset[language]}
              </button>
            </div>
          </div>
        </div>
      </div>

        {/* Back Button */}
        <div className="mt-8 md:mt-12 text-center">
          <Link 
            to="/engineering-tools" 
            className="inline-flex items-center text-white hover:text-blue-100 transition-colors text-base sm:text-lg"
          >
            <span className="mr-2">←</span>
            {translations.back[language]}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SteelPipesCalculator;
