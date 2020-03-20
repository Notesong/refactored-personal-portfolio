import React from "react";

export const Title = ({ title, img }) => {
  return (
    <section className="intro">
      <h1 className="section__title section__title--intro">{title}</h1>
      <p className="section__subtitle section__subtitle--intro">&nbsp;</p>
      <img src={img} alt={title} className="intro__img" />
    </section>
  );
};
