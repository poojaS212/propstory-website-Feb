
// function WixBlobCard({ title, desc, bg = "#B7B2FF" }) {
//     return (
//       <div className="relative w-full h-[340px] transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02] ">
//         <svg
//           viewBox="0 0 420 320"
//           className="absolute inset-0 w-full h-full"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="
//               M50,0 
//               H370
//               C395,0 420,20 420,45
//               V80
//               C360,95 360,145 420,160
//               V235
//               C420,280 390,320 340,320
//               H80
//               C30,320 0,280 0,245
//               V200
//               C60,185 60,115 0,100
//               V45
//               C0,20 25,0 50,0
//               Z
//             "
//             fill={bg}
//             stroke="#1f1f1f"
//             strokeWidth="3"
//           />
//         </svg>
  
//         {/* Content */}
//         <div className="relative z-10 h-full p-10 flex flex-col justify-between ">
//           <h3 className="text-3xl md:text-4xl font-semibold text-gray-800">
//             {title}
//           </h3>
//           <p className="text-gray-700 max-w-xs leading-relaxed">
//             {desc}
//           </p>
//         </div>
//       </div>
//     );
//   }
  

  function WixBorderCard({ title, desc, bg = "#ffffff" }) {
    return (
    //   <div className="max-w-md w-full h-auto transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02]">
    //     <svg
    //       viewBox="0 0 400 300"
    //       className="w-full h-auto"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       {/* Shape */}
    //       <path
    //         d="
    //           M 40 0
    //           H 360
    //           Q 400 0 400 40
    //           V 60
    //           C 360 80 360 120 400 140
    //           V 160
    //           C 360 180 360 220 400 240
    //           V 260
    //           Q 400 300 360 300
    //           H 40
    //           Q 0 300 0 260
    //           V 240
    //           C 40 220 40 180 0 160
    //           V 140
    //           C 40 120 40 80 0 60
    //           V 40
    //           Q 0 0 40 0
    //           Z
    //         "
    //         fill={bg}
    //         stroke="#1f1f1f"
    //         strokeWidth="3"
    //       />
  
    //       {/* Content */}
    //       <foreignObject x="0" y="0" width="400" height="300">
    //         <div className="h-full w-full p-10 flex flex-col justify-between">
    //           <h3 className="text-3xl font-semibold text-gray-800">{title}</h3>
    //           <p className="text-gray-600 leading-relaxed max-w-xs">
    //             {desc}
    //           </p>
    //         </div>
    //       </foreignObject>
    //     </svg>
    //   </div>

<div className="max-w-md w-full h-auto transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02]">
<svg
  viewBox="0 0 420 300"
  className="w-full h-auto"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* Shape */}
  <path
    d="
      M 40 0
      H 380
      Q 400 0 400 20
      V 40

      C 420 60 420 100 400 120
      C 420 140 420 180 400 200
      C 420 220 420 260 400 280

      V 280
      Q 400 300 380 300
      H 40
      Q 20 300 20 280
      V 280

      C 0 260 0 220 20 200
      C 0 180 0 140 20 120
      C 0 100 0 60 20 40

      V 20
      Q 20 0 40 0
      Z
    "
    fill={bg}
    stroke="#1f1f1f"
    strokeWidth="3"
  />

  {/* Content */}
  <foreignObject x="0" y="0" width="420" height="300">
    <div className="h-full w-full p-10 flex flex-col justify-between">
      <h3 className="text-3xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed max-w-xs">
        {desc}
      </p>
    </div>
  </foreignObject>
</svg>
</div>
    );
  }
  

  export default function BenefitsSection() {
    return (
      <section className="max-w-7xl mx-auto px-6 py-24 bg-[#f6f3ea]">
        {/* Header */}
        <div className="mb-20">
          <span className="inline-block bg-black text-white text-xs px-4 py-1 rounded-full tracking-widest">
            BENEFITS
          </span>
          <h2 className="mt-8 text-4xl md:text-5xl font-medium text-gray-800">
          Discover the Benefits of choosing us today
          </h2>
        </div>
  
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <WixBorderCard
            title="Strategic, Not Generic"
            desc="We don’t do one-size-fits-all solutions. Every plan is tailored to your audience, your competitors, and your business ambitions."
            bg="#B7B2FF"
            />
          <WixBorderCard
                title="Tech-Driven Expertise"
                desc="Great strategy needs powerful technology behind it. We leverage modern tools, platforms, and frameworks to build fast, scalable, and reliable digital solutions—so your marketing isn’t just creative, it’s engineered for performance, security, and growth."
                bg="#C9DDF2"
                />
          <WixBorderCard
            title="Transparent, Collaborative Partnership"
            desc="You’re not handed reports — you're part of the journey. We communicate clearly, act proactively, and adapt based on real insight."
            bg="#ffffff"
            />
        </div>
      </section>
    );
  }
  
  