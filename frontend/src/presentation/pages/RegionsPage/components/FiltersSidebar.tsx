import { Icon } from '@/presentation/components/atoms/Icon';
import { useLanguage } from '@/application/hooks/useLanguage';

interface RegionsFilters {
  regions: string[];
  interests: string[];
}

interface FiltersSidebarProps {
  filters: RegionsFilters;
  onChange: (filters: RegionsFilters) => void;
}

export const FiltersSidebar = ({ filters, onChange }: FiltersSidebarProps) => {
  const { language, isRTL } = useLanguage();

  const toggleRegion = (key: string) => {
    const exists = filters.regions.includes(key);
    const regions = exists ? filters.regions.filter((r) => r !== key) : [...filters.regions, key];
    onChange({ ...filters, regions });
  };

  const toggleInterest = (label: string) => {
    const exists = filters.interests.includes(label);
    const interests = exists
      ? filters.interests.filter((i) => i !== label)
      : [...filters.interests, label];
    onChange({ ...filters, interests });
  };

  const interestClass = (label: string) =>
    `text-[10px] px-3 py-1.5 rounded-full border border-primary/10 cursor-pointer transition-colors ${
      filters.interests.includes(label)
        ? 'bg-primary text-white'
        : 'bg-primary/5 text-primary hover:bg-primary/10'
    }`;

  return (
    <aside className="w-72 bg-white/50 backdrop-blur-sm border border-primary/10 rounded-3xl p-6 flex flex-col gap-8 custom-scrollbar overflow-y-auto">
      <div>
        <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
          <Icon name="filter_list" />
          الفلاتر
        </h3>
        <div className="space-y-6">
          {/* Region Filter */}
          <div>
            <p className="text-sm font-bold text-primary/80 mb-3">
              {language === 'ar' ? 'المنطقة' : 'Region'}
            </p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.regions.includes('north')}
                  onChange={() => toggleRegion('north')}
                  className="rounded border-primary/20 text-primary focus:ring-primary/20"
                />
                <span className="text-sm group-hover:text-primary">
                  {language === 'ar' ? 'المنطقة الشمالية' : 'Northern Region'}
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.regions.includes('central')}
                  onChange={() => toggleRegion('central')}
                  className="rounded border-primary/20 text-primary focus:ring-primary/20"
                />
                <span className="text-sm group-hover:text-primary">
                  {language === 'ar' ? 'المنطقة الوسطى' : 'Central Region'}
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.regions.includes('west')}
                  onChange={() => toggleRegion('west')}
                  className="rounded border-primary/20 text-primary focus:ring-primary/20"
                />
                <span className="text-sm group-hover:text-primary">
                  {language === 'ar' ? 'المنطقة الغربية' : 'Western Region'}
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.regions.includes('south')}
                  onChange={() => toggleRegion('south')}
                  className="rounded border-primary/20 text-primary focus:ring-primary/20"
                />
                <span className="text-sm group-hover:text-primary">
                  {language === 'ar' ? 'المنطقة الجنوبية' : 'Southern Region'}
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.regions.includes('east')}
                  onChange={() => toggleRegion('east')}
                  className="rounded border-primary/20 text-primary focus:ring-primary/20"
                />
                <span className="text-sm group-hover:text-primary">
                  {language === 'ar' ? 'المنطقة الشرقية' : 'Eastern Region'}
                </span>
              </label>
            </div>
          </div>

          {/* Interests */}
          <div>
            <p className="text-sm font-bold text-primary/80 mb-3">
              {language === 'ar' ? 'الاهتمامات' : 'Interests'}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className={interestClass('التاريخ')} onClick={() => toggleInterest('التاريخ')}>
                {language === 'ar' ? 'التاريخ' : 'History'}
              </span>
              <span className={interestClass('الطبيعة')} onClick={() => toggleInterest('الطبيعة')}>
                {language === 'ar' ? 'الطبيعة' : 'Nature'}
              </span>
              <span className={interestClass('العمارة')} onClick={() => toggleInterest('العمارة')}>
                {language === 'ar' ? 'العمارة' : 'Architecture'}
              </span>
              <span className={interestClass('الفنون')} onClick={() => toggleInterest('الفنون')}>
                {language === 'ar' ? 'الفنون' : 'Arts'}
              </span>
              <span className={interestClass('الطهي')} onClick={() => toggleInterest('الطهي')}>
                {language === 'ar' ? 'الطهي' : 'Cuisine'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

