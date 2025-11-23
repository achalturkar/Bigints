import React from "react";
import { FiMessageCircle } from "react-icons/fi";

export default function WhatsAppButton() {
  const whatsappNumber = "9529972011";
  const message = "Hello! I want to know more about Bigints services.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-[#25D366] text-white p-3 rounded-full shadow-xl 
                 hover:bg-[#1DA851] transition-all duration-300 z-50 animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <FiMessageCircle size={24} />
    </a>
  );
}
