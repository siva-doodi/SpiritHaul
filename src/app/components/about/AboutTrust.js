import { ShieldCheck, Clock, Users } from "lucide-react";

export default function AboutTrust() {
  const trustPoints = [
    {
      icon: <ShieldCheck className="w-7 h-7 text-red-600" />,
      title: "Reliable & Secure",
      desc: "We treat every shipment as a priority, ensuring safety and transparency at all times.",
    },
    {
      icon: <Clock className="w-7 h-7 text-red-600" />,
      title: "On-Time Delivery",
      desc: "Operational efficiency allows us to meet deadlines without compromising quality.",
    },
    {
      icon: <Users className="w-7 h-7 text-red-600" />,
      title: "Client-Focused",
      desc: "Long-term partnerships built on trust, communication, and results.",
    },
  ];

  return (
    <section className="bg-[#f7f5f2] py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Businesses Trust SpiritHaul
        </h2>

        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          Our reputation is built on consistency, reliability,
          and a commitment to delivering real value to our clients.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustPoints.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition text-left"
            >
              {item.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
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
