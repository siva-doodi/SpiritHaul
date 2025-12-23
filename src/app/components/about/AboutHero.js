export default function AboutHero() {
  return (
    <section
      className="relative h-[70vh] min-h-[520px] w-full bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('warehouse-logistics.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-red-400">
          About Us
        </span>

        <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
          Built on Experience.<br className="hidden sm:block" />
          Focused on Reliable Logistics.
        </h1>

        <p className="mt-8 text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
          SpiritHaul supports businesses across the UK with dependable
          transport, warehousing, and fulfilment solutions designed
          for efficiency, scalability, and long-term growth.
        </p>
      </div>
    </section>
  );
}
