import React from "react";
import { Sparkles, Atom, Handshake, TrendingUp, Eye, Users } from "lucide-react";

const results = [
  {
    icon: Sparkles,
    title: "Higher Quality Property Leads",
    desc: "Five high quality property leads are better than five hundred low intent inquiries that never convert. We filter traffic at source, refine targeting, qualify intent through forms, and align messaging with serious buyers to improve sales team efficiency.",
    bg: "bg-[#cee6b1]",
  },
  {
    icon: Atom,
    title: "Lower Cost Per Lead",
    desc: "Our PPC strategies focus on controlling cost per click and removing waste from campaigns. We refine audiences, keywords, creatives, and placements to achieve the lowest possible cost per lead without compromising buyer intent or lead quality.",
    bg: "bg-[#DCEBFA]",
  },
  {
    icon: Handshake,
    title: "Increased Site Visit Bookings",
    desc: "The landing pages we design are optimized for real buyer actions like site visit bookings and call requests. We test layouts, copy, speed, and form flows to steadily improve conversion rates across traffic sources.",
    bg: "bg-white",
  },
  {
    icon: TrendingUp,
    title: "Faster Inventory Movement",
    desc: "When the whole funnel experience is aligned from ads to follow ups, deals move faster. We connect marketing with sales workflows to reduce drop offs and improve response times.",
    bg: "bg-[#cee6b1]",
  },
  {
    icon: Eye,
    title: "Better Digital Visibility for Projects",
    desc: "Leads and sales are one part of growth, but strong digital visibility builds long term demand. We improve project positioning across search, social, and content.",
    bg: "bg-[#DCEBFA]",
  },
  {
    icon: Users,
    title: "Stronger Sales Team Productivity",
    desc: "When leads are qualified and follow ups are structured, sales teams spend time closing instead of chasing. Our systems improve contact rates and efficiency.",
    bg: "bg-white",
  },
];

export default function SeoHowWeHelp() {
  return (
    <section className="relative bg-[#F7F5ED] py-24 px-6 overflow-hidden">

      {/* background dots */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#9ca3af_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="max-w-[1200px] mx-auto text-center relative z-10">
<div className="inline-block bg-black text-white text-xs tracking-wider px-5 py-1.5 rounded-full mb-6 font-medium">
          HOW WE WORK 
        </div>
        {/* Heading */}
        <h2 className="text-[28px] md:text-[48px] font-semibold text-gray-900 leading-tight max-w-3xl mx-auto">
          Results PropStory Delivers For Bangalore Real Estate Brands
        </h2>

        {/* Intro */}
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-[15px] leading-relaxed">
          With our real estate marketing experts on your side, you can expect more than just leads. Our focus is on driving real outcomes that help your sales team close faster and move inventory with confidence.
          <br /><br />
          Here are the key results Bangalore real estate brands see when they work with PropStory.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

          {results.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`${item.bg} rounded-tl-[5rem] rounded-br-[5rem] rounded-2xl p-8 text-left shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02]`}
              >
                <Icon className="mb-5 text-gray-700" size={30} />

                <h3 className="text-[20px] font-semibold text-black mb-3">
                  {item.title}
                </h3>

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
}