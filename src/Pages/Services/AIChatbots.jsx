import React from "react";
import PageBanner from "../../Components/PageBanner"; 

import {
  MessageSquareText,
  Bot,
  Clock3,
  Users,
  CalendarCheck,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import Breadcrumb from "@/Components/Breadcrumb";

const chatbotFeatures = [
  "Instantly respond to enquiries",
  "Capture and qualify leads automatically",
  "Schedule appointments & site visits",
  "Share brochures, pricing & project details",
  "Automate repetitive customer queries",
  "Improve response time and engagement",
  "Reduce manual support workload",
];

const stats = [
  {
    icon: Clock3,
    title: "24/7 Availability",
    desc: "Never miss a customer enquiry again.",
  },
  {
    icon: Users,
    title: "Better Lead Quality",
    desc: "Capture and qualify leads instantly.",
  },
  {
    icon: CalendarCheck,
    title: "Automated Scheduling",
    desc: "Book appointments and site visits effortlessly.",
  },
];

export default function AIChatbots() {
  return (
<>


   
    <section className="relative overflow-hidden bg-[#F7F5ED] text-white py-24 md:px-6 px-0">
  <PageBanner
                          title="Smart Support, Anytime."
                          subtitle="See how our AI chatbot solutions help businesses automate conversations and improve customer experience."
                          bgImage="https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmnsm3i2s.webp"
                        />
                        <Breadcrumb />
      <div className="relative max-w-7xl mx-auto mt-20 px-6">
       
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-black text-sm font-medium mb-6">
              <Bot size={16} />
              AI Chatbot Solutions
            </div>

            <h2 className="text-4xl text-black md:text-5xl font-bold leading-tight mb-6">
              Smart Conversations. <br />
              Faster Responses. <br />
              <span className="text-black ">Better Conversions.</span>
            </h2>

            <p className="text-black text-lg leading-relaxed mb-8">
              AI-powered chatbots help businesses automate customer
              interactions, capture leads instantly, and improve customer
              experience across websites, WhatsApp, Instagram, and Facebook.
            </p>

            <p className="text-black leading-relaxed mb-8">
              At PropStory, we create intelligent chatbot solutions designed to
              engage users, qualify leads, and drive business growth 24/7.
            </p>
           
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="text-black bg-[#cee6b1] backdrop-blur-xl border border-white rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-400/15 flex items-center justify-center">
                  <MessageSquareText className="text-black" size={24} />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">
                    What Our Chatbots Can Do
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {chatbotFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-black border border-white/5 rounded-xl px-4 py-3  transition-all"
                  >
                    <BadgeCheck
                      className="text-black  mt-0.5 shrink-0"
                      size={20}
                    />

                    <p className="text-black ">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why Businesses Need AI Chatbots */}
        <div className="mt-24">
          <div className="max-w-3xl">
            <h2 class="text-[34px] md:text-[48px] font-semibold text-gray-900 leading-tight max-w-3xl mx-auto">  Why Businesses Need AI Chatbots</h2>
         

            <p className="text-black text-lg leading-relaxed mb-5">
              Today’s customers expect instant communication. Delayed responses
              often result in missed opportunities and lower conversions.
            </p>

            <p className="text-black leading-relaxed">
              AI chatbots help businesses stay available 24/7 while handling
              multiple conversations simultaneously. We build chatbot systems
              that not only automate conversations but also improve lead
              quality, customer engagement, and overall business efficiency.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="text-black bg-white border border-white/10 rounded-2xl p-6 hover:border-cyan-400/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-5">
                    <Icon className="text-black " size={26} />
                  </div>

                  <h4 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h4>

                  <p className="text-black leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-[#DCEBFA] p-10 md:p-14">
            <div className="max-w-3xl">
              <h3 className="text-3xl md:text-4xl text-black font-bold leading-tight mb-5">
                Ready to Automate Your Customer Engagement?
              </h3>

              <p className="text-black text-lg leading-relaxed mb-8">
                Build smarter customer experiences with AI-powered chatbot
                solutions tailored for your business growth.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}