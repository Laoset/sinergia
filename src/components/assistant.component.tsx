import Tabs from '../ui/tabs.ui';
import { useTabs } from '../hooks/useTab.hooks';
import { UserData } from '../types/types';
import { useState } from 'react';
import UserForm from './userForm.component';
import Simulator from './simulator.component';
import ActionPlan from './actionPlan.component';

const Assistant = () => {
  const { activeTab, handleTabChange } = useTabs();

  const [userData, setUserData] = useState<UserData>({
    name: '',
    month: 'Febrero',
    averageTicket: 1100,
    usdValue: 1055,
    selectedProduct: null,
    targetEarnings: 900000,
    actualCommission: '10%',
  });
  const handleFormSubmit = (data: UserData) => {
    setUserData(data);
    handleTabChange('Simulador');
  };

  return (
    <div>
      <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
      <div className='mt-4'>
        {activeTab === 'Datos' && (
          <UserForm userData={userData} onSubmit={handleFormSubmit} />
        )}

        {activeTab === 'Simulador' && (
          <Simulator
            userData={userData}
            onContinue={() => handleTabChange('Plan')}
          />
        )}

        {activeTab === 'Plan' && <ActionPlan userData={userData} />}
      </div>
    </div>
  );
};

export default Assistant;
