import React from "react";
import ProjectCommonLayout from "./ProjectCommonLayout";
import bannerImage from "../../../../assets/Residential/amaanath/Exterior1.jpg"
import g1 from "../../../../assets/Residential/amaanath/Exterior2.jpg"
import g2 from "../../../../assets/Residential/amaanath/Exterior3.jpg"
import g3 from "../../../../assets/Residential/amaanath/Exterior4.jpg"
import g4 from "../../../../assets/Residential/amaanath/Exterior5.jpg"
import g5 from "../../../../assets/Residential/amaanath/Exterior6.jpg"
import g6 from "../../../../assets/Residential/amaanath/Exterior7.jpg"






// ✅ Define gallery with categories
const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Interior Hall", category: "Exterior" },
  { src: g3, alt: "Living Room", category: "Exterior" },
  { src: g4, alt: "Garden Area", category: "Exterior" },
  { src: g5, alt: "Lobby Design", category: "Exterior" },
  { src: g6, alt: "Full View", category: "All" },
];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Thondayad  ,kozhikode" },
  { label: "Type", value: "Residential  " },
  { label: "Year", value: "2025" },
  { label: "Sqft", value: "3200" },
];

// ✅ Project description
const description = [
  "Amanath Residence is a 3200 sqft contemporary home completed in 2025 at Thondayad, Calicut, designed to offer elegant living with spacious interiors and seamless functionality."
];


const Amanath = () => {
  return (
    <ProjectCommonLayout
      title="Amanath Residence"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default Amanath;
