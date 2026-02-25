import React from "react";
import ProjectCommonLayout from "./ProjectCommonLayout";
import bannerImage from "../../../../assets/Residential/mr.noble/Sequence 01.mp4"
import g1 from "../../../../assets/Residential/mr.noble/exterior/Exterior1.png";
import g2 from "../../../../assets/Residential/mr.noble/exterior/Exterior2.png";
import g3 from "../../../../assets/Residential/mr.noble/exterior/Exterior3.png";
import g4 from "../../../../assets/Residential/mr.noble/exterior/Exterior4.png";
import g5 from "../../../../assets/Residential/mr.noble/exterior/Exterior5.png";
import g6 from "../../../../assets/Residential/mr.noble/exterior/Exterior6.png";
import g7 from "../../../../assets/Residential/mr.noble/exterior/Exterior7.png";
import g8 from "../../../../assets/Residential/mr.noble/exterior/Exterior8.png";
import g9 from "../../../../assets/Residential/mr.noble/exterior/Exterior9.png";
import g10 from "../../../../assets/Residential/mr.noble/exterior/Exterior10.png";
import g11 from "../../../../assets/Residential/mr.noble/exterior/Exterior11.png";





// ✅ Define gallery with categories
const galleryImages = [
  { src: g1, alt: "Exterior View 1", category: "Exterior" },
  { src: g2, alt: "Exterior View 2", category: "Exterior" },
  { src: g3, alt: "Exterior View 3", category: "Exterior" },
  { src: g4, alt: "Exterior View 4", category: "Exterior" },
  { src: g5, alt: "Exterior View 5", category: "Exterior" },
  { src: g6, alt: "Exterior View 6", category: "Exterior" },
  { src: g7, alt: "Exterior View 7", category: "Exterior" },
  { src: g8, alt: "Exterior View 8", category: "Exterior" },
  { src: g9, alt: "Exterior View 9", category: "Exterior" },
  { src: g10, alt: "Exterior View 10", category: "Exterior" },
  { src: g11, alt: "Exterior View 11", category: "Exterior" },

];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Peravoor , Kannur" },
  { label: "Type", value: "Residential Complex " },
  { label: "Year", value: "2019" },
  { label: "Sqft", value: "13860" },
 
];

// ✅ Project description
const description = [
    ""
];


const NobleResidence = () => {
  return (
    <ProjectCommonLayout
      title="Residence for Mr. Noble"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default NobleResidence;
