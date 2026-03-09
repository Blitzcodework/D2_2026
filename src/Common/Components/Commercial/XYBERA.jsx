import React from "react";
import ProjectCommonLayout from "../../Components/Portfolio/ProjectDetails/ProjectCommonLayout";
import bannerImage from "../../../assets/Commercial/Xybera/Interior/Interior1.jpeg"
import g1 from "../../../assets/Commercial/Xybera/Interior/Interior1.jpeg"
import g2 from "../../../assets/Commercial/Xybera/Interior/Interior2.jpeg"
import g3 from "../../../assets/Commercial/Xybera/Interior/Interior3.jpeg"
import g4 from "../../../assets/Commercial/Xybera/Interior/Interior4.jpeg"
import g5 from "../../../assets/Commercial/Xybera/Interior/Interior5.jpeg"






// ✅ Define gallery with categories
const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Interior" },
  { src: g2, alt: "Exterior View", category: "Interior" },
  { src: g3, alt: "Exterior View", category: "Interior" },
  { src: g4, alt: "Exterior View", category: "Interior" },
  { src: g5, alt: "Interior View", category: "Interior" },

];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Kochin, Kerala" },
  { label: "Type", value: "Commercial" },
  { label: "Year", value: "2020" },
  { label: "Sqft", value: "3000" },
];


const description = [
    "This interior project for Hack Visor Tech Solutions is an attempt to actualize the phenomenal urban triumph. The very site is somewhat anonymous industrial zone without distinctive contextual cues. A meaningful architectural response to the 	environment would require an interior space making a strong architectural statement that impart identity, sense and presence in its 	own right. The 650 sq.ft interior space is designed in such way to make it minimal at the same time not compromising the respective requirements."
];


const XYBERA = () => {
  return (
    <ProjectCommonLayout
      title="Xybera"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default XYBERA;
