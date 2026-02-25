import React from "react";
import ProjectCommonLayout from "./ProjectCommonLayout";
import bannerImage from "../../../../assets/Residential/himadri/Sequence 01.mp4"
import g1 from "../../../../assets/Residential/himadri/Exterior/Exterior1.png"
import g2 from "../../../../assets/Residential/himadri/Exterior/Exterior2.png"
import g3 from "../../../../assets/Residential/himadri/Exterior/Exterior3.png"
import g4 from "../../../../assets/Residential/himadri/Exterior/Exterior4.png"
import g5 from "../../../../assets/Residential/himadri/Exterior/Exterior5.png"





// ✅ Define gallery with categories
const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Interior Hall", category: "Exterior" },
  { src: g3, alt: "Living Room", category: "Exterior" },
  { src: g4, alt: "Garden Area", category: "Exterior" },
  { src: g5, alt: "Lobby Design", category: "Exterior" },
 
];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Iringadanpilly" },
  { label: "Type", value: "Residential Complex " },
  { label: "Year", value: "2025" },
 
];

// ✅ Project description
const description = [
""];


const Himadri = () => {
  return (
    <ProjectCommonLayout
      title="Himadri"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default Himadri;
