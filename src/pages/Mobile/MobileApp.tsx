import React from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import { TestIds } from "../../testIds";
import { Navigation } from "../Desktop/Hero/Navigation";

const TabNavigation = () => {
    let {push} = useHistory();

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        bottom: 0,
        width: "100vw",
        height: 40,
        backgroundColor: "red",
      }}
    >
      <div onClick={() => push("/projects")} data-test-id={TestIds.NavigationProjects}>Projects</div>
      <div onClick={() => push("/philosophy")} data-test-id={TestIds.NavigationPhilosophy}>Philosophy</div>
      <div onClick={() => push("/skills")} data-test-id={TestIds.NavigationSkills}>Skills</div>
      <div onClick={() => push("/contact")} data-test-id={TestIds.NavigationContact}>Contact</div>
    </div>
  );
};

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
