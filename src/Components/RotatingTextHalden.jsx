import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RotatingTextHalden({ texts }) {
  const [index, setIndex] = useState(0);
  const [isResetting, setIsResetting] = useState(false);

  const extendedTexts = [...texts, ...texts];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === texts.length) {
      // After animation finishes, reset without animation
      setTimeout(() => {
        setIsResetting(true);
        setIndex(0);
      }, 1000); // match animation duration
    }
  }, [index, texts.length]);

  return (
    <div className="overflow-hidden h-[80px] flex justify-center">
      <motion.div
        animate={{ y: `-${index * 100}%` }}
        transition={
          isResetting
            ? { duration: 0 }
            : { duration: 1, ease: [0.76, 0, 0.24, 1] }
        }
        onAnimationComplete={() => {
          if (isResetting) {
            setIsResetting(false);
          }
        }}
        className="flex flex-col items-center"
      >
        {extendedTexts.map((word, i) => (
          <div
            key={i}
            className="h-[80px] flex items-center justify-center whitespace-nowrap px-4"
          >
            {word}
          </div>
        ))}
      </motion.div>
    </div>
  );
}