import React from "react";

const FlipTextButton = ({ text = "Discover Digicove", className = "" }) => {
  return (
    <button
      className={`group inline-flex items-center gap-6 px-8 py-1 border border-blue-300 rounded-full bg-white overflow-hidden cursor-pointer font-semibold tracking-wider transition-all duration-300 hover:shadow-xl ${className}`}
    >
      {/* Text */}
      <span className="pxl-btn-text flex">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="letter pxl-xspin"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>

      {/* Arrow */}
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#084a84] text-white text-lg transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110">
        ↗
      </span>
    </button>
  );
};

export default FlipTextButton;
