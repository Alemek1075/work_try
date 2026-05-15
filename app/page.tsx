import Hero from "@/app/components/sections/Hero";
import Stats from "@/app/components/sections/Stats";
import ServiceCards from "@/app/components/sections/ServiceCards";
import WhyUs from "@/app/components/sections/WhyUs";
import HowItWorks from "@/app/components/sections/HowItWorks";
import FaqFood from "@/app/components/sections/FaqFood";
import FaqDrive from "@/app/components/sections/FaqDrive";
import CTA from "@/app/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <ServiceCards />
      <WhyUs />
      <HowItWorks />
      <FaqFood />
      <FaqDrive />
      <CTA />
    </main>
  );
}
