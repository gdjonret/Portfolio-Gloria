"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full relative z-50">
      <div className="flex w-full items-center px-6 sm:px-12 py-4">
        {/* Left Side */}
        <Link
          href="/"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-lg font-semibold tracking-wide hover:border-white/40 transition-colors"
        >
          G
        </Link>

        {/* Desktop Navigation - Right Side */}
        <ul className="ml-auto hidden md:flex items-center gap-6 text-sm font-medium tracking-wide">
          <li>
            <Link href="/#experience" className="hover:text-rose-300 transition-colors">
              Experience
            </Link>
          </li>
          <li>
            <Link href="/#work" className="hover:text-rose-300 transition-colors">
              Work
            </Link>
          </li>
          <li>
            <Link
              href="/resume"
              className="rounded-md border border-white/20 px-4 py-2 text-sm font-medium transition hover:bg-white/10 hover:border-white/40"
            >
              Resume
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="ml-auto md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-md border border-white/20 hover:border-white/40 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-2 focus:ring-offset-[#090b12]"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-slate-100 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-100 mt-1 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-100 mt-1 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#090b12] border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close Button */}
          <button
            onClick={closeMenu}
            className="self-end flex items-center justify-center w-10 h-10 rounded-md border border-white/20 hover:border-white/40 transition-colors mb-8 focus:outline-none focus:ring-2 focus:ring-rose-300"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col gap-6 text-base font-medium">
            <li>
              <Link
                href="/#experience"
                onClick={closeMenu}
                className="block py-2 hover:text-rose-300 transition-colors"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                onClick={closeMenu}
                className="block py-2 hover:text-rose-300 transition-colors"
              >
                Work
              </Link>
            </li>
            <li className="mt-4">
              <Link
                href="/resume"
                onClick={closeMenu}
                className="block rounded-md border border-white/20 px-4 py-3 text-center text-sm font-medium transition hover:bg-white/10 hover:border-white/40"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
