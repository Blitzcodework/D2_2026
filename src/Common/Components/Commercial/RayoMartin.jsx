import React from "react";
import ProjectCommonLayout from "../../Components/Portfolio/ProjectDetails/ProjectCommonLayout";
import bannerImage from "../../../assets/Commercial/Rayo Martin/Exterior1.jpeg"
import g1 from "../../../assets/Commercial/Rayo Martin/Exterior1.jpeg"
import g2 from "../../../assets/Commercial/Rayo Martin/Exterior2.jpeg"
import g3 from "../../../assets/Commercial/Rayo Martin/Exterior3.jpeg"
import g4 from "../../../assets/Commercial/Rayo Martin/Exterior4.jpeg"
import g5 from "../../../assets/Commercial/Rayo Martin/Exterior5.jpeg"
import g6 from "../../../assets/Commercial/Rayo Martin/Exterior6.jpeg"




const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Exterior View", category: "Exterior" },
  { src: g3, alt: "Exterior View", category: "Exterior" },
  { src: g4, alt: "Exterior View", category: "Exterior" },
  { src: g5, alt: "Exterior View", category: "Exterior" },
  { src: g6, alt: "Exterior View", category: "Exterior" },

];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Malapparamba, Kozhikode , Kerala" },
  { label: "Type", value: "Commercial" },
  { label: "Year", value: "2024" },
  { label: "Sqft", value: "20000" },
];


const description = [
    "In the heart of Kerala, the headquarters of Rayo Martín Builders are to cated lt spreads an area of 20.000 sqft. They are more than just builders they are designers of a legacy Recognized as the premier real estate developers in the city, their name signifies prècision, innovation and an un wavering commitment to perfection"
];


const RayoMartin = () => {
  return (
    <ProjectCommonLayout
      title="Rayo Martin Head Office"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default RayoMartin;
