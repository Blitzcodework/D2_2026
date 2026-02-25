// Components/Layout.jsx
import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { AnimatePresence, motion } from "framer-motion";

const Layout = () => {
  const location = useLocation();

  // ✅ Contact modal state moved here
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* ✅ Navbar stays static, but can open/close modal */}
      <Navbar
        isContactOpen={isContactOpen}
        onOpenContact={openContact}
        onCloseContact={closeContact}
      />

      {/* Animated page transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ✅ Footer can open the same modal */}
      <Footer onOpenContact={openContact} />
    </div>
  );
};

export default Layout;
