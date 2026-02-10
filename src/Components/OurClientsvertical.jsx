import { motion } from "framer-motion";
import FlipTextButton from "./FlipTextButton";
import HeadingBadge from "@/Components/HeadingBadge";
import MotionCTA from "./MotionCTA";

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

// split into 3 columns
const col1 = logos.slice(0, 8);
const col2 = logos.slice(8, 15);
const col3 = logos.slice(15, 22);

export default function OurClientsvertical() {
  return (
   <>
   
    <section className="relative bg-[#fdf8f1] py-28 overflow-hidden">
      {/* soft background accents */}
      <div className="absolute top-24 left-12 w-72 h-72 bg-[#d6b36a]/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-red rounded-full blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
      <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  viewport={{ once: true }}
  className="relative"
>
  {/* Top label */}
   <HeadingBadge text="OUR TRUSTED NETWORK" />
 

  {/* Heading */}
  <h2 className="mt-6 text-4xl md:text-5xl font-[Playfair_Display] leading-tight text-[#2b2b2b]">
    Brands that <br />
    <span className="relative font-semibold">
      believe in us
      <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-[#d6b36a] to-transparent" />
    </span>
  </h2>

  {/* Description */}
  <p className="mt-7 text-lg text-[#6b6255] max-w-md leading-relaxed">
    From premium real estate to enterprise brands — our partners trust
    us to deliver results with consistency and class.
  </p>

  {/* CTA */}
  <div className="flex content-start">
    <MotionCTA text="Explore Clients" />
  </div>
</motion.div>


        {/* RIGHT SLIDING COLUMNS */}
        <motion.div
          className="relative h-[440px] grid grid-cols-3 gap-6"
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          {/* fade mask */}
          <div className="pointer-events-none absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#fdf8f1] to-transparent z-20" />
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#fdf8f1] to-transparent z-20" />

          <LogoColumn logos={col1} direction="up" speed={18} />
          <LogoColumn logos={col2} direction="down" speed={22} />
          <LogoColumn logos={col3} direction="up" speed={20} />
        </motion.div>

      </div>
    </section>
    <section className="bg-white h-[20vh]"></section>

    </>
  );
}

/* -------------------------------- */
/* Vertical Sliding Column */
/* -------------------------------- */
function LogoColumn({ logos, direction = "up", speed = 20 }) {
  return (
    <div className="relative overflow-hiddenshadow-sm">
      <motion.div
        className="flex flex-col gap-6 py-6"
        animate={{
          y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <LogoCard key={i} logo={logo} />
        ))}
      </motion.div>
    </div>
  );
}

/* -------------------------------- */
/* Logo Card */
/* -------------------------------- */
function LogoCard({ logo }) {
  return (
    <div className="
      flex items-center justify-center
      h-20 rounded-2xl
      bg-white
      border border-gray-200
      shadow-sm
      transition-all duration-300
      hover:shadow-md
    ">
      <img
        src={logo}
        alt="Client Logo"
        className="h-15 object-contain opacity-80"
      />
    </div>
  );
}
