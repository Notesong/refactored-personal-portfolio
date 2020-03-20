import React from "react";

export const Description = ({ desc, techStack, link, github, highlights }) => {
  return (
    <div className="portfolio-item-individual">
      <p>{techStack}</p>
      <p>{desc}</p>
    </div>
  );
};
