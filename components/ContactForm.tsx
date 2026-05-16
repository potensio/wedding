"use client";

export default function ContactForm() {
  return (
    <section id="inquire" className="py-32 bg-[#0A0A0A] text-white">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 grid lg:grid-cols-5 gap-16 lg:gap-24 items-start">
        <div className="lg:col-span-2">
          <h2 className="font-narrow text-5xl md:text-6xl tracking-tighter text-white font-thin mb-6 leading-tight">
            Begin Your Journey
          </h2>
          <p className="text-2xl lg:text-3xl text-gray-400 font-extralight mb-12 leading-relaxed">
            We accept a limited number of commissions each year to ensure every
            couple receives our utmost attention and artistry. Please share the
            details of your celebration below.
          </p>

          <div className="space-y-6">
            <div className="flex items-center text-sm uppercase tracking-[0.2em] text-gray-300 font-thin">
              <iconify-icon icon="solar:letter-linear" className="text-xl mr-4 opacity-70" />
              hello@oceanweststudio.com
            </div>
            <div className="flex items-center text-sm uppercase tracking-[0.2em] text-gray-300 font-thin">
              <iconify-icon icon="solar:map-point-linear" className="text-xl mr-4 opacity-70" />
              Seattle / Worldwide
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <form className="space-y-12">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <label className="block text-sm uppercase tracking-[0.2em] text-gray-500 mb-3 font-extralight">
                  First &amp; Last Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-2xl text-white font-thin focus:border-white focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-[0.2em] text-gray-500 mb-3 font-extralight">
                  Fiancé&apos;s Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-2xl text-white font-thin focus:border-white focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <label className="block text-sm uppercase tracking-[0.2em] text-gray-500 mb-3 font-extralight">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-2xl text-white font-thin focus:border-white focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-[0.2em] text-gray-500 mb-3 font-extralight">
                  Wedding Date
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-2xl text-white font-thin focus:border-white focus:outline-none transition-colors"
                  placeholder="MM/DD/YYYY"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm uppercase tracking-[0.2em] text-gray-500 mb-3 font-extralight">
                Venue &amp; Location
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-700 py-3 text-2xl text-white font-thin focus:border-white focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm uppercase tracking-[0.2em] text-gray-500 mb-3 font-extralight">
                Services Interested In
              </label>
              <select className="w-full bg-transparent border-b border-gray-700 py-3 text-2xl text-white font-thin focus:border-white focus:outline-none transition-colors cursor-pointer dark-select">
                <option value="full" className="bg-[#0A0A0A] text-white">
                  Full Experience (Photo, Video, Stream)
                </option>
                <option value="photo" className="bg-[#0A0A0A] text-white">
                  Photography
                </option>
                <option value="video" className="bg-[#0A0A0A] text-white">
                  Videography
                </option>
                <option value="stream" className="bg-[#0A0A0A] text-white">
                  Livestreaming
                </option>
              </select>
            </div>

            <div>
              <label className="block text-sm uppercase tracking-[0.2em] text-gray-500 mb-3 font-extralight">
                Tell us about your vision
              </label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-gray-700 py-3 text-2xl text-white font-thin focus:border-white focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="button"
              className="w-full md:w-auto bg-white text-[#0A0A0A] px-12 py-4 text-sm uppercase tracking-[0.2em] font-thin hover:bg-gray-200 transition-colors duration-300 mt-8 flex items-center justify-center gap-3"
            >
              Submit Inquiry
              <iconify-icon icon="solar:arrow-right-linear" className="text-base" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
