import { WorkingHours } from '@/domain/entities/Destination';
import { Icon } from '@/presentation/components/atoms/Icon';
import { useLanguage } from '@/application/hooks/useLanguage';
import { useTranslation } from '@/application/hooks/useTranslation';

interface PracticalInfoSectionProps {
  workingHours: WorkingHours[];
  mapImageUrl: string;
  mapLocation: string;
}

export const PracticalInfoSection = ({
  workingHours,
  mapImageUrl,
  mapLocation,
}: PracticalInfoSectionProps) => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section className="py-20 px-6 md:px-20 lg:px-40 bg-white dark:bg-[#1a170d]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-display font-bold text-[#121811] dark:text-[#f9fbf9] mb-10 pb-4 border-b border-accent-gold dark:border-gray-800">
          {t.practicalInfo.title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-bold text-[#121811] dark:text-[#f9fbf9] mb-3">
              <Icon name="schedule" className="text-primary" />
              {t.practicalInfo.workingHours}
            </h3>
            <ul className="space-y-2 text-muted dark:text-gray-400">
              {workingHours.map((schedule, index) => (
                <li
                  key={index}
                  className={`flex justify-between ${
                    schedule.isHighlighted ? 'font-medium text-[#121811] dark:text-[#f9fbf9]' : ''
                  }`}
                >
                  <span>{schedule.day}</span>
                  <span>{schedule.hours}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 h-full min-h-[300px] rounded-xl overflow-hidden relative shadow-md">
            <div
              className="absolute inset-0 bg-cover bg-center grayscale opacity-80"
              style={{ backgroundImage: `url("${mapImageUrl}")` }}
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white dark:bg-[#2a261a] p-4 rounded-lg shadow-lg flex justify-between items-center">
              <div>
                <p className="font-bold text-[#121811] dark:text-[#f9fbf9]">{mapLocation}</p>
                <p className="text-xs text-muted dark:text-gray-400">{t.practicalInfo.mapSubtitle}</p>
              </div>
              <button className="flex items-center gap-1 text-sm font-bold text-primary">
                {t.practicalInfo.getDirections}
                <Icon name="north_east" className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
