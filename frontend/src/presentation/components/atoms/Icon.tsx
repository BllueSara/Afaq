import clsx from 'clsx';

interface IconProps {
    name: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
    className?: string;
    filled?: boolean;
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

export const Icon = ({ name, size = 'md', className, filled = false }: IconProps) => {
    return (
        <span
            className={clsx(
                'material-symbols-outlined',
                sizeMap[size],
                filled && "font-variation-settings-'FILL'-1",
                className
            )}
        >
            {name}
        </span>
    );
};
