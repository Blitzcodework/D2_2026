import React from "react";
import ProjectCommonLayout from "../../Components/Portfolio/ProjectDetails/ProjectCommonLayout";
import bannerImage from "../../../assets/Public Projects/Bus Terminal/Exterior1.jpg"
import g1 from "../../../assets/Public Projects/Bus Terminal/Exterior2.jpg";
import g2 from "../../../assets/Public Projects/Bus Terminal/Exterior3.jpg";
import g3 from "../../../assets/Public Projects/Bus Terminal/Exterior4.jpg";
import g4 from "../../../assets/Public Projects/Bus Terminal/Exterior5.jpg";
import g5 from "../../../assets/Public Projects/Bus Terminal/Exterior6.jpg";
import g6 from "../../../assets/Public Projects/Bus Terminal/Exterior7.jpg";
import g7 from "../../../assets/Public Projects/Bus Terminal/Exterior8.jpg";
import g8 from "../../../assets/Public Projects/Bus Terminal/Exterior9.jpg";
import g9 from "../../../assets/Public Projects/Bus Terminal/Exterior10.jpg";
import g10 from "../../../assets/Public Projects/Bus Terminal/Exterior11.jpg";
import g11 from "../../../assets/Public Projects/Bus Terminal/Exterior12.jpg";
import g12 from "../../../assets/Public Projects/Bus Terminal/Exterior13.jpg";
import g13 from "../../../assets/Public Projects/Bus Terminal/Exterior14.jpg";
import g14 from "../../../assets/Public Projects/Bus Terminal/Exterior15.jpg";
import g15 from "../../../assets/Public Projects/Bus Terminal/Exterior16.jpg";
import g16 from "../../../assets/Public Projects/Bus Terminal/Exterior17.jpg";
import g17 from "../../../assets/Public Projects/Bus Terminal/Exterior18.jpg";
import g18 from "../../../assets/Public Projects/Bus Terminal/Exterior19.jpg";
import g19 from "../../../assets/Public Projects/Bus Terminal/Exterior20.jpg";

const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Exterior View", category: "Exterior" },
  { src: g3, alt: "Exterior View", category: "Exterior" },
  { src: g4, alt: "Exterior View", category: "Exterior" },
  { src: g5, alt: "Exterior View", category: "Exterior" },
  { src: g6, alt: "Exterior View", category: "Exterior" },
  { src: g7, alt: "Exterior View", category: "Exterior" },
  { src: g8, alt: "Exterior View", category: "Exterior" },
  { src: g9, alt: "Exterior View", category: "Exterior" },
  { src: g10, alt: "Exterior View", category: "Exterior" },
  { src: g11, alt: "Exterior View", category: "Exterior" },
  { src: g12, alt: "Exterior View", category: "Exterior" },
  { src: g13, alt: "Exterior View", category: "Exterior" },
  { src: g14, alt: "Exterior View", category: "Exterior" },
  { src: g15, alt: "Exterior View", category: "Exterior" },
  { src: g16, alt: "Exterior View", category: "Exterior" },
  { src: g17, alt: "Exterior View", category: "Exterior" },
  { src: g18, alt: "Exterior View", category: "Exterior" },
  { src: g19, alt: "Exterior View", category: "Exterior" }
];

const projectDetails = [
  { label: "Location", value: "Pookkottumpadam ,Malappuram , Kerala" },
  { label: "Type", value: "Public Project" },
  { label: "Year", value: "2024" },
  { label: "Sqft", value: "" },
];


const description = [
    ""
];


const BusTerminal = () => {
  return (
    <ProjectCommonLayout
      title="Bus Terminal"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default BusTerminal;
