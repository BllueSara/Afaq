import { Icon } from '../atoms/Icon';

interface SectionHeaderProps {
    icon: string;
    title: string;
    subtitle?: string;
    className?: string;
}

export const SectionHeader = ({ icon, title, subtitle, className }: SectionHeaderProps) => {
    return (
        <div className={`flex items-center gap-2 mb-4 ${className}`}>
            <Icon name={icon} className="text-primary" />
            <span className="text-text-dark text-lg font-bold">{title}</span>
            {subtitle && <span className="text-sm text-text-muted font-normal mr-auto">{subtitle}</span>}
        </div>
    );
};
