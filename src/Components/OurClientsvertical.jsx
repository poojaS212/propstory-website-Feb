import { motion } from "framer-motion";
import HeadingBadge from "@/Components/HeadingBadge";
import MotionCTA from "./MotionCTA";

const logos = [
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpp9yngd.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqiz2fx.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj0wul.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj15bo.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpp9zmmc.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpp9zxo0.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa06tx.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa0kik.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj1ctn.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj1o4a.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa21y6.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa2ad8.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa2m27.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa2u5b.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa33kj.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa3i6w.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa3rnx.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa40no.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa4a92.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa4koz.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa4uta.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa5342.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa5be9.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa5lwr.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj1wig.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj2hey.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa5vc0.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa6840.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa6hf5.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa6q3b.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa74al.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa7gzu.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj2oil.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa7r30.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa7zvh.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa8cus.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj31sm.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa8o2p.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa8wxy.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa96v0.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa9gzq.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppaa1li.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppaag00.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppaap7w.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppaawl3.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj3kb2.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppab3el.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppaban1.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppabgy9.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj3vo8.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppabnto.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppabvdw.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj4iz0.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppac2bc.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppac8xc.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppacgny.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppacohp.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppacvqc.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppad26s.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj54kw.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj5es6.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppad9kf.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj46gi.webp",
];

// split into 3 columns
const col1 = logos.slice(0, 8);
const col2 = logos.slice(8, 15);
const col3 = logos.slice(15, 22);

export default function OurClientsvertical() {
  return (
   <>
   
    <section className="relative bg-[#fdf8f1] py-20 lg:py-28 overflow-hidden">
  {/* soft background accents */}
  <div className="absolute top-24 left-12 w-72 h-72 bg-[#d6b36a]/20 rounded-full blur-[140px]" />
  <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-200/30 rounded-full blur-[160px]" />

  <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative text-center lg:text-left"
    >
      <HeadingBadge text="OUR TRUSTED NETWORK" />

      <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl leading-tight text-[#2b2b2b]">
        Brands that <br />
        <span className="relative font-semibold">
          believe in us
          <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-[#d6b36a] to-transparent" />
        </span>
      </h2>

      <p className="mt-6 text-base md:text-lg text-[#6b6255] max-w-md mx-auto lg:mx-0 leading-relaxed">
        From premium real estate to enterprise brands — our partners trust
        us to deliver results with consistency and class.
      </p>

      <div className="lg-block hidden">
        <div className="mt-6 flex justify-center lg:justify-start ">
        <MotionCTA text="Explore Clients" />
      </div>
      </div>
    </motion.div>

    {/* RIGHT SLIDING COLUMNS */}
    <motion.div
      className="relative h-[320px] sm:h-[380px] lg:h-[440px] grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
    >
      {/* Show only 2 columns on mobile */}
      <LogoColumn logos={col1} direction="up" speed={24} />
      <LogoColumn logos={col2} direction="down" speed={28} />

      {/* Hide 3rd column on mobile */}
      <div className="hidden lg:block">
        <LogoColumn logos={col3} direction="up" speed={26} />
      </div>
    </motion.div>

<div className="lg:hidden block">
<div className="flex justify-center lg:justify-start">
        <MotionCTA className="mt-0" text="Explore Clients" />
      </div>
</div>
          

  </div>
</section>
 
    </>
  );
}

/* -------------------------------- */
/* Vertical Sliding Column */
/* -------------------------------- */
function LogoColumn({ logos, direction = "up", speed = 20 }) {
  return (
    <div className="relative overflow-hidden" id="clients">
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
    <div
      className="
      flex items-center justify-center
      h-16 sm:h-18 lg:h-20
      rounded-xl lg:rounded-2xl
      bg-white
      border border-gray-200
      shadow-sm
      transition-all duration-300
      hover:shadow-md
    "
    >
      <img
        src={logo}
        alt="Client Logo"
        className="h-10 sm:h-14 lg:h-14 object-contain opacity-80"
      />
    </div>
  );
}
