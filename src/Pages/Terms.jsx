// Terms.jsx

import Breadcrumb from "@/Components/Breadcrumb";

export function Terms() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8f8f8] to-[#f2f2f2] py-20 px-4 md:px-8">

      <div className="absolute top-0 left-0 w-72 h-72 bg-black/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-16 pt-10">
<Breadcrumb />
          <h3 className="text-2xl font-semibold">
Terms & Conditions
                  </h3>

          <div className="w-24 h-[2px] bg-black mx-auto mt-6"></div>
         
        </div>

        <div className="grid gap-8">

          {[
            {
              title: "Website Usage",
              content:
                "Users agree to use this website for lawful purposes only. Any misuse or unauthorized activity is strictly prohibited.",
            },
            {
              title: "Intellectual Property",
              content:
                "All website content including text, branding, graphics, layouts, and digital assets are the property of PropStory unless otherwise stated.",
            },
            {
              title: "Service Information",
              content:
                "We strive to provide accurate information regarding our services including digital marketing, CRM implementation, AI chatbot solutions, and advertising services.",
            },
            {
              title: "Third-Party Platforms",
              content:
                "Our services may involve integrations with third-party platforms such as Google, Meta, CRM systems, analytics tools, and advertising networks.",
            },
            {
              title: "Limitation of Liability",
              content:
                "PropStory shall not be held liable for any direct or indirect damages arising from the use of this website or services.",
            },
            {
              title: "Service Modifications",
              content:
                "We reserve the right to modify, suspend, or discontinue any part of the website or services without prior notice.",
            },
            {
              title: "Governing Law",
              content:
                "These Terms & Conditions shall be governed in accordance with applicable laws and regulations in India.",
            },
            {
              title: "Contact Information",
              content:
                "For any questions regarding these Terms & Conditions, users may contact us through the official contact details provided on the website.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-md border border-black/5 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition duration-500"
            >
              <h2 className="text-2xl font-semibold text-black mb-4 group-hover:translate-x-1 transition">
                {item.title}
              </h2>

              <p className="text-neutral-600 leading-8 text-[16px]">
                {item.content}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}