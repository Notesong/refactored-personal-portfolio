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
      <nav className="nav--project">
        <a href="/#work" className="nav__link--project">
          <i class="fas fa-arrow-left"></i> Back to My Work
        </a>
      </nav>
    </header>
  );
};
