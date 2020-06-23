import React from "react";
import { Code, Heart, Mail } from "@styled-icons/entypo";
import { Wrench } from "@styled-icons/foundation";
import styled from "styled-components";

const base = `
color: white;
background-color: black;
padding: 5px;
border-radius: 50%;
`;

export const CodeIcon = styled(Code)`
  ${base}
`;

// TODO change icons
export const PhilosophyIcon = styled(Heart)`
  ${base}
`;

export const SkillsIcon = styled(Wrench)`
  ${base}
`;

export const ContactIcon = styled(Mail)`
  ${base}
`;
