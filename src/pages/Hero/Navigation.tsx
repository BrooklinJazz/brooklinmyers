import React from "react";
import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { Code } from "@styled-icons/entypo";
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

const NavIcon = ({ Icon = Code, content = "" }) => {
  return (
    <NavIconStyleWrapper>
      <Icon />
      <NavText>{content}</NavText>
    </NavIconStyleWrapper>
  );
};

const NavContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Navigation = () => {
  return (
    <NavContainer>
      <NavIcon Icon={Code} content={"Projects"} />
      <NavIcon content={"Philosophy"} />
      <NavIcon content={"Skills"} />
      <NavIcon content={"Contact"} />
    </NavContainer>
  );
};
