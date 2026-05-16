"use client";

const faqs = [
  {
    question: "Do you offer custom packages?",
    answer: "Yes! We customize packages based on how many hours you would need.",
  },
  {
    question: "Is there a deposit?",
    answer:
      "Yes, we require a signed contract and a 30% non-refundable retainer to secure your date and our exclusive availability.",
  },
  {
    question: "How long do we have to wait for our photos and video?",
    answer:
      "For a full day celebration, you can expect your complete, meticulously curated gallery and cinematic film delivered within 8 to 10 weeks.",
  },
  {
    question: "Do you give out raw images?",
    answer:
      "We do not provide raw files. Our dedicated color grading and editorial editing process is a fundamental part of the final artistic vision you invest in.",
  },
  {
    question: "Can we request specific shots?",
    answer:
      "Absolutely. Prior to your celebration, we will share a comprehensive questionnaire where you can detail specific family groupings and meaningful details.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-[#0A0A0A]/10">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="mb-16 md:mb-20 text-center">
          <span className="uppercase tracking-[0.2em] text-sm font-thin text-gray-500 mb-4 block">
            Information
          </span>
          <h2 className="font-narrow text-5xl md:text-6xl tracking-tighter text-[#0A0A0A] font-thin">
            Investment &amp; FAQ
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-b border-[#0A0A0A]/10 pb-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-sm md:text-base uppercase tracking-[0.2em] text-[#0A0A0A] font-extralight pr-4">
                  {faq.question}
                </h3>
                <span className="relative flex-shrink-0 ml-1.5 w-6 h-6 flex items-center justify-center">
                  <iconify-icon
                    icon="solar:add-linear"
                    className="absolute text-xl text-[#0A0A0A] opacity-70 group-open:opacity-0 transition-opacity duration-300"
                  />
                  <iconify-icon
                    icon="solar:minus-linear"
                    className="absolute text-xl text-[#0A0A0A] opacity-0 group-open:opacity-70 transition-opacity duration-300"
                  />
                </span>
              </summary>
              <div className="mt-6 text-gray-600 font-extralight text-lg leading-relaxed">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
