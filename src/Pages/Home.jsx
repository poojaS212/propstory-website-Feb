import HowWeWork from "../Components/HowWeWork";
import AboutSecond from "../Components/AboutSecond";
import AboutUs from "../Components/AboutUS";
import AboutThird from "@/Components/AboutThird";
import AboutStickyScroll from "@/Components/AboutStickyScroll";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
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

   </>

  )
}
export default Home;