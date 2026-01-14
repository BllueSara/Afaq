import { RangeSlider } from '../atoms/RangeSlider';
import { SectionHeader } from '../molecules/SectionHeader';
import { useLanguage } from '../../../application/hooks/useLanguage';
import { useTranslation } from '../../../application/hooks/useTranslation';

interface ActivitySectionProps {
    activityLevel: number;
    onChange: (level: number) => void;
    hasError?: boolean;
}

export const ActivitySection = ({ activityLevel, onChange, hasError }: ActivitySectionProps) => {
    const { language } = useLanguage();
    const t = useTranslation(language);

    return (
        <div className={`md:col-span-12 bg-white p-6 rounded-xl shadow-sm border transition-all duration-300 ${hasError ? 'border-red-500 bg-red-50' : 'border-[#dfe3de]/50'}`}>
            <SectionHeader icon="directions_run" title={t.planner.activity.title} className="mb-8" />
            <RangeSlider
                min={1}
                max={5}
                value={activityLevel}
                onChange={(e) => onChange(Number(e.target.value))}
                minLabel={
                    <>
                        <span className="material-symbols-outlined">self_improvement</span>
                        <span>{t.planner.activity.relaxed}</span>
                    </>
                }
                maxLabel={
                    <>
                        <span>{t.planner.activity.active}</span>
                        <span className="material-symbols-outlined">hiking</span>
                    </>
                }
            />
        </div>
    );
};
