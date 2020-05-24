import React from "react";
import styled from "styled-components";
import { Language as LangIcon, DesktopMac, Security } from "styled-icons/material";
import { Server } from "styled-icons/fa-solid";
import { TabletMobileCombo, Cycle } from "styled-icons/entypo";
import { Skill } from "./Skill";
import { LanguagesList, ClientList, TestingList, BackendList, DeployList } from "../../constants/skills";
// todo check the template column sizes
const SkillsContainer = styled.div`
  display: grid;
  /* adding the additional middle templates */
  /* keeps client & deploy on different rows so they don't */
  /* affect eachothers height */
  grid-template-areas:
    "client backend"
    "testing languages"
    "deploy deploy";

  @media (min-width: 800px) {
    column-gap: 20px;
    grid-template-areas:
      "languages testing backend"
      "client testing backend"
      "client testing deploy"
      ". testing deploy";
  }
`;

const Languages = () => {
  return (<Skill area={"languages"} icons={[LangIcon]} list={LanguagesList} />);
};

const Client = () => {
  return (<Skill area={"client"} icons={[DesktopMac, TabletMobileCombo]} list={ClientList} />);
};

const Testing = () => {
  return (<Skill area={"testing"} icons={[Security]} list={TestingList} />);
};

const Backend = () => {
  return (<Skill area={"backend"} icons={[Server]} list={BackendList} />);
};

const Deploy = () => {
  return <Skill area={"deploy"} icons={[Cycle]} list={DeployList} />;
};

export const DesktopSkills = () => {
  return (<SkillsContainer>
    <Languages />
    <Client />
    <Testing />
    <Backend />
    <Deploy />
  </SkillsContainer>);
};
