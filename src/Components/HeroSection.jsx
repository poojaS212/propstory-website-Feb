import Antigravity from "./Antigravity";
import RotatingText from "./RotatingText";
import { useEffect, useState } from "react";

const propstoryColors = [
    "rgba(30, 120, 220, 1)",  // deep blue
  "rgba(60, 180, 255, 1)",  // cyan / sky blue
  "rgba(80, 200, 160, 1)",  // teal / greenish
  "rgba(140, 210, 90, 1)",  // green
  "rgba(245, 200, 60, 1)",  // yellow
  "rgba(255, 140, 40, 1)",  // orange
  "rgba(235, 70, 60, 1)",   // red
  ];


export default function HeroSection() {

    const [color, setColor] = useState(propstoryColors[0]);

    useEffect(() => {
      const interval = setInterval(() => {
        setColor((prev) => {
          const idx = propstoryColors.indexOf(prev);
          return propstoryColors[(idx + 1) % propstoryColors.length];
        });
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      
      {/* Background
      <Antigravity count={300} color={propstoryColors} autoAnimate /> */}

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
        />


      {/* Overlay */}
      {/* <div className="absolute inset-0 z-10 bg-white/70" /> */}

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-around text-center px-4">
        <div className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-700">
        <img src="https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli8ekjocPS_logo.png" alt="Logo" className="w-30" />
        </div>

        <h1 className="max-w-5xl text-4xl md:text-6xl lg:text-7xl font-semibold -tracking-normal text-black flex flex-wrap md:flex-nowrap items-center justify-center gap-3 text-center pt-20 pb-20">
            <span className="whitespace-nowrap">
                Result Driven <span className="italic">Digital</span>
            </span>

            <RotatingText 
                texts={[
                'Marketing',
                'Strategy',
                'Campaigns',
                'Growth',
                'Performance',
                'Solutions',
                'Services',
                'Lead Generation',
                'Conversions'
                ]}
                mainClassName="bg-[#f0ff96] text-black overflow-hidden justify-center inline-flex whitespace-nowrap "
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={3000}
            />
            </h1>



        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
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
