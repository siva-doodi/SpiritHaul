import { CheckCircle } from "lucide-react";

export default function AboutApproach() {
  const points = [
    "Understanding your business requirements",
    "Planning efficient logistics solutions",
    "Executing with precision and transparency",
    "Continuously improving through feedback",
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Approach
        </h2>

        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          We believe successful logistics starts with understanding.
          Our approach is built around collaboration, efficiency, and reliability
          at every stage of the supply chain.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
          {points.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 bg-[#f7f5f2] p-5 rounded-lg"
            >
              <CheckCircle className="w-6 h-6 text-red-600 mt-1" />
              <p className="text-gray-800">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
