import { Region } from '../entities/Region';
import { ExperienceType } from '../entities/ExperienceType';

export interface SearchFilters {
  region?: Region;
  experienceType?: ExperienceType;
}

