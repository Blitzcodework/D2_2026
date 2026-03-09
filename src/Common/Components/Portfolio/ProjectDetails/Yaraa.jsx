import React from "react";
import ProjectCommonLayout from "./ProjectCommonLayout";
import bannerImage from "../../../../assets/Residential/yaraa/Sequence 01.mp4"
import g1 from "../../../../assets/Residential/yaraa/exterior/Exterior1.png"
import g2 from "../../../../assets/Residential/yaraa/exterior/Exterior2.png"
import g3 from "../../../../assets/Residential/yaraa/exterior/Exterior3.png"

import g4 from "../../../../assets/Residential/yaraa/interior/Interior1.png"
import g5 from "../../../../assets/Residential/yaraa/interior/Interior2.png"
import g6 from "../../../../assets/Residential/yaraa/interior/Interior3.png"
import g7 from "../../../../assets/Residential/yaraa/interior/Interior4.png"
import g8 from "../../../../assets/Residential/yaraa/interior/Interior5.png"
import g9 from "../../../../assets/Residential/yaraa/interior/Interior6.png"
import g10 from "../../../../assets/Residential/yaraa/interior/Interior7.png"




const galleryImages = [
  { src: g1, alt: "Exterior View 1", category: "Exterior" },
  { src: g2, alt: "Exterior View 2", category: "Exterior" },
  { src: g3, alt: "Exterior View 3", category: "Exterior" },

  { src: g4, alt: "Interior Design 1", category: "Interior" },
  { src: g5, alt: "Interior Design 2", category: "Interior" },
  { src: g6, alt: "Interior Design 3", category: "Interior" },
  { src: g7, alt: "Interior Design 4", category: "Interior" },
  { src: g8, alt: "Interior Design 5", category: "Interior" },
  { src: g9, alt: "Interior Design 6", category: "Interior" },
  { src: g10, alt: "Interior Design 7", category: "Interior" },
]

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Kumily , Idukki , Kerala" },
  { label: "Type", value: "Residential Complex " },
  { label: "Year", value: "2021" },
  { label: "Sqft", value: "2800" },
 
];

// ✅ Project description
const description = [
  "Yaara is a weekend escape to a stunning rural setting.  The modest dwelling sits in a valley and encourages a dialogue between man-made and natural environments. The Connection to place is embraced through building form and materials, climatic sensitivity, and framing of views.  As a place of  rejuvenation, Yaara excels. Tempering the remote rural land upon which it sits, it affords its occupants comfort and safe haven."
];


const Yaraa = () => {
  return (
    <ProjectCommonLayout
      title="Yaraa"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default Yaraa;
