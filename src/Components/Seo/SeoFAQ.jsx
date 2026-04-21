import { motion } from "framer-motion";

const faqs = [
  {
    q: "How much does real estate digital marketing cost in Bangalore?",
    a: "Real estate digital marketing costs in Bangalore vary based on project size, location, inventory type, and lead volume goals. PropStory offers custom packages for each project. Pricing depends on media budgets, platforms used, and service scope. It is best to get a project assessment.",
  },
  {
    q: "Do you create project websites and landing pages for real estate developers?",
    a: "Yes, we design and build real estate project websites and high conversion landing pages. Our services include UI UX design, fast development, mobile optimization, CRM integration, site visit booking flows, and scaling pages for multiple inventory types and campaign sources.",
  },
  {
    q: "What type of real estate clients do you work with in Bangalore?",
    a: "We work with leading real estate developers and brands such as Adani Realty, Emaar India, Sobha, Puravankara, Mahindra Lifespaces, Eldeco, and more. We also work with mid size developers, commercial property brands, and real estate broker networks.",
  },
  {
    q: "Can you integrate leads with our CRM or build a custom CRM?",
    a: "Yes, we can integrate all leads with your existing CRM like Zoho, Salesforce, or LeadSquared. We also build custom CRMs for developers who need project level tracking, sales team workflows, site visit tracking, follow up automation, and reporting dashboards.",
  },
  {
    q: "How long does it take to see results from real estate SEO in Bangalore?",
    a: "Real estate SEO results usually take three to six months for noticeable rankings and lead traction. Timelines depend on competition, location keywords, project maturity, and website quality. We focus on project pages, local SEO, and buyer intent keywords for faster impact.",
  },
  {
    q: "Which platforms work best for real estate lead generation in Bangalore?",
    a: "Google Search, Meta ads, and location focused landing pages work best for Bangalore real estate lead generation. The platform mix depends on project type, budget, and target audience. We test channels and scale only those delivering qualified site visit leads.",
  },
  {
    q: "Can you generate site visit bookings for new project launches?",
    a: "Yes, we specialize in new project launch campaigns focused on site visit bookings. We build launch landing pages, run pre launch and launch ads, segment audiences by location and budget, and connect leads directly to sales teams for faster conversions.",
  },
  {
    q: "How do you ensure lead quality for real estate campaigns?",
    a: "We improve lead quality through intent based targeting, location filters, budget qualifiers, form level screening questions, and post lead validation. We track site visit conversion rates and feedback from sales teams to continuously refine targeting and creatives.",
  },
];

export default function SeoFAQ() {
  return (
    <section className="pt-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="mb-14 text-center">
             <span className="inline-block bg-black text-white text-xs px-4 py-1 rounded-full tracking-widest">
            FAQs
          </span>
          <h2 className="text-[28px] md:text-[48px] font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-12">

          {faqs.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="pb-10 border-b border-gray-200"
            >

              {/* Question */}
              <h3 className="text-[20px] font-semibold text-gray-900 mb-4">
                {i + 1}. {item.q}
              </h3>

              {/* Answer */}
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {item.a}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}