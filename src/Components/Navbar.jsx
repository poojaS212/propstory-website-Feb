import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // "work" | "services" | null

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <div
        className={`transition-all duration-300 flex items-center justify-between w-[95%] md:w-[900px] px-6 py-3
        ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl rounded-full shadow-lg"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className={`font-extrabold text-2xl ${
            scrolled ? "text-white" : "text-black"
          }`}
        >
          PropStory
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Work Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("work")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className={
                scrolled
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-black"
              }
            >
              Work
            </button>

            {openMenu === "work" && (
              <div className="absolute left -translate-x-1/2 top-full pt-3 w-40">
                <div className="rounded-xl text-center bg-black text-white shadow-xl p-4 flex flex-col gap-3">
                  <Link to="/our-clients" className="hover:text-gray-300">
                    Our Clients
                  </Link>
                  <Link to="/case-studies" className="hover:text-gray-300">
                    Case Studies
                  </Link>
                  <Link to="/testimonials" className="hover:text-gray-300">
                    Testimonial
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className={
                scrolled
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-black"
              }
            >
              Services
            </button>

            {openMenu === "services" && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-60">
                <div className="rounded-xl bg-black text-white shadow-xl p-4 text-center flex flex-col gap-3">
                 
                  <Link
                    to="/lead-generation"
                    className="hover:text-gray-300"
                  >
                    Lead Generation
                  </Link>
                   <Link
                    to="/digital-strategy-analytics"
                    className="hover:text-gray-300"
                  >
                    Performance Marketing
                  </Link>
                  <Link to="/ai-chatbots" className="hover:text-gray-300">
                    AI Chatbots
                  </Link>
                  <Link
                    to="/crm-implementions"
                    className="hover:text-gray-300"
                  >
                    CRM Implementations
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Other Links */}
          {/* <Link
            to="/about-us"
            className={
              scrolled
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            }
          >
            About
          </Link> */}

          <HashLink smooth to="/#about-us" className={
              scrolled
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            }>
          About
        </HashLink>

<HashLink smooth
            to="/#clients"
            className={
              scrolled
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            }
          >
            Clients
          </HashLink>

          <HashLink smooth
            to="/#insights"
            className={
              scrolled
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            }
          >
            Insights
          </HashLink>

          {/* <Link
            to="/careers"
            className={
              scrolled
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            }
          >
            Careers
          </Link> */}
        </nav>

        {/* CTA */}
        <HashLink smooth to="/#contact">
        <button
          className={`px-5 py-2 rounded-full font-medium transition
          ${
            scrolled
              ? "bg-white text-black hover:bg-gray-200"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          Let’s Talk
        </button>
        </HashLink>
       
      </div>
    </header>
  );
}