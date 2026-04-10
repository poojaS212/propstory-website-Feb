import React, { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import PageBanner from "../../Components/PageBanner"; 

const testimonials = [
  {
    name: "Sarah Mitchell",
    designation: "Marketing Director",
    company: "LogoIpsum",
    rating: 4.9,
    reviews: 40,
    message:
      "The team transformed our brand's online presence with creativity and precision. The results exceeded our expectations! Their digital marketing strategies helped us reach a broader audience and significantly boosted our sales.",
  },
  {
    name: "Rajesh Mehta",
    designation: "Marketing Head",
    company: "Mahindra Lifespaces",
    rating: 5,
    reviews: 30,
    message:
      "PropStory transformed our digital campaign performance. The quality of leads and campaign optimization exceeded our expectations across all metro markets.",
  },
  {
    name: "Ananya Sharma",
    designation: "VP – Sales & Marketing",
    company: "Kolte Patil Developers",
    rating: 4.8,
    reviews: 25,
    message:
      "Their strategic approach and data-driven insights helped us scale faster. The team understands real estate marketing deeply.",
  },
  {
    name: "Sarah",
    designation: "Marketing Director",
    company: "LogoIpsum",
    rating: 4.9,
    reviews: 40,
    message:
      "The team transformed our brand's online presence with creativity and precision. The results exceeded our expectations! Their digital marketing strategies helped us reach a broader audience and significantly boosted our sales.",
  },
  {
    name: "Rajesh",
    designation: "Marketing Head",
    company: "Mahindra Lifespaces",
    rating: 5,
    reviews: 30,
    message:
      "PropStory transformed our digital campaign performance. The quality of leads and campaign optimization exceeded our expectations across all metro markets.",
  },
  {
    name: "Ananya",
    designation: "VP – Sales & Marketing",
    company: "Kolte Patil Developers",
    rating: 4.8,
    reviews: 25,
    message:
      "Their strategic approach and data-driven insights helped us scale faster. The team understands real estate marketing deeply.",
  },

  
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  const handlePrev = () => {
    setActive(active === 0 ? testimonials.length - 1 : active - 1);
  };

  const handleNext = () => {
    setActive(active === testimonials.length - 1 ? 0 : active + 1);
  };

  return (
    <section className=" text-white py-20">
       <PageBanner
              title="Voices of Our Happy Clients"
              subtitle="Hear directly from the people who’ve experienced seamless and successful property solutions with us."
              bgImage="https://magicpage-dev.propstory.com/ImageUploads/ravi%20temp/1nnx5eapkmnsm3i2s.webp"
            />
      
       <div className="text-center my-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Trusted by Homeowners & Investors
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our clients trust PropStort for seamless property experiences and smart investment decisions
          </p>
        </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">

        {/* Left - Rating + Tagline */}
        <div className="bg-gray-900 rounded-3xl p-10 flex flex-col items-center justify-center gap-6">
          <div className="text-5xl font-bold">{t.rating}</div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-lime-400`}>
                ★
              </span>
            ))}
          </div>
          <p className="text-gray-300 text-center">
            ({t.reviews}+ Reviews)
          </p>
          <p className="mt-4 text-center text-lg font-semibold">
            Customer experiences that speak for themselves
          </p>
      
        </div>

        {/* Right - Testimonial Text */}
        <div className="relative bg-gray-900 rounded-3xl p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-700"></div>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-gray-400 text-sm">{t.designation}</p>
              </div>
            </div>
            <p className="text-gray-200 text-lg leading-relaxed">{t.message}</p>
          </div>

          {/* Navigation */}
          <div className="absolute bottom-6 right-6 flex gap-4">
            <button
              onClick={handlePrev}
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
            >
              <FiArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
