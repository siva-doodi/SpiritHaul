"use client";

export default function ContactMapSection() {
  return (
    <section className="bg-[#f7f5f2] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get in Touch With Us
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Talk to our team about your logistics, warehousing, or fulfilment needs.
          </p>
        </div>

        {/* Equal Height Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* MAP */}
          <div className="h-[560px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps?q=Bedfordshire,UK&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* CONTACT FORM */}
          <div className="h-[560px] bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Contact Us
              </h3>

              <p className="mt-2 text-gray-600">
                Fill out the form and our team will respond shortly.
              </p>

              <form className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-red-600 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-red-600 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-red-600 outline-none"
                />

                <textarea
                  rows="4"
                  placeholder="Tell us about your requirements"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-red-600 outline-none"
                />
              </form>
            </div>

            <button
              type="submit"
              className="mt-6 rounded-full bg-red-600 py-3 text-white font-semibold hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
