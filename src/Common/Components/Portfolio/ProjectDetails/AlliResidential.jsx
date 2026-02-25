import React from "react";
import ProjectCommonLayout from "./ProjectCommonLayout";
import bannerImage from "../../../../assets/Residential/alli/Sequence01.mp4"
import g1 from "../../../../assets/Residential/alli/Exterior/AlliBg2.png"
import g2 from "../../../../assets/Residential/alli/Exterior/AlliBg3.png"
import g3 from "../../../../assets/Residential/alli/Interior/InteriorBg1.png"
import g4 from "../../../../assets/Residential/alli/Interior/InteriorBg2.png"
import g5 from "../../../../assets/Residential/alli/Interior/InteriorBg3.png"
import g6 from "../../../../assets/Residential/alli/Interior/InteriorBg4.png"
import g7 from "../../../../assets/Residential/alli/Interior/InteriorBg6.png"
import g8 from "../../../../assets/Residential/alli/Interior/InteriorBg7.png"
import g9 from "../../../../assets/Residential/alli/Interior/InteriorBg8.png"
import g10 from "../../../../assets/Residential/alli/Exterior/AlliBg1.png"





// ✅ Define gallery with categories
const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Interior Hall", category: "Exterior" },
  { src: g3, alt: "Living Room", category: "Interior" },
  { src: g4, alt: "Garden Area", category: "Interior" },
  { src: g5, alt: "Lobby Design", category: "Interior" },
  { src: g6, alt: "Full View", category: "All" },
  { src: g7, alt: "Full View", category: "Interior" },
  { src: g8, alt: "Full View", category: "Interior" },
  { src: g9, alt: "Full View", category: "Interior" },
  { src: g10, alt: "Full View", category: "Exterior" },
  
];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Kochi, Kerala" },
  { label: "Type", value: "Residential Complex" },
  { label: "Year", value: "2024" },
];

// ✅ Project description
const description = [
  "The Alli Residence is a striking fusion of tropical and vernacular architecture nestled within a lush. Designed to harmonize with its natural surroundings, the home emphasizes openness, warmth, and seamless integration with nature while celebrating traditional architectural language through modern sensibilities."
];


const PortfolioProject = () => {
  return (
    <ProjectCommonLayout
      title="Alli"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default PortfolioProject;
