import { CheckboxCard } from '../molecules/CheckboxCard';
import { SectionHeader } from '../molecules/SectionHeader';
import { PlannerInterest } from '../../../domain/entities/PlannerTypes';
import { useLanguage } from '../../../application/hooks/useLanguage';
import { useTranslation } from '../../../application/hooks/useTranslation';

interface InterestsSectionProps {
    selectedInterests: PlannerInterest[];
    onToggle: (interest: PlannerInterest) => void;
    hasError?: boolean;
}

export const InterestsSection = ({ selectedInterests, onToggle, hasError }: InterestsSectionProps) => {
    const { language } = useLanguage();
    const t = useTranslation(language);

    const interests = [
        {
            value: 'heritage',
            label: t.planner.interests.options.heritage.label,
            subLabel: t.planner.interests.options.heritage.subLabel,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJZi3xSk_doCGNq0uskiIuoaRGfm6YDd8wdrjbI7RQhNkdswbnXYrwcPOtbT6khKpSZ7ZFirZ1qsZkU3qsEX-N4pry3ZhOJg2jJOsJb4neoqFxsX5yZdJ-5xVCK-3J-H43dccZLQMl1ZhB5MyTDwQO2t1maw75hsdHBvD-tm84LMWHoQ3makL4LJwvMZFxBsXW7gOaY-0BJdGSejiPl6vA7IGQNFTcLR5eRGw_HsfrBZ8nVsj1C-A_Q3YFmRYElfklOcqyyBzkdw'
        },
        {
            value: 'nature',
            label: t.planner.interests.options.nature.label,
            subLabel: t.planner.interests.options.nature.subLabel,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUIQlGHcqGfYEFlfuqwYFbS18MD5mVa5XBjBsA24VHVqZOCOYcM9a3f_g5ehfcrCYqx5xv_7Z2U96_BHA7ynnmRYBcIIdEvz_HMdM5tuDHntDk6hbcH7umbFdnnF6PuYxHpiEIFDQafYq42bo2WqwPOVTFMuIlagl7yu-LoYViOMq0OYfabWF6PyelBoYwhO1cQDy1csz7qKRNtZuHpQxIpPebGdj49t49yqw62dGFIXKqgd91LaKI4XV4Ae6azVeuz-TZ4Y2zPQ'
        },
        {
            value: 'shopping',
            label: t.planner.interests.options.shopping.label,
            subLabel: t.planner.interests.options.shopping.subLabel,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5UXGu3EedZCAfnk4VGiF_I2Pq47y8z74HUhU2TJkwSjZwAiy6NuwIvqEUCcjpfBD4pnWnYNh8sHiAKEsoalp5mzT8lmt_VfuSiv3HgF0c9oBF2lykEOWAWblAi8hqKtixmfgSSqZluie_0hJdjKykKdKqK6J6l_1yv-Os-jZ4kH_GJckMNMBRPcxYfqBKPsnBz8-QXvAZ6Z4uC3y689SZKttvdmrZruUMFqVwcTYv6qOivD54DAuNBazOnZvEqnxp2L6Fl0PS2Q'
        },
        {
            value: 'food',
            label: t.planner.interests.options.food.label,
            subLabel: t.planner.interests.options.food.subLabel,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY1S2B8SSt3bDsGtojeg0x7gZYsC8xmKMfodLB0zrkDkUbdvZlcD9DOg_XAwkAdxq6pNKJ--7aGNQoAU36RkxB535wzPPZjR6q5TV4BAqdgbC3xsgtBUkLvfle0pDMmUqNsicPe1pWNRqpluAaW4pX-w4UlrqPvFrWDn2Ycta_2ckUQqhiY-MgufURQh1vSm8HARNoijlJvTLKU6mhLdbaxPWF832b8RU8xbig4eFf7g6rZTRRb8wYuRt9xay6OdJ0Z62dk1yfvw'
        }
    ];

    return (
        <div className={`md:col-span-12 bg-white p-6 rounded-xl shadow-sm border transition-all duration-300 ${hasError ? 'border-red-500 bg-red-50' : 'border-[#dfe3de]/50'}`}>
            <SectionHeader
                icon="interests"
                title={t.planner.interests.title}
                subtitle={t.planner.interests.subtitle}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {interests.map((interest) => (
                    <CheckboxCard
                        key={interest.value}
                        name="interests"
                        value={interest.value}
                        label={interest.label}
                        subLabel={interest.subLabel}
                        image={interest.image}
                        isSelected={selectedInterests.includes(interest.value as PlannerInterest)}
                        onChange={() => onToggle(interest.value as PlannerInterest)}
                    />
                ))}
            </div>
        </div>
    );
};
