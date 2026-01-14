import { motion } from 'framer-motion';
import { Icon } from '../atoms/Icon';
import { ItineraryStop } from '../../../domain/entities/Itinerary';

interface StopCardProps {
    stop: ItineraryStop;
    index: number;
}

export const StopCard = ({ stop, index }: StopCardProps) => {
    const getTipIcon = (type: string) => {
        switch (type) {
            case 'ai': return 'auto_awesome';
            case 'rest': return 'timer';
            case 'reminder': return 'confirmation_number';
            default: return 'info';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
        >
            <div className="flex gap-4">
                {/* Timeline Connector */}
                <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-lg z-10">
                        {stop.id}
                    </div>
                    {/* Only show line if not the last item? For now, infinite line or controlled by parent list logic. 
                        The mock has a line for 1 and 2, not 3. Simple CSS: w-1 bg-primary/20 h-full -mt-2
                     */}
                    <div className="w-1 bg-primary/20 h-full -mt-2"></div>
                </div>

                {/* Card Content */}
                <div className="flex-1 pb-8">
                    <div className="bg-white dark:bg-background-dark border border-primary/10 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="font-bold text-lg text-text-dark">{stop.title}</h3>
                                <p className="text-primary/60 text-sm">{stop.category} • {stop.time}</p>
                            </div>
                            <div
                                className="w-16 h-16 rounded-lg bg-cover bg-center shrink-0"
                                style={{ backgroundImage: `url('${stop.image}')` }}
                                title={stop.title}
                            />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{stop.description}</p>

                        {/* Tip Box */}
                        <div className="bg-primary/5 border-r-4 border-primary p-3 rounded-lg flex items-start gap-3">
                            <Icon name={getTipIcon(stop.tipType)} className="text-primary text-xl" />
                            <div>
                                <p className="text-primary font-bold text-sm">{stop.tipTitle}</p>
                                <p className="text-primary/80 text-xs">{stop.tipText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
