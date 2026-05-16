import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Philosophy from "@/components/Philosophy";
import Team from "@/components/Team";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <SocialProof />
      <Philosophy />
      <Team />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </>
  );
}
