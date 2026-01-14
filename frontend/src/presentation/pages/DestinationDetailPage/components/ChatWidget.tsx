import { useState } from 'react';
import { Destination } from '@/domain/entities/Destination';
import { Icon } from '@/presentation/components/atoms/Icon';

interface ChatWidgetProps {
  destination: Destination;
}

export const ChatWidget = ({ destination }: ChatWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2 group/chat">
      <div
        className={`w-[320px] bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl p-4 mb-2 origin-bottom-left transition-all duration-300 transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100 dark:border-gray-800">
          <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white">
            <Icon name="smart_toy" className="text-sm" />
          </div>
          <div>
            <h5 className="text-sm font-bold text-[#121811] dark:text-[#f9fbf9]">المرشد الثقافي</h5>
            <p className="text-[10px] text-green-500 font-medium">متصل • يرد فوراً</p>
          </div>
        </div>
        <div className="space-y-3 mb-4 max-h-60 overflow-y-auto custom-scrollbar">
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg rounded-tr-none text-xs text-[#121811] dark:text-gray-300">
            مرحباً! أنا رفيقك الذكي في {destination.title}. اسألني عن عمارة قصر سلوى أو تاريخ الدولة السعودية
            الأولى.
          </div>
        </div>
        <div className="relative">
          <input
            className="w-full bg-transparent border border-gray-300 dark:border-gray-600 rounded-full py-2 px-4 text-sm focus:outline-none focus:border-primary dark:text-white transition-colors"
            placeholder="اطرح سؤالاً..."
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && message.trim()) {
                // Handle send message
                setMessage('');
              }
            }}
          />
          <button
            onClick={() => {
              if (message.trim()) {
                // Handle send message
                setMessage('');
              }
            }}
            className="absolute left-1 top-1 p-1 bg-primary rounded-full text-white hover:bg-primary-dark transition-colors"
          >
            <Icon name="arrow_upward" className="text-sm" />
          </button>
        </div>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 pr-4 pl-6 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg flex items-center gap-3 transition-all duration-300 hover:scale-105"
      >
        <Icon name="auto_awesome" />
        <span className="font-bold text-sm">المرشد الذكي</span>
      </button>
    </div>
  );
};
