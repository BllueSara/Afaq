import { TimelineEvent } from '@/domain/entities/Destination';
import { useLanguage } from '@/application/hooks/useLanguage';

interface TimelineSectionProps {
  timeline: TimelineEvent[];
}

export const TimelineSection = ({ timeline }: TimelineSectionProps) => {
  const { isRTL } = useLanguage();

  return (
    <section className="py-20 px-4 md:px-10 bg-white dark:bg-[#1a170d] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-repeat"
        style={{
          backgroundImage: `url('${timeline[0]?.imageUrl || ''}')`,
        }}
      />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">رحلة تاريخية</h3>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#121811] dark:text-[#f9fbf9]">
            جدول المجد الزمني
          </h2>
        </div>
        <div className="relative">
          <div
            className={`absolute ${isRTL ? 'right-4 md:right-1/2' : 'left-4 md:left-1/2'} top-0 bottom-0 w-px bg-accent-gold dark:bg-gray-700 ${
              isRTL ? 'md:translate-x-1/2' : 'md:-translate-x-1/2'
            }`}
          />
          {timeline.map((event, index) => (
            <div
              key={index}
              className={`relative z-10 flex flex-col md:flex-row gap-8 mb-20 group ${
                index === timeline.length - 1 ? '' : ''
              }`}
            >
              <div
                className={`md:w-1/2 md:text-left flex flex-col items-start ${
                  isRTL
                    ? index % 2 === 0
                      ? 'md:items-end order-2 md:order-1 pr-12 md:pr-0 md:pl-12'
                      : 'order-3 md:order-1 pr-12 md:pl-12'
                    : index % 2 === 0
                    ? 'md:items-start order-2 md:order-1 pl-12 md:pl-0 md:pr-12'
                    : 'order-3 md:order-1 pl-12 md:pr-12'
                }`}
              >
                {index % 2 === 0 ? (
                  <>
                    <span className="text-6xl font-display font-black text-primary/20 dark:text-accent-gold/20 absolute -top-10 md:relative md:top-auto md:mb-[-20px] select-none">
                      {event.year}
                    </span>
                    <h4 className="text-2xl font-bold text-[#121811] dark:text-[#f9fbf9] mt-8 md:mt-0 mb-2">
                      {event.title}
                    </h4>
                    <p className="text-muted dark:text-gray-400 leading-relaxed max-w-sm">{event.description}</p>
                  </>
                ) : (
                  <>
                    <span className="text-6xl font-display font-black text-primary/20 dark:text-accent-gold/20 absolute -top-10 md:relative md:top-auto md:mb-[-20px] select-none">
                      {event.year}
                    </span>
                    <h4 className="text-2xl font-bold text-[#121811] dark:text-[#f9fbf9] mt-8 md:mt-0 mb-2">
                      {event.title}
                    </h4>
                    <p className="text-muted dark:text-gray-400 leading-relaxed max-w-sm">{event.description}</p>
                  </>
                )}
                {index % 2 !== 0 && (
                  <div className="aspect-video w-full max-w-sm rounded-lg overflow-hidden shadow-xl grayscale group-hover:grayscale-0 transition-all duration-500 mt-6 md:hidden">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url("${event.imageUrl}")` }}
                    />
                  </div>
                )}
              </div>
              <div
                className={`absolute ${isRTL ? 'right-4 md:right-1/2' : 'left-4 md:left-1/2'} w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-background-dark ${
                  isRTL ? 'translate-x-[7px] md:translate-x-1/2' : '-translate-x-[7px] md:-translate-x-1/2'
                } mt-1.5 md:mt-1.5 z-20 shadow-lg`}
              />
              <div
                className={`md:w-1/2 ${
                  isRTL
                    ? index % 2 === 0
                      ? 'order-3 md:order-2 pr-12 md:pr-12'
                      : 'order-2 md:order-2 pr-12 md:pr-12'
                    : index % 2 === 0
                    ? 'order-3 md:order-2 pl-12 md:pl-12'
                    : 'order-2 md:order-2 pl-12 md:pl-12'
                }`}
              >
                {index % 2 === 0 ? (
                  <div className="aspect-video w-full max-w-sm rounded-lg overflow-hidden shadow-xl grayscale group-hover:grayscale-0 transition-all duration-500">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url("${event.imageUrl}")` }}
                    />
                  </div>
                ) : (
                  <div className="aspect-video w-full max-w-sm rounded-lg overflow-hidden shadow-xl grayscale group-hover:grayscale-0 transition-all duration-500 hidden md:block">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url("${event.imageUrl}")` }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
