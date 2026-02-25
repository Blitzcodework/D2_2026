import React from "react";
import DetailCommonLayout from "../../../Common/Components/ServiceDetails/DetailCommonLayout";

// ✅ Import all images properly
import heroImage from "../../../assets/Images/Designs/Project Mngmnt/pimg1.jpg";
import g1 from "../../../assets/Images/Designs/Project Mngmnt/p1.jpg";
import g2 from "../../../assets/Images/Designs/Project Mngmnt/p2.jpg";
import g3 from "../../../assets/Images/Designs/Project Mngmnt/p3.jpg";
import g4 from "../../../assets/Images/Designs/Project Mngmnt/p4.jpg";
import g5 from "../../../assets/Images/Designs/Project Mngmnt/p5.jpg";
import g6 from "../../../assets/Images/Designs/Project Mngmnt/p6.jpg";


const galleryImages = [g1, g2, g3, g4, g5, g6];

const S4Details = () => {
    return (
        <DetailCommonLayout
            title="Project Management"
            heroImage={heroImage}
            description="Urban Design redefines contemporary cityscapes through a seamless blend of functionality, aesthetics, and livability. Strategically planned, it integrates open spaces, smart mobility, and sustainable infrastructure to foster vibrant, connected communities."
            subSectionTitle="Our Vision & Goals"
            subSectionText="Focused on urban design, we propose flexible layouts and responsive planning to shape thoughtful streetscapes, layered identities, and accessible environments."
            galleryImages={galleryImages}
        />
    );
};



export default S4Details;