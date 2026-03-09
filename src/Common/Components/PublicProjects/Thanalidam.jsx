import React from "react";
import ProjectCommonLayout from "../../Components/Portfolio/ProjectDetails/ProjectCommonLayout";
import bannerImage from "../../../assets/Public Projects/Thanalidam/Exterior1.jpeg"

import g1 from "../../../assets/Public Projects/Thanalidam/Exterior2.jpeg";
import g2 from "../../../assets/Public Projects/Thanalidam/Exterior3.jpeg";
import g3 from "../../../assets/Public Projects/Thanalidam/Exterior4.jpeg";
import g4 from "../../../assets/Public Projects/Thanalidam/Exterior5.jpeg";



const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Exterior View", category: "Exterior" },
  { src: g3, alt: "Exterior View", category: "Exterior" },
  { src: g4, alt: "Exterior View", category: "Exterior" },

];

const projectDetails = [
  { label: "Location", value: "Methottutazham ,kozhikode Kerala" },
  { label: "Type", value: "Public Project" },
  { label: "Year", value: "2024" },
  { label: "Sqft", value: "262.02" },
];


const description = [
    "To create a vibrant and inclusive age-friendly public space that caters to the needs and preferences of diverse age groups while incorporating a touch of vernacular style. The design should prioritize accessibility, comfort, and cultural sensitivity, fostering a sense of community and well-being at Kommeri."
];


const Thanalidam = () => {
  return (
    <ProjectCommonLayout
      title="Thanalidam"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default Thanalidam;
