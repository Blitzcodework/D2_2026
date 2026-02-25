import React from "react";
import ProjectCommonLayout from "./ProjectCommonLayout";
import bannerImage from "../../../../assets/Residential/kottagiri/Sequence 01.mp4"
import g1 from "../../../../assets/Residential/kottagiri/Exterior/Exterior1.png"
import g2 from "../../../../assets/Residential/kottagiri/Exterior/Exterior2.png"
import g3 from "../../../../assets/Residential/kottagiri/Interior/Interior1.png"
import g4 from "../../../../assets/Residential/kottagiri/Interior/Interior2.png"
import g5 from "../../../../assets/Residential/kottagiri/Interior/Interior3.png"
import g6 from "../../../../assets/Residential/kottagiri/Interior/Interior4.png"






// ✅ Define gallery with categories
const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Interior Hall", category: "Exterior" },
  { src: g3, alt: "Living Room", category: "Interior" },
  { src: g4, alt: "Garden Area", category: "Interior" },
  { src: g5, alt: "Lobby Design", category: "Interior" },
  { src: g6, alt: "Lobby Design", category: "Interior" },  
 
];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Kottagiri , Tamilnadu" },
  { label: "Type", value: "Residential Complex " },
  { label: "Year", value: "2025" },
  { label: "Sqft", value: "3580 per cottage   ( 8 cottages and 1 club house )" },
 
];

// ✅ Project description
const description = [
""];


const Kottagiri = () => {
  return (
    <ProjectCommonLayout
      title="Bungalow at Kottagiri"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default Kottagiri;
