export default function Testimonials() {
  return (
    <section className="py-32 bg-[#0A0A0A] text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="text-7xl font-narrow text-[#1A1A1A] block mb-6 leading-none tracking-tighter">
          &quot;
        </span>
        <h3 className="font-narrow text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white leading-tight mb-12 font-thin">
          Working with Ocean West was the best investment we made. Their presence
          was calming, and the resulting work belongs in a magazine. They captured
          our love exactly as it felt.
        </h3>
        <div className="flex flex-col items-center justify-center">
          <span className="text-base uppercase tracking-widest text-white font-thin mb-2">
            Eleanor &amp; James
          </span>
          <span className="text-sm text-gray-500 font-extralight tracking-[0.2em] uppercase">
            Château de Villette, France
          </span>
        </div>
      </div>
    </section>
  );
}
