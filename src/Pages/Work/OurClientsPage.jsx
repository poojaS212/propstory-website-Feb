import React from "react";
import { motion } from "framer-motion";

const logos = [
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9w5rmmadani.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9w68n8BKC-28.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9w6jgjELDECO-01-01.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9w6taqEMAAR-01.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9w74vsExperion.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9w7g5kGOLDEN%20HOMES-01.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9w7rrjKOLTE%20PATIL-01.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9w81qeMAHINDRA-01.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9x2bqgMETRO%20GROUP-01.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlieferk8SPAGROUP_11zon.png",
  "https://magicpage-dev.propstory.com/ImageUploads/VBHC%20Landscape/1nnx51q2hm71ht9gt.jpg",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9wb7jeNEW%20PORUR_11zon.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9wbm1mOZONE_11zon.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9wbx5vRWD-01.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli9wc866Signature-global.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlief9op7Adarsh-Group.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlief9ufuashiana.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwliefa1seassetez.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwliefej4mSwamitva.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwliefa8i7Bestech.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwliefalwkGeown.png",
  "https://cdn.propstory.com/magicpages/NAME/16iwl4khzwliefbi5kHbits.png",
];

export default function OurClientsPage() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Clients
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by India’s leading real estate developers across metro cities.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-center ">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:shadow-lg transition duration-300 border_bottom"
            >
              <img
                src={logo}
                alt="Client Logo"
                className="max-h-14 object-contain  transition duration-300"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
