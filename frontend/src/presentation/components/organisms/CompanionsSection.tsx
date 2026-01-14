import { RadioGroup } from '../molecules/RadioGroup';
import { SectionHeader } from '../molecules/SectionHeader';
import { PlannerCompanion } from '../../../domain/entities/PlannerTypes';
import { useLanguage } from '../../../application/hooks/useLanguage';
import { useTranslation } from '../../../application/hooks/useTranslation';

interface CompanionsSectionProps {
    selectedCompanion: PlannerCompanion | null;
    onChange: (companion: PlannerCompanion) => void;
    hasError?: boolean;
}

export const CompanionsSection = ({ selectedCompanion, onChange, hasError }: CompanionsSectionProps) => {
    const { language } = useLanguage();
    const t = useTranslation(language);

    return (
        <div className={`md:col-span-6 bg-white p-6 rounded-xl shadow-sm border flex flex-col transition-colors ${hasError ? 'border-red-500 bg-red-50' : 'border-[#dfe3de]/50'}`}>
            <SectionHeader icon="group" title={t.planner.companions.title} />
            <div className="flex-1">
                <RadioGroup
                    name="companion"
                    options={[
                        { value: 'solo', label: t.planner.companions.options.solo, icon: 'person' },
                        { value: 'couple', label: t.planner.companions.options.couple, icon: 'favorite' },
                        { value: 'family', label: t.planner.companions.options.family, icon: 'family_restroom' },
                        { value: 'friends', label: t.planner.companions.options.friends, icon: 'diversity_3' },
                    ]}
                    selectedValue={selectedCompanion}
                    onChange={onChange}
                    layout="grid"
                    columns={2}
                    cardVariant="horizontal"
                />
            </div>
        </div>
    );
};
