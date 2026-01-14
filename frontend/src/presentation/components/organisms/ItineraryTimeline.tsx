import { ItineraryStop } from '../../../domain/entities/Itinerary';
import { StopCard } from '../molecules/StopCard';
import { useLanguage } from '../../../application/hooks/useLanguage';
import { useTranslation } from '../../../application/hooks/useTranslation';

interface ItineraryTimelineProps {
    stops: ItineraryStop[];
}

export const ItineraryTimeline = ({ stops }: ItineraryTimelineProps) => {
    const { language } = useLanguage();
    const t = useTranslation(language);

    return (
        <aside className="w-full lg:w-[480px] bg-background-light dark:bg-background-dark overflow-y-auto px-6 py-8 pb-32">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-text-dark">{t.itinerary.detailsTitle}</h2>
                <span className="px-3 py-1 bg-primary text-white text-xs rounded-full">{stops.length} {t.itinerary.stopsLabel}</span>
            </div>

            {/* Timeline Container */}
            <div className="space-y-6">
                {stops.map((stop, index) => (
                    <StopCard key={stop.id} stop={stop} index={index} />
                ))}
            </div>
        </aside>
    );
};
