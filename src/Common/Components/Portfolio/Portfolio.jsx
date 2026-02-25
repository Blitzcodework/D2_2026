import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Images
import img1 from "../../../assets/Residential/alli/Exterior/AlliBg1.png";
import img2 from "../../../assets/Residential/ema/Exterior/Exterior1.png";
import img3 from "../../../assets/Residential/fizal/Exterior/Exterior1.png";
import img4 from "../../../assets/Residential/guruvayur/Exterior/Exterior1.png";
import img5 from "../../../assets/Residential/inea/exterior/Exterior1.png";
import img6 from "../../../assets/Residential/vannagha/exterior/Exterior1.png";
import img7 from "../../../assets/Residential/yaraa/exterior/Exterior1.png";
import img8 from "../../../assets/Residential/shekhar/Exterior/Exterior1.png";
import img9 from "../../../assets/Residential/mr.murali/exterior/Exterior1.png";
import img10 from "../../../assets/HospitalityProjects/Bhadram/Exterior/f1.jpg";
import img11 from "../../../assets/HospitalityProjects/Hammock/exterior/Exterior1.jpg";
import img12 from "../../../assets/Residential/Pink&Purple/Exterior1.jpg";
import img13 from "../../../assets/Residential/amaanath/Exterior1.jpg";
import img14 from "../../../assets/Residential/castle/Exterior/Exterior1.png";
import img15 from "../../../assets/Residential/himadri/Exterior/Exterior1.png";
import img16 from "../../../assets/Residential/kottagiri/Exterior/Exterior1.png";
import img17 from "../../../assets/Residential/krishna/exterior/Exterior1.png";
import img18 from "../../../assets/Residential/mr.noble/exterior/Exterior1.png";
import img19 from "../../../assets/Residential/mr.sunny/exterior/Exterior1.png";
import img20 from "../../../assets/Residential/najeeb/exterior/Exterior1.png";
import img21 from "../../../assets/Residential/rejeendran/Exterior/Exterior1.png";
import img22 from "../../../assets/Residential/VIPIN THOMAS/Exterior/Exterior1.jpeg";
import img23 from "../../../assets/Commercial/Amancay/Exterior/Exterior1.png";
import img24 from "../../../assets/Commercial/Church/exterior/Exterior1.jpg";
import img25 from "../../../assets/Commercial/Evara/exterior/Exterior1.png";
import img26 from "../../../assets/Commercial/WATER LILLY/Exterior/Exterior1.jpg";
import img27 from "../../../assets/Commercial/Raffles/Exterior/Exterior1.png";

