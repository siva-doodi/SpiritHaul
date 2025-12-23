import React from 'react';

export default function ServicesHero() {
  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden bg-gray-900">
      <img 
        src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop" 
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        alt="UK Logistics background"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-[0.2em] uppercase bg-red-600 text-white rounded-sm">
          Premier UK Logistics
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight max-w-4xl">
          Moving Your Business <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
            Without Limits.
          </span>
        </h1>
        <p className="mt-8 text-xl text-gray-300 max-w-2xl leading-relaxed border-l-4 border-red-600 pl-6">
          From high-velocity transport to scalable warehousing, we provide the infrastructure 
          modern businesses need to thrive in the UK market.
        </p>
      </div>
    </section>
  );
}