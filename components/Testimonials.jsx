"use client";

import { UserRound } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Mehta",
    quote:
      "The support from this foundation changed my life. I’m now pursuing my dreams with confidence and purpose.",
    role: "Scholarship Recipient",
  },
  {
    name: "Saanvi Desai",
    quote:
      "Volunteering with the foundation was a beautiful experience. It gave me perspective and purpose.",
    role: "Volunteer",
  },
  {
    name: "Rakesh Kumar",
    quote:
      "Their healthcare program provided my family with access to crucial treatment. Forever grateful!",
    role: "Beneficiary",
  },
];

export default function TestimonialsPage() {
  return (
    <section id="testimonials" className="w-full py-16 px-4 bg-[#f8fcfb]">
      <h2 className="text-3xl font-bold text-[#0e1b18] text-center mb-10">
        What People Say About Us
      </h2>

      <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="w-full bg-white border border-[#d0e7e2] rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full border border-[#d0e7e2] bg-[#e7f3f0] text-[#4d9987]">
                <UserRound className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[#0e1b18] font-semibold">{t.name}</h4>
                <p className="text-[#4d9987] text-sm">{t.role}</p>
              </div>
            </div>
            <p className="text-[#4d9987] text-[15px] leading-relaxed italic">
              “{t.quote}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
