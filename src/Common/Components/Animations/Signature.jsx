import React from "react";
import { useNavigate } from "react-router-dom";
import signatureVideo from "../../../assets/Videos/sign.mp4";

const Signature = () => {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate("/logo");
  };

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden">

      <video
        src={signatureVideo}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
        className="
          w-[90%]
          sm:w-[70%]
          md:w-[55%]
          lg:w-[40%]
          xl:w-[30%]
          max-w-[700px]
          object-contain
          rounded-xl
          shadow-2xl
        "
      />

    </div>
  );
};

export default Signature;