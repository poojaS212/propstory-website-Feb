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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80); // adjust trigger point
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 pointer-events-none bg-[#F7F5ED]">
      <div className="relative w-full h-14">

        {/* Left Logo */}
        <div
          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-500 ease-out pointer-events-auto
          ${scrolled ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"}`}
        >
          <span className="text-black font-semibold text-lg">
            PropStory
          </span>
        </div>

         {/* Nav */}
         <div className="flex top-1/2  justify-center">
         <nav className={`hidden md:flex items-center justify-center gap-8 rounded-full bg-black/70 px-6 py-2 border border-white/10 transition-all duration-300 ${scrolled?"opacity-0 scale-95" : "opacity-100 scale-100"}`}>
              <a href="#" className="text-gray-300 hover:text-white transition">Work</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Services</a>
              <a href="#" className="text-gray-300 hover:text-white transition">About</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Insights</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Careers</a>
            </nav>

         </div>
       
        {/* Right Button */}
        <div
          className={`absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-500 ease-out pointer-events-auto
          ${scrolled ? "opacity-0 -translate-x-10" : "opacity-100 translate-x-0"}`}
        >
          <button className="rounded-full bg-black text-white px-5 py-2 font-medium hover:bg-gray-200 transition">
            Let’s Talk
          </button>
        </div>

        {/* Center Merged Navbar */}
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out pointer-events-auto
          ${scrolled ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="flex items-center gap-8 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 px-6 py-3 shadow-lg">

            {/* Logo inside pill */}
            <div className="text-white font-semibold">
              PropStory
            </div>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-6 rounded-full bg-black/70 px-6 py-2 border border-white/10">
              <a href="#" className="text-gray-300 hover:text-white transition">Work</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Services</a>
              <a href="#" className="text-gray-300 hover:text-white transition">About</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Insights</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Careers</a>
            </nav>

            {/* CTA inside pill */}
            <button className="rounded-full bg-white text-black px-6 py-1 font-medium hover:bg-gray-200 transition whitespace-nowrap">
                Let’s Talk
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}
