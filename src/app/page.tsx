import CallToAction from "@/components/CallToAction";
import FeaturedBusinesses from "@/components/FeaturedBusinesses";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedBusinesses />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </>
  );
}
