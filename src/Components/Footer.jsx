// Footer.jsx
import React from "react";
import { motion } from "framer-motion";

const offices = [
  {
    city: "Bangalore",
    address: "Hustlehub Tech Park H210, 36/5 Somasundarapalya Main Road, HSR Layout, Bengaluru, Karnataka 560102",
    phone: "+91 22 4080 9000",
    color: "bg-pink-400",
  },
  {
    city: "Delhi NCR",
    address: "Hustlehub Tech Park H210, 36/5 Somasundarapalya Main Road, HSR Layout, Bengaluru, Karnataka 560102",
    phone: "+91 124 408 9000",
    color: "bg-yellow-400",
  },
  {
    city: "Mumbai",
    address: "Hustlehub Tech Park H210, 36/5 Somasundarapalya Main Road, HSR Layout, Bengaluru, Karnataka 560102",
    phone: "+91 80 4080 9000",
    color: "bg-green-400",
  },
  {
    city: "Pune",
        address: "Hustlehub Tech Park H210, 36/5 Somasundarapalya Main Road, HSR Layout, Bengaluru, Karnataka 560102",
    phone: "+971 4 408 9000",
    color: "bg-blue-400",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-fixed bg-[#050505] text-white overflow-hidden pt-28 pb-10">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.08] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Glow */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-amber-500/10 blur-[200px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* BIG FADED TEXT */}
        <h1 className="absolute inset-0 flex justify-center items-start pt-10 text-[clamp(5rem,15vw,16rem)] font-serif font-light tracking-widest text-white/15 pointer-events-none">
          PropStory
        </h1>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-20 relative z-10">
          {/* LEFT MAP SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-serif tracking-wide mb-6">
              Our Presence Across Global Markets
            </h3>

            <p className="text-neutral-400 leading-relaxed max-w-md mb-10">
              PropStory operates across India’s most premium real estate hubs,
              delivering digital excellence with luxury precision.
            </p>
          </motion.div>

          {/* RIGHT ADDRESS SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-x-14 gap-y-14"
          >
            {offices.map((office, i) => (
              <div key={i} className="space-y-4">
                {/* City Header */}
                <div className="flex items-center gap-3">
                  <span
                    className={`w-3 h-3 rounded-sm ${office.color}`}
                  ></span>
                  <h4 className="uppercase tracking-widest text-sm font-semibold">
                    {office.city}
                  </h4>
                </div>

                {/* Address */}
                <p className="whitespace-pre-line text-sm text-neutral-400 leading-relaxed font-light">
                  {office.address}
                </p>

                {/* Phone */}
                <a
                  href={`tel:${office.phone}`}
                  className="flex items-center gap-3 text-sm font-mono text-amber-300 hover:text-amber-200 transition"
                >
                  <span className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-white/5">
                    📞
                  </span>
                  {office.phone}
                </a>
              </div>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="mt-24 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-500">
          {/* Logos */}
          <div className="flex items-center gap-6">
            <span className="text-lg font-semibold tracking-wide text-white">
              <img src="https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli8ekjocPS_logo.png" alt="PS_Logo" className="w-20" / >
            </span>

            <div className="h-6 w-[1px] bg-white/20" />

            <span className="text-xs uppercase tracking-widest text-neutral-400">
              Google Partner Certified
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-10">
            {["Privacy Policy", "Terms"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-white transition relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-amber-400 after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-mono text-neutral-600 text-center">
            © 2026 PropStory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
