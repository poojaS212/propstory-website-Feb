import { motion } from "framer-motion";

export default function SeoWhyUs() {
  return (
    <section className="py-20 px-6 bg-[#f6f3ea]">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
           <span className="inline-block bg-black mb-3 text-white text-xs px-4 py-1 rounded-full tracking-widest">
            WHY CHOOSE US
          </span>
          <h2 className="text-[28px] md:text-[48px] font-semibold text-gray-900 leading-tight pb-3">
            Why PropStory Is The Best Digital Marketing Agency In Bangalore For Real Estate Brands?
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We are a group of specialists who work only on real estate marketing day in and day out. Our team understands how buyers think, how projects are compared, and how sales teams operate on ground. Here is why Bangalore real estate brands trust PropStory to drive consistent growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          <motion.div whileHover={{ y: -4 }} className="bg-white border_bottom p-10 rounded-2xl shadow-sm">
            <h3 className="text-[22px] font-semibold text-gray-900 mb-3">
              Proven Expertise
            </h3>
            <p className="text-gray-600 leading-relaxed">
              With over 10 years of real estate marketing experience, we have executed more than 1600 digital campaigns across residential and commercial projects. Our learnings from past successes and failures help us design campaigns that convert buyers reliably.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="bg-white border_bottom p-10 rounded-2xl shadow-sm">
            <h3 className="text-[22px] font-semibold text-gray-900 mb-3">
              Dedicated Team
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your campaigns are managed by real estate marketing specialists with at least five years of hands-on experience. They understand buyer behavior, location demand cycles, and sales team challenges, which helps them make practical decisions daily.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="bg-white border_bottom p-10 rounded-2xl shadow-sm">
            <h3 className="text-[22px] font-semibold text-gray-900 mb-3">
              ROI Focused
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our real estate marketing campaigns are built to reduce ad spend waste and improve return on investment. We track lead quality, site visit rates, and sales impact to ensure budgets drive actual revenue outcomes.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="bg-white border_bottom p-10 rounded-2xl shadow-sm">
            <h3 className="text-[22px] font-semibold text-gray-900 mb-3">
              End to End Solutions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At PropStory, we take care of your full real estate digital marketing funnel from landing pages, ad creatives, content planning, and SEO to CRM integration and email automations so your sales team receives ready to convert leads.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}