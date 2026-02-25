import React from "react";
import ProjectCommonLayout from "../../Components/Portfolio/ProjectDetails/ProjectCommonLayout";
import bannerImage from "../../../assets/Commercial/Amancay/Exterior/Exterior1.png"
import g1 from "../../../assets/Commercial/Amancay/Exterior/Exterior1.png"
import g2 from "../../../assets/Commercial/Amancay/Exterior/Exterior2.png"
import g3 from "../../../assets/Commercial/Amancay/Exterior/Exterior3.png"
import g4 from "../../../assets/Commercial/Amancay/Exterior/Exterior4.png"
import g5 from "../../../assets/Commercial/Amancay/Exterior/Exterior5.png"
import g6 from "../../../assets/Commercial/Amancay/Exterior/Exterior6.png"
import g7 from "../../../assets/Commercial/Amancay/Exterior/Exterior7.png"
import g8 from "../../../assets/Commercial/Amancay/Interior/Interior1.png"
import g9 from "../../../assets/Commercial/Amancay/Interior/Interior2.png"
import g10 from "../../../assets/Commercial/Amancay/Interior/Interior3.png"
import g11 from "../../../assets/Commercial/Amancay/Interior/Interior4.png"
import g12 from "../../../assets/Commercial/Amancay/Interior/Interior5.png"
import g13 from "../../../assets/Commercial/Amancay/Interior/Interior6.png"


// ✅ Define gallery with categories
const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Interior Hall", category: "Exterior" },
  { src: g3, alt: "Living Room", category: "Exterior" },
  { src: g4, alt: "Garden Area", category: "Exterior" },
  { src: g5, alt: "Lobby Design", category: "Exterior" },
  { src: g6, alt: "Lobby Design", category: "Exterior" },  
  { src: g7, alt: "Lobby Design", category: "Exterior" },  
  { src: g8, alt: "Lobby Design", category: "Interior" },  
  { src: g9, alt: "Lobby Design", category: "Interior" },  
  { src: g10, alt: "Lobby Design", category: "Interior" },  
  { src: g11, alt: "Lobby Design", category: "Interior" },  
  { src: g12, alt: "Lobby Design", category: "Interior" },  
  { src: g13, alt: "Lobby Design", category: "Interior" },  
  
 
];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Banasura , Wayanad" },
  { label: "Type", value: "Premium Villas" },
  { label: "Year", value: "2023" },
  { label: "Sqft", value: "100000+" },
 
];

// ✅ Project description
const description = [
"Withín the enchanted suaveness of natures vein we created a space where man fraternizer in the externity of nature"
];


const Amancay = () => {
  return (
    <ProjectCommonLayout
      title="Casa Amancay"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default Amancay;
