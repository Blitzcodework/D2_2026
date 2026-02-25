import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/Images/Logo&Sign/Logowhite.png";
import ContactModal from "../ContactModal/ContactModal";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
  if (isMobileMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isMobileMenuOpen]);

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const closeDropdownWithDelay = () => {
    timeoutRef.current = setTimeout(() => setIsServicesOpen(false), 150);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setIsServicesOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const handleContactClick = () => {
    setIsContactOpen(true);
    closeMobileMenu();
  };

  const navLinks = [
    { label: "Home", path: "/main" },
    { label: "About Us", path: "/main/aboutd2" },
    { label: "Events", path: "/main/event" },
    { label: "Portfolio", path: "/main/Portfolio" },
    { label: "Team", path: "/main/TeamD2" },
    { label: "Testimonial", path: "/main/Testimonial" },
  ];

  const serviceLinks = [
    { label: "Urban Design", path: "/main/service1" },
    { label: "Architecture Design", path: "/main/service2" },
    { label: "Interior Design", path: "/main/service3" },
    { label: "Project Management", path: "/main/service4" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3.5">

          {/* LOGO */}
          <Link to="/main" className="flex items-center">
            <img
              src={logo}
              alt="D2 Studio Logo"
              className="w-20 h-20 object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="relative text-sm text-white/80 hover:text-[#FF8C00] tracking-[0.16em] uppercase group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#FF8C00] group-hover:w-full transition-all" />
              </Link>
            ))}

            {/* SERVICES DROPDOWN (DESKTOP) */}
            <div
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdownWithDelay}
            >
              <button className="flex items-center gap-1.5 text-sm text-white/80 hover:text-[#FF8C00] uppercase">
                Services
                <FaChevronDown
                  className={`text-[10px] transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-4 w-64 bg-zinc-950/95 rounded-xl border border-white/10 overflow-hidden">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.label}
                      to={service.path}
                      onClick={() => setIsServicesOpen(false)}
                      className="block px-6 py-3 text-gray-200 hover:bg-[#FF8C00] hover:text-white"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* DESKTOP CONTACT */}
          <div className="hidden lg:flex">
            <button
              onClick={handleContactClick}
              className="rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FF7000] px-6 py-2.5 text-sm font-semibold uppercase text-white"
            >
              Contact Us
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="text-white text-2xl">
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed top-[88px] left-0 right-0 z-50 bg-black border-t border-white/10 px-6 py-6 space-y-3 lg:hidden">

          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={closeMobileMenu}
              className="block py-3 text-white/90 text-sm uppercase"
            >
              {link.label}
            </Link>
          ))}

          {/* MOBILE SERVICES */}
          <div className="border-t border-white/10 pt-3">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex justify-between items-center w-full py-3 text-white/90 text-sm uppercase"
            >
              Services
              <FaChevronDown
                className={`text-xs transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isServicesOpen && (
              <div className="pl-4 space-y-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.label}
                    to={service.path}
                    onClick={closeMobileMenu}
                    className="block py-2 text-white/70 text-sm"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* MOBILE CONTACT */}
          <button
            onClick={handleContactClick}
            className="w-full mt-4 rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FF7000] py-3 text-sm font-semibold uppercase text-white"
          >
            Contact Us
          </button>
        </div>
      )}

      {/* CONTACT MODAL */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        toEmail="yourcompany@email.com"
      />
    </>
  );
};

export default Navbar;