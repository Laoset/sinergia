export interface Tab {
  id: string;
  label: string;
}
export interface TabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export interface UserData {
  name: string;
  month: string;
  averageTicket: number;
  usdValue: number;
  selectedProduct: {
    id: string;
    name: string;
    value: number;
  } | null;
  targetEarnings: number;
  actualCommission: string;
}

export interface Product {
  id: string;
  name: string;
  value: number;
}
export interface UserFormProps {
  userData: UserData;
  onSubmit: (userData: UserData) => void;
}
export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label: string;
  id: string;
  error?: string;
}
export interface InputFieldProps {
  id: string;
  name: string;
  type?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label: string;
  error?: string;
  touched?: boolean;
}

export interface CommissionSimulatorProps {
  userData: UserData;
  onContinue: () => void;
}
export interface ActionPlanProps {
  userData: UserData;
}
export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  callback?: () => void;
  children: React.ReactNode;
};
