import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
