import React from "react";

import { Introduction } from "./Introduction.js";
import { Services } from "./Services.js";
import { About } from "./About.js";
import { Work } from "./Work.js";

export const Main = () => {
  return (
    <main>
      <Introduction />
      <Services />
      <About />
      <Work />
    </main>
  );
};
