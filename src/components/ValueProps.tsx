"use client";

const VALUES = [
  {
    icon: "/assets/icon-money-back.png",
    title: "Money back guarantee",
    desc: "Your satisfaction owns the patch; our promise ensures it's truly yours!",
    color: "bg-[#FF4D15]", // Bright Orange/Red
  },
  {
    icon: "/assets/icon-low-min.png",
    title: "Low minimums",
    desc: "Witness the magic of custom patches with no minimums. Craft your distinct style.",
    color: "bg-[#FF6B00]", // Orange
  },
  {
    icon: "/assets/icon-turnaround.png",
    title: "Quick Turnaround",
    desc: "Need it tomorrow? Get it today! Skip the wait with the fast turnaround.",
    color: "bg-[#E67E22]", // Darker Amber/Orange
  },
  {
    icon: "/assets/icon-support.png",
    title: "24/7 Support",
    desc: "Our 24/7 chat ensures prompt and reliable support, day or night!",
    color: "bg-[#D9280B]", // Deep Red
  },
];

export function ValueProps() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-dark mb-3 uppercase tracking-wide">
            OUR VALUE
          </h2>
          <p className="text-gray-500 text-lg">
            Expect More, Receive More Panda's Promise Delivers Beyond
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-row items-center gap-6 p-6 bg-[#F9F9F9] rounded-sm hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              {/* ICON WRAPPER (Made Bigger h-20 w-20) */}
              <div className="relative shrink-0 h-20 w-20 flex items-center justify-center">
                {/* 1. THE COLORED BLOB */}
                <div
                  className={`absolute inset-0 rounded-full ${item.color} opacity-100 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-12 shadow-md`}
                />

                {/* 2. THE BLACK ICON (Made Bigger w-10 h-10) */}
                {/* Removed 'invert' so it stays BLACK */}
                <div className="relative z-10 w-10 h-10 transition-transform duration-500 group-hover:-translate-y-1">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="flex flex-col text-left">
                <h3 className="text-lg font-extrabold text-brand-dark mb-2 leading-tight group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
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
