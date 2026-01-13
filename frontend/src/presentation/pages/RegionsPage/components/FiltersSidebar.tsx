import { Icon } from '@/presentation/components/atoms/Icon';
import { useLanguage } from '@/application/hooks/useLanguage';

export const FiltersSidebar = () => {
  const { isRTL } = useLanguage();

  return (
    <aside className="w-72 bg-white/50 backdrop-blur-sm border border-primary/10 rounded-3xl p-6 flex flex-col gap-8 custom-scrollbar overflow-y-auto">
      <div>
        <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
          <Icon name="filter_list" />
          الفلاتر
        </h3>
        <div className="space-y-6">
          {/* Region Filter */}
          <div>
            <p className="text-sm font-bold text-primary/80 mb-3">المنطقة</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded border-primary/20 text-primary focus:ring-primary/20"
                />
                <span className="text-sm group-hover:text-primary">المنطقة الشمالية</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="rounded border-primary/20 text-primary focus:ring-primary/20"
                />
                <span className="text-sm group-hover:text-primary">المنطقة الوسطى</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="rounded border-primary/20 text-primary focus:ring-primary/20"
                />
                <span className="text-sm group-hover:text-primary">المنطقة الغربية</span>
              </label>
            </div>
          </div>

          {/* Target Audience */}
          <div>
            <p className="text-sm font-bold text-primary/80 mb-3">الفئة المستهدفة</p>
            <div className="grid grid-cols-1 gap-2">
              <button className="text-right px-4 py-2 rounded-xl text-xs bg-primary text-white font-medium">
                الطلاب والباحثون
              </button>
              <button className="text-right px-4 py-2 rounded-xl text-xs bg-white border border-primary/10 text-primary hover:bg-primary/5">
                السياح والزوار
              </button>
              <button className="text-right px-4 py-2 rounded-xl text-xs bg-white border border-primary/10 text-primary hover:bg-primary/5">
                المجتمع المحلي
              </button>
            </div>
          </div>

          {/* Interests */}
          <div>
            <p className="text-sm font-bold text-primary/80 mb-3">الاهتمامات</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary/5 text-primary text-[10px] px-3 py-1.5 rounded-full border border-primary/10 cursor-pointer hover:bg-primary/10">
                التاريخ
              </span>
              <span className="bg-primary/5 text-primary text-[10px] px-3 py-1.5 rounded-full border border-primary/10 cursor-pointer hover:bg-primary/10">
                الطبيعة
              </span>
              <span className="bg-primary/5 text-primary text-[10px] px-3 py-1.5 rounded-full border border-primary/10 cursor-pointer hover:bg-primary/10">
                العمارة
              </span>
              <span className="bg-primary/5 text-primary text-[10px] px-3 py-1.5 rounded-full border border-primary/10 cursor-pointer hover:bg-primary/10">
                الفنون
              </span>
            </div>
          </div>
        </div>
      </div>
      <button className="mt-auto w-full py-3 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/20">
        تطبيق الفلاتر
      </button>
    </aside>
  );
};

