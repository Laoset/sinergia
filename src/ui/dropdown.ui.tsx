import { useState } from 'react';
import { DropdownProps } from '../types/typesUi';
import { Card, CardContent, CardHeader } from './card.ui';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Dropdown: React.FC<DropdownProps> = ({
  title,
  children,
  isHighlighted = false,
  defaultExpanded = false,
  badge,
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <Card isHighlighted={isHighlighted}>
      <CardHeader className='pb-0'>
        <div
          className='flex items-center justify-between cursor-pointer'
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className='flex items-center gap-2'>
            {title}
            {badge}
          </div>
          {isExpanded ? (
            <ChevronUp className='h-4 w-4 text-gray-500' />
          ) : (
            <ChevronDown className='h-4 w-4 text-gray-500' />
          )}
        </div>
      </CardHeader>
      {isExpanded && <CardContent>{children}</CardContent>}
    </Card>
  );
};

export const Badge: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <span className='text-xs bg-[#215a6c] text-[#c6dbe1] px-2 py-0.5 rounded-full'>
      {children}
    </span>
  );
};
