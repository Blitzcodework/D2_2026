import React from "react";
import ProjectCommonLayout from "../../Components/Portfolio/ProjectDetails/ProjectCommonLayout";
import bannerImage from "../../../assets/Commercial/Apex/Interior1.jpeg"
import g1 from "../../../assets/Commercial/Apex/Interior1.jpeg"
import g2 from "../../../assets/Commercial/Apex/Interior2.jpeg"
import g3 from "../../../assets/Commercial/Apex/Interior3.jpeg"
import g4 from "../../../assets/Commercial/Apex/Interior4.jpeg"
import g5 from "../../../assets/Commercial/Apex/Interior5.jpeg"
import g6 from "../../../assets/Commercial/Apex/Interior6.jpeg"
import g7 from "../../../assets/Commercial/Apex/Interior7.jpeg"
import g8 from "../../../assets/Commercial/Apex/Interior8.jpeg"
import g9 from "../../../assets/Commercial/Apex/Interior9.jpeg"




const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Interior" },
  { src: g2, alt: "Exterior View", category: "Interior" },
  { src: g3, alt: "Exterior View", category: "Interior" },
  { src: g4, alt: "Exterior View", category: "Interior" },
  { src: g5, alt: "Exterior View", category: "Interior" },
  { src: g6, alt: "Exterior View", category: "Interior" },
  { src: g7, alt: "Exterior View", category: "Interior" },
  { src: g8, alt: "Exterior View", category: "Interior" },
  { src: g9, alt: "Exterior View", category: "Interior" },

];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Perungudi , Chennai  , TamilNadu" },
  { label: "Type", value: "Commercial" },
  { label: "Year", value: "2021" },
  { label: "Sqft", value: "7500" },
];


const description = [
    "Started in 1978, apex is a Pharmaceutical Manufacturing and Marketing company headquarted in Chennai, India.The company products are available in Oral Solids, Oral Liquids and Topical Dosage forms.Enjoying brand leadership in Nutraceuticals and Dietary Supplements segment in India.The company's branded formulations also are exported to more than 25 countries."
];


const Apex = () => {
  return (
    <ProjectCommonLayout
      title="Apex Laboratories"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default Apex;
