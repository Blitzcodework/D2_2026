import React from "react";
import ProjectCommonLayout from "../../Components/Portfolio/ProjectDetails/ProjectCommonLayout";
import bannerImage from "../../../assets/Public Projects/Ente Veedu Kasargode/Exterior1.jpg"

import g1 from "../../../assets/Public Projects/Ente Veedu Kasargode/Exterior2.jpg";
import g2 from "../../../assets/Public Projects/Ente Veedu Kasargode/Exterior3.jpg";
import g3 from "../../../assets/Public Projects/Ente Veedu Kasargode/Exterior4.jpg";
import g4 from "../../../assets/Public Projects/Ente Veedu Kasargode/Exterior5.jpg";


const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Exterior View", category: "Exterior" },
  { src: g3, alt: "Exterior View", category: "Exterior" },
  { src: g4, alt: "Exterior View", category: "Exterior" },

];

const projectDetails = [
  { label: "Location", value: "Pookkottumpadam ,Malappuram , Kerala" },
  { label: "Type", value: "Public Project - 28 Villas" },
  { label: "Year", value: "2024" },
  { label: "Sqft", value: "1400 * 28 = 39200" },
];


const description = [
    "Introducing 'Ente Veedu,' a residential marvel in the heart of Kasargod. This architectural masterpiece spans an area of approximately 1400 sq. ft., offering a living space that seamlessly blends modern design with the charm of regional aesthetics."
];


const EnteVeedu = () => {
  return (
    <ProjectCommonLayout
      title="Enter Veedu"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      brochureText="DOWNLOAD BROCHURE"
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default EnteVeedu;
