// Footer.jsx
import React from "react";
import { motion } from "framer-motion";

const offices = [
  {
    city: "Bangalore",
    address:
      "Hustlehub Tech Park H210, 36/5 Somasundarapalya Main Road,\nHSR Layout, Bengaluru, Karnataka 560102",
    phone: "+91 22 4080 9000",
    color: "bg-pink-500",
  },
  {
    city: "Delhi NCR",
    address:
      "DLF Corporate Tower, Golf Course Road,\nGurugram, Haryana 122002",
    phone: "+91 124 408 9000",
    color: "bg-yellow-500",
  },
  {
    city: "Mumbai",
    address:
      "Teloz Spaces Techniplex, SV Road,\nMalad West, Mumbai 400064",
    phone: "+91 80 4080 9000",
    color: "bg-green-600",
  },
  {
    city: "Pune",
    address:
      "Business Centre, Baner Highway Road,\nPune, Maharashtra 411045",
    phone: "+91 99 5360 5303",
    color: "bg-blue-600",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-white text-black overflow-hidden pt-36 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* BIG HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl lg:text-[11rem] font-serif font-semibold tracking-[0.8rem]">
            PropStory
          </h1>
          <p className="mt-4 text-2xl font-bold text-neutral-700 max-w-3xl py-3 italic mx-auto leading-relaxed">
           From Realty to Reality
          </p>
        </motion.div>

        {/* ADDRESSES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-14 relative z-10 mb-24">
          {offices.map((office, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: i * 0.1 }}
              className="space-y-4"
            >
              {/* City + Color Accent */}
              <div className="flex items-center gap-3">
                <span className={`${office.color} w-3 h-3 rounded-sm`} />
                <h4 className="uppercase text-sm font-semibold tracking-wide text-black">
                  {office.city}
                </h4>
              </div>

              {/* Address */}
              <p className="whitespace-pre-line text-sm text-neutral-700 leading-relaxed font-light">
                {office.address}
              </p>

              {/* Phone */}
              <a
                href={`tel:${office.phone}`}
                className="flex items-center gap-3 text-sm font-mono text-black hover:text-neutral-800 transition"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full border border-black/10 bg-black/5">
                  📞
                </span>
                {office.phone}
              </a>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM STRIP */}
        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-600">
          
          {/* Brand + Partner */}
          <div className="flex items-center gap-6">
            <img
              src="https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli8ekjocPS_logo.png"
              alt="PropStory Logo"
              className="w-24"
            />
            <div className="h-6 w-[1px] bg-black/20" />
            <span className="text-xs uppercase tracking-widest text-neutral-600">
              Google Partner Certified
            </span>
          </div>

          {/* Site Links */}
          <div className="flex gap-8">
            {["Privacy Policy", "Terms"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-black transition relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-mono text-neutral-500 text-center">
            © 2026 PropStory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
