// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";


// const caseStudiesData = [
//   {
//     city: "Bangalore",
//     projects: [
//       {
//         id: 1,
//         title: "Mahindra Blossom",
//         description: "Luxury campaign generating 2000+ qualified buyer enquiries.",
//         image: "/casestudies/mahindrabloosam.jpg",
//       },
//       {
//         id: 2,
//         title: "NCC Urban Retreat",
//         description: "High-value performance strategy delivering 3000+ premium leads.",
//         image: "/casestudies/ncc.jpg",
//       },
//       {
//         id: 3,
//         title: "Purva Silversky",
//         description:"Integrated digital campaign driving consistent luxury segment conversions.",
//         image: "/casestudies/purvasilversky.jpg",
//       },
//       {
//         id: 4,
//         title: "Sattva La Vita",
//         description:"Focused 4-month execution achieving strong high-intent enquiries..",
//         image: "/casestudies/sattvalavita.jpg",
//       },
//       {
//         id: 5,
//         title: "Godrej MSR",
//         description:"Launch-phase campaign generating rapid premium lead traction.",
//         image: "/casestudies/msrcity.jpg",
//       },
//       {
//         id: 6,
//         title: "Adarsh Welkin Park",
//         description:"Scaled media strategy delivering sustained premium buyer engagement.",
//         image: "/casestudies/adarsh.jpg",
//       },
//     ],
//   },

//   {
//     city: "Mumbai",
//     projects: [
//       {
//         id: 7,
//         title: "Shapoorji Pallonji BKC 28",
//          description: "Targeted luxury campaign capturing affluent Mumbai buyers.",
//         image: "/casestudies/bkc28.jpg",
//       },
//       {
//         id: 8,
//         title: "Mahindra Meridian",
//           description: "Long-term performance campaign generating 6000+ quality enquiries.",
//         image: "/casestudies/mahindrameridian.jpg",
//       },
//       {
//         id: 9,
//         title: "DLH Legacy",
//       description: "Premium positioning strategy driving high-intent urban buyers.",
//         image: "/casestudies/legacy.jpg",
//       },
//       {
//         id: 10,
//         title: "Godrej Avalon",
//          description: "Short-duration luxury push maximizing high-value conversions.",
//         image: "/casestudies/avalon.jpg",
//       },
//       {
//         id: 11,
//         title: "Hubtown Celeste",
//           description: "Consistent digital presence generating steady suburban demand.",
//         image: "/casestudies/celeste.jpg",
//       },
//       {
//         id: 12,
//         title: "Arkade Rare",
//           description: "High-impact launch strategy delivering strong enquiry volumes.",
//         image: "/casestudies/akadre.jpg",
//       },
//       {
//         id: 13,
//         title: "Neoliv Grandhit 3.0",
//           description: "Integrated campaign combining scale, awareness, and performance.",
//         image: "/casestudies/grandhit.jpg",
//       },
//     ],
//   },

//   {
//     city: "Pune",
//     projects: [
//       {
//         id: 14,
//         title: "Mahindra Ivy Lush",
//           description: "Large-scale campaign generating 9000+ qualified enquiries.",
//         image: "/casestudies/mahindraivlush.jpg",
//       },
//       {
//         id: 15,
//         title: "Kolte Patil 24K Espada",
//          description: "3-month luxury campaign delivering 3200+ premium leads.",
//         image: "/casestudies/KPLR.jpg",
//       },
//       {
//         id: 16,
//         title: "Kolte Patil 24K Altura",
//           description: "Sustained digital performance strategy driving steady luxury demand.",
//         image: "/casestudies/KPaltura.jpg",
//       },
//       {
//         id: 17,
//         title: "Godrej Mundhwa",
//           description: "Multi-platform execution expanding funnel reach and conversions.",
//         image: "/casestudies/godrej.jpg",
//       },
//       {
//         id: 18,
//         title: "Kohinoor",
//           description: "Prelaunch campaign building early high-intent buyer traction.",
//         image: "/casestudies/kohinoor.jpg",
//       },
//       {
//         id: 19,
//         title: "Shapoorji Pallonji Golfland Vanaha",
//           description: "Strategic performance execution driving consistent engagement.",
//         image: "/casestudies/shapoorjipalonji.jpg",
//       },
//       {
//         id: 20,
//         title: "Sobha Nesara",
//          description: "Premium buyer-focused campaign optimizing quality lead flow.",
//         image: "/casestudies/sobhanesara.jpg",
//       },
//       {
//         id: 21,
//         title: "The ARK",
//          description: "Long-term strategy delivering consistent high-value enquiries.",
//         image: "/casestudies/legacy2.jpg",
//       },
//     ],
//   },

