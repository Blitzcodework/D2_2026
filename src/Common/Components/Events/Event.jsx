import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";

import onamImage from "../../../assets/Images/Events/Onam/onam1.jpeg";
import Empowerment from "../../../assets/Images/Events/Women Empowerment/womens4.jpg";
import Diwali from "../../../assets/Images/Events/Diwali/diwali3.jpg";
import Samishra from "../../../assets/Images/Events/Shamisra/Samishra1.jpg";

const events = [
  {
    title: "Onam Celebration",
    date: "Sep 14, 2024",
    time: "10:00 AM",
    location: "Kozhikode",
    description:
      "Celebrate Onam with cultural programs, floral designs, and traditional Kerala feast.",
    image: onamImage,
    route: "/main/EventOnam",
  },
  {
    title: "Women’s Empowerment",
    date: "March 8, 2024",
    time: "10:00 AM",
    location: "Kozhikode",
    description:
      "An inspiring event celebrating strength, unity, and leadership of women.",
    image: Empowerment,
    route: "/main/WomenEmpowerment",
  },
  {
    title: "Diwali Celebration",
    date: "31 Oct, 2024",
    time: "10:00 AM",
    location: "Kozhikode",
    description:
      "Experience the festival of lights with diya ceremonies, music, and dance.",
    image: Diwali,
    route: "/main/EventDiwali",
  },
  {
    title: "Samishra",
    date: "Sep 14, 2024",
    time: "10:00 AM",
    location: "Kozhikode",
    description:
      "A cultural blend of tradition, colors, and rhythmic celebrations.",
    image: Samishra,
    route: "/main/EventSamishra",
  },
];

const Event = () => {
  const navigate = useNavigate();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
  className="w-full bg-black min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 pt-6 pb-12"
  style={{ fontFamily: "'Times New Roman', Times, serif" }}
>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="text-center mb-8 md:mb-10"
>

          <h1 className=" text-3xl sm:text-4xl md:text-5xl   tracking-[0.28em] uppercase">
            Events
          </h1>
          <p className="text-gray-400 text-[14px] md:text-[16px] mt-3 max-w-2xl mx-auto">
            Celebrating moments that inspire, connect, and create timeless memories.
          </p>
          <div className="w-[90px] h-[2px] bg-white/40 mx-auto mt-5" />
        </motion.div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-7">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => navigate(event.route)}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer 
                         backdrop-blur-md shadow-[0_18px_35px_rgba(0,0,0,0.55)] 
                         hover:shadow-[0_22px_45px_rgba(0,0,0,0.75)] hover:-translate-y-2
                         transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-60 md:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-4 md:p-5">
                <h2 className="text-white text-[17px] md:text-[18px] font-semibold mb-2 line-clamp-2">
                  {event.title}
                </h2>

                <p className="text-gray-300 text-[13px] leading-relaxed line-clamp-3 mb-4">
                  {event.description}
                </p>

                {/* Info Section */}
                <div className="space-y-2 text-gray-300 text-[13px] mb-4">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-white/80" size={12} />
                    <span>{event.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaClock className="text-white/80" size={12} />
                    <span>{event.time}</span>
                  </div>

                  {/* Location + Button Same Line */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-white/80" size={12} />
                      <span>{event.location}</span>
                    </div>

                    <button
                      className="px-4 py-1.5 text-[13px] rounded-full border border-white/30 
                                 text-white/90 bg-white/5 
                                 group-hover:bg-white group-hover:text-black
                                 transition-colors duration-300 tracking-wide"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(event.route);
                      }}
                    >
                      See More
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
