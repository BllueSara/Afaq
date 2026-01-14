import { Destination } from '@/domain/entities/Destination';
import { Region } from '@/domain/entities/Region';
import { Language } from '@/domain/entities/Language';
import { translations } from '@/shared/constants/translations';

export const DestinationMapper = {
  toLocalized: (destination: Destination, language: Language): Destination => {
    const destinationMap: Record<string, keyof typeof translations[Language.AR]['destinations']> = {
      '1': 'alTuraif', // حي الطريف
      '2': 'alHijr', // مدائن صالح (الحجر)
      '3': 'alBalad', // حي البلد
      'rijal-alma': 'rijalAlma', // قرية رجال ألمع
    };

    const destKey = destinationMap[destination.id];
    if (destKey) {
      const translated = translations[language].destinations[destKey];
      return {
        ...destination,
        title: translated.title,
        location: translated.location,
      };
    }
    return destination;
  },
};
