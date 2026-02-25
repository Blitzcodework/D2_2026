import React from "react";
import ServiceLayout from "./ServiceLayout";
import uimg1 from "../../../../assets/Images/Designs/Interior/i1.jpg";
import uimg2 from "../../../../assets/Images/Designs/Interior/i2.jpg";

const Service3 = () => {
  return (
    <ServiceLayout
      number="03"
      title="Interior Design"
      mainDescription="We offer innovative and context-sensitive architectural design services that blend aesthetics, functionality, and sustainability."
      detailedDescription="Focused on architectural design, we craft adaptive structures and spatial compositions that harmonize form, function, and aesthetics — blending material integrity, natural flow, and contextual balance to create enduring, expressive environments."
      image1={uimg1}
      image2={uimg2}
      nextPage="/main/Service4"
      prevPage="/main/Service2"
      detailsPage="/main/S3Details"
    />
  );
};

export default Service3;