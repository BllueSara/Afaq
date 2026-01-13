import { SelectHTMLAttributes } from 'react';
import { useLanguage } from '@/application/hooks/useLanguage';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
}

export const Select = ({
  label,
  options,
  error,
  className = '',
  ...props
}: SelectProps) => {
  const { isRTL } = useLanguage();
  
  return (
    <div className="w-full">
      {label && (
        <label className="block text-[11px] font-bold text-primary/60 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className={`w-full bg-transparent border-none p-0 text-[#121811] dark:text-white font-bold focus:ring-0 appearance-none cursor-pointer ${className}`}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className={`material-symbols-outlined absolute ${isRTL ? 'left-0' : 'right-0'} top-0 text-primary pointer-events-none`}>
          expand_more
        </span>
      </div>
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

