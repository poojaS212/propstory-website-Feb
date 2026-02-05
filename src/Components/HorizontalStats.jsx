import { useEffect, useState } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Clients Served" },
  { value: 100, suffix: "+", label: "Marketing Experts" },
  { value: 96, suffix: "%", label: "CSAT Score" },
];

export default function HorizontalStats() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      
      {/* Clean Premium Layout */}
      <div className="flex flex-col sm:flex-row justify-between items-center 
        gap-10 sm:gap-0 py-8">

        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center sm:items-start"
          >
            {/* Number */}
            <Counter value={item.value} suffix={item.suffix} />

            {/* Label */}
            <p className="mt-3 text-[13px] uppercase tracking-[0.2em] text-gray-400">
              {item.label}
            </p>

            {/* Underline Accent */}
            <div className="mt-4 h-[2px] w-12 bg-white/20"></div>

            {/* Divider */}
            {index !== stats.length - 1 && (
              <div className="hidden sm:block absolute"></div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Line */}
      <div className="h-px w-full bg-white/10"></div>
    </div>
  );
}

/* Counter Animation */
function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const stepTime = 25;
    const step = Math.ceil(value / (duration / stepTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <h2 className="text-6xl font-extrabold text-blue-950 leading-none">
      {count}
      <span className="text-gray-500">{suffix}</span>
    </h2>
  );
}
