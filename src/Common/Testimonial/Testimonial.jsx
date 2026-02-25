// src/components/Testimonials/TestimonialsModern.jsx
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* 🔹 IMAGE IMPORTS */
import Testmonial5 from "../../assets/Images/Testimonial/Amrutha Sunand & Family.jpeg";
import Testmonial6 from "../../assets/Images/Testimonial/Mr Anoop & Family.jpg";
import Testmonial7 from "../../assets/Images/Testimonial/Mr Sudheer & Family.jpeg";
import Testmonial8 from "../../assets/Images/Testimonial/Mr. Rejeendran & family.jpeg";
import Testmonial9 from "../../assets/Images/Testimonial/Testimonial.png";

/* 🔹 TESTIMONIAL DATA */
const testimonials = [
  {
    name: "Mrs Amrutha Sunand & Family",
    role: "Client",
    img: Testmonial5,
    largeImage: Testmonial5,
    message:
      "We approached Ar. Deepak with a dream of a home that truly felt ours. From the very first meeting, he understood our vision and transformed our ideas into a beautiful, meaningful design. Every line felt thoughtful and artistic. With the constant support of his wonderful team at D2A, our dream slowly became reality. Today, that dream stands as our home, “Bansuri”—a warm and soulful space created with care, patience, and vision. Heartfelt thanks to Ar. Deepak and Team D2A.",
  },
  {
    name: "Mr Anoop & Family",
    role: "Gals Gallery, Calicut",
    img: Testmonial6,
    largeImage: Testmonial6,
    message:
      "We truly cannot express enough how grateful we are for the remarkable architectural expertise of D2 Architecture. From the very first day to the final handover, their team supported us with timely guidance, flawless coordination, and genuine dedication. They understood our needs perfectly and ensured every detail was taken care of. Our heartfelt thanks go especially to Mr. Deepak Meethal, whose personal involvement and care made this journey truly memorable.",
  },
  {
    name: "Mr Sudheer & Family",
    role: "Kannur",
    img: Testmonial7,
    largeImage: Testmonial7,
    message:
      "Our vision for a resort that felt unique and integrated with its surroundings was brought to life by Mr Deepak of D2 ARCHITECTURE, better than we could have imagined. Deepak and his team showed their professionalism listening to our ideas and offering their valuable insights throughout project.",
  },
  {
    name: "Mr. Rejeendran & family",
    role: "Client",
    img: Testmonial8,
    largeImage: Testmonial8,
    message:
      "We approached Ar. Deepak because we had a dream..a dream about our home that truly felt like ours, but we needed someone who could understand it and shape it the right way. He welcomed us with smiling heart..From the very beginning, every stroke of his pen on paper felt like art—simple, thoughtful, and full of intention. He listened to us, understood what we hoped for, and slowly turned our scattered ideas into a clear, beautiful design. And his team at D2A stood with us like a family, supporting us through every step as our dream slowly took shape. Today, that dream stands as our home “Bansuri”—a warm, beautiful and meaningful space brought to life with his vision, patience, and genuine care.” Thanks from our heart… Ar. Deepak and Team D2A",
  },
  {
    name: "Mr. Jamal Kuttiyadi",
    role: "Client",
    img: Testmonial9,
    largeImage: Testmonial9,
    message:
      "I have five sons and own 32 cents of land. With the vision of developing a villa project consisting of five houses on this property, I approached Engineer Deepak. When I shared my dream, he acknowledged that it was an ambitious and adventurous project. Without disappointing me, he visited the site multiple times and thoughtfully prepared a plan that perfectly aligned with my expectations.What many local engineers had stepped away from, the D2 Engineer team—along with Engineer Deepak—successfully transformed into reality through a clear, confident, and dream-level presentation.A big salute to Engineer Deepak and the entire D2 Engineer team for turning my vision into a successful project.",
  },
];

const TestimonialsModern = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const total = testimonials.length;
  const t = useMemo(() => testimonials[index], [index]);

  const goNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const spring = {
    type: "spring",
    stiffness: 140,
    damping: 18,
    mass: 0.9,
  };

  const textVariants = {
    enter: () => ({ opacity: 0, y: 8, filter: "blur(4px)" }),
    center: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: () => ({ opacity: 0, y: -8, filter: "blur(4px)" }),
  };

  const imageVariants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir === 1 ? 28 : -28,
      scale: 0.985,
      filter: "blur(10px)",
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir === 1 ? -28 : 28,
      scale: 0.985,
      filter: "blur(10px)",
    }),
  };

  return (
    <div
      className="w-full bg-black text-white pt-10 pb-20 px-6 md:px-20"
      style={{ fontFamily: "serif" }}
    >
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl tracking-[0.25em] mb-10">
        TESTIMONIALS
      </h1>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* LEFT SECTION (TEXT) */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`text-${index}`}
              custom={direction}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-full overflow-hidden border border-white/20">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="h-full w-full object-cover"
                    draggable="false"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-medium">{t.name}</h3>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-8 pr-2 md:pr-4">
                {t.message}
              </p>

              {/* DESKTOP BUTTONS (UNCHANGED DESIGN) */}
              <div className="hidden md:flex items-center gap-3">
                <button
                  onClick={goPrev}
                  disabled={total <= 1}
                  className="px-5 py-2 rounded-full border border-white/20 text-sm hover:border-white/40 hover:bg-white/5 transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                <button
                  onClick={goNext}
                  disabled={total <= 1}
                  className="px-6 py-2 rounded-full bg-white text-black text-sm hover:bg-gray-200 transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center flex-col items-center">
            <div className="relative w-full max-w-[520px] h-[380px] sm:h-[420px] md:h-[460px] rounded-xl overflow-hidden shadow-lg">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`img-${index}`}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={spring}
                  className="absolute inset-0"
                >
                  <img
                    src={t.largeImage}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-70"
                    draggable="false"
                  />

                  <img
                    src={t.largeImage}
                    alt="Client"
                    className="relative z-10 w-full h-full object-contain"
                    draggable="false"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* MOBILE BUTTONS (SAME DESIGN – UNDER IMAGE) */}
            <div className="flex md:hidden items-center gap-3 mt-6">
              <button
                onClick={goPrev}
                disabled={total <= 1}
                className="px-5 py-2 rounded-full border border-white/20 text-sm hover:border-white/40 hover:bg-white/5 transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Previous
              </button>

              <button
                onClick={goNext}
                disabled={total <= 1}
                className="px-6 py-2 rounded-full bg-white text-black text-sm hover:bg-gray-200 transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TestimonialsModern;
