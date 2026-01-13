import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = 'font-bold transition-all cursor-pointer items-center justify-center rounded-lg';
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-accent-gold text-white hover:bg-accent-gold/90',
    outline: 'bg-white text-primary hover:bg-accent-gold hover:text-white border-2 border-primary'
  };
  
  const sizeStyles = {
    sm: 'h-9 px-4 text-xs',
    md: 'h-11 px-6 text-sm',
    lg: 'py-4 px-8 text-base rounded-xl'
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

