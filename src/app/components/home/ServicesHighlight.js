"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Warehouse, Truck, Package } from "lucide-react";

const services = [
  {
    title: "Warehousing",
    description:
      "Our warehousing portfolio now comprises over 150,000 sq. ft across three strategically located sites in Bedfordshire and Staffordshire.",
    subText:
      "Discover how our warehousing solutions can help you.",
    icon: <Warehouse className="w-28 h-28 text-red-600" />,
    link: "/services/warehousing",
  },
  {
    title: "Logistics",
    description:
      "We provide a professional end-to-end logistics service, ensuring high-quality, cost-effective transport solutions for every requirement.",
    subText:
      "Discover how our logistics solutions can help you.",
    icon: <Truck className="w-28 h-28 text-red-600" />,
    link: "/services/logistics",
  },
  {
    title: "Fulfilment",
    description:
      "Our fulfilment solutions cover inventory management, storage, picking, packing, re-working, distribution, and reverse logistics.",
    subText:
      "Discover how our fulfilment solutions can help you.",
    icon: <Package className="w-28 h-28 text-red-600" />,
    link: "/services/fulfilment",
  },
];

export default function ServicesCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const service = services[active];

  return (
    <section className="bg-[#f7f5f2] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700">

        {/* LEFT CONTENT */}
        <div key={service.title} className="animate-fadeIn">
          <span className="text-sm font-semibold tracking-widest text-red-600 uppercase">
            Services
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            {service.title}
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            {service.description}
          </p>

          <p className="mt-4 font-medium text-gray-800">
            {service.subText}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition"
            >
              Contact
            </Link>

            <Link
              href={service.link}
              className="px-8 py-3 rounded-full border-2 border-red-600 text-red-600 font-semibold hover:bg-red-600 hover:text-white transition"
            >
              More
            </Link>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full"></div>
            <div className="relative flex items-center justify-center w-64 h-64 rounded-full bg-white shadow-xl">
              {service.icon}
            </div>
          </div>
        </div>
      </div>

      {/* INDICATORS */}
      <div className="mt-12 flex justify-center gap-3">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`w-3 h-3 rounded-full transition ${
              active === index ? "bg-red-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
