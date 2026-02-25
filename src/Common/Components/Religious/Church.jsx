import React from "react";
import ProjectCommonLayout from "../../Components/Portfolio/ProjectDetails/ProjectCommonLayout";
import bannerImage from "../../../assets/Commercial/Amancay/Exterior/Exterior1.png"
import g1 from "../../../assets/Commercial/Church/exterior/Exterior1.jpg"
import g2 from "../../../assets/Commercial/Church/exterior/Exterior2.jpg"
import g3 from "../../../assets/Commercial/Church/exterior/Exterior3.jpg"
import g4 from "../../../assets/Commercial/Church/exterior/Exterior4.jpg"
import g5 from "../../../assets/Commercial/Church/exterior/Exterior5.jpg"
import g6 from "../../../assets/Commercial/Church/exterior/Exterior6.jpg"
import g7 from "../../../assets/Commercial/Church/interior/Interior1.jpg"
import g8 from "../../../assets/Commercial/Church/interior/Interior2.jpg"
import g9 from "../../../assets/Commercial/Church/interior/Interior3.jpg"
import g10 from "../../../assets/Commercial/Church/interior/Interior4.jpg"
import g11 from "../../../assets/Commercial/Church/interior/Interior5.jpg"
import g12 from "../../../assets/Commercial/Church/interior/Interior6.jpg"


const galleryImages = [
{ src: g1, alt: "Exterior View 1", category: "Exterior" },
{ src: g2, alt: "Exterior View 2", category: "Exterior" },
{ src: g3, alt: "Exterior View 3", category: "Exterior" },
{ src: g4, alt: "Exterior View 4", category: "Exterior" },
{ src: g5, alt: "Exterior View 5", category: "Exterior" },
{ src: g6, alt: "Exterior View 6", category: "Exterior" },
{ src: g7, alt: "Interior View 1", category: "Interior" },
{ src: g8, alt: "Interior View 2", category: "Interior" },
{ src: g9, alt: "Interior View 3", category: "Interior" },
{ src: g10, alt: "Interior View 4", category: "Interior" },
{ src: g11, alt: "Interior View 5", category: "Interior" },
{ src: g12, alt: "Interior View 6", category: "Interior" },
];


const projectDetails = [
  { label: "Location", value: "ATHIPALAYAM , COIMBATORE , TAMILNADU" },
  { label: "Type", value: "Religious Building" },
  { label: "Year", value: "2025" },
  { label: "Sqft", value: "45000" },
];


const description = [
    "A masterpiece of roman influence set in the heart of coimbatore tamilnadun.spanning a built up areaa of 45000 square feet.this structure is a rare bridge between classical principles and contemporary indian religious architecture"
];


const Church = () => {
  return (
    <ProjectCommonLayout
      title="ST.FRANCIS OF ASSISI CHURCH"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default Church;
