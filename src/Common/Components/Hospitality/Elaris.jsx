import React from "react";
import ProjectCommonLayout from "../../../Common/Components/Portfolio/ProjectDetails/ProjectCommonLayout";

import bannerImage from "../../../assets/HospitalityProjects/Elaris/Exterior/Exterior1.png";
import g1 from "../../../assets/HospitalityProjects/Elaris/Exterior/Exterior2.png";
import g2 from "../../../assets/HospitalityProjects/Elaris/Exterior/Exterior3.png";
import g3 from "../../../assets/HospitalityProjects/Elaris/Exterior/Exterior4.png";
import g4 from "../../../assets/HospitalityProjects/Elaris/Exterior/Exterior5.png";
import g5 from "../../../assets/HospitalityProjects/Elaris/Exterior/Exterior6.png";
import g6 from "../../../assets/HospitalityProjects/Elaris/Exterior/Exterior7.png";
import g7 from "../../../assets/HospitalityProjects/Elaris/Exterior/Exterior8.png";
import g8 from "../../../assets/HospitalityProjects/Elaris/Exterior/Exterior9.png";
import g9 from "../../../assets/HospitalityProjects/Elaris/Exterior/Exterior10.png";
import g10 from "../../../assets/HospitalityProjects/Elaris/Exterior/Exterior11.png";

import t1 from "../../../assets/HospitalityProjects/Elaris/Interior/Interior1.png";
import t2 from "../../../assets/HospitalityProjects/Elaris/Interior/Interior2.png";
import t3 from "../../../assets/HospitalityProjects/Elaris/Interior/Interior3.png";
import t4 from "../../../assets/HospitalityProjects/Elaris/Interior/Interior4.png";
import t5 from "../../../assets/HospitalityProjects/Elaris/Interior/Interior5.png";
import t6 from "../../../assets/HospitalityProjects/Elaris/Interior/Interior6.png";
import t7 from "../../../assets/HospitalityProjects/Elaris/Interior/Interior7.png";

// ✅ Gallery images categorized properly
const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Exterior View 2", category: "Exterior" },
  { src: g3, alt: "Interior Hall", category: "Exterior" },
  { src: g4, alt: "Lobby Area", category: "Exterior" },
  { src: g5, alt: "Living Room", category: "Exterior" },
  { src: g6, alt: "Complete View", category: "Exterior" },
  { src: g7, alt: "Complete View", category: "Exterior" },
  { src: g8, alt: "Complete View", category: "Exterior" },
  { src: g9, alt: "Complete View", category: "Exterior" },
  { src: g10, alt: "Complete View", category: "Exterior" },

  { src: t1, alt: "Interior View", category: "Interior" },
{ src: t2, alt: "Interior View", category: "Interior" },
{ src: t3, alt: "Interior View", category: "Interior" },
{ src: t4, alt: "Interior View", category: "Interior" },
{ src: t5, alt: "Interior View", category: "Interior" },
{ src: t6, alt: "Interior View", category: "Interior" },
{ src: t7, alt: "Interior View", category: "Interior" },

];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Kavumannam , Wayanad , Kerala" },
  { label: "Type", value: "Hospitality Project" },
  { label: "Year", value: "2026" },
  { label: "Sqft", value: "" },
];

// ✅ Description
const description = [
  "This hospitality project combines timeless architecture with modern functionality, creating a serene and inviting environment. Carefully planned interiors and elegant exteriors reflect a perfect blend of comfort, aesthetics, and sophistication—ideal for premium guest experiences."
];

// ✅ Main component
const Elaris = () => {
  return (
    <ProjectCommonLayout
      title="Elaris"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default Elaris;
