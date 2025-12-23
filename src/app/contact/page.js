export default function ContactPage() {
  return (
    <section className="bg-[#f7f5f2] py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact Us
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
            Get in touch with our team to discuss transport, warehousing,
            or fulfilment solutions tailored to your business needs.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* CONTACT INFO */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900">
              Contact Information
            </h2>

            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                <span className="font-semibold text-gray-900">Phone:</span>{" "}
                +44 20 1234 5678
              </p>

              <p>
                <span className="font-semibold text-gray-900">Email:</span>{" "}
                info@spirithaul.co.uk
              </p>

              <p>
                <span className="font-semibold text-gray-900">Location:</span>{" "}
                United Kingdom – Nationwide Coverage
              </p>
            </div>

            <p className="mt-8 text-gray-600">
              Our team is available during business hours and will respond
              to your enquiry as quickly as possible.
            </p>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900">
              Send Us a Message
            </h2>

            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <textarea
                rows="4"
                placeholder="Tell us about your requirements"
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <button
                type="submit"
                className="w-full mt-4 rounded-full bg-red-600 py-3 text-white font-semibold hover:bg-red-700 transition"
              >
                Submit Enquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
