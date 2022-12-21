import React from "react";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";

export default function Footer() {
  return (
    <footer>
      <div>
        <h1>The Voice Company</h1>
      </div>
      <div>
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaLinkedinIn />
        </a>
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
      </div>
    </footer>
  );
}
