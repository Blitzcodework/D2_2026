import React from "react";
import ProjectCommonLayout from "../../../Common/Components/Portfolio/ProjectDetails/ProjectCommonLayout";
import bannerImage from "../../../assets/HospitalityProjects/Edelwiss/Exterior/Exterior1.png";
import g2 from "../../../assets/HospitalityProjects/Edelwiss/Exterior/Exterior2.png";
import g3 from "../../../assets/HospitalityProjects/Edelwiss/Exterior/Exterior3.png";
import g4 from "../../../assets/HospitalityProjects/Edelwiss/Exterior/Exterior4.png";
import g5 from "../../../assets/HospitalityProjects/Edelwiss/Exterior/Exterior5.png";
import g6 from "../../../assets/HospitalityProjects/Edelwiss/Exterior/Exterior6.png";
import g7 from "../../../assets/HospitalityProjects/Edelwiss/Exterior/Exterior7.png";
import g8 from "../../../assets/HospitalityProjects/Edelwiss/Exterior/Exterior8.png";
import g9 from "../../../assets/HospitalityProjects/Edelwiss/Exterior/Exterior9.png";
import g10 from "../../../assets/HospitalityProjects/Edelwiss/Exterior/Exterior10.png";

import g11 from "../../../assets/HospitalityProjects/Edelwiss/Interior/Interior1.png";
import g12 from "../../../assets/HospitalityProjects/Edelwiss/Interior/Interior2.png";
import g13 from "../../../assets/HospitalityProjects/Edelwiss/Interior/Interior3.png";
import g14 from "../../../assets/HospitalityProjects/Edelwiss/Interior/Interior4.png";
import g15 from "../../../assets/HospitalityProjects/Edelwiss/Interior/Interior5.png";
import g16 from "../../../assets/HospitalityProjects/Edelwiss/Interior/Interior6.png";
import g17 from "../../../assets/HospitalityProjects/Edelwiss/Interior/Interior7.png";
import g18 from "../../../assets/HospitalityProjects/Edelwiss/Interior/Interior8.png";
import g19 from "../../../assets/HospitalityProjects/Edelwiss/Interior/Interior9.png";
import g20 from "../../../assets/HospitalityProjects/Edelwiss/Interior/Interior10.png";



const galleryImages = [
  { src: bannerImage, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Exterior View 2", category: "Exterior" },
  { src: g3, alt: "Interior Hall", category: "Exterior" },
  { src: g4, alt: "Lobby Area", category: "Exterior" },
  { src: g5, alt: "Living Room", category: "Exterior" },
  { src: g7, alt: "Living Room", category: "Exterior" },
  { src: g6, alt: "Complete View", category: "Exterior" },
  { src: g7, alt: "Complete View", category: "Exterior" },
  { src: g8, alt: "Complete View", category: "Exterior" },
  { src: g9, alt: "Complete View", category: "Exterior" },
  { src: g10, alt: "Complete View", category: "Exterior" },

  { src: g11, alt: "Interior View", category: "Interior" },
    { src: g12, alt: "Interior View", category: "Interior" },
    { src: g13, alt: "Interior View", category: "Interior" },
    { src: g14, alt: "Interior View", category: "Interior" },
    { src: g15, alt: "Interior View", category: "Interior" },
    { src: g16, alt: "Interior View", category: "Interior" },
    { src: g17, alt: "Interior View", category: "Interior" },
    { src: g18, alt: "Interior View", category: "Interior" },
    { src: g19, alt: "Interior View", category: "Interior" },
    { src: g20, alt: "Interior View", category: "Interior" },
];

const projectDetails = [
  { label: "Location", value: "Banasura , Wayanad , Kerala" },
  { label: "Type", value: "Resort" },
  { label: "Year", value: "2023" },
  { label: "Sqft", value: "92665" },
];

const description = [
    "Edelweiss Luxury Resort and spa is located in the encampment overlooking the majestic Banasura Dam, surrounded almost entirely with water and rich flora of Wayanad."
];

const Edelweiss = () => {
  return (
    <ProjectCommonLayout
      title="Edelweiss"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default Edelweiss;
