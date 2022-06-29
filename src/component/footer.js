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
        {" "}
        <a
          href="http://twitter.com/fadayopaul"
          to="route"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitterSquare />
        </a>
      </span>

      <span className="facebook-icon">
        <a
          href="http://facebook.com/fadayo"
          to="route"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare />
        </a>
      </span>

      <span className="instagram-icon">
        <a
          href="http://instagram.com/paulfadayo"
          to="route"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare />
        </a>
      </span>

      <span className="github-icon">
        <a
          href="http://github.com/fadayopaul"
          to="route"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>
      </span>
    </footer>
  );
}
