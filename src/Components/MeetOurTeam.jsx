import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeadingBadge from "@/Components/HeadingBadge";

gsap.registerPlugin(ScrollTrigger);

const team = [
  { name: "Ashish Mahajan", role: "CEO", img: "https://imgs.search.brave.com/gqxLvVo_BNZ0camx4WBN7o3Fax_K9Gg39dC-HEpCP4I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvcHN0b3J5LmNv/bS9tYWdpY3BhZ2Vz/L05BTUUvMTZpd2w0/a2h6d2xpYmpjd3pu/YXNoaXNoLTMwMHgz/MDAuanBn" },
  { name: "Ashish Mahajan", role: "CEO", img: "https://imgs.search.brave.com/gqxLvVo_BNZ0camx4WBN7o3Fax_K9Gg39dC-HEpCP4I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvcHN0b3J5LmNv/bS9tYWdpY3BhZ2Vz/L05BTUUvMTZpd2w0/a2h6d2xpYmpjd3pu/YXNoaXNoLTMwMHgz/MDAuanBn" },
  { name: "Ashish Mahajan", role: "CEO", img: "https://imgs.search.brave.com/gqxLvVo_BNZ0camx4WBN7o3Fax_K9Gg39dC-HEpCP4I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvcHN0b3J5LmNv/bS9tYWdpY3BhZ2Vz/L05BTUUvMTZpd2w0/a2h6d2xpYmpjd3pu/YXNoaXNoLTMwMHgz/MDAuanBn" },
  { name: "Ashish Mahajan", role: "CEO", img: "https://imgs.search.brave.com/gqxLvVo_BNZ0camx4WBN7o3Fax_K9Gg39dC-HEpCP4I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvcHN0b3J5LmNv/bS9tYWdpY3BhZ2Vz/L05BTUUvMTZpd2w0/a2h6d2xpYmpjd3pu/YXNoaXNoLTMwMHgz/MDAuanBn" },
  { name: "Ashish Mahajan", role: "CEO", img: "https://imgs.search.brave.com/gqxLvVo_BNZ0camx4WBN7o3Fax_K9Gg39dC-HEpCP4I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvcHN0b3J5LmNv/bS9tYWdpY3BhZ2Vz/L05BTUUvMTZpd2w0/a2h6d2xpYmpjd3pu/YXNoaXNoLTMwMHgz/MDAuanBn" },
  { name: "Ashish Mahajan", role: "CEO", img: "https://imgs.search.brave.com/gqxLvVo_BNZ0camx4WBN7o3Fax_K9Gg39dC-HEpCP4I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvcHN0b3J5LmNv/bS9tYWdpY3BhZ2Vz/L05BTUUvMTZpd2w0/a2h6d2xpYmpjd3pu/YXNoaXNoLTMwMHgz/MDAuanBn" },
  { name: "Ashish Mahajan", role: "CEO", img: "https://imgs.search.brave.com/gqxLvVo_BNZ0camx4WBN7o3Fax_K9Gg39dC-HEpCP4I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvcHN0b3J5LmNv/bS9tYWdpY3BhZ2Vz/L05BTUUvMTZpd2w0/a2h6d2xpYmpjd3pu/YXNoaXNoLTMwMHgz/MDAuanBn" },
  { name: "Ashish Mahajan", role: "CEO", img: "https://imgs.search.brave.com/gqxLvVo_BNZ0camx4WBN7o3Fax_K9Gg39dC-HEpCP4I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvcHN0b3J5LmNv/bS9tYWdpY3BhZ2Vz/L05BTUUvMTZpd2w0/a2h6d2xpYmpjd3pu/YXNoaXNoLTMwMHgz/MDAuanBn" },

];

export default function MeetOurTeam() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    const scrollWidth = track.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = scrollWidth - viewportWidth;

    gsap.to(track, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white h-auto overflow-hidden py-14"
    >
         {/* HEADER CONTENT */}
<div className="relative z-10 px-[6vw] mb-24">
   <HeadingBadge text="OUR PEOPLE" />
 

  <h2 className="mt-4 text-4xl md:text-5xl font-[Playfair_Display] font-medium text-[#2b2b2b] leading-[1.1] max-w-3xl">
    Minds Behind the Momentum
  </h2>
 
</div>

        
      <div
        ref={trackRef}
        className="flex items-center gap-[140px] px-[18vw] pb-20"
      >
        {team.map((member, i) => (
          <div
            key={i}
            className={`min-w-[260px] text-center transition-transform duration-700
              ${i % 2 === 0 ? "translate-y-[40px]" : "-translate-y-[40px]"}`}
          >
            <div className="w-[240px] h-[240px] mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
              />
            </div>

            <h4 className="text-[18px] font-medium text-gray-900">
              {member.name}
            </h4>
            <p className="text-[14px] text-gray-500 mt-1">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
