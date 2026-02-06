import { motion } from "framer-motion";

/* ----------------------------------
   CONTACT SECTION
---------------------------------- */

export default function ContactForm() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] py-24 text-[#0f0f0f]">
      
      {/* subtle architectural grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 84px, rgba(0,0,0,0.08) 85px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="grid lg:grid-cols-12 gap-y-24"
        >
          <div className="lg:col-span-7">
            <p className="text-[11px] tracking-[0.4em] uppercase text-neutral-500">
              Contact
            </p>

            <h1 className="mt-14 text-[clamp(3.6rem,6.5vw,5.4rem)] font-serif font-medium leading-[0.98] tracking-[-0.015em]">
              Conversations
              <br />
              <span className="italic text-neutral-500">
                before commitments
              </span>
            </h1>

            <p className="mt-12 max-w-lg text-lg leading-relaxed text-neutral-600">
              We engage with teams that value clarity,
              precision, and long-term outcomes.
            </p>
          </div>

          {/* META */}
          <div className="lg:col-span-5 lg:pt-22">
            <div className="border-l border-neutral-300 pl-10 space-y-6 text-sm text-neutral-500">
              <p>Response time: 24–48 hours</p>
              <p>Engagements: selective</p>
              <p>Focus: strategy, product, growth</p>
            </div>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mt-22 border-t border-neutral-300 pt-24 grid lg:grid-cols-12 gap-20"
        >
          {/* Fields */}
          <div className="lg:col-span-7 space-y-16">
            <Field label="Your name">
              <input />
            </Field>

            <Field label="Email address">
              <input type="email" />
            </Field>

             <Field label="Your Contact Number">
              <input type="tel" />
            </Field>

            <motion.button
              initial="rest"
              whileHover="hover"
              animate="rest"
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-6 text-base font-medium tracking-wide"
            >
              <span className="relative">
                Submit request
                <motion.span
                  variants={{
                    rest: { width: 0 },
                    hover: { width: "100%" },
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute left-0 -bottom-1 h-[1px] bg-neutral-900"
                />
              </span>

              <motion.span
                variants={{
                  rest: { x: 0 },
                  hover: { x: 6 },
                }}
                transition={{ duration: 0.35 }}
                className="text-xl"
              >
                →
              </motion.span>
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

/* ----------------------------------
   FIELD COMPONENT
---------------------------------- */

function Field({ label, children }) {
  const isTextarea = children.type === "textarea";

  return (
    <div>
      <label className="block mb-4 text-[11px] tracking-[0.35em] uppercase text-neutral-500">
        {label}
      </label>

      {isTextarea ? (
        <textarea
          {...children.props}
          className="w-full bg-transparent border-b border-neutral-400 pb-3 text-[17px] tracking-wide outline-none focus:border-neutral-900 transition-colors duration-300 resize-none"
        />
      ) : (
        <input
          {...children.props}
          className="w-full bg-transparent border-b border-neutral-400 pb-3 text-[17px] tracking-wide outline-none focus:border-neutral-900 transition-colors duration-300"
        />
      )}
    </div>
  );
}
