export default function OurApproach() {
    const services = [
      {
        id: "01",
        title: "Business & Market Discovery",
        description:
          "We begin by understanding your goals, market landscape, competitors, and customer behavior. This foundation ensures strategy is rooted in real insights, not assumptions.",
        bg: "bg-[#c9ddf2]", // dark green
        textColor: "text-white",
      },
      {
        id: "02",
        title: "Audience & Channel Mapping",
        description:
          "We identify where your target audience spends time and how they interact with digital platforms — ensuring the right message reaches the right people at the right moment.",
        bg: "bg-[#c9ddf2]", // dark green
        textColor: "text-black",
      },
      {
        id: "03",
        title: "Data-Driven Planning",
        description:
            "Every recommendation is supported by analytics, research, and performance forecasting. We focus on scalable and measurable strategies.",     
               bg: "bg-[#c9ddf2]", // dark green
        textColor: "text-black",
      },
      {
        id: "04",
        title: "Execution & Optimization",
        description:
          "Strategy does not stop at planning. We continuously track performance, refine campaigns, and optimize results for sustained growth.", 
              bg: "bg-[#c9ddf2]", // dark green
        textColor: "text-black",
      },
    ];
  
    return (
        <section className="w-full bg-[#c9ddf2] text-[#e7e4dc]">
      
        {/* Top Content */}
        <div className="max-w-7xl mx-auto px-6 py-25">
          
          {/* Small Label */}
          <div className="mb-8">
            <span className="text-xs bg-black tracking-[0.3em] border border-[#e7e4dc]/40 px-4 py-2">
              SERVICES
            </span>
          </div>
  
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl text-gray-800 leading-tight max-w-4xl">
          Our Real Estate Digital Marketing Services In Bangalore
          </h2>
          <p className="text-lg md:text-xl text-gray-500 mx-auto font-medium leading-relaxed">Being one of the most trusted marketing agencies for real estate in Bangalore, PropStory offers a full spectrum of real estate digital marketing services built to generate property leads, site visits, and sales. Our services cover the entire buyer journey from first discovery to booking, with clear focus on measurable results.</p>
        </div>
  
        {/* Divider Line */}
        <div className="border-t border-[#e7e4dc]/20"></div>
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.bg} ${service.textColor} w-full py-20 border-t-2 border-[#1f1f1f]/80 transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#cee6b1]`}
          >
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-center">
              
              {/* Big Number */}
              <div className="text-7xl md:text-8xl font-light opacity-80 text-[#1e2939]">
                {service.id}
              </div>
  
              {/* Title */}
              <div className="text-2xl md:text-3xl font-light leading-snug text-[#1e2939]">
                {/* {service.title.split(" ").map((word, i) => (
                  <h3 key={i}>{word}</h3>
                ))} */}
                {service.title}
              </div>
  
              {/* Description */}
              <div className="text-sm md:text-base leading-relaxed max-w-md text-[#123456]">
                {service.description}
              </div>
  
            </div>
          </div>
        ))}
        {/* Divider Line */}
        <div className="border-t border-[#e7e4dc]/20"></div>
      </section>
    );
  }
  
  