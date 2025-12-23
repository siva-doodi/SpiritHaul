import { Truck, Warehouse, Globe } from "lucide-react";

export default function IntroSection() {
  const stats = [
    {
      icon: <Truck className="w-7 h-7 text-red-600" />,
      value: "20+",
      label: "Years Experience",
    },
    {
      icon: <Warehouse className="w-7 h-7 text-red-600" />,
      value: "150k+",
      label: "Sq. Ft Warehousing",
    },
    {
      icon: <Globe className="w-7 h-7 text-red-600" />,
      value: "24/7",
      label: "UK Coverage",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-sm font-semibold tracking-widest text-red-600 uppercase">
            Trusted Logistics Partner
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Delivering Reliable Transport & Supply Chain Solutions
          </h2>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            We provide end-to-end logistics, warehousing, and fulfilment services
            designed to help businesses move goods efficiently, securely, and on time.
          </p>

          <p className="mt-4 text-gray-700">
            From single pallets to full-scale supply chain management, we work
            closely with our clients to deliver tailored solutions that grow with
            their business.
          </p>
        </div>

        {/* RIGHT STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((item) => (
            <div
              key={item.label}
              className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold text-gray-900">
                {item.value}
              </h3>

              <p className="mt-1 text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
