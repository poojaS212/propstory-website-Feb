import { useState } from "react"

const leftFaqs = [
    {q: "What is digital strategy, and why is it important?",
     a:  "Digital strategy is a structured plan that aligns your business goals with digital channels, technology, and customer behavior. It defines how your brand attracts, engages, and converts audiences online. Without a clear strategy, marketing efforts become scattered. A well-crafted digital strategy ensures every campaign, platform, and investment contributes to measurable business growth."
    },

    {q: "What tools are used in digital analytics?",
     a:  "Website traffic and behavior tracking platforms, Conversion tracking systems, Heatmaps and user behavior tools, Campaign performance dashboards, Marketing automation and CRM integrations"
    },

    {q: "How do you create a data-driven digital strategy?",
     a:  "Business goal alignment, Audience research & competitor analysis, Channel selection & planning, Campaign execution, Continuous tracking and optimization"
    }
]

const rightFaqs = [
    {q: "How often should digital performance be reviewed?",
     a: "Weekly for active campaigns, Monthly for overall strategy, Quarterly for long-term optimization"
    },
    
    {q: "Do small businesses need digital analytics?",
    a:  "Absolutely. In fact, small businesses benefit the most from analytics because it ensures limited budgets are used effectively. Even basic tracking can significantly improve decision-making and growth direction."
   },

        {q: "How do you ensure data accuracy?",
        a: "We implement proper tracking setups, verify integrations, audit analytics configurations, and conduct regular performance reviews. Clean, reliable data is the foundation of strong strategic decisions."
        },

        
    ]




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

  export default function FaqsSectionServices() {
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