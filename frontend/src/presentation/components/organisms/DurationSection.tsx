import { RadioGroup } from '../molecules/RadioGroup';
import { SectionHeader } from '../molecules/SectionHeader';
import { PlannerDuration } from '../../../domain/entities/PlannerTypes';
import { useLanguage } from '../../../application/hooks/useLanguage';
import { useTranslation } from '../../../application/hooks/useTranslation';

interface DurationSectionProps {
    selectedDuration: PlannerDuration | null;
    onChange: (duration: PlannerDuration) => void;
    hasError?: boolean;
}

export const DurationSection = ({ selectedDuration, onChange, hasError }: DurationSectionProps) => {
    const { language } = useLanguage();
    const t = useTranslation(language);

    return (
        <div className={`md:col-span-6 bg-white p-6 rounded-xl shadow-sm border flex flex-col transition-colors ${hasError ? 'border-red-500 bg-red-50' : 'border-[#dfe3de]/50'}`}>
            <SectionHeader icon="schedule" title={t.planner.duration.title} />
            <div className="flex-1">
                <RadioGroup
                    name="duration"
                    options={[
                        { value: '2-hours', label: t.planner.duration.options.twoHours, icon: 'timer' },
                        { value: 'half-day', label: t.planner.duration.options.halfDay, icon: 'partly_cloudy_day' },
                        { value: 'full-day', label: t.planner.duration.options.fullDay, icon: 'wb_sunny' },
                    ]}
                    selectedValue={selectedDuration}
                    onChange={onChange}
                    columns={3}
                    cardVariant="vertical"
                />
            </div>
        </div>
    );
};
