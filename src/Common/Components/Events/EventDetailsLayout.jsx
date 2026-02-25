// src/components/EventLayouts/EventHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const EventDetailsLayout = ({ image, title, location, date, time }) => {
  return (
    <div
      className="w-full bg-[#F7F9FC] flex justify-center py-14 px-4 text-gray-900"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <motion.div
        variants={cardVariant}
        initial="hidden"
        animate="visible"
        className="max-w-md w-full bg-white rounded-3xl shadow-[0_6px_24px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-200"
      >
        {/* Image Section */}
        {image && (
          <div className="relative">
            <img
              src={image}
              alt={title}
              className="w-full h-56 object-cover"
              loading="lazy"
            />

            {/* Small floating badge (optional like rating tag) */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-semibold shadow-md">
              🎉 Event
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="px-6 py-6">
          {/* Title */}
          <h2 className="text-2xl font-bold tracking-tight mb-3">
            {title}
          </h2>

          {/* Description Info Grid */}
          <div className="space-y-3 text-sm text-gray-700">
            {location && (
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-600" />
                <span>{location}</span>
              </div>
            )}

            {date && (
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-blue-600" />
                <span>{date}</span>
              </div>
            )}

            {time && (
              <div className="flex items-center gap-2">
                <FaClock className="text-blue-600" />
                <span>{time}</span>
              </div>
            )}
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <button className="w-full rounded-full bg-blue-600 text-white py-2.5 font-semibold hover:bg-blue-700 transition-all">
              View Details
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EventDetailsLayout;
