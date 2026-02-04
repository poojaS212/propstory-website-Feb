import { useRef } from "react";
import FlipTextButton from "./FlipTextButton";
import useReveal from "../hooks/useReveal";

const AboutSecond = () => {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section ref={sectionRef} className="group relative w-full h-screen overflow-hidden bg-white">
      
      {/* Hover Background */}
      <div className="absolute inset-0 bg-blue-100 translate-y-full group-hover:translate-y-0 transition-transform duration-[900ms] ease-[cubic-bezier(.77,0,.18,1)] z-0" />

      {/* Content */}
      <div className="relative z-10 h-full px-10 md:px-20 py-16 flex flex-col justify-between">

        <span className="block text-sm tracking-widest text-blue-950 italic font-semibold underline uppercase">
          About
        </span>

        {/* Headline */}
        <div className="max-w-6xl">
          <h1 className="text-black leading-[0.95]">
            <span className="block text-[12vw] md:text-[8vw] italic">
              Tomorrow&apos;s Growth
            </span>
            <span className="block text-[14vw] md:text-[9vw]">
              Starts Today
            </span>
          </h1>
        </div>

        {/* Bottom Paragraph */}
        <div className="max-w-sm text-black text-sm leading-relaxed">
          <p>
            Founded in 2015, PropStory has grown into a high ROI-driven, preferred digital marketing partner for many of India’s best-known and well-respected real estate brands.
          </p>
        </div>

        <div>
          <FlipTextButton text="Explore Services" className="mt-12" />
        </div>

      </div>
    </section>
  );
};

export default AboutSecond;
