import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShinyText from './ShinyText';


gsap.registerPlugin(ScrollTrigger);

// Sample cards data with icons
const cardsData = [
  {
    step: "01",
    title: "Digital Strategy and Analytics",
    description: "We design strategic digital marketing plans by engaging the most effective platform to suit each individual campaign and derive maximum RoI.",
    
  },
  {
    step: "02",
    title: "CRM Implementations",
    description: "We provide complete integration of campaigns with any and all CRM tools.",
    

  },
  {
    step: "03",
    title: "Landing Pages",
    description: "Our creative Landing Pages will power your project’s campaign with insightful details, eye-catching visuals and AI-powered chatbots.",
  },
  {
    step: "04",
    title: "Paid Media",
    description: "Google | Facebook & Instagram | LinkedIn | Taboola | TimesNetwork | OutBrain.",
    
  },
   {
    step: "05",
    title: "Websites Design",
    description: "We design responsive and user-friendly websites optimized for SEO, conversions, and seamless user experience across all devices.",
    
  },
];

const HowWeWork = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${cardsData.length * 100}%`,
          pin: true,
          pinSpacing: true,
          scrub: true,
        },
      });

      cardsRef.current.forEach((card, index) => {
        if (index === 0) return;
        tl.fromTo(card, { yPercent: 100 }, { yPercent: 0, ease: "none" });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full bg-[#FCF5E1]">
      <div className="pt-12 text-center z-50 px-4">
        <h4 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          How We Work
          <span className="block w-12 h-1 bg-gray-900 mx-auto mt-3"></span>
        </h4>
        <p className="mt-6 text-center text-lg text-gray-600 lg:w-4xl mx-auto">
          We are passionate about applying innovative design, technologies, and
          methodologies to drive our clients digital marketing success.
        </p>
      </div>

      {/* Cards */}
{cardsData.map((card, index) => (
  <div
    key={index}
    ref={(el) => (cardsRef.current[index] = el)}
    className="absolute inset-0 flex items-center justify-center"
    style={{ zIndex: index + 1 }}
  >
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 w-[90%] max-w-6xl px-10 py-20 lg:mt-24 mt-10 bg-[#161E27] rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
      <div className="relative flex flex-col justify-center">
        <span className="absolute -left-6 -top-22 text-[10rem] md:text-[6rem] font-extrabold text-[#fcf5e189] opacity-20 select-none pointer-events-none z-10">
          {card.step}
        </span>
      
      <ShinyText
  text={card.title}
  speed={2}
  className="relative text-3xl md:text-4xl leading-relaxed font-extrabold z-20 text-white"
  delay={0}
  color="#fff"
  shineColor="#ffffff"
  spread={120}
  direction="left"
  yoyo={false}
  pauseOnHover={false}
  disabled={false}
/>
      
        <span className="block w-16 h-1 bg-white rounded mt-2 z-20"></span>
      </div>
     
      <div className="relative flex flex-col justify-center items-start">
        
        <p className="text-white text-md md:text-lg leading-relaxed z-10 animate-fadeInUp">
          {card.description}
        </p>
      </div>

      {/* Card background */}
      <div className="absolute inset-0 bg-[#161E27] rounded-3xl shadow-2xl -z-10" />
    </div>
  </div>
))}




      {/* Spacer for smooth scroll after last card */}
      <div className="absolute bottom-[-10vh] h-[10vh] w-full" />
    </section>
  );
};

export default HowWeWork;
