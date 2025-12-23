import React from 'react';
import { Warehouse, ShieldCheck, MapPin, ArrowRight } from "lucide-react";

export default function AboutWarehousingCreative() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Decorative Background Element (Right side blob) */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-red-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 hidden lg:block pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT – CREATIVE IMAGE COMPOSITION */}
          <div className="relative">
            {/* Main Warehouse Image */}
            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl z-10">
              <img
                src="warehouseimg2.jpg"
                alt="Inside a modern, expansive logistics warehouse"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              {/* Subtle gradient overlay for better text contrast if needed later */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Overlapping Truck Image (The 'Transport' connection) */}
            <div className="absolute -bottom-12 -right-6 lg:-right-12 w-2/3 lg:w-3/5 h-64 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20 border-[6px] border-white">
              <img
                src="truck.jpg"
                alt="Logistics truck departing a loading bay"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Decorative dot pattern behind images */}
            <div className="absolute top-12 -left-12 w-40 h-40 bg-red-100 rounded-full -z-10 opacity-50 blur-2xl"></div>
          </div>


          {/* RIGHT – CONTENT */}
          <div className="lg:pl-8 mt-16 lg:mt-0">
             <span className="inline-flex items-center px-3 py-1 text-sm font-bold tracking-widest text-red-700 uppercase bg-red-100 rounded-full mb-6">
               Integrated Logistics
             </span>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.15]">
              Secure & Scalable Warehousing <span className="text-red-600">Across the UK</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              More than just storage. Our warehousing facilities act as strategic hubs for modern supply chains, offering flexible space, efficient handling, and seamless technological integration with our UK transport network.
            </p>

            <div className="mt-10 space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                  <Warehouse className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Purpose-Built Facilities</h3>
                  <p className="mt-1 text-gray-600">
                    Modern racking and open floor space suitable for pallets, cartons, and oversized goods.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Strategic UK Locations</h3>
                  <p className="mt-1 text-gray-600">
                    Positioned near major motorway networks for faster nationwide injection and distribution.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                  <ShieldCheck className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Secure Operations</h3>
                  <p className="mt-1 text-gray-600">
                    24/7 CCTV monitoring, access controls, and experienced handling staff ensure asset safety.
                  </p>
                </div>
              </div>
            </div>

             {/* Optional "Learn More" Link */}
            <div className="mt-10">
              <a href="/services/warehousing" className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition group">
                Explore Warehousing Solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}