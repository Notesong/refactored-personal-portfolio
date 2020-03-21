import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <a href="mailto:lee.ellyn.damien@gmail.com" className="footer__link">
        lee.damien@protonmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com">
            <i className="fab fa-github"></i>{" "}
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com">
            <i className="fab fa-dribbble"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com">
            <i className="fab fa-codepen"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};
