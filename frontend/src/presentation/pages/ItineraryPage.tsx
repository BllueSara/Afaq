import { useNavigate } from 'react-router-dom';
import { Icon } from '../components/atoms/Icon';
import { MapExplorer } from '../components/organisms/MapExplorer';
import { ItineraryTimeline } from '../components/organisms/ItineraryTimeline';
import { ResultSummaryBar } from '../components/organisms/ResultSummaryBar';
import { getItineraryStops } from '../../infrastructure/mock/itineraryData';
import { useLanguage } from '../../application/hooks/useLanguage';
import { useTranslation } from '../../application/hooks/useTranslation';

export const ItineraryPage = () => {
    const navigate = useNavigate();
    const { language, isRTL } = useLanguage();
    const t = useTranslation(language);

    // Get localized stops
    const stops = getItineraryStops(language);

    return (
        <div className={`flex flex-col h-screen bg-background-light dark:bg-background-dark text-[#121712] dark:text-white transition-colors duration-300 font-body ${!isRTL ? "font-['Plus_Jakarta_Sans']" : ""}`} dir={isRTL ? "rtl" : "ltr"}>
            {/* Header */}
            <header className="flex items-center justify-between px-8 py-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
                <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon name="route" className="text-primary text-2xl" />
                    </div>
                    <h1 className="text-xl font-bold tracking-tight">{t.itinerary.header}</h1>
                </div>
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-all font-bold text-sm"
                >
                    <Icon name={isRTL ? "arrow_forward" : "arrow_back"} className="text-sm order-2" />
                    <span className="order-1">{t.itinerary.back}</span>
                </button>
            </header>

            {/* Main Content */}
            <main className="flex flex-1 overflow-hidden relative">
                {/* Map Container (Left Side) - Hidden on mobile, visible on lg */}
                <MapExplorer />

                {/* Itinerary Details (Right Side) */}
                <ItineraryTimeline stops={stops} />
            </main>

            {/* Bottom Summary Bar */}
            <ResultSummaryBar />
        </div>
    );
};
