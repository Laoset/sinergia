import React, { useEffect, useRef, useState } from 'react';
import { SelectProps } from '../types/types';
import styles from '../styles/select.module.css';

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  label,
  id,
  error,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className='space-y-2'>
      <label htmlFor={id} className='block text-base font-semibold text-start'>
        {label}
      </label>
      <div className='relative w-full' ref={selectRef}>
        <div
          className={`h-14 px-3 py-2 border border-[#ccc] rounded-sm bg-white pointer flex justify-between items-center  ${
            isOpen ? styles.open : ''
          }`}
          onClick={handleToggle}
        >
          <span>
            {selectedOption
              ? selectedOption.label
              : placeholder || 'Seleccione una opción'}
          </span>
          <div className={styles.arrow}></div>
        </div>
        {isOpen && (
          <ul className={styles.options}>
            {options.map((option) => (
              <li
                key={option.value}
                className={`p-[10px] pointer hover:bg-[#f0f0f0] selection:bg-[#e6e6e6] ${
                  value === option.value ? styles.selected : ''
                }`}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
        {error && <p className='text-sm text-red-500 mt-1'>{error}</p>}
      </div>
    </div>
  );
};

export default Select;
