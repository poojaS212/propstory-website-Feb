import React, { useState } from "react";
import { Play } from "lucide-react";
import HeadingBadge from "@/Components/HeadingBadge";
import { motion } from "framer-motion";

const videos = [
  {
    title: "Elevate your brand with our tailored strategies. Unlock your online potential today.",
    src: "https://propstory.in/ProjectVideos/PropstoryCHENNAI.mp4",
  },
  {
    title: "Elevate your brand with our tailored strategies. Unlock your online potential today.",
    src: "https://propstory.in/ProjectVideos/PropstorymumbaiVideo.mp4",
  },
  {
       title: "Elevate your brand with our tailored strategies. Unlock your online potential today.",

    src: "https://propstory.in/ProjectVideos/PropstoryDelhi NCR.mp4",
  },
  {
       title: "Elevate your brand with our tailored strategies. Unlock your online potential today.",

    src: "https://propstory.in/ProjectVideos/propstory1.mp4",
  },
  {
       title: "Elevate your brand with our tailored strategies. Unlock your online potential today.",

    src: "https://propstory.in/ProjectVideos/propstory2.mp4",
  },
];

export default function TransformSection() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <section className="w-full py-24 bg-[#fbf8f3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
             <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center md:text-left mb-16"
        >
            <HeadingBadge text="TRANSFORM YOUR PRESENCE" />
          
      

          <p className="mt-4 text-gray-600 text-xl">
             Cinematic Digital Experiences for Luxury Brands  </p>
        </motion.div>
      

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-center">
          {/* BIG VIDEO PLAYER */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-yellow-500/20 bg-black">
            {/* IMPORTANT FIX: key forces reload */}
            <iframe
              key={activeVideo.src}
              src={activeVideo.src}
              title={activeVideo.title}
              allow="encrypted-media;"
              muted
              allowFullScreen
              className="w-full aspect-video muted"
            />

            {/* Title */}
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-gray-900">
                {activeVideo.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Featured Video • Propstory Studios
              </p>
            </div>
          </div>

          {/* SIDE 4 SMALL VIDEOS */}
          <div className="flex flex-col gap-5">
            {videos.slice(1).map((video, index) => {
              const isActive = activeVideo.id === video.id;

              return (
                <button
                  key={index}
                  onClick={() => setActiveVideo(video)}
                  className={`flex gap-4 items-center rounded-2xl overflow-hidden shadow-md border transition-all
                  ${
                    isActive
                      ? "border-yellow-600 shadow-xl"
                      : "border-transparent hover:border-yellow-400/50"
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative w-28 h-20 flex-shrink-0">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Play Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Play className="w-6 h-6 text-white opacity-90" />
                    </div>
                  </div>

                  {/* Video Text */}
                  <div className="pr-4 text-left">
                    <p className="text-sm font-semibold text-gray-900 leading-snug">
                      {video.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Click to Play
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
