import { useState } from 'react';
import { PlannerState, PlannerCity, PlannerDuration, PlannerCompanion, PlannerInterest } from '../../domain/entities/PlannerTypes';

export const usePlannerForm = () => {
    const [state, setState] = useState<PlannerState>({
        city: '',
        duration: null,
        companion: null,
        interests: [],
        activityLevel: 3,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const setCity = (city: PlannerCity) => setState(prev => ({ ...prev, city }));
    const setDuration = (duration: PlannerDuration) => setState(prev => ({ ...prev, duration }));
    const setCompanion = (companion: PlannerCompanion) => setState(prev => ({ ...prev, companion }));

    const toggleInterest = (interest: PlannerInterest) => {
        setState(prev => {
            const exists = prev.interests.includes(interest);
            if (exists) {
                return { ...prev, interests: prev.interests.filter(i => i !== interest) };
            } else {
                return { ...prev, interests: [...prev.interests, interest] };
            }
        });
    };

    const setActivityLevel = (level: number) => setState(prev => ({ ...prev, activityLevel: level }));

    const submitPlan = async () => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        console.log('Plan submitted:', state);
        // Here we would navigate or show results
        return true;
    };

    return {
        state,
        isSubmitting,
        setCity,
        setDuration,
        setCompanion,
        toggleInterest,
        setActivityLevel,
        submitPlan
    };
};
