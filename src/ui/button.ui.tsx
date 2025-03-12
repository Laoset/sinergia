import { ButtonProps } from '../types/ui.types';

const Button = ({ type, callback, children }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={callback}
      className='w-full h-12 text-base font-bold mt-4 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 flex items-center justify-center'
    >
      {children}
    </button>
  );
};

export default Button;
