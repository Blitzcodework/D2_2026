import React from "react";
import ProjectCommonLayout from "./ProjectCommonLayout";
import bannerImage from "../../../../assets/Residential/VIPIN THOMAS/Exterior/Exterior1.jpeg"
import g1 from "../../../../assets/Residential/VIPIN THOMAS/Exterior/Exterior1.jpeg"
import g2 from "../../../../assets/Residential/VIPIN THOMAS/Exterior/Exterior2.jpeg"
import g3 from "../../../../assets/Residential/VIPIN THOMAS/Exterior/Exterior3.jpeg"





// ✅ Define gallery with categories
const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Interior Hall", category: "Exterior" },
  { src: g3, alt: "Living Room", category: "Exterior" },

];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Kakkanad , Ernakulam" },
  { label: "Type", value: "Residential Complex " },
  { label: "Year", value: "2020" },
  { label: "Sqft", value: "2144" },
 
];

// ✅ Project description
const description = [
    ""
];


const VipinThomas = () => {
  return (
    <ProjectCommonLayout
      title="Residence for Mr.Vipin Thomas"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default VipinThomas;
