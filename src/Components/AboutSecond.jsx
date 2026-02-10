import { useRef } from "react";
import FlipTextButton from "./FlipTextButton";
import BlurText from "./BlurText";
import { motion } from "framer-motion"
import MotionCTA from "./MotionCTA";


const AboutSecond = () => {
  const sectionRef = useRef(null);
  

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};



  return (
    <section ref={sectionRef} className="group relative w-full overflow-hidden bg-white">
      
      {/* Hover Background */}
      <div className="absolute inset-0 bg-[#f6f3ea] translate-y-full group-hover:translate-y-0 transition-transform duration-[900ms] ease-[cubic-bezier(.77,0,.18,1)] z-0" />

      {/* Content */}
      <div className="relative z-10 px-10 md:px-20 py-16 flex flex-col justify-between">

        <span className="block text-sm tracking-widest text-blue-950 italic font-semibold underline uppercase">
          About
        </span>
<BlurText
  text="Tomorrow&apos;s Growth Starts Today"
  delay={200}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="block text-[12vw] md:text-[8vw] italic"
/>


        {/* Bottom Paragraph */}
<motion.div
  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  viewport={{ once: true, margin: "-500px" }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  className="lg:text-lg text-black text-md leading-relaxed"
>
  <p>
    Founded in 2015, PropStory has grown into a high ROI-driven, preferred digital
    marketing partner for many of India’s best-known and well-respected real estate brands.
  </p>
</motion.div>


        <div>
          <MotionCTA text="Explore Services" className="my-12" />
        </div>

      </div>
    </section>
  );
};

export default AboutSecond;
