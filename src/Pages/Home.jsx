


import HowPSWork from "../Components/HowPSWork";
import AboutSecond from "../Components/AboutSecond";
import AboutUs from "../Components/AboutUS";
import HeroSection from "../Components/HeroSection";
import OurClientsvertical from "@/Components/OurClientsvertical";
import ContactSection from "@/Components/ContactSection";
import BenefitsSection from "@/Components/BenefitsSection";
import MeetOurTeam from "@/Components/MeetOurTeam";
import MediaSection from "@/Components/MediaSection";
import TransformSection from "@/Components/TransformSection";
import Footer from "@/Components/Footer";
import FooterSecond from "@/Components/FooterSecond";
import FaqsSection from "@/Components/FaqsSection";
import HeroSectionSecond from "@/Components/HeroSectionSecond";
import Navbar from "@/Components/Navbar";


 const Home = () => {
  return (
   <>
    <div className="pt-18"></div>
    {/* <Navbar /> */}
    <HeroSection />
    <HowPSWork />
    {/* <AboutSecond /> */}
    {/* <AboutThird /> */}
    {/* <AboutStickyScroll /> */}
    <AboutUs />
    {/* <WhyUS /> */}
    <BenefitsSection />
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