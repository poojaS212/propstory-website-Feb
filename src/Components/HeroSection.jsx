import Antigravity from "./Antigravity";
import RotatingText from "./RotatingText";
import { useEffect, useState } from "react";
import shape from "../../public/images/shape.png";
import RotatingTextHalden from "./RotatingTextHalden";


const propstoryColors = [
    "rgba(30, 120, 220, 1.0)",  // deep blue
  "rgba(60, 180, 255, 1.0)",  // cyan / sky blue
  "rgba(80, 200, 160, 1.0)",  // teal / greenish
  "rgba(140, 210, 90, 1.0)",  // green
  "rgba(245, 200, 60, 1.0)",  // yellow
  "rgba(255, 140, 40, 1.0)",  // orange
  "rgba(235, 70, 60, 1.0)",   // red
  ];


export default function HeroSection() {

    const [color, setColor] = useState(propstoryColors[0]);
    const [mouse, setMouse] = useState({x : 0, y : 0})

    useEffect(() => {
      const interval = setInterval(() => {
        setColor((prev) => {
          const idx = propstoryColors.indexOf(prev);
          return propstoryColors[(idx + 1) % propstoryColors.length];
        });
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);


    const handleMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
  
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };
  
  return (
    <section onMouseMove={handleMove} className="relative h-screen w-full overflow-hidden bg-[#F7F5ED]" >
 
      <div className="absolute inset-0">
         {/* Background */}
      <Antigravity
            count={1000}
            magnetRadius={6}
            ringRadius={7}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={1.2}
            lerpSpeed={0.05}
            color={color}
            autoAnimate
            particleVariance={1}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={3}
            particleShape="capsule"
            fieldStrength={10}
            opacity={1}

            magnetX={mouse.x}
           magnetY={mouse.y}
        />
        </div>

      {/* </div> */}
      


      {/* Overlay */}

        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 pointer-events-none">

        {/* Logo */}
        <div className="mb-10">
          <img
            src="https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli8ekjocPS_logo.png"
            alt="Logo"
            className="w-32 mx-auto"
          />
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-4xl md:text-6xl lg:text-7xl font-semibold text-black flex flex-col items-center leading-tight">

          {/* Line 1 */}
          <span className="whitespace-nowrap">
            Result Driven Digital
          </span>

        
          <RotatingTextHalden
            texts={[
              "Marketing",
              "Strategy",
              "Campaigns",
              "Growth",
              "Performance",
              "Solutions",
              "Services",
              "Lead-Gen",
              "Conversions",
            ]}
          />

        

        </h1>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 pointer-events-auto">
          <button className="rounded-full bg-black px-8 py-4 text-white font-medium hover:bg-gray-800 transition">
            Contact Us
          </button>

          <button className="rounded-full border border-gray-300 px-8 py-4 text-black font-medium hover:bg-gray-100 transition">
            Explore More
          </button>
        </div>

        </div>

    </section>
  );
}
