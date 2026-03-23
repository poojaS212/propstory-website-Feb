import { useState } from "react"

const leftFaqs = [
    {q: "How much does real estate digital marketing cost in Bangalore?",
     a:  "Real estate digital marketing costs in Bangalore vary based on project size, location, inventory type, and lead volume goals. PropStory offers custom packages for each project. Pricing depends on media budgets, platforms used, and service scope. It is best to get a project assessment."
    },

    {q: "Do you create project websites and landing pages for real estate developers?",
     a:  "Yes, we design and build real estate project websites and high conversion landing pages. Our services include UI UX design, fast development, mobile optimization, CRM integration, site visit booking flows, and scaling pages for multiple inventory types and campaign sources."
    },

    {q: "What type of real estate clients do you work with in Bangalore?",
     a:  "We work with leading real estate developers and brands such as Adani Realty, Emaar India, Sobha, Puravankara, Mahindra Lifespaces, Eldeco, and more. We also work with mid size developers, commercial property brands, and real estate broker networks."
    },
      {q: "Can you integrate leads with our CRM or build a custom CRM?",
      a: "Yes, we can integrate all leads with your existing CRM like Zoho, Salesforce, or LeadSquared. We also build custom CRMs for developers who need project level tracking, sales team workflows, site visit tracking, follow up automation, and reporting dashboards."
    },
]

const rightFaqs = [
    {q: "How long does it take to see results from real estate SEO in Bangalore?",
     a: "Real estate SEO results usually take three to six months for noticeable rankings and lead traction. Timelines depend on competition, location keywords, project maturity, and website quality. We focus on project pages, local SEO, and buyer intent keywords for faster impact."
    },
    
    {q: "Which platforms work best for real estate lead generation in Bangalore?",
    a:  "Google Search, Meta ads, and location focused landing pages work best for Bangalore real estate lead generation. The platform mix depends on project type, budget, and target audience. We test channels and scale only those delivering qualified site visit leads."
   },

        {q: "Can you generate site visit bookings for new project launches?",
        a: "Yes, we specialize in new project launch campaigns focused on site visit bookings. We build launch landing pages, run pre launch and launch ads, segment audiences by location and budget, and connect leads directly to sales teams for faster conversions."
        },

        {q: "How do you ensure lead quality for real estate campaigns?",
        a: "We improve lead quality through intent based targeting, location filters, budget qualifiers, form level screening questions, and post lead validation. We track site visit conversion rates and feedback from sales teams to continuously refine targeting and creatives."
        },

        
        
        
    ]


// function FaqItem({question, answer}){
//     const [open, setOpen] = useState(false);

//     return(
//         <div className="border-b border-gray-200 py-4">
//              <button onClick={()=> setOpen(!open)} className="flex justify-between">  
//              <span className="text-gray-900 font-medium cursor-pointer">{question}</span>
//         <span
//           className={`flex h-8 w-8 items-center justify-center rounded-full bg-[]-100 text-purple-700 transition-transform duration-300 cursor-pointer ${
//             open ? "rotate-180" : ""
//           }`}
//         >
//           ⌄
//         </span>
//         </button>

//             <div
//             className={`overflow-hidden transition-all duration-300 ${
//             open ? "max-h-40 mt-3" : "max-h-0"
//             }`}
//             >
//             <p className="text-gray-500 text-sm">
//             {answer}
//             </p>
//             </div>
//         </div>
        
//     )
// }

// export default function FaqsSection(){
    
//     return(
//         <>
//         <section className="bg-white py-24">
//           <div className="mx-auto max-w-6xl px-6">
//             {/* Container */}
//             <div className="relative rounded-3xl border border-gray-200 p-12">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
//                 {/* left faqs */}
//                 <div>
//                     {leftFaqs.map((item, i) => (
//                         <FaqItem key={i} question={item.q} answer={item.a}/>
//                     ))}
//                 </div>

//                     {/* Center Title */}
//                     <div className="flex items-center justify-center">
//                         <h2 className="text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900">
//                             FAQ
//                         </h2>
//                         </div>

//                     {/* right faqs */}
//                     <div>
//                         {rightFaqs.map((item, i) => (
//                             <FaqItem key={i} question={item.q} answer={item.a}/>
//                         ))}
//                     </div>
        
//              </div>
//            </div>
//            </div>
//          </section>
        
