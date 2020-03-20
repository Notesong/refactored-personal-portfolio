import React from "react";
import { Link } from "react-router-dom";

import port1 from "../images/tipsease.jpg";
import port2 from "../images/deadoralive.jpg";
import port3 from "../images/lambda-times.jpg";

export const Work = () => {
  return (
    <section className="my-work" id="work">
      <header>
        <h2 className="section__title">My Work</h2>
        <p className="section__subtitle"></p>
      </header>
      <div className="portfolio">
        <Link to={`/`}>
          <img src={port1} alt="Tipsease" className="portfolio__img" />
        </Link>
        <Link to={`/`}>
          <img
            src={port2}
            alt="Celebrity Dead or Alive"
            className="portfolio__img"
          />
        </Link>
        <Link to={`/`}>
          <img src={port3} alt="Lambda-Times" className="portfolio__img" />
        </Link>
        <Link to={`/`}>
          <img src={port1} alt="Tipsease" className="portfolio__img" />
        </Link>
        <Link to={`/`}>
          <img src={port1} alt="Tipsease" className="portfolio__img" />
        </Link>
      </div>
    </section>
  );
};
