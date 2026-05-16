export default function SocialProof() {
  return (
    <section className="py-12 bg-[#0A0A0A] border-b border-white/5">
      <div className="max-w-[90rem] mx-auto px-6 text-center">
        <p className="uppercase text-sm text-gray-500 tracking-[0.2em] font-extralight mb-8">
          Featured Elegance
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <span className="font-narrow text-3xl tracking-tighter text-white uppercase">
            VOGUE
          </span>
          <span className="font-narrow text-3xl tracking-tighter text-white italic">
            Brides
          </span>
          <span className="font-narrow text-3xl tracking-tighter text-white uppercase">
            Style Me Pretty
          </span>
          <span className="font-narrow text-3xl tracking-tighter text-white uppercase">
            The Knot
          </span>
        </div>
      </div>
    </section>
  );
}
