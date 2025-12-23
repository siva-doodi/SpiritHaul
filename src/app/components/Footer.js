import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#ece9e4] w-full">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold text-red-600">
            SpiritHaul
          </h2>

          <p className="mt-4 text-gray-700 max-w-md leading-relaxed">
            Reliable transport, warehousing and fulfilment services designed
            to keep your supply chain moving smoothly and efficiently.
          </p>
        </div>

        {/* RIGHT – LINKS */}
        <div className="flex gap-12 md:justify-end">

          {/* COMPANY */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>
                <Link href="/" className="hover:text-red-600">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-600">About</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-red-600">Services</Link>
              </li>
              <li>
                <Link href="/opportunities" className="hover:text-red-600">Opportunities</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-600">Contact</Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>
                <Link href="/services#logistics" className="hover:text-red-600">
                  Logistics
                </Link>
              </li>
              <li>
                <Link href="/services#warehousing" className="hover:text-red-600">
                  Warehousing
                </Link>
              </li>
              <li>
                <Link href="/services#fulfilment" className="hover:text-red-600">
                  Fulfilment
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} SpiritHaul. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
