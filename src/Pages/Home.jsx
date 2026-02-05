import HowWeWork from "../Components/HowWeWork";
import AboutSecond from "../Components/AboutSecond";
import AboutUs from "../Components/AboutUS";
import AboutThird from "@/Components/AboutThird";
import AboutStickyScroll from "@/Components/AboutStickyScroll";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";


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

   </>

  )
}
export default Home;