import Antigravity from "./Antigravity";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { HashLink } from 'react-router-hash-link';


const propstoryColors = [
  "rgba(30, 120, 220, 1)",
  "rgba(60, 180, 255, 1)",
  "rgba(80, 200, 160, 1)",
  "rgba(140, 210, 90, 1)",
  "rgba(245, 200, 60, 1)",
  "rgba(255, 140, 40, 1)",
  "rgba(235, 70, 60, 1)",
];

const words = [
  "Marketing",
  "Growth Systems",
  "Performance",
  "Lead Engines",
  "Campaigns",
  "Conversions",
];

export default function HeroSectionSecond() {
  const [color, setColor] = useState(propstoryColors[0]);
  const [index, setIndex] = useState(0);
  const [isIdle, setIsIdle] = useState(false);
  const idleTimeout = useRef(null);

  // Color cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prev) => {
        const idx = propstoryColors.indexOf(prev);
        return propstoryColors[(idx + 1) % propstoryColors.length];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Word rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Mouse idle detection
  useEffect(() => {
    const handleMouseMove = () => {
      setIsIdle(false);
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
      idleTimeout.current = setTimeout(() => {
        setIsIdle(true);
      }, 2000);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#F8FAFC] flex items-center justify-center" style={{ fontFamily: "'Playfair Display', serif" }}>
<motion.div
  animate={{ y: [0, -30, 0] }}
  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  className="absolute w-[400px] h-[400px] bg-indigo-400/20 rounded-full blur-3xl top-20 left-10"
/>

<motion.div
  animate={{ y: [0, 40, 0] }}
  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  className="absolute w-[400px] h-[400px] bg-[#fcf5e1d9] rounded-full blur-3xl bottom-10 right-10"
/>
      {/* <Antigravity
        count={1000}
        magnetRadius={6}
        ringRadius={7}
        waveSpeed={0.4}
        waveAmplitude={1}
        particleSize={1.2}
        lerpSpeed={0.05}
        color={color}
        autoAnimate={isIdle}
        particleVariance={1}
        rotationSpeed={0}
        depthFactor={1}
        pulseSpeed={3}
        particleShape="capsule"
        fieldStrength={10}
        opacity={1}
      /> */}

      <div className="relative z-20 text-center px-6 max-w-6xl">
{/* Logo */}
        <div className="mb-4">
          <img
            src="https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli8ekjocPS_logo.png"
            alt="Logo"
            className="w-32 mx-auto"
          />
        </div>
        <h1 className="font-display text-[42px] md:text-[70px] lg:text-[80px] font-semibold tracking-[-0.03em] leading-[1.05] text-black">

          <span className="block">
            Result-Driven Digital
          </span>

          {/* Unique Morph Animation */}
          <div className="relative italic h-[1em] flex justify-center items-center">

            {/* Glow Behind Word */}
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.25, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute w-[60%] h-[80%] bg-gradient-to-r from-[#312E81] via-[#6366F1] to-[#A855F7] blur-3xl rounded-full"
            />

            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{
                  opacity: 0,
                  filter: "blur(12px)",
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  filter: "blur(12px)",
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative font-semibold bg-gradient-to-r from-[#312E81] via-[#6366F1] to-[#A855F7] bg-clip-text text-transparent"  style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>

          </div>
        </h1>

        <p className="mt-10 text-lg md:text-md text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
          We build high-performance marketing engines for real estate brands
          that demand measurable growth and scalable results.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-5">

  {/* Primary Button */}
 <HashLink smooth to="/#contact">
         <button className="rounded-full bg-black px-8 py-2 text-white font-medium hover:bg-gray-800 transition">
             Contact Us
           </button>
         </HashLink>
           
         <HashLink smooth to="/#how-ps-work">
         <button className="rounded-full border border-gray-300 px-8 py-2 text-black font-medium hover:bg-gray-100 transition">
             Explore More
           </button>
         </HashLink>
           

</div>


      </div>
    </section>
  );
}
