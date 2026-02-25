import React from "react";
import ProjectCommonLayout from "./ProjectCommonLayout";

import bannerImage from "../../../../assets/Residential/mr.murali/Sequence 01.mp4";

import g1 from "../../../../assets/Residential/mr.murali/exterior/Exterior1.png";
import g2 from "../../../../assets/Residential/mr.murali/interior/Interior1.png";
import g3 from "../../../../assets/Residential/mr.murali/interior/Interior2.png";
import g4 from "../../../../assets/Residential/mr.murali/interior/Interior3.png";
import g5 from "../../../../assets/Residential/mr.murali/interior/Interior4.png";
import g6 from "../../../../assets/Residential/mr.murali/interior/Interior5.png";
import g7 from "../../../../assets/Residential/mr.murali/interior/Interior6.png";
import g8 from "../../../../assets/Residential/mr.murali/interior/Interior7.png";
import g9 from "../../../../assets/Residential/mr.murali/interior/Interior8.png";
import g10 from "../../../../assets/Residential/mr.murali/interior/Interior9.png";
import g11 from "../../../../assets/Residential/mr.murali/interior/Interior10.png";


// ✅ Gallery Images (Correct Categories)
const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Exterior" },

  { src: g2, alt: "Interior Hall", category: "Interior" },
  { src: g3, alt: "Living Room", category: "Interior" },
  { src: g4, alt: "Bedroom View", category: "Interior" },
  { src: g5, alt: "Kitchen Area", category: "Interior" },
  { src: g6, alt: "Dining Area", category: "Interior" },
  { src: g7, alt: "Staircase Design", category: "Interior" },
  { src: g8, alt: "Interior Detail", category: "Interior" },
  { src: g9, alt: "Interior Lighting", category: "Interior" },
  { src: g10, alt: "Interior Wall Finish", category: "Interior" },
  { src: g11, alt: "Interior Full View", category: "Interior" },
];


// ✅ Project Details
const projectDetails = [
  { label: "Location", value: "Chennai, Tamil Nadu" },
  { label: "Type", value: "Residential Complex" },
  { label: "Year", value: "2022" },
  { label: "Area", value: "6500 Sqft" },
];


// ✅ Project Description
const description = [
  "This residence blends traditional architectural elements with modern conveniences, offering a peaceful and functional living space. The combination of well-planned landscaping, classic roof design, and refined interiors creates a sophisticated and timeless aesthetic ideal for family living."
];



const Mano = () => {
  return (
    <ProjectCommonLayout
      title="Mano Residence"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default Mano;