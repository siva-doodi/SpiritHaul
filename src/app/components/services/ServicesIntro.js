import React from 'react';

export default function ServicesIntro() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Streamlined supply chains <br />
              powered by <span className="text-red-600">innovation.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We don't just move boxes; we move businesses. Our integrated approach ensures 
              that your logistics, warehousing, and fulfilment work in perfect harmony.
            </p>
            <div className="flex gap-8 border-t border-gray-100 pt-8">
              <div>
                <p className="text-3xl font-black text-gray-900">24/7</p>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Operation</p>
              </div>
              <div>
                <p className="text-3xl font-black text-gray-900">100%</p>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">UK Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}