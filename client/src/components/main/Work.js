import React from "react";
import { Link } from "react-router-dom";

import port1 from "../../images/tipsease.jpg";
import port2 from "../../images/deadoralive.jpg";

export const Work = () => {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My Work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>
      <div className="portfolio">
        <Link to={`/project/0`} className="portfolio__item">
          <img src={port1} alt="Tipsease" className="portfolio__img" />
        </Link>
        <Link to={`/project/1`} className="portfolio__item">
          <img
            src={port2}
            alt="Celebrity Dead or Alive"
            className="portfolio__img"
          />
        </Link>
      </div>
    </section>
  );
};
