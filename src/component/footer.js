import React from "react";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <span className="twitter-icon">
        <FaTwitterSquare />
      </span>

      <span className="facebook-icon">
        <FaFacebookSquare />
      </span>

      <span className="instagram-icon">
        <FaInstagramSquare />
      </span>

      <span className="github-icon">
        <FaGithubSquare />
      </span>
    </footer>
  );
}
