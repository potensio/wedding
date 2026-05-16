import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col md:pb-24 bg-[#0A0A0A] w-full h-screen pb-16 relative justify-end">
      <div className="overflow-hidden bg-[#0A0A0A] w-full h-full absolute top-0 right-0 bottom-0 left-0">
        <Image
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
          alt="Wedding Celebration"
          fill
          className="object-center opacity-80 w-full h-full object-cover grayscale"
          priority
        />
        <div className="hero-gradient absolute top-0 right-0 bottom-0 left-0" />
      </div>

      <div className="z-10 lg:px-12 w-full max-w-[100rem] mr-auto ml-auto pr-6 pl-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 gap-x-12 gap-y-12 items-end">
          <div className="flex flex-col items-start space-y-8">
            <h1 className="leading-[0.9] sm:text-7xl lg:text-8xl text-6xl text-white tracking-tighter font-google-sans-flex drop-shadow-lg">
              Wedding
              <br />
              Photography
            </h1>
          </div>

          <div className="pb-2 md:pb-4">
            <p className="md:text-3xl leading-relaxed text-2xl text-gray-200 font-google-sans-flex max-w-xl drop-shadow-md">
              If you are looking for an authentic wedding photographer, capable of
              capturing the essence of your story and your emotions, you are in the
              right place. As a high-end wedding photographer, I go far beyond
              traditional photos, creating unique and unforgettable memories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
