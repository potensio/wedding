import Image from "next/image";

export default function Philosophy() {
  return (
    <section
      className="md:py-32 overflow-hidden bg-[#FAF8F5] pt-24 pb-24 relative"
      id="about"
    >
      <div className="max-w-[85rem] mx-auto px-6 relative">
        {/* Desktop Top Right Image */}
        <div className="hidden md:block absolute right-6 lg:right-24 top-0 w-[160px] lg:w-[200px] aspect-[3/4] z-10 shadow-sm">
          <Image
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"
            alt="Couple celebrating"
            fill
            className="w-full h-full object-cover"
          />
        </div>

        {/* Desktop Bottom Left Image */}
        <div className="hidden md:block lg:left-12 lg:w-[340px] aspect-[4/5] z-0 w-[280px] absolute bottom-12 left-0 shadow-sm">
          <Image
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/124c3e04-0a44-49bd-a49f-8fb5ea170ba6_800w.webp"
            alt="Bride portrait"
            fill
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col z-20 relative items-center">
          {/* Mobile Top Image */}
          <div className="md:hidden w-40 aspect-[3/4] mb-12 self-end shadow-sm relative">
            <Image
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/124c3e04-0a44-49bd-a49f-8fb5ea170ba6_800w.webp"
              alt="Couple celebrating"
              fill
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Heading */}
          <div className="text-center max-w-[56rem] mx-auto w-full z-20">
            <h2 className="leading-[1.25] text-4xl font-light text-[#333333] tracking-tight font-google-sans-flex md:text-5xl md:leading-[1.2] lg:text-5xl">
              Don&apos;t be afraid! I understand your concerns and want to make it
              easier for you. My team and I will help you to feel{" "}
              <span className="italic text-[#738065] font-extralight">
                comfortable, natural
              </span>{" "}
              and have{" "}
              <span className="italic text-[#738065] font-extralight">fun</span>.
              Reflecting who you really are in the most{" "}
              <span className="italic text-[#738065] font-extralight">
                authentic
              </span>{" "}
              way possible, capture all excitement, tears, joy and create photos and
              videos which would last{" "}
              <span className="italic text-[#738065] font-extralight">forever</span>.
            </h2>
          </div>

          {/* Mobile Bottom Image */}
          <div className="md:hidden aspect-[4/5] self-start w-full max-w-[280px] mt-12 shadow-sm relative">
            <Image
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ef3bf00-951c-47fe-9da2-03d12e987f2c_800w.jpg"
              alt="Bride portrait"
              fill
              className="w-full h-full object-cover"
            />
          </div>

          {/* Button placeholder */}
          <div className="md:mt-24 z-30 mt-16 relative" />
        </div>
      </div>
    </section>
  );
}
