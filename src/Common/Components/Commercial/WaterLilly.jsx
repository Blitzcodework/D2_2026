import React from "react";
import ProjectCommonLayout from "../../Components/Portfolio/ProjectDetails/ProjectCommonLayout";
import bannerImage from "../../../assets/Commercial/WATER LILLY/Exterior/Exterior1.jpg"
import g1 from "../../../assets/Commercial/WATER LILLY/Exterior/Exterior1.jpg"
import g2 from "../../../assets/Commercial/WATER LILLY/Exterior/Exterior2.jpg"
import g3 from "../../../assets/Commercial/WATER LILLY/Exterior/Exterior3.jpg"
import g4 from "../../../assets/Commercial/WATER LILLY/Exterior/Exterior4.jpg"
import g5 from "../../../assets/Commercial/WATER LILLY/Interior/Interior1.jpg"
import g6 from "../../../assets/Commercial/WATER LILLY/Interior/Interior2.jpg"
import g7 from "../../../assets/Commercial/WATER LILLY/Interior/Interior3.jpg"
import g8 from "../../../assets/Commercial/WATER LILLY/Interior/Interior4.jpg"
import g9 from "../../../assets/Commercial/WATER LILLY/Interior/Interior5.jpg"
import g10 from "../../../assets/Commercial/WATER LILLY/Interior/Interior6.jpg"





// ✅ Define gallery with categories
const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Exterior View", category: "Exterior" },
  { src: g3, alt: "Exterior View", category: "Exterior" },
  { src: g4, alt: "Exterior View", category: "Exterior" },
  { src: g5, alt: "Interior View", category: "Interior" },
  { src: g6, alt: "Interior View", category: "Interior" },
  { src: g7, alt: "Interior View", category: "Interior" },
  { src: g8, alt: "Interior View", category: "Interior" },
  { src: g9, alt: "Interior View", category: "Interior" },
  { src: g10, alt: "Interior View", category: "Interior" },
];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Cheruvannur, Kozhikode" },
  { label: "Type", value: "Resort" },
  { label: "Year", value: "2023" },
  { label: "Sqft", value: "90000" },
];


const description = [
    "Situated along the serene banks of the Chaliyar River in Kozhikode, The Water Lily is a masterful revival of the historc Hindustan Tile Factory. This artfully decoratedhotel honors its índustrial legacy through thoughtful adaptation and repurposíng."
];


const WaterLilly = () => {
  return (
    <ProjectCommonLayout
      title="Water Lilly"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default WaterLilly;
