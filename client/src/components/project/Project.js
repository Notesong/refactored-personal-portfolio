import React, { useEffect, useContext } from "react";

import { Title } from "./Title.js";
import { Description } from "./Description.js";

import { GlobalContext } from "../../context/GlobalState";

export const Project = props => {
  const { pds, setIsProject } = useContext(GlobalContext);

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
