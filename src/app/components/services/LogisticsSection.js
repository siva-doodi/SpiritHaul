import React from 'react';
import { Truck, CheckCircle2, MoveRight } from "lucide-react";

export default function LogisticsSection() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* TEXT CONTENT */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 text-red-600 font-bold tracking-widest uppercase text-sm mb-4">
            <Truck size={20} /> National Transport
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Reliable Haulage & <br/>Distribution</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Our modern fleet of HGVs and smaller vans ensures your cargo reaches its 
            destination safely and on schedule, regardless of size or complexity.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {['Next-Day Delivery', 'Pallet Distribution', 'Full Load (FTL)', 'Tracked Delivery'].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle2 className="text-red-600 w-5 h-5" />
                <span className="font-semibold text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <button className="flex items-center gap-2 font-bold text-gray-900 hover:text-red-600 transition-colors group">
            View Our Fleet Capability <MoveRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* CREATIVE IMAGE COMPOSITION */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              alt="Logistics truck" 
            />
          </div>
          {/* Overlapping Detail Image */}
          <div className="absolute -bottom-10 -left-10 w-2/3 h-48 rounded-2xl overflow-hidden border-8 border-gray-50 shadow-xl hidden md:block">
             <img 
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-full object-cover" 
              alt="Truck at loading bay" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}