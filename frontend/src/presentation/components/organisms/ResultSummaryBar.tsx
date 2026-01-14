import { Icon } from '../atoms/Icon';
import { useLanguage } from '../../../application/hooks/useLanguage';
import { useTranslation } from '../../../application/hooks/useTranslation';

export const ResultSummaryBar = () => {
    const { language } = useLanguage();
    const t = useTranslation(language);

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[960px] bg-white dark:bg-background-dark shadow-2xl border border-primary/20 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 z-[100]">
            <div className="flex items-center gap-6 px-4">
                <div className="text-center md:text-right">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{t.itinerary.summary.distance}</p>
                    <p className="text-lg font-bold text-primary">24.5 {language === 'en' ? 'km' : 'كم'}</p>
                </div>
                <div className="w-px h-8 bg-gray-200 dark:bg-gray-800"></div>
                <div className="text-center md:text-right">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{t.itinerary.summary.time}</p>
                    <p className="text-lg font-bold text-primary">4.5 {language === 'en' ? 'Hours' : 'ساعات'}</p>
                </div>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
                <button className="flex-1 md:flex-none px-6 py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-colors">
                    {t.itinerary.summary.save}
                </button>
                <button className="flex-1 md:flex-none px-8 py-3 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                    <Icon name="navigation" className="text-white" />
                    {t.itinerary.summary.start}
                </button>
            </div>
        </div>
    );
};
