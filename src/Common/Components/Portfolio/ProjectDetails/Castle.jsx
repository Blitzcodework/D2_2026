import React from "react";
import ProjectCommonLayout from "./ProjectCommonLayout";
import bannerImage from "../../../../assets/Residential/castle/Sequence01.mp4"
import g1 from "../../../../assets/Residential/castle/Exterior/Exterior1.png"
import g2 from "../../../../assets/Residential/castle/Exterior/Exterior2.png"
import g3 from "../../../../assets/Residential/castle/Exterior/Exterior3.png"









// ✅ Define gallery with categories
const galleryImages = [
  { src: g1, alt: "Exterior View", category: "Exterior" },
  { src: g2, alt: "Interior Hall", category: "Exterior" },
  { src: g3, alt: "Living Room", category: "Exterior" },
 
];

// ✅ Project details
const projectDetails = [
  { label: "Location", value: "Kottagiri  ,Tamilnadu" },
  { label: "Type", value: "Residential  " },
  { label: "Year", value: "2022" },
  { label: "Sqft", value: "2655" },
];

// ✅ Project description
const description = [
  "catherine castle sets against the backdrop of a lush hillside, this residence is a thoughtful response to the complexities of terrain and the serenity of its natural environment. The design leverages the steep topography to create a multi-tiered structure that seamlessly blends into the landscape, ensuring minimal disruption to the site while maximizing panoramic views."
];


const Castle = () => {
  return (
    <ProjectCommonLayout
      title="Catherine Castle"
      bannerImage={bannerImage}
      projectDetails={projectDetails}
      description={description}
      galleryTabs={["All", "Exterior", "Interior"]}
      galleryImages={galleryImages}
    />
  );
};

export default Castle;
