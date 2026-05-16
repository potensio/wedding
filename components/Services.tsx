import Image from "next/image";

const services = [
  {
    title: "Editorial & Timeless Stills",
    description:
      "Curated, timeless imagery that captures both the grand moments and the quiet, unseen details. We focus on natural light, sophisticated composition, and raw emotion to build a visual legacy that feels authentically you.",
    category: "Photography",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg",
  },
  {
    title: "Cinematic & Emotional Films",
    description:
      "Moving portraiture that tells the narrative of your day. We create elegant, emotion-driven films scored to perfectly tailored music, preserving the atmosphere, the spoken vows, and the dynamic energy of your celebration.",
    category: "Videography",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp",
  },
  {
    title: "Wedding Live Broadcasting",
    description:
      "Share your most cherished moments in real-time with loved ones across the globe. We provide high-fidelity audio and multi-camera streaming to ensure no one misses your celebration.",
    category: "Broadcasting",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
  },
];

export default function Services() {
  return (
    <section
      className="md:py-32 overflow-hidden text-[#0A0A0A] bg-[#f9f9f9] pt-24 pb-24 relative"
      id="services"
    >
      <div className="lg:px-12 max-w-[100rem] mr-auto ml-auto pr-6 pl-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:mb-24 mb-16 gap-x-8 gap-y-8 items-start justify-between">
          <h2 className="leading-snug md:text-6xl lg:text-6xl text-5xl font-thin text-[#0A0A0A] tracking-tighter font-google-sans-flex mb-8">
            Service
          </h2>
          <p className="max-w-md font-extralight text-[#0A0A0A]/60 text-lg lg:text-xl leading-relaxed md:pb-2">
            Our solutions are tailored to meet the unique vision of your
            celebration, providing artistry, reliability, and elegance at every
            stage of your journey.
          </p>
        </div>

        {/* Services List */}
        <div className="flex flex-col w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col cursor-pointer transition-all duration-300 last:border-b lg:flex-row lg:items-center lg:pt-8 lg:pb-8 w-full border-[#0A0A0A]/20 border-t pt-8 pb-8 relative items-start justify-between"
            >
              {/* Hover Image Modal (Desktop) */}
              <div className="lg:left-[60%] -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-20 pointer-events-none hidden lg:block opacity-0 absolute top-1/2 left-[55%] scale-75">
                <div className="overflow-hidden bg-zinc-900 w-[450px] h-[320px] border-white/10 rounded-xl relative shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="w-full h-full object-cover"
                  />
                  <div className="flex transition-colors bg-black/5 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#455CE9] text-white shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <span className="text-sm font-extralight uppercase tracking-widest">
                        View
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Wrapper */}
              <div className="flex flex-col lg:flex-row lg:items-center transition-opacity duration-300 lg:group-hover:opacity-40 z-10 w-full relative items-start justify-between">
                {/* Title */}
                <div className="lg:w-1/3 lg:mb-0 transition-transform duration-500 lg:group-hover:translate-x-4 w-full mb-0">
                  <h3 className="md:text-5xl lg:text-3xl text-4xl font-thin text-[#0A0A0A] tracking-tighter font-google-sans-flex mt-0 mr-0 mb-0 ml-0">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:w-1/3 lg:mb-0 transition-transform duration-500 lg:group-hover:translate-x-2 w-full mb-0">
                  <p className="leading-relaxed lg:pr-8 text-lg text-[#0A0A0A]/70 font-extralight pr-8">
                    {service.description}
                  </p>
                </div>

                {/* Category */}
                <div className="lg:w-auto flex flex-row lg:justify-end gap-8 transition-transform duration-500 lg:group-hover:-translate-x-4 w-full items-center justify-between">
                  <span className="uppercase text-sm text-[#0A0A0A]/60 tracking-widest font-google-sans-flex">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Mobile Image */}
              <div className="w-full mt-6 lg:hidden rounded-xl overflow-hidden shadow-md relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 flex items-center justify-center bg-white/90 backdrop-blur-sm text-[#0A0A0A] px-6 py-2 rounded-full border border-black/10">
                  <span className="text-xs font-extralight uppercase tracking-widest">
                    View
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
