import { useLanguage } from '@/application/hooks/useLanguage';
import { useTranslation } from '@/application/hooks/useTranslation';
import { Icon } from '@/presentation/components/atoms/Icon';

const journeyImages = [
  {
    id: '1',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDq8X8r4spe4eKOouN9B5QGmsZLLl7FdYcvTRcAYmHOxh13bk-qNVl_VNVcCc5GURhq3AEErLmmazFJGoOMUHSNP3033_8LXC1xw0YnhmHb1CSwhbyXod5-A_91W_1nulTSE78TlTgyhePDiwrBHOA4Sgl1SxYZZHgCXBHNJn_MP2qsOGI8iy7sSkXWMQ50FAkcK_aWh-nFj7iF2oCWvzN3dKRx1dc8rb9NOTku_viOPFUHS38y4CtMWLQzo25Vy9KegUunY48ehQ',
    alt: 'Detailed pattern creation',
  },
  {
    id: '2',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCI7e3ndBrEHec-sMYGiYbVxAun9VWCHA8_e-bwEw7COnBMHb7BqgqEtRCVBdWp2TsVQfUVRfZuh4jdYun3aR6aPrwFAqyTUlbnjdvtTxxXvZIgm7_dJ5wz_GbKLzeurijiq4ftuzAHKfNN8bQyJrE25rNrDkVZGwpbmy8XxGYGuw8n7Xbzpz_SfVwymwsquARYRH0LRvO2BlMsFvTiR1Ik015OKTxN6jdmeNTIw8rULxOhjhqVLUPRKRNv1LLtdxG1wj_CIZYTZQ',
    alt: 'Color mixing process',
  },
  {
    id: '3',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrlMaCWsCwJE0dm5kaSF8ZxH3QGFj8btO9cLgXaIEEmFWdM3hNXpT0xRWZVWYy48dpEFEO7U8pTOdZOK2Gx7_P_jCxRE5Eu8_G5c-uJJAQR7fbhw4o7N18x8UDzR1IibtDYNssRwR4E632gKw9M0vjZZqzjkO2uqBaWDegWO1quzEw1BI5b-KeHvl9IcKCkEpR9RocELgzYLOmafRXwvETmJ1JjwPpiw5kANcheuXbgQdy9bGcY7jrm56H_SVh9sjZ1xf-1rktCw',
    alt: 'Finishing touches',
  },
];

const documentaryImageUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC67icp_TXHhHEYwZh18M7lKOLSATyCttwFA0908UWcFBU5wfOXGCDkDwhnPBMQ4Sg5V2fI_5ktQnRHeVrRgSSzCSrFuu_Yx-zaCYSXIraceG8tBS4fLVbclBVn3GpMXsTc8dYajs2tWiTeSgsbcV64RwN_tYSxwC2SVjUDjd0fOkAuTcIE-pVsFYudufDwTGtm3oQNMzoqDLW-eZjjHOZY5KJ5v72nxtAzBOWde_YQ51keylpcbAcuRRanfhramMDE68fIPHMY6Q';

export const StoryArticle = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <article className="lg:col-span-8 order-2 lg:order-1">
      <div className="mb-12">
        <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 font-light text-justify pl-4">
          {t.story.intro}
        </p>
      </div>
      <div className="w-full h-px bg-gradient-to-l from-primary/30 to-transparent my-12" />

      {/* Historical Roots Section */}
      <section className="mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold">
            <Icon name="history_edu" size="lg" />
          </span>
          {t.story.historicalRoots.title}
        </h2>
        <div className="prose prose-lg prose-headings:font-display prose-p:font-body text-gray-600 dark:text-gray-400 leading-loose text-justify">
          <p className="mb-6">{t.story.historicalRoots.p1}</p>
          <p>{t.story.historicalRoots.p2}</p>
        </div>
      </section>

      {/* Creative Journey Section */}
      <section className="mb-48">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
            {t.story.creativeJourney.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[500px] relative z-10">
          <div className="md:col-span-1 h-full relative group rounded-2xl overflow-hidden cursor-pointer">
            <img
              alt={journeyImages[0].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={journeyImages[0].url}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg">
              <p className="font-bold text-primary text-sm">{t.story.creativeJourney.planning.title}</p>
              <p className="text-xs text-gray-500">{t.story.creativeJourney.planning.desc}</p>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4 h-full">
            <div className="relative group rounded-2xl overflow-hidden cursor-pointer">
              <img
                alt={journeyImages[1].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={journeyImages[1].url}
              />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg">
                <p className="font-bold text-primary text-sm">{t.story.creativeJourney.colorMixing.title}</p>
              </div>
            </div>
            <div className="relative group rounded-2xl overflow-hidden cursor-pointer">
              <img
                alt={journeyImages[2].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                src={journeyImages[2].url}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Documentary Section */}
      <section className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl group mb-16 cursor-pointer z-0">
        <img
          alt="Documentary thumbnail"
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          src={documentaryImageUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            <Icon name="play_arrow" size="4xl" className="text-white pl-1" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
          <div className="flex items-end justify-between">
            <div>
              <span className="bg-accent-gold text-primary text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                {t.story.documentary.badge}
              </span>
              <h3 className="text-white font-display text-2xl md:text-3xl font-bold mb-2">
                {t.story.documentary.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base max-w-xl">
                {t.story.documentary.description}
              </p>
            </div>
            <span className="text-white font-mono text-sm border border-white/30 px-3 py-1 rounded bg-black/30 backdrop-blur">
              {t.story.documentary.duration}
            </span>
          </div>
        </div>
      </section>
    </article>
  );
};

