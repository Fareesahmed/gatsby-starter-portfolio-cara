import React from "react";

const WhatsAppFloat = () => {
  const phoneNumber = "919860030339"; // UAE format, no +
  const message = "Hello! I visited your website and would like to connect.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        zIndex: 1000,
        backgroundColor: "#25D366",
        color: "#fff",
        borderRadius: "50%",
        width: "56px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "28px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        textDecoration: "none",
      }}
      aria-label="Chat on WhatsApp"
    >
      🟢
    </a>
  );
};

export default WhatsAppFloat;
