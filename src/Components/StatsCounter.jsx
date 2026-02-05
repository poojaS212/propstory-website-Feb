import { useEffect, useRef, useState } from "react";

/* DATA */
const statsData = [
  { value: 250, label: "Projects Completed" },
  { value: 1200, label: "Ads Runs" },
  { value: 450, label: "Campaigns Managed" },
  { value: 98, label: "Client Satisfaction" },
];

/* MAIN COMPONENT */
export default function StatsCounter() {
  return (
    <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">
      
      <h3 className="text-2xl font-semibold text-white tracking-tight">
        Proven Marketing Results
      </h3>

      <p className="mt-2 text-sm text-gray-400 leading-relaxed">
        Performance numbers that define trust, scale, and impact.
      </p>

      <div className="my-8 h-px w-full bg-white/10"></div>

      <div className="space-y-7">
        {statsData.map((stat, index) => (
          <StatRow
            key={index}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </div>
  );
}

/* CHILD COMPONENT */
function StatRow({ value, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const stepTime = 45;
    const step = Math.ceil(end / (duration / stepTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div ref={ref} className="flex items-center justify-between">
      <h2 className="text-4xl font-bold text-white leading-none">
        {count}
        <span className="text-gray-400">+</span>
      </h2>

      <p className="text-sm font-medium text-gray-300 max-w-[160px] text-right">
        {label}
      </p>
    </div>
  );
}
