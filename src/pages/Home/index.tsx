import React from "react";
import styled from "styled-components";
import {Heart} from "@styled-icons/entypo/Heart";
import {Code} from "@styled-icons/entypo/Code";
import {Tools} from "@styled-icons/entypo/Tools";
const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.h2`
  font-weight: 200;
  font-size: 14px;
  margin: 0;
  padding: 0;
`;

const Brand = styled.h1.attrs(props => ({
  children: "Brooklin Myers"
}))`
  font-weight: 200;
  font-size: 24px;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`
// TODO define Icon type
type Icon = any
const TextIcon = ({Icon, children, testId}: {Icon: any, children: string, testId: string}) => {
    return (
      <IconContainer data-test-id={testId}>
        <Text>{children}</Text>
        <Icon size={25}/>
      </IconContainer>
    )
}

const Projects = () => <TextIcon testId="projectsIcon" Icon={Code}>projects</TextIcon>;
const Philosophy = () => <TextIcon testId="philosophyIcon" Icon={Heart}>philosophy</TextIcon>;
const Skillset = () => <TextIcon testId="skillsetIcon" Icon={Tools}>skillset</TextIcon>;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
`;

const Links = () => {
  return (
    <LinksContainer>
      <Projects />
      <Philosophy />
      <Skillset />
    </LinksContainer>
  );
};

export const Home = () => {
  return (
    <Container>
      <Brand />
      <Links />
    </Container>
  );
};
