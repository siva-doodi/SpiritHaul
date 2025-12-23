import React from 'react';
import { Package, Zap, BarChart } from "lucide-react";

export default function FulfilmentSection() {
  return (
    <section className="py-24 bg-gray-900 text-white rounded-[3rem] mx-6 my-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 italic text-red-500 tracking-tighter uppercase">Speed to Market</h2>
          <h3 className="text-4xl font-bold mb-8">E-commerce Fulfilment <br/>Built for Scale</h3>
          <p className="text-gray-400 text-lg mb-10">
            We integrate with your storefront (Shopify, Amazon, eBay) to automate your 
            shipping. Focus on sales, we'll handle the pick and pack.
          </p>
          <div className="space-y-4">
             {[
                { icon: <Zap size={18}/>, text: "Same-day dispatch for orders before 2PM" },
                { icon: <Package size={18}/>, text: "Branded unboxing experiences" },
                { icon: <BarChart size={18}/>, text: "Real-time stock level synchronization" }
             ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <span className="text-red-500">{item.icon}</span>
                    <span className="font-medium">{item.text}</span>
                </div>
             ))}
          </div>
        </div>
        <div className="relative">
            <img 
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?q=80&w=1974&auto=format&fit=crop" 
                className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
                alt="Fulfilment center" 
            />
            <div className="absolute -top-4 -right-4 bg-red-600 p-6 rounded-2xl font-black text-2xl shadow-xl">
                UK WIDE
            </div>
        </div>
      </div>
    </section>
  );
}