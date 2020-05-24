import React from "react";
import { Page } from "../../components/Page";
import { translations } from "../../constants/translations";
import { Skills } from "./Skills";
import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 300;
`;

const Spacer = styled.div<{size: number}>`
  width: 10px;
  height: ${props => props.size}px;
`;

const SubTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-weight: 300;
`;

export const Skillset = () => {
  return (
    <Page>
      <Title>{translations.JOB_TITLE}</Title>
      <Spacer size={10}/>
      <SubTitle>{translations.JOB_SUBTITLE}</SubTitle>
      <Spacer size={30}/>
      <Skills />
    </Page>
  );
};
