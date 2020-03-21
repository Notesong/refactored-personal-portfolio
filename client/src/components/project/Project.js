import React from "react";

import { Header } from "./ProjectHeader.js";
import { Title } from "./Title.js";
import { Description } from "./Description.js";

const projectDescriptions = [
  {
    TitleStrong: "Tipsease",
    Desc: "Tip your server in three easy and secure steps.",
    TechStack: "HTML, LESS/CSS, Javascript",
    Link: "https://tipsease-buildweek.github.io/Lee-UI/",
    Github: "https://github.com/Tipsease-Buildweek/Lee-UI",
    Highlights: [
      "Designed and coded the landing-page.",
      "Used LESS/CSS and JavaScript to create the layout and functionality.",
      "Designed desktop and mobile versions."
    ],
    AdditionalDesc:
      "The Tipsease landing page was my first project for my first build week at Lambda School.  I worked on a team with five other people to create an landing page that could be used with the React app my teammates created. After coding the landing page, I also created the logo and favicon.  Overall, it was a great learning experience both for polishing up my HTML, CSS, and JavaScript skills, and also for learning the in's and out's of working with a team, using Zoom Meetings, GitHub, Trello, and Slack as our bases for communcation.",
    Img: "/images/tipsease.jpg"
  },
  {
    Title: "Celebrity",
    TitleStrong: "Dead or Alive",
    Desc:
      "Tests your celebrity knowledge on whether a celebrity is alive or dead.",
    TechStack:
      "React, API calls, Authentication, Formik, Context API, HTML, CSS, JavaScript",
    Link: "https://notesong.github.io/Sprint-Challenge-Applied-Javascript/",
    Github:
      "http://https://github.com/Notesong/Sprint-Challenge-Applied-Javascript",
    Highlights: [
      "Used React-Router-Dom for the navagation",
      "Coded the timed quiz that sends user information back to the server and displays stats to the user using context api.",
      "Created login and signup pages with Formik and authentication",
      "Used Axios with the API.",
      "Designed desktop and mobile versions."
    ],

    Img: "/images/deadoralive.jpg"
  }
];

export const Project = props => {
  const id = props.match.params.id;

  // title info
  const title = projectDescriptions[id].Title;
  const titleStrong = projectDescriptions[id].TitleStrong;
  const img = projectDescriptions[id].Img;

  // Short descriptors
  const desc = projectDescriptions[id].Desc;
  const techStack = projectDescriptions[id].TechStack;

  // Highlights section
  const highlights = projectDescriptions[id].Highlights;
  const imgHighlight = projectDescriptions[id].ImgHighlight;
  const imgHighlightText = projectDescriptions[id].ImgHighlightText;

  // Additional Description section
  const additionalDesc = projectDescriptions[id].AdditionalDesc;
  const imgAddDesc = projectDescriptions[id].ImgAddDesc;
  const imgAddDescText = projectDescriptions[id].ImgAddDescText;

  // links section
  const link = projectDescriptions[id].Link;
  const github = projectDescriptions[id].Github;

  return (
    <main>
      <Header />
      <Title title={title} titleStrong={titleStrong} img={img} />
      <Description
        techStack={techStack}
        desc={desc}
        link={link}
        github={github}
        highlights={highlights}
        imgHighlight={imgHighlight}
        imgHighlightText={imgHighlightText}
        additionalDesc={additionalDesc}
        imgAddDesc={imgAddDesc}
        imgAddDescText={imgAddDescText}
      />
    </main>
  );
};
