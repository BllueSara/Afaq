import { Destination } from '@/domain/entities/Destination';
import { Language } from '@/domain/entities/Language';
import { translations } from '@/shared/constants/translations';

export const DestinationMapper = {
  toLocalized: (destination: Destination | Partial<Destination>, language: Language): Destination | Partial<Destination> => {
    if (!destination.id) {
      return destination;
    }

    const destinationMap: Record<string, keyof typeof translations[Language.AR]['destinations']> = {
      '1': 'alTuraif', // حي الطريف
      '2': 'alHijr', // مدائن صالح (الحجر)
      '3': 'alBalad', // حي البلد
      'rijal-alma': 'rijalAlma', // قرية رجال ألمع
    };

    const destKey = destinationMap[destination.id];
    if (destKey) {
      const langTranslations = translations[language];
      const translated = langTranslations.destinations[destKey];
      if (typeof translated === 'object' && 'title' in translated && 'location' in translated) {
        return {
          ...destination,
          title: translated.title,
          location: translated.location,
        };
      }
    }
    return destination;
  },
};
