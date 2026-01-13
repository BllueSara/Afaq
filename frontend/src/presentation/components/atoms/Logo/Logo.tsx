import { HTMLAttributes } from 'react';
import logoImage from '@/assets/logo.png';

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo = ({
  showText = true,
  size = 'md',
  className = '',
  ...props
}: LogoProps) => {
  const sizeStyles = {
    sm: 'h-20 w-auto',
    md: 'h-24 w-auto',
    lg: 'h-28 w-auto'
  };
  
  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };
  
  return (
    <div className={`flex items-center gap-3 ${className}`} {...props}>
      <img
        src={logoImage}
        alt="آفاق"
        className={sizeStyles[size]}
      />
      {showText && (
        <h2 className={`${textSizes[size]} font-extrabold tracking-tight`}>
          آفاق
        </h2>
      )}
    </div>
  );
};

