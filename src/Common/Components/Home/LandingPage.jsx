import React, { useEffect, useState } from "react";
import Aboutd2 from "../../../Common/Components/AboutD2/Aboutd2";
import Event from "../../../Common/Components/Events/Event";
import Portfolio from "../../../Common/Components/Portfolio/Portfolio";
import TeamD2 from "../../../Common/Components/Team/TeamD2";
import Service1 from "../../../Common/Components/CommonLayouts/Services/Service1";
import TestimonialsModern from "../../Testimonial/Testimonial";

const ArchitectureSlider = () => {
  const [current, setCurrent] = useState(0);

  const images = [
    "/images/slide.jpeg",
    "/images/slide1.jpeg",
    "/images/slide2.jpeg",
    "/images/slide3.jpeg",
    "/images/slide4.jpeg",

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  return (
    <div className="w-full overflow-x-hidden bg-white">

      {/* ======================
           FULLSCREEN SLIDER
      ====================== */}
      <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">

        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${index === current
                ? "opacity-100"
                : "opacity-0"
              }`}
          >
            <img
              src={img}
              alt={`Slide ${index}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}

        {/* Slider Dots */}
        <div className="absolute bottom-6 w-full flex justify-center gap-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current
                  ? "bg-white scale-125"
                  : "bg-gray-500"
                }`}
            />
          ))}
        </div>
      </div>

      {/* ======================
           SECTIONS BELOW
      ====================== */}

      <section id="about" className="w-full bg-white">
        <Aboutd2 />
      </section>

      <section id="services" className="w-full bg-[#F8F6F3]">
        <Service1 />
      </section>

      <section id="division" className="w-full bg-white">
        <Portfolio />
      </section>

      <section id="events" className="w-full bg-white">
        <Event />
      </section>

      <section id="team" className="w-full bg-[#F8F6F3]">
        <TeamD2 />
      </section>

      <section id="testimonials" className="w-full bg-[#F8F6F3]">
        <TestimonialsModern />
      </section>

    </div>
  );
};

export default ArchitectureSlider;