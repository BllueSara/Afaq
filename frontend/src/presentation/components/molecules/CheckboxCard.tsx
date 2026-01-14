import clsx from 'clsx';
import { Icon } from '../atoms/Icon';
import { motion } from 'framer-motion';

interface CheckboxCardProps {
    name: string;
    value: string;
    label: string;
    subLabel: string;
    image: string;
    isSelected: boolean;
    onChange: (value: any) => void;
}

export const CheckboxCard = ({
    name,
    value,
    label,
    subLabel,
    image,
    isSelected,
    onChange
}: CheckboxCardProps) => {
    return (
        <label className="group relative cursor-pointer block h-full">
            <input
                type="checkbox"
                name={name}
                value={value}
                checked={isSelected}
                onChange={() => onChange(value)}
                className="peer sr-only"
            />

            {/* Checkmark Circle */}
            <div className={clsx(
                "absolute top-3 left-3 z-10 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors shadow-sm",
                isSelected ? "bg-primary border-primary" : "bg-white border-gray-300"
            )}>
                <Icon
                    name="check"
                    className={clsx("text-white text-[16px] transition-opacity", isSelected ? "opacity-100" : "opacity-0")}
                />
            </div>

            <motion.div
                whileHover={{ y: -4 }}
                className={clsx(
                    "h-full block rounded-xl overflow-hidden border-2 transition-all shadow-sm group-hover:shadow-md",
                    isSelected ? "border-primary" : "border-transparent"
                )}
            >
                <div
                    className="w-full h-32 bg-center bg-cover relative"
                    style={{ backgroundImage: `url('${image}')` }}
                >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-3 bg-[#fcfdfc]">
                    <p className="text-text-dark text-base font-bold">{label}</p>
                    <p className="text-text-muted text-xs mt-1">{subLabel}</p>
                </div>
            </motion.div>
        </label>
    );
};
