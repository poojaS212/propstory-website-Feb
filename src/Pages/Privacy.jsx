// Privacy.jsx

import Breadcrumb from "@/Components/Breadcrumb";

export function Privacy() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8f8f8] to-[#f1f1f1] py-20 px-4 md:px-8">
      <div className="absolute top-0 left-0 w-72 h-72 bg-black/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-16 pt-10">
<Breadcrumb />
      
         <h3 className="text-2xl font-semibold">
Privacy Policy
                  </h3>

          <div className="w-24 h-[2px] bg-black mx-auto mt-6"></div>
         
        </div>

        <div className="grid gap-8">

          {[
            {
              title: "Introduction",
              content:
                "At PropStory, we value your privacy and are committed to protecting the information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.",
            },
            {
              title: "Information We Collect",
              content:
                "We may collect information such as your name, email address, phone number, project details, inquiry information, and website usage analytics.",
            },
            {
              title: "How We Use Your Information",
              content:
                "The information collected helps us respond to inquiries, improve user experience, provide digital marketing services, CRM solutions, and communicate important updates.",
            },
            {
              title: "Cookies & Tracking Technologies",
              content:
                "Our website may use cookies and analytics tools to enhance browsing experience and monitor website performance.",
            },
            {
              title: "Data Protection",
              content:
                "We implement industry-standard security measures to protect your information against unauthorized access or misuse.",
            },
            {
              title: "Third-Party Services",
              content:
                "We may use trusted third-party platforms for analytics, CRM integrations, advertising services, and communication tools.",
            },
            {
              title: "Contact Us",
              content:
                "For any privacy-related questions, users may contact us through the official contact information available on our website.",
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