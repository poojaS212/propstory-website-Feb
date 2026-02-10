import { motion } from "framer-motion";
import HeadingBadge from "@/Components/HeadingBadge";

const mediaData = [
  {
    name: "Starup Talky",
    title: "Propstory – Data-Driven Platform for Real Estate Buyers and Investors – Company Profile on Startup Talky",
    source: "Starup Talky • 30 Jan 2019",
    logo: "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlid3lszmStartup-Talky.png",
    link: "/media/forbes",
    featured: true,
  },
  {
    name: "Economic Times",
    title: "Propstory emerges as top digital real estate marketing brand",
    source: "ET Realty • Feb 2025",
    logo: "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlid3lszmStartup-Talky.png",
    link: "/media/economic-times",
  },
  {
    name: "Hindustan Times",
    title: "New-age agencies transforming luxury property branding",
    source: "HT Business • Mar 2025",
    logo: "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlid3lszmStartup-Talky.png",
    link: "/media/hindustan-times",
  },
  {
    name: "Times of India",
    title: "Propstory’s creative approach reshaping real estate media",
    source: "TOI • Apr 2025",
    logo: "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlid3lszmStartup-Talky.png",
    link: "/media/times-of-india",
  },
  {
    name: "Business Standard",
    title: "Propstory sets benchmark for premium property campaigns",
    source: "BS • May 2025",
    logo: "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlid3lszmStartup-Talky.png",
    link: "/media/business-standard",
  },
  {
    name: "Mint",
    title: "Luxury real estate marketing enters a new era with Propstory",
    source: "Mint • Jun 2025",
    logo: "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlid3lszmStartup-Talky.png",
    link: "/media/mint",
  },
];

const MediaSection = () => {
  // Featured Item
  const featuredItem = mediaData.find((item) => item.featured);

  return (
    <section className="w-full bg-[#faf7f2] py-24 px-6 relative overflow-hidden">
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
            Explore our thoughts on emerging technologies and the current trends affecting the industry.
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="group block bg-white rounded-2xl shadow-md p-7 border border-transparent hover:border-yellow-300 hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                {/* Logo */}
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-9 mb-5 object-contain"
                />

                {/* Headline */}
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-black">
                  {item.title}
                </h3>

                {/* Source */}
                <p className="text-sm text-gray-500 mt-3">
                  {item.source}
                </p>

                {/* Arrow */}
                <p className="mt-4 text-sm font-medium text-yellow-700 group-hover:underline">
                  Read Feature →
                </p>
              </motion.a>
            ))}
        </div>

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
