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
