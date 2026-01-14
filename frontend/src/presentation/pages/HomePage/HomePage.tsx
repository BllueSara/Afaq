import { useNavigate } from 'react-router-dom';
import { SearchForm, Navigation, DestinationCard } from '@/presentation/components/molecules';
import { Icon } from '@/presentation/components/atoms';
import { Destination } from '@/domain/entities/Destination';
import { Region } from '@/domain/entities/Region';
import { SearchFilters } from '@/domain/interfaces/SearchFilters';
import { useLanguage } from '@/application/hooks/useLanguage';
import { useTranslation } from '@/application/hooks/useTranslation';
import { DestinationMapper } from '@/infrastructure/mappers/DestinationMapper';
import { useMemo } from 'react';

const heroImageUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCsW_khh3ISZK_5EJOiWXasOLPE9NQ1r5DiXwV6IPOi-G3NUIL-WeDfNFOoODJLew91BkZAepCS9vTmX2BzOuo56Sra3njpWVQ81cqR_FUvgoHN_JvomsCmin2ljQyYfso6jM2a53l6-9AffJNk06jOR96krRdHAi0nBXZfiyzXI3i8hsUDpuJmk6o9Mqz1bybMYG5XSKWd0xD7iAZrRUP5g36J98UJZYx_g-tbBjOuveuZRpyptArxl1Bo18D3APM_ccfeGuh74bdP';

const baseDestinations: Destination[] = [
  {
    id: '1',
    title: 'حي الطريف',
    region: Region.NAJD,
    location: 'الدرعية، الرياض',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBloIl_IQ7bYzpEK4RqJX681tNGpcgedo8FIB2oqXdMFhaK2TKZgN0WRSLjs4R9iOgI1QmIVPNqzULe56fie7M1Ylr82RA3SDtF1tuRtmRg7M7QoKpneZzvRHDg6YLju8TwRGhBMdD-HsuX-c3aLLMGx6zC3MbxiQbDN3nB8wyNbJWpxHpZGehIQKS2_H90JQfTd-eFcXNeaSgdyPRkIPymISJr3SYmR5JJmsu4TvAjZOOlDAKrhN_n1FZOIW4HziBGjO5N2kd-7dE7',
  },
  {
    id: '2',
    title: 'مدائن صالح (الحجر)',
    region: Region.HEJAZ,
    location: 'العلا، منطقة المدينة المنورة',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAKfpiNK8G8H7eCJPkbiZgnFCoSLqVP8RWeOox1DSA6s0PagUz4LDuy_oNUT6AZACSKtrNH-EFVlDSO7N-qV2xEat1egytlmoOgtREWyPzEyqJQgu6g6REFv61vmX-_swvrQ7MXyQPXmULj7TQQN47j8eNCei4cH_eaTg5kaKt5BKoGEZchFjvR7WbA-eQTSOFYQIqy2eX6G2uwkmE6pEX9m2axPaRoS_juoJjURzV-bLWRGpDJURndCIGmwd1LMzCYfzlb_VIFem5T',
  },
  {
    id: '3',
    title: 'حي البلد',
    region: Region.HEJAZ,
    location: 'حي البلد، جدة',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAdol0C8CK5CfTx74mm_QxsBimozKlBVAHpEkx0l1be5jG4Flr7YHvBqhoWjuQrTm3OvpTUthEiadAGtn24AXMDZZ-Nx9SifXb8KVUfWBDR-RxBogmREFn1awJZjL4O3l3oM1HWu8whC1u8bCGOQnp8aW6nVuJH85bqU5GHRd9C1cCd8DeVmvg7te0w964D8AWFSxSRqhuQ2HopJpT7vfFfh3acvqAU1ojZu3CT4JSwWr2-n1rLtwD1yHx1ozp_BqYjP-QazMXWw6D7',
  },
  {
    id: '4',
    title: '',
    region: Region.NAJD,
    location: '',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDNfKVgd20l1Ba45YMvltS_nfJMvQvcbov8WtAZZBggot4pzMAQtARjEyrkbXXWc6JV3_VT7xbxmfh5DNNZb0fTchCf2ciqP-EPg3KtZeZN3He7qzqySEWNsLiW2x2DTAQoaGeDzUfoeSxcmiATdrFcq1vO_T0eAYVd0B2CYZnoJ8dPS2E266JKlIJngtlVqRuZ0ugx67D5-DgCCa58eJQ5g35RwmsJve3-QVdx5Zyne9eJsSuHvOdmKEh2PFQdoz6INrJX-L6lO_ZX',
  },
];

const storyImageUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAUFwPUhTzgfnet0VL5g9vk342VkbEmNMIZ9S6ZZbk8Rl6HcYas-Pql_SLzB7NQ2x-TCcD-6CakFvJXwa4a9Rf7qMGuYLRCGXPr98as1g0cR-SG8N0l7rX_dy4Yev_W2U8rLay-6FI2H4dcY4lUa5CCIL2UaF59wcJWvFLavckMBqBrHHK0mj2QiVGmtr_BCwcGRSngaip-cINZAe_EuFah3IeQJIxh03o19ZapGWn_RgOVFI3nFmJeUCFWYcc1dhYJDl2Yq9jUFQ';

export const HomePage = () => {
  const navigate = useNavigate();
  const { language, isRTL } = useLanguage();
  const t = useTranslation(language);

  const destinations = useMemo(
    () => baseDestinations.map((dest) => DestinationMapper.toLocalized(dest, language)),
    [language]
  );

  const handleSearch = (filters: SearchFilters) => {
    const params = new URLSearchParams();

    if (filters.region) {
      params.set('region', filters.region);
    }

    if (filters.experienceType) {
      params.set('experienceType', filters.experienceType);
    }

    const query = params.toString();
    navigate(query ? `/regions?${query}` : '/regions');
  };

  const handleViewAllDestinations = () => {
    navigate('/regions');
  };

  const handleReadStory = () => {
    navigate('/story');
  };

  return (
    <div className={`bg-background-light dark:bg-background-dark text-[#121811] dark:text-[#f9fbf9] min-h-screen font-arabic`}>
      <Navigation />
      <main className="pt-0">
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 hero-gradient z-10" />
            <img
              alt={t.alt.diriyah}
              className="w-full h-full object-cover"
              src={heroImageUrl}
            />
          </div>
          <div className="relative z-20 text-center px-4 w-full max-w-5xl">
            <div className="mb-12">
              <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-4">
                {t.hero.title} <br />
                <span className="text-accent-gold">{t.hero.titleHighlight}</span>
              </h1>
              <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                {t.hero.subtitle}
              </p>

            </div>
            <SearchForm onSubmit={handleSearch} />
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white animate-bounce opacity-70">
            <Icon name="keyboard_double_arrow_down" size="3xl" />
          </div>
        </section>

        {/* Destinations Section */}
        <section className="py-24 px-6 lg:px-40 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 px-4 gap-6">
              <div className={`max-w-xl ${isRTL ? 'text-right' : 'text-left'}`}>
                <h2 className="text-primary text-sm font-black uppercase tracking-widest mb-3">
                  {t.destinations.explore}
                </h2>
                <h3 className="text-4xl font-extrabold text-[#121811] dark:text-white leading-tight">
                  {t.destinations.title}
                </h3>
              </div>
              <button
                onClick={handleViewAllDestinations}
                className={`flex items-center gap-2 text-primary font-bold hover:underline`}
              >
                {t.destinations.viewAll}{' '}
                <Icon name="trending_flat" className={isRTL ? 'transform rotate-180' : ''} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {destinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          </div>
        </section>

        {/* Story of the Day Section */}
        <section className="pb-24 px-6 lg:px-40 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto bg-primary rounded-[2rem] overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-0 items-stretch">
              <div className={`${isRTL ? 'text-right order-2 lg:order-1' : 'text-left order-2 lg:order-1'} p-12 lg:p-20 relative z-10 flex flex-col justify-center`}>
                <span className="text-sm font-bold tracking-widest uppercase text-accent-gold mb-4 block">
                  {t.storyOfTheDay.label}
                </span>
                <h2 className="text-4xl md:text-5xl text-white font-bold leading-tight mb-6">
                  {t.storyOfTheDay.title} <br />
                  {t.storyOfTheDay.titleLine2}
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  {t.storyOfTheDay.description}
                </p>
                <div className={`flex items-center gap-6 flex-wrap ${isRTL ? 'justify-end' : 'justify-start'}`}>
                  <button
                    onClick={handleReadStory}
                    className="px-8 py-3.5 bg-white hover:bg-accent-gold hover:text-white text-primary font-bold rounded-lg transition-colors flex items-center gap-2"
                  >
                    <span>{t.storyOfTheDay.readStory}</span>
                  </button>
                </div>
              </div>
              <div className={`relative min-h-[300px] lg:min-h-[500px] ${isRTL ? 'order-1 lg:order-2' : 'order-1 lg:order-2'}`}>
                <img
                  alt={t.alt.qattAlAsiri}
                  className="w-full h-full min-h-[300px] lg:min-h-[500px] object-cover"
                  src={storyImageUrl}
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: isRTL
                      ? 'linear-gradient(to left, rgba(45, 90, 39, 0.85), rgba(45, 90, 39, 0.4), transparent)'
                      : 'linear-gradient(to right, rgba(45, 90, 39, 0.85), rgba(45, 90, 39, 0.4), transparent)',
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