const Portfolio = () => {

  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (key) => {
    setFlippedCards((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const [activeTab, setActiveTab] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(9);
  const navigate = useNavigate();

  const tabs = ["ALL", "RESIDENTIAL", "COMMERCIAL", "HOSPITALITY", "RELIGIOUS"];

  const images = [
    {
      src: img1,
      title: "Alli Residential Project",
      description: "Luxury villa blending modern design with nature.",
      category: "RESIDENTIAL",
      link: "/main/AlliResidential",
    },
    {
      src: img2,
      title: "Ema Residence",
      description: "Contemporary high-rise with smart interiors.",
      category: "RESIDENTIAL",
      link: "/main/Ema",
    },
    {
      src: img3,
      title: "Faizal Residence",
      description: "Modern elevation with clean geometry & flow.",
      category: "RESIDENTIAL",
      link: "/main/FaizalResidence",
    },
    {
      src: img4,
      title: "Guruvayur Residence",
      description: "Smart residential space optimized for light.",
      category: "RESIDENTIAL",
      link: "/main/Guruvayur",
    },
    {
      src: img5,
      title: "Inea Residence",
      description: "Eco-conscious architecture in a hilly terrain.",
      category: "RESIDENTIAL",
      link: "/main/Inea",
    },
    {
      src: img6,
      title: "Sirena Residence",
      description: "A hospitality-focused build with rich detail.",
      category: "COMMERCIAL",
      link: "/main/Sirena",
    },
    {
      src: img7,
      title: "Yaraa House",
      description: "Traditional layout with modern materials.",
      category: "RESIDENTIAL",
      link: "/main/Yaraa",
    },
    {
      src: img8,
      title: "Shekhar Residence",
      description: "A vibrant minimalistic contemporary elevation.",
      category: "RESIDENTIAL",
      link: "/main/ShekharResidence",
    },
    {
      src: img9,
      title: "Mano Home",
      description: "Minimalist design with clean volumetric play.",
      category: "RESIDENTIAL",
      link: "/main/Mano",
    },
    {
      src: img9,
      title: "Arancia Resort",
      description: "Warm ambience with premium hospitality design.",
      category: "HOSPITALITY",
      link: "/main/Arancia",
    },
    {
      src: img10,
      title: "Bhadram Resort",
      description: "Peace-oriented design surrounded by nature.",
      category: "HOSPITALITY",
      link: "/main/Bhadram",
    },
    {
      src: img11,
      title: "Hammock Resort",
      description: "A luxury retreat with signature architectural style.",
      category: "HOSPITALITY",
      link: "/main/Hammock",
    },
    {
      src: img12,
      title: "Pink & purple",
      description: "Pinks & Purple - Educational Landmark",
      category: "COMMERCIAL",
      link: "/main/Pinkpurple",
    },
    {
      src: img13,
      title: "Amanath",
      description: "Elegant Contemporary Family Residence",
      category: "RESIDENTIAL",
      link: "/main/Amanath",
    },
    {
      src: img14,
      title: "Catherine Castle",
      description: "Elegant Contemporary Family Residence",
      category: "RESIDENTIAL",
      link: "/main/Castle",
    },
    {
      src: img15,
      title: "Himadri",
      description: "Elegant Contemporary Family Residence",
      category: "RESIDENTIAL",
      link: "/main/Himadri",
    },
    {
      src: img16,
      title: "Kottagiri",
      description: "Elegant Contemporary Family Residence",
      category: "RESIDENTIAL",
      link: "/main/Kottagiri",
    },
    {
      src: img17,
      title: "Krishna",
      description: "Elegant Contemporary Family Residence",
      category: "RESIDENTIAL",
      link: "/main/Krishna",
    },
    {
      src: img18,
      title: "NobleResidence",
      description: "Elegant Contemporary Family Residence",
      category: "RESIDENTIAL",
      link: "/main/NobleResidence",
    },
    {
      src: img19,
      title: "SunnyResidence",
      description: "Elegant Contemporary Family Residence",
      category: "RESIDENTIAL",
      link: "/main/SunnyResidence",
    },
    {
      src: img20,
      title: "Najeeb Residence",
      description: "Elegant Contemporary Family Residence",
      category: "RESIDENTIAL",
      link: "/main/NajeebResidence",
    },
    {
      src: img21,
      title: "Rejeendran Residence",
      description: "Elegant Contemporary Family Residence",
      category: "RESIDENTIAL",
      link: "/main/Rejeendran",
    },
    {
      src: img22,
      title: "Residence for Mr.Vipin Thomas",
      description: "Elegant Contemporary Family Residence",
      category: "RESIDENTIAL",
      link: "/main/VipinThomas",
    },
    {
      src: img23,
      title: "Casa Amancay",
      description: "Premium Villas",
      category: "COMMERCIAL",
      link: "/main/Amancay",
    },
    {
      src: img24,
      title: "ST.FRANCIS OF ASSISI CHURCH",
      description: "Church",
      category: "RELIGIOUS",
      link: "/main/Church",
    },
    {
      src: img25,
      title: "Evara Waters",
      description: "Resort",
      category: "COMMERCIAL",
      link: "/main/EvaraWaters",
    },
    {
      src: img26,
      title: "Water Lilly ",
      description: "Resort",
      category: "COMMERCIAL",
      link: "/main/WaterLilly",
    },
    {
      src: img27,
      title: "Raffles",
      description: "Resort",
      category: "COMMERCIAL",
      link: "/main/Raffles",
    },
  ];

  const filteredImages =
    activeTab === "ALL"
      ? images
      : images.filter((img) => img.category === activeTab);

  const handleImageClick = (link) => {
    if (link) navigate(link);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const visibleImages = filteredImages.slice(0, visibleCount);

  return (
    <div
      className="min-h-screen bg-black text-white relative overflow-hidden"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      {/* background glows to match ServiceLayout */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl opacity-45" />
        <div className="absolute bottom-[-140px] right-[-100px] w-96 h-96 rounded-full bg-white/5 blur-3xl opacity-60" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-0 py-12 md:py-14">
        {/* Heading (same scale as ServiceLayout) */}
        <header className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/25 bg-white/5 text-[11px] tracking-[0.22em] uppercase text-white/70">
            <span className="h-[6px] w-[6px] rounded-full bg-white/70" />
            <span>Our Portfolio</span>
          </div>

          <h1 className="mt-8 text-3xl sm:text-4xl md:text-5xl   tracking-[0.28em] uppercase"
          >
            Portfolio
          </h1>
        </header>

        {/* Banner (hero-style card) */}
        <section className="mb-10 md:mb-12">
          <div className="relative rounded-[30px] overflow-hidden bg-gradient-to-b from-white/10 via-white/5 to-black shadow-[0_28px_80px_rgba(0,0,0,0.85)] border border-white/15">
            <div className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[430px]">
              <img
                src={img9}
                alt="Portfolio Banner"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/20 via-white/5 to-transparent opacity-80" />
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black via-black/80 to-transparent px-5 flex items-center justify-between text-[11px] text-white/75">
              <span className="tracking-[0.18em] uppercase">
                Residential & Hospitality Highlights
              </span>
              <span className="hidden sm:flex items-center gap-2 tracking-[0.16em] uppercase">
                <span className="inline-block h-[6px] w-[6px] rounded-full bg-white/80" />
                Curated Projects
              </span>
            </div>
          </div>
        </section>

        {/* Tabs (matched to global scale) */}
        <section className="mb-10 md:mb-12">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setVisibleCount(9);
                  }}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm md:text-[13px] tracking-[0.18em] uppercase transition-all duration-300 border ${isActive
                    ? "bg-white text-black border-white shadow-[0_18px_45px_rgba(0,0,0,0.6)]"
                    : "border-white/25 text-white/65 hover:text-white hover:border-white/60"
                    }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </section>

        {/* Project Grid with flip-back details */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {visibleImages.map((img, idx) => (
              <div
                key={idx}
                className="w-full cursor-pointer [perspective:1100px]"
                onClick={() => toggleFlip(`project-${idx}`)}
              >
                <div
                  className={`relative w-full aspect-[4/3] transition-transform duration-[800ms]
                  [transform-style:preserve-3d]
                  ${flippedCards[`project-${idx}`]
                      ? "[transform:rotateY(180deg)]"
                      : ""
                    }`}
                >
                  {/* FRONT */}
                  <div
                    className="absolute inset-0 rounded-[28px] overflow-hidden 
                   shadow-[0_20px_60px_rgba(0,0,0,0.9)] bg-black
                   border border-white/12 [backface-visibility:hidden]"
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                      <h3 className="text-base sm:text-lg font-semibold text-white/90">
                        {img.title}
                      </h3>
                    </div>
                  </div>

                  {/* BACK */}
                  <div
                    className="absolute inset-0 rounded-[28px] overflow-hidden 
                   shadow-[0_22px_70px_rgba(0,0,0,1)]
                   bg-gradient-to-b from-white/10 via-black to-black 
                   border border-white/15 flex flex-col items-center justify-center
                   text-center px-5 sm:px-6
                   [backface-visibility:hidden] [transform:rotateY(180deg)]"
                  >
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 tracking-wide">
                      {img.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                      {img.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Load More — match CTA style from ServiceLayout */}
        {visibleCount < filteredImages.length && (
          <div className="flex justify-center mt-12 md:mt-14">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 rounded-full text-sm sm:text-base font-semibold bg-white text-black hover:bg-white/90 transition shadow-[0_18px_45px_rgba(0,0,0,0.7)] cursor-pointer"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