//   {
//     city: "Delhi-NCR",
//     projects: [
//       {
//         id: 22,
//         title: "Trump Tower",
//           description: "Ultra-luxury campaign targeting elite high-net-worth buyers.",
//         image: "/casestudies/trumptower.jpg",
//       },
//       {
//         id: 23,
//         title: "Experion Windchants",
//           description: "Premium segment campaign driving sustained luxury engagement.",
//         image: "/casestudies/experion.jpg",
//       },
//       {
//         id: 24,
//         title: "Emaar Digihomes",
//           description: "Large-scale execution generating 15000+ qualified leads.",
//         image: "/casestudies/emaar.jpg",
//       },
//       {
//         id: 25,
//         title: "Eldeco Live by the Greens",
//           description: "Long-term performance marketing delivering mass premium reach.",
//         image: "/casestudies/eldeco.jpg",
//       },
//       {
//         id: 26,
//         title: "Adani Samsara Avasa",
//          description: "High-impact short campaign generating premium enquiries.",
//         image: "/casestudies/samsaraavasa.jpg",
//       },
//       {
//         id: 27,
//         title: "Godrej Riverine",
//           description: "Focused strategy driving strong luxury buyer visibility.",
//         image: "/casestudies/godrejriverise.png",
//       },
//       {
//         id: 28,
//         title: "Neoliv Codename One&Only",
//          description: "Prelaunch campaign building high-scale premium awareness.",
//         image: "/casestudies/leagacy3.jpg",
//       },
//     ],
//   },

//   {
//     city: "Chennai",
//     projects: [
//       {
//         id: 29,
//         title: "HOH Loftline",
//           description: "Launch campaign generating strong affordable housing traction.",
//         image: "/casestudies/loftline.jpg",
//       },
//       {
//         id: 30,
//         title: "Gsquare Meadows",
//          description: "Efficient short-term strategy targeting plotted development buyers.",
//         image: "/casestudies/sqaure.png",
//       },
//       {
//         id: 31,
//         title: "Purva Somerset",
//           description: "Premium residential campaign delivering quality conversions.",
//         image: "/casestudies/purvahouse.jpg",
//       },
//       {
//         id: 32,
//         title: "Mahindra Aqualily",
//          description: "Multi-channel execution generating 4000+ buyer enquiries.",
//         image: "/casestudies/aquavista.jpg",
//       },
//       {
//         id: 33,
//         title: "VGN Plots",
//           description: "Performance-driven campaign targeting investment buyers.",
//         image: "/casestudies/porur.jpg",
//       },
//       {
//         id: 34,
//         title: "Codename New Porur",
//           description: "Long-term strategy delivering 15000+ qualified enquiries.",
//         image: "/casestudies/newporur.jpg",
//       },
//     ],
//   },
// ];

// export default function CaseStudiesSection() {
//   const [activeCity, setActiveCity] = useState(caseStudiesData[0].city);

//   const selectedCity = caseStudiesData.find(
//     (item) => item.city === activeCity
//   );

//   return (
//     <section className="bg-gradient-to-b from-white to-gray-100 py-20">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* REFINED CITY TABS */}
// <div className="flex justify-center mb-14">
//   <div className="relative flex bg-gray-100/70 backdrop-blur-md p-1.5 rounded-full shadow-sm">

//     {caseStudiesData.map((item) => {
//       const isActive = activeCity === item.city;

//       return (
//         <motion.button
//           key={item.city}
//           onClick={() => setActiveCity(item.city)}
//           whileTap={{ scale: 0.96 }}
//           className="relative px-5 py-2 text-sm md:text-base font-medium rounded-full transition-colors duration-300"
//         >
//           {isActive && (
//             <motion.div
//               layoutId="activeSegment"
//               className="absolute inset-0 bg-black rounded-full shadow-md"
//               transition={{ type: "spring", stiffness: 450, damping: 35 }}
//             />
//           )}

//           <span
//             className={`relative z-10 transition-colors duration-300 ${
//               isActive
//                 ? "text-white"
//                 : "text-gray-500 hover:text-gray-900"
//             }`}
//           >
//             {item.city}
//           </span>
//         </motion.button>
//       );
//     })}

//   </div>
// </div>


//         {/* PROJECT CARDS */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeCity}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.4 }}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {selectedCity.projects.map((project) => (
//               <div
//                 key={project.id}
//                 className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
//               >
//                 {/* IMAGE */}
//                 <div className="overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
//                   />
//                 </div>

//                 {/* CONTENT */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2">
//                     {project.title}
//                   </h3>

//                   <p className="text-gray-600 mb-4 text-sm">
//                     {project.description}
//                   </p>

//                   <button className="text-sm font-medium text-black hover:underline">
//                     View Case Study →
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </AnimatePresence>
    
//       </div>
//     </section>
//   );
// }


const CaseStudiesSection = () => {
  return (
    <div className="mt-40 text-3xl">
      Case Studies Page
    </div>
  );
};

export default CaseStudiesSection;