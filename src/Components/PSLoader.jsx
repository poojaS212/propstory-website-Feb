import { useEffect, useState } from "react";

const PSLoader = ({  onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 10;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => {
          setFadeOut(true);

          setTimeout(() => {
            onComplete && onComplete();
          }, 600);
        }, 400);
      }

      setProgress(Math.floor(value));
    }, 180);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo */}
      <div className="relative flex items-center justify-center">
        <img
          src='https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli8ekjocPS_logo.png'
          alt="PS Logo"
          className="w-40 md:w-56 animate-logoZoom"
        />

        {/* Soft Glow */}
        <div className="absolute w-48 md:w-64 h-48 md:h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div>
    <h2 className="text-white text-xl text-center italic pt-3">From Realty to Reality</h2>
</div>

      {/* Progress Line */}
      <div className="w-64 md:w-96 h-[2px] bg-gray-800 mt-12 overflow-hidden rounded-full">
        <div
          className="h-full bg-white transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <p className="text-gray-400 text-xs mt-4 tracking-widest">
        {progress}%
      </p>
    </div>
  );
};

export default PSLoader;