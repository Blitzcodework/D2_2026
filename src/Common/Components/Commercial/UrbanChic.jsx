import React from "react";
import ProjectCommonLayout from "../../Components/Portfolio/ProjectDetails/ProjectCommonLayout";
import bannerImage from "../../../assets/Commercial/Urban chic/Exterior/Exterior1.jpg"
import g1 from "../../../assets/Commercial/Urban chic/Exterior/Exterior1.jpg"
import g2 from "../../../assets/Commercial/Urban chic/Exterior/Exterior2.jpg"
import g3 from "../../../assets/Commercial/Urban chic/Exterior/Exterior3.jpg"
import g4 from "../../../assets/Commercial/Urban chic/Exterior/Exterior4.jpg"
import g5 from "../../../assets/Commercial/Urban chic/Exterior/Exterior5.jpg"
import g6 from "../../../assets/Commercial/Urban chic/Interior/Interior1.jpg"
import g7 from "../../../assets/Commercial/Urban chic/Interior/Interior2.jpg"
import g8 from "../../../assets/Commercial/Urban chic/Interior/Interior3.jpg"
import g9 from "../../../assets/Commercial/Urban chic/Interior/Interior4.jpg"
import g10 from "../../../assets/Commercial/Urban chic/Interior/Interior5.jpg"
import g11 from "../../../assets/Commercial/Urban chic/Interior/Interior6.jpg"





const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Exterior View", category: "Exterior" },
  { src: g3, alt: "Exterior View", category: "Exterior" },
  { src: g4, alt: "Exterior View", category: "Exterior" },
  { src: g5, alt: "Exterior View", category: "Exterior" },
  { src: g6, alt: "Interior View", category: "Interior" },
  { src: g7, alt: "Interior View", category: "Interior" },
  { src: g8, alt: "Interior View", category: "Interior" },
  { src: g9, alt: "Interior View", category: "Interior" },
  { src: g10, alt: "Interior View", category: "Interior" },
  { src: g11, alt: "Interior View", category: "Interior" },

];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Warriem Road ,kochi, kerala" },
  { label: "Type", value: "Resort" },
  { label: "Year", value: "2018" },
  { label: "Sqft", value: "15000" },
];


const description = [
    "Addressing the scarcity of budgeted stay optons in urban centers, this pro ject is a sophisticated amalgama tion of art and retrofitted elements It involved the radical fedesign of one of Cochins oldest hotels the Archana Inn"
];


const UrbanChic = () => {
  return (
    <ProjectCommonLayout
      title="Urban Chic"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default UrbanChic;
