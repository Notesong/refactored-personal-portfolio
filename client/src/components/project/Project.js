import React from "react";

import { Header } from "./ProjectHeader.js";
import { Title } from "./Title.js";

const projectDescriptions = [
  {
    projectTitle: "Tipsease",
    projectDesc: "Tip your server in three easy and secure steps.",
    projectTechStack: "Built using HTML, LESS/CSS, and Javascript.",
    projectLink: "https://tipsease-buildweek.github.io/Lee-UI/",
    projectGithubRepo: "https://github.com/Tipsease-Buildweek/Lee-UI",
    projectHighlights: [
      "Designed and coded the landing-page.",
      "Used responsive LESS/CSS and JavaScript to provide the layout and functionality."
    ]
  },
  {
    projectTitle: "Lambda Times",
    projectDesc: "Displays a list of articles gathered through an API request.",
    projectTechStack: "Built using JavaScript and the Axios library",
    projectLink:
      "https://notesong.github.io/Sprint-Challenge-Applied-Javascript/",
    projectGithubRepo:
      "http://https://github.com/Notesong/Sprint-Challenge-Applied-Javascript",
    projectHighlights: [
      "Coded the header, topics section, and article boxes.",
      "DOM manipulation with events and HTTP GET requests.",
      "Accesses API to deliver content for article boxes.",
      "Components used throughout code for reusability for API requests."
    ]
  },
  {
    projectTitle: "Celebrity Dead or Alive",
    projectDesc: "Test your celebrity knowledge.",
    projectTechStack: "Built using React.",
    projectLink:
      "https://notesong.github.io/Sprint-Challenge-Applied-Javascript/",
    projectGithubRepo:
      "http://https://github.com/Notesong/Sprint-Challenge-Applied-Javascript",
    projectHighlights: [
      "Coded navagation and quiz in React.",
      "Uses axios calls for the API.",
      "Designed standard website and mobile version using CSS."
    ]
  }
];

export const Project = ({ id }) => {
  return (
    <main>
      <Header />
      <Title />
    </main>
  );
};
