import React from "react";

export const Services = () => {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3>Front-end React Development</h3>
          <p>
            From standard HTML, CSS, and JavaScript to single page React Apps, I
            create mobile friendly websites that are easily customizable and
            maintainable.
          </p>
        </div>
        <div className="service">
          <h3>Website Refactoring</h3>
          <p>
            Restructuring existing code brings a website up to modern standards
            while keeping and adding new functionality. Refactoring old code is
            a puzzle, an adventure, a fun one at that.
          </p>
        </div>
      </div>
      <a href="#work" className="btn">
        My Work
      </a>
    </section>
  );
};
