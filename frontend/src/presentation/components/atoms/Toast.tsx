import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './Icon';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
    message: string;
    type: ToastType;
    isVisible: boolean;
    onClose: () => void;
}

export const Toast = ({ message, type, isVisible, onClose }: ToastProps) => {
    const bgColor = {
        success: 'bg-[#31532d]', // primary
        error: 'bg-red-600',
        info: 'bg-blue-600'
    }[type];

    const icon = {
        success: 'check_circle',
        error: 'error',
        info: 'info'
    }[type];

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: '-50%' }}
                    animate={{ opacity: 1, y: 0, x: '-50%' }}
                    exit={{ opacity: 0, y: 20, x: '-50%' }}
                    className={`fixed bottom-8 left-1/2 z-[200] flex items-center gap-3 px-6 py-3 rounded-xl shadow-lg ${bgColor} text-white min-w-[300px]`}
                >
                    <Icon name={icon} className="text-xl" />
                    <span className="font-medium text-sm flex-1">{message}</span>
                    <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-full transition-colors">
                        <Icon name="close" className="text-sm" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
