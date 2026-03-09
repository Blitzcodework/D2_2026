import React from "react";
import ProjectCommonLayout from "./ProjectCommonLayout";
import bannerImage from "../../../../assets/Residential/amaanath/Exterior1.png"
import g1 from "../../../../assets/Residential/amaanath/Exterior1.png"
import g2 from "../../../../assets/Residential/amaanath/Exterior2.png"
import g3 from "../../../../assets/Residential/amaanath/Exterior3.png"








// ✅ Define gallery with categories
const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Interior Hall", category: "Exterior" },
  { src: g3, alt: "Full View", category: "Exterior" },
];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Thondayad , Kozhikode , Kerala" },
  { label: "Type", value: "Residential  " },
  { label: "Year", value: "2019" },
  { label: "Sqft", value: "3500" },
];

// ✅ Project description
const description = [
  "Amanath Residence is a 3200 sqft contemporary home completed in 2025 at Thondayad, Calicut, designed to offer elegant living with spacious interiors and seamless functionality."
];


const Amanath = () => {
  return (
    <ProjectCommonLayout
      title="Amanath "
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
