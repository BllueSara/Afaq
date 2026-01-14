import { InputHTMLAttributes } from 'react';

interface RangeSliderProps extends InputHTMLAttributes<HTMLInputElement> {
    minLabel?: React.ReactNode;
    maxLabel?: React.ReactNode;
}

export const RangeSlider = ({ minLabel, maxLabel, className, ...props }: RangeSliderProps) => {
    return (
        <div className={`px-4 ${className}`}>
            <input
                type="range"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                {...props}
            />
            {(minLabel || maxLabel) && (
                <div className="flex justify-between mt-4 text-sm font-bold text-text-muted">
                    {minLabel && <div className="flex items-center gap-2 text-primary">{minLabel}</div>}
                    {maxLabel && <div className="flex items-center gap-2 text-primary">{maxLabel}</div>}
                </div>
            )}
        </div>
    );
};
