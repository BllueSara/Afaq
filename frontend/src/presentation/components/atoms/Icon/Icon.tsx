import { HTMLAttributes } from 'react';

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}

const sizeMap = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
};

export const Icon = ({
  name,
  size = 'md',
  className = '',
  ...props
}: IconProps) => {
  return (
    <span
      className={`material-symbols-outlined ${sizeMap[size]} ${className}`}
      {...props}
    >
      {name}
    </span>
  );
};

