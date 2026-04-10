import PageBanner from "@/Components/PageBanner";

export default function OurApproach() {
  const services = [
    {
      id: "01",
      title: "ROI-focused campaign execution",
      description:
        "Campaigns designed to maximize returns and drive measurable business growth. Every strategy is aligned with performance and conversion goals.",
      bg: "bg-[#c9ddf2]", // dark green
      textColor: "text-white",
    },
    {
      id: "02",
      title: "Smart budget allocation",
      description:
        "Optimizing your budget across channels for the highest impact. Ensuring every rupee is spent where it delivers the best results.",
      bg: "bg-[#c9ddf2]", // dark green
      textColor: "text-black",
    },
    {
      id: "03",
      title: "Retargeting and remarketing campaigns",
      description:
        "Re-engaging potential customers who showed interest but didn’t convert. Keeping your brand top-of-mind to drive higher conversions.",
      bg: "bg-[#c9ddf2]", // dark green
      textColor: "text-black",
    },
    {
      id: "04",
      title: "Real-time performance tracking",
      description:
        "Monitoring campaign performance with live data and insights. Making quick adjustments to improve results instantly.",
      bg: "bg-[#c9ddf2]", // dark green
      textColor: "text-black",
    },
    {
      id: "05",
      title: "Transparent reporting and dashboards",
      description:
        "Clear, easy-to-understand reports with complete visibility. Helping you track performance and make informed decisions confidently.",
      bg: "bg-[#c9ddf2]", // dark green
      textColor: "text-black",
    },
  ];

  return (
    <section className="w-full  text-[#e7e4dc] py-24 md:px-6">
      <PageBanner
        title="Performance Marketing"
        subtitle="Our performance marketing strategies use Meta Ads and Google Ads to deliver measurable results through data-driven media planning and continuous campaign optimization."
        bgImage="https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmnsm2yrc.webp"
      />
      {/* Top Content */}
      <div className="max-w-7xl mx-auto px-6 py-25 mt-10 bg-[#c9ddf2]">
        {/* Small Label */}
        <div className="mb-8">
          <span className="text-xs bg-black tracking-[0.3em] border border-[#e7e4dc]/40 px-4 py-2">
            What We Deliver
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl text-gray-800 leading-tight max-w-4xl">
          Our Real Estate Digital Marketing Services In Bangalore
        </h2>
        <p className="text-lg md:text-xl text-gray-500 mx-auto font-medium leading-relaxed">
          Being one of the most trusted marketing agencies for real estate in
          Bangalore, PropStory offers a full spectrum of real estate digital
          marketing services built to generate property leads, site visits, and
          sales. Our services cover the entire buyer journey from first
          discovery to booking, with clear focus on measurable results.
        </p>
      </div>

      {/* Divider Line */}
      <div className="border-t  border-[#e7e4dc]/20"></div>
      {services.map((service, index) => (
        <div
          key={index}
          className={`${service.bg} ${service.textColor} w-full py-12 border-t-2 border-[#1f1f1f]/80 transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#cee6b1]`}
        >
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-center">
            {/* Big Number */}
            <div className="text-7xl md:text-8xl font-light opacity-80 text-[#1e2939]">
              {service.id}
            </div>

            {/* Title */}
            <div className="text-2xl md:text-3xl font-light leading-snug text-[#1e2939]">
              {/* {service.title.split(" ").map((word, i) => (
                  <h3 key={i}>{word}</h3>
                ))} */}
              {service.title}
            </div>

            {/* Description */}
            <div className="text-sm md:text-base leading-relaxed max-w-md text-[#123456]">
              {service.description}
            </div>
          </div>
        </div>
      ))}
      {/* Divider Line */}
      <div className="border-t rounded-t-xl border-[#e7e4dc]/20"></div>
    </section>
  );
}
