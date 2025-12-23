"use client";

import { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaBars } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 relative">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-[var(--color-primary-text)]">
          Spirit<span className="text-[var(--color-tertiary-bg)]">Haul</span>
        </Link>

        <div className="flex gap-10 items-center">

          {/* DESKTOP NAV (UNCHANGED) */}
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

          {/* DESKTOP SOCIAL ICONS (UNCHANGED) */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#1877F2]">
              <FaFacebookF size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#E4405F]">
              <FaInstagram size={18} />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-black">
              <FaTwitter size={18} />
            </a>
          </div>

          {/* MOBILE MENU ICON */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            <FaBars size={22} />
          </button>

        </div>
      </div>

      {/* MOBILE MENU (ONLY ON MOBILE) */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col px-6 py-4 gap-4 text-md font-semibold text-gray-700">
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/opportunities" onClick={() => setOpen(false)}>Opportunities</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
