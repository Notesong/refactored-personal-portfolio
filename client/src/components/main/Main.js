import React from "react";

import { Header } from "./MainHeader.js";
import { Introduction } from "./Introduction.js";
import { Services } from "./Services.js";
import { About } from "./About.js";
import { Work } from "./Work.js";

export const Main = () => {
  return (
    <main>
      <Header />
      <Introduction />
      <Services />
      <About />
      <Work />
    </main>
  );
};
