import clsx from 'clsx';

interface StopBadgeProps {
    text: string;
    variant?: 'primary' | 'secondary';
    className?: string;
}

export const StopBadge = ({ text, variant = 'primary', className }: StopBadgeProps) => {
    return (
        <span className={clsx(
            "px-3 py-1 rounded-full text-xs font-bold",
            variant === 'primary' ? "bg-primary text-white" : "bg-primary/10 text-primary",
            className
        )}>
            {text}
        </span>
    );
};
