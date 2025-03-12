export type Tab = {
  id: string;
  label: string;
};
export type UserData = {
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
};

export type Product = {
  id: string;
  name: string;
  value: number;
};
export type UserFormProps = {
  userData: UserData;
  onSubmit: (userData: UserData) => void;
};

export type CommissionSimulatorProps = {
  userData: UserData;
  onContinue: () => void;
};
export type ActionPlanProps = {
  userData: UserData;
};
export type DownloadButtonProps = {
  formattedDate: string;
  prospectsNeeded: number;
  monthlyPresentations: number;
  weeklyPresentations: number;
};
