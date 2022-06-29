import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <a href="mailto:paulfadayo@yahoo.com">
        <button className="email">
          <i>
            <FaEnvelope />
          </i>
          Email
        </button>
      </a>

      <a href="https://www.linkedin.com/in/fadayopaul/">
        <button className="linkedin">
          <i>
            <FaLinkedin />
          </i>
          LinkedIn
        </button>
      </a>
    </div>
  );
}
