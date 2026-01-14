export type PlannerCity = 'Riyadh' | 'Jeddah' | 'AlUla' | 'Dammam' | 'Abha';

export type PlannerDuration = '2-hours' | 'half-day' | 'full-day';

export type PlannerCompanion = 'solo' | 'couple' | 'friends' | 'family';

export type PlannerInterest = 'heritage' | 'nature' | 'shopping' | 'food';

export interface PlannerState {
    city: PlannerCity | '';
    duration: PlannerDuration | null;
    companion: PlannerCompanion | null;
    interests: PlannerInterest[];
    activityLevel: number;
}
