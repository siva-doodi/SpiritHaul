import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-600 via-red-700 to-red-800 px-8 py-16 text-center text-white shadow-xl">

          {/* Decorative shapes */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-black/10 rounded-full"></div>

          {/* Content */}
          <h2 className="relative z-10 text-3xl md:text-4xl font-bold">
            Looking for the Right Logistics Solution?
          </h2>

          <p className="relative z-10 mt-6 max-w-3xl mx-auto text-lg text-red-100 leading-relaxed">
            Every business is different. We take the time to understand your
            requirements and deliver tailored logistics, warehousing, and
            fulfilment solutions that help your operations run smoothly and grow faster.
          </p>

          {/* Buttons */}
          <div className="relative z-10 mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-white text-red-700 font-semibold hover:bg-gray-100 transition"
            >
              Let’s Talk
            </Link>

            <Link
              href="/services"
              className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-red-700 transition"
            >
              Explore Services
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
