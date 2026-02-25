import React, { useState } from "react";
import { motion } from "framer-motion";

// Images
import arjun from "../../../assets/Images/Team/ARJUN E( SENIOR ARCHITECT).jpg";
import ayana from "../../../assets/Images/Team/AYANA P.jpg";
import jifin from "../../../assets/Images/Team/JIFIN HUSSAIN ( JUNIOR ARCHITECT ).jpg";
import jithin from "../../../assets/Images/Team/JITHIN .C (CIVIL ENGINEER).jpg";
import rahul from "../../../assets/Images/Team/RAHUL (SITE ENGINEER).jpeg";
import pradeep from "../../../assets/Images/Team/PRADEEP KUMAR (MANAGER).jpg";
import prathyush from "../../../assets/Images/Team/prathysuh.jpeg";
import staff from "../../../assets/Images/Team/staff.jpg";
import Udhav from "../../../assets/Images/Team/Udhav Ajith-JUNIOR ARCHITECT.jpeg";
import Limisha from "../../../assets/Images/Team/Limsha P - JUNIOR ARCHITECT.jpeg";

import divakaran from "../../../assets/Images/Team/divakaran.jpg";
import deepak from "../../../assets/Images/Team/Deepak.jpg";
import teamBanner from "../../../assets/Images/Team/D2team-modified.JPG";

