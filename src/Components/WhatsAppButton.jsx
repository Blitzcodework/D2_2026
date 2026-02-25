import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "9961523366"; 
  const message = encodeURIComponent(
    "Hi, I would like your assistance and want to know more about your services."
  );
  const link = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "60px",
        right: "60px",
        backgroundColor: "#25D366",
        border: "none",
        padding: "14px",
        borderRadius: "50%",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        animation: "pulse 1.5s infinite", 
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        style={{ width: "24px", height: "24px" }}
      />
    </button>
  );
};


const styles = `
@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
  }
  70% {
    transform: scale(1.1);
    box-shadow: 0 0 0 20px rgba(37, 211, 102, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}
`;

// Inject styles into the document
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default WhatsAppButton;
