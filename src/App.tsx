import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Philosophy } from "./pages/Philosophy";
import { Skillset } from "./pages/Skillset";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/philosophy" component={Philosophy} />
        <Route exact path="/skillset" component={Skillset} />
      </Switch>
    </Router>
  );
}

export default App;
