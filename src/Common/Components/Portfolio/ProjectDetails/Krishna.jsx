import React from "react";
import ProjectCommonLayout from "./ProjectCommonLayout";
import bannerImage from "../../../../assets/Residential/krishna/Sequence 01.mp4"
import g1 from "../../../../assets/Residential/krishna/exterior/Exterior1.png"
import g2 from "../../../../assets/Residential/krishna/exterior/Exterior2.png"
import g3 from "../../../../assets/Residential/krishna/exterior/Exterior3.png"
import g4 from "../../../../assets/Residential/krishna/interior/Interior1.png"
import g5 from "../../../../assets/Residential/krishna/interior/Interior2.png"
import g6 from "../../../../assets/Residential/krishna/interior/Interior3.png"
import g7 from "../../../../assets/Residential/krishna/interior/Interior4.png"
import g8 from "../../../../assets/Residential/krishna/interior/Interior5.png"
import g9 from "../../../../assets/Residential/krishna/interior/Interior6.png"
import g10 from "../../../../assets/Residential/krishna/interior/Interior7.png"
import g11 from "../../../../assets/Residential/krishna/interior/Interior8.png"
import g12 from "../../../../assets/Residential/krishna/interior/Interior9.png"


// ✅ Define gallery with categories
const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Interior Hall", category: "Exterior" },
  { src: g3, alt: "Living Room", category: "Interior" },
  { src: g4, alt: "Garden Area", category: "Interior" },
  { src: g5, alt: "Lobby Design", category: "Interior" },
  { src: g6, alt: "Lobby Design", category: "Interior" },  
  { src: g7, alt: "Lobby Design", category: "Interior" },  
  { src: g8, alt: "Lobby Design", category: "Interior" },  
  { src: g9, alt: "Lobby Design", category: "Interior" },  
  { src: g10, alt: "Lobby Design", category: "Interior" },  
  { src: g11, alt: "Lobby Design", category: "Interior" },  
  { src: g12, alt: "Lobby Design", category: "Interior" },  
 
];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "" },
  { label: "Type", value: "Residential Complex " },
  { label: "Year", value: "" },
  { label: "Sqft", value: "" },
 
];

// ✅ Project description
const description = [
""];


const Krishna = () => {
  return (
    <ProjectCommonLayout
      title="Krishna"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default Krishna;
