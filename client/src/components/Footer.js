import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <a href="mailto:lee.ellyn.damien@gmail.com" className="footer__link">
        lee.damien@protonmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com/Notesong">
            <i className="fab fa-github"></i>{" "}
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.linkedin.com/in/lee-damien/"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};
