import React from 'react';
import { InputFieldProps } from '../types/types';

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  label,
  error,
}) => {
  return (
    <div className='space-y-2'>
      <label htmlFor={id} className='block text-base font-semibold text-start'>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='w-full h-14 px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      {error && <p className='text-sm text-red-500 mt-1'>{error}</p>}
    </div>
  );
};

export default InputField;
