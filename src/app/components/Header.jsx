import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-[var(--color-primary-text)]">
          Spirit<span className="text-[var(--color-tertiary-bg)]">Haul</span>
        </Link>

        <div className="flex gap-10 items-center">

          {/* NAVIGATION */}
          <nav className="hidden md:flex gap-8 text-md font-bold text-gray-700">
            <Link href="/about" className="hover:text-[var(--color-primary-text)]">
              About
            </Link>

            <Link href="/services" className="hover:text-[var(--color-primary-text)]">
              Services
            </Link>

            <Link href="/opportunities" className="hover:text-[var(--color-primary-text)]">
              Opportunities
            </Link>

            <Link href="/contact" className="hover:text-[var(--color-primary-text)]">
              Contact Us
            </Link>
          </nav>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#1877F2]"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#E4405F]"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black"
            >
              <FaTwitter size={18} />
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}