import Image from "next/image";

const portfolioItems = [
  {
    type: "small",
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp",
    alt: "Wedding Rings Detail",
  },
  {
    type: "small",
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp",
    alt: "Bridal Bouquet Detail",
  },
  {
    type: "featured",
    blur: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
    sharp: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
    alt: "Bride Portrait",
  },
  {
    type: "small",
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg",
    alt: "Wedding Table Setting",
  },
  {
    type: "text",
    title: (
      <>
        <span className="italic font-extralight">Quiet</span> beauty
      </>
    ),
    description:
      "Moments in which natural elegance unfolds quietly, confidently, and without unnecessary emphasis.",
  },
  {
    type: "featured",
    blur: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp",
    sharp: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp",
    alt: "Couple Walking",
  },
  {
    type: "small",
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
    alt: "Motion Blur Celebration Dancing",
    grayscale: true,
  },
  {
    type: "small",
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
    alt: "Champagne Toast",
  },
  {
    type: "text",
    title: (
      <>
        <span className="italic font-extralight">Natural</span> harmony
      </>
    ),
    description:
      "Connections whose shape, energy, and rhythm create a profound sense of harmony at first glance.",
  },
  {
    type: "small",
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
    alt: "Wedding Dress Fabric Detail",
  },
];

export default function Portfolio() {
  return (
    <section
      className="md:py-32 overflow-hidden text-white bg-[#0A0A0A] pt-24 pb-24"
      id="portfolio"
    >
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:mb-20 w-full h-full mb-16 gap-x-12 gap-y-12 items-start justify-between">
          <div className="flex flex-col w-full h-full">
            <div className="flex flex-col md:flex-row md:items-end w-full border-white/10 border-b mb-10 pb-0">
              <h2 className="mb-6 md:mb-0 md:mr-auto lg:text-6xl leading-tight text-5xl font-thin text-white tracking-tighter font-google-sans-flex">
                Selected work
              </h2>
              <div className="flex items-end space-x-6 lg:space-x-10">
                <button className="text-sm lg:text-base uppercase tracking-[0.15em] text-white font-thin border-b border-white pb-3 -mb-[1px]">
                  Photography
                </button>
                <button className="lg:text-base uppercase hover:text-gray-300 transition-colors text-sm text-gray-500 tracking-[0.15em] font-extralight pb-3">
                  Videography
                </button>
              </div>
            </div>

            <div className="max-w-3xl">
              <h2 className="leading-[0.95] md:text-7xl lg:text-[6.5rem] lg:text-xl text-6xl font-thin text-white tracking-tighter font-google-sans-flex mb-8">
                <span className="italic font-google-sans-flex">
                  Moments
                </span>
                that
                <br />
                are returned to
              </h2>
              <p className="lg:text-2xl leading-relaxed text-xl text-gray-400 font-google-sans-flex max-w-xl">
                These photographs are chosen again and again, finding in them a
                familiar feeling of beauty and the exact mood. Look, get inspired
                and feel - perhaps they will respond to you today and become part
                of your legacy.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-2 lg:gap-3 bg-black">
          {portfolioItems.map((item, index) => {
            if (item.type === "small") {
              return (
                <div
                  key={index}
                  className="aspect-square bg-zinc-900 overflow-hidden relative group"
                >
                  <Image
                    src={item.src!}
                    alt={item.alt!}
                    fill
                    className={`w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 ${item.grayscale ? "grayscale" : ""}`}
                  />
                </div>
              );
            }

            if (item.type === "text") {
              return (
                <div
                  key={index}
                  className="aspect-square lg:p-8 flex flex-col bg-black border-white/5 border pt-6 pr-6 pb-6 pl-6 justify-between"
                >
                  <h3 className="font-narrow text-4xl lg:text-5xl tracking-tighter text-white font-thin leading-none">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-400 font-extralight leading-relaxed mt-auto max-w-[200px]">
                    {item.description}
                  </p>
                </div>
              );
            }

            if (item.type === "featured") {
              return (
                <div
                  key={index}
                  className="col-span-2 lg:col-span-2 row-span-2 lg:row-span-2 relative overflow-hidden group bg-zinc-900 flex items-center justify-center"
                >
                  {/* Blur background */}
                  <div className="blur-[4px] transition-transform duration-[2s] ease-out group-hover:scale-105 opacity-40 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0">
                    <Image src={item.blur!} alt={item.alt!} fill className="object-cover" />
                  </div>
                  {/* Sharp center image */}
                  <div className="w-3/5 aspect-square relative z-10 shadow-2xl overflow-hidden border border-white/5">
                    <Image
                      src={item.sharp!}
                      alt={item.alt!}
                      fill
                      className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                    />
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </section>
  );
}
