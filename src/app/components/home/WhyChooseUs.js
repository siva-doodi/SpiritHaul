import { Truck, Clock, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Competitive Pricing",
      desc: "We offer cost-effective transport and logistics solutions without compromising on quality or reliability.",
      icon: <Truck className="w-8 h-8 text-indigo-600" />,
    },
    {
      title: "Seamless Operations",
      desc: "Our integrated systems ensure smooth coordination from pickup to final delivery, every single time.",
      icon: <Clock className="w-8 h-8 text-indigo-600" />,
    },
    {
      title: "Trusted & Secure",
      desc: "Your cargo is handled with care, safety, and complete transparency throughout the journey.",
      icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose Us
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-lg">
          We combine experience, technology, and dedication to deliver logistics
          solutions that help businesses move faster, smarter, and more efficiently.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 mx-auto rounded-full bg-indigo-50">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

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
