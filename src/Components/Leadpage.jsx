import React from "react";
import { UserCheck, MapPin, Rocket, Home, TrendingDown } from "lucide-react";
import PageBanner from "./PageBanner";


const services = [
  {
    title: "Qualified buyer leads",
    desc: "We focus on attracting high-intent users who are genuinely interested in your offering. This ensures better conversions and minimizes wasted marketing spend.",
    icon: UserCheck,
    bg: "bg-[#cee6b1]"
  },
  {
    title: "Location and income-based targeting",
    desc: "Reach the right audience using precise geographic and income targeting. This helps deliver highly relevant campaigns that drive better engagement.",
    icon: MapPin,
    bg: "bg-[#DCEBFA]"
  },
  {
    title: "Pre-launch and launch campaign strategy",
    desc: "We build strategic campaigns to create buzz before launch and maximize impact during launch. This ensures strong visibility and early traction.",
    icon: Rocket,
    bg: "bg-white"
  },
  {
    title: "Site visit focused lead generation",
    desc: "Our campaigns are optimized to drive actual site visits, not just leads. This increases serious buyer intent and faster decision-making.",
    icon: Home,
    bg: "bg-white"
  },
  {
    title: "Reduced cost per lead through optimization",
    desc: "We continuously optimize campaigns to reduce acquisition cost while maintaining quality. This results in better ROI and scalable growth.",
    icon: TrendingDown,
    bg: "bg-white"
  }
];

const Leadpage = () => {
  return (
    <section className="relative bg-[#F7F5ED] py-24 md:px-6 overflow-hidden">
 <PageBanner
        title="High-Intent Lead Generation"
        subtitle="We create targeted lead generation campaigns that attract serious property buyers and investors through structured digital funnels and audience targeting."
        bgImage="https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmnsm2hlf.webp"
      />

      {/* Background dots */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#9ca3af_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="max-w-[1200px] mx-auto text-center relative z-10">

        {/* Heading */}
        <h2 className="text-[34px] md:text-[48px] font-semibold text-gray-900 pt-8 leading-tight max-w-3xl mx-auto">
          What we deliver
        </h2>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-10 mt-16">

          {services.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className={`group w-full sm:w-[45%] lg:w-[30%] ${item.bg}
                rounded-tl-[5rem] rounded-br-[5rem] rounded-2xl p-8 text-left
                shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                transition duration-300 hover:-translate-y-2 hover:scale-[1.02]`}
              >
                {/* Icon */}
                <Icon
                  className="mb-5 text-gray-700  transition"
                  size={30}
                />

                {/* Title */}
                <h3 className="text-[20px] font-semibold text-black mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Leadpage;