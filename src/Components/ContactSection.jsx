import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b1220] py-24 text-white">

      {/* ambient depth gradients */}
      <motion.div
        className="absolute inset-0"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "radial-gradient(55% 55% at 12% 25%, rgba(56,189,248,0.18), transparent 65%), radial-gradient(45% 45% at 88% 70%, rgba(168,85,247,0.16), transparent 60%)",
          backgroundSize: "240% 240%",
        }}
      />

      {/* grid drift */}
      <motion.div
        className="absolute inset-0 opacity-[0.05]"
        animate={{ x: ["0%", "3%", "0%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 1px, transparent 1px, transparent 96px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-y-32">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <p className="text-[11px] tracking-[0.4em] uppercase text-sky-300/80">
            Contact
          </p>

          <h1 className="mt-14 text-[clamp(3.4rem,6vw,5.2rem)] leading-[0.98] tracking-tight font-semibold">
            Precision-led brands
            <br />
            <span className="text-white/50 font-normal italic">
              start conversations here
            </span>
          </h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "140px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-12 h-[1px] bg-white/30"
          />

          <p className="mt-12 max-w-md text-[17px] leading-relaxed text-gray-300/90">
            Tell us what you’re building.
            <br />
            We respond with clarity, intent,
            and clearly defined next steps.
          </p>
        </motion.div>

        {/* RIGHT — REDESIGNED FORM */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-5"
        >
          <div className="relative">

            {/* top meta */}
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.35em] text-white/50">
              <span>Fill The Details</span>
            </div>

            <div className="mt-6 border-t border-white/15" />

            {/* form body */}
            <div className="mt-14 space-y-14">

              <EditorialField
                index="01"
                label="Your name"
                placeholder="Full name"
              />

              <EditorialField
                index="02"
                label="Work email"
                placeholder="you@company.com"
              />

              <EditorialField
                index="03"
                label="Your Contact Number"
                placeholder="8799767789"
              />

            </div>

            {/* CTA */}
            <div className="pt-10">
              <motion.button
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center justify-between w-full"
              >
                <span className="text-sm tracking-wide font-medium">
                  Submit request
                </span>

                <span className="flex items-center gap-5 text-sm text-white/50 group-hover:text-white transition">
                  Continue
                  <span className="text-xl transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </motion.button>
            </div>

          </div>
        </motion.form>
      </div>
    </section>
  );
}

/* ---------- NEW FIELD STYLE ---------- */

function EditorialField({ index, label, placeholder }) {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-6 items-start">
      <span className="text-xs text-white/40 mt-1">{index}</span>

      <div>
        <label className="block text-[13px] text-white/70 mb-4">
          {label}
        </label>
        <input
          placeholder={placeholder}
          className="w-full bg-transparent border-b border-white/20 pb-4 text-[16px] text-white placeholder-white/30 outline-none focus:border-white transition"
        />
      </div>
    </div>
  );
}

function EditorialTextarea({ index, label, placeholder }) {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-6 items-start">
      <span className="text-xs text-white/40 mt-1">{index}</span>

      <div>
        <label className="block text-[13px] text-white/70 mb-4">
          {label}
        </label>
        <textarea
          rows={4}
          placeholder={placeholder}
          className="w-full bg-transparent border-b border-white/20 pb-4 text-[16px] text-white placeholder-white/30 outline-none resize-none focus:border-white transition"
        />
      </div>
    </div>
  );
}
