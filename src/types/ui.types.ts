// CARD
export interface CardProps {
  children: React.ReactNode;
  className?: string;
  isHighlighted?: boolean;
}

export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

// DROPDOWN
export interface DropdownProps {
  title: React.ReactNode;
  children: React.ReactNode;
  isHighlighted?: boolean;
  defaultExpanded?: boolean;
  badge?: React.ReactNode;
}

// BUTTON
export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  callback?: () => void;
  children: React.ReactNode;
};

//INPUT FIELD
export interface InputFieldProps {
  id: string;
  name: string;
  type?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label: string;
  error?: string;
}

// TABS
export interface TabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

// SELECT
interface Option {
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
