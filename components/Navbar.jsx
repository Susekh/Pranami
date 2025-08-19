"use client";
import { HeartHandshake, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About", id: "about" },
    { href: "#initiatives", label: "Initiatives", id: "initiatives" },
    { href: "#volunteer", label: "Volunteer", id: "volunteer" },
    { href: "#testimonials", label: "Testimonials", id: "testimonials" },
    { href: "#contact", label: "Contact", id: "contact" }
  ];

  useEffect(() => {
    const sections = navLinks.map(link => link.id);

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -80% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) observer.unobserve(element);
      });
    };
  }, [navLinks]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false); // Close mobile menu when clicking link
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e7f3f0] bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 text-[#0e1b18]">
          <Image height={100} width={100} className="w-16 lg:w-24" alt="logo" src={"/favicon.png"} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <div className="flex gap-7 text-sm font-medium text-neutral-700">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors duration-200 relative ${
                  activeSection === link.id
                    ? "text-[#15cfa4] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-[#15cfa4]"
                    : "hover:text-[#15cfa4]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <button className="ml-6 h-10 px-5 bg-[#15cfa4] text-white rounded-full font-semibold hover:bg-[#13b892] transition-colors duration-200">
            Donate
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-800"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md absolute w-full left-0 top-full">
          <nav className="flex flex-col p-4 space-y-4 text-neutral-700">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors duration-200 ${
                  activeSection === link.id
                    ? "text-[#15cfa4] font-semibold"
                    : "hover:text-[#15cfa4]"
                }`}
              >
                {link.label}
              </a>
            ))}
            <button className="mt-2 h-10 px-5 bg-[#15cfa4] text-white rounded-full font-semibold hover:bg-[#13b892] transition-colors duration-200">
              Donate
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
