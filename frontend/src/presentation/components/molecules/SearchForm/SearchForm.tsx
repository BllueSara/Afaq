import { useState, FormEvent } from 'react';
import { Select } from '@/presentation/components/atoms/Select';
import { Button } from '@/presentation/components/atoms/Button';
import { Icon } from '@/presentation/components/atoms/Icon';
import { Region } from '@/domain/entities/Region';
import { ExperienceType } from '@/domain/entities/ExperienceType';
import { SearchFilters } from '@/domain/interfaces/SearchFilters';
import { useLanguage } from '@/application/hooks/useLanguage';
import { useTranslation } from '@/application/hooks/useTranslation';

interface SearchFormProps {
  onSubmit: (filters: SearchFilters) => void;
}

export const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const { language, isRTL } = useLanguage();
  const t = useTranslation(language);
  const [region, setRegion] = useState<string>('');
  const [experienceType, setExperienceType] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      region: region ? (region as Region) : undefined,
      experienceType: experienceType ? (experienceType as ExperienceType) : undefined,
    });
  };

  const regionOptions = [
    { value: '', label: t.search.selectRegion },
    { value: Region.NAJD, label: t.regions.najd },
    { value: Region.HEJAZ, label: t.regions.hejaz },
    { value: Region.ASIR, label: t.regions.asir },
    { value: Region.EASTERN, label: t.regions.eastern },
  ];

  const experienceOptions = [
    { value: '', label: t.search.selectExperience },
    { value: ExperienceType.HISTORICAL_SITES, label: t.experienceTypes.historicalSites },
    { value: ExperienceType.CULINARY_ARTS, label: t.experienceTypes.culinaryArts },
    { value: ExperienceType.TRADITIONAL_CRAFTS, label: t.experienceTypes.traditionalCrafts },
    { value: ExperienceType.LOCAL_FESTIVALS, label: t.experienceTypes.localFestivals },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/95 dark:bg-background-dark/95 backdrop-blur-md p-3 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-3 max-w-4xl mx-auto"
    >
      <div className={`flex-1 w-full ${isRTL ? 'text-right' : 'text-left'} px-4 border-b md:border-b-0 ${isRTL ? 'md:border-l' : 'md:border-r'} border-[#2D5A27]/10`}>
        <Select
          label={t.search.region}
          options={regionOptions}
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
      </div>
      <div className={`flex-1 w-full ${isRTL ? 'text-right' : 'text-left'} px-4`}>
        <Select
          label={t.search.experienceType}
          options={experienceOptions}
          value={experienceType}
          onChange={(e) => setExperienceType(e.target.value)}
        />
      </div>
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full md:w-auto min-w-[160px] py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-primary/30"
      >
        <Icon name="search" size="xl" />
        {t.hero.discover}
      </Button>
    </form>
  );
};

