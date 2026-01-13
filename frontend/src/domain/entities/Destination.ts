import { Region } from './Region';

export interface Destination {
  id: string;
  title: string;
  region: Region;
  location: string;
  imageUrl: string;
  description?: string;
}

