import React from "react";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import { FiMail } from "@react-icons/all-files/fi/FiMail";

export default function Footer() {
  return (
    <footer>
      <div>
        <h1>The Voice Company</h1>
      </div>
      <div className="footer-links">
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaLinkedinIn />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaWhatsapp />
        </a>
        <a href="#">
          <FiMail />
        </a>
      </div>
    </footer>
  );
}
