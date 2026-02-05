import HowWeWork from "../Components/HowWeWork";
import AboutSecond from "../Components/AboutSecond";
import AboutScrollSection from "../Components/AboutStickyScroll";
import AboutUs from "../Components/AboutUS";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";


 const Home = () => {
  return (
   <>
    <div className="pt-18"></div>
    <Navbar />
    <HeroSection />
    <HowWeWork />
    <AboutUs />
    <AboutScrollSection />
    <AboutSecond />
   </>

  )
}
export default Home;