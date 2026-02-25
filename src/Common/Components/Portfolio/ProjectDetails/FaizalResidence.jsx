import React from "react";
import ProjectCommonLayout from "./ProjectCommonLayout";
import bannerImage from "../../../../assets/Residential/fizal/Sequence 01.mp4"
import g1 from "../../../../assets/Residential/fizal/Exterior/Exterior2.png"
import g2 from "../../../../assets/Residential/fizal/Exterior/Exterior1.png"
import g3 from "../../../../assets/Residential/fizal/Exterior/Exterior3.png"
import g4 from "../../../../assets/Residential/fizal/Interior/Interior3.png"
import g5 from "../../../../assets/Residential/fizal/Interior/Interior4.png"
import g6 from "../../../../assets/Residential/fizal/Interior/Interior5.png"





// ✅ Define gallery with categories
const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Interior Hall", category: "Exterior" },
  { src: g3, alt: "Living Room", category: "Exterior" },
  { src: g4, alt: "Garden Area", category: "Interior" },
  { src: g5, alt: "Lobby Design", category: "Interior" },
  { src: g6, alt: "Full View", category: "All" },
];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Padikkal  ,Malapuram" },
  { label: "Type", value: "Residential Complex " },
  { label: "Year", value: "2023" },
 
];

// ✅ Project description
const description = [
  "This  residence blends traditional architectural elements with modern conveniences, offering a peaceful and functional living space. The combination of well-thought-out landscaping, classic roof design, and modern details creates a sophisticated, timeless aesthetic that is perfect for both relaxation and family living."
];


const FaizalResidence = () => {
  return (
    <ProjectCommonLayout
      title="Faizal Residence"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default FaizalResidence;
