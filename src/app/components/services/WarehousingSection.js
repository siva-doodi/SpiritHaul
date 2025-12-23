import React from 'react';
import { Warehouse, ShieldCheck, MapPin } from "lucide-react";

export default function WarehousingSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* IMAGE SIDE */}
        <div className="relative">
          <div className="h-[550px] rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Warehouse interior" />
          </div>
          {/* Floating Feature Card */}
          <div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-red-600 text-white p-8 rounded-3xl shadow-2xl hidden lg:block max-w-[240px]">
            <Warehouse size={40} className="mb-4" />
            <h3 className="text-2xl font-bold mb-2">100k+</h3>
            <p className="text-red-100 text-sm">Square feet of high-security, climate-controlled storage.</p>
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div>
          <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Storage Solutions</span>
          <h2 className="mt-4 text-4xl font-extrabold text-gray-900 leading-tight">Strategic Hubs for Your Inventory</h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Our warehouses aren't just buildings; they are smart hubs. Located near the UK's major 
            arterial motorways, we provide the perfect launching pad for your products.
          </p>
          <div className="mt-10 space-y-8">
            <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-red-600" />
                </div>
                <div>
                    <h4 className="font-bold text-gray-900">Advanced Security</h4>
                    <p className="text-gray-500 text-sm">24/7 CCTV, gated access, and rigorous inventory controls.</p>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-red-600" />
                </div>
                <div>
                    <h4 className="font-bold text-gray-900">Prime UK Locations</h4>
                    <p className="text-gray-500 text-sm">Centralized locations to reduce lead times and fuel costs.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}