import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAppDispatch } from "./store";
import { useSelector } from "react-redux";
import { selectContributions } from "./store/selectors/git";
import styled from "styled-components";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";



function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
