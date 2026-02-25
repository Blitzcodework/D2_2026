import React from "react";
import ProjectCommonLayout from "./ProjectCommonLayout";
import bannerImage from "../../../../assets/Residential/rejeendran/RAJEENDRAN.mov"
import g1 from "../../../../assets/Residential/rejeendran/Exterior/Exterior1.png"
import g2 from "../../../../assets/Residential/rejeendran/Exterior/Exterior2.png"
import g3 from "../../../../assets/Residential/rejeendran/Exterior/Exterior3.png"
import g4 from "../../../../assets/Residential/rejeendran/Exterior/Exterior4.png"
import g5 from "../../../../assets/Residential/rejeendran/Exterior/Exterior5.png"
import g6 from "../../../../assets/Residential/rejeendran/Exterior/Exterior6.png"





// ✅ Define gallery with categories
const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Interior Hall", category: "Exterior" },
  { src: g3, alt: "Living Room", category: "Exterior" },
  { src: g4, alt: "Garden Area", category: "Exterior" },
  { src: g5, alt: "Full View", category: "Exterior" },
  { src: g6, alt: "Full View", category: "Exterior" },
];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Kumaraswami , Kozhikode" },
  { label: "Type", value: "Residential Complex " },
  { label: "Year", value: "2025" },
  { label: "Sqft", value: "3580" },
 
];

// ✅ Project description
const description = [
    ""
];


const Rejeendran = () => {
  return (
    <ProjectCommonLayout
      title="Santolina"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default Rejeendran;
