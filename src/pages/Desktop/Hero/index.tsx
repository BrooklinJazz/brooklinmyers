import React from "react";
import styled from "styled-components";
import { HeroContent } from "./HeroContent";
import { Page } from "../../../components/Page";

const HeroPage = styled(Page)`
  display: flex;
  align-items: center;
  justify-content: center;
`

interface IProps {
  goToProject: () => any;
}

export const Hero = () => {
  return (
    <HeroPage>
      <HeroContent />
    </HeroPage>
  );
};
