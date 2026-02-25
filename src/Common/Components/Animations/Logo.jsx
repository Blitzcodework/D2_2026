import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logoWhite from "../../../assets/Images/Logo&Sign/Logowhite.png";

const Logo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect after animation finishes (4 seconds)
    const timer = setTimeout(() => {
      navigate("/main   ");
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        <motion.img
          key="logo"
          src={logoWhite}
          alt="D2 Architecture Studio Logo"
          // Initial state
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          // Animate in
          animate={{
            opacity: [0, 1, 1, 0], // fade in → stay visible → fade out
            scale: [0.5, 1.05, 1],
            rotate: [0, 0, 0],
            filter: [
              "drop-shadow(0 0 0px rgba(255,255,255,0))",
              "drop-shadow(0 0 15px rgba(255,255,255,0.8))",
              "drop-shadow(0 0 25px rgba(255,255,255,0.5))",
              "drop-shadow(0 0 0px rgba(255,255,255,0))",
            ],
          }}
          // Transition timing
          transition={{
            duration: 4,
            ease: "easeInOut",
            times: [0, 0.3, 0.8, 1],
          }}
          className="w-[250px] md:w-[400px] object-contain"
        />
      </AnimatePresence>

      {/* Optional glowing ring background animation */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full border border-white/10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: [0, 0.4, 0] }}
        transition={{
          duration: 3.5,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>
  );
};

export default Logo;
