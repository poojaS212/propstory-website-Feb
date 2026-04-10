import { motion } from "framer-motion";

export default function PageBanner({
  title = "Page Title",
  subtitle = "Short description goes here",
  bgImage = "",
  height = "h-100"
}) {
  return (
    <section className={`relative w-full ${height} flex items-center overflow-hidden`}>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Gradient Overlay (better than plain black) */}
      <div className="absolute inset-0"></div>

     
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="max-w-3xl">

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight text-white"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-lg md:text-xl text-white leading-relaxed"
          >
            {subtitle}
          </motion.p>

        

        </div>
      </div>

    

    </section>
  );
}