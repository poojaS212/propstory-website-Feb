  {/* Line 2 */}
  <div className="relative inline-block">

  {/* <img
    src={shape}
    alt="highlight"
    className="absolute left-0 bottom-0 w-full h-[80%] -z-0 pointer-events-none"
  /> */}

  <RotatingText
    texts={[
      "Marketing",
      "Strategy",
      "Campaigns",
      "Growth",
      "Performance",
      "Solutions",
      "Services",
      "Lead-Gen",
      "Conversions",
    ]}
    mainClassName="relative z-10 text-black overflow-hidden justify-center inline-flex whitespace-nowrap px-4 pt-0 italic"
    staggerFrom="last"
    initial={{ y: "100%" }}
    animate={{ y: 0 }}
    exit={{ y: "-80%" }}
    staggerDuration={0.025}
    splitLevelClassName="overflow-hidden pb-1"
    transition={{ type: "spring", damping: 30, stiffness: 100 }}
    rotationInterval={4000}
  />

</div>