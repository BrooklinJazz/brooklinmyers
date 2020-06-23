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
        // @ts-ignore TODO configure typescript to not crash
        ref={ProjectsRef}
        data-test-id={TestIds.ProjectPage}
      >
        Projects
      </Page>
      <Page
        // @ts-ignore TODO configure typescript to not crash
        ref={PhilosophyRef}
        data-test-id={TestIds.PhilosophyPage}
      >
        Philosophy
      </Page>
      <Page
        // @ts-ignore TODO configure typescript to not crash
        ref={SkillsRef}
        data-test-id={TestIds.SkillsPage}
      >
        Skills
      </Page>
      <Page
        // @ts-ignore TODO configure typescript to not crash
        ref={ContactRef}
        data-test-id={TestIds.ContactPage}
      >
        Contact
      </Page>
    </NavigationContext.Provider>
  );
};
