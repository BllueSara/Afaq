export type ItineraryTipType = 'ai' | 'rest' | 'reminder';

export interface ItineraryStop {
    id: number;
    title: string;
    category: string;
    time: string;
    description: string;
    image: string;
    tipType: ItineraryTipType;
    tipText: string;
    tipTitle: string; // Added tipTitle based on HTML "نصيحة ذكية" / "مدة الاستراحة"
    coordinates?: { x: number; y: number }; // For map markers if needed
}
