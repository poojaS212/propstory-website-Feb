import React from "react";
import Shuffle from "./Shuffle";

const ShuffleButton = ({ text = "Discover Digicove", className = "" }) => {
  return (
    <button
      className={`group inline-flex items-center gap-2
      px-3 py-2
      border border-blue-300 rounded-full
      bg-white hover:shadow-sm
      transition-all duration-200 ${className}`}
    >
      <Shuffle
        text={
          <span className="flex text-[16px] leading-none font-medium tracking-wide">
            {text.split("").map((char, index) => (
              <span
                key={index}
                className="letter"
                style={{ transitionDelay: `${index * 30}ms` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        }
        shuffleDirection="right"
        duration={0.22}
        stagger={0.02}
        shuffleTimes={1}
        triggerOnHover
        loop={false}
      />

      {/* Arrow */}
      <span
        className="flex items-center justify-center
        w-6 h-6 rounded-full
        bg-[#084a84] text-white text-[10px]
        transition-transform duration-200
        group-hover:rotate-45"
      >
        ↗
      </span>
    </button>
  );
};

export default ShuffleButton;
