


import HowPSWork from "../Components/HowPSWork";
import AboutUs from "../Components/AboutUS";
import HeroSection from "../Components/HeroSection";
import OurClientsvertical from "@/Components/OurClientsvertical";
import ContactSection from "@/Components/ContactSection";
import BenefitsSection from "@/Components/BenefitsSection";
import MediaSection from "@/Components/MediaSection";
import TransformSection from "@/Components/TransformSection";
import FaqsSection from "@/Components/FaqsSection";
import OurTeam from "@/Components/OurTeam";
import HeroSectionSecond from "@/Components/HeroSectionSecond";
import Navbar from "@/Components/Navbar";
import OurBenifits from "@/Components/OurBenifits";


 const Home = () => {
  return (
   <>
    <div className="pt-18"></div>
    {/* <Navbar /> */}
    <HeroSection />
    <HeroSectionSecond />
    <HowPSWork />
    {/* <AboutSecond /> */}
    {/* <AboutThird /> */}
    {/* <AboutStickyScroll /> */}
    <AboutUs />
    {/* <WhyUS /> */}
    <BenefitsSection />
  
    <OurBenifits />
    <OurTeam />
      {/* <MeetOurTeam /> */}
    <OurClientsvertical />
    {/* <OurClients />
    <OurClientsSection /> */}
    <MediaSection />
    <TransformSection />
    {/* <ContactSectionSecond /> */}
    <FaqsSection />
    <ContactSection />
    {/* <ContactForm /> */}
  
   </>

  )
}
export default Home;