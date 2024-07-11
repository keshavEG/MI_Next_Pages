import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`justify-center px-6 py-3.5 text-sm leading-4 text-white bg-orange-400 rounded-md max-md:px-5 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};