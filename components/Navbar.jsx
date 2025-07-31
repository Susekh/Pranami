"use client";
import { HeartHandshake, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e7f3f0] bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center gap-3 text-[#0e1b18]">
          <HeartHandshake size={26} className="text-[#15cfa4]" aria-hidden="true" />
          <h1 className="text-lg font-bold tracking-tight">
            Pranami Charity Foundation
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <div className="flex gap-7 text-sm font-medium text-neutral-700">
            <a href="#about" className="hover:text-[#15cfa4] transition">About</a>
            <a href="#initiatives" className="hover:text-[#15cfa4] transition">Initiatives</a>
            <a href="#volunteer" className="hover:text-[#15cfa4] transition">Volunteer</a>
            <a href="#testimonials" className="hover:text-[#15cfa4] transition">Testimonials</a>
            <a href="#contact" className="hover:text-[#15cfa4] transition">Contact</a>
          </div>
          <button className="ml-6 h-10 px-5 bg-[#15cfa4] text-white rounded-full font-semibold hover:bg-[#13b892] transition">
            Donate
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-neutral-800" aria-label="Open menu">
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
}
