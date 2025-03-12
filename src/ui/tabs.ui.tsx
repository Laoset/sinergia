import React from 'react';
import { TABS } from '../lib/constants';
import { TabsProps } from '../types/ui.types';

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  const activeIndex = TABS.findIndex((tab) => tab.label === activeTab);

  return (
    <div className='flex border-b border-gray-200'>
      {TABS.map((tab, index) => {
        const isDisabled = index > activeIndex;
        return (
          <button
            key={tab.id}
            className={`flex-1 py-2 px-4 text-sm font-medium ${
              activeTab === tab.label
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => onTabChange(tab.label)}
            disabled={isDisabled}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
