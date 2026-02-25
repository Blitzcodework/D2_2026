import React from "react";
import ProjectCommonLayout from "../../../Common/Components/Portfolio/ProjectDetails/ProjectCommonLayout";
import bannerImage from "../../../assets/HospitalityProjects/Bhadram/Exterior/f1.jpg";
import g2 from "../../../assets/HospitalityProjects/Bhadram/Exterior/f2.jpg";
import g3 from "../../../assets/HospitalityProjects/Bhadram/Interior/f13.jpg";
import g4 from "../../../assets/HospitalityProjects/Bhadram/Interior/f15.jpg";
import g5 from "../../../assets/HospitalityProjects/Bhadram/Interior/f18.jpg";
import g6 from "../../../assets/HospitalityProjects/Bhadram/Exterior/f10.jpg";
import g7 from "../../../assets/HospitalityProjects/Bhadram/Exterior/f9.jpg";


const galleryImages = [
  { src: bannerImage, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Exterior View 2", category: "Exterior" },
  { src: g3, alt: "Interior Hall", category: "Interior" },
  { src: g4, alt: "Lobby Area", category: "Interior" },
  { src: g5, alt: "Living Room", category: "Interior" },
  { src: g7, alt: "Living Room", category: "Exterior" },
  { src: g6, alt: "Complete View", category: "All" },
];

const projectDetails = [
  { label: "Location", value: "Chalappuram, Kozhikode" },
  { label: "Type", value: "Hospitality Project" },
  { label: "Year", value: "2024" },
  { label: "Sqft", value: "3684" },
];

const description = [
  "This hospitality project combines timeless architecture with modern functionality, creating a serene and inviting environment. Carefully planned interiors and elegant exteriors reflect a perfect blend of comfort, aesthetics, and sophistication—ideal for premium guest experiences."
];

const Bhadram = () => {
  return (
    <ProjectCommonLayout
      title="Bhadram Hospitality"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default Bhadram;
