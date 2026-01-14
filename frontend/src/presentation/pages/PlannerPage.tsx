import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { usePlannerForm } from '../../application/hooks/usePlannerForm';
import { LocationSection } from '../components/organisms/LocationSection';
import { DurationSection } from '../components/organisms/DurationSection';
import { CompanionsSection } from '../components/organisms/CompanionsSection';
import { InterestsSection } from '../components/organisms/InterestsSection';
import { ActivitySection } from '../components/organisms/ActivitySection';
import { Button } from '../components/atoms/Button';
import { Icon } from '../components/atoms/Icon';
import { motion } from 'framer-motion';
import { useLanguage } from '../../application/hooks/useLanguage';
import { useTranslation } from '../../application/hooks/useTranslation';

export const PlannerPage = () => {
    const navigate = useNavigate();
    const { language, isRTL } = useLanguage();
    const t = useTranslation(language);

    // Inline validation state
    const [errors, setErrors] = useState({
        city: false,
        duration: false,
        companion: false,
        interests: false,
        activity: false
    });

    const {
        state,
        isSubmitting,
        setCity,
        setDuration,
        setCompanion,
        toggleInterest,
        setActivityLevel,
        submitPlan
    } = usePlannerForm();

    const handleGeneratePlan = async () => {
        // Reset errors
        setErrors({ city: false, duration: false, companion: false, interests: false, activity: false });

        const newErrors = {
            city: !state.city,
            duration: !state.duration,
            companion: !state.companion,
            interests: state.interests.length === 0,
            activity: !state.activityLevel // Assuming 0 is not a valid level if min is 1
        };

        if (newErrors.city || newErrors.duration || newErrors.companion || newErrors.interests || newErrors.activity) {
            setErrors(newErrors);
            // Optional: Scroll to top or first error
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        await submitPlan();
        navigate('/itinerary');
    };

    // Auto-clear error when user selects a value
    const handleCityChange = (val: any) => { setCity(val); if (errors.city) setErrors(prev => ({ ...prev, city: false })); };
    const handleDurationChange = (val: any) => { setDuration(val); if (errors.duration) setErrors(prev => ({ ...prev, duration: false })); };
    const handleCompanionChange = (val: any) => { setCompanion(val); if (errors.companion) setErrors(prev => ({ ...prev, companion: false })); };
    const handleInterestToggle = (val: any) => { toggleInterest(val); if (errors.interests) setErrors(prev => ({ ...prev, interests: false })); };
    const handleActivityChange = (val: any) => { setActivityLevel(val); if (errors.activity) setErrors(prev => ({ ...prev, activity: false })); };

    return (
        <MainLayout>
            {/* Page Heading */}
            <motion.div
                dir={isRTL ? 'rtl' : 'ltr'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white/60 p-6 rounded-2xl backdrop-blur-sm border border-white shadow-sm ${!isRTL ? "font-['Plus_Jakarta_Sans']" : ""}`}
            >
                <div className="flex items-start gap-4">
                    <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Icon name="smart_toy" className="text-3xl" filled />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-text-dark text-2xl md:text-3xl font-black leading-tight font-display">{t.planner.title}</h1>
                        <p className="text-text-muted text-base">{t.planner.subtitle}</p>
                    </div>
                </div>
            </motion.div>

            {/* Form Container */}
            <motion.div
                dir={isRTL ? 'rtl' : 'ltr'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`grid grid-cols-1 md:grid-cols-12 gap-6 ${!isRTL ? "font-['Plus_Jakarta_Sans']" : ""}`}
            >
                <LocationSection
                    selectedCity={state.city}
                    onChange={handleCityChange}
                    hasError={errors.city}
                />

                <DurationSection
                    selectedDuration={state.duration}
                    onChange={handleDurationChange}
                    hasError={errors.duration}
                />

                <CompanionsSection
                    selectedCompanion={state.companion}
                    onChange={handleCompanionChange}
                    hasError={errors.companion}
                />

                <InterestsSection
                    selectedInterests={state.interests}
                    onToggle={handleInterestToggle}
                    hasError={errors.interests}
                />

                <ActivitySection
                    activityLevel={state.activityLevel}
                    onChange={handleActivityChange}
                    hasError={errors.activity}
                />

                {/* Submit Button */}
                <div className="md:col-span-12 flex justify-center pt-4 pb-8">
                    <Button
                        onClick={handleGeneratePlan}
                        disabled={isSubmitting}
                        className="w-full md:w-auto md:min-w-[300px] h-auto py-4 text-lg transform hover:-translate-y-0.5"
                    >
                        {isSubmitting ? (
                            <>
                                <span className="material-symbols-outlined animate-spin">progress_activity</span>
                                <span>{t.planner.generating}</span>
                            </>
                        ) : (
                            <>
                                <Icon name="auto_awesome" />
                                <span>{t.planner.cta}</span>
                            </>
                        )}
                    </Button>
                </div>
            </motion.div>
        </MainLayout>
    );
};
