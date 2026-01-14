import { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    children: ReactNode;
}

export const Button = ({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className,
    children,
    ...props
}: ButtonProps) => {
    const baseStyles = 'flex items-center justify-center gap-2 rounded-lg font-bold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
        primary: 'bg-primary text-white hover:bg-[#23471e] shadow-lg shadow-primary/20',
        secondary: 'bg-[#f1f3f1] text-text-dark hover:bg-[#e2e5e2]',
        outline: 'border border-[#dfe3de] bg-transparent text-text-dark hover:bg-gray-50',
        ghost: 'bg-transparent text-text-dark hover:bg-black/5',
    };

    const sizeStyles = {
        sm: 'h-9 px-4 text-xs',
        md: 'h-10 px-4 text-sm',
        lg: 'py-4 px-8 text-lg rounded-xl',
    };

    return (
        <button
            className={twMerge(
                baseStyles,
                variants[variant],
                sizeStyles[size],
                fullWidth && 'w-full',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};
