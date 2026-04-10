import { motion } from "framer-motion";
import HeadingBadge from "@/Components/HeadingBadge";

const mediaData = [
  {
    name: "Starup Talky",
    title:
      "Propstory – Data-Driven Platform for Real Estate Buyers and Investors – Company Profile on Startup Talky",
    source: "Starup Talky • 30 Jan 2019",
    logo: "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlid3lszmStartup-Talky.png",
    link: "https://startuptalky.com/propstory-story-founder-funding/",
    featured: true,
  },
  {
    name: "Economic Times",
    title:
      "2018-A mixed bag for Indian real estate industry: Ashish Mahajan, PropStory – Economic Times (31 Dec 2018)",
    source: "ET Realty • Feb 2025",
    logo: "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlid3n0shEt-Reality.png",
    link: "https://realty.economictimes.indiatimes.com/e/year-ender-2018/news/detail/5497",
  },
  {
    name: "Hindustan Times",
    title:
      "PropStory now targets Southern India, starts operations in Bangalore – Business Standard",
    source: "HT Business • Mar 2025",
    logo: "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlid3pf8eBusiness-Standard.png",
    link: "https://www.business-standard.com/article/news-ani/propstory-now-targets-southern-india-starts-operations-in-bangalore-118091800718_1.html",
  },
  {
    name: "Times of India",
    title:
      "Gurugram-based PropStory bridges communication gaps between realty buyers, sellers – in YourStory",
    source: "TOI • Apr 2025",
    logo: "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlid3rmthYour-story.png",
    link: "https://yourstory.com/2018/07/gurugram-based-propstory-bridges-communication-gaps-realty-buyers-sellers",
  },
  {
    name: "Business Standard",
    title:
      " Mumbai Development Plan 2034 – will it make Mumbai great again? in Deccan Chronicle",
    source: "BS • May 2025",
    logo: "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlid3pf8eBusiness-Standard.png",
    link: "https://www.deccanchronicle.com/business/in-other-news/280518/mumbai-development-plan-2034-will-it-make-mumbai-great-again.html",
  },
  {
    name: "Mint",
    title:
      "PropStory featured in SutraHR’s list of “Top 100 Startups to Watch” in 2018",
    source: "Mint • Jun 2025",
    logo: "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlid3tvj2Sutra-HR.png",
    link: "https://www.sutrahr.com/top-100-startups-2018/",
  },

  {
    name: "Hindustan Times",
    title:
      " How can the Interim Budget benefit the real estate sector? All you need to know – Qrius (31 Jan 2019)",
    source: "HT Business • Mar 2025",
    logo: "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlid3jo3xQius.-black.png",
    link: "https://qrius.com/",
  },
  {
    name: "Times of India",
    title:
      "Doing at the intersaction of design and elegence to create great work for living breathing human being, sellers – in YourStory",
    source: "TOI • Apr 2025",
    logo: "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlid3ht6uTH.png",
    link: "https://www.thehindu.com/todays-paper/tp-features/tp-propertyplus/will-the-buyer-benefit-ultimately/article26894284.ece",
  },
  {
    name: "Business Standard",
    title:
      "Commercial realty growth is driving Bengaluru’s residential realty growth – Deccan Chronicle (21 May 2019)",
    source: "BS • May 2025",
    logo: "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlid3pf8eBusiness-Standard.png",
    link: "https://www.deccanchronicle.com/business/in-other-news/210519/commercial-realty-growth-is-driving-bengalurus-residential-realty-g.html",
  },
  {
    name: "Mint",
    title:
      "We are featured in a case study as just one of the 3 Indian firms to have used Taboola on a large scale for content marketing and lead generation for the vast realty sector in the country – Taboola",
    source: "Mint • Jun 2025",
    logo: "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlid2v703Untitled-12.png",
    link: "https://www.taboola.com/resources/case-studies/propstory",
  },
  {
    name: "Mint",
    title:
      " Doing at the intersaction of design and elegence to create great work for living breathing human being",
    source: "Mint • Jun 2025",
    logo: "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlid2obramoney-control.png",
    link: "https://www.moneycontrol.com/news/business/real-estate/nhb-asks-housing-finance-companies-to-avoid-financing-subvention-schemes-4232931.html",
  },
];

