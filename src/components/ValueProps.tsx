"use client";

const VALUES = [
  { icon: "/assets/icon-money-back.png", title: "Money back", desc: "Your satisfaction owns the patch.", color: "bg-[#FF4D15]" },
  { icon: "/assets/icon-low-min.png", title: "Low minimums", desc: "No minimums. Craft your style.", color: "bg-[#FF6B00]" },
  { icon: "/assets/icon-turnaround.png", title: "Quick Turnaround", desc: "Skip the wait with fast delivery.", color: "bg-[#E67E22]" },
  { icon: "/assets/icon-support.png", title: "24/7 Support", desc: "Prompt and reliable support.", color: "bg-[#D9280B]" },
];

export function ValueProps() {
  return (
    <section className="bg-white pt-12 pb-6 md:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-brand-dark mb-2 md:mb-3 uppercase tracking-wide">
            OUR VALUE
          </h2>
          <p className="text-gray-500 text-xs md:text-lg">
            Expect More, Receive More.
          </p>
        </div>
        
        {/* GRID FIX: 'grid-cols-2' is now the default (Mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {VALUES.map((item, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col md:flex-row items-center md:gap-6 p-4 md:p-6 bg-[#F9F9F9] rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 text-center md:text-left"
            >
              <div className="relative shrink-0 h-14 w-14 md:h-20 md:w-20 flex items-center justify-center mb-3 md:mb-0">
                <div className={`absolute inset-0 rounded-full ${item.color} opacity-100 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-12 shadow-md`} />
                <div className="relative z-10 w-7 h-7 md:w-10 md:h-10 transition-transform duration-500 group-hover:-translate-y-1">
                  <img src={item.icon} alt={item.title} className="h-full w-full object-contain" />
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="text-sm md:text-lg font-extrabold text-brand-dark mb-1 leading-tight group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>
                {/* Hide description on very small screens if needed, or keep small */}
                <p className="text-[10px] md:text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
