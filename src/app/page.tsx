import FeaturedCourses from "@/componants/FeaturedCourses";
import Footer from "@/componants/Footer";
import HeroSection from "@/componants/HeroSection";
import Insructors from "@/componants/Insructors";
import MusicSchoolTestimonials from "@/componants/TestimonialCards";
import UpcomingWebinar from "@/componants/UpcomingWebinar";
import WhyChooseUs from "@/componants/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
        <HeroSection />
        <FeaturedCourses/>
        <WhyChooseUs/>
        <MusicSchoolTestimonials/>
        <UpcomingWebinar/>
        <Insructors/>
        <Footer/>
      </main>
    </>
  );
}