const youtubeData = [
  {
    link: "https://www.youtube.com/embed/x7gbVmFqvkw",
    desc: "This Festive Season, Unlock Expert Real Estate Insights with #PropertyGuru featuring #VipinBhatt and #AshishMahajan – Your Guide to Smart Investments! (21 Sept, 2024)",
  },
  {
    link: "https://www.youtube.com/embed/xqkwC_rff4k",
    desc: "  Ashish Mahajan talks about how the performance of the commercial real estate market is a barometer of the country’s overall economics. (25 Nov 2023).",
  },
  {
    link: "https://www.youtube.com/embed/8mWn1jRbj28",
    desc: "Ashish Mahajan expresses his view that India’s growing global reputation has generated an upswing in the country’s real estate market as well. (13 Jan 2024).",
  },
  {
    link: "https://www.youtube.com/embed/u03lzbIzNEM",
    desc: "Ashish Mahajan sheds light on the fact that residential registrations across key markets have increased y- o - y. (17 Feb 2024).",
  },
  {
    link: "https://www.youtube.com/embed/16t_8nkTs8k",
    desc: "Ashish Mahajan discusses the impact of the upcoming elections on the real estate sector’s approvals and new launches. (16 Mar 2024)",
  },
];

const MediaSection = () => {
  // Featured Item
  const featuredItem = mediaData.find((item) => item.featured);

  return (
    <section
      id="insights"
      className="w-full bg-[#faf7f2] py-24 px-6 relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-200/20 blur-[120px] rounded-full" />

      <div className="w-full mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center md:text-left mb-16"
        >
          <HeadingBadge text="PROPSTORY IN MEDIA" />

          {/* <h2 className="mt-5 w-full text-4xl md:text-5xl font-[Playfair_Display] font-semibold text-[#1f1f1f] max-w-3xl leading-tight">
            Recognized by India’s Leading Publications
          </h2> */}

          <p className="mt-4 text-gray-600 text-xl">
            Explore our thoughts on emerging technologies and the current trends
            affecting the industry.
          </p>
        </motion.div>

        {/* Featured Spotlight Card */}
        {featuredItem && (
          <motion.a
            href={featuredItem.link}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="block bg-white rounded-3xl shadow-xl p-10 mb-14 hover:shadow-2xl hover:-translate-y-1 transition duration-300 border border-yellow-200"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              {/* Logo */}
              <img
                src={featuredItem.logo}
                alt={featuredItem.name}
                className="h-10 object-contain"
              />

              {/* Text */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {featuredItem.title}
                </h3>

                <p className="mt-2 text-gray-500 text-sm">
                  {featuredItem.source}
                </p>
              </div>
            </div>
          </motion.a>
        )}

        {/* Media Grid */}
        {/* Media Grid / Slider */}
        <div
          className="
    flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide
    sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 sm:overflow-visible
  "
        >
          {mediaData
            .filter((item) => !item.featured)
            .map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
          group block bg-white rounded-2xl shadow-md p-7 border border-transparent 
          hover:border-yellow-300 hover:shadow-xl hover:-translate-y-2 transition duration-300

          min-w-[85%] snap-start   /* 👈 mobile slider */
          sm:min-w-0              /* 👈 reset for grid */
        "
              >
                {/* Logo */}
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-20 mb-1 object-contain"
                />

                {/* Headline */}
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-black">
                  {item.title}
                </h3>

                {/* Source */}
                <p className="text-sm text-gray-500 mt-3">{item.source}</p>
              </motion.a>
            ))}
        </div>

        {/* 🎥 Video Insights Section (UPDATED) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-semibold text-[#1f1f1f] mb-10 text-center">
            Video Insights & Interviews
          </h3>

          {/* Scroll Container */}
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {youtubeData.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
          min-w-[85%] 
          sm:min-w-[60%] 
          md:min-w-[45%] 
          lg:min-w-[22%]   /* 👈 fits ~5 in one row on desktop */
          snap-start
          bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group
        "
              >
                {/* Video */}
                <div className="relative">
                  <iframe
                    width="100%"
                    height="200"
                    src={video.link}
                    title="YouTube video"
                    className="w-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300 pointer-events-none"></div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                    {video.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="/media"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#071c2c] text-white font-medium shadow-lg hover:bg-black transition"
          >
            Explore All Press Features →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaSection;
