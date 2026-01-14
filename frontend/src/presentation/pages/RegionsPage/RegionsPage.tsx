import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation } from '@/presentation/components/molecules/Navigation';
import { useLanguage } from '@/application/hooks/useLanguage';
import { useTranslation } from '@/application/hooks/useTranslation';
import { FiltersSidebar } from './components/FiltersSidebar';
import { DestinationGrid } from './components/DestinationGrid';
import { MapSection } from './components/MapSection';

interface RegionsFilters {
  regions: string[];
  interests: string[];
}

export const RegionsPage = () => {
  const { dir, language } = useLanguage();
  const t = useTranslation(language);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'heritage' | 'modern'>('heritage');
  const [filters, setFilters] = useState<RegionsFilters>({ regions: [], interests: [] });

  // Sync filters from query params (region + experienceType)
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const regionParam = searchParams.get('region');
    const experienceType = searchParams.get('experienceType');

    const nextFilters: RegionsFilters = { regions: [], interests: [] };

    if (regionParam) {
      // Map domain Region enum to RegionsPage region keys
      switch (regionParam) {
        case 'north':
          nextFilters.regions.push('north');
          break;
        case 'najd':
          nextFilters.regions.push('central');
          break;
        case 'asir':
          nextFilters.regions.push('south');
          break;
        case 'hejaz':
          nextFilters.regions.push('west');
          break;
        case 'eastern':
          nextFilters.regions.push('east');
          break;
        default:
          break;
      }
    }

    if (experienceType) {
      // Map ExperienceType to UI interests + tab
      switch (experienceType) {
        case 'historicalSites':
          nextFilters.interests.push('التاريخ', 'العمارة');
          setActiveTab('heritage');
          break;
        case 'culinaryArts':
          nextFilters.interests.push('الطهي');
          setActiveTab('modern');
          break;
        case 'traditionalCrafts':
          nextFilters.interests.push('الفنون');
          setActiveTab('heritage');
          break;
        case 'localFestivals':
          nextFilters.interests.push('الفنون', 'الطبيعة');
          setActiveTab('modern');
          break;
        default:
          break;
      }
    }

    setFilters(nextFilters);
  }, [location.search]);

  return (
    <div className={`bg-background-light text-[#121811] min-h-screen flex flex-col font-arabic`} dir={dir}>
      <Navigation />
      <main className="flex flex-col flex-1 max-w-[1600px] mx-auto w-full px-4 sm:px-6 pt-20">
        {/* Tabs */}
        <div className="flex justify-center mt-8 mb-6">
          <div className="inline-flex bg-primary/5 p-1.5 rounded-2xl border border-primary/10">
            <button
              onClick={() => setActiveTab('heritage')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'heritage'
                  ? 'bg-white text-primary shadow-sm border border-primary/10'
                  : 'text-primary/60 hover:text-primary'
              }`}
            >
              {t.regionsPage.tabs.heritage}
            </button>
            <button
              onClick={() => setActiveTab('modern')}
              className={`px-8 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === 'modern'
                  ? 'bg-white text-primary shadow-sm border border-primary/10'
                  : 'text-primary/60 hover:text-primary'
              }`}
            >
              {t.regionsPage.tabs.modern}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-6 h-[calc(100vh-220px)] mb-8">
          <FiltersSidebar filters={filters} onChange={setFilters} />
          <DestinationGrid activeTab={activeTab} filters={filters} />
          <MapSection />
        </div>
      </main>
    </div>
  );
};

