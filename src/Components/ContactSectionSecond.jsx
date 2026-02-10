import HeadingBadge from "@/Components/HeadingBadge";

const ContactSectionSecond = () => {
  return (
    <section className="w-full bg-gray-100 py-20 px-6">

      {/* ✅ Heading FIRST */}
      <div className="max-w-6xl mx-auto mb-16 text-center md:text-left">
        <HeadingBadge text="CONTACT US" />

        <h2 className="mt-4 text-4xl md:text-5xl font-[Playfair_Display] font-medium text-[#2b2b2b] leading-[1.15] max-w-3xl">
          Connect With Our Team of Experts
        </h2>
      </div>

      {/* ✅ Contact Box AFTER Heading */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-3 overflow-hidden">

        {/* LEFT – Contact Info */}
        <div className="relative bg-[#071c2c] text-white p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold">
              Contact Information
            </h3>

            <p className="mt-2 text-sm text-white/70 tracking-wide">
              We’d love to hear from you. Reach out for collaborations, inquiries, or premium marketing solutions.
            </p>

            <div className="mt-10 space-y-6 text-sm md:text-base">
              <div className="flex items-center gap-4">
                <span>📞</span>
                  <a href="tel:+919167510950"><span>+91 9167510950</span></a>
              </div>

              <div className="flex items-center gap-4">
                <span>✉️</span>
                <a
                  href="mailto:ashish.mahajan@propstory.com"
                  className="underline hover:text-yellow-300 transition"
                >
                  ashish.mahajan@propstory.com
                </a>
              </div>
        
            </div>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 mt-12">
            <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center text-black font-semibold cursor-pointer">
              X
            </div>
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black font-semibold cursor-pointer">
              in
            </div>
            <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center text-black font-semibold cursor-pointer">
              ▶
            </div>
          </div>

          {/* Decorative circles */}
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />
          <div className="absolute bottom-16 right-16 w-20 h-20 bg-white/10 rounded-full" />
        </div>

        {/* RIGHT – Form */}
        <div className="md:col-span-2 p-10">
          <form className="space-y-8">

            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-500">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 focus:border-black outline-none py-2"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 focus:border-black outline-none py-2"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-500">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border-b border-gray-300 focus:border-black outline-none py-2"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full border-b border-gray-300 focus:border-black outline-none py-2"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm text-gray-500 mb-4">
                Select Subject?
              </label>

              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <label className="flex items-center gap-2">
                  <input type="radio" name="subject" defaultChecked />
                  General Inquiry
                </label>

                <label className="flex items-center gap-2">
                  <input type="radio" name="subject" />
                  Support
                </label>

                <label className="flex items-center gap-2">
                  <input type="radio" name="subject" />
                  Partnership
                </label>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-500">
                Message
              </label>

              <textarea
                placeholder="Write your message..."
                className="w-full border-b border-gray-300 focus:border-black outline-none py-2 resize-none"
                rows="3"
              />
            </div>

            {/* Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#071c2c] text-white px-8 py-3 rounded-lg shadow-md hover:bg-black transition"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionSecond;
