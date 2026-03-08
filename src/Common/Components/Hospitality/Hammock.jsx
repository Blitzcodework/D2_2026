import React from "react";
import ProjectCommonLayout from "../../../Common/Components/Portfolio/ProjectDetails/ProjectCommonLayout";
import bannerImage from "../../../assets/HospitalityProjects/Hammock/exterior/Exterior1.jpg";
import g2 from "../../../assets/HospitalityProjects/Hammock/exterior/Exterior2.jpg";
import g3 from "../../../assets/HospitalityProjects/Hammock/interior/INTERIOR 1.jpg";
import g4 from "../../../assets/HospitalityProjects/Hammock/interior/INTERIOR 2.jpg";
import g5 from "../../../assets/HospitalityProjects/Hammock/interior/INTERIOR.jpg";
import g6 from "../../../assets/HospitalityProjects/Hammock/exterior/Exterior3.jpg";



const galleryImages = [
  { src: bannerImage, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Exterior View 2", category: "Exterior" },
  { src: g3, alt: "Interior Hall", category: "Interior" },
  { src: g4, alt: "Lobby Area", category: "Interior" },
  { src: g5, alt: "Living Room", category: "Interior" },
  { src: g6, alt: "Complete View", category: "All" },
];

const projectDetails = [
  { label: "Location", value: "kolagappara , Wayanad , Kerala" },
  { label: "Type", value: "Hospitality Project" },
  { label: "Year", value: "" },
  { label: "Sqft", value: "" },
];

const description = [
  "This hospitality project combines timeless architecture with modern functionality, creating a serene and inviting environment. Carefully planned interiors and elegant exteriors reflect a perfect blend of comfort, aesthetics, and sophistication—ideal for premium guest experiences."
];

const Hammock = () => {
  return (
    <ProjectCommonLayout
      title="Hammock luxury resort and Spa"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default Hammock;
