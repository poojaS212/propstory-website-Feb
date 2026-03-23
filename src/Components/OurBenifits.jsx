import React from "react";
import { Sparkles, Atom, Handshake } from "lucide-react";

const OurBenifits = () => {
  return (
    <section className="relative bg-[#F7F5ED] py-24 px-6 overflow-hidden">

      {/* subtle noise/dots */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#9ca3af_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="max-w-[1200px] mx-auto text-center relative z-10">

        {/* badge */}
        <div className="inline-block bg-black text-white text-xs tracking-wider px-5 py-1.5 rounded-full mb-6 font-medium">
          BENEFITS
        </div>

        {/* heading */}
        <h2 className="text-[34px] md:text-[48px] font-semibold text-gray-900 leading-tight max-w-3xl mx-auto">
          Discover the Benefits of <br /> choosing us today
        </h2>

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {/* card 1 */}
          <div className="bg-[#cee6b1] rounded-tl-[5rem] rounded-br-[5rem] rounded-2xl p-8 text-left shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02]">
            <Sparkles className="mb-5 text-gray-700" size={30} />

            <h3 className="text-[20px] font-semibold text-black mb-3">
              Strategic, Not Generic
            </h3>

            <p className="text-gray-600 text-[15px] leading-relaxed">
              We craft data-driven digital strategies tailored to your unique
              audience, business goals, and competitive landscape. No templates,
              just custom growth plans built for long-term success.
            </p>
          </div>

          {/* card 2 */}
          <div className="bg-[#DCEBFA] rounded-tl-[5rem] rounded-br-[5rem] rounded-2xl p-8 text-left shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02]">
            <Atom className="mb-5 text-gray-700" size={30} />

            <h3 className="text-[20px] font-semibold text-black mb-3">
              Tech-Driven Expertise
            </h3>

            <p className="text-gray-600 text-[15px] leading-relaxed">
              Leveraging cutting-edge tools, marketing automation, and advanced
              analytics to optimize campaigns, enhance performance, and deliver
              maximum ROI with measurable results.
            </p>
          </div>

          {/* card 3 (wavy border) */}
          <div className="relative bg-white rounded-tl-[5rem] rounded-br-[5rem] rounded-2xl p-8 text-left shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02]">

            {/* wavy border */}
            {/* <div className="absolute inset-0 rounded-[28px] border-[2px]  pointer-events-none [clip-path:polygon(0%_5%,5%_0%,95%_0%,100%_5%,100%_95%,95%_100%,5%_100%,0%_95%)]"></div> */}

            <div className="relative z-10">
              <Handshake className="mb-5 text-gray-700" size={30} />

              <h3 className="text-[20px] font-semibold text-black mb-3">
                Transparent, Collaborative Partnership
              </h3>

              <p className="text-gray-600 text-[15px] leading-relaxed">
                We operate on honesty and open communication. You'll have
                real-time access to performance data, regular reports, and a
                dedicated team working closely with you every step of the way.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurBenifits;