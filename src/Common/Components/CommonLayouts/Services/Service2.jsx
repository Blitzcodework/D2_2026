import React from "react";
import ServiceLayout from "./ServiceLayout";
import uimg1 from "../../../../assets/Images/Designs/Architecture/a4.jpg";
import uimg2 from "../../../../assets/Images/Designs/Architecture/a4.jpg";

const Service2 = () => {
  return (
    <ServiceLayout
      number="02"
      title="Architecture Design"
      mainDescription="We offer innovative and context-sensitive architectural design services that blend aesthetics, functionality, and sustainability."
      detailedDescription="Focused on architectural design, we craft adaptive structures and spatial compositions that harmonize form, function, and aesthetics — blending material integrity, natural flow, and contextual balance to create enduring, expressive environments."
      image1={uimg1}
      image2={uimg2}
      nextPage="/main/Service3"
      prevPage="/main/Service1"
      detailsPage="/main/S2Details"
    />
  );
};

export default Service2;