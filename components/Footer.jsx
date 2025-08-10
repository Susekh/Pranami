import { Facebook, Instagram, Twitter, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f8fcfb] border-t border-[#e7f3f0] text-[#4d9987] text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-center">
        {/* Left Section: Navigation Links (on larger screens) */}
        <nav className="flex flex-wrap justify-center gap-6 text-base font-medium md:order-2">
          <a href="#about" className="hover:text-[#15cfa4] transition">
            About
          </a>
          <a href="#initiatives" className="hover:text-[#15cfa4] transition">
            Initiatives
          </a>
          <a href="#volunteer" className="hover:text-[#15cfa4] transition">
            Volunteer
          </a>
          <a href="#testimonials" className="hover:text-[#15cfa4] transition">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-[#15cfa4] transition">
            Contact
          </a>
        </nav>

        {/* Right Section: Social Media Icons (on larger screens) */}
        <div className="flex justify-center gap-5 md:order-3 md:flex-grow-0">
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-[#15cfa4] transition"
          >
            <Twitter size={22} />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-[#15cfa4] transition"
          >
            <Facebook size={22} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-[#15cfa4] transition"
          >
            <Instagram size={22} />
          </a>
        </div>

        {/* Divider (hidden on larger screens, present on smaller screens) */}
        <div className="w-full h-px bg-[#e7f3f0] my-4 md:hidden" />

        {/* Bottom Section: Address & Copyright (always centered or left-aligned depending on layout) */}
        <div className="text-center text-sm space-y-2 md:text-left md:order-1 md:flex-grow">
          <p>© Pranami Charity Foundation. All rights reserved.</p>
          <p className="inline-flex items-center justify-center gap-1 text-[#15cfa4]">
            <MapPin size={16} /> F-2, Chandaka Industrial Estate In front of
            Infocity, Infocity Chandrasekharpur, Bhubaneshwar Odisha - 751024
          </p>
        </div>
      </div>
    </footer>
  );
}
