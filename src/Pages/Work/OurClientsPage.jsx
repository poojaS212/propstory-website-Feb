import React from "react";
import { motion } from "framer-motion";
import PageBanner from "../../Components/PageBanner";
import Breadcrumb from "@/Components/Breadcrumb";

const logos = [
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpp9yngd.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqiz2fx.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj0wul.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj15bo.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpp9zmmc.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpp9zxo0.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa06tx.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa0kik.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj1ctn.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj1o4a.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa21y6.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa2ad8.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa2m27.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa2u5b.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa33kj.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa3i6w.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa3rnx.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa40no.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa4a92.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa4koz.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa4uta.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa5342.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa5be9.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa5lwr.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj1wig.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj2hey.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa5vc0.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa6840.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa6hf5.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa6q3b.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa74al.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa7gzu.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj2oil.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa7r30.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa7zvh.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa8cus.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj31sm.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa8o2p.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa8wxy.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa96v0.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppa9gzq.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppaa1li.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppaag00.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppaap7w.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppaawl3.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj3kb2.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppab3el.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppaban1.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppabgy9.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj3vo8.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppabnto.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppabvdw.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj4iz0.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppac2bc.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppac8xc.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppacgny.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppacohp.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppacvqc.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppad26s.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj54kw.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj5es6.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmppad9kf.webp",
  "https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmpqj46gi.webp",
];

export default function OurClientsPage() {
  return (
    <section className="bg-[#f5f1ea] mt-24 md:px-6 overflow-hidden">
      <PageBanner
        title="Empowering Our Clients"
        subtitle="Building long-term relationships through transparency, expertise, and proven results."
        bgImage="https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmnsm3s6q.webp"
      />


      <div className="mx-auto px-6 lg:px-10 pb-24 md:pb-32">
        {/* Heading */}
        <div className="mb-24">
          <Breadcrumb />
          <p className="mt-10 text-[#000000] text-lg leading-9">
            We partner with leading developers to craft premium digital
            experiences that drive visibility, engagement, and growth.
          </p>
        </div>

        {/* Premium Staggered Cards */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.03,
              }}
              viewport={{ once: true }}
              className={`
                group relative
              
              `}
            >
              <div
                className="
                  relative overflow-hidden
                  rounded-[40px]
                  bg-white
                  h-[180px] md:h-[240px]
                  p-4 md:p-6
                  flex flex-col justify-between
                  border border-black/[0.04]
                  transition-all duration-700
                  hover:-translate-y-2
                  hover:shadow-[0_35px_100px_rgba(0,0,0,0.08)]
                "
              >
                {/* Soft Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,#000_1px,transparent_1px)] bg-[length:28px_28px]"></div>
                </div>

                {/* Top */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center">
                    ✦
                  </div>

                  {/* <div className="w-12 h-12 rounded-full bg-[#f5f1ea] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition duration-500">
                    ↗
                  </div> */}
                </div>

                {/* Center Logo */}
                <div className="relative z-10 flex items-center justify-center flex-1 md:py-6 py-1">
                  <img
                    src={logo}
                    alt="Client Logo"
                    className="
max-h-12 md:max-h-20
                      object-contain
                      group-hover:opacity-100
                      group-hover:grayscale-0
                      transition duration-500
                    "
                  />
                </div>

                {/* Bottom */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-16 h-[1px] bg-black/10"></div>

                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#8a8175]">
                    Real Estate Partner
                  </span>
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff] via-transparent to-[#e8dfd2] opacity-0 group-hover:opacity-100 transition duration-700"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
