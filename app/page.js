import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CoreValues from "../components/CoreValues";
import Initiatives from "../components/Initiatives";
import Volunteer from "../components/Volunteer";
import ContactForm from "../components/ContactForm";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import TestimonialsPage from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8fcfb] font-['Work_Sans','Noto_Sans',sans-serif]">
      <Navbar />
      <main className="flex flex-1 flex-col items-center px-4 py-8">
        <Hero />
        <CoreValues />
        <Initiatives />
        <Volunteer />
        <TestimonialsPage />
        <ContactForm />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
