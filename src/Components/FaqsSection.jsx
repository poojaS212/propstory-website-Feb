import { useState } from "react"

const leftFaqs = [
    {q: "What are the digital marketing trends for 2026?",
     a:  "The essence of modern digital marketing is clear: it focuses on targeting specific audiences while maintaining a conversational and personalized approach. Just a short time ago, data-driven and programmatic marketing powered by artificial intelligence seemed like ambitious concepts, often viewed with skepticism. Today, however, they are the leading digital marketing strategies for 2024. In addition, methods such as social media marketing, content marketing, search engine marketing, micro-moments marketing, voice and visual search engine optimization, chatbots, omnichannel marketing, personalized marketing, influencer marketing, and video marketing continue to be top priorities for online business owners this year."
    },

    {q: "What is the role of digital marketing in a company?",
     a:  "Currently, Digital marketing is the most favored marketing technique because we live in a technologically savvy world and almost every form of business is online-based. Creating a website and company profiles on social media platforms is not enough. Staying competitive in such a world requires a solid online presence and thus – Digital marketing. It helps companies in increasing their online presence, it performs market research that is based on the target audience, and it integrates and modifies the company’s online profile accordingly. In short, digital marketing helps businesses to garner new sales, leads and above all online traffic."
    },

    {q: "Is Digital Marketing the future?",
     a:  "Yes, Digital marketing is definitely the future of the marketing world. Currently, about 99% of the population on this planet is dependent on the internet, be it official work, domestic chores, or day to day activities. And digital marketing is completely based on the internet. Moreover, from viral marketing campaigns to Big Data, it has continuously evolved and adapted to meet the marketing requirements of all online businesses and brands. Nowadays, owing to established digital infrastructure and increased connectivity with lightning-fast internet speed, Digital marketing is evolving faster. From traditional techniques such as Search Engine Optimization and Marketing, it is en route to touching the zenith in the arena of Artificial Intelligence. Programmatic Marketing is now a reality where with the help of AI online advertisements are being automated."
    },
        {q: "What are the standard processes of a good SEO Company and benefits for your business?",
        a: " As the best digital marketing consultant, our approach to boost organic traffic by increasing business website visibility on Bing, Yahoo & Google search engine result page through search engine optimization techniques. A good SEO consultant follows white hat seo method that is widely accepted by the search engines algorithms. A good SEO company also must abide by the rules and search engine algorithm as established by Google, Bing & Yahoo. One must never work with SEO companies in Bangalore who practice wrong, black hat seo methods to achieve faster results as it may lead to search engine penalty of your website. SEO services are key to your Digital Strategy because organic seo traffic will be a dominant contributor to your website’s traffic mix."
    },
]

const rightFaqs = [
    {q: "What are some critical roles in a digital marketing",
     a: " In the world of internet marketing, digital marketing services have a huge role to play. The best digital marketing companies understand the working of 360° digital spectrum. Always work with digital marketing companies who not only have technologists in their team but also subject matter experts. The critical roles of a digital marketing company are"
    },
    
    {q: "What is an example of digital marketing?",
    a:  "The concept of digital marketing is quite simple. It aims at promoting brands and businesses through various digital technologies that include the internet, MMS, SMS, etc. All marketing strategies include setting certain objectives that are based on the survey of the target audience and the prevailing market information and then selecting a preferable marketing channel and/or platform. As an example, imagine a brand that wants to promote one of its products online. This can be done through Social Media Marketing on Social Media Platforms such as Facebook, Instagram, or Twitter. The process would include launching a marketing campaign that centers on the product and brand awareness."
   },

        {q: "What is a Digital Marketing Agency and how do they work?",
        a: " A digital marketing agency is a professional company that helps both businesses and individuals with their digital marketing needs. Digital marketing services offered by these businesses range from SEO, social media marketing, online advertisement on search engines like Google or Bing, web and mobile app development, to even web designing."
        },

        {q: "What is the importance of a digital marketing company in India?",
        a: " Top digital marketing agencies in India, especially Bangalore, are at the forefront of providing cutting-edge marketing solutions to startups and enterprises alike. Since their inception, these digital marketing companies have provided countless businesses with the strategies and tools required to not only compete but to thrive in this ever-evolving business world."
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