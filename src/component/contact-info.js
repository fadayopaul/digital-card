import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <button className="email">
        <i>
          <FaEnvelope />
        </i>
        Email
      </button>
      <button className="linkedin">
        <i>
          <FaLinkedin />
        </i>
        LinkedIn
      </button>
    </div>
  );
}
