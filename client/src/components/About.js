import React from "react";

import portrait from "../images/Lee-portrait.jpg";

export const About = () => {
  return (
    <section className="about-me" id="about">
      <header>
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about"></p>
      </header>
      <div className="about-me__body">
        <p></p>
        <p></p>
      </div>
      <img src={portrait} alt="a portrait of me" />
    </section>
  );
};
