import React from "react";
import ProjectCommonLayout from "./ProjectCommonLayout";
import bannerImage from "../../../../assets/Residential/najeeb/Sequence 01.mov"
import g1 from "../../../../assets/Residential/najeeb/exterior/Exterior1.png";
import g2 from "../../../../assets/Residential/najeeb/exterior/Exterior2.png";
import g3 from "../../../../assets/Residential/najeeb/exterior/Exterior3.png";






// ✅ Define gallery with categories
const galleryImages = [
  { src: g1, alt: "Exterior View 1", category: "Exterior" },
  { src: g2, alt: "Exterior View 2", category: "Exterior" },
  { src: g3, alt: "Exterior View 3", category: "Exterior" },


];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Thondayad ,kozhikode" },
  { label: "Type", value: "Residential Complex " },
  { label: "Year", value: "2019" },
  { label: "Sqft", value: "3500" },
 
];

// ✅ Project description
const description = [
    ""
];


const NajeebResidence = () => {
  return (
    <ProjectCommonLayout
      title="Residence for Najeeb"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default NajeebResidence;
