import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  const { adClass = "footer-2", container = "container" } = props;

  return (
    <footer className={`footer ${adClass}`}>
      <div className="footer-bottom">
        <div className={container}>
          <p className="footer-copyright">
            Copyright © {new Date().getFullYear()} Molla Store. All Rights
            Reserved.
          </p>
          <ul className="footer-menu">
            <li>
              <Link to="#">Terms Of Use</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
          </ul>

          <div className="social-icons social-icons-color">
            <a
              href="https://www.facebook.com"
              className="social-icon social-facebook"
              rel="noopener noreferrer"
              title="Facebook"
              target="_blank"
            >
              <i className="icon-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              className="social-icon social-twitter"
              rel="noopener noreferrer"
              title="Twitter"
              target="_blank"
            >
              <i className="icon-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              className="social-icon social-instagram"
              rel="noopener noreferrer"
              title="Instagram"
              target="_blank"
            >
              <i className="icon-instagram"></i>
            </a>
            <a
              href="https://youtube.com"
              className="social-icon social-youtube"
              rel="noopener noreferrer"
              title="Youtube"
              target="_blank"
            >
              <i className="icon-youtube"></i>
            </a>
            <a
              href="https://pinterest.com"
              className="social-icon social-pinterest"
              rel="noopener noreferrer"
              title="Pinterest"
              target="_blank"
            >
              <i className="icon-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
