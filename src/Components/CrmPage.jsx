import React from "react";
import { HashLink } from "react-router-hash-link";
import PageBanner from "./PageBanner"; 

import {
  Database,
  Workflow,
  Users,
  Settings2,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Layers3,
} from "lucide-react";
import Breadcrumb from "./Breadcrumb";

const crmServices = [
  "CRM Setup & Configuration",
  "Sales Pipeline Automation",
  "Lead Management Systems",
  "Workflow Automation",
  "CRM Migration & Integration",
];

const whyChooseUs = [
  "Customized CRM implementation",
  "Business-focused automation strategies",
  "Seamless third-party integrations",
  "Scalable CRM solutions",
  "Performance-driven approach",
];

export default function CrmPage() {
  return (
    <section className="bg-[#F7F5ED] py-24 md:px-6 overflow-hidden">
       <PageBanner
                    title="Better Workflow, Better Relationships."
                    subtitle="Discover how our CRM solutions streamline processes and manage customer interactions efficiently."
                    bgImage="https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmnsm3i2s.webp"
                  />
            <Breadcrumb />  
      {/* HERO */}
      
      <div className="px-6 md:px-12 lg:px-20 pt-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DCEBFA] text-black text-sm font-medium mb-8">
                <Settings2 size={16} />
                CRM Implementation Services
              </div>

              <h1 className="text-[42px] md:text-[72px] leading-[0.95] tracking-[-2px] font-semibold text-gray-900 mb-8">
                Manage Leads <br />
                Close Faster <br />
                Grow Smarter
              </h1>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mb-6">
                A powerful CRM system helps businesses manage leads, automate
                sales processes, improve team productivity, and build stronger
                customer relationships.
              </p>

              <p className="text-black leading-relaxed max-w-2xl">
                At PropStory, we provide customized CRM solutions tailored to
                your business processes, ensuring seamless operations and better
                decision-making.
              </p>
            </div>

            {/* Right Visual Layout */}
         {/* Right Visual Layout */}
<div className="lg:col-span-5 relative mt-10 lg:mt-0">
  
  {/* MOBILE LAYOUT */}
  <div className="flex flex-col gap-5 lg:hidden">
    
    {/* Main Circle */}
    <div className="bg-[#cee6b1] rounded-[32px] p-8 flex items-center justify-center">
      <div className="w-[220px] h-[220px] rounded-full bg-white flex flex-col items-center justify-center text-center p-6">
        <Database size={42} className="text-black mb-4" />

        <h3 className="text-2xl font-semibold text-black mb-2">
          Smart CRM
        </h3>

        <p className="text-sm text-gray-600">
          Organize customer data and automate workflows.
        </p>
      </div>
    </div>

    {/* Cards */}
    <div className="grid gap-5">
      <div className="bg-white rounded-3xl p-5 shadow-sm">
        <Workflow className="mb-4 text-black" size={28} />

        <h4 className="text-lg font-semibold text-black mb-2">
          Workflow Automation
        </h4>

        <p className="text-sm text-gray-600 leading-relaxed">
          Streamline repetitive sales and follow-up tasks.
        </p>
      </div>

      <div className="bg-[#DCEBFA] rounded-3xl p-5 shadow-sm">
        <Users className="mb-4 text-black" size={28} />

        <h4 className="text-lg font-semibold text-black mb-2">
          Better Customer Tracking
        </h4>

        <p className="text-sm text-gray-700 leading-relaxed">
          Track interactions and improve customer management.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-5 shadow-sm">
        <BarChart3 className="mb-4 text-black" size={28} />

        <h4 className="text-lg font-semibold text-black mb-2">
          Sales Insights
        </h4>

        <p className="text-sm text-gray-600 leading-relaxed">
          Improve decision-making with organized business data.
        </p>
      </div>
    </div>
  </div>

  {/* DESKTOP LAYOUT */}
  <div className="hidden lg:block relative h-[520px]">

    {/* Main Circle */}
    <div className="absolute top-10 right-10 w-[320px] h-[320px] rounded-full bg-[#cee6b1] flex items-center justify-center">
      <div className="w-[220px] h-[220px] rounded-full bg-white flex flex-col items-center justify-center text-center p-6">
        <Database size={42} className="text-black mb-4" />

        <h3 className="text-2xl font-semibold text-black mb-2">
          Smart CRM
        </h3>

        <p className="text-sm text-gray-600">
          Organize customer data and automate workflows.
        </p>
      </div>
    </div>

    {/* Floating Blocks */}
    <div className="absolute top-0 -left-20 bg-white rounded-3xl p-4 w-[220px] shadow-sm">
      <Workflow className="mb-4 text-black" size={28} />

      <h4 className="text-lg font-semibold text-black mb-2">
        Workflow Automation
      </h4>

      <p className="text-sm text-gray-600 leading-relaxed">
        Streamline repetitive sales and follow-up tasks.
      </p>
    </div>

    <div className="absolute bottom-14 left-20 bg-[#DCEBFA] rounded-3xl p-4 w-[240px] shadow-sm">
      <Users className="mb-4 text-black" size={28} />

      <h4 className="text-lg font-semibold text-black mb-2">
        Better Customer Tracking
      </h4>

      <p className="text-sm text-gray-700 leading-relaxed">
        Track interactions and improve customer management.
      </p>
    </div>

    <div className="absolute top-0 -right-20 bg-white rounded-3xl p-4 w-[220px] shadow-sm">
      <BarChart3 className="mb-4 text-black" size={28} />

      <h4 className="text-lg font-semibold text-black mb-2">
        Sales Insights
      </h4>

      <p className="text-sm text-gray-600 leading-relaxed">
        Improve decision-making with organized business data.
      </p>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>

      {/* SERVICES STRIP */}
      <div className="mt-20 border-y border-black/10 bg-white backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10">
          <div className="flex flex-wrap justify-center gap-4 md:gap-5">
            {crmServices.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-[#F7F5ED]"
              >
                <CheckCircle2 className="text-black" size={18} />

                <span className="text-black font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY CRM */}
      <div className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <h2 className="text-[36px] md:text-[56px] leading-[1] tracking-[-1px] font-semibold text-gray-900 mb-8">
              Why Businesses Need CRM Implementation
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Without a structured CRM system, businesses often struggle with
              scattered data, missed follow-ups, and inefficient sales tracking.
            </p>

            <p className="text-gray-600 leading-relaxed">
              A well-implemented CRM helps streamline operations, improve
              response time, and enhance customer experience.
            </p>
          </div>

          {/* Right Timeline Style */}
          <div className="relative pl-10 border-l border-black/10 space-y-12">
            <div className="relative">
              <div className="absolute -left-[52px] top-0 w-6 h-6 rounded-full bg-[#cee6b1] border-4 border-[#F7F5ED]"></div>

              <h3 className="text-2xl font-semibold text-black mb-3">
                Centralized Data
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Store customer interactions, leads, and workflows in one
                organized system.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[52px] top-0 w-6 h-6 rounded-full bg-[#DCEBFA] border-4 border-[#F7F5ED]"></div>

              <h3 className="text-2xl font-semibold text-black mb-3">
                Better Team Productivity
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Automate repetitive tasks and improve workflow efficiency across
                teams.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[52px] top-0 w-6 h-6 rounded-full bg-[#cee6b1] border-4 border-[#F7F5ED]"></div>

              <h3 className="text-2xl font-semibold text-black mb-3">
                Improved Customer Experience
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Respond faster, manage leads efficiently, and improve customer
                relationships.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US + CTA */}
      <div className="px-6 md:px-12 lg:px-20 py-24 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
          {/* Left */}
          <div className="bg-[#cee6b1] rounded-[40px] p-8 md:p-12">
            <h2 className="text-[36px] md:text-[48px] font-semibold text-black mb-10">
              Why Choose Us
            </h2>

            <div className="space-y-5">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <CheckCircle2
                    className="text-black mt-1 shrink-0"
                    size={20}
                  />

                  <p className="text-black text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right CTA */}
          <div className="flex flex-col justify-between align-items-center">
            <div>
              <h2 className="text-[40px] md:text-[64px] leading-[0.95] tracking-[-2px] font-semibold text-gray-900 my-8">
                Ready to Simplify Your Sales & Customer Management?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                Transform your business operations with smart CRM implementation
                solutions designed for scalability and growth.
              </p>
            </div>

            <div className="mt-12">
              <HashLink smooth to="/#contactseo">
                <button className="group inline-flex items-center gap-3 bg-black text-white px-7 py-4 rounded-2xl font-medium hover:gap-5 transition-all duration-300">
                  Talk To Our Team

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}