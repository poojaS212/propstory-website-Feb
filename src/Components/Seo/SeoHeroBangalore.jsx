import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";


export default function SeoHeroBangalore() {
  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-[#F8FAFC] flex items-center justify-center"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {/* Background Blobs (kept from your UI) */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[400px] h-[400px] bg-indigo-400/20 rounded-full blur-3xl top-20 left-10"
      />

      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[400px] h-[400px] bg-[#fcf5e1d9] rounded-full blur-3xl bottom-10 right-10"
      />

      <div className="relative z-20 text-center px-6 max-w-5xl">
        
        {/* Logo */}
        <div className="mb-5 mt-8">
          <img
            src="https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli8ekjocPS_logo.png"
            alt="PropStory Logo"
            className="w-32 mx-auto"
          />
        </div>

        {/* ✅ SEO H1 (VERY IMPORTANT) */}
        <h1 className="font-display text-[36px] md:text-[60px] lg:text-[72px] font-semibold tracking-[-0.03em] leading-[1.1] text-black">
          Real Estate Digital Marketing Agency In Bangalore
        </h1>
    

        {/* Subtext (your exact content) */}
        <p className="mt-6 text-lg md:text-md text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
          PropStory is one of the leading real estate digital marketing agencies in Bangalore with 10 plus years of hands-on experience in the property market. We help builders, developers, and brokers generate consistent property leads through a strong mix of organic growth and paid campaigns.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5">
          <HashLink smooth to="/#contact">
         <button className="rounded-full bg-black px-8 py-2 text-white font-medium hover:bg-gray-800 transition">
             Contact Us
           </button>
         </HashLink>
        
        </div>
      </div>
    </section>
  );
}