"use client";
import { HeartHandshake, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState(0);

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
      rootMargin: "-20% 0px -80% 0px", // Trigger when section is 20% from top
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup
    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [navLinks]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      const navbarHeight = 80; // Height of sticky navbar
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

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
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors duration-200 relative ${
                  activeSection === link.id
                    ? "text-[#15cfa4] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-[#15cfa4] after:transition-all after:duration-200"
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
        <button className="md:hidden text-neutral-800" aria-label="Open menu">
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
}