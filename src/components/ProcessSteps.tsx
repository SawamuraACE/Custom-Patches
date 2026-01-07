const STEPS = [
  {
    id: 1,
    title: "Image/Sketch",
    desc: "Share your vision with us – whether it's a sketch, logo, or just an idea. Our skilled custom patch maker will bring it to life in stunning detail.",
    image: "/assets/step-sketch.png",
  },
  {
    id: 2,
    title: "Mockup",
    desc: "Review our crafted digital mockup; it's your turn to give the green light. We'll make sure every detail is just as you imagined.",
    image: "/assets/step-mockup.png",
  },
  {
    id: 3,
    title: "Patch",
    desc: "Sit back as we bring your patches to life. From creation to delivery, we ensure excellence every step.",
    image: "/assets/step-patch.png",
  },
];

export function ProcessSteps() {
  return (
    <section className="bg-[#111] py-24 text-white relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-4 tracking-wide">
          Take the First Step on Your Patch Quest!
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-sm md:text-base">
          Step into an adventure where ordering custom patches is as easy as 1-2-3. In
          just three simple steps, witness your unique patch designs!
        </p>

        <div className="relative grid gap-12 md:grid-cols-3 max-w-5xl mx-auto">
          {/* Arrows (Absolute positioned for desktop) */}
          <img
            src="/assets/arrow-curve.png"
            className="hidden md:block absolute top-8 left-[30%] w-20 animate-arrow-pulse"
            style={{ filter: "brightness(0) saturate(100%) invert(45%) sepia(88%) saturate(1235%) hue-rotate(14deg)" }}
            alt=""
          />
          <img
            src="/assets/arrow-curve.png"
            className="hidden md:block absolute top-8 right-[30%] w-20 animate-arrow-pulse"
            style={{ filter: "brightness(0) saturate(100%) invert(45%) sepia(88%) saturate(1235%) hue-rotate(14deg)" }}
            alt=""
          />

          {STEPS.map((step) => (
            <div key={step.id} className="flex flex-col items-center relative z-10">
              <div className="relative w-48 h-48 mb-8 rounded-full border-2 border-white/20 p-2 hover:border-brand-orange transition-colors duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-black/50">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
