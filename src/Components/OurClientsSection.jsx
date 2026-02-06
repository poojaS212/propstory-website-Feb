import { motion } from "framer-motion";

const logos = [
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9w5rmmadani.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9w68n8BKC-28.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9w6jgjELDECO-01-01.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9w6taqEMAAR-01.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9w74vsExperion.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9w7g5kGOLDEN%20HOMES-01.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9w7rrjKOLTE%20PATIL-01.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9w81qeMAHINDRA-01.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9x2bqgMETRO%20GROUP-01.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlieferk8SPAGROUP_11zon.png",
  "https://magicpage-dev.propstory.com/ImageUploads/VBHC%20Landscape/1nnx51q2hm71ht9gt.jpg",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9wb7jeNEW%20PORUR_11zon.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9wbm1mOZONE_11zon.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9wbx5vRWD-01.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9wc866Signature-global.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlief9op7Adarsh-Group.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlief9ufuashiana.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwliefa1seassetez.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwliefej4mSwamitva.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwliefa8i7Bestech.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwliefalwkGeown.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwliefbi5kHbits.png",
];

export default function OurClientsSection() {
  return (
   <>
   
    <section className="bg-white h-[20vh]">
      
    </section>
    <section className="relative overflow-hidden pt-24 pb-">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[#fdf8f1]" />

      {/* Blur Shapes */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-purple-500/20 blur-[140px]" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-blue-500/20 blur-[140px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
  <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
    Our Clients
  </p>

  <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-blue-950 leading-tight">
    Built on trust.
    <br />
    Chosen by brands.
  </h2>

  <p className="mt-6 text-base text-gray-600 leading-relaxed">
    20+ companies across real estate, startups, and enterprise teams
    rely on us for long-term growth.
  </p>
</div>


        {/* Desktop Marquee */}
        <div className="hidden md:flex flex-col gap-6 pb-20">
          <MarqueeRow logos={logos.slice(0, 11)} speed={40} />
        </div>

        {/* Mobile Scroll */}
        <div className="flex md:hidden overflow-x-auto gap-4 pb-4 scrollbar-hide">
          {logos.map((logo, idx) => (
            <LogoCard key={idx} logo={logo} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

/* ---------------------------- */
/* Marquee Row Component */
/* ---------------------------- */
function MarqueeRow({ logos, speed, reverse }) {
  return (
    <div className="relative overflow-hidden" >
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: reverse ? ["-100%", "0%"] : ["0%", "-100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((logo, idx) => (
          <LogoCard key={idx} logo={logo} />
        ))}
      </motion.div>
    </div>
  );
}

/* ---------------------------- */
/* Logo Card */
/* ---------------------------- */
function LogoCard({ logo }) {
  return (
    <div
      className="
        group flex items-center justify-center
        min-w-[180px] h-[100px]
        rounded-2xl border border-white/10
        bg-white/5 backdrop-blur-xl
        shadow-lg transition-all duration-300
        hover:border-white/30 hover:shadow-purple-500/30
      "
    >
      <img
        src={logo}
        alt="Client Logo"
        className="
          h-20 object-contain
          transition-all duration-300
          group-hover:grayscale-0
          group-hover:opacity-100
          group-hover:scale-110
        "
      />
    </div>
  );
}
