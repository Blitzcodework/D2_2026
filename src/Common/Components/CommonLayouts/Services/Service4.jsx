import React from "react";
import ServiceLayout from "./ServiceLayout";
import uimg1 from "../../../../assets/Images/Designs/Project Mngmnt/p1.jpg";
import uimg2 from "../../../../assets/Images/Designs/Project Mngmnt/p2.jpg";

const Service4 = () => {
  return (
    <ServiceLayout
      number="04"
      title="Project Management"
      mainDescription="We offer innovative and context-sensitive architectural design services that blend aesthetics, functionality, and sustainability."
      detailedDescription="Focused on architectural design, we craft adaptive structures and spatial compositions that harmonize form, function, and aesthetics — blending material integrity, natural flow, and contextual balance to create enduring, expressive environments."
      image1={uimg1}
      image2={uimg2}
      prevPage="/main/Service3"
      detailsPage="/main/S4Details"
    />
  );
};

export default Service4;