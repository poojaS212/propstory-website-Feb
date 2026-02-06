
import { useEffect, useRef, useState } from "react";

function StatCard({ value, title, desc, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Content */}
      <div
        className={`transition-all duration-700 ease-out ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className="text-[90px] md:text-[120px] font-black leading-none">
          {value}
        </div>
        <h3 className="mt-6 text-2xl italic font-semibold">{title}</h3>
        <p className="mt-4 text-gray-600 leading-relaxed max-w-md">
          {desc}
        </p>
      </div>

      {/* Yellow mask (slides DOWN) */}
      <div
        className={`absolute inset-0 bg-lime-300 transition-transform duration-700 ease-out ${
          visible ? "translate-y-full" : "translate-y-0"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      />
    </div>
  );
}
export default function WhyUS() {
  const stats = [
    {
    //   value: "35%",
      title: "Strategic, Not Generic",
      desc: "We don’t do one-size-fits-all solutions. Every plan is tailored to your audience, your competitors, and your business ambitions.",
    },
    {
        // value: "12",
        title: "Tech-Driven Expertise",
        desc: "Great strategy needs powerful technology behind it. We leverage modern tools, platforms, and frameworks to build fast, scalable, and reliable digital solutions—so your marketing isn’t just creative, it’s engineered for performance, security, and growth.",
      },
    {
    //   value: "25%",
      title: "Growth-Focused Execution",
      desc: "Strategy without results is just activity. We prioritize measurable impact — from leads and traffic to conversions and revenue growth.",
    },
    // {
    // //   value: "12",
    //   title: "Transparent, Collaborative Partnership",
    //   desc: "You’re not handed reports — you're part of the journey. We communicate clearly, act proactively, and adapt based on real insight.",
    // },
    
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-16">
        <p className="uppercase tracking-widest text-sm text-gray-500">
          Benefits
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl italic">
          Discover the <span>Benefits</span> of choosing us today
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {stats.map((item, i) => (
          <StatCard
            key={i}
            value={item.value}
            title={item.title}
            desc={item.desc}
            delay={i * 150}
          />
        ))}
      </div>
    </section>
  );
}
