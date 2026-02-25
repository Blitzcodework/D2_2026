import React from "react";
import ProjectCommonLayout from "../../Components/Portfolio/ProjectDetails/ProjectCommonLayout";
import bannerImage from "../../../assets/Commercial/Evara/exterior/Exterior1.png"
import g1 from "../../../assets/Commercial/Evara/exterior/Exterior1.png"
import g2 from "../../../assets/Commercial/Evara/exterior/Exterior2.png"
import g3 from "../../../assets/Commercial/Evara/exterior/Exterior3.png"
import g4 from "../../../assets/Commercial/Evara/exterior/Exterior4.png"
import g5 from "../../../assets/Commercial/Evara/exterior/Exterior5.png"
import g6 from "../../../assets/Commercial/Evara/exterior/Exterior6.png"
import g7 from "../../../assets/Commercial/Evara/Interior/Interior1.png"
import g8 from "../../../assets/Commercial/Evara/Interior/Interior2.png"
import g9 from "../../../assets/Commercial/Evara/Interior/Interior3.png"
import g10 from "../../../assets/Commercial/Evara/Interior/Interior4.png"
import g11 from "../../../assets/Commercial/Evara/Interior/Interior5.png"
import g12 from "../../../assets/Commercial/Evara/Interior/Interior6.png"



// ✅ Define gallery with categories
const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Exterior View", category: "Exterior" },
  { src: g3, alt: "Exterior View", category: "Exterior" },
  { src: g4, alt: "Exterior View", category: "Exterior" },
  { src: g5, alt: "Exterior View", category: "Exterior" },
  { src: g6, alt: "Exterior View", category: "Exterior" },
  { src: g7, alt: "Interior View", category: "Interior" },
  { src: g8, alt: "Interior View", category: "Interior" },
  { src: g9, alt: "Interior View", category: "Interior" },
  { src: g10, alt: "Interior View", category: "Interior" },
  { src: g11, alt: "Interior View", category: "Interior" },
  { src: g12, alt: "Interior View", category: "Interior" },
];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Banasura , Wayanad" },
  { label: "Type", value: "Resort" },
  { label: "Year", value: "2025" },
  { label: "Sqft", value: "45500" },
];


const description = [
    "Evara waters is a landmark mountain top development that reflects a philosophy rooted in context and sensitive to the stillness of its lakeside setting"
];


const EvaraWaters = () => {
  return (
    <ProjectCommonLayout
      title="Evara Waters"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default EvaraWaters;
