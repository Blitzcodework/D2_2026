import React from "react";
import ProjectCommonLayout from "../../../Common/Components/Portfolio/ProjectDetails/ProjectCommonLayout";

import bannerImage from "../../../assets/HospitalityProjects/Arancia/Exterior/Exterior1.png";
import g1 from "../../../assets/HospitalityProjects/Arancia/Exterior/Exterior1.png";
import g2 from "../../../assets/HospitalityProjects/Arancia/Exterior/Exterior2.png";
import g3 from "../../../assets/HospitalityProjects/Arancia/Interior/Interior1.png";
import g4 from "../../../assets/HospitalityProjects/Arancia/Interior/Interior2.png";
import g5 from "../../../assets/HospitalityProjects/Arancia/Interior/Interior3.png";
import g6 from "../../../assets/HospitalityProjects/Arancia/Interior/Interior4.png";

// ✅ Gallery images categorized properly
const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Exterior View 2", category: "Exterior" },
  { src: g3, alt: "Interior Hall", category: "Interior" },
  { src: g4, alt: "Lobby Area", category: "Interior" },
  { src: g5, alt: "Living Room", category: "Interior" },
  { src: g6, alt: "Complete View", category: "All" },
];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Chalappuram, Kozhikode" },
  { label: "Type", value: "Hospitality Project" },
  { label: "Year", value: "2024" },
  { label: "Sqft", value: "3684" },
];

// ✅ Description
const description = [
  "This hospitality project combines timeless architecture with modern functionality, creating a serene and inviting environment. Carefully planned interiors and elegant exteriors reflect a perfect blend of comfort, aesthetics, and sophistication—ideal for premium guest experiences."
];

// ✅ Main component
const Arancia = () => {
  return (
    <ProjectCommonLayout
      title="Arancia Hospitality"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default Arancia;
