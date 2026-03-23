// export default function Navbar() {
//     return (
//       <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
//         <div className="w-full max-w-6xl flex items-center justify-between rounded-full bg-black/60 backdrop-blur-xl border border-white/10 px-6 py-3 shadow-lg">
          
//           {/* Logo */}
//           <div className="text-white font-semibold text-lg">
//             PropStory
//           </div>
  
//           {/* Center Menu */}
//           <nav className="hidden md:flex items-center gap-8 rounded-full bg-black/70 px-8 py-2 border border-white/10">
//             <a href="#" className="text-gray-300 hover:text-white transition">Work</a>
//             <a href="#" className="text-gray-300 hover:text-white transition">Services</a>
//             <a href="#" className="text-gray-300 hover:text-white transition">About</a>
//             <a href="#" className="text-gray-300 hover:text-white transition">Insights</a>
//             <a href="#" className="text-gray-300 hover:text-white transition">Careers</a>
//           </nav>
  
//           {/* CTA */}
//           <button className="rounded-full bg-white text-black px-5 py-2 font-medium hover:bg-gray-200 transition">
//             Let’s Talk
//           </button>
//         </div>
//       </header>
//     );
//   }
  


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        ${scrolled
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

          <Link
            to="/"
            className={scrolled ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"}
          >
            Work
          </Link>

          {/* Services */}
              <div
                className="relative"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
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

                {open && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-60">
                    <div className="rounded-xl bg-black text-white shadow-xl p-4 flex flex-col gap-3">

                      <Link to="/digital-strategy-analytics">
                        Digital Strategy & Analytics
                      </Link>

                      <Link to="/lead-generation">
                        Lead Generation
                      </Link>

                      <Link to="/ai-chatbots">
                        AI Chatbots
                      </Link>

                      <Link to="/crm-implementions">
                        CRM Implementations
                      </Link>

                    </div>
                  </div>
                )}
              </div>

          <Link
            to="/about"
            className={scrolled ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"}
          >
            About
          </Link>

          <Link
            to="/insights"
            className={scrolled ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"}
          >
            Insights
          </Link>

          <Link
            to="/careers"
            className={scrolled ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"}
          >
            Careers
          </Link>

        </nav>

        {/* CTA */}
        <button
          className={`px-5 py-2 rounded-full font-medium
          ${scrolled
            ? "bg-white text-black hover:bg-gray-200"
            : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          Let’s Talk
        </button>

      </div>
    </header>
  );
}
