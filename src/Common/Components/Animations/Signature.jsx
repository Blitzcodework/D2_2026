import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Correct import
import signatureVideo from "../../../assets/Videos/sign.mp4"; // ✅ Path correct

const Signature = () => {
  const navigate = useNavigate(); // ✅ lowercase

  const handleVideoEnd = () => {
    navigate("/logo"); // ✅ Redirect to Logo.jsx page
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <video
        src={signatureVideo}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd} // ✅ Runs when video finishes
        className="w-2/3 md:w-1/2 lg:w-1/3 object-contain rounded-xl shadow-lg"
      />
    </div>
  );
};

export default Signature;
