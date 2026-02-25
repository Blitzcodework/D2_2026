import React from "react";
import DetailCommonLayout from "../../../Common/Components/ServiceDetails/DetailCommonLayout";

// ✅ Import all images properly
import heroImage from "../../../assets/Images/Events/Onam/onam1.jpeg";
import g1 from "../../../assets/Images/Events/Onam/onam1.jpeg";
import g2 from "../../../assets/Images/Events/Onam/onam2.jpeg";
import g3 from "../../../assets/Images/Events/Onam/onam3.jpeg";
import g4 from "../../../assets/Images/Events/Onam/onam4.jpeg";
import g5 from "../../../assets/Images/Events/Onam/onam5.jpeg";
import g6 from "../../../assets/Images/Events/Onam/onam7.jpg"





const galleryImages = [g1, g2, g3, g4, g5, g6];

const EventOnam = () => {
  return (
    <DetailCommonLayout
      title="Onam Celebration 2024"
      heroImage={heroImage}
      description="Onam, Kerala’s grand festival, celebrates unity, tradition, and cultural richness. The Onam Celebration 2024 brought together students and faculty in a colorful display of music, dance, floral artistry, and traditional cuisine — capturing the spirit of harmony and joy."
      subSectionTitle="Event Highlights"
      subSectionText="From vibrant Pookalam competitions and Thiruvathira performances to the festive Onam Sadhya, every moment was filled with laughter and cultural pride. The celebration fostered community spirit and honored Kerala’s timeless traditions in a joyful atmosphere."
      galleryImages={galleryImages}
    />
  );
};

export default EventOnam;