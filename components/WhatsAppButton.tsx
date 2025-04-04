import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "917906924003"; // Replace with your WhatsApp number
  const message = encodeURIComponent("Hello, I'm interested in your resort!");

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </Link>
  );
};

export default WhatsAppButton;
