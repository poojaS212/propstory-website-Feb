import { motion } from "framer-motion";

export default function SeoIntroSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-indigo-100 rounded-full blur-3xl opacity-30 -top-40 -left-40"></div>
      </div>

      <div className="relative lg:mx-20 mx-2 px-6">
         <span class="inline-block bg-black mb-4 text-white text-xs px-4 py-1 rounded-full tracking-widest ">ABOUT</span>
        {/* Heading */}


        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[28px] md:text-[48px] font-semibold text-gray-900 leading-tight pb-3"
        >
          Outcome Based Performance Marketing for Predictable Property Leads
        </motion.h2>
     
        {/* Paragraph Content */}
        <div className="space-y-6 text-gray-600 text-[16px] md:text-[17px] leading-relaxed font-medium">
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Bangalore’s real estate market is highly competitive, with hundreds of projects running ads at the same time across Google, Meta, and property portals. You cannot expect basic ads or generic agency setups to deliver serious results in such a crowded space. Real estate buyers take time, compare multiple projects, and move only when the messaging, targeting, and follow ups are right. This is why outcome based performance marketing matters.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            You need an expert team that has real experience in handling real estate campaigns, has burnt their hands on what does not work, and knows how to control lead quality, cost per lead, and site visit conversions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            At PropStory, our real estate performance marketing strategies are built around outcomes and ROI, not just clicks or impressions. Our goal is to make sure every rupee you invest works harder and brings back real business value, with campaigns designed to target serious buyers and deliver at least 5X returns over time.
          </motion.p>

        </div>
      </div>
    </section>
  );
}