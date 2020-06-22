import React from "react";
import { Navigation } from "./Navigation";
import { CallToAction } from "./CallToAction";
import { JobTitle } from "./JobTitle";
import { Name } from "./Name";

export const HeroInfo = () => {
    
  return (
    <>
      <Name />
      <JobTitle />
      <CallToAction />
      <Navigation />
    </>
  );
};
