import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick }) => {
  const baseClasses = "px-7 py-2.5 rounded-[10px] flex justify-center items-center gap-1.5 text-sm font-semibold leading-[16.8px]";
  const variantClasses = {
    primary: "bg-[#9F5434] text-[#FAFAFA]",
    secondary: "bg-[#E4B458] text-[#0B0A0A]"
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;