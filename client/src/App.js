import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Main } from "./components/main/Main";
import { Project } from "./components/project/Project.js";
import { Footer } from "./components/Footer.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/project/:id" component={Project} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
