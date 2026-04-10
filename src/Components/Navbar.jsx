import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCloseMenu = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center">
        <div
          className={`transition-all duration-300 flex items-center justify-between w-[95%] md:w-[900px] px-6 py-2
          ${
            scrolled
              ? "bg-black/80 text-white backdrop-blur-xl rounded-full shadow-lg"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={handleCloseMenu}
            className={`font-extrabold text-2xl ${
              scrolled ? "text-white" : "text-black"
            }`}
          >
            PropStory
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Work */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("work")}
              onMouseLeave={() => setOpenMenu(null)}
            >
             <button className="flex items-center gap-1">
  Work
  <svg
    className={`w-4 h-4 transition-transform duration-300 ${
      openMenu === "work" ? "rotate-180" : ""
    }`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</button>

              {openMenu === "work" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-40">
                  <div className="rounded-xl bg-black text-white shadow-xl p-4 flex flex-col gap-3 text-center">
                    <Link to="/our-clients">Our Clients</Link>
                    <Link to="/case-studies">Case Studies</Link>
                    <Link to="/testimonials">Testimonial</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Services */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("services")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="flex items-center gap-1">
  Services
  <svg
    className={`w-4 h-4 transition-transform duration-300 ${
      openMenu === "services" ? "rotate-180" : ""
    }`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</button>

              {openMenu === "services" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-60">
                  <div className="rounded-xl bg-black text-white shadow-xl p-4 flex flex-col gap-3 text-center">
                    <Link to="/lead-generation">Lead Generation</Link>
                    <Link to="/digital-strategy-analytics">Performance Marketing</Link>
                    <Link to="/ai-chatbots">AI Chatbots</Link>
                    <Link to="/crm-implementions">CRM Implementations</Link>
                  </div>
                </div>
              )}
            </div>

            <HashLink smooth to="/#about-us">About</HashLink>
            <HashLink smooth to="/#clients">Clients</HashLink>
            <HashLink smooth to="/#insights">Insights</HashLink>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <HashLink smooth to="/#contact">
              <button
                className={`px-5 py-2 rounded-full font-medium transition
                ${
                  scrolled
                    ? "bg-white text-black"
                    : "bg-black text-white"
                }`}
              >
                Let’s Talk
              </button>
            </HashLink>
          </div>

          {/* 🍔 Hamburger */}
          <button
            className="md:hidden relative w-6 h-6 right-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className={`absolute w-6 h-0.5 transition-all ${
                scrolled ? "bg-white" : "bg-black"
              } ${mobileOpen ? "rotate-45 top-3" : "top-1"}`}
            />
            <span
              className={`absolute w-6 h-0.5 transition-all ${
                scrolled ? "bg-white" : "bg-black"
              } ${mobileOpen ? "opacity-0" : "top-3"}`}
            />
            <span
              className={`absolute w-6 h-0.5 transition-all ${
                scrolled ? "bg-white" : "bg-black"
              } ${mobileOpen ? "-rotate-45 top-3" : "top-5"}`}
            />
          </button>
        </div>
      </header>

      {/* 🌫 BACKDROP */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              onClick={handleCloseMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* 📱 Mobile Menu */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 80, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed left-1/2 -translate-x-1/2 w-[90%] bg-black text-white rounded-2xl shadow-xl p-6 flex flex-col gap-4 z-50 md:hidden"
            >
              {/* Work */}
              <button
  className="flex justify-between items-center w-full"
  onClick={() =>
    setOpenMenu(openMenu === "work" ? null : "work")
  }
>
  Work
  <svg
    className={`w-4 h-4 transition-transform ${
      openMenu === "work" ? "rotate-180" : ""
    }`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</button>
              {openMenu === "work" && (
                <div className="pl-4 flex flex-col gap-2 text-gray-300">
                  <Link to="/our-clients" onClick={handleCloseMenu}>Our Clients</Link>
                  <Link to="/case-studies" onClick={handleCloseMenu}>Case Studies</Link>
                  <Link to="/testimonials" onClick={handleCloseMenu}>Testimonial</Link>
                </div>
              )}

              {/* Services */}
              <button
  className="flex justify-between items-center w-full"
  onClick={() =>
    setOpenMenu(openMenu === "services" ? null : "services")
  }
>
  Services
  <svg
    className={`w-4 h-4 transition-transform ${
      openMenu === "services" ? "rotate-180" : ""
    }`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</button>
              {openMenu === "services" && (
                <div className="pl-4 flex flex-col gap-2 text-gray-300">
                  <Link to="/lead-generation" onClick={handleCloseMenu}>Lead Generation</Link>
                  <Link to="/digital-strategy-analytics" onClick={handleCloseMenu}>Performance Marketing</Link>
                  <Link to="/ai-chatbots" onClick={handleCloseMenu}>AI Chatbots</Link>
                  <Link to="/crm-implementions" onClick={handleCloseMenu}>CRM Implementations</Link>
                </div>
              )}

              <HashLink smooth to="/#about-us" onClick={handleCloseMenu}>About</HashLink>
              <HashLink smooth to="/#clients" onClick={handleCloseMenu}>Clients</HashLink>
              <HashLink smooth to="/#insights" onClick={handleCloseMenu}>Insights</HashLink>

              {/* CTA */}
              <HashLink smooth to="/#contact" onClick={handleCloseMenu}>
                <button className="mt-4 w-full bg-white text-black py-2 rounded-full">
                  Let’s Talk
                </button>
              </HashLink>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}