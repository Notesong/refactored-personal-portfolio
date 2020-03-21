import React, { useContext } from "react";

import { MainNav } from "./main/MainNav.js";
import { ProjectNav } from "./project/ProjectNav.js";

import { GlobalContext } from "../context/GlobalState";

export const Header = () => {
  const { isProject } = useContext(GlobalContext);

  return (
    <header>
      <div className="logo">
        <h1 className="header__title">&lt;devlee&gt;</h1>
      </div>
      {isProject ? <ProjectNav /> : <MainNav />}
    </header>
  );
};
