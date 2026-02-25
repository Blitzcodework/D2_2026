import React from "react";
import DetailCommonLayout from "../../../Common/Components/ServiceDetails/DetailCommonLayout";

// ✅ Import all images properly (replace with actual Samishra images)
import heroImage from "../../../assets/Images/Events/Shamisra/Samishra1.jpg";
import g1 from "../../../assets/Images/Events/Shamisra/Samishra2.jpg";
import g2 from "../../../assets/Images/Events/Shamisra/Samishra3.jpg";
import g3 from "../../../assets/Images/Events/Shamisra/Samishra4.jpg";
import g4 from "../../../assets/Images/Events/Shamisra/Samishra5.jpg";
import g5 from "../../../assets/Images/Events/Shamisra/Samishra6.jpg";


const galleryImages = [g1, g2, g3, g4, g5];

const Samisra = () => {
    return (
        <DetailCommonLayout
            title="Samishra 2024"
            heroImage={heroImage}
            description={`“Where rhythm meets reason, and color meets cause –
Samishra blooms without a pause.
Unity in motion, culture in thread,
A festival where all voices are led.
From dance to drama, from soul to stage,
Samishra celebrates every age.
Come light the spark, come play your part,
A fest of dreams, of joy, of heart.”

Samishra is a celebration of creativity, culture, and collaboration. Experience the spirit of unity through music, art, drama, and vibrant traditions that bring people together in unforgettable harmony.`}
            subSectionTitle="Event Highlights"
            subSectionText="Samishra 2024 featured mesmerizing cultural performances, theatrical expressions, musical showcases, and creative arts that united talents from all walks of life. The festival became a canvas of shared joy and imagination — a true reflection of passion, unity, and youthful energy."
            galleryImages={galleryImages}
        />
    );
};

export default Samisra;
