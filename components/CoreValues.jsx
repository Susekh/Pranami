import { BookOpen, Heart, Users } from "lucide-react";

export default function CoreValues() {
  return (
    <section id="about" className="flex flex-col gap-10 px-4 py-10 max-w-4xl mx-auto">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#0e1b18] text-3xl font-bold tracking-tight max-w-2xl">Our Core Values</h1>
        <p className="text-[#0e1b18] text-base">
          At Pranami Charity Foundation, we are driven by a set of core values that guide our work and ensure we make a meaningful impact.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3">
        <div className="flex flex-col p-4 border border-[#d0e7e2] bg-[#f8fcfb] rounded-lg gap-3">
          <BookOpen className="text-[#0e1b18]" size={24} />
          <h2 className="text-[#0e1b18] text-base font-bold">Education</h2>
          <p className="text-[#4d9987] text-sm">Providing access to quality education for all, fostering growth and opportunity.</p>
        </div>
        <div className="flex flex-col p-4 border border-[#d0e7e2] bg-[#f8fcfb] rounded-lg gap-3">
          <Heart className="text-[#0e1b18]" size={24} />
          <h2 className="text-[#0e1b18] text-base font-bold">Healthcare</h2>
          <p className="text-[#4d9987] text-sm">Improving healthcare access and quality, ensuring well-being for everyone.</p>
        </div>
        <div className="flex flex-col p-4 border border-[#d0e7e2] bg-[#f8fcfb] rounded-lg gap-3">
          <Users className="text-[#0e1b18]" size={24} />
          <h2 className="text-[#0e1b18] text-base font-bold">Community Development</h2>
          <p className="text-[#4d9987] text-sm">Empowering communities through sustainable development projects and support.</p>
        </div>
      </div>
    </section>
  );
}
