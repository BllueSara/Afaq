import { Region } from '@/domain/entities/Region';
import { Language } from '@/domain/entities/Language';
import { translations } from '@/shared/constants/translations';

export const RegionMapper = {
  toLocalized: (region: Region, language: Language): string => {
    const regionMap: Record<Region, keyof typeof translations[Language.AR]['regions']> = {
      [Region.NAJD]: 'najd',
      [Region.HEJAZ]: 'hejaz',
      [Region.ASIR]: 'asir',
      [Region.EASTERN]: 'eastern',
      [Region.NORTH]: 'north',
    };
    
    return translations[language].regions[regionMap[region]];
  },
};

