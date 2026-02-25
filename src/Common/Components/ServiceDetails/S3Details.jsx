import React from "react";
import DetailCommonLayout from "../../../Common/Components/ServiceDetails/DetailCommonLayout";

// ✅ Import all images properly
import heroImage from "../../../assets/Images/Designs/Interior/iimg1.png";
import g1 from "../../../assets/Images/Designs/Interior/i1.jpg";
import g2 from "../../../assets/Images/Designs/Interior/i2.jpg";
import g3 from "../../../assets/Images/Designs/Interior/i3.jpg";
import g4 from "../../../assets/Images/Designs/Interior/i4.png";
import g5 from "../../../assets/Images/Designs/Interior/i5.png";



const galleryImages = [g1, g2, g3, g4, g5];

const S3Details = () => {
    return (
        <DetailCommonLayout
            title="Interior Design"
            heroImage={heroImage}
            description="Urban Design redefines contemporary cityscapes through a seamless blend of functionality, aesthetics, and livability. Strategically planned, it integrates open spaces, smart mobility, and sustainable infrastructure to foster vibrant, connected communities."
            subSectionTitle="Our Vision & Goals"
            subSectionText="Focused on urban design, we propose flexible layouts and responsive planning to shape thoughtful streetscapes, layered identities, and accessible environments."
            galleryImages={galleryImages}
        />
    );
};



export default S3Details;