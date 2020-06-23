import React, { useContext } from "react";
import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { Code } from "@styled-icons/entypo";
import { TestIds } from "../../testIds";
import {NavigationContext} from "../../App"

const NavIconStyleWrapper = styled.div`
  ${StyledIconBase} {
    height: 2vw;
    border-radius: 100px;
    padding: 5px;
    color: white;
    background-color: black;
  }
  display: flex;
  flex: 0 50%;
  align-items: center;
`;

const NavText = styled.h4`
  font-size: 1.5vw;
  margin-left: 10px;
`;

const NavIcon = ({ Icon = Code, content = "", ...rest }) => {
  return (
    <NavIconStyleWrapper {...rest}>
      <Icon />
      <NavText>{content}</NavText>
    </NavIconStyleWrapper>
  );
};

const NavContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);

export const Navigation = () => {
  const {ProjectsRef, SkillsRef, ContactRef, PhilosophyRef} = useContext(NavigationContext)
  return (
    <NavContainer>
      <NavIcon onClick={() => scrollToRef(ProjectsRef)} data-test-id={TestIds.NavigationProjects} Icon={Code} content={"Projects"} />
      <NavIcon onClick={() => scrollToRef(PhilosophyRef)} data-test-id={TestIds.NavigationPhilosophy} content={"Philosophy"} />
      <NavIcon onClick={() => scrollToRef(SkillsRef)} data-test-id={TestIds.NavigationSkills} content={"Skills"} />
      <NavIcon onClick={() => scrollToRef(ContactRef)} data-test-id={TestIds.NavigationContact} content={"Contact"} />
    </NavContainer>
  );
};
