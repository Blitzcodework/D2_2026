import React from "react";
import ServiceLayout from "./ServiceLayout";
import uimg1 from "../../../../assets/Images/Designs/Urban/uimg1.png";
import uimg2 from "../../../../assets/Images/Designs/Urban/uimg2.png";

const Service1 = () => {
  return (
    <ServiceLayout
      number="01"
      title="Urban Design"
      mainDescription="We offer innovative and context-sensitive architectural design services that blend aesthetics, functionality, and sustainability."
      detailedDescription="Focused on urban design, we integrate flexible layouts and responsive planning to shape vibrant, livable spaces — balancing function, flow, and aesthetic continuity through thoughtful elements, layered transitions, and adaptable environments."
      image1={uimg1}
      image2={uimg2}
      nextPage="/main/Service2"
      detailsPage="/main/S1Details"
    />
  );
};

export default Service1;
