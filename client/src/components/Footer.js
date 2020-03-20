import React from "react";
import { Link } from "react-router-dom";

export const Work = () => {
  return (
    <footer>
      <a href="mailto:lee.ellyn.damien@gmail.com" className="footer__link">
        lee.ellyn.damien@gmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com">
            a
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com">
            b
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com">
            c
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com">
            d
          </a>
        </li>
      </ul>
    </footer>
  );
};
