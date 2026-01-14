import { Icon } from '../atoms/Icon';
import { SectionHeader } from '../molecules/SectionHeader';
import { PlannerCity } from '../../../domain/entities/PlannerTypes';
import { useLanguage } from '../../../application/hooks/useLanguage';
import { useTranslation } from '../../../application/hooks/useTranslation';

interface LocationSectionProps {
    selectedCity: PlannerCity | '';
    onChange: (city: PlannerCity) => void;
}

export const LocationSection = ({ selectedCity, onChange }: LocationSectionProps) => {
    const { language, isRTL } = useLanguage();
    const t = useTranslation(language);

    return (
        <div className="md:col-span-12 bg-white p-6 rounded-xl shadow-sm border border-[#dfe3de]/50">
            <SectionHeader icon="location_on" title={t.planner.location.title} />
            <div className="relative">
                <select
                    value={selectedCity}
                    onChange={(e) => onChange(e.target.value as PlannerCity)}
                    className={`appearance-none w-full cursor-pointer rounded-lg border border-[#dfe3de] bg-white text-text-dark p-4 text-base font-medium focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow ${isRTL ? 'pl-10' : 'pr-10'}`}
                >
                    <option disabled value="">{t.planner.location.placeholder}</option>
                    <option value="Riyadh">{t.planner.location.cities.riyadh}</option>
                    <option value="Jeddah">{t.planner.location.cities.jeddah}</option>
                    <option value="AlUla">{t.planner.location.cities.alula}</option>
                    <option value="Dammam">{t.planner.location.cities.dammam}</option>
                    <option value="Abha">{t.planner.location.cities.abha}</option>
                </select>
                <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none text-text-muted ${isRTL ? 'left-4' : 'right-4'}`}>
                    <Icon name="expand_more" />
                </div>
            </div>
        </div>
    );
};
