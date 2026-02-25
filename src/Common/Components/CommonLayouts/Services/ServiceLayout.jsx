import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const textVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.94, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ServiceLayout = ({
  number,
  title,
  mainDescription,
  detailedDescription,
  image1,
  image2,
  nextPage,
  prevPage,
  detailsPage,
}) => {
  const navigate = useNavigate();

  const images = [image1, image2].filter(Boolean);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="w-full flex justify-center items-start bg-black text-white relative overflow-hidden min-h-[calc(100vh-88px)] pt-8 md:pt-4 lg:pt-2"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl opacity-50" />
        <div className="absolute bottom-[-120px] right-[-80px] w-96 h-96 rounded-full bg-white/5 blur-3xl opacity-70" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-6xl px-5 sm:px-8 lg:px-0 py-10 md:py-8"
      >
        {/* ✅ HEADING (LIKE YOUR IMAGE) */}
        <div className="text-center mb-14">
          {/* Pill */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/25 bg-white/5"
          >
            <span className="h-2 w-2 rounded-full bg-white" />
            <span className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-white/80">
              Our Services
            </span>
          </motion.div>

          {/* Big title */}
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            className="mt-8 text-3xl sm:text-4xl md:text-5xl   tracking-[0.28em] uppercase"
          >
            OUR SERVICES
          </motion.h1>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT TEXT */}
          <div className="space-y-7 md:space-y-8">
            <motion.div
              variants={textVariant}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 bg-white/5 text-[11px] tracking-[0.22em] uppercase text-white/70"
            >
              <span className="h-[6px] w-[6px] rounded-full bg-white/70" />
              <span>Service {number}</span>
            </motion.div>

            <motion.h1
              variants={textVariant}
              className="text-3xl sm:text-4xl lg:text-[2.8rem] font-bold leading-tight"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={textVariant}
              className="text-base sm:text-lg text-white/80 leading-relaxed max-w-lg"
            >
              {mainDescription}
            </motion.p>

            <motion.p
              variants={textVariant}
              className="text-base sm:text-lg text-white/65 leading-relaxed max-w-lg"
            >
              {detailedDescription}
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={textVariant}
              className="flex flex-wrap items-center gap-5 mt-2"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate(detailsPage)}
                className="px-8 py-3 rounded-full text-sm sm:text-base font-semibold bg-white text-black hover:bg-white/90 transition shadow-[0_18px_45px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                View Details
              </motion.button>
            </motion.div>

            {/* Prev / Next */}
            <motion.div
              variants={textVariant}
              className="flex flex-wrap items-center gap-8 pt-2 text-sm sm:text-base"
            >
              <button
                onClick={() => navigate(prevPage)}
                className="flex items-center gap-2 text-white/60 hover:text-white transition cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Previous service
              </button>

              <button
                onClick={() => navigate(nextPage)}
                className="flex items-center gap-2 text-white/60 hover:text-white transition cursor-pointer"
              >
                Next service <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* RIGHT IMAGE SLIDER */}
          <div
            className="relative flex justify-center md:justify-end cursor-pointer"
            onClick={() => navigate(detailsPage)}
          >
            <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-white/15 blur-3xl opacity-60" />
            </div>

            <motion.div
              variants={imageVariant}
              className="relative w-[96%] sm:w-[92%] max-w-md rounded-[30px] overflow-hidden bg-gradient-to-b from-white/10 via-white/5 to-black shadow-[0_28px_80px_rgba(0,0,0,0.85)] border border-white/15 aspect-[4/3]"
            >
              <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/20 via-white/5 to-transparent opacity-70 pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.img
                  key={images[currentIndex]}
                  src={images[currentIndex]}
                  alt="Service slide"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceLayout;
