import React from "react";
import DetailCommonLayout from "../../../Common/Components/ServiceDetails/DetailCommonLayout";

// ✅ Import all images properly
import heroImage from "../../../assets/Images/Events/Diwali/diwali6.jpg";
import g1 from "../../../assets/Images/Events/Diwali/diwali1.jpg"
import g2 from "../../../assets/Images/Events/Diwali/diwali2.jpg"
import g3 from "../../../assets/Images/Events/Diwali/diwali3.jpg"
import g4 from "../../../assets/Images/Events/Diwali/diwali4.jpg"
import g5 from "../../../assets/Images/Events/Diwali/diwali5.jpg"
import g6 from "../../../assets/Images/Events/Diwali/diwali6.jpg"




const galleryImages = [g1, g2, g3, g4, g5, g6];

const EventOnam = () => {
    return (
        <DetailCommonLayout
            title="Diwali Celebration 2024"
            heroImage={heroImage}
            description="Diwali, the festival of lights, symbolizes the triumph of light over darkness and good over evil. The Diwali Celebration 2024 illuminated our campus with diyas, lanterns, and vibrant decorations, creating an atmosphere of joy, unity, and positivity."
            subSectionTitle="Event Highlights"
            subSectionText="The celebration featured traditional diya lighting, cultural performances, rangoli competitions, and a feast of festive delicacies. Students and faculty came together to share happiness, laughter, and the true essence of Diwali — spreading light and togetherness throughout the community."
            galleryImages={galleryImages}
        />

    );
};

export default EventOnam;