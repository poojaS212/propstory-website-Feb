import HowWeWork from "../Components/HowWeWork";
import AboutSecond from "../Components/AboutSecond";
import AboutUs from "../Components/AboutUS";
import AboutStickyScroll from "@/Components/AboutStickyScroll";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import OurClientsSection from "@/Components/OurClientsSection";
import OurClients from "@/Components/OurClients";
import OurClientsvertical from "@/Components/OurClientsvertical";
import ContactSection from "@/Components/ContactSection";
import ContactForm from "@/Components/ContactForm";
import WhyUS from "@/Components/WhyUS";
import BenefitsSection from "@/Components/BenefitsSection";
import ContactSectionSecond from "@/Components/ContactSectionSecond";
import MeetOurTeam from "@/Components/MeetOurTeam";
import MediaSection from "@/Components/MediaSection";
import TransformSection from "@/Components/TransformSection";
import Footer from "@/Components/Footer";
import FooterSecond from "@/Components/FooterSecond";
import FaqsSection from "@/Components/FaqsSection";


 const Home = () => {
  return (
   <>
    <div className="pt-18"></div>
    <Navbar />
    <HeroSection />
    <HowWeWork />
    <AboutSecond />
    {/* <AboutThird /> */}
    <AboutStickyScroll />
    <AboutUs />
    <WhyUS />
    <BenefitsSection />
      <MeetOurTeam />
    <OurClientsvertical />
    <OurClients />
    <OurClientsSection />
    <MediaSection />
    <TransformSection />
    <ContactSectionSecond />
    <FaqsSection />
    <ContactSection />
    <ContactForm />
    <FooterSecond />
    <Footer />

    

   </>

  )
}
export default Home;