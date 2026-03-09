import React from "react";
import ProjectCommonLayout from "../../Components/Portfolio/ProjectDetails/ProjectCommonLayout";
import bannerImage from "../../../assets/Commercial/Gals Gallary/Interior1.jpeg"
import g1 from "../../../assets/Commercial/Apex/Interior1.jpeg"
import g2 from "../../../assets/Commercial/Apex/Interior2.jpeg"
import g3 from "../../../assets/Commercial/Apex/Interior3.jpeg"





const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Interior" },
  { src: g2, alt: "Exterior View", category: "Interior" },
  { src: g3, alt: "Exterior View", category: "Interior" },
];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Mavoor Road , Kozhikode , Kerala" },
  { label: "Type", value: "Commercial" },
  { label: "Year", value: "2021" },
  { label: "Sqft", value: "" },
];


const description = [
    ""
];


const GalsGallary = () => {
  return (
    <ProjectCommonLayout
      title="Gals Gallery"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default GalsGallary;
