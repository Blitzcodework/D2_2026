import React from "react";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import { PiXLogoBold } from "react-icons/pi";
import { FiPhone, FiMail, FiLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import LogoWhite from "../../../assets/Images/Logo&Sign/Logowhite.png";

const sitemapLinks = [
  { label: "Home", path: "/main" },
  { label: "About us", path: "/main/aboutd2" },
  { label: "Service", path: "/main/Service1" },
  { label: "Event", path: "/main/Event" },
  { label: "Team", path: "/main/TeamD2" },
  
];

const Footer = ({ onOpenContact }) => {
  return (
    <footer className="bg-black text-white px-6 md:px-12 lg:px-20 py-10 lg:py-14"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Left */}
        <div className="flex flex-col sm:flex-row gap-6 flex-1">
          <div className="flex justify-center sm:justify-start">
            <img src={LogoWhite} alt="D2 Architecture Studio Logo" className="w-20 h-20 object-contain" />
          </div>

          <div className="text-sm space-y-2 sm:text-left text-center">
            <h2 className="text-xl font-semibold tracking-wide">D2 Architecture Studio</h2>
            <p className="text-gray-300 leading-relaxed">
              Architecture | Interior Design Firm Based in <br />
              Calicut | Kochi | Coimbatore | Dubai
            </p>

            <div className="flex items-start justify-center sm:justify-start gap-2">
              <FiLink className="mt-[3px]" />
              <a
                href="https://www.youtube.com/@d2architecturestudio797"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline break-all text-gray-300"
              >
                www.youtube.com/@d2architecturestudio797
              </a>
            </div>

            <div className="flex items-start justify-center sm:justify-start gap-2">
              <FiMail className="mt-[3px]" />
              <a href="mailto:d2architecture@gmail.com" className="hover:underline text-gray-300">
                d2architecture@gmail.com
              </a>
            </div>

            <div className="flex items-start justify-center sm:justify-start gap-2">
              <FiPhone className="mt-[3px]" />
              <a href="tel:+919961523366" className="hover:underline text-gray-300">
                +91 - 9961523366
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-px bg-gray-500 opacity-30" />

        {/* Middle */}
        <div className="flex flex-col sm:flex-row gap-10 justify-between flex-1">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-3 tracking-wide">SITEMAP</h3>

            <ul className="space-y-1 text-sm text-gray-300">
              {sitemapLinks.map((item) => (
                <li key={item.label}>
                  {item.label === "Contacts" ? (
                    <button
                      type="button"
                      onClick={onOpenContact}
                      className="hover:text-gray-400 transition-colors"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link to={item.path} className="hover:text-gray-400 transition-colors">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="text-center sm:text-left">
            <ul className="space-y-1 text-sm text-gray-300 mb-4">
              {["Terms of use", "Privacy Cookies", "Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-gray-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="h-px w-full bg-white opacity-20 mb-4" />

            <div className="flex justify-center sm:justify-start gap-5 text-2xl">
              <a href="https://www.instagram.com/d2_architecturestudio/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-gray-400 transition-colors" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn className="hover:text-gray-400 transition-colors" />
              </a>
              <a href="#" aria-label="X (Twitter)">
                <PiXLogoBold className="hover:text-gray-400 transition-colors" />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebookF className="hover:text-gray-400 transition-colors" />
              </a>
              <a href="https://www.youtube.com/@d2architecturestudio797" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="hover:text-gray-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 text-center sm:text-right">
          <h3 className="text-xl font-semibold mb-4 tracking-wide">OFFICE</h3>
          <div className="text-sm space-y-2 text-gray-300">
            <h2 className="text-lg font-semibold">D2 Architecture Studio</h2>
            <p className="leading-relaxed">
              Address: 7R2C+FCV, FORTUNE HOUSE <br />
              KOMMERI, P.O, METHOTTUTHAZHAM <br />
              Kozhikode, 673007
            </p>
            <p>
              Phone:{" "}
              <a href="tel:04952355636" className="hover:underline">
                0495 235 5636
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
