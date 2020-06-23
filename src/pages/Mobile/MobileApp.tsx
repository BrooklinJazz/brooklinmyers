import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TestIds } from "../../testIds";
import { Navigation } from "../Desktop/Hero/Navigation";
import { TabNavigation } from "./TabNavigation";

const Home = () => {
  return <div>home</div>;
};

const Projects = () => {
  return <div data-test-id={TestIds.ProjectPage}>Projects</div>;
};

const Philosophy = () => {
    return <div data-test-id={TestIds.PhilosophyPage}>Philisophy</div>;
}

const Skills = () => {
    return <div data-test-id={TestIds.SkillsPage}>Skills</div>;
}

const Contact = () => {
    return <div data-test-id={TestIds.ContactPage}>ContactPage</div>;
}

export const MobileApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/projects"} component={Projects} />
        <Route path={"/philosophy"} component={Philosophy} />
        <Route path={"/skills"} component={Skills} />
        <Route path={"/contact"} component={Contact} />
      </Switch>
      <TabNavigation />
    </Router>
  );
};
