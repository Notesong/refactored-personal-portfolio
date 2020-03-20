import React from "react";

import portrait from "../../images/lee-portrait.jpg";

export const Title = ({ image, title }) => {
  return (
    <section className="intro">
      <h1 className="section__title section__title--intro">
        The title <strong>of my project</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        full stack web dev
      </p>
      <img src={portrait} alt="a portrait of me" className="intro__img" />
    </section>
  );
};
