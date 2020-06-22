import React from "react";
import { Hero } from "./pages/Hero";
import { Page } from "./components/Page";



function App() {
  return (
    <>
      <Hero />
      <Page>Projects</Page>
      <Page>Philosophy</Page>
      <Page>Skills</Page>
      <Page>Contact</Page>
    </>
  );
}

export default App;
