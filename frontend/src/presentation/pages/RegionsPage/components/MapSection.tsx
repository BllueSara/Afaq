import { Icon } from '@/presentation/components/atoms/Icon';

const mapImageUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD50UFaIQxApRpnOLFxmUXQgZov6WBDbOha7JA6onQZ3GUaZ58Pu4Bgk5X4zxa6wtyEuPa8yWYiH7kFHXAA0rRDq0CAb48Z9uNlxU1ealGylGzB5rp_ST9xF8PGfTTgxWnaRSTt0hT6lw38GrYBczm-HmE4a4WoDKIzEXzqG6zbrhCOOQLCywX3Zpe42fyIbtWS3kpr_OHHryWs3TNJgGsnCTACAhHwLIjpKnUbl9HKBJ3bZahvo1VqQM5qZB3dfMV26CucevI6QTsD';

const nearestLocationImageUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBLTarMuEKQczlU9MWNW6muxNA6x7_-ATx46O5d7XY9m7_1AcybiTKAKNE4dbedW_rbr17pGGPwG6IjFn2DvLO-40id8e1WcAwVzJ_xFhPfultx8oUdwirpKPyZF5RrQqomp4qzy-N-cVx8mi-IxGjsEAOJZnL-SNjzZdA6jhYrm3JbweMZDrIugv8cfHWQ1uhR8T0tblQfQVpr85WljcU_m8eVE0q10tTJ_-pDkafHtQIH5vjhfOOedqGfGwz-Ua4UQ5K4UBX5inHr';

export const MapSection = () => {
  return (
    <section className="w-[450px] bg-white rounded-3xl border border-primary/10 relative overflow-hidden hidden lg:block shadow-inner group">
      <div
        className="absolute inset-0 bg-[#e3e3c7]"
        style={{
          backgroundImage: `url('${mapImageUrl}')`,
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <Icon name="public" size="lg" className="text-primary text-[300px]" />
        </div>

        {/* Markers */}
        <div className="absolute top-[55%] right-[55%] group/marker cursor-pointer">
          <div className="relative">
            <Icon name="location_on" size="lg" className="text-primary text-4xl drop-shadow-lg scale-100 group-hover/marker:scale-125 transition-transform" />
            <div className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 opacity-0 group-hover/marker:opacity-100 transition-opacity bg-primary text-white text-[10px] px-2 py-1 rounded whitespace-nowrap shadow-xl">
              الدرعية
            </div>
          </div>
        </div>

        <div className="absolute top-[35%] right-[30%] group/marker cursor-pointer">
          <div className="relative">
            <Icon name="location_on" size="lg" className="text-primary text-4xl drop-shadow-lg scale-100 group-hover/marker:scale-125 transition-transform" />
            <div className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 opacity-0 group-hover/marker:opacity-100 transition-opacity bg-primary text-white text-[10px] px-2 py-1 rounded whitespace-nowrap shadow-xl">
              العلا
            </div>
          </div>
        </div>

        <div className="absolute top-[28%] right-[45%] group/marker cursor-pointer">
          <div className="relative">
            <Icon name="location_on" size="lg" className="text-primary text-4xl drop-shadow-lg scale-100 group-hover/marker:scale-125 transition-transform" />
            <div className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 opacity-0 group-hover/marker:opacity-100 transition-opacity bg-primary text-white text-[10px] px-2 py-1 rounded whitespace-nowrap shadow-xl">
              حائل
            </div>
          </div>
        </div>
      </div>

      {/* Zoom Controls */}
      <div className="absolute bottom-6 right-6 flex flex-col gap-2">
        <button className="bg-white/90 backdrop-blur shadow-lg p-2 rounded-xl text-primary hover:bg-white transition-all">
          <Icon name="add" />
        </button>
        <button className="bg-white/90 backdrop-blur shadow-lg p-2 rounded-xl text-primary hover:bg-white transition-all">
          <Icon name="remove" />
        </button>
      </div>

      {/* Fullscreen Button */}
      <div className="absolute top-6 left-6">
        <button className="bg-primary text-white shadow-xl px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-primary/90 transition-all text-sm font-bold">
          <Icon name="fullscreen" size="lg" />
          توسيع الخريطة
        </button>
      </div>

      {/* Nearest Location Card */}
      <div className="absolute bottom-6 left-6 right-24 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-primary/10 flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-lg bg-cover bg-center"
          style={{ backgroundImage: `url('${nearestLocationImageUrl}')` }}
        />
        <div>
          <p className="text-xs font-bold text-primary">الموقع الأقرب</p>
          <p className="text-[10px] text-primary/60">العلا - تبعد 20 كم عنك</p>
        </div>
      </div>
    </section>
  );
};

