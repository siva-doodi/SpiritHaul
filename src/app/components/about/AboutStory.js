import { Truck, Warehouse, Package } from "lucide-react";

export default function AboutStory() {
  const points = [
    {
      icon: <Truck className="w-6 h-6 text-red-600" />,
      title: "End-to-End Transport",
      desc: "From local distribution to nationwide delivery, we ensure your goods move safely and on time.",
    },
    {
      icon: <Warehouse className="w-6 h-6 text-red-600" />,
      title: "Secure Warehousing",
      desc: "Strategically located facilities offering scalable and secure storage solutions.",
    },
    {
      icon: <Package className="w-6 h-6 text-red-600" />,
      title: "Smart Fulfilment",
      desc: "Complete fulfilment services including picking, packing, distribution, and reverse logistics.",
    },
  ];

  return (
    <section className="bg-[#f7f5f2] py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT – MESSAGE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Built on Experience, Driven by Reliability
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed text-lg">
            With years of industry experience, SpiritHaul was built to solve
            real logistics challenges faced by growing businesses.
            We don’t believe in one-size-fits-all solutions — we listen,
            plan, and deliver services that align with your goals.
          </p>

          <p className="mt-4 text-gray-700">
            Our team combines operational expertise with modern systems to
            deliver dependable results you can trust.
          </p>
        </div>

        {/* RIGHT – HIGHLIGHTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {points.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
