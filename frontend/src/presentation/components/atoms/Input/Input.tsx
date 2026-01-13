import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = ({
  label,
  error,
  className = '',
  ...props
}: InputProps) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-[11px] font-bold text-primary/60 mb-1">
          {label}
        </label>
      )}
      <input
        className={`w-full bg-white/10 border-white/20 rounded-lg px-4 py-3 text-sm focus:ring-accent-gold focus:border-accent-gold placeholder:text-white/30 text-right ${className}`}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

