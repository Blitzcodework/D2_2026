import React from "react";
import ProjectCommonLayout from "../../Components/Portfolio/ProjectDetails/ProjectCommonLayout";
import bannerImage from "../../../assets/Commercial/Maratt Tech Park/Exterior/Exterior1.jpg"
import g1 from "../../../assets/Commercial/Maratt Tech Park/Exterior/Exterior1.jpg"
import g2 from "../../../assets/Commercial/Maratt Tech Park/Exterior/Exterior2.jpg"
import g3 from "../../../assets/Commercial/Maratt Tech Park/Exterior/Exterior3.jpg"
import g4 from "../../../assets/Commercial/Maratt Tech Park/Exterior/Exterior4.jpg"
import g5 from "../../../assets/Commercial/Maratt Tech Park/Interior/Interior1.jpg"
import g6 from "../../../assets/Commercial/Maratt Tech Park/Interior/Interior2.jpg"
import g7 from "../../../assets/Commercial/Maratt Tech Park/Interior/Interior3.jpg"
import g8 from "../../../assets/Commercial/Maratt Tech Park/Interior/Interior4.jpg"
import g9 from "../../../assets/Commercial/Maratt Tech Park/Interior/Interior5.jpg"
import g10 from "../../../assets/Commercial/Maratt Tech Park/Interior/Interior6.jpg"
import g11 from "../../../assets/Commercial/Maratt Tech Park/Interior/Interior7.jpg"
import g12 from "../../../assets/Commercial/Maratt Tech Park/Interior/Interior8.jpg"






const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Exterior View", category: "Exterior" },
  { src: g3, alt: "Exterior View", category: "Exterior" },
  { src: g4, alt: "Exterior View", category: "Exterior" },
  { src: g5, alt: "Exterior View", category: "Interior" },
  { src: g6, alt: "Exterior View", category: "Interior" },
  { src: g7, alt: "Exterior View", category: "Interior" },
  { src: g8, alt: "Exterior View", category: "Interior" },
  { src: g9, alt: "Exterior View", category: "Interior" },
  { src: g10, alt: "Exterior View", category: "Interior" },
  { src: g11, alt: "Exterior View", category: "Interior" },
  { src: g12, alt: "Exterior View", category: "Interior" },

];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Smart city kakkanad , Ernakulam  , Kerala" },
  { label: "Type", value: "Commercial" },
  { label: "Year", value: "2025" },
  { label: "Sqft", value: "500000" },
];


const description = [
    "Maratt Ltd will develop a seven stored building with a built-up area of 5 lakh Sqft. This develop ment in SmartCity Kochi will generate around 4530 jobs."
];


const MarattTechpark = () => {
  return (
    <ProjectCommonLayout
      title="Maratt Tech Park"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default MarattTechpark;
