import { BookOpen, Heart, Handshake, Leaf } from "lucide-react"; // Added Handshake and Leaf icons

export default function CoreValues() {
  return (
    <section id="about" className="flex flex-col gap-10 px-4 py-10 max-w-4xl mx-auto">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-[#0e1b18] text-3xl font-bold tracking-tight max-w-2xl mx-auto">
          About the Pranami Foundation
        </h1>
        <p className="text-[#0e1b18] text-base max-w-2xl mx-auto">
          Pranami is a charitable foundation dedicated to advancing human dignity through purposeful action in education, healthcare, philanthropy, and sustainability. With a belief in collective responsibility and compassionate service, we work to support underserved communities and create opportunities that lead to lasting impact.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col p-4 border border-[#d0e7e2] bg-[#f8fcfb] rounded-lg gap-3 text-center lg:text-left">
          <BookOpen className="text-[#0e1b18] mx-auto lg:mx-0" size={24} />
          <h2 className="text-[#0e1b18] text-base font-bold">Education</h2>
          <p className="text-[#4d9987] text-sm">
            Supporting learning initiatives for youth, we focus on building inclusive and self-reliant societies.
          </p>
        </div>
        <div className="flex flex-col p-4 border border-[#d0e7e2] bg-[#f8fcfb] rounded-lg gap-3 text-center lg:text-left">
          <Heart className="text-[#0e1b18] mx-auto lg:mx-0" size={24} />
          <h2 className="text-[#0e1b18] text-base font-bold">Healthcare</h2>
          <p className="text-[#4d9987] text-sm">
            Delivering essential services to improve the well-being of underserved communities.
          </p>
        </div>
        <div className="flex flex-col p-4 border border-[#d0e7e2] bg-[#f8fcfb] rounded-lg gap-3 text-center lg:text-left">
          <Handshake className="text-[#0e1b18] mx-auto lg:mx-0" size={24} />
          <h2 className="text-[#0e1b18] text-base font-bold">Philanthropy</h2>
          <p className="text-[#4d9987] text-sm">
            Every project reflects our core values of service, empathy, and integrity.
          </p>
        </div>
        <div className="flex flex-col p-4 border border-[#d0e7e2] bg-[#f8fcfb] rounded-lg gap-3 text-center lg:text-left">
          <Leaf className="text-[#0e1b18] mx-auto lg:mx-0" size={24} />
          <h2 className="text-[#0e1b18] text-base font-bold">Sustainability</h2>
          <p className="text-[#4d9987] text-sm">
            Promoting sustainable development to create a lasting positive impact on the environment and communities.
          </p>
        </div>
      </div>
    </section>
  );
}
