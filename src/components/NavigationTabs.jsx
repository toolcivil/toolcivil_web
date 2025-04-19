import React from 'react';
import * as steelData from '../data/steelData';

const NavigationTabs = ({ activeTab, setActiveTab, setDiameter, setThickness }) => {
  const tabs = [
    { id: 'steelPipes', label: 'Steel Pipes' },
    { id: 'hBeams', label: 'H-Beams' },
    { id: 'iBeams', label: 'I-Beams' },
    { id: 'channels', label: 'Standard Channels' },
    { id: 'lipChannels', label: 'Light Lip Channels' },
    { id: 'flatBars', label: 'Flat Bars' },
    { id: 'equalAngles', label: 'Equal Angles' },
    { id: 'squareBars', label: 'Square Bars' },
    { id: 'squareTubes', label: 'Square Tubes' },
    { id: 'sheetPiles', label: 'Steel Sheet Piles' },
    { id: 'standardPlates', label: 'Standard Plates' },
    { id: 'checkeredPlates', label: 'Checkered Plates' }
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'steelPipes') {
      setDiameter('1/2 (15)');
      setThickness(2.0);
    } else {
      // Set default values for other tabs
      const firstOption = Object.keys(steelData[`${tabId}Data`])[0];
      setDiameter(firstOption);
      setThickness(null); // Thickness is only applicable for steel pipes
    }
  };

  return (
    <div className="flex justify-center mb-8 overflow-x-auto">
      <div className="grid grid-cols-4 md:grid-cols-6 gap-2 max-w-5xl">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`px-3 py-2 text-sm font-medium rounded-md ${
              activeTab === tab.id 
                ? 'bg-blue-700 text-white' 
                : 'bg-white text-blue-700 hover:bg-blue-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationTabs; 