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

export default function OurClients() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#fdf8f1]">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(200,170,120,0.12),transparent_65%)]" />

      {/* Luxury Blur Accent */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#d6b36a]/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#fff]/40 rounded-full blur-[160px]" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
      <div className="max-w-5xl mx-auto mb-20 grid grid-cols-12 gap-6 items-start">

  {/* LEFT — statement */}
  <div className="col-span-12 md:col-span-5">
    <p className="text-xs tracking-[0.3em] uppercase text-[#6b6255]">
      Our Clients
    </p>

    <h2 className="mt-4 text-4xl md:text-5xl font-[Playfair_Display] font-medium text-[#2b2b2b] leading-[1.1]">
      Selected partnerships
    </h2>
  </div>

  {/* RIGHT — facts */}
  <div className="col-span-12 md:col-span-7">


    <div className="mt-8 h-[1px] w-full bg-[#2b2b2b]/10" />

    <p className="mt-6 text-sm md:text-base leading-relaxed max-w-xl">
      We work with a focused group of clients where quality, clarity,
      and long-term thinking matter more than volume.
    </p>
  </div>

</div>


        {/* Marquee Wrapper */}
        {/* Marquee Wrapper */}
<div className="relative overflow-hidden space-y-10">
  {/* Fade Edges */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#fdf8f1] to-transparent z-20" />
  <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#fdf8f1] to-transparent z-20" />

  {/* Row 1 — Left to Right */}
  <motion.div
    className="flex gap-8 w-max"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      repeat: Infinity,
      duration: 45,
      ease: "linear",
    }}
  >
    {[...logos, ...logos].map((logo, idx) => (
      <LogoCard key={`row1-${idx}`} logo={logo} />
    ))}
  </motion.div>

  {/* Row 2 — Right to Left */}
  <motion.div
    className="flex gap-8 w-max"
    animate={{ x: ["-50%", "0%"] }}
    transition={{
      repeat: Infinity,
      duration: 28,
      ease: "linear",
    }}
  >
    {[...logos, ...logos].map((logo, idx) => (
      <LogoCard key={`row2-${idx}`} logo={logo} />
    ))}
  </motion.div>
</div>

      </motion.div>
    </section>
  );
}

/* -------------------------------- */
/* Luxury Logo Card */
/* -------------------------------- */
function LogoCard({ logo }) {
  return (
    <div
      className="
        group flex items-center justify-center
        w-[180px] h-[100px]
        rounded-2xl
        bg-white/50 backdrop-blur-xl
        border border-[#d6b36a]/25
        shadow-sm
        transition-all duration-500
        hover:scale-105
        hover:shadow-lg
        hover:border-[#d6b36a]/60
      "
    >
      <img
        src={logo}
        alt="Client Logo"
        className="
          h-20 object-contain
          transition-all duration-500
          group-hover:opacity-100
          group-hover:grayscale-0
          group-hover:blur-0
          group-hover:drop-shadow-[0_0_12px_rgba(214,179,106,0.55)]
        "
      />
    </div>
  );
}
