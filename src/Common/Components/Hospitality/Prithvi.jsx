import React from "react";
import ProjectCommonLayout from "../../../Common/Components/Portfolio/ProjectDetails/ProjectCommonLayout";
import bannerImage from "../../../assets/HospitalityProjects/Prithvi/Exterior/Exterior1.png";
import g2 from "../../../assets/HospitalityProjects/Prithvi/Exterior/Exterior2.png";
import g3 from "../../../assets/HospitalityProjects/Prithvi/Exterior/Exterior3.png";
import g4 from "../../../assets/HospitalityProjects/Prithvi/Exterior/Exterior4.png";
import g5 from "../../../assets/HospitalityProjects/Prithvi/Exterior/Exterior5.png";
import g6 from "../../../assets/HospitalityProjects/Prithvi/Exterior/Exterior6.png";

import t1 from "../../../assets/HospitalityProjects/Elaris/Interior/Interior1.png";
import t2 from "../../../assets/HospitalityProjects/Elaris/Interior/Interior2.png";
import t3 from "../../../assets/HospitalityProjects/Elaris/Interior/Interior3.png";
import t4 from "../../../assets/HospitalityProjects/Elaris/Interior/Interior4.png";
import t5 from "../../../assets/HospitalityProjects/Elaris/Interior/Interior5.png";
import t6 from "../../../assets/HospitalityProjects/Elaris/Interior/Interior6.png";
import t7 from "../../../assets/HospitalityProjects/Elaris/Interior/Interior7.png";



const galleryImages = [
  { src: bannerImage, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Exterior View 2", category: "Exterior" },
  { src: g3, alt: "Interior Hall", category: "Exterior" },
  { src: g4, alt: "Lobby Area", category: "Exterior" },
  { src: g5, alt: "Living Room", category: "Exterior" },
  { src: g6, alt: "Complete View", category: "Exterior" },

  { src: t1, alt: "Interior View", category: "Interior" },
{ src: t2, alt: "Interior View", category: "Interior" },
{ src: t3, alt: "Interior View", category: "Interior" },
{ src: t4, alt: "Interior View", category: "Interior" },
{ src: t5, alt: "Interior View", category: "Interior" },
{ src: t6, alt: "Interior View", category: "Interior" },
{ src: t7, alt: "Interior View", category: "Interior" },

];

const projectDetails = [
  { label: "Location", value: "Chalappuram, Kozhikode" },
  { label: "Type", value: "Ayurveda wellness retreat" },
  { label: "Year", value: "2018" },
  { label: "Sqft", value: "65000" },
];

const description = [
    ""
];

const Prithvi = () => {
  return (
    <ProjectCommonLayout
      title="Prithvi "
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default Prithvi;
