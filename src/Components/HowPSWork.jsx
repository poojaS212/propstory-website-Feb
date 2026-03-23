import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShinyText from "./ShinyText";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    step: "01",
    title: "Digital Strategy and Analytics",
    description:
      "We design strategic digital marketing plans by engaging the most effective platform to suit each individual campaign and derive maximum RoI.",
  },
  {
    step: "02",
    title: "CRM Implementations",
    description:
      "We provide complete integration of campaigns with any and all CRM tools.",
  },
  {
    step: "03",
    title: "Landing Pages",
    description:
      "Our creative Landing Pages will power your project’s campaign with insightful details, eye-catching visuals and AI-powered chatbots.",
  },
  {
    step: "04",
    title: "Paid Media",
    description:
      "Google | Facebook & Instagram | LinkedIn | Taboola | TimesNetwork | OutBrain.",
  },
  {
    step: "05",
    title: "Websites Design",
    description:
      "We design responsive and user-friendly websites optimized for SEO, conversions, and seamless user experience across all devices.",
  },
];

export default function HowPSWork() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (index === 0) return;

        gsap.fromTo(
          card,
          {
            y: 100,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 40%",
              scrub: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#FCF5E1] py-20">
      {/* Header */}
      <div className="text-center px-4 mb-16">
        <h4 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          How We Work
        </h4>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          We are passionate about applying innovative design, technologies, and
          methodologies to drive our clients digital marketing success.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col items-center gap-[-120px]">
        {cardsData.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="sticky top-24 w-[90%] max-w-5xl"
            style={{ zIndex: index + 1 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-20 bg-[#161E27] rounded-3xl shadow-2xl border-t-4 border-white">

              {/* Left */}
              <div className="relative">
                <span className="absolute -top-10 text-[6rem] font-extrabold text-white/10">
                  {card.step}
                </span>

                <ShinyText
                  text={card.title}
                  className="text-3xl md:text-4xl font-bold text-white"
                />

                <span className="block w-16 h-1 bg-white mt-4"></span>
              </div>

              {/* Right */}
              <div>
                <p className="text-white text-lg leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}