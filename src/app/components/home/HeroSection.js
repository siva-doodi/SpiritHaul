import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative h-[90vh] w-full bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage:
          "url('truck.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 text-center text-white">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Reliable Transport & Logistics
        </h1>

        <p className="mt-4 text-base md:text-lg text-gray-200">
          Fast, safe, and trusted transportation solutions across cities and states.
          Delivering your cargo with care and commitment.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/about"
            className="px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-md border border-white text-white font-semibold hover:bg-white hover:text-black transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
