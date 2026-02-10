import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "./SplitText";
gsap.registerPlugin(ScrollTrigger);

const AboutThird = () => {
  const sectionRef = useRef(null);
 
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <>
      {/* ABOUT SECTION */}
      <section
        ref={sectionRef}
        className="relative pb-8 bg-[#ffff] text-black overflow-hidden"
      >
        <div className="max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-12 gap-12 py-24">
          {/* LEFT */}
          <div className="lg:col-span-12 md:ml-[10%] ml-0">
            <span className="inline-block mb-6 px-4 py-1 text-xs tracking-widest bg-white text-blue-900 font-bold rounded-none rounded-tr-lg">
              ABOUT
            </span>
            <h2 className="text-4xl text-black lg:text-5xl font-light leading-tight">
              <SplitText
                text="All About PropStory"
                className="text-7xl font-semibold text-center itali leading-relaxed"
                delay={50}
                duration={1.25}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.3}
                rootMargin="100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
                showCallback
              />
            </h2>
          </div>

       
          
          <div className="lg:col-span-12 bg-[#fdf8f1] md:ml-[10%] ml-0 ms-0 rounded-tr-[8rem]">
            <p className="md:py-26 md:px-20 leading-[2.5rem] italic text-2xl">Founded in 2015, PropStory has grown into a high ROI-driven, preferred digital marketing partner for many of India’s best-known and well-respected real estate brands.

From careers in technology and finance, our founders carved a unique path by enabling real estate brands to bridge the information divide between the product and the customer.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutThird;