//         </>
//     )
// }


// function FaqItem({ question, answer }) {
//     const [open, setOpen] = useState(false);
  
//     return (
//       <div className="border-b border-gray-200 py-5">
//         <button
//           onClick={() => setOpen(!open)}
//           className="flex w-full items-center justify-between text-left group"
//         >
//           <span className="text-gray-900 font-medium group-hover:text-[#47ED76] transition">
//             {question}
//           </span>
  
//           <span
//             className={`flex h-8 w-8 items-center justify-center rounded-full bg-[#47ED76] text-[#47ED76]transition-all duration-300 ${
//               open ? "rotate-180 bg-[#47ED76] text-white" : ""
//             }`}
//           >
//             ⌄
//           </span>
//         </button>
  
//         <div
//           className={`overflow-hidden transition-all duration-300 ease-in-out ${
//             open ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
//           }`}
//         >
//           <p className="text-gray-500 text-sm leading-relaxed pr-6">
//             {answer}
//           </p>
//         </div>
//       </div>
//     );
//   }
  
//   export default function FaqsSection() {
//     return (
//       <section className="bg-white py-24">
//         <div className="mx-auto max-w-7xl px-6">
//           <div className="relative rounded-3xl border border-gray-200 px-10 py-16">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-14 items-start">
              
//               {/* LEFT FAQS */}
//               <div>
//                 {leftFaqs.map((item, i) => (
//                   <FaqItem key={i} question={item.q} answer={item.a} />
//                 ))}
//               </div>
  
//               {/* CENTER HEADING */}
//               <div className="flex items-center justify-center h-full">
//                 <div className="text-center sticky top-32">
//                   <p className="text-xs tracking-widest uppercase text-gray-400">
//                     Help Center
//                   </p>
//                   <h2 className="mt-4 text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900">
//                     FAQ
//                   </h2>
//                   <p className="mt-4 text-gray-500 max-w-xs mx-auto text-sm">
//                     Everything you need to know before getting started.
//                   </p>
//                 </div>
//               </div>
  
//               {/* RIGHT FAQS */}
//               <div>
//                 {rightFaqs.map((item, i) => (
//                   <FaqItem key={i} question={item.q} answer={item.a} />
//                 ))}
//               </div>
  
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }


  function FaqItem({ question, answer }) {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="border-b border-gray-200 py-5">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between gap-6 text-left group cursor-pointer"
        >
          {/* Question */}
          <span className="text-gray-900 font-medium leading-snug transition">
            {question}
          </span>
  
          {/* Toggle Icon */}
          <span
            className={`flex h-7 w-7 min-w-[28px] items-center justify-center rounded-full border transition-all duration-300 ${
              open
                ? "bg-black border-purple-700 text-white rotate-180"
                : "bg-white border-gray-300 text-gray-600"
            }`}
          >
            <svg
              className="h-3 w-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <line x1="5" y1="12" x2="19" y2="12" />
              ) : (
                <>
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </>
              )}
            </svg>
          </span>
        </button>
  
        {/* Answer */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-gray-500 text-sm leading-relaxed pr-8">
            {answer}
          </p>
        </div>
      </div>
    );
  }

  export default function FaqsSection() {
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative rounded-3xl border border-gray-200 px-10 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
  
              {/* LEFT FAQS */}
              <div>
                {leftFaqs.map((item, i) => (
                  <FaqItem key={i} question={item.q} answer={item.a} />
                ))}
              </div>
  
              {/* CENTER HEADING */}
              <div className="flex justify-center self-center">
                <div className="sticky top-32 text-center">
                  {/* <span className="inline-block mb-4 rounded-full bg-[]-100 px-4 py-1 text-xs tracking-widest uppercase text-purple-700">
                    FAQs
                  </span> */}
  
                  <h2 className="text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900">
                    FAQ
                  </h2>
  
                  <p className="mt-5 text-gray-500 text-sm max-w-xs mx-auto">
                    Clear answers to common questions so you can move forward with confidence.
                  </p>
                </div>
              </div>
  
              {/* RIGHT FAQS */}
              <div>
                {rightFaqs.map((item, i) => (
                  <FaqItem key={i} question={item.q} answer={item.a} />
                ))}
              </div>
  
            </div>
          </div>
        </div>
      </section>
    );
  }