import React, { useRef } from "react";
import { Hero } from "./Hero";
import { Page } from "../../components/Page";
import { TestIds } from "../../testIds";

interface INavigationContext {
  ProjectsRef?: React.MutableRefObject<undefined>;
  PhilosophyRef?: React.MutableRefObject<undefined>;
  SkillsRef?: React.MutableRefObject<undefined>;
  ContactRef?: React.MutableRefObject<undefined>;
}

export const NavigationContext = React.createContext<INavigationContext>({});

export const DesktopApp = () => {
  const ProjectsRef = useRef();
  const PhilosophyRef = useRef();
  const SkillsRef = useRef();
  const ContactRef = useRef();
  return (
    <NavigationContext.Provider
      value={{ ProjectsRef, PhilosophyRef, SkillsRef, ContactRef }}
    >
      <Hero />
      <Page
        ref={ProjectsRef as any}
        data-test-id={TestIds.ProjectPage}
      >
        Projects
      </Page>
      <Page
        ref={PhilosophyRef as any}
        data-test-id={TestIds.PhilosophyPage}
      >
        Philosophy
      </Page>
      <Page
        ref={SkillsRef as any}
        data-test-id={TestIds.SkillsPage}
      >
        Skills
      </Page>
      <Page
        ref={ContactRef as any}
        data-test-id={TestIds.ContactPage}
      >
        Contact
      </Page>
    </NavigationContext.Provider>
  );
};
