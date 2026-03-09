import React from "react";
import ProjectCommonLayout from "./ProjectCommonLayout";
import bannerImage from "../../../../assets/Residential/vannagha/Sequence01.mp4"
import g1 from "../../../../assets/Residential/vannagha/exterior/Exterior1.png"
import g2 from "../../../../assets/Residential/vannagha/exterior/Exterior2.png"
import g3 from "../../../../assets/Residential/vannagha/exterior/Exterior3.png"
import g4 from "../../../../assets/Residential/vannagha/exterior/Exterior4.png"
import g5 from "../../../../assets/Residential/vannagha/exterior/Exterior5.png"
import g6 from "../../../../assets/Residential/vannagha/exterior/Exterior6.png"
import g7 from "../../../../assets/Residential/vannagha/exterior/Exterior7.png"
import g8 from "../../../../assets/Residential/vannagha/interior/Interior1.png";
import g9 from "../../../../assets/Residential/vannagha/interior/Interior2.png";
import g10 from "../../../../assets/Residential/vannagha/interior/Interior3.png";
import g11 from "../../../../assets/Residential/vannagha/interior/Interior4.png";
import g12 from "../../../../assets/Residential/vannagha/interior/Interior5.png";
import g13 from "../../../../assets/Residential/vannagha/interior/Interior6.png";
import g14 from "../../../../assets/Residential/vannagha/interior/Interior7.png";
import g15 from "../../../../assets/Residential/vannagha/interior/Interior8.png";
import g16 from "../../../../assets/Residential/vannagha/interior/Interior9.png";
import g17 from "../../../../assets/Residential/vannagha/interior/Interior10.png";
import g18 from "../../../../assets/Residential/vannagha/interior/Interior11.png";
import g19 from "../../../../assets/Residential/vannagha/interior/Interior12.png";




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
{ src: g9, alt: "Interior Design", category: "Interior" },
{ src: g10, alt: "Interior Design", category: "Interior" },
{ src: g11, alt: "Interior Design", category: "Interior" },
{ src: g12, alt: "Interior Design", category: "Interior" },
{ src: g13, alt: "Interior Design", category: "Interior" },
{ src: g14, alt: "Interior Design", category: "Interior" },
{ src: g15, alt: "Interior Design", category: "Interior" },
{ src: g16, alt: "Interior Design", category: "Interior" },
{ src: g17, alt: "Interior Design", category: "Interior" },
{ src: g18, alt: "Interior Design", category: "Interior" },
{ src: g19, alt: "Full View", category: "All"  },
  
];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Injampakkam , Chennai , Tamilnadu" },
  { label: "Type", value: "Residential Complex " },
  { label: "Year", value: "2024" },
  { label: "Sqft", value: "17785" },
 
];

// ✅ Project description
const description = [
  "Located ín the vibrant landscape of Chennai. Sírena Residence is a masterful study ín uopical urbanism Designed by D2 Architecture Studio, this residence is a quiet retreat that balances the energy of the city with the calming presence of the nearby coast"
];


const Sirena = () => {
  return (
    <ProjectCommonLayout
      title="Sirena"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default Sirena;
