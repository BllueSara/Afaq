import clsx from 'clsx';
import { Icon } from '../atoms/Icon';
import { motion } from 'framer-motion';

interface RadioOption {
    value: string;
    label: string;
    icon: string;
}

interface RadioGroupProps {
    name: string;
    options: RadioOption[];
    selectedValue: string | null;
    onChange: (value: any) => void;
    layout?: 'grid' | 'flex';
    columns?: number;
    cardVariant?: 'vertical' | 'horizontal';
}

export const RadioGroup = ({
    name,
    options,
    selectedValue,
    onChange,
    layout = 'grid',
    columns = 3,
    cardVariant = 'vertical'
}: RadioGroupProps) => {
    return (
        <div className={clsx(
            'gap-4',
            layout === 'grid' ? `grid grid-cols-1 ${columns === 2 ? 'grid-cols-2' : 'grid-cols-3'}` : 'flex flex-wrap'
        )}>
            {options.map((option) => {
                const isSelected = selectedValue === option.value;
                return (
                    <label key={option.value} className="group cursor-pointer relative block h-full">
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={isSelected}
                            onChange={() => onChange(option.value)}
                            className="peer sr-only"
                        />
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={clsx(
                                "h-full flex items-center justify-center p-4 rounded-lg border transition-all duration-200",
                                // Text styling
                                "font-bold text-text-dark",
                                // Layout based on variant
                                cardVariant === 'vertical' ? "flex-col gap-3 text-center" : "flex-row-reverse gap-3 justify-between",
                                // Styling States
                                isSelected
                                    ? "border-[2px] border-[#2D5A27] bg-[rgba(45,90,39,0.05)]"
                                    : "border-[#dfe3de] bg-[#fcfdfc] hover:bg-gray-50"
                            )}
                        >
                            <Icon
                                name={option.icon}
                                className={clsx(
                                    "transition-colors text-2xl",
                                    isSelected ? "text-[#2D5A27]" : "text-text-muted group-hover:text-[#2D5A27]"
                                )}
                            />
                            <span className="text-base">{option.label}</span>
                        </motion.div>
                    </label>
                );
            })}
        </div>
    );
};
