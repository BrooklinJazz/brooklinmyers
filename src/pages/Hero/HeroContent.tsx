import React from "react";
import { HeroContainer } from "./HeroContainer";
import { HeroInfo } from "./HeroInfo";
import styled from "styled-components"
import { HeroImage } from "./HeroImage";

const Flex = styled.div`
  flex: 1;
`;
export const HeroContent = () => {
  return (
    <HeroContainer>
      <Flex>
        <HeroInfo />
      </Flex>
      <Flex>
        <HeroImage/>
      </Flex>
    </HeroContainer>
  );
};
