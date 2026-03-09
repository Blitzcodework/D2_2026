import React from "react";
import ProjectCommonLayout from "../../Components/Portfolio/ProjectDetails/ProjectCommonLayout";
import bannerImage from "../../../assets/Commercial/SHEA Beauty parlour/Interior1.jpg"
import g1 from "../../../assets/Commercial/SHEA Beauty parlour/Interior1.jpg"
import g2 from "../../../assets/Commercial/SHEA Beauty parlour/Interior2.jpg"
import g3 from "../../../assets/Commercial/SHEA Beauty parlour/Interior3.jpg"
import g4 from "../../../assets/Commercial/SHEA Beauty parlour/Interior4.jpg"








const galleryImages = [
  { src: g1, alt: "Interior View", category: "Interior" },
  { src: g2, alt: "Interior View", category: "Interior" },
  { src: g3, alt: "Interior View", category: "Interior" },
  { src: g4, alt: "Interior View", category: "Interior" },

];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Calicut , Kerala" },
  { label: "Type", value: "Commercial" },
  { label: "Year", value: "2017" },
  { label: "Sqft", value: "1000" },
];


const description = [
    ""
];


const Beautyparlour = () => {
  return (
    <ProjectCommonLayout
      title="Shea"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default Beautyparlour;
