import Image from "next/image";

export default function Team() {
  return (
    <section className="md:py-32 overflow-hidden bg-[#020617] pt-24 pb-24 relative">
      {/* Orange Radial Glow Background */}
      <div
        className="z-0 pointer-events-none absolute top-0 right-0 bottom-0 left-0"
        style={{
          backgroundImage:
            "radial-gradient(circle 500px at 50% 100px, rgba(249, 115, 22, 0.4), transparent)",
        }}
      />

      <div className="lg:px-12 z-10 max-w-[90rem] mr-auto ml-auto pr-6 pl-6 relative">
        <div className="flex flex-col md:flex-row md:items-end md:mb-24 gap-8 mb-16 gap-x-8 gap-y-8 items-start justify-between">
          <div>
            <span className="uppercase block text-sm font-thin text-gray-500 tracking-[0.2em] mb-6">
              The Founders
            </span>
            <h2 className="lg:text-6xl leading-tight text-5xl font-thin text-white tracking-tighter font-google-sans-flex">
              Vision &amp; Craft
              <br />
              Behind the Lens
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="lg:text-2xl leading-relaxed text-xl text-gray-400 font-google-sans-flex">
              With over a decade of documenting love stories across the globe, our
              foundation is built on blending editorial precision with raw,
              documentary intuition. We don&apos;t just take photographs; we craft
              heirlooms.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Team Member 1 */}
          <div className="flex flex-col group">
            <div className="md:h-[70vh] overflow-hidden h-[60vh] rounded-sm mb-8 relative">
              <Image
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f86eb63-acc7-4c6f-b630-5fc34867737b_1600w.png"
                alt="Heena Malhotra"
                fill
                className="group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000 ease-out opacity-80 w-full h-full object-cover grayscale"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-6 gap-2">
              <h3 className="lg:text-5xl text-4xl font-thin text-white tracking-tighter font-google-sans-flex">
                Heena Malhotra
              </h3>
              <span className="uppercase text-xs font-thin text-gray-500 tracking-[0.2em] mb-1">
                Lead Photographer
              </span>
            </div>
            <p className="leading-relaxed text-xl text-gray-400 font-google-sans-flex">
              Elena brings an editorial eye and an unobtrusive approach, ensuring
              every frame is intentionally composed to immortalize the fleeting
              atmosphere and unseen glances of your day.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col group md:mt-32">
            <div className="relative h-[60vh] md:h-[70vh] overflow-hidden rounded-sm mb-8">
              <Image
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81d64b87-bc5b-46eb-b264-9801e29f9020_1600w.png"
                alt="Eddie Licea"
                fill
                className="group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000 ease-out opacity-80 w-full h-full object-cover grayscale"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-6 gap-2">
              <h3 className="lg:text-5xl text-4xl font-thin text-white tracking-tighter font-google-sans-flex">
                Eddie Licea
              </h3>
              <span className="uppercase tracking-[0.2em] text-xs font-thin text-gray-500 mb-1">
                Lead Cinematographer
              </span>
            </div>
            <p className="leading-relaxed text-xl text-gray-400 font-google-sans-flex">
              Julian&apos;s cinematic approach translates raw emotion into moving
              heirlooms. He focuses on narrative storytelling, preserving the grand
              architecture and dynamic energy of your celebration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
