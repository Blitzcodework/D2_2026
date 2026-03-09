import React from "react";
import ProjectCommonLayout from "./ProjectCommonLayout";
import bannerImage from "../../../../assets/Residential/inea/Sequence 01.mp4"
import g1 from "../../../../assets/Residential/inea/exterior/Exterior2.png"
import g2 from "../../../../assets/Residential/inea/exterior/Exterior1.png"
import g3 from "../../../../assets/Residential/inea/exterior/Exterior2.png"
import g4 from "../../../../assets/Residential/inea/exterior/Exterior3.png"
import g5 from "../../../../assets/Residential/inea/exterior/Exterior4.png"
import g6 from "../../../../assets/Residential/inea/interior/Interior1.png"
import g7 from "../../../../assets/Residential/inea/interior/Interior2.png"
import g8 from "../../../../assets/Residential/inea/interior/Interior3.png"
import g9 from "../../../../assets/Residential/inea/interior/Interior4.png"
import g10 from "../../../../assets/Residential/inea/interior/Interior5.png"
import g11 from "../../../../assets/Residential/inea/interior/Interior6.png"
import g12 from "../../../../assets/Residential/inea/interior/Interior7.png"
import g13 from "../../../../assets/Residential/inea/interior/Interior8.png"
import g14 from "../../../../assets/Residential/inea/interior/Interior9.png"
import g15 from "../../../../assets/Residential/inea/interior/Interior10.png"



// ✅ Define gallery with categories
const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Interior Hall", category: "Exterior" },
  { src: g3, alt: "Living Room", category: "Exterior" },
  { src: g4, alt: "Garden Area", category: "Exterior" },
  { src: g5, alt: "Lobby Design", category: "Interior" },
  { src: g6, alt: "Lobby Design", category: "Interior" },
  { src: g7, alt: "Lobby Design", category: "Interior" },
  { src: g8, alt: "Lobby Design", category: "Interior" },
  { src: g9, alt: "Lobby Design", category: "Interior" },
  { src: g10, alt: "Lobby Design", category: "Interior" },
  { src: g11, alt: "Lobby Design", category: "Interior" },
  { src: g12, alt: "Lobby Design", category: "Interior" },
  { src: g13, alt: "Lobby Design", category: "Interior" },
  { src: g14, alt: "Lobby Design", category: "Interior" },
  { src: g15, alt: "Full View", category: "All" },
  
];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Coimbatore , Tamilnadu" },
  { label: "Type", value: "Residential Complex " },
  { label: "Year", value: "2025" },
  { label: "Sqft", value: "12810" },
 
];

// ✅ Project description
const description = [
  "This  residence blends traditional architectural elements with modern conveniences, offering a peaceful and functional living space. The combination of well-thought-out landscaping, classic roof design, and modern details creates a sophisticated, timeless aesthetic that is perfect for both relaxation and family living."
];


const Inea = () => {
  return (
    <ProjectCommonLayout
      title="Inea"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default Inea;