const Team = () => {

  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (key) => {
    setFlippedCards((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const founders = [
    {
      name: "Divakaran G.M",
      title: "Founder & Principal Architect",
      img: divakaran,
      description:
        "With over four decades of experience, Mr. Divakaran laid the foundation of INDFA Designers in 1982. His artistic vision and interior expertise continue to guide D2A’s design ethos.",
    },
    {
      name: "Deepak G. Meethal",
      title: "Co-Founder & Principal Architect",
      img: deepak,
      description:
        "Deepak established D2 Architecture Studio in 2016, expanding the legacy into contemporary architecture, urban design, and sustainable spatial solutions.",
    },
  ];

  const professionals = [
    {
      name: "Arjun E",
      title: "Senior Architect",
      img: arjun,
      description:
        "Leads design development with a focus on contextual, climate-responsive architecture and detail refinement.",
    },
    {
      name: "Ayana P",
      title: "Accountant",
      img: ayana,
      description:
        "Manages financial operations, documentation, and budget planning with precision and responsibility.",
    },

    {
      name: "Jifin Hussain",
      title: "Junior Architect",
      img: jifin,
      description:
        "Works on 3D modeling, technical drawings, and presentation layouts.",
    },
    {
      name: "Udhav Ajith",
      title: "Junior Architect",
      img: Udhav,
      description:
        "Bringing ideas to life through 3D modeling, technical precision, and polished visual presentations.",
    },
    {
      name: "Limisha P",
      title: "Junior Architect",
      img: Limisha,
      description:
        "Turning concepts into structured 3D visuals and professionally designed presentation layouts.",
    },
    {
      name: "Jithin C",
      title: "Site Engineer",
      img: jithin,
      description:
        "Ensures structural integrity, site coordination, and alignment between drawings and execution.",
    },
    {
      name: "Rahul",
      title: "Site Engineer",
      img: rahul,
      description:
        "Oversees on-site activities, quality checks, and timelines during construction.",
    },
    {
      name: "Pradeep Kumar",
      title: "Manager",
      img: pradeep,
      description:
        "Handles client coordination, project scheduling, and office operations.",
    },
    {
      name: "Prathyush K P",
      title: "Draftsman",
      img: prathyush,
      description:
        "Prepares detailed architectural drawings, technical drafts, and CAD documentation to support project execution.",
    },
    {
      name: "Girija",
      title: "Supporting Staff",
      img: staff,
      description:
        "Provides essential support for day-to-day studio operations and team assistance.",
    },
  ];

  return (
    <div
      className="bg-black text-white px-4 md:px-10 lg:px-20 py-16 md:py-20"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >

      {/* ================================
           LABEL + TITLE + SUBTITLE
      ================================= */}
      <div className="flex flex-col items-center text-center mb-10">

        {/* Label */}
        <div
          className="
            flex items-center gap-2
            border border-white/20
            px-5 py-1.5
            rounded-full
            text-[12px] tracking-[0.25em]
            uppercase text-gray-300 mb-5
          "
        >
          <span className="w-2 h-2 bg-white rounded-full"></span>
          Our Team
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl tracking-[0.18em] uppercase mb-3"
        >
          Meet Our Team
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-300"
        >
          The minds, hands, and hearts behind the spaces we design.
        </motion.p>
      </div>

      {/* ================================
           HERO IMAGE (NO TEXT OVERLAY)
      ================================= */}
      <section className="relative w-full rounded-2xl overflow-hidden mb-16 md:mb-20">
        <img
          src={teamBanner}
          alt="D2 Architecture Studio Team"
          className="w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[480px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
      </section>

      {/* ================================
           PRINCIPAL ARCHITECTS
      ================================= */}
      <section className="mb-16 md:mb-20">
        <div className="text-center mb-8 md:mb-10 px-4">
          <h2 className="text-[28px] md:text-[44px]  mb-6 tracking-widest">
            Principal Architects
          </h2>
          <div className="w-16 h-[2px] bg-white/50 mx-auto" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 text-sm sm:text-base md:text-lg leading-relaxed px-4 sm:px-2"
          >
            <p className="text-gray-200">
              Principal Architect & Chairman

              Deepak G.M & Divakaran G.M

              Led by two generations of creative excellence, the firm combines contemporary architectural vision with a strong artistic legacy. Deepak G.M, Principal Architect, brings global design exposure and modern planning expertise, while Divakaran G.M, Chairman and founder of Indfa Designers (1982), provides decades of artistic leadership and experience.
            </p>
          </motion.div>

          <div className="lg:w-1/2 flex flex-wrap justify-center gap-6 px-4">
            {founders.map((founder, index) => (
  <motion.div
    key={founder.name}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="w-[260px] h-[320px] group"
    style={{ perspective: "1000px" }}
  >
    <div
      onClick={() => toggleFlip(`founder-${index}`)}
      className={`relative w-full h-full transition-transform duration-700 
      ${flippedCards[`founder-${index}`] ? "rotate-y-180" : ""}
      md:group-hover:rotate-y-180`}
      style={{ transformStyle: "preserve-3d" }}
    >
                  {/* Front */}
                  <div
                    className="absolute inset-0 rounded-xl overflow-hidden border border-white/15"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <img
                      src={founder.img}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 bg-black/95 text-white rounded-xl border border-white/25 p-4 flex flex-col justify-center text-center"
                    style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
                  >
                    <h3 className="text-lg font-semibold mb-1">{founder.name}</h3>
                    <p className="text-sm text-gray-300 mb-3">{founder.title}</p>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-h-[160px] overflow-y-auto">
                      {founder.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================
           TEAM MEMBERS
      ================================= */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-[28px] md:text-[44px] mb-6 tracking-widest">
            Team Members
          </h2>
          <div className="w-16 h-[2px] bg-white/50 mx-auto" />
        </motion.div>

        <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2 md:px-0">
       {professionals.map((member, idx) => (
  <motion.div
    key={member.name}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: idx * 0.06 }}
    className="w-full h-[300px] sm:h-[340px] group"
    style={{ perspective: "1000px" }}
  >
    <div
      onClick={() => toggleFlip(`member-${idx}`)}
      className={`relative w-full h-full transition-transform duration-700 
      ${flippedCards[`member-${idx}`] ? "rotate-y-180" : ""}
      md:group-hover:rotate-y-180`}
      style={{ transformStyle: "preserve-3d" }}
    >
                {/* Front */}
                <div
                  className="absolute inset-0 rounded-xl overflow-hidden border border-white/12"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 bg-black/95 text-white rounded-xl border border-white/20 p-4 flex flex-col justify-center text-center"
                  style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
                >
                  <h3 className="text-base sm:text-lg font-semibold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mb-3">
                    {member.title}
                  </p>
                  <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed max-h-[150px] overflow-y-auto">
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
