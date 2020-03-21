import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/Header.js";
import { Main } from "./components/main/Main.js";
import { Project } from "./components/project/Project.js";
import { Footer } from "./components/Footer.js";

import { GlobalProvider } from "./context/GlobalState";

import "./styles.css";

function App() {
  function handleUpdate() {
    let { action } = this.state.location;

    if (action === "PUSH") {
      window.scrollTo(0, 0);
    }
  }

  return (
    <GlobalProvider>
      <Router onUpdate={handleUpdate}>
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
