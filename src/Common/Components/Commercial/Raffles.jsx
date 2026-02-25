import React from "react";
import ProjectCommonLayout from "../../Components/Portfolio/ProjectDetails/ProjectCommonLayout";
import bannerImage from "../../../assets/Commercial/Raffles/Exterior/Exterior1.png"
import g1 from "../../../assets/Commercial/Raffles/Exterior/Exterior1.png"
import g2 from "../../../assets/Commercial/Raffles/Exterior/Exterior2.png"
import g3 from "../../../assets/Commercial/Raffles/Exterior/Exterior3.png"
import g4 from "../../../assets/Commercial/Raffles/Exterior/Exterior4.png"
import g5 from "../../../assets/Commercial/Raffles/Exterior/Exterior5.png"
import g6 from "../../../assets/Commercial/Raffles/Exterior/Exterior6.png"



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
  { label: "Location", value: "Periya, Wayanad" },
  { label: "Type", value: "Resort" },
  { label: "Year", value: "2025" },
  { label: "Sqft", value: "85200" },
];


const description = [
  "A hilltop retreat completely surrounded by tea plantations. Located in the Perya region, this resort is set on a hill. It offers a luxury experience with an infinity pool that looks out over the slopes of tea."
];


const Raffles = () => {
  return (
    <ProjectCommonLayout
      title="Raffles Resort"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default Raffles;
