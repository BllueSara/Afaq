import { useState } from 'react';
import { Navigation } from '@/presentation/components/molecules/Navigation';
import { useLanguage } from '@/application/hooks/useLanguage';
import { FiltersSidebar } from './components/FiltersSidebar';
import { DestinationGrid } from './components/DestinationGrid';
import { MapSection } from './components/MapSection';

export const RegionsPage = () => {
  const { dir } = useLanguage();
  const [activeTab, setActiveTab] = useState<'heritage' | 'modern'>('heritage');

  return (
    <div className={`bg-background-beige text-[#121811] min-h-screen flex flex-col font-arabic`} dir={dir}>
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
              المواقع الأثرية والتراثية
            </button>
            <button
              onClick={() => setActiveTab('modern')}
              className={`px-8 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === 'modern'
                  ? 'bg-white text-primary shadow-sm border border-primary/10'
                  : 'text-primary/60 hover:text-primary'
              }`}
            >
              السياحة والترفيه الحديث
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-6 h-[calc(100vh-220px)] mb-8">
          <FiltersSidebar />
          <DestinationGrid activeTab={activeTab} />
          <MapSection />
        </div>
      </main>
    </div>
  );
};

