import React from "react";
import ProjectCommonLayout from "./ProjectCommonLayout";
import bannerImage from "../../../../assets/Residential/Pink&Purple/Exterior1.jpg"
import g1 from '../../../../assets/Residential/Pink&Purple/Exterior2.jpg'
import g2 from '../../../../assets/Residential/Pink&Purple/Exterior3.jpg'
import g3 from '../../../../assets/Residential/Pink&Purple/Exterior4.jpg'
import g4 from '../../../../assets/Residential/Pink&Purple/Exterior5.jpg'
import g5 from '../../../../assets/Residential/Pink&Purple/Exterior6.jpg'
import g6 from '../../../../assets/Residential/Pink&Purple/Exterior7.jpg'
import g7 from '../../../../assets/Residential/Pink&Purple/Exterior8.jpg'
import g8 from '../../../../assets/Residential/Pink&Purple/Exterior9.jpg'
import g9 from '../../../../assets/Residential/Pink&Purple/Interior1.jpg'
import g10 from '../../../../assets/Residential/Pink&Purple/Interior2.jpg'
import g11 from '../../../../assets/Residential/Pink&Purple/Interior3.jpg'
import g12 from '../../../../assets/Residential/Pink&Purple/Interior4.jpg'
import g13 from '../../../../assets/Residential/Pink&Purple/Interior5.jpg'
import g14 from '../../../../assets/Residential/Pink&Purple/Interior6.jpg'
import g15 from '../../../../assets/Residential/Pink&Purple/Interior7.jpg'
import g16 from '../../../../assets/Residential/Pink&Purple/Interior8.jpg'
import g17 from '../../../../assets/Residential/Pink&Purple/Interior9.jpg'






// ✅ Define gallery with categories
const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Interior Hall", category: "Exterior" },
  { src: g3, alt: "Living Room", category: "Exterior" },
  { src: g4, alt: "Garden Area", category: "Exterior" },
  { src: g5, alt: "Lobby Design", category: "Exterior" },
  { src: g6, alt: "Full View", category: "All" },
  { src: g7, alt: "Lobby Design", category: "Exterior" },
  { src: g8, alt: "Lobby Design", category: "Exterior" },
  { src: g9, alt: "Interior Design 1", category: "Interior" },
  { src: g10, alt: "Interior Design 2", category: "Interior" },
  { src: g11, alt: "Interior Design 3", category: "Interior" },
  { src: g12, alt: "Interior Design 4", category: "Interior" },
  { src: g13, alt: "Interior Design 5", category: "Interior" },
  { src: g14, alt: "Interior Design 6", category: "Interior" },
  { src: g15, alt: "Interior Design 7", category: "Interior" },
  { src: g16, alt: "Interior Design 8", category: "Interior" },
  { src: g17, alt: "Interior Design 9", category: "Interior" },

];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Govindapuram,Calicut " },
  { label: "Type", value: "Educational Building" },
  { label: "Year", value: "2025" },
  { label: "Sqft", value: "2700" },

];

// ✅ Project description
const description = [
  "Pinks & Purple is a 2700 sqft educational building completed in 2022 at Govindapuram, Calicut. Designed with vibrant tones and smart spatial planning, it creates a bright, comfortable, and inspiring learning environment."
];


const Pinkpurple = () => {
  return (
    <ProjectCommonLayout
      title="Inea Residence"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default Pinkpurple;
