import React, { useEffect, useState } from "react";
import Aboutd2 from "../../../Common/Components/AboutD2/Aboutd2";
import Event from "../../../Common/Components/Events/Event";
import Portfolio from "../../../Common/Components/Portfolio/Portfolio";
import TeamD2 from "../../../Common/Components/Team/TeamD2";
import Service1 from "../../../Common/Components/CommonLayouts/Services/Service1"
import TestimonialsModern from "../../Testimonial/Testimonial";




const ArchitectureSlider = () => {
  const [current, setCurrent] = useState(0);

  const images = [
    "/src/assets/images/slide1.png",
    "/src/assets/images/slide2.png",
    "/src/assets/images/slide3.png",
    "/src/assets/images/slide4.png",
  ];

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => setCurrent(index);

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      {/* ======================
           FULLSCREEN SLIDER
      ======================= */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Slides */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 
              transition-all duration-700 ease-in-out
              flex items-center justify-center
              ${index === current ? "opacity-100 scale-100" : "opacity-0 scale-95"}
            `}
          >
            <img
              src={img}
              className="w-full h-full object-contain"
              alt={`Architecture sketch ${index}`}
            />
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-5 w-full flex justify-center gap-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300
                ${index === current ? "bg-black scale-125" : "bg-gray-400"}`}
            />
          ))}
        </div>
      </div>

      {/* ======================
           SECTIONS BELOW SLIDER
      ======================= */}

      <section id="about" className="w-full bg-white">
        <Aboutd2 />
      </section>
      <section className="w-full bg-[#F8F6F3]">
        <Service1 />
      </section>

      <section id="division" className="w-full bg-white">
        <Portfolio />
      </section>
      <section id="service" className="w-full bg-white">
        <Event />
      </section>


      <section id="products" className="w-full bg-[#F8F6F3]">
        <TeamD2 />
      </section>
      <section id="products" className="w-full bg-[#F8F6F3]">
        <TestimonialsModern />
      </section>

      {/* Fixed duplicate ID */}
    </div>
  );
};

export default ArchitectureSlider;
