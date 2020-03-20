import React from "react";

import { Header } from "./ProjectHeader.js";
import { Title } from "./Title.js";
import { Description } from "./Description.js";

const projectDescriptions = [
  {
    Title: "Tipsease",
    Desc: "Tip your server in three easy and secure steps.",
    TechStack: "Built using HTML, LESS/CSS, and Javascript.",
    Link: "https://tipsease-buildweek.github.io/Lee-UI/",
    Github: "https://github.com/Tipsease-Buildweek/Lee-UI",
    Highlights: [
      "Designed and coded the landing-page.",
      "Used responsive LESS/CSS and JavaScript to provide the layout and functionality."
    ],
    Img: "/images/tipsease.jpg"
  },
  {
    Title: "Lambda Times",
    Desc: "Displays a list of articles gathered through an API request.",
    TechStack: "Built using JavaScript and the Axios library",
    Link: "https://notesong.github.io/Sprint-Challenge-Applied-Javascript/",
    Github:
      "http://https://github.com/Notesong/Sprint-Challenge-Applied-Javascript",
    Highlights: [
      "Coded the header, topics section, and article boxes.",
      "DOM manipulation with events and HTTP GET requests.",
      "Accesses API to deliver content for article boxes.",
      "Components used throughout code for reusability for API requests."
    ],
    Img: "/images/lambda-times.jpg"
  },
  {
    Title: "Celebrity Dead or Alive",
    Desc: "Test your celebrity knowledge.",
    TechStack: "Built using React.",
    Link: "https://notesong.github.io/Sprint-Challenge-Applied-Javascript/",
    Github:
      "http://https://github.com/Notesong/Sprint-Challenge-Applied-Javascript",
    Highlights: [
      "Coded navagation and quiz in React.",
      "Uses axios calls for the API.",
      "Designed standard website and mobile version using CSS."
    ],
    Img: "/images/deadoralive.jpg"
  }
];

export const Project = props => {
  const id = props.match.params.id;

  const title = projectDescriptions[id].Title;
  const desc = projectDescriptions[id].Desc;
  const techStack = projectDescriptions[id].TechStack;
  const link = projectDescriptions[id].Link;
  const github = projectDescriptions[id].Github;
  const highlights = projectDescriptions[id].Highlights;
  const img = projectDescriptions[id].Img;

  return (
    <main>
      <Header />
      <Title title={title} img={img} />
      <Description
        desc={desc}
        techStack={techStack}
        link={link}
        github={github}
        highlights={highlights}
      />
    </main>
  );
};
