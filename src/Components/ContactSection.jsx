import { motion } from "framer-motion";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();

    // ✅ VALIDATION
    if (!name || !email || !phone) {
      toast.error("All fields are required ❌");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Enter valid email ❌");
      return;
    }

    if (phone.length < 10) {
      toast.error("Enter valid phone number ❌");
      return;
    }

    setLoading(true);

    const formData = { name, email, phone };

    try {
      await fetch("https://hooks.zapier.com/hooks/catch/1730444/ph5yt5/", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      toast.success("Form submitted successfully");
      form.reset();
    } catch (err) {
      toast.error("Something went wrong ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0b1220] py-24 text-white"
    >
      {/* 🔔 TOASTER */}
      <Toaster position="top-right" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-y-32">
        {/* LEFT */}
        <motion.div className="lg:col-span-7">
          <p className="text-[11px] tracking-[0.4em] uppercase text-sky-300/80">
            Contact
          </p>

          <h1 className="mt-14 text-[clamp(3.4rem,6vw,5.2rem)] leading-[0.98] font-semibold">
            Precision-led brands
            <br />
            <span className="text-white/50 italic font-normal">
              start conversations here
            </span>
          </h1>
        </motion.div>

        {/* FORM */}
        <motion.form onSubmit={handleSubmit} className="lg:col-span-5">
          <div className="mt-14 space-y-14">
            <EditorialField
              index="01"
              label="Your name"
              name="name"
              placeholder="Full name"
            />

            <EditorialField
              index="02"
              label="Work email"
              name="email"
              placeholder="you@company.com"
              type="email"
            />

            <EditorialField
              index="03"
              label="Contact number"
              name="phone"
              placeholder="8799767789"
            />
          </div>

          {/* <div class="pt-10">
            <button
              class="group flex items-center justify-between w-full"
              tabindex="0"
              style="transform: none;"
            >
              <span class="text-sm tracking-wide font-medium">
                Submit request
              </span>
              <span class="flex items-center gap-5 text-sm text-white/50 group-hover:text-white transition">
                Continue
                <span class="text-xl transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </button>
          </div> */}

          <div className="pt-10">
            <motion.button
              type="submit"
              disabled={loading}
              className="group flex items-center justify-between w-full"
            >
              <span className="flex items-center gap-5 text-sm text-white/50 group-hover:text-white transition">{loading ? "Submitting..." : "Submit request"}</span>

              <span className="text-xl transition-transform group-hover:translate-x-1">{loading ? "..." : "→"}</span>
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

/* FIELD */

function EditorialField({ index, label, placeholder, name, type = "text" }) {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-6">
      <span className="text-xs text-white/40">{index}</span>

      <div>
        <label className="block text-sm text-white/70 mb-2">{label}</label>

        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent border-b border-white/30 pb-3 outline-none placeholder-white/30"
        />
      </div>
    </div>
  );
}
