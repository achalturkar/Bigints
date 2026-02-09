import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const whatsappNumber = "9529972011";
  const message = "Hello! I want to know more about BigInt Technology services.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-8 left-8 z-50
        flex items-center justify-center
        w-14 h-14
        rounded-full
        bg-[#25D366]
        text-white
        shadow-lg
        transition-all duration-300
        hover:scale-110 hover:bg-[#1DA851]
        focus:outline-none
      "
    >
      <FaWhatsapp size={36} strokeWidth={2.2} />
    </a>
  );
}
