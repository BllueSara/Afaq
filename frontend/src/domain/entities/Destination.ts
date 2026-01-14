import { Region } from './Region';

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface NearbyPlace {
  id: string;
  name: string;
  type: 'restaurant' | 'museum' | 'cafe' | 'attraction';
  distance: string;
  description: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
}

export interface WorkingHours {
  day: string;
  hours: string;
  isHighlighted?: boolean;
}

export interface TicketInfo {
  type: string;
  price: string;
  note?: string;
}

export interface Destination {
  id: string;
  title: string;
  region: Region;
  location: string;
  imageUrl: string;
  description?: string;
  heroImageUrl: string;
  heroSubtitle: string;
  quote?: string;
  quoteAuthor?: string;
  timeline: TimelineEvent[];
  nearbyPlaces: NearbyPlace[];
  workingHours: WorkingHours[];
  tickets: TicketInfo[];
  mapImageUrl: string;
  mapLocation: string;
}

