export default function Initiatives() {
  const initiatives = [
    {
      title: "Education Programs",
      desc: "We offer a range of educational programs to support students and schools in underserved areas.",
      img: "/img/education.jpg",
    },
    {
      title: "Healthcare Support",
      desc: "Our healthcare initiatives provide essential medical services and support to communities in need.",
      img: "/img/healthcare.jpg",
    },
    {
      title: "Community Building",
      desc: "We work with communities to build sustainable infrastructure and support local development projects.",
      img: "/img/community.jpg",
    },
  ];

  return (
    <section id="initiatives" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-[#0e1b18] text-3xl font-bold tracking-tight mb-8 text-center">
        Our Initiatives
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {initiatives.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#f8fcfb] border border-[#d0e7e2] rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
          >
            <div className="relative w-full aspect-video bg-[#e7f3f0] flex items-center justify-center text-[#4d9987] text-sm">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-[#0e1b18]">{item.title}</h3>
              <p className="text-sm text-[#4d9987] leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
