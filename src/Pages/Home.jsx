import HowWeWork from "../Components/HowWeWork";
import AboutSecond from "../Components/AboutSecond";
import AboutUs from "../Components/AboutUS";
import AboutThird from "@/Components/AboutThird";
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


 const Home = () => {
  return (
   <>
    <div className="pt-18"></div>
    <Navbar />
    <HeroSection />
    <HowWeWork />
    <AboutSecond />
    <AboutThird />
    <AboutStickyScroll />
    <AboutUs />
    <WhyUS />
    <BenefitsSection />
    <OurClientsvertical />
    <OurClients />
    <OurClientsSection />
    <ContactSection />
    <ContactForm />
    

   </>

  )
}
export default Home;