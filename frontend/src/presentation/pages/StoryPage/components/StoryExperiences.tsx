import { useLanguage } from '@/application/hooks/useLanguage';
import { useTranslation } from '@/application/hooks/useTranslation';
import { Icon } from '@/presentation/components/atoms/Icon';

const workshopImages = [
  {
    id: '1',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcSPg6uJji-3PaOVnsyoyuyQ8KRY-TO8aMQLd3ufAU2IEKLESbYQ_-RBVNoo2LqmXZYnIp0stbPc13AJrN-1H7RMGBePQLUjRJm9tG0uwHPSwZhEEHjodKTu-7tix81zpWlhDNMGpyn9PLFhkqENsyXo4YBe-lHCRUo0ay9_6265VyB6BInXqPjsJZI4CJnON0dQbPOV9VbfrPv9pOH8yLrkBMfzrjqh0pDhCGGDU8qu8c9o-40qarjpyzmyOBfw_CbksAY8mO0A',
    alt: 'Asir Mountains',
  },
  {
    id: '2',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDq8X8r4spe4eKOouN9B5QGmsZLLl7FdYcvTRcAYmHOxh13bk-qNVl_VNVcCc5GURhq3AEErLmmazFJGoOMUHSNP3033_8LXC1xw0YnhmHb1CSwhbyXod5-A_91W_1nulTSE78TlTgyhePDiwrBHOA4Sgl1SxYZZHgCXBHNJn_MP2qsOGI8iy7sSkXWMQ50FAkcK_aWh-nFj7iF2oCWvzN3dKRx1dc8rb9NOTku_viOPFUHS38y4CtMWLQzo25Vy9KegUunY48ehQ',
    alt: 'Painting workshop',
  },
  {
    id: '3',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJVq_9sCq3CQOLAUx5lGz32stI4-QOS54urGbUZOzh6uv7L4k8u0tg6pkfB1W81jnmx-DQW8VouwqOs7vbs4qTq5n4TvHRZVy1JZix3GKS563MC-udTvDRu3EJjSS2sTixUxV6QEV2p-FMkNBf7_hjBIBlEpDy2XUJ8kC6KWFgS7YRtn-_1TWNYKF-sEOCp0rGcRaOg0D9k4RTZlC8GSum3U6CWx1Wb8WiRFt2A7Eb3eiJITBNfOaBUYWlqe-3ZoE_-iOuxMN_3w',
    alt: 'Souq Al-Thulatha',
  },
];

export const StoryExperiences = () => {
  const { language, isRTL } = useLanguage();
  const t = useTranslation(language);
  const workshops = [
    t.story.experiences.workshop1,
    t.story.experiences.workshop2,
    t.story.experiences.workshop3,
  ];

  return (
    <section className="bg-white dark:bg-background-dark py-20 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-4xl font-bold text-primary mb-3">
              {t.story.experiences.title}
            </h2>
            <p className="text-secondary text-lg">{t.story.experiences.subtitle}</p>
          </div>
          <a
            className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-accent-gold transition-colors group mt-4 md:mt-0"
            href="#"
          >
            <span>{t.story.experiences.viewAll}</span>
            <Icon
              name="arrow_right_alt"
              className={`group-hover:-translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`}
            />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-5 shadow-md">
                <img
                  alt={workshopImages[index].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={workshopImages[index].url}
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1">
                  <Icon
                    name={
                      index === 0
                        ? 'calendar_today'
                        : index === 1
                          ? 'schedule'
                          : 'group'
                    }
                    size="sm"
                  />
                  <span>
                    {index === 0 && 'date' in workshop
                      ? workshop.date
                      : index === 1 && 'duration' in workshop
                        ? workshop.duration
                        : 'type' in workshop
                          ? workshop.type
                          : ''}
                  </span>
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-primary mb-2 group-hover:text-accent-gold transition-colors">
                {workshop.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">{workshop.description}</p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="font-bold text-primary">{workshop.price}</span>
                <span className="text-xs text-gray-400 font-bold">{workshop.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

