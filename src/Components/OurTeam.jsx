import { useEffect, useRef } from "react";
import HeadingBadge from "@/Components/HeadingBadge";

const team = [
  { name: "Ashish Mahajan", role: "CEO", img: "https://b5hgk18vhnzpmz1w.public.blob.vercel-storage.com/uploads/temp-01mansi/1774265775936-lajsaltkh4.webp" },
  { name: "Gaurav Sharma", role: "Digital", img: "https://b5hgk18vhnzpmz1w.public.blob.vercel-storage.com/uploads/temp-01mansi/1774265929892-n6tm255msva.jpeg" },
  { name: "Kanhiya Lal", role: "Digital", img: "https://imgs.search.brave.com/gqxLvVo_BNZ0camx4WBN7o3Fax_K9Gg39dC-HEpCP4I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvcHN0b3J5LmNv/bS9tYWdpY3BhZ2Vz/L05BTUUvMTZpd2w0/a2h6d2xpYmpjd3pu/YXNoaXNoLTMwMHgz/MDAuanBn" },
  { name: "Dinil Jayadas", role: "Digital", img: "https://imgs.search.brave.com/gqxLvVo_BNZ0camx4WBN7o3Fax_K9Gg39dC-HEpCP4I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvcHN0b3J5LmNv/bS9tYWdpY3BhZ2Vz/L05BTUUvMTZpd2w0/a2h6d2xpYmpjd3pu/YXNoaXNoLTMwMHgz/MDAuanBn" },
  { name: "Ashish Mahajan", role: "Digital", img: "https://imgs.search.brave.com/gqxLvVo_BNZ0camx4WBN7o3Fax_K9Gg39dC-HEpCP4I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvcHN0b3J5LmNv/bS9tYWdpY3BhZ2Vz/L05BTUUvMTZpd2w0/a2h6d2xpYmpjd3pu/YXNoaXNoLTMwMHgz/MDAuanBn" },
];

export default function OurTeam() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const totalScroll = container.offsetHeight - window.innerHeight;

      // progress 0 → 1
      const progress = Math.min(
        Math.max(-rect.top / totalScroll, 0),
        1
      );

      const scrollWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const maxX = scrollWidth - viewportWidth;

      track.style.transform = `translateX(-${progress * maxX}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-white"
      style={{
        height: "300vh", // 🔥 controls scroll duration
      }}
    >
      {/* HEADER */}
      <div className="px-[6vw] pt-20">
        <HeadingBadge text="OUR PEOPLE" />
        <h2 className="mt-4 text-4xl md:text-5xl font-[Playfair_Display] font-medium text-[#2b2b2b] max-w-3xl">
          Minds Behind the Momentum
        </h2>
      </div>

      {/* STICKY SECTION (FAKE PIN) */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-[120px] px-[10vw] will-change-transform"
        >
          {team.map((member, i) => (
            <div
              key={i}
              className={`min-w-[260px] text-center
              ${i % 2 === 0 ? "translate-y-[40px]" : "-translate-y-[40px]"}`}
            >
              <div className="w-[240px] h-[240px] mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                />
              </div>

              <h4 className="text-[20px] font-medium text-gray-900">
                {member.name}
              </h4>
              <p className="text-[16px] text-gray-500 mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}