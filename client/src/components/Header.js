import React from "react";

export const Header = () => {
  const navToggle = e => {
    e.preventDefault();
    document.body.classList.toggle("nav-open");
  };

  const menuClose = e => {
    document.body.classList.remove("nav-open");
  };

  return (
    <header>
      <div className="logo">
        <h1 className="header__title">&lt;devlee&gt;</h1>
      </div>
      <button
        onClick={navToggle}
        className="nav-toggle"
        aria-label="toggle navigation"
      >
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" onClick={menuClose} className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" onClick={menuClose} className="nav__link">
              What I do
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" onClick={menuClose} className="nav__link">
              About Me
            </a>
          </li>
          <li className="nav__item">
            <a href="#work" onClick={menuClose} className="nav__link">
              My Work
            </a>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
};
