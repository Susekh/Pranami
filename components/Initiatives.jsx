import Image from "next/image";

export default function Initiatives() {
  const initiatives = [
    {
      title: "Education Support & Outreach",
      desc: "We provide educational resources, scholarships, and learning opportunities to students from underprivileged backgrounds, helping them build brighter futures.",
      img: "/img/education.jpg",
    },
    {
      title: "Healthcare Initiatives",
      desc: "Through health camps, medical assistance, and wellness outreach, we strive to make primary healthcare accessible and affordable for vulnerable communities.",
      img: "/img/healthcare.jpg",
    },
    {
      title: "Philanthropic Projects",
      desc: "Our team undertakes a range of charitable activities—from food distribution and shelter support to community upliftment efforts.",
      img: "/img/philanthropy.jpg",
    },
    {
      title: "Sustainability & Environment",
      desc: "We promote environmentally responsible practices through tree plantation drives, clean energy advocacy, and local eco-awareness campaigns.",
      img: "/img/sustainability.jpg",
    },
    {
      title: "Partnership & Community Engagement",
      desc: "Working hand-in-hand with grassroots organizations, volunteers, and civic bodies, we strengthen our impact through collaboration and trust.",
      img: "/img/partnership.jpg",
    },
  ];

  return (
    <section id="initiatives" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-[#0e1b18] text-3xl font-bold tracking-tight mb-8 text-center">
        Our Areas of Impact
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {initiatives.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#f8fcfb] border border-[#d0e7e2] rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
          >
            <div className="relative w-full aspect-video bg-[#e7f3f0] flex items-center justify-center text-[#4d9987] text-sm">
              <Image
                height={100}
                width={100}
                src={item.img}
                quality={90}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-[#0e1b18]">
                {item.title}
              </h3>
              <p className="text-sm text-[#4d9987] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
