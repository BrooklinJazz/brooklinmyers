import React from "react";
import { useHistory } from "react-router-dom";
import { TestIds } from "../../testIds";
import styled from "styled-components";
import {
  CodeIcon,
  PhilosophyIcon,
  SkillsIcon,
  ContactIcon,
} from "../../components/icons/Icons";

const Container = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  bottom: 0;
  width: 100vw;
  height: max-content;
  padding: 10px 0;
  box-shadow: 0 0px 10px 2px lightgray;
`;

const IconContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 70px;
`;

interface INavIconProps {
  onClick: () => any;
  "data-test-id": string;
  Icon: any;
}

const NavText = styled.h1`
  font-size: 1em;
  padding: 0;
  margin: 0;
  font-weight: normal;
`;

const NavIcon = ({ Icon = CodeIcon, children, ...rest }) => {
  return (
    <IconContainer {...rest}>
      <Icon size={20} />
      <NavText>{children}</NavText>
    </IconContainer>
  );
};

export const TabNavigation = () => {
  let { push } = useHistory();

  return (
    <Container>
      <NavIcon
        Icon={CodeIcon}
        onClick={() => push("/projects")}
        data-test-id={TestIds.NavigationProjects}
      >
        Projects
      </NavIcon>
      <NavIcon
        Icon={PhilosophyIcon}
        onClick={() => push("/philosophy")}
        data-test-id={TestIds.NavigationPhilosophy}
      >
        Philosophy
      </NavIcon>
      <NavIcon
        Icon={SkillsIcon}
        onClick={() => push("/skills")}
        data-test-id={TestIds.NavigationSkills}
      >
        Skills
      </NavIcon>
      <NavIcon
        Icon={ContactIcon}
        onClick={() => push("/contact")}
        data-test-id={TestIds.NavigationContact}
      >
        Contact
      </NavIcon>
    </Container>
  );
};
