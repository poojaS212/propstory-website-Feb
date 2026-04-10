import { useEffect, useRef, useState } from "react";

export default function HorizontalStats() {
  const stats = [
  { value: 1500, suffix: "+", label: "Digital Campaigns" },
  { value: 60, suffix: "+", label: "Realty Brands" },
  { value: 9, suffix: "+", label: "Years of Delivering Success" },
];

  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // run once only
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="w-full max-w-5xl mx-auto">
      
     <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16 py-8 text-center sm:text-left">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center sm:items-start">
            
            {/* Number */}
            <Counter
              value={item.value}
              suffix={item.suffix}
              start={startCount}
            />

            {/* Label */}
            <p className="mt-3 text-[13px] uppercase tracking-[0.2em] text-gray-400 text-center sm:text-left">
              {item.label}
            </p>

            <div className="mt-4 h-[2px] w-12 bg-white/20"></div>
          </div>
        ))}
      </div>

      <div className="h-px w-full bg-white/10"></div>
    </div>
  );
}

/* Counter Animation */
function Counter({ value, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return; // 👈 only run when visible

    let startVal = 0;
    const duration = 1200;
    const stepTime = 25;
    const step = Math.ceil(value / (duration / stepTime));

    const timer = setInterval(() => {
      startVal += step;

      if (startVal >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(startVal);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [start, value]);

  return (
    <h2 className="text-6xl font-extrabold text-blue-950 leading-none">
      {count}
      <span className="text-gray-500">{suffix}</span>
    </h2>
  );
}
