import React from "react";
import shortid from "shortid";

export const Description = ({
  techStack,
  desc,
  link,
  github,
  highlights,
  additionalDesc,
  imgHighlight,
  imgHighlightText,
  imgAddDesc,
  imgAddDescText
}) => {
  return (
    <div className="portfolio-item-individual">
      <h3>Skills I used</h3>
      <p>{techStack}</p>
      <h3>What the website is about</h3>
      <p>{desc}</p>
      <h3>What I did:</h3>
      <ul>
        {highlights.map(highlight => {
          return <li key={shortid.generate()}>{highlight}</li>;
        })}
      </ul>
      {imgHighlight ? <img src={imgHighlight} alt={imgHighlightText} /> : ""}
      <p>{additionalDesc}</p>
      {imgAddDesc ? <img src={imgAddDesc} alt={imgAddDescText} /> : ""}
      <h3>Links</h3>
      <p className="portfolio-item-individual--links">
        <a href={link}>Website</a> | <a href={github}>Github Repository</a>
      </p>
    </div>
  );
};
