import React from "react";

import portrait from "../../images/lee-portrait.jpg";

export const About = () => {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        developer based out of Virginia Beach, VA
      </p>
      <div className="about-me__body">
        <p>
          I'm a full-stack web developer and build web applications with HTML,
          CSS, JavaScript, React, and Redux. I'm currently heading into
          everything Back-end with Node.js, programming back-ends and API's with
          special consideration for security.
        </p>
        <p>
          I'm also a fiction writer with over a million million words to date
          and read my heart out. When I'm not programming, anyway.
        </p>
      </div>
      <img src={portrait} alt="a portrait of me" className="about-me__img" />
    </section>
  );
};
