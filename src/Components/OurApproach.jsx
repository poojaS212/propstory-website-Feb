import PageBanner from "@/Components/PageBanner";
import HeadingBadge from "@/Components/HeadingBadge";
import Breadcrumb from "./Breadcrumb";


export default function OurApproach() {
  const services = [
    {
      id: "01",
      title: "ROI-focused campaign execution",
      description:
        "Campaigns designed to maximize returns and drive measurable business growth. Every strategy is aligned with performance and conversion goals.",
    },
    {
      id: "02",
      title: "Smart budget allocation",
      description:
        "Optimizing your budget across channels for the highest impact. Ensuring every rupee is spent where it delivers the best results.",
    },
    {
      id: "03",
      title: "Retargeting and remarketing campaigns",
      description:
        "Re-engaging potential customers who showed interest but didn’t convert. Keeping your brand top-of-mind to drive higher conversions.",
    },
    {
      id: "04",
      title: "Real-time performance tracking",
      description:
        "Monitoring campaign performance with live data and insights. Making quick adjustments to improve results instantly.",
    },
    {
      id: "05",
      title: "Transparent reporting and dashboards",
      description:
        "Clear, easy-to-understand reports with complete visibility. Helping you track performance and make informed decisions confidently.",
    },
  ];

  return (
    <section className="bg-[#f6f3ee] overflow-hidden pt-24 md:px-6">
      <PageBanner
        title="Performance Marketing"
        subtitle="Our performance marketing strategies use Meta Ads and Google Ads to deliver measurable results through data-driven media planning and continuous campaign optimization."
        bgImage="https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmnsm2yrc.webp"
      />
      <Breadcrumb />
      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-32">
        <div className="grid lg:grid-cols-12 gap-10">

          <div className="lg:col-span-3">
             <HeadingBadge text="WHAT WE DELIVERE" />
 
          </div>

          <div className="lg:col-span-9">
            <h2 className="text-5xl md:text-7xl font-light leading-[1] tracking-[-0.05em] text-[#111111] max-w-5xl">
              Our Real Estate Digital Marketing Services In Bangalore
            </h2>

            <p className="mt-10 text-lg text-[#5f5f5f] leading-9 max-w-4xl">
              Being one of the most trusted marketing agencies for real estate
              in Bangalore, PropStory offers a full spectrum of real estate
              digital marketing services built to generate property leads, site
              visits, and sales. Our services cover the entire buyer journey
              from first discovery to booking, with clear focus on measurable
              results.
            </p>
          </div>

        </div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-28">

        <div className="space-y-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="grid lg:grid-cols-12">

                {/* Left Number */}
                <div className="lg:col-span-2 flex items-start">
                  <span className="text-[80px] md:text-[120px] leading-none font-light text-[#d8d1c7] tracking-[-0.08em]">
                    {service.id}
                  </span>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-10">
                  <div className="relative overflow-hidden rounded-[40px] bg-white min-h-[320px] md:min-h-[360px]">

                    {/* Hover Background */}
                    <div className="absolute inset-0 bg-[#cee6b1] text-black translate-y-full group-hover:translate-y-0 transition duration-700 ease-in-out"></div>

                    <div className="relative z-10 h-full p-8 md:p-14 flex flex-col justify-between">

                      {/* Top */}
                      <div className="flex items-start justify-between gap-10">

                        <h3 className="text-3xl md:text-5xl font-light leading-[1.1] tracking-[-0.04em] text-[#111111] group-hover:text-black transition duration-500 max-w-3xl">
                          {service.title}
                        </h3>

                        <div className="hidden md:flex w-16 h-16 rounded-full border border-black/10 items-center justify-center text-xl group-hover:border-white/20 group-hover:text-black transition duration-500">
                          ↗
                        </div>

                      </div>

                      {/* Bottom */}
                      <div className="mt-16 grid md:grid-cols-2 gap-10 items-end">

                        <p className="text-[#5f5f5f] text-lg leading-9 group-hover:text-[#000] transition duration-500 max-w-2xl">
                          {service.description}
                        </p>

                        <div className="flex md:justify-end">
                          <div className="w-full md:w-[180px] h-[1px] bg-black/10 group-hover:bg-black transition duration-500"></div>
                        </div>

                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}