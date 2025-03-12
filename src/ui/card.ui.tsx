import React from 'react';
import {
  CardContentProps,
  CardHeaderProps,
  CardProps,
  CardTitleProps,
} from '../types/ui.types';

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  isHighlighted = false,
}) => {
  return (
    <div
      className={`rounded-lg border ${
        isHighlighted ? 'border-[#215a6c] bg-[#215a6c]/5' : 'border-gray-200'
      } overflow-hidden shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = '',
}) => {
  return <div className={`p-3 pb-2 ${className}`}>{children}</div>;
};

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className = '',
}) => {
  return (
    <h3 className={`text-base font-medium text-black ${className}`}>
      {children}
    </h3>
  );
};

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className = '',
}) => {
  return <div className={`p-3 pt-0 ${className}`}>{children}</div>;
};
