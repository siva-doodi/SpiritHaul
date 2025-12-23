export default function AboutTruckHighlight() {
  return (
    <section
      className="relative h-[65vh] min-h-[480px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('truck3.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
        <div className="max-w-3xl">
          <div className="w-16 h-1 bg-red-600 mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Reliable Road Transport<br />
            Across the United Kingdom
          </h2>
          <p className="mt-6 text-lg text-gray-200 leading-relaxed">
            Our modern fleet and experienced drivers deliver dependable
            road transport solutions, ensuring your goods move safely,
            efficiently, and on time — every time.
          </p>
        </div>
      </div>
    </section>
  );
}
