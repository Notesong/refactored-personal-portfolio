import React from "react";

import portrait from "../../images/lee-portrait.jpg";

export const Introduction = () => {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Lee Damien</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        full stack web dev
      </p>
      <img src={portrait} alt="a portrait of me" className="intro__img" />
    </section>
  );
};
