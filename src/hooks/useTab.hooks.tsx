import { useState } from 'react';
import { TABS } from '../lib/constants';

export const useTabs = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].label);

  const handleTabChange = (tabLabel: string) => {
    setActiveTab(tabLabel);
  };

  return {
    activeTab,
    handleTabChange,
  };
};
