import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useReveal from "../hooks/useReveal";


gsap.registerPlugin(ScrollTrigger);

const AboutScrollSection = () => {
  const sectionRef = useRef(null);
  useReveal(sectionRef);
  const textRef = useRef(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    const textEl = textRef.current;
    const sectionEl = sectionRef.current;

    const textHeight = textEl.scrollHeight;
    const containerHeight = sectionEl.offsetHeight;

    const endY = -(textHeight - containerHeight);

    gsap.fromTo(
      textEl,
      {
        y: containerHeight, // start hidden
      },
      {
        y: endY, // stop when last text is visible
        ease: "none",
        scrollTrigger: {
          trigger: sectionEl,
          start: "top top",
          end: `+=${textHeight}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
        },
      }
    );
  }, sectionRef);

  return () => ctx.revert();
}, []);



  return (
    <>
      {/* ABOUT SECTION */}
      <section
        ref={sectionRef}
        className="relative h-screen bg-[#084a84] text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-12 gap-12 px-6 lg:px-12 py-24">

          {/* LEFT */}
          <div className="lg:col-span-4">
            <span className="inline-block mb-6 px-4 py-1 text-xs tracking-widest bg-white text-blue-900 font-semibold rounded-none rounded-tr-lg">
              ABOUT
            </span>
            <h2 className="text-5xl lg:text-6xl font-light leading-tight">
              All about <br />
              <span className="font-normal">PropStory</span>
            </h2>
          </div>

          {/* MIDDLE TEXT */}
          <div className="lg:col-span-4 overflow-hidden">
            <div ref={textRef} className="space-y-12 text-[15px] leading-relaxed">
              <p>
                Your specialised digital marketing partner.
              </p>

              <p>
                Founded in 2015, PropStory is a results-focused digital marketing partner dedicated to elevating India’s real estate brands in the digital era. Over the years, we’ve evolved into a trusted growth engine that helps developers and brokers amplify their online presence, generate quality leads, and connect meaningfully with today’s savvy property buyers.
              </p>

              <p>
                What sets us apart is our deep blend of technology, data insight, and real estate expertise. From strategic campaign planning to smart analytics and creative execution, we design tailored digital solutions that bring clarity to complex marketing challenges. Our approach is rooted in understanding your goals and audience, so every campaign delivers measurable impact and real results.
              </p>

              <p>
                At PropStory, we don’t just promote properties online — we build narratives that resonate, campaigns that convert, and brands that stand out in a crowded market.
              </p>
               <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem inventore explicabo sapiente, modi odit iste beatae eius provident ad nam molestiae ullam consequuntur dolorem quos debitis neque obcaecati tempora cupiditate nemo doloribus fugiat! Expedita blanditiis eum voluptatem reiciendis voluptas eos tempore corporis tempora maiores incidunt? Expedita soluta labore, exercitationem similique numquam laborum molestiae quibusdam magnam, ea pariatur quasi? Nam rem eius assumenda ea velit amet corporis? Esse quidem maxime autem cum neque eaque in at impedit rerum perferendis, vitae veritatis eligendi minus veniam repellendus quos voluptates eos odio nam laborum numquam est. Voluptas odio distinctio eveniet ut incidunt commodi voluptatum.
              </p>

             
              <p className="font-medium">
                We don’t chase impressions. We build demand.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-4 hidden lg:flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Digital real estate"
              className="w-[320px] h-[420px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>
    
    </>
  );
};

export default AboutScrollSection;
