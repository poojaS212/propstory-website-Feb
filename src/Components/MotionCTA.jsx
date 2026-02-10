import { motion } from "framer-motion";

const MotionCTA = ({
  text = "Explore",
  href = "#",
  className = "",
  arrow = true,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      className="mt-16 text-center"
    >
      <a
        href={href}
        className={`inline-flex items-center gap-2 px-8 py-3 rounded-full 
        bg-[#071c2c] text-white font-medium shadow-lg 
        hover:bg-black transition ${className}`}
      >
        {text}
        {arrow && <span>→</span>}
      </a>
    </motion.div>
  );
};

export default MotionCTA;
