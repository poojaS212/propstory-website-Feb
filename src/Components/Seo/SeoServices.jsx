import { motion } from "framer-motion";

const services = [
  {
    title: "Real Estate Landing Page Design",
    desc: "The first interaction with your project happens on your landing page, not your ad. We design fast loading pages focused on site visit bookings, CRM integration, and mobile-first layouts that convert serious buyers into qualified inquiries.",
  },
  {
    title: "Real Estate SEO",
    desc: "Our SEO campaigns focus on first page rankings across Google SERP, AI overviews, and long tail buyer queries to drive consistent organic property leads.",
  },
  {
    title: "Real Estate Content Marketing",
    desc: "We create content strategies across blogs, videos, and campaigns that attract buyers and support sales conversations.",
  },
  {
    title: "Real Estate PPC Ads",
    desc: "We manage campaigns focused on ROI with optimized targeting, creatives, and spend efficiency.",
  },
  {
    title: "Real Estate Social Media Marketing",
    desc: "We run structured campaigns for launches, remarketing, and site visit bookings using audience segmentation.",
  },
  {
    title: "Real Estate Marketing Automation",
    desc: "We automate lead routing, CRM sync, and follow-ups to improve response time and conversions.",
  },
  {
    title: "Real Estate Email Marketing",
    desc: "We build nurturing systems for long buying cycles with reminders and updates.",
  },
  {
    title: "Real Estate CRO",
    desc: "We optimize funnels, forms, and CTAs to increase conversion rates without increasing ad spend.",
  },
  {
    title: "Reporting & Dashboards",
    desc: "We build dashboards to track CPL, ROI, and performance across channels.",
  },
];

export default function SeoServices() {
  return (
    <section className="py-28 px-6">
      <div className="lg:mx-20 mx-5 grid lg:grid-cols-2 gap-20">
        {/* LEFT - Sticky */}
        <div className="lg:sticky lg:top-32 h-fit">
           <span className="inline-block mb-2 bg-black text-white text-xs px-4 py-1 rounded-full tracking-widest">
            SERVICES
          </span>
          <h2 className="text-[28px] md:text-[48px] font-semibold text-gray-900 leading-tight pb-3">
            Our Real Estate Digital Marketing Services In Bangalore
          </h2>

          <p className="mt-6 text-gray-600 max-w-md">
            Being one of the most trusted marketing agencies, we offer a full spectrum of services designed to generate leads, site visits, and sales across the entire buyer journey.
          </p>
        </div>

        {/* RIGHT - Scrolling Content */}
        <div className="space-y-20">

          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group"
            >

              {/* Number */}
              <div className="text-gray-300 text-[32px] font-semibold mb-3">
                {(i + 1).toString().padStart(2, "0")}
              </div>

              {/* Title */}
              <h3 className="text-[24px] font-semibold text-gray-900 group-hover:text-blue-950 transition">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
                {item.desc}
              </p>

              {/* Animated underline */}
              <div className="mt-5 h-[2px] w-12 bg-gray-300 group-hover:w-24 group-hover:bg-blue-950 transition-all duration-300"></div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}