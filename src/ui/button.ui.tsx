import { ButtonProps } from '../types/types';

const Button = ({ type, callback, children }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={callback}
      className='w-full h-12 text-base font-bold mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center'
    >
      {children}
    </button>
  );
};

export default Button;
