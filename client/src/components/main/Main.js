import React, { useEffect, useContext } from "react";

import { Introduction } from "./Introduction.js";
import { Services } from "./Services.js";
import { About } from "./About.js";
import { Work } from "./Work.js";

import { GlobalContext } from "../../context/GlobalState";

export const Main = () => {
  const { setIsProject } = useContext(GlobalContext);

  useEffect(() => {
    setIsProject(false);
    const html = document.documentElement;
    html.classList.add("smooth-scroll");
  }, []);

  return (
    <main>
      <Introduction />
      <Services />
      <About />
      <Work />
    </main>
  );
};
