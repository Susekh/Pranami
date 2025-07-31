"use client"

export default function Hero() {
  return (
    <section
      className="flex flex-col p-8 gap-6 justify-center items-center min-h-[480px] bg-cover bg-center rounded-xl text-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url('/img/hero-bg.jpg')"
      }}
    >
      <h1 className="text-white text-4xl font-black">
        Empowering Communities, Transforming Lives
      </h1>
      <h2 className="text-white text-base max-w-xl mx-auto">
        Join us in our mission to create lasting change through education, healthcare, and community development.
      </h2>
      <div className="flex gap-3">
        <button className="h-10 px-4 bg-[#15cfa4] text-[#0e1b18] rounded-full cursor-pointer font-bold">Learn More</button>
        <button className="h-10 px-4 bg-[#e7f3f0] text-[#0e1b18] rounded-full cursor-pointer font-bold">Donate</button>
      </div>
    </section>
  );
}
