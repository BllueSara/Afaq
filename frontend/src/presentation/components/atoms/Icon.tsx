import clsx from 'clsx';

interface IconProps {
    name: string;
    className?: string;
    filled?: boolean;
}

export const Icon = ({ name, className, filled = false }: IconProps) => {
    return (
        <span
            className={clsx(
                'material-symbols-outlined',
                filled && "font-variation-settings-'FILL'-1",
                className
            )}
        >
            {name}
        </span>
    );
};
