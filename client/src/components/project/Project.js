import React, { useEffect, useContext } from "react";

import { Title } from "./Title.js";
import { Description } from "./Description.js";

import { GlobalContext } from "../../context/GlobalState";

const pds = [
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
    Link: "https://celebritydeadoralive5.netlify.com",
    Github: "https://github.com/Celebrity-Dead-or-Alive-5/front-end",
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
  const { setIsProject } = useContext(GlobalContext);

  useEffect(() => {
    setIsProject(true);
    const html = document.documentElement;
    html.classList.remove("smooth-scroll");
    window.scrollTo(0, 0);
  }, []);

  const id = props.match.params.id;

  // title info
  const title = pds[id].Title;
  const titleStrong = pds[id].TitleStrong;
  const img = pds[id].Img;

  // Short descriptors
  const desc = pds[id].Desc;
  const techStack = pds[id].TechStack;

  // Highlights section
  const highlights = pds[id].Highlights;
  const imgHighlight = pds[id].ImgHighlight;
  const imgHighlightText = pds[id].ImgHighlightText;

  // Additional Description section
  const additionalDesc = pds[id].AdditionalDesc;
  const imgAddDesc = pds[id].ImgAddDesc;
  const imgAddDescText = pds[id].ImgAddDescText;

  // links section
  const link = pds[id].Link;
  const github = pds[id].Github;

  return (
    <>
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
    </>
  );
};
