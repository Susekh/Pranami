"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"



export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: "/img/hero-bg.jpg",
      title: "Empowering Communities, Transforming Lives",
      subtitle: "Join us in our mission to create lasting change through education, healthcare, and community development.",
      primaryButton: "Learn More",
      secondaryButton: "Donate"
    },
    {
      id: 2,
      image: "/img/hero-bg-2.jpg",
      title: "Building Stronger Communities Together",
      subtitle: "Discover how we're making a difference in communities worldwide through innovative programs and partnerships.",
      primaryButton: "Our Programs",
      secondaryButton: "Get Involved"
    },
    {
      id: 3,
      image: "/img/hero-bg-3.jpg",
      title: "Creating Opportunities for Everyone",
      subtitle: "From education to healthcare, we're opening doors to brighter futures for individuals and families.",
      primaryButton: "Success Stories",
      secondaryButton: "Support Us"
    }
  ]

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out ${
              index === currentSlide 
                ? "translate-x-0" 
                : index < currentSlide 
                  ? "-translate-x-full" 
                  : "translate-x-full"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url('${slide.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          >
            {/* Content */}
            <div className="flex flex-col justify-center items-center h-full px-8 text-center">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                  {slide.title}
                </h1>
                <h2 className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
                  {slide.subtitle}
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="h-12 px-8 bg-[#15cfa4] hover:bg-[#12b890] text-[#0e1b18] rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105"
                  >
                    {slide.primaryButton}
                  </Button>
                  <Button 
                    size="lg"
                    variant="secondary"
                    className="h-12 px-8 bg-[#e7f3f0] hover:bg-white text-[#0e1b18] rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105"
                  >
                    {slide.secondaryButton}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 border-white/30 text-white backdrop-blur-sm"
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 border-white/30 text-white backdrop-blur-sm"
        onClick={goToNext}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-white scale-110" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-[#15cfa4] transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>
    </section>
  )
}