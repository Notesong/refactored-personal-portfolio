import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/Header.js";
import { Main } from "./components/main/Main.js";
import { Project } from "./components/project/Project.js";
import { Footer } from "./components/Footer.js";

import { GlobalProvider } from "./context/GlobalState";

import "./styles.css";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/project/:id" component={Project} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
