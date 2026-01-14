import * as React from "react";

const WhatsAppFloat: React.FC = () => {
  const phoneNumber = "919860030339"; // no +, no spaces
  const message = "Hello! I visited your website and would like to connect.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "28px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        zIndex: 9999,
        textDecoration: "none",
      }}
    >
      🟢
    </a>
  );
};

export default WhatsAppFloat;
