import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HorizontalStats from "./HorizontalStats";
import { Link } from "react-router-dom";



gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef(null);
  
  const textRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(videoRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about-us"
      ref={sectionRef}
      className="w-full bg-white py-32 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <div ref={textRef}>
         <span class="inline-block bg-black text-white text-xs px-4 py-1 rounded-full tracking-widest ">ABOUT</span>

          <h2 class="text-[34px] md:text-[48px] font-semibold text-gray-900 leading-tight max-w-3xl mx-auto pt-5">What We Do</h2>

          <p className="text-lg leading-relaxed text-gray-700 max-w-xl pt-4">
            Founded in 2015, PropStory has grown into a high ROI-driven,
            preferred digital marketing partner for many of India’s
            best-known and well-respected real estate brands.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 max-w-xl">
            From careers in technology and finance, our founders carved a
            unique path by enabling real estate brands to bridge the
            information divide between the product and the customer.
          </p>
        <HorizontalStats />

        <div>
           <Link to="/real-estate-marketing-companies-in-bangalore" className="rounded-full bg-black px-8 py-2 text-white font-medium hover:bg-gray-800 transition">
                    Know More
                  </Link>
        </div>
        
        </div>

        {/* RIGHT VIDEO / 3D */}
        <div
          ref={videoRef}
          className="relative w-full h-[420px] overflow-hidden"
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://d2jshqyxoh2162.cloudfront.net/page-section-image/n6rK24juF586TWm0aJ8Rb6m5n9KR3sOjOiurqcer.mp4" type="video/mp4" />
          </video>

          {/* subtle overlay for luxury feel */}
          <div className="absolute inset-0 bg-black/10" />

          {/* frame */}
          <div className="absolute inset-4 border border-white/40 pointer-events-none" />
        </div>


      </div>
    </section>
  );
};

export default AboutUs;
