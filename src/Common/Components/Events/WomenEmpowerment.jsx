import React from "react";
import DetailCommonLayout from "../../../Common/Components/ServiceDetails/DetailCommonLayout";

// Import all images
import heroImage from "../../../assets/Images/Events/Women Empowerment/womens1.png";
import g1 from "../../../assets/Images/Events/Women Empowerment/womens1.png";
import g2 from "../../../assets/Images/Events/Women Empowerment/womens2.jpg";
import g3 from "../../../assets/Images/Events/Women Empowerment/womens3.png";
import g4 from "../../../assets/Images/Events/Women Empowerment/womens4.jpg";
import g5 from "../../../assets/Images/Events/Women Empowerment/womens5.png";
import g6 from "../../../assets/Images/Events/Women Empowerment/womens6.jpeg";

const galleryImages = [g1, g2, g3, g4, g5, g6];

const WomenEmpowerment = () => {
  return (
    <DetailCommonLayout
      title="Women’s Empowerment Program 2024"
      heroImage={heroImage}
      description="The Women’s Empowerment Program 2024 celebrated the strength, resilience, and achievements of women. The event aimed to inspire confidence, leadership, and unity among participants through impactful sessions and cultural expressions."
      subSectionTitle="Program Highlights"
      subSectionText="The event featured motivational talks, interactive workshops, cultural performances, and activities designed to uplift and empower women. It fostered an environment of encouragement, equality, and support — honoring the contributions of women in society."
      galleryImages={galleryImages}
    />
  );
};

export default WomenEmpowerment;
