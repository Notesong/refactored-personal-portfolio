import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>&lt;DevLee&gt;</h1>
      </div>
      <button className="nav-toggle" aria-label="toggle navigation">
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to={`/#home`} className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to={`/#services`} className="nav__link">
              What I do
            </Link>
          </li>
          <li className="nav__item">
            <Link to={`/#about`} className="nav__link">
              About Me
            </Link>
          </li>
          <li className="nav__item">
            <Link to={`/#work`} className="nav__link">
              My Work
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
